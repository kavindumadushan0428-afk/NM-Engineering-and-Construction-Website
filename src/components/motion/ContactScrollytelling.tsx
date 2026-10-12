"use client";

import { useEffect } from "react";

/**
 * Awwwards-inspired cinematic scrollytelling controller for the Contact page.
 * Implements responsive cross-device storytelling, touch-friendly depth, and unconstrained form UX.
 */
export default function ContactScrollytelling() {
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

                        /* ── 1. CINEMATIC HERO ENTRANCE & PARALLAX ── */
                        const heroVisual = hero.querySelector<HTMLElement>(".page-hero-visual");
                        const heroImg = hero.querySelector<HTMLElement>(".page-hero-visual img");
                        const breadcrumbs = hero.querySelector<HTMLElement>(".breadcrumbs");
                        const heroH1 = hero.querySelector<HTMLElement>("h1");
                        const heroDesc = hero.querySelector<HTMLElement>(".hero-description");
                        const heroTextContainer = hero.querySelector<HTMLElement>(".relative.z-10") ||
                            hero.querySelector<HTMLElement>(".hero-content");

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
                                {
                                    opacity: 0,
                                    scale: 1.08,
                                    clipPath: "inset(4% 4% 4% 4% round 24px)",
                                },
                                {
                                    opacity: 1,
                                    scale: 1,
                                    clipPath: "inset(0% 0% 0% 0% round 20px)",
                                    duration: 1.35,
                                    ease: "power3.out",
                                },
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
                                { opacity: 1, y: 0, duration: 1.05 },
                                0.25,
                            );
                        }

                        if (heroDesc) {
                            heroTl.fromTo(
                                heroDesc,
                                { opacity: 0, y: 22 },
                                { opacity: 1, y: 0, duration: 0.85 },
                                0.4,
                            );
                        }

                        // Scroll parallax on hero image across all devices
                        if (heroImg) {
                            gsap.to(heroImg, {
                                yPercent: isDesktop ? 18 : isTablet ? 12 : 8,
                                scale: 1.08,
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

                        if (heroTextContainer) {
                            gsap.to(heroTextContainer, {
                                yPercent: isDesktop ? -12 : -6,
                                opacity: 0.35,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: hero,
                                    start: "top top",
                                    end: "bottom 40%",
                                    scrub: 0.8,
                                    invalidateOnRefresh: true,
                                },
                            });
                        }

                        /* ── 2. CONTACT DETAILS & MULTI-PLANE DEPTH ── */
                        const contactGrid = main.querySelector<HTMLElement>(".contact-grid");
                        if (contactGrid) {
                            const leftCol = contactGrid.firstElementChild as HTMLElement | null;
                            const rightCol = contactGrid.lastElementChild as HTMLElement | null;

                            if (leftCol) {
                                const eyebrow = leftCol.querySelector<HTMLElement>(".eyebrow");
                                const heading = leftCol.querySelector<HTMLElement>(".section-heading");
                                const infoItems = leftCol.querySelectorAll<HTMLElement>(
                                    ".contact-direct > div, .contact-direct > a, .hours-card, .whatsapp-card, p, .text-link",
                                );

                                const infoTl = gsap.timeline({
                                    scrollTrigger: {
                                        trigger: leftCol,
                                        start: "top 86%",
                                        once: true,
                                    },
                                    defaults: { ease: "power3.out" },
                                    onComplete: () => {
                                        gsap.set(
                                            [eyebrow, heading, ...Array.from(infoItems)],
                                            { clearProps: "opacity,transform" },
                                        );
                                    },
                                });

                                if (eyebrow) {
                                    infoTl.fromTo(
                                        eyebrow,
                                        { opacity: 0, x: -14 },
                                        { opacity: 1, x: 0, duration: 0.75 },
                                        0,
                                    );
                                }

                                if (heading) {
                                    infoTl.fromTo(
                                        heading,
                                        { opacity: 0, y: isDesktop ? 30 : 18 },
                                        { opacity: 1, y: 0, duration: 0.95 },
                                        0.1,
                                    );
                                }

                                if (infoItems.length > 0) {
                                    infoTl.fromTo(
                                        infoItems,
                                        { opacity: 0, y: isDesktop ? 22 : 14 },
                                        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
                                        0.2,
                                    );
                                }

                                // Multi-plane vertical drift scrub across all viewports
                                const driftY = isDesktop ? 14 : isTablet ? 10 : 6;
                                gsap.fromTo(
                                    leftCol,
                                    { y: driftY },
                                    {
                                        y: -driftY,
                                        ease: "none",
                                        scrollTrigger: {
                                            trigger: contactGrid,
                                            start: "top bottom",
                                            end: "bottom top",
                                            scrub: 1.0,
                                        },
                                    },
                                );
                            }

                            /* ── 3. FORM PANEL ENTRANCE (NON-BLOCKING & ACCESSIBLE) ── */
                            if (rightCol) {
                                gsap.fromTo(
                                    rightCol,
                                    { opacity: 0, y: isDesktop ? 36 : 20, scale: 0.98 },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        duration: 0.95,
                                        ease: "power3.out",
                                        scrollTrigger: {
                                            trigger: rightCol,
                                            start: "top 88%",
                                            once: true,
                                        },
                                        onComplete: () => {
                                            gsap.set(rightCol, { clearProps: "all" });
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
                console.error("Contact motion init error:", err);
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
