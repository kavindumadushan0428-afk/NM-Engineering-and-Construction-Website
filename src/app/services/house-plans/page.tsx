"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import ParallaxWrapper from "@/components/motion/ParallaxWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const provisions = [
    {
        title: "Floor Plans",
        desc: "Detailed, true-to-scale 2D architectural layouts mapping exact physical dimensions and traffic flow.",
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"
    },
    {
        title: "Space Planning",
        desc: "Optimizing the relationship between rooms to maximize usability and eliminate wasted square footage.",
        icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    },
    {
        title: "Elevations",
        desc: "Precise exterior views showcasing structural heights, rooflines, and window placements.",
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    },
    {
        title: "Room Layouts",
        desc: "Individual interior room configurations focusing on furniture placement, lighting, and daily utility.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
        title: "Exterior Design Concepts",
        desc: "Developing the aesthetic language of the home’s facade through material and shape selection.",
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    },
    {
        title: "Design Refinement",
        desc: "Iteratively adjusting architectural lines and structural nuances based on your direct feedback.",
        icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    }
];

const processSteps = [
    { number: "01", title: "Consultation", desc: "Understand your core needs, lifestyle specifics, and absolute requirements for the home." },
    { number: "02", title: "Requirements & Planning", desc: "Evaluate the land topology, orientation, and establish overall project direction based on feasibility." },
    { number: "03", title: "Plan Development", desc: "Draft and develop the initial 2D architectural house-plan concepts for physical review." },
    { number: "04", title: "Design Refinement", desc: "Adjust and tune the design logically based on your direct structural or aesthetic feedback." },
    { number: "05", title: "Final Design", desc: "Prepare the finalized, agreed-upon design direction ready to transfer into the next construction stage." },
];

const visualPath = [
    { label: "Idea", img: "/image/Projects/project-3.png", delay: 0.1 },
    { label: "Plan", img: "/image/Projects/project-1.png", delay: 0.2 },
    { label: "Design", img: "/image/Projects/project-2.png", delay: 0.3 },
    { label: "Home", img: "/image/Projects/project-3.png", delay: 0.4 },
];

const relatedServices = [
    { title: "Design & Build", slug: "design-build", desc: "Complete end-to-end project support from planning to handover." },
    { title: "3D Visualization", slug: "3d-visualization", desc: "Realistic views to see your home before we build." },
    { title: "BOQ & Estimation", slug: "boq-estimation", desc: "Clear quantities and cost estimates for better planning." },
];

