"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ParallaxWrapper from "@/components/motion/ParallaxWrapper";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import AnimatedVRBox from "@/components/motion/AnimatedVRBox";
import AnimatedTeamGraphic from "@/components/motion/AnimatedTeamGraphic";
import GlassCard from "@/components/ui/GlassCard";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { projects, services, values, processSteps } from "@/lib/data";

export default function AboutPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <main className="min-h-screen bg-[#FDFCFA]" />;
    }

    return (
        <main className="min-h-screen bg-transparent animate-page-enter">
            {/* ── FIXED GLASSY MOOD BACKGROUND ─────────────────────────────────── */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
                <Image
                    src="/image/Home/hero.png"
                    alt="N&M Architectural Home"
                    fill
                    priority
                    className="object-cover object-top opacity-80 filter blur-[2px] scale-[1.3] origin-top md:scale-125 md:origin-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/20 to-[#0a0a0a]/90" />
            </div>

            {/* ── CINEMATIC HERO ───────────────────────────────────────────────── */}
            <section className="relative z-10 w-full pt-48 pb-56 lg:pt-56 lg:pb-72 flex flex-col justify-center items-center text-center">
                <Container className="flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-8 ">
                        <span className="w-8 h-px bg-red-700/60" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                            The N&M Story
                        </p>
                        <span className="w-8 h-px bg-red-700/60" />
                    </div>
                    <SplitTextReveal
                        wrapperClassName="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-10 text-balance "
                        lines={[
                            { text: "Built Locally.", className: "block text-white" },
                            { text: "Designed with Care.", className: "block text-white/40 mt-1" }
                        ]}
                    />
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl text-balance ">
                        We are a Kegalle-based engineering and construction firm focused on practical homes, thoughtful renovations, and direct client support.
                    </p>
                </Container>
            </section>

            {/* ── ARCHITECTURAL INVERSION GLASS MASK ───────────────────── */}
            <div className="relative z-20 w-full -mt-24 md:-mt-36 bg-[#FDFCFA]/95  rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-30px_80px_rgba(0,0,0,0.6)] overflow-hidden pt-20 md:pt-32 border-t border-white/60 ring-1 ring-white/20">

                {/* ── WHO WE ARE ──────────────────────────────────────── */}
                <section className="w-full pb-16 md:pb-24">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                            <div>
                                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
                                    Who We Are
                                </p>
                                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-8">
                                    A Small Team.<br />
                                    A Hands-On Approach.
                                </h2>
                                <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                                    We&apos;re a small and growing team that enjoys solving real construction challenges. We listen, plan carefully, and work closely with our clients from the first sketch to the final handover.
                                </p>
                            </div>

                            {/* 3D Animated Floating Team Graphic */}
                            <div className="w-full flex justify-center items-center h-full pt-8 lg:pt-0">
                                <FadeUp className="w-full h-full max-w-lg" delay={0.2}>
                                    <AnimatedTeamGraphic />
                                </FadeUp>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ── OUR PROCESS ─────────────────────────────────────── */}
                <section className="w-full py-16 md:py-24 bg-white/40 border-y border-white/50">
                    <Container>
                        <FadeUp className="mb-16 md:mb-20 text-center ">
                            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-900">
                                How We Work
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
                                The Process.
                            </h2>
                        </FadeUp>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {processSteps.map((step, idx) => (
                                <FadeUp key={step.number} delay={0.1 * idx} className="h-full ">
                                    <GlassCard className="p-6 h-full flex flex-col justify-between">
                                        <div className="mb-8">
                                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200/50 bg-white/50 text-red-700 font-bold text-lg mb-6 shadow-sm">
                                                {step.number}
                                            </span>
                                            <h3 className="text-lg font-bold text-neutral-900 mb-2">{step.title}</h3>
                                            <p className="text-sm text-neutral-600 leading-relaxed font-medium">{step.description}</p>
                                        </div>
                                    </GlassCard>
                                </FadeUp>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* ── OUR VALUES ──────────────────────────────────────── */}
                <section className="w-full py-16 lg:py-24 bg-transparent border-b border-white/30">
                    <Container>
                        <FadeUp className="text-center mb-16 md:mb-24 ">
                            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-900">
                                What We Believe
                            </p>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">
                                Simple Values.<br className="hidden md:block" /> Strong Results.
                            </h2>
                        </FadeUp>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((v, idx) => (
                                <FadeUp key={v.title} delay={0.15 * idx} className="h-full ">
                                    <GlassCard className="p-8 md:p-10 flex flex-col gap-6 h-full items-start">
                                        <div className="w-10 h-1 bg-red-700/60 rounded-full"></div>
                                        <h3 className="text-xl font-bold text-neutral-900 tracking-tight">{v.title}</h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed font-medium">{v.description}</p>
                                    </GlassCard>
                                </FadeUp>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* ── VR TEASER LAYER (Light Theme "As Other") ────────────── */}
                <section className="w-full py-16 lg:py-24 bg-white/30">
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-white">
                            {/* Left: Text */}
                            <FadeUp className="flex-1 p-10 lg:p-20 flex flex-col justify-center lg:border-r border-white/50 relative z-10 h-full ">
                                <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                                    Future-Forward Experience
                                </p>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-8 leading-[1.1]">
                                    See Your Future Home<br />Before It&apos;s Built.
                                </h2>
                                <p className="text-neutral-600 mb-10 text-[0.95rem] leading-relaxed max-w-sm font-medium">
                                    Explore immersive 3D walkthroughs and interactive home experiences. This is the future of how we plan, visualise, and build together.
                                </p>
                                <div>
                                    <Link
                                        href="/vr-experience"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/50 backdrop-blur-xl px-8 py-4 text-xs font-bold uppercase tracking-widest text-neutral-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:bg-white hover:shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:scale-[0.98]"
                                    >
                                        Try VR Experience
                                    </Link>
                                </div>
                            </FadeUp>

                            {/* Right: Box */}
                            <FadeUp className="flex-1 min-h-[400px] lg:min-h-[600px] w-full  p-0 relative">
                                <AnimatedVRBox />
                            </FadeUp>
                        </div>
                    </Container>
                </section>

                <div className="bg-white/80 backdrop-blur-xl">
                    <CTASection />
                    <Footer />
                </div>
            </div>
        </main>
    );
}
