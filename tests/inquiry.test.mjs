import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
const compile = (file) =>
  "data:text/javascript;base64," +
  Buffer.from(
    ts
      .transpileModule(fs.readFileSync(file, "utf8"), {
        compilerOptions: {
          module: ts.ModuleKind.ESNext,
          target: ts.ScriptTarget.ES2022,
        },
      })
      .outputText.replace(/(["'])\.\/data\1/g, () =>
        JSON.stringify(compile("src/lib/data.ts")),
      ),
  ).toString("base64");
const inquiryUrl = compile("src/lib/inquiry.ts");
const { validateInquiry, inquiryText } = await import(inquiryUrl);
const valid = {
  kind: "contact",
  name: "Test Visitor",
  email: "test@example.com",
  phone: "+94 70 000 0000",
  service: "House Plans",
  location: "Kegalle",
  message: "This is a local QA inquiry, not a real project.",
  budget: "",
  method: "",
  date: "",
  time: "",
  website: "",
  consent: true,
};
test("valid inquiries are trimmed and retain their project details", () => {
  const r = validateInquiry({ ...valid, name: " Test Visitor " });
  assert.equal(r.data.name, "Test Visitor");
  assert.match(inquiryText(r.data), /House Plans/);
});
test("rejects malformed data, header injection, bots and missing consent", () => {
  for (const v of [
    null,
    [],
    { ...valid, email: "bad" },
    { ...valid, email: "x@example.com\r\nBcc: a@example.com" },
    { ...valid, website: "spam" },
    { ...valid, consent: false },
    { ...valid, message: "short" },
    { ...valid, phone: "javascript:foo" },
    { ...valid, name: "x".repeat(101) },
  ])
    assert.ok(validateInquiry(v).error);
});
test("consultations require phone, service, method and a non-past date", () => {
  assert.ok(validateInquiry({ ...valid, kind: "consultation" }).error);
  assert.ok(
    validateInquiry({
      ...valid,
      kind: "consultation",
      method: "Phone call",
      date: "2020-01-01",
    }).error,
  );
  assert.ok(
    validateInquiry({
      ...valid,
      kind: "consultation",
      method: "Phone call",
      date: "2099-01-01",
    }).data,
  );
});
test("VR interest can omit a message but still needs consent", () => {
  assert.ok(validateInquiry({ ...valid, kind: "vr", message: "" }).data);
  assert.ok(
    validateInquiry({ ...valid, kind: "vr", message: "", consent: false })
      .error,
  );
});
test("rejects impossible calendar dates", () => {
  assert.ok(
    validateInquiry({
      ...valid,
      kind: "consultation",
      method: "Phone call",
      date: "2099-02-31",
    }).error,
  );
});
test("rejects punctuation-only phones and fabricated choices without rejecting international numbers", () => {
  for (const phone of ["-------", "(...)...", "123456", "+1234567890123456"])
    assert.ok(validateInquiry({ ...valid, phone }).error);
  for (const phone of ["", "+94 (70) 486-6966", "+44 20 7946 0958"])
    assert.ok(validateInquiry({ ...valid, phone }).data);
  assert.ok(validateInquiry({ ...valid, service: "Invented service" }).error);
  assert.ok(validateInquiry({ ...valid, method: "Invented method" }).error);
  assert.ok(validateInquiry({ ...valid, service: "Not sure yet" }).data);
});
test("API validates requests, fails honestly without credentials and confirms provider acceptance only", async () => {
  const originalEnv = { ...process.env };
  const originalFetch = globalThis.fetch;
  process.env.NEXT_PUBLIC_SITE_URL = "https://nm.test";
  delete process.env.RESEND_API_KEY;
  delete process.env.INQUIRY_FROM_EMAIL;
  const siteUrl = compile("src/lib/site.ts");
  let source = ts
    .transpileModule(fs.readFileSync("src/app/api/inquiry/route.ts", "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
      },
    })
    .outputText.replace(/["']@\/lib\/inquiry["']/g, JSON.stringify(inquiryUrl))
    .replace(/["']@\/lib\/site["']/g, JSON.stringify(siteUrl));
  const { POST } = await import(
    "data:text/javascript;base64," + Buffer.from(source).toString("base64")
  );
  const request = (body = valid, headers = {}) =>
    new Request("https://nm.test/api/inquiry", {
      method: "POST",
      headers: {
        origin: "https://nm.test",
        "content-type": "application/json",
        "idempotency-key": "11111111-1111-1111-1111-111111111111",
        ...headers,
      },
      body: typeof body === "string" ? body : JSON.stringify(body),
    });
  try {
    assert.equal(
      (await POST(request(valid, { origin: "https://evil.test" }))).status,
      403,
    );
    assert.equal((await POST(request("{"))).status, 400);
    assert.equal((await POST(request("x".repeat(16001)))).status, 413);
    assert.equal((await POST(request({ ...valid, email: "bad" }))).status, 400);
    assert.equal((await POST(request())).status, 503);
    process.env.RESEND_API_KEY = "test-only";
    process.env.INQUIRY_FROM_EMAIL = "test@example.com";
    let calls = 0;
    globalThis.fetch = async (url, options) => {
      calls++;
      assert.equal(url, "https://api.resend.com/emails");
      const sent = JSON.parse(options.body);
      assert.equal(sent.reply_to, valid.email);
      assert.equal(sent.to[0], "nmengser@gmail.com");
      return Response.json({ id: "test-message" });
    };
    assert.equal((await POST(request())).status, 200);
    assert.equal(calls, 1);
    globalThis.fetch = async () =>
      Response.json({ error: "provider failure" }, { status: 500 });
    assert.equal((await POST(request())).status, 502);
    globalThis.fetch = async () => Response.json({});
    assert.equal((await POST(request())).status, 502);
    globalThis.fetch = async () => {
      throw Error("offline");
    };
    assert.equal((await POST(request())).status, 502);
    await POST(request());
    assert.equal((await POST(request())).status, 429);
  } finally {
    globalThis.fetch = originalFetch;
    for (const key of Object.keys(process.env))
      if (!(key in originalEnv)) delete process.env[key];
    Object.assign(process.env, originalEnv);
  }
});
