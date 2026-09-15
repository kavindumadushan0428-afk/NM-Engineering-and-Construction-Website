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
        title: "Structural Upgrades",
        desc: "Safely modifying load-bearing elements to open up tight, enclosed spaces.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
        title: "Complete Interior Remodeling",
        desc: "Transforming purely outdated layouts into highly functional modern living environments.",
        icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
    },
    {
        title: "Exterior Facade Modernization",
        desc: "Updating the physical language of the exterior to align with contemporary architectural standards.",
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2"
    },
    {
        title: "Material Refinishing",
        desc: "Stripping back aged elements and applying high-end, highly durable material finishings.",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0"
    },
    {
        title: "Spatial Additions",
        desc: "Engineering and constructing seamless new extensions to an existing residential blueprint.",
        icon: "M12 6v6m0 0v6m0-6h6m-6 0H6"
    },
    {
        title: "Plumbing & Electrical Repair",
        desc: "Total infrastructure replacement substituting failing legacy piping and outdated electrical wiring.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
    }
];

const processSteps = [
    { number: "01", title: "Site Evaluation", desc: "We physically inspect the existing structure, taking precise measurements and structural notes." },
    { number: "02", title: "Feasibility Analysis", desc: "Understanding exactly what walls can move safely and what structural foundations must remain." },
    { number: "03", title: "Spatial Design", desc: "Developing a refined architectural plan mapping the transformation from old to new." },
    { number: "04", title: "Demolition & Build", desc: "Surgically removing old structures and beginning the high-quality construction phase." },
    { number: "05", title: "Final Polish", desc: "Completing fine-finishing touches, paint, and final handover of the revolutionized space." },
];

const relatedServices = [
    { title: "Design & Build", slug: "design-build", desc: "Complete end-to-end project support from planning to handover." },
    { title: "3D Visualization", slug: "3d-visualization", desc: "Realistic views to see your home before we build." },
    { title: "Landscaping", slug: "landscaping", desc: "Harmonizing the physical architecture with living outdoor spaces." },
];

export default function RenovationPage() {
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
                            src="/image/Projects/project-1.png"
                            alt="Home Renovation and Architecture"
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
                                RENOVATION
                            </p>
                        </FadeUp>

                        <div className="mb-10">
                            <SplitTextReveal
                                lines={[{ text: "Breathing new life" }, { text: "into old spaces." }]}
                                wrapperClassName="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] font-bold tracking-tight text-white leading-[1.05]"
                            />
                        </div>

                        <FadeUp delay={0.4} className="max-w-2xl mb-12">
                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
                                We specialize in transforming outdated layouts and aging physical structures into highly functional, structurally safe, and beautifully modern environments, maximizing the potential of existing property.
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

            {/* ── 2. TRANSFORMATION VISUALIZATION ─────────────────────── */}
            <section className="py-24 bg-[#FDFCFA] border-b border-neutral-100">
                <Container>
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                        <FadeUp className="flex-1 w-full text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
                                Seeing the Potential.
                            </h2>
                            <p className="text-lg text-neutral-600 leading-relaxed font-medium mb-6">
                                A successful renovation requires an architectural eye capable of seeing what a space could be, not just what it is.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                                We surgically evaluate physical constraints, mapping exactly what load-bearing walls can move and where light can be introduced, turning restrictive closed floors into expansive open layouts.
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.2} className="flex-1 w-full">
                            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm group">
                                <Image
                                    src="/image/Projects/project-2.png"
                                    alt="Renovated space"
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
                                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">The Framework</p>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
                                    A structured approach to remodeling.
                                </h2>
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                                    Renovation carries unique constraints. We follow a highly rigid sequence to prevent unexpected foundational surprises from compromising the project budget or timeline.
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
                            Ready to rethink your space?
                        </h2>
                        <p className="text-lg text-neutral-500 mb-12 max-w-xl mx-auto font-medium">
                            Let&apos;s sit down and discuss exactly how we can physically transform your existing property safely and beautifully.
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
