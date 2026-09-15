"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import ParallaxWrapper from "@/components/motion/ParallaxWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Footer from "@/components/layout/Footer";
import RevealImage from "@/components/ui/RevealImage";
import { motion } from "framer-motion";

const provisions = [
    {
        title: "Architectural Design",
        desc: "Creating functional, beautiful, and practical layouts tailored to your unique requirements and site conditions.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
        title: "Planning & Development",
        desc: "Navigating local regulations, council approvals, and ensuring strict compliance with all building codes.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
        title: "Construction",
        desc: "Executing high-quality physical building work with experienced teams and rigorous on-site supervision.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
        title: "Material & Finish Selection",
        desc: "Sourcing and selecting premium, durable materials that match your aesthetic vision and budget.",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    },
    {
        title: "Project Coordination",
        desc: "Managing timelines, contractors, and resources to keep the project moving smoothly and efficiently.",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
        title: "Final Handover",
        desc: "Delivering a thoroughly inspected, rigorously cleaned, and fully completed home ready for living.",
        icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
    }
];

const journeySteps = [
    { number: "01", title: "Consultation", desc: "We sit down to understand your goals, lifestyle, and project budget constraints." },
    { number: "02", title: "Design & Planning", desc: "Developing initial concepts, finalizing floor plans, and securing necessary approvals." },
    { number: "03", title: "Cost & Planning Discussion", desc: "Presenting a clear Bill of Quantities and confirming the final project budget before starting." },
    { number: "04", title: "Construction", desc: "Breaking ground and executing the build with meticulous attention to structural integrity." },
    { number: "05", title: "Final Handover", desc: "Completing all finishing touches and officially handing over the keys to your new home." },
];

const benefits = [
    { title: "One coordinated process", desc: "A single point of responsibility from start to finish, ensuring consistency." },
    { title: "Better communication", desc: "No disconnect between the architect drawing the plans and the builder executing them." },
    { title: "Clearer project direction", desc: "Streamlined decision making prevents costly delays and architectural re-work." },
    { title: "Design and construction working together", desc: "Structural realities inform the design early on, avoiding impossible architectural plans." },
    { title: "Personalized approach", desc: "Your specific lifestyle needs remain the central focus throughout every stage of the build." }
];

const relatedServices = [
    { title: "House Plans", slug: "house-plans", desc: "Practical plans designed around your land and lifestyle." },
    { title: "3D Visualization", slug: "3d-visualization", desc: "Realistic views to see your home before we build." },
    { title: "BOQ & Estimation", slug: "boq-estimation", desc: "Clear quantities and cost estimates for better planning." },
];

