"use client";

import { useEffect } from "react";

/**
 * Awwwards-inspired cinematic scrollytelling & architectural motion controller.
 * Applied exclusively to the Home page with zero layout shift and 100% responsive cross-device safety.
 */
export default function HomeScrollytelling() {
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

            const hero = main.querySelector<HTMLElement>(".home-hero");
            if (!hero) return;

            initialized = true;

            try {
                const [{ gsap }, { ScrollTrigger }] = await Promise.all([
                    import("gsap"),
                    import("gsap/ScrollTrigger"),
                ]);

                if (disposed) return;
                gsap.registerPlugin(ScrollTrigger);

                // Prevent address bar resize jitter on mobile browsers
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
                        const heroImage = hero.querySelector<HTMLElement>(".hero-image");
                        const heroImg = hero.querySelector<HTMLElement>(".hero-image img");
                        const heroContent = hero.querySelector<HTMLElement>(".hero-content");
                        const heroKicker = hero.querySelector<HTMLElement>(".hero-kicker");
                        const redDot = hero.querySelector<HTMLElement>(".red-dot");
                        const heroH1 = hero.querySelector<HTMLElement>(".headline-reveal");
                        const heroDesc = hero.querySelector<HTMLElement>(".hero-description");
                        const heroButtons = hero.querySelectorAll<HTMLElement>(".hero-actions .button");
                        const heroBottom = hero.querySelector<HTMLElement>(".hero-bottom");

                        const heroTl = gsap.timeline({
                            defaults: { ease: "power3.out" },
                            onComplete: () => {
                                gsap.set(
                                    [
                                        heroKicker,
                                        redDot,
                                        heroH1,
                                        heroDesc,
                                        heroButtons,
                                        heroBottom,
                                    ],
                                    { clearProps: "opacity,transform" },
                                );
                            },
                        });

                        if (heroImage) {
                            heroTl.fromTo(
                                heroImage,
                                { opacity: 0, scale: 1.06, y: 15 },
                                { opacity: 1, scale: 1, y: 0, duration: 1.3, ease: "power3.out" },
                                0,
                            );
                        }

                        if (redDot) {
                            heroTl.fromTo(
                                redDot,
                                { scale: 0, opacity: 0 },
                                { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" },
                                0.15,
                            );
                        }

                        if (heroKicker) {
                            heroTl.fromTo(
                                heroKicker,
                                { opacity: 0, x: -14 },
                                { opacity: 1, x: 0, duration: 0.8 },
                                0.2,
                            );
                        }

                        if (heroH1) {
                            heroTl.fromTo(
                                heroH1,
                                { opacity: 0, y: isDesktop ? 38 : 22 },
                                { opacity: 1, y: 0, duration: 1.05 },
                                0.3,
                            );
                        }

                        if (heroDesc) {
                            heroTl.fromTo(
                                heroDesc,
                                { opacity: 0, y: 22 },
                                { opacity: 1, y: 0, duration: 0.85 },
                                0.45,
                            );
                        }

                        if (heroButtons.length > 0) {
                            heroTl.fromTo(
                                heroButtons,
                                { opacity: 0, y: 18 },
                                { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
                                0.55,
                            );
                        }

                        if (heroBottom) {
                            heroTl.fromTo(
                                heroBottom,
                                { opacity: 0, y: 14 },
                                { opacity: 1, y: 0, duration: 0.8 },
                                0.65,
                            );
                        }

                        // Scroll-driven Hero Parallax across all screen sizes
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

                        if (heroContent) {
                            gsap.to(heroContent, {
                                yPercent: isDesktop ? -12 : isTablet ? -8 : -5,
                                opacity: 0.35,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: hero,
                                    start: "top top",
                                    end: "bottom 30%",
                                    scrub: 0.8,
                                    invalidateOnRefresh: true,
                                },
                            });
                        }

                        if (heroBottom) {
                            gsap.to(heroBottom, {
                                yPercent: -15,
                                opacity: 0,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: hero,
                                    start: "top top",
                                    end: "center top",
                                    scrub: 0.6,
                                    invalidateOnRefresh: true,
                                },
                            });
                        }

                        /* ── 2. INTRODUCTION SECTION REVEAL ── */
                        const introSection = main.querySelector<HTMLElement>("#introduction");
                        if (introSection) {
                            const eyebrow = introSection.querySelector<HTMLElement>(".eyebrow");
                            const heading = introSection.querySelector<HTMLElement>(".section-heading");
                            const body = introSection.querySelector<HTMLElement>(".body-copy");
                            const link = introSection.querySelector<HTMLElement>(".text-link");

                            const introTl = gsap.timeline({
                                scrollTrigger: {
                                    trigger: introSection,
                                    start: "top 86%",
                                    once: true,
                                },
                                defaults: { ease: "power3.out" },
                                onComplete: () => {
                                    gsap.set([eyebrow, heading, body, link], {
                                        clearProps: "opacity,transform",
                                    });
                                },
                            });

                            if (eyebrow) {
                                introTl.fromTo(eyebrow, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.75 }, 0);
                            }
                            if (heading) {
                                introTl.fromTo(heading, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.95 }, 0.1);
                            }
                            if (body) {
                                introTl.fromTo(body, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.85 }, 0.22);
                            }
                            if (link) {
                                introTl.fromTo(link, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.75 }, 0.34);
                            }
                        }

                        /* ── 3. FEATURED PROJECTS SECTION (CINEMATIC DEPTH & PARALLAX) ── */
                        const projectSection = main.querySelector<HTMLElement>(".dark-section");
                        if (projectSection) {
                            const secTop = projectSection.querySelector<HTMLElement>(".section-top");
                            if (secTop) {
                                gsap.fromTo(
                                    secTop,
                                    { opacity: 0, y: 28 },
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

                            const projectCards = projectSection.querySelectorAll<HTMLElement>(".project-card");
                            projectCards.forEach((card, idx) => {
                                // Entrance reveal
                                gsap.fromTo(
                                    card,
                                    { opacity: 0, y: isDesktop ? 45 : 22 },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.9,
                                        delay: idx * 0.1,
                                        ease: "power3.out",
                                        scrollTrigger: {
                                            trigger: card,
                                            start: "top 88%",
                                            once: true,
                                        },
                                        onComplete: () => {
                                            gsap.set(card, { clearProps: "opacity,transform" });
                                        },
                                    },
                                );

                                // Internal image parallax scrub (responsive across mobile, tablet & desktop)
                                const img = card.querySelector<HTMLElement>("img");
                                if (img) {
                                    const yDist = isDesktop ? 7 : isTablet ? 5 : 4;
                                    gsap.fromTo(
                                        img,
                                        { yPercent: -yDist, scale: 1.05 },
                                        {
                                            yPercent: yDist,
                                            scale: 1.0,
                                            ease: "none",
                                            scrollTrigger: {
                                                trigger: card,
                                                start: "top bottom",
                                                end: "bottom top",
                                                scrub: 1.1,
                                            },
                                        },
                                    );
                                }

                                // Floating glass caption subtle multi-plane depth
                                const caption = card.querySelector<HTMLElement>(".project-caption");
                                if (caption) {
                                    const capY = isDesktop ? 12 : isTablet ? 8 : 6;
                                    gsap.fromTo(
                                        caption,
                                        { y: capY },
                                        {
                                            y: -capY / 2,
                                            ease: "none",
                                            scrollTrigger: {
                                                trigger: card,
                                                start: "top bottom",
                                                end: "bottom top",
                                                scrub: 0.9,
                                            },
                                        },
                                    );
                                }
                            });
                        }

                        /* ── 4. SERVICES PREVIEW SECTION (CASCADING STAGGER & DEPTH) ── */
                        const servicesSection = main.querySelector<HTMLElement>("#expertise");
                        if (servicesSection) {
                            const secTop = servicesSection.querySelector<HTMLElement>(".section-top");
                            if (secTop) {
                                gsap.fromTo(
                                    secTop,
                                    { opacity: 0, y: 28 },
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
                                    { opacity: 0, y: isDesktop ? 36 : 18 },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.85,
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
                                        const sDist = isDesktop ? 5 : 3;
                                        gsap.fromTo(
                                            sImg,
                                            { yPercent: -sDist, scale: 1.04 },
                                            {
                                                yPercent: sDist,
                                                scale: 1.0,
                                                ease: "none",
                                                scrollTrigger: {
                                                    trigger: card,
                                                    start: "top bottom",
                                                    end: "bottom top",
                                                    scrub: 1,
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
                                                duration: 0.7,
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

                            const ctaWrap = servicesSection.querySelector<HTMLElement>(".services-cta-wrap");
                            if (ctaWrap) {
                                gsap.fromTo(
                                    ctaWrap,
                                    { opacity: 0, y: isDesktop ? 22 : 14 },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.7,
                                        ease: "power2.out",
                                        scrollTrigger: {
                                            trigger: ctaWrap,
                                            start: "top 92%",
                                            once: true,
                                        },
                                        onComplete: () => {
                                            gsap.set(ctaWrap, { clearProps: "opacity,transform" });
                                        },
                                    },
                                );
                            }
                        }

                        /* ── 5. PERSPECTIVE SECTION: SIGNATURE ARCHITECTURAL SCROLLYTELLING ── */
                        const perspectiveSection = main.querySelector<HTMLElement>(".perspective-section");
                        if (perspectiveSection) {
                            const studioImage = perspectiveSection.querySelector<HTMLElement>(".studio-image");
                            const studioImg = perspectiveSection.querySelector<HTMLElement>(".studio-image img");
                            const studioCopy = perspectiveSection.querySelector<HTMLElement>(".studio-copy");
                            const pEyebrow = studioCopy?.querySelector<HTMLElement>(".eyebrow");
                            const pHeading = studioCopy?.querySelector<HTMLElement>(".section-heading");
                            const pBody = studioCopy?.querySelector<HTMLElement>(".body-copy");
                            const pLink = studioCopy?.querySelector<HTMLElement>(".text-link");

                            if (!isMobile && studioImage && studioCopy) {
                                // Desktop & Tablet: Pinned architectural scrollytelling moment
                                const pinTl = gsap.timeline({
                                    scrollTrigger: {
                                        trigger: perspectiveSection,
                                        start: "center center",
                                        end: isDesktop ? "+=650" : "+=420",
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
                                        scale: 0.93,
                                        rotateY: 2.5,
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
                                        { scale: 1.06, ease: "none" },
                                        0,
                                    );
                                }

                                if (pEyebrow) {
                                    pinTl.fromTo(
                                        pEyebrow,
                                        { opacity: 0.3, x: -14 },
                                        { opacity: 1, x: 0, ease: "power2.out" },
                                        0,
                                    );
                                }

                                if (pHeading) {
                                    pinTl.fromTo(
                                        pHeading,
                                        { opacity: 0.25, y: 24 },
                                        { opacity: 1, y: 0, ease: "power2.out" },
                                        0.1,
                                    );
                                }

                                if (pBody) {
                                    pinTl.fromTo(
                                        pBody,
                                        { opacity: 0.2, y: 18 },
                                        { opacity: 1, y: 0, ease: "power2.out" },
                                        0.25,
                                    );
                                }

                                if (pLink) {
                                    pinTl.fromTo(
                                        pLink,
                                        { opacity: 0.25, y: 14 },
                                        { opacity: 1, y: 0, ease: "power2.out" },
                                        0.4,
                                    );
                                }
                            } else if (studioImage && studioCopy) {
                                // Mobile: Touch-scroll-synchronized progressive scrollytelling scrub
                                const mobileScrollyTl = gsap.timeline({
                                    scrollTrigger: {
                                        trigger: perspectiveSection,
                                        start: "top 80%",
                                        end: "bottom 20%",
                                        scrub: 0.8,
                                        invalidateOnRefresh: true,
                                    },
                                });

                                mobileScrollyTl.fromTo(
                                    studioImage,
                                    {
                                        scale: 0.94,
                                        rotateX: 2,
                                        rotateY: 1.5,
                                        transformPerspective: 800,
                                    },
                                    {
                                        scale: 1.02,
                                        rotateX: 0,
                                        rotateY: 0,
                                        ease: "power1.out",
                                    },
                                    0,
                                );

                                if (studioImg) {
                                    mobileScrollyTl.fromTo(
                                        studioImg,
                                        { scale: 1.0 },
                                        { scale: 1.05, ease: "none" },
                                        0,
                                    );
                                }

                                if (pEyebrow) {
                                    mobileScrollyTl.fromTo(
                                        pEyebrow,
                                        { opacity: 0.3, x: -10 },
                                        { opacity: 1, x: 0, ease: "power1.out" },
                                        0.1,
                                    );
                                }

                                if (pHeading) {
                                    mobileScrollyTl.fromTo(
                                        pHeading,
                                        { opacity: 0.25, y: 18 },
                                        { opacity: 1, y: 0, ease: "power1.out" },
                                        0.25,
                                    );
                                }

                                if (pBody) {
                                    mobileScrollyTl.fromTo(
                                        pBody,
                                        { opacity: 0.25, y: 14 },
                                        { opacity: 1, y: 0, ease: "power1.out" },
                                        0.45,
                                    );
                                }

                                if (pLink) {
                                    mobileScrollyTl.fromTo(
                                        pLink,
                                        { opacity: 0.25, y: 10 },
                                        { opacity: 1, y: 0, ease: "power1.out" },
                                        0.65,
                                    );
                                }
                            }
                        }

                        /* ── 6. CALL TO ACTION SECTION ── */
                        const ctaSection = main.querySelector<HTMLElement>(".cta-section");
                        if (ctaSection) {
                            const ctaPanel = ctaSection.querySelector<HTMLElement>(".cta-panel");
                            if (ctaPanel) {
                                const ctaEyebrow = ctaPanel.querySelector<HTMLElement>(".eyebrow");
                                const ctaHeading = ctaPanel.querySelector<HTMLElement>(".section-heading");
                                const ctaBody = ctaPanel.querySelector<HTMLElement>(".body-copy");
                                const ctaActions = ctaPanel.querySelectorAll<HTMLElement>(".cta-actions > *");

                                const ctaTl = gsap.timeline({
                                    scrollTrigger: {
                                        trigger: ctaPanel,
                                        start: "top 86%",
                                        once: true,
                                    },
                                    defaults: { ease: "power3.out" },
                                    onComplete: () => {
                                        gsap.set(
                                            [ctaPanel, ctaEyebrow, ctaHeading, ctaBody, ctaActions],
                                            { clearProps: "opacity,transform" },
                                        );
                                    },
                                });

                                ctaTl.fromTo(
                                    ctaPanel,
                                    { opacity: 0, y: 32, scale: 0.98 },
                                    { opacity: 1, y: 0, scale: 1, duration: 0.9 },
                                    0,
                                );

                                if (ctaEyebrow) {
                                    ctaTl.fromTo(ctaEyebrow, { opacity: 0, x: -12 }, { opacity: 1, x: 0, duration: 0.7 }, 0.1);
                                }
                                if (ctaHeading) {
                                    ctaTl.fromTo(ctaHeading, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.85 }, 0.18);
                                }
                                if (ctaBody) {
                                    ctaTl.fromTo(ctaBody, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.75 }, 0.28);
                                }
                                if (ctaActions.length > 0) {
                                    ctaTl.fromTo(ctaActions, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, 0.38);
                                }
                            }
                        }
                    },
                    main,
                );

                void document.fonts?.ready?.then(() => {
                    if (!disposed) ScrollTrigger.refresh();
                });
            } catch (err) {
                console.error("Home motion init error:", err);
                release?.();
            }
        }

        const start = () => {
            void init();
        };

        start();
        reducedMotion.addEventListener("change", start);

        return () => {
            disposed = true;
            reducedMotion.removeEventListener("change", start);
            release?.();
        };
    }, []);

    return null;
}
