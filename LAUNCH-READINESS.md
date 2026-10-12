# N&M production-readiness audit

12 October 2026 · Branch: `codex/production-readiness`

Subsequent motion-only enhancements and their verification are documented in [MOTION.md](MOTION.md). GSAP was reintroduced for that explicitly requested implementation; the measurements below describe the earlier production-readiness pass.

This pass preserves the existing white/black/red identity, Geist font, logo, imagery, navbar layout, service cards, routes and inquiry workflow. No live deployment, DNS change, email, analytics activation or account connection was performed. Existing uncommitted work was retained.

## Prioritized findings and fixes

| Severity | Finding and root cause | Resolution |
| --- | --- | --- |
| Critical | Next.js 16.3.1 fell within published vulnerable ranges, including Windows-hosted remote code execution and image processing advisories. | Patched Next.js and its ESLint configuration to 16.3.8 within the existing release line. |
| High | Sharp 0.35.3 and source-map-js 1.2.1 had known dependency advisories. | Updated compatible transitive dependencies to Sharp 0.35.5 and source-map-js 1.2.2. Final production audit reports zero known vulnerabilities. |
| High, launch | The public domain and host are not confirmed. Preview indexing is intentionally disabled. | Preflight correctly fails without `NEXT_PUBLIC_SITE_URL`. Confirm host/domain, configure and rebuild before launch. |
| Medium | Small footer headings and contact labels used #777 on white/off-white, below 4.5:1 contrast. | Reused existing `--muted` token; no new palette introduced. |
| Medium | Phone validation counted punctuation toward minimum length; arbitrary service and contact-method strings passed server validation. | Validate 7–15 digits plus permitted formatting; validate choices against actual services and shared contact methods. Added regression coverage. |
| Medium | WhatsApp's accessible name did not contain its complete visible label. | Accessible name now starts with “Chat on WhatsApp”; destination uses centralized company data. |
| Medium | Project images declared full viewport width although desktop cards occupy half the layout; hero requests lacked high fetch priority. | Corrected project/service image sizes, set eager/high-priority hero loading, removed deprecated `priority` use. |
| Low | Email-app dependency was explained only after preparing the draft. | Explain it before entering details; retain explicit “nothing sent” feedback and telephone alternatives. |
| Low | Reveal initialization assumed IntersectionObserver support. | Keep content visible when the API is unavailable; observe before applying hidden entrance state. |
| Medium, limitation | With JavaScript entirely disabled, Next.js streaming can leave page content behind the loading boundary. | Added factual service/contact alternatives in the existing loading fallback. Full JavaScript-free content rendering remains a limitation; this is distinct from reduced-motion or missing-observer support. |
| Low | Service pages lacked machine-readable service/breadcrumb information. | Added Service and BreadcrumbList data from existing service/company records, emitted only with a configured public origin. |
| Low | GSAP was installed but unreferenced. | Removed only that unused package; retained existing motion utilities and optional 3D implementation. |

