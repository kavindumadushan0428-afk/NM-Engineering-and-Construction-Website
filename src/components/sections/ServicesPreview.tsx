import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import RevealImage from "@/components/ui/RevealImage";
import GlassCard from "@/components/ui/GlassCard";
import Image from "next/image";

import Link from "next/link";
const services = [
    {
        title: "Design & Build",
        slug: "design-build",
        description: "Complete end-to-end project support from planning to handover.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        title: "House Plans",
        slug: "house-plans",
        description: "Practical plans designed around your land, lifestyle and budget.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        title: "3D Visualization",
        slug: "3d-visualization",
        description: "Realistic 3D views to help you understand your future space.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
    },
    {
        title: "Renovation",
        slug: "renovation",
        description: "Upgrade and improve existing homes and spaces.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
    },
    {
        title: "BOQ & Estimation",
        slug: "boq-estimation",
        description: "Clear quantities and cost estimates for better planning.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Landscaping",
        slug: "landscaping",
        description: "Complete the space around your home.",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
];

export default function ServicesPreview() {
    return (
        <section className="w-full py-20 md:py-32">
            <Container>
                {/* Header Area */}
                <div className="mb-12 md:mb-16">
                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">
                        What We Do
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
                        Services
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-12 gap-6">
                    {services.map((service, idx) => (
                        <FadeUp
                            key={idx}
                            delay={idx * 0.15}
                            className="col-span-12 sm:col-span-6 lg:col-span-4 h-full"
                        >
                            <Link href={`/services/${service.slug}`} className="block h-full group">
                                <GlassCard className="flex flex-col h-full p-3 overflow-hidden transition-all duration-500 hover:border-red-700/30">
                                    {/* Image Container */}
                                    <RevealImage delay={0.05}>
                                        <div className="h-56 md:h-64 w-full rounded-[20px] relative overflow-hidden bg-[#EAE8E2]/50">
                                            <Image
                                                src={`/image/Services/service-${(idx % 4) + 1}.png`}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                            />
                                            {/* Frosted Circular Icon */}
                                            <div className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-white/80 z-10 transition-all duration-300 group-hover:bg-red-700 text-neutral-900 group-hover:text-white">
                                                {service.icon}
                                            </div>
                                        </div>
                                    </RevealImage>

                                    {/* Content */}
                                    <div className="flex flex-col px-5 pt-6 pb-5">
                                        <h3 className="mb-2.5 text-lg md:text-xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-red-700 flex items-center justify-between">
                                            {service.title}
                                            <svg className="w-5 h-5 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </h3>
                                        <p className="text-[13px] md:text-sm leading-relaxed text-neutral-500 font-medium line-clamp-2">
                                            {service.description}
                                        </p>
                                    </div>
                                </GlassCard>
                            </Link>
                        </FadeUp>
                    ))}
                </div>
            </Container>
        </section>
    );
}
