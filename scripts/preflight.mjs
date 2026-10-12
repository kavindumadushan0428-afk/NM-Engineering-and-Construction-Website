const origin = process.env.NEXT_PUBLIC_SITE_URL;
let valid = false;
try {
  const url = new URL(origin);
  valid =
    url.protocol === "https:" &&
    !["localhost", "example.com", "127.0.0.1"].includes(url.hostname) &&
    url.pathname === "/" &&
    !url.search &&
    !url.hash;
} catch {}
if (!valid) {
  console.error(
    "Set NEXT_PUBLIC_SITE_URL to the real public HTTPS origin before release.",
  );
  process.exitCode = 1;
}
if (
  Boolean(process.env.RESEND_API_KEY) !==
  Boolean(process.env.INQUIRY_FROM_EMAIL)
) {
  console.error(
    "Set both RESEND_API_KEY and INQUIRY_FROM_EMAIL, or leave both empty for email-draft mode.",
  );
  process.exitCode = 1;
}
if (!process.exitCode)
  console.log(
    "Release configuration valid. Forms: " +
      (process.env.RESEND_API_KEY
        ? "server email delivery"
        : "explicit email drafts"),
  );
