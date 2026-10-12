"use client";

import { useEffect } from "react";

/** Adds no layout nodes. Every animation belongs to this route's media context. */
export default function CinematicScroll() {
  useEffect(() => {
    let disposed = false;
    let initialized = false;
    let release: (() => void) | undefined;
    const preference = matchMedia("(prefers-reduced-motion: no-preference)");

    async function initialize() {
      if (disposed || initialized || !preference.matches) return;
      const main = document.querySelector<HTMLElement>("main#main-content");
      if (!main || main.getBoundingClientRect().height === 0) return;
      // Let dedicated scrollytelling components manage their respective pages
      if (main.querySelector(".home-hero, .page-hero")) return;
      initialized = true;
      observer?.disconnect();
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const media = gsap.matchMedia();
        const seen = new WeakSet<Element>();
        let refreshFrame = 0;
        const refresh = () => {
          cancelAnimationFrame(refreshFrame);
          refreshFrame = requestAnimationFrame(() => {
            if (!disposed) ScrollTrigger.refresh(true);
          });
        };
        // Revert inline styles/triggers when the route or motion preference changes.
        release = () => {
          cancelAnimationFrame(refreshFrame);
          media.revert();
        };
        media.add(
          {
            desktop: "(min-width: 1024px)",
            compact: "(max-width: 1023px)",
            reduced: "(prefers-reduced-motion: reduce)",
          },
          (context) => {
            if (context.conditions?.reduced) return;
            const desktop = Boolean(context.conditions?.desktop);
            const reveals = new Map<HTMLElement, gsap.core.Tween>();
            const candidates = main.querySelectorAll<HTMLElement>(
              "[data-scroll-reveal], .section-top, .scope-list > div, .values-list > div",
            );
            candidates.forEach((element) => {
              // Animate an existing wrapper only once, never a nested copy.
              if (element.parentElement?.closest("[data-scroll-reveal]"))
                return;
              if (
                seen.has(element) ||
                element.getBoundingClientRect().top < innerHeight
              ) {
                seen.add(element);
                return;
              }
              const delay = Math.min(
                Number(element.dataset.revealDelay) || 0,
                0.28,
              );
              const tween = gsap.fromTo(
                element,
                { opacity: 0, y: desktop ? 18 : 8 },
                {
                  opacity: 1,
                  y: 0,
                  duration: desktop ? 0.85 : 0.55,
                  delay,
                  ease: "power3.out",
                  clearProps: "opacity,transform",
                  onComplete: () => {
                    seen.add(element);
                  },
                  scrollTrigger: {
                    trigger: element,
                    start: "top 96%",
                    once: true,
                    toggleActions: "play complete play complete",
                    onLeave: (trigger) => {
                      trigger.animation?.progress(1);
                    },
                  },
                },
              );
              reveals.set(element, tween);
            });
            const revealFocused = (event: FocusEvent) => {
              if (!(event.target instanceof Node)) return;
              for (const [element, tween] of reveals) {
                if (element.contains(event.target)) {
                  tween.progress(1);
                  tween.scrollTrigger?.kill();
                  seen.add(element);
                }
              }
            };
            main.addEventListener("focusin", revealFocused);

            if (desktop) {
              // Move whole frames: image size, object-fit and crop stay untouched.
              main
                .querySelectorAll<HTMLElement>(
                  ".hero-image, .page-hero-visual, .service-panorama",
                )
                .forEach((frame) => {
                  const hero = frame.matches(".hero-image, .page-hero-visual");
                  gsap.to(frame, {
                    y: hero ? -12 : -8,
                    ease: "none",
                    scrollTrigger: {
                      trigger: hero ? frame.parentElement : frame,
                      start: hero ? "top top" : "top 90%",
                      end: "bottom top",
                      scrub: 0.65,
                      invalidateOnRefresh: true,
                    },
                  });
                });
            }
            return () => main.removeEventListener("focusin", revealFocused);
          },
          main,
        );
        void document.fonts.ready.then(() => {
          if (!disposed) refresh();
        });
      } catch {
        // A failed optional motion chunk must never hide page content.
        release?.();
      }
    }

    const start = () => {
      void initialize();
    };
    const observer = new MutationObserver(start);
    observer.observe(document.body, { childList: true, subtree: true });
    preference.addEventListener("change", start);
    start();
    return () => {
      disposed = true;
      observer?.disconnect();
      preference.removeEventListener("change", start);
      release?.();
    };
  }, []);
  return null;
}
