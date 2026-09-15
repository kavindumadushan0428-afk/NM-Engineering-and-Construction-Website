import Image from "next/image";
import Link from "next/link";
import ParallaxWrapper from "@/components/motion/ParallaxWrapper";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import RevealImage from "@/components/ui/RevealImage";
import GlassCard from "@/components/ui/GlassCard";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";

const services = [
    {
        id: 1,
        title: "Design & Build",
        description:
            "Complete end-to-end support from your first idea to handover. We work closely with you at every step to make sure the design is practical, the build is solid, and the result is something you're proud of.",
        image: "/image/Services/service-1.png",
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        areas: ["New Homes", "Complete Projects", "Kegalle & Nearby"],
    },
    {
        id: 2,
        title: "House Plans",
        description:
            "We design practical plans around your land, lifestyle and budget. Every drawing is done with care — considering your family's needs, the site conditions, and local building practices.",
        image: "/image/Services/service-2.png",
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        areas: ["Floor Plans", "Elevations", "Layout Design"],
    },
    {
        id: 3,
        title: "3D Visualization",
        description:
            "See your home before it's built. We create realistic 3D views that help you understand the look, feel and layout of your future space — making it easier to make decisions with confidence.",
        image: "/image/Services/service-3.png",
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        areas: ["Exterior Views", "Interior Views", "Available Online"],
    },
    {
        id: 4,
        title: "Renovation",
        description:
            "Smart upgrades that improve comfort and property value. Whether it's a single room or a more comprehensive renovation, we approach each project carefully to make the most of your existing space.",
        image: "/image/Services/service-4.png",
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        areas: ["Room Upgrades", "Extensions", "Kegalle & Nearby"],
    },
    {
        id: 5,
        title: "Landscaping",
        description:
            "Thoughtful outdoor spaces that complement your home. We help design and build outdoor areas that are practical, low-maintenance, and feel like a natural extension of your property.",
        image: "/image/Services/service-1.png",
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        areas: ["Garden Design", "Outdoor Spaces", "Property Boundaries"],
    },
    {
        id: 6,
        title: "BOQ & Estimation",
        description:
            "Clear quantities and cost estimates to plan with confidence. We prepare a transparent Bill of Quantities so you have a realistic picture of what your project will cost before anything begins.",
        image: "/image/Services/service-2.png",
        icon: (
            <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        areas: ["Quantity Takeoff", "Cost Estimation", "Available Online"],
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-transparent animate-page-enter">

            {/* ── FIXED GLASSY MOOD BACKGROUND ─────────────────────────────────── */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
                <Image
                    src="/image/Projects/project-3.png"
                    alt="N&M Engineering structure"
                    fill
                    priority
                    className="object-cover object-center opacity-80 filter blur-[2px] scale-[1.1] md:scale-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/20 to-[#0a0a0a]/90" />
            </div>

            {/* ── CINEMATIC HERO ───────────────────────────────────────────────── */}
            <section className="relative z-10 w-full pt-52 pb-64 lg:pt-60 lg:pb-80 flex flex-col justify-center items-center text-center">
                <Container className="flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-8 h-px bg-red-700/60" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                            What We Offer
                        </p>
                        <span className="w-8 h-px bg-red-700/60" />
                    </div>

                    <SplitTextReveal
                        wrapperClassName="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-10 text-balance"
                        lines={[
                            { text: "Practical Plans.", className: "block text-white" },
                            { text: "Solid Execution.", className: "block text-white/40 mt-1" }
                        ]}
                    />

                    <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl text-balance">
                        We provide a focused set of services for residential engineering and construction — keeping things practical, honest, and well-executed.
                    </p>
                </Container>
            </section>

            {/* ── ARCHITECTURAL INVERSION GLASS MASK ───────────────────── */}
            <div className="relative z-20 w-full -mt-24 md:-mt-36 bg-[#FDFCFA]/95  rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-30px_80px_rgba(0,0,0,0.6)] overflow-hidden pt-20 md:pt-32 border-t border-white/60 ring-1 ring-white/20">

                {/* ── SERVICES GRID ─────────────────────────────────────── */}
                <section className="w-full pb-20 md:pb-32 bg-transparent">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                            {services.map((service, idx) => (
                                <FadeUp
                                    key={service.id}
                                    delay={idx * 0.15}
                                    className="h-full"
                                >
                                    <GlassCard className="flex flex-col h-full overflow-hidden group cursor-pointer p-0 relative border border-white/60 shadow-sm">
                                        {/* Image */}
                                        <RevealImage delay={0.1}>
                                            <div className="h-[260px] w-full relative overflow-hidden bg-[#EAE8E2]/50">
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                                />
                                            </div>
                                        </RevealImage>

                                        {/* Content */}
                                        <div className="flex flex-col flex-1 p-8">
                                            <div className="flex items-center gap-3 mb-4 text-neutral-900">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/60 shadow-sm border border-white/80">
                                                    {service.icon}
                                                </div>
                                                <h2 className="text-xl md:text-2xl font-bold tracking-tight">{service.title}</h2>
                                            </div>
                                            <p className="text-[0.95rem] font-medium text-neutral-600 leading-relaxed mb-8">{service.description}</p>
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {service.areas.map((a) => (
                                                    <span key={a} className="px-3 py-1.5 bg-white/40 backdrop-blur-md border border-white/60 text-[10px] font-bold uppercase tracking-widest text-neutral-800 rounded-full shadow-sm">
                                                        {a}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </GlassCard>
                                </FadeUp>
                            ))}
                        </div>
                    </Container>
                </section>

                <div className="bg-white/80 backdrop-blur-xl border-t border-white/30">
                    {/* ── CTA ───────────────────────────────────────────────── */}
                    <CTASection
                        heading="Have a Project in Mind?"
                        subtext="Tell us what you're planning and we'll find the right approach together."
                    />

                    {/* ── FOOTER ────────────────────────────────────────────── */}
                    <Footer />
                </div>
            </div> {/* End of Architectural Inversion Mask */}
        </main>
    );
}