Security references: [Windows-hosted Next.js advisory](https://github.com/advisories/GHSA-p293-qw3h-jr36), [image optimization advisory](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4). Full official-registry audit results are retained in ignored `artifacts/security-audit-*.json`.

## Architecture and audit scope

Next.js App Router 16.3.8, React 19, TypeScript, Tailwind 4 plus existing global CSS tokens. Geist is fetched at build and self-hosted at runtime. Local optimized photos use Next Image. Main content is server-rendered; navigation, forms, reveals and optional model controls are client components. The house viewer dynamically loads React Three Fiber/Drei/Three only after activation and uses demand rendering. Existing Framer Motion utilities remain available. No new runtime dependency or tracker was added.

Reviewed all 15 public pages, the six service detail routes, legal/error states, shared sections, navigation/footer, forms and API, motion/3D components, metadata, image paths, environment handling, lockfile and hosting documentation. There are no dedicated project detail routes: featured links target existing project anchors. Those routes were preserved.

Baseline build, lint, typecheck and six tests passed. After validation improvements, seven tests pass.

## Measured results

Single before/after mobile Lighthouse runs on the local production server in headless Edge, with default simulated mobile throttling. Results may vary with machine load; these are not real-user measurements or proof of a causal speed improvement.

| Page | Performance before → after | Accessibility before → after | LCP before → after | CLS after | TBT after |
| --- | --- | --- | --- | --- | --- |
| Home | 87 → 90 | 96 → 100 | 3.58s → 3.61s | 0 | 37ms |
| Projects | 93 → 92 | 96 → 100 | 3.16s → 3.28s | 0 | 68ms |
| Contact | 95 → 95 | 96 → 100 | 2.78s → 2.84s | 0 | 36ms |

Best Practices stayed 81 and SEO stayed 66 on all three pages. The local HTTP origin fails HTTPS checks, and intentional preview noindex fails crawlability. Do not remove preview protections to inflate scores. All three LCP results remain above the 2.5s target. Re-test with real HTTPS hosting, compression, edge caching and representative devices before claiming those targets. TBT is not INP. Baseline/final page transfer sizes were approximately 495/498 KB Home, 383/386 KB Projects and 293/295 KB Contact: no aggregate payload reduction is claimed. Corrected desktop image sizing addresses overfetch beyond this mobile initial-load sample. The existing 3D bundle remains deferred until activation.

Automated axe WCAG A/AA checks detected footer/contact contrast defects before changes and zero violations across all 15 pages after changes at mobile width. This is not full WCAG certification. Responsive geometry checks passed for all pages at 320, 360, 375, 390, 430, 768, 1024, 1440 and 1920px, with no horizontal overflow or broken loaded images. Full-page 375/1440px screenshots were captured; before/after contact screenshots and the final homepage were visually compared and retain the original composition.

Mobile open/close, Escape, focus restoration and link navigation passed. Desktop service keyboard disclosure, scroll reveals and model load/rotation/floor-plan/reset/close controls passed. All three forms prepared drafts without sending anything; HTTP checks passed for 15 routes, 20 internal links, 13 image sources and two genuine 404 cases. No page exceptions or console errors were recorded in the responsive run. Reduced-motion mode was enabled for the responsive run, with normal motion tested separately. Reports are retained in ignored `artifacts/lighthouse-*`, `axe-*` and `readiness-*` files.

Additional checks passed for the no-JavaScript contact fallback, missing-IntersectionObserver visibility, 768px contact layout, punctuation-only phone feedback, exact WhatsApp/telephone destinations, browser back navigation, API origin rejection and delivered CSP header. The final fallback-only change was rebuilt successfully and lint passed again. Lighthouse measurements precede that fallback-only change; no further performance improvement is claimed.

## Security limitations

Production dependencies: official `npm audit --omit=dev` reports zero known advisories at the time of this check; this is not a penetration test or a guarantee against unknown vulnerabilities.

Five high-severity development dependency entries remain in the Next ESLint → fast-glob → micromatch → braces chain. The published audit proposes downgrading the Next ESLint configuration to a different major release; that would conflict with this framework and is not applied. Do not run build/lint tools against untrusted glob patterns. Track the upstream fix and rerun the full audit in CI. Compatible brace-expansion and js-yaml fixes were applied.

Existing nosniff, referrer, permissions and frame headers remain. Added a deliberately narrow CSP restricting base URLs, plugins, framing and form destinations. It does **not** claim comprehensive script/XSS protection: a nonce/hash script policy needs deployment-specific testing with App Router streaming and 3D. Do not add broad unsafe defaults just to obtain a score. Configure HSTS at the chosen HTTPS host after certificate and redirect verification; no preload or subdomain policy was assumed.

Forms share client/server validation and avoid HTML interpolation. Provider credentials remain server-only. API responses are non-cacheable and do not expose provider responses or inquiry contents. Existing rate limits are per-process: use a shared edge rule if enabling direct sending across instances. Trust forwarded-IP headers only behind a proxy that replaces them. Existing `.gitignore` excludes secret environment files. No secret values were printed or committed.

## SEO and content

Each public page uses a unique title/description through shared metadata. English language, local business information, Open Graph/Twitter configuration, icon and social artwork are present. Canonicals, social absolute URLs and sitemap entries derive from the configured domain. GeneralContractor schema contains existing name, phone, email, region and social links; service pages add factual service and breadcrumb schema. No ratings, credentials or new business claims were added.

Local preview intentionally has noindex, robots disallow and an empty sitemap. Do not remove that guard without supplying the real HTTPS origin. Production-domain metadata and Google rich-result eligibility must be checked after configuration. Existing project statuses, office hours and image rights still require owner confirmation; supplied portfolio images include reused architectural illustrations. No claim of independent verification is made.

## Hosting and launch sequence

Choose a Next-compatible managed host or a Node server; a static-file-only host is unsuitable for the current API, server-rendered forms and image optimizer. Platform/domain confirmation remains outstanding.

1. Set the real HTTPS `NEXT_PUBLIC_SITE_URL` before building. Keep secrets in the hosting environment.
2. Choose explicit email-draft mode, or separately authorize/configure the existing optional Resend integration with `RESEND_API_KEY` and verified `INQUIRY_FROM_EMAIL`. `INQUIRY_TO_EMAIL` is optional. No external infrastructure was provisioned.
3. Use Node 22 or newer, install with `npm ci`, then run lint, typecheck, tests, `npm run preflight` and `npm run build`. Run `npm start` for Node hosting; a managed Next host supplies the runtime.
4. For a custom server, place it behind an HTTPS reverse proxy, configure process restart, compression/caching, request limits and private operational logs. Never expose `next dev` publicly.
5. Add only DNS records supplied by the selected host after explicit approval. Verify apex/www policy, certificate issuance and one canonical redirect without loops. Preserve mail MX/TXT records. No DNS targets are guessed here.
6. Verify direct links, 404, security headers, robots, sitemap, canonical/Open Graph URLs, image optimization and inquiry behavior on the actual origin. Rebuild when the public URL changes.
7. Once authorized, verify domain ownership in Google Search Console, submit `/sitemap.xml` and inspect key pages. Claim/verify the Google Business Profile using accurate name, real location/service area, phone and owner-confirmed hours. These accounts are not connected or configured by this task.
8. If enabling server email, send one owner-approved test and verify receipt. API acceptance alone does not establish inbox delivery.

See `README.md` and `.env.example` for operational commands. No push, merge or deployment was performed.

## Optional analytics plan — inactive

Enable only after owner approval and suitable privacy/consent controls. No analytics code, cookies or data collection was added.

| Proposed event | Trigger | Minimal properties |
| --- | --- | --- |
| `consultation_cta` | Consultation link activation | Page path, CTA placement |
| `whatsapp_click` | Verified WhatsApp link activation | Page path |
| `phone_click` | Telephone link activation | Page path |
| `email_draft_start` | User opens prepared mailto draft | Page path, form kind; never label as sent |
| `inquiry_accepted` | Existing API confirms provider acceptance | Form kind; not proof of inbox delivery |
| `service_navigation` | Actual service link activation | Service slug, source path |
| `project_navigation` | Actual project anchor activation | Existing project ID, source path |

Never collect names, email addresses, phone numbers, message contents, full mailto URLs or query strings as event properties. A verified delivery event requires provider-side delivery evidence and separate implementation approval. Useful future content is owner-supplied completed-project photography and permissioned client feedback, not invented statistics or testimonials.

## Release checklist

| Requirement | Status | Evidence / next step |
| --- | --- | --- |
| Existing visual identity and routes | PASS | Minimal targeted edits; original palette, font, logo and photography retained |
| Production build, lint, typecheck, unit/API tests | PASS | Next 16.3.8 build; seven tests |
| Routes, links, images and 404 | PASS | Production HTTP checks and browser navigation |
| Mobile/desktop geometry and interactions | PASS | 15 pages, nine widths; menu, form drafts and 3D controls |
| Automated accessibility | PASS | Zero detected axe A/AA violations on 15 mobile pages; Lighthouse 100 on three pages |
| Lighthouse performance target | PASS | Measured 90/92/95 on Home/Projects/Contact; single local run |
| LCP ≤ 2.5 seconds | NEEDS ACTION | Local mobile lab LCP 2.84–3.61s; verify on final hosting |
| Lighthouse Best Practices/SEO targets | NEEDS ACTION | 81/66 in HTTP/noindex preview; remeasure real HTTPS release |
| Production dependency audit | PASS | Official registry: zero known production advisories |
| Full dependency audit | NEEDS ACTION | Five development-only entries in an upstream glob-parser chain |
| Public domain and hosting selection | BLOCKED | Awaiting owner input; preflight deliberately fails |
| Domain-specific indexing/canonical/sitemap | BLOCKED | Configure real origin, rebuild and inspect live responses |
| HTTPS, HSTS, DNS and redirects | NOT TESTED | Require selected host/domain and explicit deployment approval |
| Live email delivery | NOT TESTED | Draft mode works locally; no provider credentials or test mail sent |
| Business details and imagery rights | NEEDS ACTION | Owner confirmation before publication |
| Search Console / Business Profile | NEEDS ACTION | Owner access and verification required |
| Analytics | NOT TESTED | Intentionally inactive; plan only |
| Safari, Firefox, physical devices, screen reader | NOT TESTED | Automated Edge checks do not replace these |
| Full JavaScript-free page rendering | NEEDS ACTION | Streaming requires JavaScript; loading fallback provides direct telephone/email alternatives |
| Real-user LCP, INP and CLS at p75 | NOT TESTED | Requires deployed traffic; lab scores are not field data |

This site is locally build-ready. It is not yet publicly launch-verified; the outstanding owner/environment requirements above remain explicit.
