"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import { Component, ReactNode } from "react";
import { motion } from "framer-motion";

// ── Error boundary for 3D ─────────────────────────────────────────
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    state = { hasError: false };
    static getDerivedStateFromError() { return { hasError: true }; }
    render() {
        if (this.state.hasError)
            return <div className="flex w-full h-full min-h-[300px] items-center justify-center text-sm text-neutral-400">3D Experience currently unavailable.</div>;
        return this.props.children;
    }
}
const ScrollHouseExperience = dynamic(() => import("@/components/three/ScrollHouseExperience"), { ssr: false });

// ── Countdown target date ─────────────────────────────────────────
const LAUNCH_DATE = new Date("2026-12-01T00:00:00");

function getTimeLeft() {
    const diff = LAUNCH_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

// ── Waitlist form type ────────────────────────────────────────────
type WaitlistForm = {
    name: string;
    email: string;
    phone: string;
    projectType: string;
};

const faqItems = [
    {
        q: "When is the launch?",
        a: "Early access is planned for late 2026. Join the waitlist to be among the first to experience it.",
    },
    {
        q: "Will this be available for all projects?",
        a: "Yes. The VR Experience will be available for most new residential projects.",
    },
    {
        q: "Can I try it before construction starts?",
        a: "Absolutely. You can explore and refine your design in VR before anything is built.",
    },
    {
        q: "Is the VR experience free for N&M clients?",
        a: "Yes. It's included as part of our design and planning process for qualifying projects.",
    },
];

const roadmap = [
    { number: "1", title: "Waitlist Open", desc: "Join now to secure your early access.", status: "Now Open", active: true },
    { number: "2", title: "Private Preview Sessions", desc: "Invitations sent for exclusive preview walkthroughs.", status: "Coming Soon", active: false },
    { number: "3", title: "Early Access Launch", desc: "Early access for waitlist members.", status: "Late 2026", active: false },
    { number: "4", title: "Full Public Experience", desc: "VR platform opens to all homeowners.", status: "2026", active: false },
];

const vrFeatures = [
    {
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.07A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14m0 0a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v6z" />
            </svg>
        ),
        title: "Walk through rooms in Immersive 3D",
        desc: "Move freely through every space just like real life.",
    },
    {
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
        ),
        title: "Explore materials and finishes",
        desc: "See textures and finishes in real time with true detail.",
    },
    {
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: "Review lighting at different times",
        desc: "Experience natural and artificial light from morning to night.",
    },
    {
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Collaborate with family or architects",
        desc: "Share your walkthroughs and gather feedback together.",
    },
    {
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: "Make decisions with confidence",
        desc: "Visualise before you build — reduce changes and build with certainty.",
    },
];

const earlyAccessPerks = [
    {
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: "Priority Access",
        desc: "Be the first to experience our VR platform.",
    },
    {
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Exclusive Demos",
        desc: "Get early access to private VR walkthroughs.",
    },
    {
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Design Preview Sessions",
        desc: "Preview your project and refine with our experts.",
    },
    {
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        ),
        title: "Special Launch Updates",
        desc: "Stay informed with feature drops and new tools.",
    },
];

// ── Countdown Unit ─────────────────────────────────────────────────
function CountdownUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center shrink-0">
            <div className="w-[72px] h-[72px] flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
                {/* key forces remount → triggers digit-flip CSS animation on every tick */}
                <span
                    key={value}
                    className="text-3xl font-light text-white tracking-widest tabular-nums animate-digit-flip"
                >
                    {String(value).padStart(2, "0")}
                </span>
            </div>
            <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">{label}</span>
        </div>
    );
}

