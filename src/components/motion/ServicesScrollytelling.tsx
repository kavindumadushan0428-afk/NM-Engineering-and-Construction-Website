"use client";

import { useEffect } from "react";

/**
 * Awwwards-inspired cinematic scrollytelling controller for the Services page.
 * Implements responsive cross-device storytelling, touch-friendly image depth, and fluid transitions.
 */
export default function ServicesScrollytelling() {
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

                        // Scroll-driven Hero Parallax & Zoom across all devices
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

                        /* ── 2. SERVICE CARDS: CASCADING STAGGER & IMAGE DEPTH ── */
                        const servicesSection = main.querySelector<HTMLElement>("#expertise");
                        if (servicesSection) {
                            const secTop = servicesSection.querySelector<HTMLElement>(".section-top");
                            if (secTop) {
                                gsap.fromTo(
                                    secTop,
                                    { opacity: 0, y: 30 },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.9,
                                        ease: "power3.out",
                                        scrollTrigger: {
                                            trigger: secTop,
                                            start: "top 88%",
                                            once: true,
                                        },
                                        onComplete: () => {
                                            gsap.set(secTop, { clearProps: "opacity,transform" });
                                        },
                                    },
                                );
                            }

                            const serviceCards = servicesSection.querySelectorAll<HTMLElement>(".service-card");
                            if (serviceCards.length > 0) {
                                gsap.fromTo(
                                    serviceCards,
                                    { opacity: 0, y: isDesktop ? 40 : 20, scale: 0.97 },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        duration: 0.9,
                                        stagger: 0.1,
                                        ease: "power3.out",
                                        scrollTrigger: {
                                            trigger: servicesSection.querySelector(".services-grid") || servicesSection,
                                            start: "top 84%",
                                            once: true,
                                        },
                                        onComplete: () => {
                                            gsap.set(serviceCards, { clearProps: "opacity,transform" });
                                        },
                                    },
                                );

                                serviceCards.forEach((card) => {
                                    const sImg = card.querySelector<HTMLElement>(".service-card-image img");
                                    if (sImg) {
                                        const sDist = isDesktop ? 8 : isTablet ? 6 : 4;
                                        gsap.fromTo(
                                            sImg,
                                            { yPercent: -sDist, scale: 1.06 },
                                            {
                                                yPercent: sDist,
                                                scale: 1.0,
                                                ease: "none",
                                                scrollTrigger: {
                                                    trigger: card,
                                                    start: "top bottom",
                                                    end: "bottom top",
                                                    scrub: 1.2,
                                                },
                                            },
                                        );
                                    }

                                    const accent = card.querySelector<HTMLElement>(".service-accent");
                                    if (accent) {
                                        gsap.fromTo(
                                            accent,
                                            { scaleX: 0, transformOrigin: "left" },
                                            {
                                                scaleX: 1,
                                                duration: 0.75,
                                                ease: "power2.out",
                                                scrollTrigger: {
                                                    trigger: card,
                                                    start: "top 88%",
                                                    once: true,
                                                },
                                                onComplete: () => {
                                                    gsap.set(accent, { clearProps: "transform" });
                                                },
                                            },
                                        );
                                    }
                                });
                            }
                        }

                        /* ── 3. WHERE WE WORK: ARCHITECTURAL SCROLLYTELLING ── */
                        const darkSection = main.querySelector<HTMLElement>(".dark-section");
                        if (darkSection) {
                            const grid = darkSection.querySelector<HTMLElement>(".studio-grid");
                            const leftCol = grid?.firstElementChild as HTMLElement | null;
                            const rightCol = grid?.lastElementChild as HTMLElement | null;
                            const eyebrow = leftCol?.querySelector<HTMLElement>(".eyebrow");
                            const heading = leftCol?.querySelector<HTMLElement>(".section-heading");
                            const paragraphs = rightCol?.querySelectorAll<HTMLElement>("p");

                            if (!isMobile && grid && leftCol && rightCol) {
                                // Desktop & Tablet: Pinned scrollytelling sequence
                                const pinTl = gsap.timeline({
                                    scrollTrigger: {
                                        trigger: darkSection,
                                        start: "center center",
                                        end: isDesktop ? "+=520" : "+=380",
                                        pin: true,
                                        pinSpacing: true,
                                        scrub: 1.1,
                                        anticipatePin: 1,
                                        invalidateOnRefresh: true,
                                    },
                                });

                                if (eyebrow) {
                                    pinTl.fromTo(
                                        eyebrow,
                                        { opacity: 0.25, x: -14 },
                                        { opacity: 1, x: 0, ease: "power2.out" },
                                        0,
                                    );
                                }

                                if (heading) {
                                    pinTl.fromTo(
                                        heading,
                                        { opacity: 0.25, y: 26 },
                                        { opacity: 1, y: 0, ease: "power2.out" },
                                        0.08,
                                    );
                                }

                                if (paragraphs && paragraphs[0]) {
                                    pinTl.fromTo(
                                        paragraphs[0],
                                        { opacity: 0.25, y: 20 },
                                        { opacity: 1, y: 0, ease: "power2.out" },
                                        0.35,
                                    );
                                }

                                if (paragraphs && paragraphs[1]) {
                                    pinTl.fromTo(
                                        paragraphs[1],
                                        { opacity: 0.2, y: 18 },
                                        { opacity: 1, y: 0, ease: "power2.out" },
                                        0.65,
                                    );
                                }
                            } else if (grid) {
                                // Mobile: Touch-scroll-synchronized progressive storytelling scrub
                                const mobileDarkTl = gsap.timeline({
                                    scrollTrigger: {
                                        trigger: darkSection,
                                        start: "top 80%",
                                        end: "bottom 25%",
                                        scrub: 0.8,
                                        invalidateOnRefresh: true,
                                    },
                                });

                                if (eyebrow) {
                                    mobileDarkTl.fromTo(
                                        eyebrow,
                                        { opacity: 0.3, x: -10 },
                                        { opacity: 1, x: 0, ease: "power1.out" },
                                        0,
                                    );
                                }

                                if (heading) {
                                    mobileDarkTl.fromTo(
                                        heading,
                                        { opacity: 0.25, y: 20 },
                                        { opacity: 1, y: 0, ease: "power1.out" },
                                        0.15,
                                    );
                                }

                                if (paragraphs && paragraphs[0]) {
                                    mobileDarkTl.fromTo(
                                        paragraphs[0],
                                        { opacity: 0.25, y: 16 },
                                        { opacity: 1, y: 0, ease: "power1.out" },
                                        0.4,
                                    );
                                }

                                if (paragraphs && paragraphs[1]) {
                                    mobileDarkTl.fromTo(
                                        paragraphs[1],
                                        { opacity: 0.2, y: 14 },
                                        { opacity: 1, y: 0, ease: "power1.out" },
                                        0.65,
                                    );
                                }
                            }
                        }

                        /* ── 4. CTA SECTION TRANSITION ── */
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
                console.error("Services motion init error:", err);
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
