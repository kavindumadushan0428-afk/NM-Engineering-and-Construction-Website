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
        title: "Material Quantification",
        desc: "Mathematically calculating the exact weight, volume, and unit count of raw materials required.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
        title: "Labor Tracking",
        desc: "Forecasting the exact number of man-hours and specialized trades needed for construction.",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    },
    {
        title: "Market Rate Analysis",
        desc: "Cross-referencing supplier quotes and local market variables to secure the most viable pricing data.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
        title: "Value Engineering",
        desc: "Substituting materials or adjusting structural geometry to align with client budget hard-caps.",
        icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
    },
    {
        title: "Tender Documentation",
        desc: "Providing rigorous breakdown documents to accurately acquire apples-to-apples contractor bids.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
        title: "Risk Mitigation",
        desc: "Pre-calculating safety margins for material inflation and unexpected sub-surface site conditions.",
        icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    }
];

const processSteps = [
    { number: "01", title: "Review Plans", desc: "Analyzing initial architectural drawings for structural, electrical, and plumbing scope." },
    { number: "02", title: "Material Takeoff", desc: "Extracting precise geometric volumes directly from the rendered blueprints." },
    { number: "03", title: "Market Valuation", desc: "Applying accurate, localized market rates to the raw material volumes." },
    { number: "04", title: "Budget Refinement", desc: "Drafting the initial BOQ and aligning the cost aggressively against the true project budget." },
    { number: "05", title: "Final BOQ Handover", desc: "Producing the rigorous final document used strictly for contractor tendering and financial planning." },
];

const relatedServices = [
    { title: "House Plans", slug: "house-plans", desc: "Practical plans designed around your land and lifestyle." },
    { title: "Design & Build", slug: "design-build", desc: "Complete end-to-end project support from planning to handover." },
    { title: "Renovation", slug: "renovation", desc: "Upgrade and improve existing homes and spaces." },
];

export default function BoqEstimationPage() {
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
                            src="/image/Projects/project-3.png"
                            alt="BOQ Estimation Geometry"
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
                                BOQ & ESTIMATION
                            </p>
                        </FadeUp>

                        <div className="mb-10">
                            <SplitTextReveal
                                lines={[{ text: "Mathematical truth" }, { text: "before building." }]}
                                wrapperClassName="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] font-bold tracking-tight text-white leading-[1.05]"
                            />
                        </div>

                        <FadeUp delay={0.4} className="max-w-2xl mb-12">
                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
                                A successful project relies on financial clarity. We translate architectural blueprints into precise material quantities, accurate cost estimates, and rigorously structured financial plans.
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

            {/* ── 2. LOGIC OVERVIEW ─────────────────────────────────────── */}
            <section className="py-24 bg-[#FDFCFA] border-b border-neutral-100">
                <Container>
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                        <FadeUp delay={0.2} className="flex-1 w-full order-2 md:order-1">
                            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm group bg-neutral-900 border border-neutral-200 p-8 flex flex-col justify-between">
                                <div>
                                    <h4 className="text-white/60 font-bold tracking-widest uppercase text-xs mb-8">Data Vector Integration</h4>
                                    <div className="space-y-4">
                                        <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden relative">
                                            <div className="absolute inset-y-0 left-0 bg-red-700 w-[75%]" />
                                        </div>
                                        <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden relative">
                                            <div className="absolute inset-y-0 left-0 bg-white w-[45%]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-red-700/5 to-transparent mix-blend-overlay pointer-events-none" />
                            </div>
                        </FadeUp>
                        <FadeUp className="flex-1 w-full text-center md:text-left order-1 md:order-2">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
                                Planning beyond aesthetics.
                            </h2>
                            <p className="text-lg text-neutral-600 leading-relaxed font-medium mb-6">
                                A beautiful drawing is useless if the project runs out of funding halfway through construction. Financial surprise is the enemy of architecture.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                                We dissect structural designs mathematically, running aggressive feasibility checks mapping concrete volumes, reinforcing steel limits, and electrical infrastructure directly against localized market environments.
                            </p>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* ── 3. WHAT WE PROVIDE (Glass Cards) ────────────────────── */}
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
                                <GlassCard className="p-8 h-full bg-white hover:bg-neutral-50/50 border-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_15px_40px_-15px_rgba(220,38,38,0.06)] hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 mb-6 transition-colors duration-500 group-hover:text-red-700 group-hover:bg-red-50 group-hover:border-red-100">
                                        <svg className="w-5 h-5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

            {/* ── 4. PROCESS SECTION ──────────────────────────────────── */}
            <section className="py-24 md:py-32 bg-white relative overflow-hidden">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
                        <div className="lg:sticky lg:top-32 h-fit">
                            <FadeUp>
                                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">Financial Framework</p>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
                                    The estimation logic.
                                </h2>
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                                    Our process explicitly translates loose physical concepts into hard data structures, preparing you safely for contract negotiations and bank appraisals.
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

            {/* ── 5. RELATED SERVICES ─────────────────────────────────── */}
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

            {/* ── 6. CTA ──────────────────────────────────────────────── */}
            <section className="py-24 md:py-32 bg-white text-center relative overflow-hidden border-t border-neutral-100">
                <Container className="relative z-10 flex flex-col items-center">
                    <FadeUp>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-8 max-w-3xl mx-auto leading-tight">
                            Ready to budget your layout?
                        </h2>
                        <p className="text-lg text-neutral-500 mb-12 max-w-xl mx-auto font-medium">
                            Let&apos;s evaluate your architectural prints and determine the true mathematical cost of execution.
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
