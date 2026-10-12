# QA and release notes

Date: 12 October 2026

## Latest production-readiness pass

See [LAUNCH-READINESS.md](LAUNCH-READINESS.md) for the current prioritized audit, Next.js 16.3.8 security patch, official-registry dependency results, measured Lighthouse comparison, accessibility fixes, seven passing inquiry tests and final launch checklist. Its results supersede historical security-audit and no-Lighthouse limitations below. Public domain/hosting and live delivery remain unverified.

## Light-theme redesign

Replaced the visual system with white and subtle neutral surfaces, black typography and the original logo red (#C02729). Updated all page layouts, the floating glass navigation, project captions, service rows, contact forms and footer. Simplified repeated content, introduced a shared service detail component and retained the supplied logo, imagery, business information, inquiry workflows and optional 3D viewer. Updated social artwork and icons to match.

The final production build passes. ESLint, TypeScript and all six inquiry tests pass. Automated Edge checks covered all 15 pages at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920px without horizontal overflow. Each page has one main heading; loaded images passed. Full-page desktop and mobile screenshots were captured for review. A narrow-screen intrinsic project-card sizing issue found during QA was corrected.

Mobile menu opening, Escape, focus restoration and link navigation passed. All three forms prepared valid email drafts without sending email. Desktop keyboard service navigation, normal-motion reveals and the on-demand model's load, rotation, floor-plan, reset and close controls passed. Reduced-motion layouts were checked throughout the responsive run. No page exceptions or console errors were recorded in that run. HTTP checks passed for 15 routes, 20 internal links, 13 images and two real 404 cases. Reports and screenshots are in ignored `artifacts/light-*` files.

These checks used isolated headless Microsoft Edge because the in-app browser automation was unavailable. Physical-device, Safari, Firefox, screen-reader and measured Core Web Vitals testing remain outside this local verification.

## Previous frontend refinement pass (2 October)

Preserved the current section order, content, imagery, logo, palette and layout concept. Refined glass opacity for readable navigation and captions, restored contrast in dark sections and the footer, corrected tablet heading allocation and legal-page gutters, and made the existing visualization caption visible on touch devices. Added restrained hero-detail entrances and navigation underlines, improved keyboard reveal behavior and nested mobile navigation state, and reduced mobile navigation blur. Forms and backend contracts were not changed.

Rechecked all 15 pages at 320, 375, 430, 768, 1024, 1280, 1440 and 1920px: no horizontal overflow. A second screenshot review covered six requested widths and full-page layouts. Scrolling all 15 pages completed every reveal with no broken loaded images. Keyboard dropdown, mobile active state, Escape and focus restoration passed. Final build, lint, typecheck, six inquiry tests and route checks passed. No browser errors or warnings were observed in the final QA tab. Reports and screenshots are in `artifacts/polish*` (ignored local artifacts).

## Project audit

Reviewed routes, shared sections, layout, motion utilities, 3D components, assets, dependencies and configuration. Existing uncommitted service imagery and service-page changes were incorporated, not reset. The pre-existing deleted service images remain deleted.

Fixed case-sensitive asset paths, a synchronous App Router params implementation, simulated form success, navigation scroll tracking, inaccessible mobile focus handling, hover-only service navigation, nonsemantic hero headings, duplicate footer ownership, placeholder legal links, hardcoded VR countdown hydration risk, hidden development-error overlays and excessive continuous animation.

The supplied house model was Z-up, while the browser renderer is Y-up. It is now correctly oriented and has keyboard rotation, floor-plan/roof, reset and close controls. The model is loaded on request and renders only when needed.

## Checks

- Production build: passed with Next.js 16.3.1 and TypeScript enabled.
- ESLint: passed with zero warnings.
- Typecheck: passed.
- Inquiry tests: validation, consent, malformed requests, header injection, honeypot, payload size, origin, unavailable configuration, provider success/failure, timeout, rate limits and invalid dates.
- Homepage responsive checks: 320, 375, 390, 430, 768, 1024, 1280, 1440, 1920 and 2560px.
- About, Services, Projects, all six service detail pages, Contact, Consultation, VR, Privacy and Terms: checked at 320, 768 and 1440px for horizontal overflow, headings, footer count and broken loaded images.
- Mobile menu: open/close, Escape, focus restoration, native focus containment and background scroll lock.
- Contact form: native required-field validation and email-draft contents checked without sending a message. Consultation and VR-interest drafts also verified in the final production preview.
- 3D preview: loading, rendered canvas, keyboard rotation and model orientation inspected.
- Production browser console: no new errors or warnings observed in the tested routes.
- HTTP route/link/asset checks: passed for 15 routes, 20 internal links, 13 rendered images and both missing-page cases. Output saved in `artifacts/route-qa.json`.

## Limits and required release configuration

No live provider email or public deployment was performed. Set the real HTTPS origin before the release build. Configure a verified email sender and API key only if direct website submission is required; otherwise the explicit email-draft workflow remains available. Confirm the existing portfolio, business details and image rights before public release.

The dependency audit could not complete: the configured npm mirror returned an unimplemented security-advisory endpoint, and the official npm registry was blocked by the network’s application-control policy (HTTP 403). Run `npm audit --omit=dev` in the hosting/CI environment. Do not interpret this limitation as a clean security audit.

Responsive and console checks were performed in Chromium through the in-app browser. Safari, Firefox, physical low-end devices, screen-reader testing and real-user Core Web Vitals have not been measured. No Lighthouse score or 60 FPS guarantee is claimed.
