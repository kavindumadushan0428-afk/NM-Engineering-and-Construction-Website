"use client";

import { useEffect } from "react";

/**
 * Awwwards-inspired cinematic scrollytelling controller for the About page.
 * Implements responsive cross-device storytelling and touch-optimized scrubbed depth.
 */
export default function AboutScrollytelling() {
    useEffect(() => {
        let disposed = false;
        let initialized = false;
        let release: (() => void) | undefined;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (reducedMotion.matches) return;

        async function init() {
            if (disposed || initialized || reducedMotion.matches) return;

            const main = document.querySelector<HTMLElement>("main#main-content");
            if (!main || main.getBoundingClientRect().height === 0) return;

            const hero = main.querySelector<HTMLElement>(".page-hero");
            if (!hero) return;

            initialized = true;

            try {
                const [{ gsap }, { ScrollTrigger }] = await Promise.all([
                    import("gsap"),
                    import("gsap/ScrollTrigger"),
                ]);

                if (disposed) return;
                gsap.registerPlugin(ScrollTrigger);

                ScrollTrigger.config({ ignoreMobileResize: true });

                const media = gsap.matchMedia();

                release = () => {
                    media.revert();
                    ScrollTrigger.getAll().forEach((st) => {
                        if (st.vars.trigger && main.contains(st.vars.trigger as Node)) {
                            st.kill();
                        }
                    });
                };

                media.add(
                    {
                        desktop: "(min-width: 1024px)",
                        tablet: "(min-width: 768px) and (max-width: 1023px)",
                        mobile: "(max-width: 767px)",
                        reduced: "(prefers-reduced-motion: reduce)",
                    },
                    (ctx) => {
                        if (ctx.conditions?.reduced) return;
                        const isDesktop = Boolean(ctx.conditions?.desktop);
                        const isTablet = Boolean(ctx.conditions?.tablet);
                        const isMobile = Boolean(ctx.conditions?.mobile);

                        /* ── 1. HERO SECTION CINEMATIC ENTRANCE & PARALLAX ── */
                        const heroVisual = hero.querySelector<HTMLElement>(".page-hero-visual");
                        const heroImg = hero.querySelector<HTMLElement>(".page-hero-visual img");
                        const breadcrumbs = hero.querySelector<HTMLElement>(".breadcrumbs");
                        const heroH1 = hero.querySelector<HTMLElement>("h1");
                        const heroDesc = hero.querySelector<HTMLElement>(".hero-description");

                        const heroTl = gsap.timeline({
                            defaults: { ease: "power3.out" },
                            onComplete: () => {
                                gsap.set([breadcrumbs, heroH1, heroDesc], {
                                    clearProps: "opacity,transform",
                                });
                            },
                        });

                        if (heroVisual) {
                            heroTl.fromTo(
                                heroVisual,
                                { opacity: 0, scale: 1.06, y: 15 },
                                { opacity: 1, scale: 1, y: 0, duration: 1.25 },
                                0,
                            );
                        }

                        if (breadcrumbs) {
                            heroTl.fromTo(
                                breadcrumbs,
                                { opacity: 0, x: -14 },
                                { opacity: 1, x: 0, duration: 0.75 },
                                0.15,
                            );
                        }

                        if (heroH1) {
                            heroTl.fromTo(
                                heroH1,
                                { opacity: 0, y: isDesktop ? 36 : 22 },
                                { opacity: 1, y: 0, duration: 1.0 },
                                0.25,
                            );
                        }

                        if (heroDesc) {
                            heroTl.fromTo(
                                heroDesc,
                                { opacity: 0, y: 20 },
                                { opacity: 1, y: 0, duration: 0.85 },
                                0.4,
                            );
                        }

                        // Scroll parallax on hero visual across all devices
                        if (heroImg) {
                            gsap.to(heroImg, {
                                yPercent: isDesktop ? 16 : isTablet ? 12 : 8,
                                scale: 1.06,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: hero,
                                    start: "top top",
                                    end: "bottom top",
                                    scrub: 1,
                                    invalidateOnRefresh: true,
                                },
                            });
                        }

                        /* ── 2. STUDIO STORYTELLING SECTION ── */
                        const studioGrid = main.querySelector<HTMLElement>(".studio-grid");
                        const studioSection = studioGrid?.closest<HTMLElement>("section");

                        if (studioSection && studioGrid) {
                            const studioCopy = studioGrid.querySelector<HTMLElement>("div:first-child") ||
                                studioGrid.querySelector<HTMLElement>(".studio-copy");
                            const sEyebrow = studioCopy?.querySelector<HTMLElement>(".eyebrow");
                            const sHeading = studioCopy?.querySelector<HTMLElement>(".section-heading");
                            const sBodies = studioCopy?.querySelectorAll<HTMLElement>(".body-copy");
                            const studioImageCol = studioGrid.querySelector<HTMLElement>("div:last-child");
                            const studioImage = studioImageCol?.querySelector<HTMLElement>(".studio-image") || studioImageCol;
                            const studioImg = studioGrid.querySelector<HTMLElement>("img");
                            const imageNote = studioGrid.querySelector<HTMLElement>(".image-note");

                            if (!isMobile && studioImage && studioCopy) {
                                // Desktop & Tablet: Pinned storytelling moment
                                const pinTl = gsap.timeline({
                                    scrollTrigger: {
                                        trigger: studioSection,
                                        start: "center center",
                                        end: isDesktop ? "+=520" : "+=380",
                                        pin: true,
                                        pinSpacing: true,
                                        scrub: 1.1,
                                        anticipatePin: 1,
                                        invalidateOnRefresh: true,
                                    },
                                });

                                pinTl.fromTo(
                                    studioImage,
                                    {
                                        scale: 0.94,
                                        rotateY: 2,
                                        rotateX: 1.5,
                                        transformPerspective: 1200,
                                    },
                                    {
                                        scale: 1.03,
                                        rotateY: 0,
                                        rotateX: 0,
                                        ease: "power2.out",
                                    },
                                    0,
                                );

                                if (studioImg) {
                                    pinTl.fromTo(
                                        studioImg,
                                        { scale: 1.0 },
                                        { scale: 1.05, ease: "none" },
                                        0,
                                    );
                                }

                                if (imageNote) {
                                    pinTl.fromTo(
                                        imageNote,
                                        { opacity: 0.3, y: 16 },
                                        { opacity: 1, y: 0, ease: "power2.out" },
                                        0.25,
                                    );
                                }

                                if (sEyebrow) {
                                    pinTl.fromTo(
                                        sEyebrow,
                                        { opacity: 0.3, x: -12 },
                                        { opacity: 1, x: 0, ease: "power2.out" },
                                        0,
                                    );
                                }

                                if (sHeading) {
                                    pinTl.fromTo(
                                        sHeading,
                                        { opacity: 0.25, y: 24 },
                                        { opacity: 1, y: 0, ease: "power2.out" },
                                        0.1,
                                    );
                                }

                                if (sBodies && sBodies.length > 0) {
                                    pinTl.fromTo(
                                        sBodies,
                                        { opacity: 0.25, y: 18 },
                                        { opacity: 1, y: 0, stagger: 0.1, ease: "power2.out" },
                                        0.22,
                                    );
                                }
                            } else if (studioImage && studioCopy) {
                                // Mobile: Fluid touch-scroll-synchronized scrollytelling scrub
                                const mobileStudioTl = gsap.timeline({
                                    scrollTrigger: {
                                        trigger: studioSection,
                                        start: "top 80%",
                                        end: "bottom 20%",
                                        scrub: 0.8,
                                        invalidateOnRefresh: true,
                                    },
                                });

                                mobileStudioTl.fromTo(
                                    studioImage,
                                    {
                                        scale: 0.95,
                                        rotateX: 1.5,
                                        transformPerspective: 800,
                                    },
                                    {
                                        scale: 1.02,
                                        rotateX: 0,
                                        ease: "power1.out",
                                    },
                                    0,
                                );

                                if (studioImg) {
                                    mobileStudioTl.fromTo(
                                        studioImg,
                                        { scale: 1.0 },
                                        { scale: 1.04, ease: "none" },
                                        0,
                                    );
                                }

                                if (sEyebrow) {
                                    mobileStudioTl.fromTo(
                                        sEyebrow,
                                        { opacity: 0.3, x: -10 },
                                        { opacity: 1, x: 0, ease: "power1.out" },
                                        0.1,
                                    );
                                }

                                if (sHeading) {
                                    mobileStudioTl.fromTo(
                                        sHeading,
                                        { opacity: 0.25, y: 18 },
                                        { opacity: 1, y: 0, ease: "power1.out" },
                                        0.25,
                                    );
                                }

                                if (sBodies && sBodies.length > 0) {
                                    mobileStudioTl.fromTo(
                                        sBodies,
                                        { opacity: 0.25, y: 14 },
                                        { opacity: 1, y: 0, stagger: 0.1, ease: "power1.out" },
                                        0.45,
                                    );
                                }

                                if (imageNote) {
                                    mobileStudioTl.fromTo(
                                        imageNote,
                                        { opacity: 0.3, y: 12 },
                                        { opacity: 1, y: 0, ease: "power1.out" },
                                        0.65,
                                    );
                                }
                            }
                        }

                        /* ── 3. PRINCIPLES & VALUES SECTION ── */
                        const principlesSection = main.querySelector<HTMLElement>(".principles-section");
                        if (principlesSection) {
                            const pEyebrow = principlesSection.querySelector<HTMLElement>(".eyebrow");
                            if (pEyebrow) {
                                gsap.fromTo(
                                    pEyebrow,
                                    { opacity: 0, x: -14 },
                                    {
                                        opacity: 1,
                                        x: 0,
                                        duration: 0.75,
                                        ease: "power3.out",
                                        scrollTrigger: {
                                            trigger: pEyebrow,
                                            start: "top 88%",
                                            once: true,
                                        },
                                        onComplete: () => {
                                            gsap.set(pEyebrow, { clearProps: "opacity,transform" });
                                        },
                                    },
                                );
                            }

                            const valueCards = principlesSection.querySelectorAll<HTMLElement>(".value-card");
                            if (valueCards.length > 0) {
                                gsap.fromTo(
                                    valueCards,
                                    { opacity: 0, y: isDesktop ? 38 : 18 },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.85,
                                        stagger: 0.1,
                                        ease: "power3.out",
                                        scrollTrigger: {
                                            trigger: principlesSection.querySelector(".values-grid") || principlesSection,
                                            start: "top 84%",
                                            once: true,
                                        },
                                        onComplete: () => {
                                            gsap.set(valueCards, { clearProps: "opacity,transform" });
                                        },
                                    },
                                );
                            }
                        }

                        /* ── 4. CTA SECTION ── */
                        const ctaSection = main.querySelector<HTMLElement>(".cta-section");
                        if (ctaSection) {
                            const ctaPanel = ctaSection.querySelector<HTMLElement>(".cta-panel");
                            if (ctaPanel) {
                                gsap.fromTo(
                                    ctaPanel,
                                    { opacity: 0, y: 32, scale: 0.98 },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        duration: 0.9,
                                        ease: "power3.out",
                                        scrollTrigger: {
                                            trigger: ctaPanel,
                                            start: "top 86%",
                                            once: true,
                                        },
                                        onComplete: () => {
                                            gsap.set(ctaPanel, { clearProps: "opacity,transform" });
                                        },
                                    },
                                );
                            }
                        }
                    },
                    main,
                );

                void document.fonts?.ready?.then(() => {
                    if (!disposed) ScrollTrigger.refresh();
                });
            } catch (err) {
                console.error("About motion init error:", err);
                release?.();
            }
        }

        init();
        reducedMotion.addEventListener("change", init);

        return () => {
            disposed = true;
            reducedMotion.removeEventListener("change", init);
            release?.();
        };
    }, []);

    return null;
}
