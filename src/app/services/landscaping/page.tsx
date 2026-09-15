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
        title: "Architectural Softscaping",
        desc: "Selecting precise plant species, turfing, and living arrangements to complement the physical house structure.",
        icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
        title: "Functional Hardscaping",
        desc: "Engineered stone pathways, concrete patios, and durable outdoor living structures.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
        title: "Exterior Lighting Design",
        desc: "Installing focused directional lighting that dramatically enhances the facade and garden during the night.",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    },
    {
        title: "Retaining Walls",
        desc: "Structurally sound walling systems preventing soil erosion and defining terraced yard geometry.",
        icon: "M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4"
    },
    {
        title: "Drainage Systems",
        desc: "Implementing subterranean water routing logic to protect the primary house foundation from flooding.",
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    },
    {
        title: "Outdoor Environments",
        desc: "Executing fire pits, built-in seating, and exterior environments designed explicitly for practical residential living.",
        icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    }
];

const processSteps = [
    { number: "01", title: "Topographical Analysis", desc: "Evaluating soil type, natural sloping, and pre-existing natural habitats on the property." },
    { number: "02", title: "Spatial Coordination", desc: "Aligning the proposed outdoor areas fluidly with the internal living spaces of the home." },
    { number: "03", title: "Material & Plant Selection", desc: "Choosing species and stone native or highly adaptable to the localized Sri Lankan climate." },
    { number: "04", title: "Site Preparation", desc: "Excavating, laying drainage infrastructure, and setting load-bearing hardscaping foundations." },
    { number: "05", title: "Final Grooming", desc: "Planting softscape lines, testing irrigation, and adjusting final architectural lighting." },
];

const relatedServices = [
    { title: "Design & Build", slug: "design-build", desc: "Complete end-to-end project support from planning to handover." },
    { title: "House Plans", slug: "house-plans", desc: "Practical plans designed around your land and lifestyle." },
    { title: "Renovation", slug: "renovation", desc: "Upgrade and improve existing homes and spaces." },
];

export default function LandscapingPage() {
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
                            alt="High-end Residential Landscaping"
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
                                LANDSCAPING
                            </p>
                        </FadeUp>

                        <div className="mb-10">
                            <SplitTextReveal
                                lines={[{ text: "The perfect exterior" }, { text: "for your architecture." }]}
                                wrapperClassName="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] font-bold tracking-tight text-white leading-[1.05]"
                            />
                        </div>

                        <FadeUp delay={0.4} className="max-w-2xl mb-12">
                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
                                A premium home requires a premium exterior. We physically bridge the gap between internal living environments and natural outdoor spaces, executing structured landscaping directly aligned with the architectural design.
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

            {/* ── 2. VISUALIZATION ─────────────────────────────────────── */}
            <section className="py-24 bg-[#FDFCFA] border-b border-neutral-100">
                <Container>
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                        <FadeUp className="flex-1 w-full text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
                                Matching the garden with the home.
                            </h2>
                            <p className="text-lg text-neutral-600 leading-relaxed font-medium mb-6">
                                Treating the garden as an afterthought creates a disjointed aesthetic. We believe the land should speak the same geometric language as the building standing on it.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                                We utilize hardscaping grids to extend internal floor plans outdoors, maintaining architectural consistency through material symmetry and intentional planting logic.
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.2} className="flex-1 w-full">
                            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm group">
                                <Image
                                    src="/image/Projects/project-3.png"
                                    alt="Structured Landscaping"
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors" />
                                <div className="absolute inset-4 rounded-2xl border border-white/30 pointer-events-none" />
                            </div>
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
                                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">Sequence</p>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
                                    A structured approach to the outdoors.
                                </h2>
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                                    The environment must be tamed reliably. We use an explicitly linear procedure to prevent soil collapse, structural damage, and drainage failures.
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
                            Ready to transform your exterior?
                        </h2>
                        <p className="text-lg text-neutral-500 mb-12 max-w-xl mx-auto font-medium">
                            Let&apos;s evaluate your property and align a functional, beautiful landscape explicitly tailored to your architecture.
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
