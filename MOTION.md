# Cinematic motion enhancement

The existing content, assets, typography, colors, grids, controls and routes are preserved. No new visible section or wrapper was added. GSAP 3.15.0 with ScrollTrigger is the only new runtime dependency for this pass.

## Motion ownership

- Existing lightweight CSS hero/title entrances remain; secondary-page breadcrumbs and descriptions receive subtle staggered entrances that release their styles when complete.
- `Reveal` keeps its existing element and adds motion markers. Content is visible before enhancement and if the optional motion import fails.
- `CinematicScroll` mounts through the existing route template and renders nothing. It dynamically imports GSAP/ScrollTrigger only when motion is allowed.
- Offscreen section wrappers, service cards and project showcases enter once using opacity and small vertical translations. Existing delays are capped at 280ms. Fast scrolling completes skipped reveals; keyboard focus immediately reveals the relevant wrapper.
- Desktop pointer devices receive 8–12px scrubbed movement on existing hero and panorama frames. Images retain their exact dimensions, object-fit and crop. No new image scaling, text splitting, cloned content, continuous ticker loop or animated blur was added.
- Existing hover and pointer-depth effects retain their own targets. Model controls, form feedback, navigation and dialogs are excluded.

There is no pinning, scroll interception or added scroll distance: current layouts do not provide safe space for pinning without changing the requested composition. Native scrolling remains in control.

## Accessibility and cleanup

Small/touch layouts use shorter, lower-distance entrances and no scrubbed parallax. Reduced motion bypasses the dynamic motion imports on initial load; changes to that preference revert active animation styles and triggers. Media contexts rebuild safely across breakpoints. Route unmounts revert only this controller's effects and remove its listeners/observer/frame callback. No global kill-all is used.

The controller waits for a visible streamed main region. Font readiness triggers a safe refresh; ScrollTrigger handles viewport refreshes. Image dimensions are already reserved, so image-load events do not repeatedly reset scroll measurements. Existing Next.js JavaScript-disabled streaming limitations and its direct-contact fallback remain documented in `LAUNCH-READINESS.md`.

## Verification

- Production build, lint, TypeScript and seven inquiry tests pass.
- All 15 public routes passed downward/upward scroll tests without hidden content, runtime errors or horizontal overflow.
- Live reduced-motion changes remove transforms and reveal content. Touch-sized layout has no frame parallax. Keyboard focus reveals offscreen controls.
- Repeated actual client navigation and browser back passed; no lingering hidden content or pin spacers.
- Existing menu, service disclosure, 3D load/rotation/floor-plan/reset/close and production route/link checks pass.
- Static comparison covers Home, About, Services, Projects, Contact, House Plans and VR at 375px and 1440px. Page text, image sources, dimensions and document heights match baseline exactly. Screenshots and raw pixel comparisons are retained in ignored `artifacts/motion-*` files.
- Eleven of fourteen decoded screenshots are pixel-identical; the remaining three have only one or two changed color-channel values each. No visible static difference remains.
- Blocking the optional ScrollTrigger chunk was tested: all reveal content and the main heading remain visible.

No hardware FPS or new Lighthouse score is claimed. Prior launch-audit performance measurements predate this motion pass. No deployment was performed.