export default function HousePlansPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFA] animate-page-enter">
            {/* ── 1. PREMIUM HERO ─────────────────────────────────────── */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900 text-[#FDFCFA]">
                <ParallaxWrapper offset={100} className="absolute inset-0 w-full h-full z-0">
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        animate={{ scale: [1.02, 1.08, 1.02] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        <Image
                            src="/image/Projects/project-2.png"
                            alt="House Plans Architectural Blueprint"
                            fill
                            priority
                            className="object-cover opacity-60"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[6px] z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#111]/90 via-[#111]/40 to-[#111]/80 mix-blend-normal z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111]/80 via-transparent to-transparent mix-blend-normal z-10 pointer-events-none" />
                </ParallaxWrapper>

                <div className="absolute inset-0 bg-[url('/image/noise.png')] opacity-[0.04] mix-blend-overlay pointer-events-none z-10" />

                <Container className="relative z-10 w-full h-full flex flex-col justify-center">
                    <div className="max-w-4xl pt-20">
                        <FadeUp delay={0.1}>
                            <p className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white shadow-sm">
                                HOUSE PLANS
                            </p>
                        </FadeUp>

                        <div className="mb-10">
                            <SplitTextReveal
                                lines={[{ text: "House plans designed" }, { text: "around your vision." }]}
                                wrapperClassName="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-bold tracking-tight text-white leading-[1.05]"
                            />
                        </div>

                        <FadeUp delay={0.4} className="max-w-2xl mb-12">
                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
                                A great home begins with an intentionally crafted architectural plan. We help clients develop highly practical, thoughtful house layouts precisely suited to their daily lifestyle, land constraints, and overall project goals.
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.5} className="flex flex-col sm:flex-row gap-4">
                            <Link href="/book-consultation" className="inline-flex h-14 items-center justify-center rounded-full bg-red-700 px-8 text-sm md:text-base font-bold text-white transition-all duration-300 hover:bg-white hover:text-red-700 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:-translate-y-1">
                                Book a Consultation
                            </Link>
                            <Link href="/projects" className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 text-sm md:text-base font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1">
                                View Our Work
                            </Link>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* ── 2. SERVICE INTRODUCTION ─────────────────────────────── */}
            <section className="py-24 bg-[#FDFCFA] relative">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeUp>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-8 leading-tight">
                                Floor plans meant for living in.
                            </h2>
                            <p className="text-lg text-neutral-600 leading-relaxed font-medium mb-6">
                                The layout of a home dictates exactly how you interact with it every single day. Poor space planning creates frustrating bottlenecks, dark rooms, and wasted square footage that you still pay to build.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                                We approach architectural drafting from a foundation of pure practicality. By meticulously evaluating your client requirements, site topography, and specific lifestyle habits, we structure floor plans that maximize visual appearance without sacrificing construction feasibility.
                            </p>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* ── 3. VISUALIZATION TIMELINE (Idea -> Home) ───────────── */}
            <section className="py-24 md:py-32 bg-white relative border-y border-neutral-100 overflow-hidden">
                <Container>
                    <FadeUp className="mb-20 text-center">
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">Evolution</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
                            From Thought to Structure
                        </h2>
                    </FadeUp>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 relative max-w-6xl mx-auto">
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-neutral-200 -translate-y-1/2 z-0" />

                        {visualPath.map((stage, idx) => (
                            <FadeUp key={stage.label} delay={stage.delay} className="w-full md:flex-1 relative z-10 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative shadow-sm border border-neutral-100 mb-6 bg-neutral-50 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] group-hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                                        <Image
                                            src={stage.img}
                                            fill
                                            alt={`House Plan ${stage.label} Stage`}
                                            className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-bold tracking-widest uppercase text-neutral-400 group-hover:text-red-700 transition-colors">
                                            {stage.label}
                                        </span>
                                        {idx !== visualPath.length - 1 && (
                                            <svg className="w-4 h-4 text-neutral-300 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── 4. WHAT WE PROVIDE (Glass Cards) ────────────────────── */}
            <section className="py-24 md:py-32 bg-[#FDFCFA]">
                <Container>
                    <FadeUp className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
                            Capabilities
                        </h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {provisions.map((item, idx) => (
                            <FadeUp key={item.title} delay={0.1 * idx}>
                                <GlassCard className="p-8 h-full bg-white/70 hover:bg-white border-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 mb-6 transition-colors duration-500 group-hover:text-red-700 group-hover:border-red-100">
                                        <svg className="w-5 h-5 text-current group-hover:text-red-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed font-medium">{item.desc}</p>
                                </GlassCard>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── 5. PROCESS SECTION ──────────────────────────────────── */}
            <section className="py-24 md:py-32 bg-white relative overflow-hidden">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
                        <div className="lg:sticky lg:top-32 h-fit">
                            <FadeUp>
                                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">The Framework</p>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
                                    A structured approach to design.
                                </h2>
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                                    We do not rush straight into drawing shapes on paper. We follow a highly procedural timeline to guarantee the final architecture is thoroughly rooted in your specific realities, preventing costly revisions later.
                                </p>
                            </FadeUp>
                        </div>

                        <div className="relative">
                            <div className="hidden lg:block absolute left-[31px] top-[40px] bottom-10 w-[2px] bg-neutral-100 shrink-0 z-0">
                                <motion.div
                                    className="w-full bg-red-700/20"
                                    initial={{ height: "0%" }}
                                    whileInView={{ height: "100%" }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                            </div>

                            <div className="space-y-10">
                                {processSteps.map((step, idx) => (
                                    <FadeUp key={step.number} delay={0.1 * (idx % 3)} className="relative z-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start group">
                                        <div className="w-16 h-16 rounded-2xl bg-[#FDFCFA] shadow-sm border border-neutral-100 flex items-center justify-center text-sm font-bold text-neutral-400 group-hover:text-red-700 group-hover:bg-red-50/50 group-hover:border-red-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shrink-0 group-hover:-translate-y-1">
                                            {step.number}
                                        </div>
                                        <div className="pt-2">
                                            <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                                            <p className="text-base text-neutral-600 leading-relaxed font-medium">{step.desc}</p>
                                        </div>
                                    </FadeUp>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── 6. RELATED SERVICES ─────────────────────────────────── */}
            <section className="py-24 md:py-32 bg-[#FDFCFA]">
                <Container>
                    <FadeUp className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Related Services</h2>
                    </FadeUp>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedServices.map((service, idx) => (
                            <FadeUp key={service.slug} delay={0.1 * idx}>
                                <Link href={`/services/${service.slug}`} className="block h-full group">
                                    <GlassCard className="p-8 h-full flex flex-col justify-between transition-all duration-500 hover:border-red-700/30 bg-white hover:shadow-[0_10px_30px_-10px_rgba(220,38,38,0.1)] hover:-translate-y-1">
                                        <div>
                                            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-red-700 transition-colors">{service.title}</h3>
                                            <p className="text-sm text-neutral-500 leading-relaxed font-medium">{service.desc}</p>
                                        </div>
                                        <div className="mt-8 flex justify-end transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                                            <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </div>
                                    </GlassCard>
                                </Link>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── 7. CTA ──────────────────────────────────────────────── */}
            <section className="py-24 md:py-32 bg-white text-center relative overflow-hidden border-t border-neutral-100">
                <Container className="relative z-10 flex flex-col items-center">
                    <FadeUp>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-8 max-w-3xl mx-auto leading-tight">
                            Let&apos;s Plan Your Home Together.
                        </h2>
                        <p className="text-lg text-neutral-500 mb-12 max-w-xl mx-auto font-medium">
                            It starts with a simple conversation. Let&apos;s sit down and translate your requirements into a workable architectural structure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-consultation" className="inline-flex h-14 items-center justify-center rounded-full bg-red-700 px-8 text-sm md:text-base font-bold text-white transition-all duration-300 hover:bg-red-800 hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] hover:-translate-y-1">
                                Book a Consultation
                            </Link>
                            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border border-neutral-200 bg-white px-8 text-sm md:text-base font-bold text-neutral-900 transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-sm hover:-translate-y-1">
                                Contact N&M
                            </Link>
                        </div>
                    </FadeUp>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
