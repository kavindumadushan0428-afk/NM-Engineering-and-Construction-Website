"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import ParallaxWrapper from "@/components/motion/ParallaxWrapper";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Footer from "@/components/layout/Footer";
import ServiceArea from "@/components/sections/ServiceArea";

type FormState = {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
};

const initialForm: FormState = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
};

export default function ContactPage() {
    const [form, setForm] = useState<FormState>(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission placeholder — connect to backend when ready
        setSubmitted(true);
        setForm(initialForm);
    };

    return (
        <main className="min-h-screen bg-transparent animate-page-enter">

            {/* ── FIXED GLASSY MOOD BACKGROUND ─────────────────────────────────── */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
                <Image
                    src="/image/Home/hero.png"
                    alt="N&M Engineering contact"
                    fill
                    priority
                    className="object-cover object-center opacity-80 filter blur-[2px] scale-[1.1] md:scale-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/20 to-[#0a0a0a]/90" />
            </div>

            {/* ── CINEMATIC HERO ───────────────────────────────────────────────── */}
            <section className="relative z-10 w-full pt-48 pb-56 lg:pt-56 lg:pb-72 flex flex-col justify-center items-center text-center">
                <Container className="flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-8 h-px bg-red-700/60" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                            Get in Touch
                        </p>
                        <span className="w-8 h-px bg-red-700/60" />
                    </div>
                    <SplitTextReveal
                        wrapperClassName="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-10 text-balance"
                        lines={[
                            { text: "Let's Talk.", className: "block text-white" }
                        ]}
                    />
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl text-balance">
                        Have a project in mind? Fill in the form below or send us a message. We&apos;re happy to discuss your ideas and find the right way to move forward.
                    </p>
                </Container>
            </section>

            {/* ── ARCHITECTURAL INVERSION GLASS MASK ───────────────────── */}
            <div className="relative z-20 w-full -mt-24 md:-mt-36 bg-[#FDFCFA]/95 rounded-t-[2.5rem] md:rounded-t-[4rem]  shadow-[0_-30px_80px_rgba(0,0,0,0.6)] border-t border-white/60 ring-1 ring-white/20 overflow-hidden pt-20 md:pt-32">

                {/* ── CONTACT FORM + INFO ───────────────────────────────── */}
                <section className="w-full pb-16 md:pb-24 bg-transparent">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 items-start">

                            {/* Left: Contact Info */}
                            <GlassCard className="p-8 flex flex-col gap-8">
                                <div>
                                    <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Contact Details</h2>
                                    <ul className="space-y-5">
                                        <li className="flex items-start gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 border border-red-100/60 mt-0.5">
                                                <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Location</p>
                                                <p className="text-sm text-neutral-700">Rambukkana, Kegalle, Sri Lanka</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 border border-red-100/60 mt-0.5">
                                                <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Phone</p>
                                                <p className="text-sm text-neutral-700">
                                                    <a href="tel:+94704866966" className="hover:text-red-700 transition-colors">+94 70 486 6966</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 border border-red-100/60 mt-0.5">
                                                <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Email</p>
                                                <p className="text-sm text-neutral-700">
                                                    <a href="mailto:nmengser@gmail.com" className="hover:text-red-700 transition-colors">nmengser@gmail.com</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 border border-red-100/60 mt-0.5">
                                                <svg className="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Hours</p>
                                                <p className="text-sm text-neutral-200">Monday – Saturday<br />8:00 AM – 6:00 PM</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-t border-neutral-200/60 pt-6">
                                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">Follow Us</p>
                                    <div className="flex gap-3">
                                        <a
                                            href="https://www.facebook.com/nmengineering76"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/80 bg-white/60 text-neutral-400 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-white transition-all cursor-pointer shadow-sm"
                                            title="Facebook"
                                        >
                                            <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/nm_engineering_"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/80 bg-white/60 text-neutral-400 hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-white transition-all cursor-pointer shadow-sm"
                                            title="Instagram"
                                        >
                                            <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                        </a>
                                        <a
                                            href="https://wa.me/94704866966"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/80 bg-white/60 text-neutral-400 hover:text-[#25D366] hover:border-[#25D366] hover:bg-white transition-all cursor-pointer shadow-sm"
                                            title="WhatsApp"
                                        >
                                            <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" clipRule="evenodd" /></svg>
                                        </a>
                                        <a
                                            href="mailto:nmengser@gmail.com"
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200/80 bg-white/60 text-neutral-400 hover:text-red-700 hover:border-red-700 hover:bg-white transition-all cursor-pointer shadow-sm"
                                            title="Email"
                                        >
                                            <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </GlassCard>

                            {/* Right: Contact Form */}
                            <GlassCard className="p-8 md:p-10">
                                <h2 className="text-2xl font-semibold text-neutral-900 mb-8">Send a Message</h2>

                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center py-16 text-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 border border-green-100 mb-5">
                                            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-neutral-900 mb-2">Message Sent!</h3>
                                        <p className="text-sm text-neutral-600 max-w-sm">
                                            Thank you for getting in touch. We&apos;ll review your message and get back to you shortly.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-6 rounded-full border border-neutral-300 bg-white/70 px-6 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider" htmlFor="name">
                                                    Your Name *
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="Full name"
                                                    className="rounded-xl border border-white/60 bg-white/60 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-500 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-red-700/50 focus:border-red-700/50 focus:bg-white/90 hover:border-white transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(255,255,255,0.5)]"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider" htmlFor="email">
                                                    Email Address *
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="you@example.com"
                                                    className="rounded-xl border border-white/60 bg-white/60 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-500 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-red-700/50 focus:border-red-700/50 focus:bg-white/90 hover:border-white transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(255,255,255,0.5)]"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider" htmlFor="phone">
                                                    Phone Number
                                                </label>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    placeholder="07X XXX XXXX"
                                                    className="rounded-xl border border-white/60 bg-white/60 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-500 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-red-700/50 focus:border-red-700/50 focus:bg-white/90 hover:border-white transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(255,255,255,0.5)]"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider" htmlFor="service">
                                                    Interested In
                                                </label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    value={form.service}
                                                    onChange={handleChange}
                                                    className="rounded-xl border border-white/60 bg-white/60 px-4 py-3.5 text-sm text-neutral-900 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-red-700/50 focus:border-red-700/50 focus:bg-white/90 hover:border-white transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(255,255,255,0.5)]"
                                                >
                                                    <option value="">Select a service</option>
                                                    <option value="design-build">Design &amp; Build</option>
                                                    <option value="house-plans">House Plans</option>
                                                    <option value="3d-visualization">3D Visualization</option>
                                                    <option value="renovation">Renovation</option>
                                                    <option value="landscaping">Landscaping</option>
                                                    <option value="boq">BOQ &amp; Estimation</option>
                                                    <option value="consultation">Consultation</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1.5 mb-2">
                                            <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider" htmlFor="message">
                                                Your Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your project, location, rough budget..."
                                                className="rounded-xl border border-white/60 bg-white/60 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-500 backdrop-blur-md resize-none focus:outline-none focus:ring-2 focus:ring-red-700/50 focus:border-red-700/50 focus:bg-white/90 hover:border-white transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),0_1px_2px_rgba(255,255,255,0.5)]"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full rounded-full bg-red-700 py-4 text-sm font-medium text-white transition-all hover:bg-red-800 hover:shadow-lg hover:-translate-y-0.5 mt-2"
                                        >
                                            Send Message
                                        </button>

                                        <p className="text-xs text-neutral-400 text-center">
                                            We typically respond within 1 business day.
                                        </p>
                                    </form>
                                )}
                            </GlassCard>
                        </div>
                    </Container>
                </section>

                {/* ── SERVICE AREA ──────────────────────────────────────── */}
                {/* ── SERVICE AREA ──────────────────────────────────────── */}
                <div className="bg-white/80 backdrop-blur-xl border-t border-white/30">
                    <ServiceArea />

                    {/* ── FOOTER ────────────────────────────────────────────── */}
                    <Footer />
                </div>
            </div> {/* End of Mask */}
        </main>
    );
}
