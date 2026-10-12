# N&M Engineering Services & Construction

A Next.js 16.3 App Router site preserving N&M’s original logo, red brand colour, service content and architectural imagery. The site includes all six service pages, the project portfolio, contact and consultation forms, and an on-demand 3D house preview.

The light design uses white glass surfaces, black typography and the logo's red (#C02729), with responsive editorial layouts, restrained pointer depth and scroll reveals. Reduced-motion preferences disable decorative movement. Service detail pages share one component to keep layouts and accessibility consistent.

## Run locally

Use Node.js 22 or newer (Node 22 or 24 LTS recommended for hosting).

```sh
npm ci
npm run dev
```

## Validate and run production

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

`npm run check-site` checks a running production server at `http://localhost:3001`. Start it with `npm start -- --port 3001`, or set `QA_ORIGIN` to another local origin. It verifies route status, headings, landmarks, metadata, internal links, rendered image URLs, security headers, assets and real 404 responses. Local QA reports are written to the ignored `artifacts` folder.

`npm run format` formats source, scripts, tests and this document. The build includes TypeScript validation; lint rules are not disabled. Existing source images remain in `public/Image`; the website serves optimized WebP derivatives with Next image optimization.

## Configure a public release

Copy `.env.example` to `.env.local` for local configuration, or set the same variables in your hosting dashboard. Never commit credentials.

| Variable               | Purpose                                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Real HTTPS origin, such as the company’s owned domain. Set before building. Used for canonical links, social cards, sitemap and structured data. |
| `RESEND_API_KEY`       | Optional server-only email API key.                                                                                                              |
| `INQUIRY_FROM_EMAIL`   | Verified sender address for the email provider; required with the API key.                                                                       |
| `INQUIRY_TO_EMAIL`     | Optional recipient override. Defaults to the existing public company email.                                                                      |

```sh
npm run preflight
npm run build
```

Preflight deliberately fails without a real HTTPS origin. Local previews without a configured domain use `noindex` and a disallowing robots file rather than publishing fabricated URLs. Rebuild after setting or changing the public domain. Preview deployments should omit the public domain and email credentials unless intentionally testing the configured release.

The existing company phone, email, location and social profiles are centralized in `src/lib/site.ts`. The map link is a regional search for Rambukkana, not an invented office pin. Existing project descriptions and status information are retained in `src/lib/data.ts`; some projects share the original supplied images. Confirm their accuracy, image rights and current status before publication. No company statistics or customer reviews have been invented.

## Inquiry forms

The same validated form handles contact, consultation and VR-interest inquiries.

- Without email credentials, the form explicitly prepares a `mailto:` draft. The visitor must review and send it from their email app. The page never says the inquiry was sent.
- With both email variables present, `/api/inquiry` validates the request on the server and sends it through [Resend’s email API](https://resend.com/docs/api-reference/emails/send-email). Success is displayed only after provider acceptance. This does not guarantee final inbox delivery.
- Consultation dates are preferences, not reserved appointments. The team confirms the meeting separately.
- Validation, consent, a honeypot, request-size limits, same-origin checks, timeout handling, per-process rate limits and provider idempotency are included.
- Rate limiting is bounded and local to each server process. For multi-instance or serverless deployments, apply the host’s shared firewall/rate-limit rule to `POST /api/inquiry` as well. On custom Node hosting, have the trusted reverse proxy replace incoming forwarded-IP headers.
- Tests mock provider acceptance, failure and timeout; they never send live email. Verify one legitimate inquiry and inbox delivery after setting your own provider credentials.

No secret is exposed to the browser. Server errors do not return provider responses or log inquiry contents. The site adds no analytics or advertising cookies.

## Hosting

This site needs a Next.js-compatible Node runtime because it uses route handlers, server rendering for forms and image optimization. Do not upload it as a static HTML export.

**Managed Next.js hosting:** use the Next.js preset, repository root as project root, `npm ci` for install and `npm run build` for build. Set environment variables before the release build. No custom rewrite rules are required.

**Node hosting:** install with `npm ci`, build with `npm run build`, then run `npm start` behind an HTTPS reverse proxy. Preserve `.next`, `public`, `package.json`, `package-lock.json` and production dependencies. Set the port with `npm start -- --port 3000`. Configure process restart, HTTPS, logs and edge request limits at the host.

Builds download the existing Geist font through `next/font/google`; the resulting font is self-hosted at runtime. The build environment needs access to Google Fonts. There are no remote photography or HDR dependencies at runtime. The 3D module and local model are loaded only when the visitor activates the preview.

## Design and accessibility

The site uses restrained frosted navigation, image-backed glass panels, architectural typography, warm neutral surfaces and the original brand red. Native scrolling is retained. Reveal effects animate once; reduced-motion preferences disable reveals and hero depth. The house model renders on demand with no continuous auto-rotation and offers rotation, floor-plan and reset controls.

The mobile menu uses a native modal dialog for focus containment and Escape handling. Forms have visible labels, native required-field checks, explicit error/status messages and focused feedback. All pages have a main landmark, one primary heading and a shared footer. Service links work with keyboard disclosure as well as pointer interaction.

## Verification and remaining launch inputs

The current release assessment is in [LAUNCH-READINESS.md](LAUNCH-READINESS.md), including measured before/after Lighthouse results, dependency advisories, an inactive analytics plan and a launch checklist. Next.js is patched to 16.3.8. Run the release preflight before building for a public domain; a successful local build alone does not enable indexing.

See `QA.md` for the checked routes, viewports and environment limitations. This workspace is not publicly deployed. A real production domain is still required; server email sending additionally requires a verified sender and API key. The site is usable in the clearly labeled email-draft mode without those email credentials.
