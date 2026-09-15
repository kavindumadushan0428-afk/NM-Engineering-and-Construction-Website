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
        title: "Exterior Visualization",
        desc: "Highly realistic renders of the home's facade, rooflines, and immediate landscape integration.",
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    },
    {
        title: "Interior Visualization",
        desc: "Lifelike representations of interior spaces focusing on layout, proportions, and natural lighting.",
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"
    },
    {
        title: "Architectural 3D Modeling",
        desc: "Building the exact 3D structural geometry based precisely on the drafted architectural plans.",
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    },
    {
        title: "Material & Finish Visualization",
        desc: "Testing different textures, colors, and surface materials digitally before committing to physical purchases.",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    },
    {
        title: "Lighting & Environment Concepts",
        desc: "Simulating how natural sunlight and artificial fixtures will illuminate the built environment.",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    },
    {
        title: "Design Presentation Visuals",
        desc: "High-resolution rendering packages prepared for clear client, council, or investor review.",
        icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    }
];

const processSteps = [
    { number: "01", title: "Understand the Design", desc: "Reviewing your exact requirements, architectural plans, and aesthetic design direction." },
    { number: "02", title: "Develop the 3D Concept", desc: "Translating the 2D architectural ideas into a mathematically accurate digital 3D environment." },
    { number: "03", title: "Refine Materials & Details", desc: "Developing specific physical finishes, applying textures, and tuning realistic lighting setups." },
    { number: "04", title: "Create the Visualization", desc: "Letting the rendering engine produce the final high-fidelity realistic visual representation." },
    { number: "05", title: "Client Review", desc: "Presenting the visualizations in detail, allowing us to refine the architectural design where required." },
];

const benefits = [
    "Understand the proposed design fully",
    "Visualize spaces before breaking ground",
    "Explore materials and physical finishes safely",
    "Communicate design ideas more clearly",
    "Make massive structural decisions with confidence"
];

const relatedServices = [
    { title: "Design & Build", slug: "design-build", desc: "Complete end-to-end project support from planning to handover." },
    { title: "House Plans", slug: "house-plans", desc: "Practical plans designed around your land and lifestyle." },
    { title: "Interior Design", slug: "renovation", desc: "Transform your home with thoughtful, functional upgrades." },
];