export default function VRExperiencePage() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [waitlistForm, setWaitlistForm] = useState<WaitlistForm>({
        name: "", email: "", phone: "", projectType: "",
    });
    const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleWaitlist = (e: React.FormEvent) => {
        e.preventDefault();
        setWaitlistSubmitted(true);
        setWaitlistForm({ name: "", email: "", phone: "", projectType: "" });
    };

    return (
        <main className="min-h-screen bg-[#050505] animate-page-enter selection:bg-white/20">

            {/* ── FIXED Pristine VR Background ─────────────────────────── */}
            <motion.div
                className="fixed inset-0 z-0 pointer-events-none bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="absolute inset-0">
                    <Image
                        src="/Image/VR-Ecperience/vr-teaser.png"
                        alt="N&M Engineering VR Experience Background"
                        fill
                        priority
                        className="object-cover object-center opacity-80"
                    />
                </div>

                {/* Minimal cinematic gradients specifically around the VERY EDGES, ensuring the image remains highly visible and unmodified in the center */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 mix-blend-multiply" />

                {/* Subtle vignette isolated to the outer borders */}
                <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />
            </motion.div>

            {/* ── 1. HERO ─────────────────────────────────────────── */}
            <section className="relative z-10 w-full min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20">
                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                        {/* Left: Text Content */}
                        <motion.div
                            className="flex flex-col lg:col-span-7 xl:col-span-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/90">Early Access</span>
                                </span>
                                <div className="h-px w-8 bg-white/20" />
                                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/60">
                                    N&M Engineering — VR
                                </p>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-semibold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-2xl">
                                Your Future Space.<br />
                                <span className="text-white/60">Before It's Built.</span>
                            </h1>

                            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 font-light max-w-lg">
                                Step inside your architectural vision before construction begins. Explore every dimension, material, and detail in immersive, photorealistic virtual reality.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#waitlist"
                                    className="inline-flex max-w-max items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:scale-[0.98]"
                                >
                                    Join the Waitlist
                                </a>
                                <a
                                    href="#features"
                                    className="inline-flex max-w-max items-center justify-center gap-2 rounded-full border border-white/10 bg-black/20 px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 active:scale-[0.98]"
                                >
                                    Explore the Technology
                                </a>
                            </div>
                        </motion.div>

                        {/* Right: Premium Glass Countdown */}
                        <motion.div
                            className="flex justify-start lg:justify-end w-full lg:col-span-5 xl:col-span-6"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        >
                            <div className="rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.6)] p-8 md:p-10 w-full max-w-[420px] relative overflow-hidden group">
                                {/* Subtle animated top highlight */}
                                <div className="absolute top-0 left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="flex items-center justify-between mb-10">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                                        Launch Countdown
                                    </p>
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                        <svg className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex items-start justify-between w-full">
                                    <CountdownUnit value={timeLeft.days} label="Days" />
                                    <div className="flex items-center pb-8 text-white/20 text-3xl font-thin self-start mt-4">:</div>
                                    <CountdownUnit value={timeLeft.hours} label="Hours" />
                                    <div className="flex items-center pb-8 text-white/20 text-3xl font-thin self-start mt-4">:</div>
                                    <CountdownUnit value={timeLeft.minutes} label="Mins" />
                                    <div className="flex items-center pb-8 text-white/20 text-3xl font-thin self-start mt-4">:</div>
                                    <CountdownUnit value={timeLeft.seconds} label="Secs" />
                                </div>

                                <div className="mt-10 pt-6 border-t border-white/10">
                                    <p className="text-[12px] text-white/40 leading-relaxed font-light">
                                        Public rollout planned for December 2026. Secure your spot on the waitlist for exclusive private previews.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </Container>
            </section>

            {/* ── ARCHITECTURAL INVERSION GLASS MASK ───────────────────── */}
            <div className="relative z-20 w-full -mt-10 bg-[#FDFCFA]/95 rounded-t-[2.5rem] md:rounded-t-[4rem]  shadow-[0_-30px_80px_rgba(0,0,0,0.6)] border-t border-white/60 ring-1 ring-white/20 overflow-hidden pt-10">

                {/* ── 2. EARLY ACCESS PERKS ───────────────────────────── */}
                <section className="w-full py-12 bg-transparent border-b border-white/30">
                    <Container>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {earlyAccessPerks.map((perk) => (
                                <div key={perk.title} className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 border border-red-100/60">
                                        {perk.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-neutral-900 mb-1">{perk.title}</h3>
                                        <p className="text-xs text-neutral-500 leading-relaxed">{perk.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* ── 3. WHAT YOU'LL BE ABLE TO DO ────────────────────── */}
                <section id="features" className="w-full py-20 md:py-28">
                    <Container>
                        <div className="mb-14">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
                                What You&apos;ll Be Able to Do
                            </p>
                            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                                Experience. Explore.<br className="hidden md:block" /> Decide with Confidence.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                            {vrFeatures.map((f) => (
                                <GlassCard
                                    key={f.title}
                                    className="p-6 flex flex-col gap-4
                                transition-[transform,box-shadow]
                                duration-300
                                [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                                will-change-[transform]
                                hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(0,0,0,0.10)]"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 border border-red-100/60">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-sm font-semibold text-neutral-900 leading-snug">{f.title}</h3>
                                    <p className="text-xs text-neutral-500 leading-relaxed">{f.desc}</p>
                                </GlassCard>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* ── 4. LAUNCH ROADMAP ───────────────────────────────── */}
                <section className="w-full py-16 md:py-24 bg-transparent border-t border-white/30">
                    <Container>
                        <div className="mb-14">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
                                Launch Roadmap
                            </p>
                            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                                What&apos;s Coming.
                            </h2>
                        </div>

                        {/* Desktop */}
                        <div className="hidden md:grid grid-cols-4 gap-6 relative">
                            <div className="absolute top-6 left-[12%] right-[12%] h-px bg-neutral-200 z-0" />
                            {roadmap.map((step) => (
                                <div key={step.number} className="relative z-10 flex flex-col items-start">
                                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold shadow-sm transition-colors ${step.active ? "bg-red-700 border-red-700 text-white" : "bg-white border-neutral-200 text-neutral-500"}`}>
                                        {step.number}
                                    </div>
                                    <span className={`mb-2 inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border ${step.active ? "bg-red-50 border-red-100 text-red-700" : "bg-white/60 border-neutral-200 text-neutral-400"}`}>
                                        {step.status}
                                    </span>
                                    <h3 className="text-base font-semibold text-neutral-900 mb-2">{step.title}</h3>
                                    <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Mobile */}
                        <div className="flex flex-col gap-6 md:hidden">
                            {roadmap.map((step) => (
                                <div key={step.number} className="flex items-start gap-5">
                                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-bold shadow-sm ${step.active ? "bg-red-700 border-red-700 text-white" : "bg-white border-neutral-200 text-neutral-500"}`}>
                                        {step.number}
                                    </div>
                                    <div className="pt-1">
                                        <span className={`mb-2 inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border ${step.active ? "bg-red-50 border-red-100 text-red-700" : "bg-white/60 border-neutral-200 text-neutral-400"}`}>
                                            {step.status}
                                        </span>
                                        <h3 className="text-base font-semibold text-neutral-900 mb-1">{step.title}</h3>
                                        <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* ── 5. DARK BANNER — 3D EXPERIENCE ─────────────────── */}
                <section className="w-full py-0">
                    <Container>
                        <div className="relative rounded-[32px] overflow-hidden bg-neutral-900/90 backdrop-blur-2xl border border-white/10 shadow-[inner_0_1px_1px_rgba(255,255,255,0.1)] min-h-[480px] flex flex-col lg:flex-row items-stretch">
                            {/* Left: Text */}
                            <div className="relative z-10 flex flex-col justify-center p-10 lg:p-16 lg:w-[42%] border-b border-white/10 lg:border-b-0 lg:border-r">
                                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-red-500">
                                    A New Way to Build
                                </p>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-snug mb-5">
                                    See your future space before a single brick is laid.
                                </h2>
                                <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
                                    Our VR Experience puts you at the center of your design, so you can feel it, live it, and perfect it — before it&apos;s built.
                                </p>
                                <a
                                    href="#waitlist"
                                    className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                                >
                                    See the VR Experience
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>

                                {/* Feature badges */}
                                <div className="mt-8 flex flex-wrap gap-3">
                                    {[
                                        { icon: "📐", label: "True to Scale" },
                                        { icon: "🎨", label: "Photorealistic" },
                                        { icon: "🖐️", label: "Interactive" },
                                        { icon: "⚡", label: "Real-time Updates" },
                                    ].map((b) => (
                                        <span key={b.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[11px] font-medium text-white/70">
                                            <span>{b.icon}</span>{b.label}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right: 3D Model */}
                            <div className="flex-1 relative min-h-[400px] bg-neutral-800/50">
                                <ErrorBoundary>
                                    <ScrollHouseExperience />
                                </ErrorBoundary>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* ── 6. WAITLIST / SIGN UP ───────────────────────────── */}
                <section id="waitlist" className="w-full py-20 md:py-28 bg-transparent">
                    <Container>
                        <GlassCard className="overflow-hidden border border-white/60 shadow-sm p-0">
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
                                {/* Left: Info */}
                                <div className="relative p-10 lg:p-16 flex flex-col justify-between border-b border-white/40 lg:border-b-0 lg:border-r overflow-hidden">
                                    {/* Subtle red glow */}
                                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-50 rounded-full blur-[80px] pointer-events-none" />

                                    <div className="relative z-10">
                                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
                                            Be Among the First
                                        </p>
                                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-5 leading-tight">
                                            Be among the first homeowners to experience N&amp;M VR.
                                        </h2>
                                        <p className="text-neutral-600 text-base leading-relaxed max-w-sm mb-10">
                                            Join our waitlist and get early access, exclusive previews, and launch updates.
                                        </p>

                                        {/* Stats */}
                                        <div className="flex gap-8">
                                            <div>
                                                <p className="text-2xl font-semibold text-neutral-900">100+</p>
                                                <p className="text-xs text-neutral-400 mt-1">Early Sign-ups</p>
                                            </div>
                                            <div>
                                                <p className="text-2xl font-semibold text-neutral-900">15+</p>
                                                <p className="text-xs text-neutral-400 mt-1">Preview Sessions</p>
                                            </div>
                                            <div>
                                                <p className="text-2xl font-semibold text-neutral-900">2026</p>
                                                <p className="text-xs text-neutral-400 mt-1">Launch Year</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Form */}
                                <div className="p-10 lg:p-16">
                                    {waitlistSubmitted ? (
                                        <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 border border-green-100 mb-5">
                                                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold text-neutral-900 mb-2">You&apos;re on the list!</h3>
                                            <p className="text-sm text-neutral-500 max-w-xs">
                                                We&apos;ll be in touch as soon as early access opens. Thank you for joining.
                                            </p>
                                            <button
                                                onClick={() => setWaitlistSubmitted(false)}
                                                className="mt-6 rounded-full border border-neutral-300 bg-white/70 px-6 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
                                            >
                                                Add Another
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleWaitlist} className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <div className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/60 backdrop-blur-md px-4 py-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(255,255,255,0.5)] focus-within:ring-2 focus-within:ring-red-700/50 focus-within:bg-white/90 transition-all duration-300">
                                                    <svg className="w-4 h-4 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="Full Name"
                                                        value={waitlistForm.name}
                                                        onChange={e => setWaitlistForm(p => ({ ...p, name: e.target.value }))}
                                                        className="flex-1 bg-transparent text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/60 backdrop-blur-md px-4 py-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(255,255,255,0.5)] focus-within:ring-2 focus-within:ring-red-700/50 focus-within:bg-white/90 transition-all duration-300">
                                                <svg className="w-4 h-4 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="Email Address"
                                                    value={waitlistForm.email}
                                                    onChange={e => setWaitlistForm(p => ({ ...p, email: e.target.value }))}
                                                    className="flex-1 bg-transparent text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/60 backdrop-blur-md px-4 py-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(255,255,255,0.5)] focus-within:ring-2 focus-within:ring-red-700/50 focus-within:bg-white/90 transition-all duration-300">
                                                <svg className="w-4 h-4 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    value={waitlistForm.phone}
                                                    onChange={e => setWaitlistForm(p => ({ ...p, phone: e.target.value }))}
                                                    className="flex-1 bg-transparent text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/60 backdrop-blur-md px-4 py-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(255,255,255,0.5)] focus-within:ring-2 focus-within:ring-red-700/50 focus-within:bg-white/90 transition-all duration-300">
                                                <svg className="w-4 h-4 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                                <select
                                                    value={waitlistForm.projectType}
                                                    onChange={e => setWaitlistForm(p => ({ ...p, projectType: e.target.value }))}
                                                    className="flex-1 bg-transparent text-sm text-neutral-600 focus:outline-none"
                                                >
                                                    <option value="">Project Type</option>
                                                    <option value="new-home">New Home</option>
                                                    <option value="renovation">Renovation</option>
                                                    <option value="planning">Planning & Design</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full rounded-full bg-red-700 py-4 text-sm font-medium text-white transition-all hover:bg-red-800 hover:shadow-lg hover:-translate-y-0.5 mt-1"
                                            >
                                                Join the Waitlist →
                                            </button>
                                            <p className="text-[11px] text-neutral-400 text-center">
                                                We respect your privacy. No spam, ever.
                                            </p>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </GlassCard>
                    </Container>
                </section>

                {/* ── 7. FAQ ──────────────────────────────────────────── */}
                <section className="w-full pb-16 md:pb-24">
                    <Container>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                            <div>
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
                                    FAQ Preview
                                </p>
                                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                                    Got Questions? We&apos;ve Got Answers.
                                </h2>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 px-5 py-2.5 text-sm font-medium text-neutral-900 backdrop-blur-md transition hover:bg-neutral-900 hover:text-white hover:border-neutral-900 shrink-0"
                            >
                                View All FAQs
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {faqItems.map((item, idx) => (
                                <GlassCard key={idx} className="overflow-hidden">
                                    <button
                                        className="w-full flex items-center justify-between p-6 text-left
                                    transition-colors duration-200
                                    [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                                    hover:bg-white/40"
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        aria-expanded={openFaq === idx}
                                    >
                                        <span className="text-sm font-semibold text-neutral-900 pr-4">{item.q}</span>
                                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all duration-200 ${openFaq === idx ? "rotate-45 bg-red-700 border-red-700 text-white" : ""}`}>
                                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                            </svg>
                                        </span>
                                    </button>
                                    {openFaq === idx && (
                                        <div className="px-6 pb-6">
                                            <div className="h-px bg-neutral-200/60 mb-4" />
                                            <p className="text-sm text-neutral-600 leading-relaxed">{item.a}</p>
                                        </div>
                                    )}
                                </GlassCard>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* ── 8. BOTTOM CTA BANNER ────────────────────────────── */}
                <section className="w-full pb-24">
                    <Container>
                        <div className="relative rounded-[32px] overflow-hidden bg-red-700 px-10 py-14 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 group">

                            {/* Animated Background Image */}
                            <motion.div
                                className="absolute inset-0 z-0 pointer-events-none"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            >
                                <Image
                                    src="/image/Projects/project-2.png"
                                    alt="Architectural CTA Background"
                                    fill
                                    className="object-cover opacity-20 mix-blend-overlay grayscale transition-opacity duration-700 group-hover:opacity-30"
                                />
                            </motion.div>

                            {/* Gradient Overlay to protect the theme */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-800/80 to-transparent mix-blend-multiply pointer-events-none z-0" />

                            {/* Subtle glow */}
                            <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-400/30 rounded-full blur-[80px] pointer-events-none z-0 transition-opacity duration-700 group-hover:opacity-50" />

                            <div className="relative z-10 flex items-center gap-5">
                                <div className="hidden md:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/20 border border-white/20">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                                        Be First to Experience the Future of Home Design
                                    </h2>
                                    <p className="text-white/70 text-sm max-w-md">
                                        Step into your future today. Join the waitlist and shape the way you build tomorrow.
                                    </p>
                                </div>
                            </div>

                            <a
                                href="#waitlist"
                                className="relative z-10 shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-red-700 transition-all hover:bg-neutral-100 hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Join the Waitlist
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </Container>
                </section>

                {/* ── 9. FOOTER ───────────────────────────────────────── */}
                <div className="bg-white/80 backdrop-blur-xl border-t border-white/30">
                    <Footer />
                </div>

            </div> {/* End of Mask */}
        </main>
    );
}
