import { createHash } from "node:crypto";
import { validateInquiry, inquiryText } from "@/lib/inquiry";
import { company } from "@/lib/site";
export const runtime = "nodejs";
const attempts = new Map<string, { count: number; expires: number }>();
function limited(key: string) {
  const now = Date.now();
  for (const [id, entry] of attempts)
    if (entry.expires <= now) attempts.delete(id);
  const entry = attempts.get(key);
  if (entry && entry.expires > now) {
    entry.count++;
    return entry.count > 5;
  }
  if (attempts.size >= 5000) return true;
  attempts.set(key, { count: 1, expires: now + 600000 });
  return false;
}
export async function POST(request: Request) {
  const json = (error: string, status: number) =>
    Response.json(
      { error },
      { status, headers: { "Cache-Control": "no-store" } },
    );
  const origin = request.headers.get("origin");
  const allowed = process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin
    : new URL(request.url).origin;
  if (!origin || origin !== allowed)
    return json(
      "This request could not be verified. Please reload the form.",
      403,
    );
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return json("Please submit the inquiry form.", 415);
  if (Number(request.headers.get("content-length") || 0) > 16000)
    return json("Your inquiry is too long.", 413);
  let raw = "";
  try {
    const reader = request.body?.getReader();
    if (!reader) return json("No inquiry was provided.", 400);
    const decoder = new TextDecoder();
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16000) {
        await reader.cancel();
        return json("Your inquiry is too long.", 413);
      }
      raw += decoder.decode(value, { stream: true });
    }
    raw += decoder.decode();
  } catch {
    return json("We could not read this inquiry.", 400);
  }
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json("Invalid inquiry format.", 400);
  }
  const result = validateInquiry(body);
  if (!result.data) return json(result.error!, 400);
  if (!process.env.RESEND_API_KEY || !process.env.INQUIRY_FROM_EMAIL)
    return json(
      "Online sending is not available. Please use the email draft or call N&M.",
      503,
    );
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const fingerprint = createHash("sha256").update(ip).digest("hex");
  const emailKey = createHash("sha256")
    .update(result.data.email.toLowerCase())
    .digest("hex");
  if (limited(fingerprint) || limited(emailKey))
    return Response.json(
      {
        error:
          "Please wait a few minutes before sending another inquiry, or call N&M.",
      },
      {
        status: 429,
        headers: { "Retry-After": "600", "Cache-Control": "no-store" },
      },
    );
  const id = request.headers.get("idempotency-key");
  if (!id || !/^[a-f0-9-]{36}$/i.test(id))
    return json("Please reload the form and try again.", 400);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.RESEND_API_KEY,
        "Content-Type": "application/json",
        "Idempotency-Key": "inquiry-" + id,
      },
      body: JSON.stringify({
        from: process.env.INQUIRY_FROM_EMAIL,
        to: [process.env.INQUIRY_TO_EMAIL || company.email],
        reply_to: result.data.email,
        subject: "N&M website: " + result.data.kind + " inquiry",
        text: inquiryText(result.data),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok)
      return json(
        "We could not confirm sending. Please retry or use the email draft below.",
        502,
      );
    const accepted: { id?: string } = await res.json();
    if (!accepted.id)
      return json(
        "Sending could not be confirmed. Please contact N&M directly.",
        502,
      );
    return Response.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return json(
      "The email service is temporarily unavailable. Please retry or use the email draft below.",
      502,
    );
  }
}