export default function VisualizationPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFA] animate-page-enter">
            {/* ── 1. PREMIUM HERO ─────────────────────────────────────── */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900 text-[#FDFCFA]">
                <ParallaxWrapper offset={120} className="absolute inset-0 w-full h-full z-0">
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        animate={{ scale: [1.02, 1.08, 1.02] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        <Image
                            src="/image/Projects/project-3.png"
                            alt="3D Visualization Render"
                            fill
                            priority
                            className="object-cover opacity-70"
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
                                3D VISUALIZATION
                            </p>
                        </FadeUp>

                        <div className="mb-10">
                            <SplitTextReveal
                                lines={[{ text: "See your home" }, { text: "before it's built." }]}
                                wrapperClassName="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] font-bold tracking-tight text-white leading-[1.05]"
                            />
                        </div>

                        <FadeUp delay={0.4} className="max-w-2xl mb-12">
                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
                                We transform traditional architectural concepts and 2D house plans into highly realistic visual representations. Understand exactly how your proposed design will look, feel, and function long before construction begins.
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.5} className="flex flex-col sm:flex-row gap-4">
                            <Link href="/book-consultation" className="inline-flex h-14 items-center justify-center rounded-full bg-red-700 px-8 text-sm md:text-base font-bold text-white transition-all duration-300 hover:bg-white hover:text-red-700 hover:-translate-y-1">
                                Book a Consultation
                            </Link>
                            <Link href="/projects" className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 text-sm md:text-base font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1">
                                Explore Our Work
                            </Link>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* ── 2. VISUAL STORYTELLING: PLAN -> 3D -> REALISTIC ─────── */}
            <section className="py-24 bg-white relative overflow-hidden border-b border-neutral-100">
                <Container>
                    <div className="text-center mb-16">
                        <FadeUp>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
                                Plan → 3D Model → Reality
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-medium">
                                Watch as conceptual ideas transform into mathematical space. We take flat plans and construct them into a fully immersive environment.
                            </p>
                        </FadeUp>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 max-w-5xl mx-auto">
                        <div className="hidden md:block absolute top-[100px] left-[10%] right-[10%] h-[2px] bg-neutral-100 -z-10">
                            <motion.div
                                className="h-full bg-red-700/20"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </div>

                        {[
                            { step: "PLAN", desc: "Detailed 2D architectural blueprinting.", img: "/image/Projects/project-2.png" },
                            { step: "3D MODEL", desc: "Structural geometric modeling.", img: "/image/Projects/project-1.png" },
                            { step: "REALISTIC", desc: "Lifelike materials and lighting applied.", img: "/image/Projects/project-3.png" }
                        ].map((stage, idx) => (
                            <FadeUp key={stage.step} delay={0.1 * idx} className="group">
                                <div className="flex flex-col items-center">
                                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-100 shadow-sm border border-neutral-200">
                                        <Image
                                            src={stage.img}
                                            alt={stage.step}
                                            fill
                                            className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 ${idx === 0 ? "grayscale opacity-80" : idx === 1 ? "grayscale-[50%]" : "grayscale-0"}`}
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral-900 tracking-widest uppercase mb-2">{stage.step}</h3>
                                    <p className="text-sm text-neutral-500 font-medium text-center">{stage.desc}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ── 3. WHAT WE PROVIDE ──────────────────────────────────── */}
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

            {/* ── 4. WHY 3D VISUALIZATION MATTERS ─────────────────────── */}
            <section className="py-24 md:py-32 bg-white border-y border-neutral-100 relative overflow-hidden">
                <ParallaxWrapper offset={100} className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none hidden lg:block">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-150">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </ParallaxWrapper>

                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <FadeUp className="mb-10">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
                                    Clarity Before Construction.
                                </h2>
                                <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                                    A blueprint is abstract. 3D visualization bridges the gap between technical lines and human perception, letting you walk through the layout before a single brick is laid.
                                </p>
                            </FadeUp>

                            <div className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <FadeUp key={idx} delay={0.05 * idx}>
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-6 h-6 rounded-full bg-red-700/5 border border-red-700/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-red-700">
                                                <svg className="w-3 h-3 text-red-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-base text-neutral-800 font-medium">{benefit}</span>
                                        </div>
                                    </FadeUp>
                                ))}
                            </div>
                        </div>

                        <FadeUp delay={0.2} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)] group border border-neutral-100">
                            <Image
                                src="/image/Projects/project-1.png"
                                alt="Visualizing Architecture"
                                fill
                                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                            />
                            {/* Glass Accent */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                                <GlassCard className="p-5 bg-white/10 border-white/20 backdrop-blur-xl">
                                    <p className="text-white font-medium text-sm leading-relaxed">
                                        &quot;Seeing the exact sunlight hit the living room floor changed our entire approach to the window placements.&quot;
                                    </p>
                                </GlassCard>
                            </div>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* ── 5. PREMIUM GALLERY SHOWCASE ─────────────────────────── */}
            <section className="py-24 md:py-32 bg-[#FDFCFA]">
                <Container>
                    <FadeUp className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
                            Featured Renders
                        </h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Large Featured Render */}
                        <FadeUp className="md:col-span-12 lg:col-span-8 h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden group">
                            <Image src="/image/Projects/project-3.png" alt="Featured Architecture" fill className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 border border-neutral-200/20 rounded-3xl z-10 pointer-events-none" />
                        </FadeUp>

                        {/* Secondary Supporting Renders */}
                        <FadeUp delay={0.1} className="md:col-span-6 lg:col-span-4 h-[300px] lg:h-[500px] relative rounded-3xl overflow-hidden group">
                            <Image src="/image/Projects/project-2.png" alt="Secondary Architecture" fill className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 border border-neutral-200/20 rounded-3xl z-10 pointer-events-none" />
                        </FadeUp>

                        {/* Architectural Closeups */}
                        <FadeUp delay={0.2} className="md:col-span-6 lg:col-span-6 h-[300px] md:h-[400px] relative rounded-3xl overflow-hidden group">
                            <Image src="/image/Projects/project-1.png" alt="Close Architecture Detail" fill className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 border border-neutral-200/20 rounded-3xl z-10 pointer-events-none" />
                        </FadeUp>

                        <FadeUp delay={0.3} className="md:col-span-12 lg:col-span-6 h-[300px] md:h-[400px] relative rounded-3xl overflow-hidden group">
                            <Image src="/image/Projects/project-3.png" alt="Interior Details" fill className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 border border-neutral-200/20 rounded-3xl z-10 pointer-events-none" />
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* ── 6. PROCESS ──────────────────────────────────────────── */}
            <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-neutral-100">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
                        <div className="lg:sticky lg:top-32 h-fit">
                            <FadeUp>
                                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">Digital Workflow</p>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
                                    The rendering timeline.
                                </h2>
                                <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                                    Transforming a 2D drawing into a photorealistic space requires precise mathematical structuring followed by rigorous artistic detail.
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
                                            <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                                            <p className="text-base text-neutral-600 leading-relaxed font-medium">{step.desc}</p>
                                        </div>
                                    </FadeUp>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── 7. RELATED SERVICES & CTA ───────────────────────────── */}
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

            {/* ── 8. FINAL CTA ────────────────────────────────────────── */}
            <section className="py-24 md:py-32 bg-neutral-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/image/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <Container className="relative z-10 flex flex-col items-center">
                    <FadeUp>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 max-w-3xl mx-auto leading-tight">
                            Visualize Your Idea Before You Build It.
                        </h2>
                        <p className="text-lg text-neutral-400 mb-12 max-w-xl mx-auto font-medium">
                            Let&apos;s discuss your project and visualization requirements to help you see the possibilities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-consultation" className="inline-flex h-14 items-center justify-center rounded-full bg-red-700 px-8 text-sm md:text-base font-bold text-white transition-all duration-300 hover:bg-white hover:text-red-700 hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] hover:-translate-y-1">
                                Book a Consultation
                            </Link>
                            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 text-sm md:text-base font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1">
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