export default function DesignBuildPage() {
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
                            alt="Design and Build Residential Architecture"
                            fill
                            priority
                            className="object-cover opacity-70"
                        />
                    </motion.div>
                    {/* Glassy overlays */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[6px] z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#111]/90 via-[#111]/40 to-[#111]/80 mix-blend-normal z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111]/80 via-transparent to-transparent mix-blend-normal z-10 pointer-events-none" />
                </ParallaxWrapper>
                {/* Subtle texture */}
                <div className="absolute inset-0 bg-[url('/image/noise.png')] opacity-[0.04] mix-blend-overlay pointer-events-none z-10" />

                <Container className="relative z-10 w-full h-full flex flex-col justify-center">
                    <div className="max-w-4xl pt-20">
                        <FadeUp delay={0.1}>
                            <p className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white shadow-sm">
                                DESIGN & BUILD
                            </p>
                        </FadeUp>

                        <div className="mb-10">
                            <SplitTextReveal
                                lines={[{ text: "From initial concept" }, { text: "to finished home." }]}
                                wrapperClassName="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] font-bold tracking-tight text-white leading-[1.05]"
                            />
                        </div>

                        <FadeUp delay={0.4} className="max-w-2xl mb-12">
                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
                                We bring your ideas into reality through a unified process. By combining architectural design and hands-on construction under one roof, we ensure quality, clear communication, and precise execution from the first sketch to the final handover.
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.5} className="flex flex-col sm:flex-row gap-4">
                            <Link href="/book-consultation" className="inline-flex h-14 items-center justify-center rounded-full bg-red-700 px-8 text-sm md:text-base font-bold text-white transition-all duration-300 hover:bg-red-800 hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] hover:-translate-y-1">
                                Book a Consultation
                            </Link>
                            <Link href="/projects" className="inline-flex h-14 items-center justify-center rounded-full border border-neutral-200/80 bg-white/60 backdrop-blur-md px-8 text-sm md:text-base font-bold text-neutral-900 transition-all duration-300 hover:bg-white hover:border-neutral-300 hover:shadow-sm hover:-translate-y-1">
                                View Our Work
                            </Link>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* ── 2. INTRODUCTION ─────────────────────────────────────── */}
            <section className="py-24 bg-white relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <FadeUp>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
                                    Simplicity through integration.
                                </h2>
                                <p className="text-lg text-neutral-600 leading-relaxed font-medium mb-8">
                                    Traditionally, building a home means balancing architects, engineers, and an entirely separate construction crew. This often leads to miscommunication, budget blowouts, and delays.
                                </p>
                                <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                                    Our Design & Build service removes that friction. We operate as a single unified team. The architects designing your floor plans walk the site alongside the engineers pouring the concrete, ensuring what is drawn is exactly what gets built, safely and efficiently.
                                </p>
                            </FadeUp>
                        </div>
                        <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)] group">
                            <RevealImage delay={0.2} className="w-full h-full">
                                <Image
                                    src="/image/Projects/project-2.png"
                                    alt="Detailed construction craftsmanship"
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                />
                            </RevealImage>
                            {/* Glass Accent */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <GlassCard className="p-5 bg-white/70 backdrop-blur-xl border-white/60 shadow-lg">
                                    <h4 className="font-bold text-neutral-900 text-sm tracking-widest uppercase mb-1">Seamless Construction</h4>
                                    <p className="text-xs text-neutral-600 font-medium">Concept and execution aligned perfectly.</p>
                                </GlassCard>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── 3. WHAT WE PROVIDE ──────────────────────────────────── */}
            <section className="py-24 md:py-32 bg-[#FDFCFA] relative">
                <div className="absolute inset-0 bg-neutral-900/[0.02]" />
                <Container className="relative z-10">
                    <FadeUp className="mb-16 text-center max-w-3xl mx-auto">
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">Capabilities</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">What We Provide</h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {provisions.map((item, idx) => (
                            <FadeUp key={item.title} delay={0.1 * idx}>
                                <GlassCard className="p-8 h-full bg-white/80 hover:bg-white border-white transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-red-700 mb-6 transition-colors duration-500">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

            {/* ── 4. OUR PROCESS ──────────────────────────────────────── */}
            <section className="py-24 md:py-32 bg-white overflow-hidden">
                <Container>
                    <FadeUp className="mb-20">
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">Methodology</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">Our Process</h2>
                    </FadeUp>

                    <div className="relative">
                        {/* Vertical line for desktop tracking */}
                        <div className="hidden md:block absolute left-[39px] top-[24px] bottom-0 w-[2px] bg-neutral-100 shrink-0 z-0">
                            <motion.div
                                className="w-full bg-red-700/20"
                                initial={{ height: "0%" }}
                                whileInView={{ height: "100%" }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="space-y-12">
                            {journeySteps.map((step, idx) => (
                                <FadeUp key={step.number} delay={0.1 * (idx % 3)} className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center group">
                                    <div className="flex items-center gap-6 md:w-[120px] shrink-0">
                                        <div className="w-20 h-20 rounded-full bg-neutral-50 shadow-sm border border-neutral-100 flex items-center justify-center text-xl font-bold text-neutral-400 group-hover:text-red-700 group-hover:bg-red-50/50 group-hover:border-red-100 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-10 relative bg-white">
                                            {step.number}
                                        </div>
                                    </div>
                                    <GlassCard className="p-8 w-full md:flex-1 bg-[#FDFCFA]/50 border-neutral-100 hover:bg-white hover:border-neutral-200 hover:shadow-md transition-all duration-500 group-hover:-translate-y-1">
                                        <h3 className="text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                                        <p className="text-base text-neutral-600 leading-relaxed">{step.desc}</p>
                                    </GlassCard>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── 5. WHY DESIGN & BUILD ───────────────────────────────── */}
            <section className="py-24 md:py-32 bg-neutral-900 text-white relative overflow-hidden">
                {/* Deep background treatment */}
                <div className="absolute inset-0 bg-[url('/image/noise.png')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
                <ParallaxWrapper offset={150} className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src="/image/Projects/project-3.png"
                        alt="High-end Architectural execution"
                        fill
                        className="object-cover opacity-10 grayscale scale-110"
                    />
                </ParallaxWrapper>

                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        <div>
                            <FadeUp className="sticky top-32">
                                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-500">Client Benefits</p>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
                                    Why choose <br className="hidden md:block" />Design & Build?
                                </h2>
                                <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
                                    A singular, highly focused methodology creating better homes through aligned thinking.
                                </p>
                            </FadeUp>
                        </div>

                        <div className="space-y-6">
                            {benefits.map((benefit, idx) => (
                                <FadeUp key={benefit.title} delay={0.1 * idx}>
                                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-red-700/20 flex items-center justify-center shrink-0">
                                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                                <p className="text-neutral-400 leading-relaxed font-medium">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeUp>
                            ))}
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
                            Ready to start planning your new home?
                        </h2>
                        <p className="text-lg text-neutral-500 mb-12 max-w-xl mx-auto font-medium">
                            Let&apos;s sit down and discuss your project. We&apos;ll help you figure out the best way forward, step by step.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-consultation" className="inline-flex h-14 items-center justify-center rounded-full bg-red-700 px-8 text-sm md:text-base font-bold text-white transition-all duration-300 hover:bg-red-800 hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] hover:-translate-y-1">
                                Book a Consultation
                            </Link>
                            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border border-neutral-200 bg-white px-8 text-sm md:text-base font-bold text-neutral-900 transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-sm hover:-translate-y-1">
                                Contact Us
                            </Link>
                        </div>
                    </FadeUp>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
