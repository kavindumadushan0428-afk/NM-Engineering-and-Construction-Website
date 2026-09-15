"use client";

import React, { useState } from "react";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import Container from "@/components/ui/Container";
import ParallaxWrapper from "@/components/motion/ParallaxWrapper";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

// ── Custom Interfaces & Icons ─────────────────────────────────────
const projectTypes = [
    { id: "residential", label: "Residential", desc: "Design & Build Homes", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
    { id: "commercial", label: "Commercial", desc: "Offices & Retail", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
    { id: "architecture", label: "Architecture", desc: "Plans & Approvals", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /> },
    { id: "renovation", label: "Renovation", desc: "Extensions & Fixes", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /> },
    { id: "interior", label: "Interior", desc: "Design & Styling", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /> },
    { id: "landscaping", label: "Landscaping", desc: "Outdoor Spaces", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> },
];

const meetingMediums = [
    { id: "phone", label: "Phone Call", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
    { id: "whatsapp", label: "WhatsApp", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /> },
    { id: "zoom", label: "Online (Meet)", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /> },
    { id: "in_person", label: "In-Person", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
];

const OptionCard = ({ active, onClick, icon, title, desc }: { active: boolean, onClick: () => void, icon: React.ReactNode, title: string, desc?: string }) => (
    <button
        type="button"
        onClick={onClick}
        className={`relative flex flex-col items-start p-4 md:p-5 rounded-2xl border transition-all duration-400 outline-none
            ${active
                ? 'bg-white border-red-700/50 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] scale-[1.02] ring-1 ring-red-700/50'
                : 'bg-white/70 border-neutral-200/80 hover:bg-white hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)]'}`}
    >
        <div className={`mb-4 h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center transition-colors duration-400
            ${active ? 'bg-red-50 text-red-700 shadow-sm' : 'bg-neutral-100 text-neutral-500 shadow-sm'}`}>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
        </div>
        <div className={`text-base font-bold tracking-tight ${active ? 'text-neutral-900' : 'text-neutral-700'}`}>{title}</div>
        {desc && <div className={`text-xs mt-1.5 text-left font-medium ${active ? 'text-neutral-600' : 'text-neutral-500'}`}>{desc}</div>}

        {/* Selection Indicator Pip */}
        <div className={`absolute top-4 right-4 h-5 w-5 rounded-full outline-none transition-all duration-400 flex items-center justify-center
            ${active ? 'border-[5px] border-red-700 bg-white' : 'border-2 border-neutral-300 bg-white/50'}`}>
        </div>
    </button>
);

const InputBlock = ({ label, id, children }: { label: string, id: string, children: React.ReactNode }) => (
    <div className="flex flex-col gap-2 relative group">
        <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest pl-1" htmlFor={id}>{label}</label>
        {children}
    </div>
);

const inputClass = "w-full rounded-xl border border-neutral-200/80 bg-white/70 px-5 py-4 text-sm font-medium text-neutral-900 placeholder-neutral-400 backdrop-blur-md transition-all duration-500 outline-none focus:bg-white focus:border-red-600/40 focus:ring-4 focus:ring-red-600/10 shadow-sm hover:border-neutral-300";

export default function BookConsultationPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        location: "",
        description: "",
        budget: "",
        method: "",
        date: "",
        time: "",
        requirements: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSelect = (key: string, value: string) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Ensure manual card selects have been filled, if not, block submit ideally
        if (!form.projectType || !form.method) {
            alert("Please select a Project Type and Meeting Medium.");
            return;
        }

        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 1200);
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] animate-page-enter relative overflow-hidden">
            {/* ── CINEMATIC HERO ───────────────────────────────────────────────── */}
            <section className="relative w-full pt-48 pb-56 lg:pt-56 lg:pb-72 overflow-hidden flex flex-col justify-center items-center text-center z-10">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <ParallaxWrapper offset={120} className="absolute inset-x-0 -top-[15%] -bottom-[15%] pointer-events-none">
                        <Image
                            src="/image/Projects/project-3.png"
                            alt="Book N&M Engineering Consultation"
                            fill
                            priority
                            className="object-cover opacity-40 transition-opacity duration-1000"
                        />
                    </ParallaxWrapper>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent pointer-events-none" />
                </div>

                <Container className="relative z-10 text-center flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-8 h-px bg-red-700/60" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                            Project Inquiry
                        </p>
                        <span className="w-8 h-px bg-red-700/60" />
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <SplitTextReveal
                            wrapperClassName="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-10 text-balance"
                            lines={[
                                { text: "Book a Consultation.", className: "block text-white" }
                            ]}
                        />
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto text-balance">
                            Ready to start your journey? Provide us with a few details about your upcoming project, and our team will prepare a structured approach for our first meeting.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ── ARCHITECTURAL INVERSION MASK ───────────────────── */}
            <div className="relative z-20 w-full -mt-24 md:-mt-36 bg-[#FDFCFA] rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-30px_80px_rgba(0,0,0,0.6)] overflow-hidden pt-20 border-t border-white/10">

                {/* ── FORM SECTION ──────────────────────────────────────── */}
                <section className="relative w-full pb-32 z-10">
                    <Container>
                        <GlassCard className="p-6 sm:p-10 md:p-14 lg:p-16 max-w-5xl mx-auto shadow-[0_24px_80px_-16px_rgba(0,0,0,0.06)] relative overflow-hidden">
                            {/* Optional subtle inner glare for the main form card */}
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-scale-in">
                                    <div className="w-24 h-24 bg-green-50 rounded-[28px] border border-green-100/60 flex items-center justify-center mb-8 shadow-sm">
                                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-4xl font-semibold text-neutral-900 mb-5">Request Received</h3>
                                    <p className="text-neutral-600 text-lg max-w-lg mx-auto mb-12 leading-relaxed">
                                        Thank you for your consultation request. Our engineering team is reviewing your requirements and will contact you shortly to confirm the scheduled time.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                                        <Link
                                            href="/"
                                            className="rounded-full bg-red-700 px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:bg-red-800 hover:-translate-y-0.5 hover:shadow-lg"
                                        >
                                            Return to Homepage
                                        </Link>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="rounded-full border border-neutral-300 bg-white/60 px-8 py-3.5 text-sm font-semibold tracking-wide text-neutral-900 backdrop-blur-xl transition hover:bg-white hover:-translate-y-0.5"
                                        >
                                            Submit Another
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-14">

                                    {/* ── Section 1: Personal Information ── */}
                                    <div>
                                        <h3 className="text-2xl font-semibold text-neutral-900 mb-8 flex items-center gap-4">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-600 text-sm font-bold">1</span>
                                            Personal Details
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputBlock label="Full Name *" id="name">
                                                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
                                            </InputBlock>
                                            <InputBlock label="Email Address *" id="email">
                                                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                                            </InputBlock>
                                            <div className="md:col-span-2 lg:col-span-1">
                                                <InputBlock label="Phone Number *" id="phone">
                                                    <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="+94 7X XXX XXXX" />
                                                </InputBlock>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ── Section 2: Project Details ── */}
                                    <div>
                                        <h3 className="text-2xl font-semibold text-neutral-900 mb-8 flex items-center gap-4">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-600 text-sm font-bold">2</span>
                                            Project Specifics
                                        </h3>

                                        <div className="mb-8">
                                            <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest pl-1 mb-4 block">Project Type *</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {projectTypes.map(type => (
                                                    <OptionCard
                                                        key={type.id}
                                                        active={form.projectType === type.id}
                                                        onClick={() => handleSelect('projectType', type.id)}
                                                        icon={type.icon}
                                                        title={type.label}
                                                        desc={type.desc}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <InputBlock label="Location (City, District) *" id="location">
                                                <input id="location" name="location" type="text" required value={form.location} onChange={handleChange} className={inputClass} placeholder="e.g. Rambukkana, Kegalle" />
                                            </InputBlock>
                                            <InputBlock label="Estimated Budget (Optional)" id="budget">
                                                <input id="budget" name="budget" type="text" value={form.budget} onChange={handleChange} className={inputClass} placeholder="e.g. LKR 10M - 20M" />
                                            </InputBlock>
                                        </div>

                                        <InputBlock label="Brief Project Description *" id="description">
                                            <textarea id="description" name="description" required rows={4} value={form.description} onChange={handleChange} className={`${inputClass} resize-none min-h-[120px]`} placeholder="Tell us about your land, vision, specific requirements..." />
                                        </InputBlock>
                                    </div>

                                    {/* ── Section 3: Consultation Preferences ── */}
                                    <div>
                                        <h3 className="text-2xl font-semibold text-neutral-900 mb-8 flex items-center gap-4">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-600 text-sm font-bold">3</span>
                                            Meeting Preferences
                                        </h3>

                                        <div className="mb-8">
                                            <label className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest pl-1 mb-4 block">Preferred Medium *</label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                {meetingMediums.map(medium => (
                                                    <OptionCard
                                                        key={medium.id}
                                                        active={form.method === medium.id}
                                                        onClick={() => handleSelect('method', medium.id)}
                                                        icon={medium.icon}
                                                        title={medium.label}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <InputBlock label="Preferred Date *" id="date">
                                                <input id="date" name="date" type="date" required value={form.date} onChange={handleChange} className={inputClass} />
                                            </InputBlock>
                                            <InputBlock label="Preferred Time" id="time">
                                                <input id="time" name="time" type="time" value={form.time} onChange={handleChange} className={inputClass} />
                                            </InputBlock>
                                        </div>

                                        <InputBlock label="Additional Requirements & Notes" id="requirements">
                                            <textarea id="requirements" name="requirements" rows={3} value={form.requirements} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Any specific questions you want us to prepare for?" />
                                        </InputBlock>
                                    </div>

                                    <div className="h-px w-full bg-neutral-200/60" />

                                    {/* ── Submit Area ── */}
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-2">
                                        <p className="text-sm font-medium text-neutral-500 max-w-sm text-center md:text-left leading-relaxed">
                                            Your information is strictly confidential. We typically respond within <strong className="text-neutral-800">24 hours</strong> to confirm your slot.
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full md:w-auto relative group overflow-hidden rounded-full bg-red-700 px-12 py-4.5 lg:py-5 text-sm lg:text-base font-semibold tracking-wide text-white transition-all hover:bg-neutral-900 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 disabled:hover:bg-red-700"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center justify-center gap-3">
                                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Processing
                                                </div>
                                            ) : (
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    Request Consultation
                                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            )}
                                            {/* Hover glare effect */}
                                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </GlassCard>
                    </Container>
                </section>

            </div> {/* End of Mask */}
        </main>
    );
}
