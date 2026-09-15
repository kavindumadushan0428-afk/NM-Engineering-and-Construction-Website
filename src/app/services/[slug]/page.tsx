import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import ParallaxWrapper from "@/components/motion/ParallaxWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";

interface PageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServicePage({ params }: PageProps) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const otherServices = services.filter((s) => s.slug !== params.slug).slice(0, 3);

    return (
        <main className="min-h-screen bg-transparent animate-page-enter">
            {/* ── FIXED GLASSY MOOD BACKGROUND ─────────────────────────────────── */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
                <Image
                    src={service.image || "/image/Projects/project-3.png"}
                    alt="Background"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover opacity-60 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 pointer-events-none mix-blend-multiply" />
                <div className="absolute inset-0 backdrop-blur-[60px]" />
                <div className="absolute inset-0 bg-neutral-900/40" />
            </div>

            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section className="relative z-10 w-full pt-40 pb-20 md:pt-52 md:pb-32 flex flex-col items-center justify-center min-h-[60vh]">
                <Container>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <FadeUp delay={0.1}>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                                    N&M Engineering Services
                                </span>
                            </div>
                        </FadeUp>

                        <div className="mb-8">
                            <SplitTextReveal
                                lines={[
                                    { text: service.title }
                                ]}
                                wrapperClassName="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight text-white leading-[1.05]"
                            />
                        </div>

                        <FadeUp delay={0.4} className="max-w-2xl mx-auto">
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                                {service.shortDesc}
                            </p>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* ── ARCHITECTURAL INVERSION GLASS MASK ───────────────────── */}
            <div className="relative z-20 w-full bg-[#FDFCFA]/95 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-30px_80px_rgba(0,0,0,0.6)] overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 border-t border-white/60 ring-1 ring-white/20">

                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
                        {/* Detail text */}
                        <div>
                            <FadeUp>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-8 leading-tight">
                                    Overview
                                </h2>
                                <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
                                    {service.fullDesc}
                                </p>
                            </FadeUp>
                        </div>

                        {/* Features List */}
                        <FadeUp delay={0.2} className="h-full">
                            <GlassCard className="p-8 md:p-12 h-full flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-neutral-900 mb-8 border-b border-neutral-200 pb-4">Key Capabilities</h3>
                                <ul className="space-y-6">
                                    {service.features?.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-700/10 flex items-center justify-center text-red-700 mt-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-base text-neutral-700 font-medium leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </FadeUp>
                    </div>

                    {/* Image Highlight Showcase */}
                    <div className="mb-32">
                        <ParallaxWrapper offset={120}>
                            <div className="relative w-full h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src={service.image || "/image/Projects/project-1.png"}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ParallaxWrapper>
                    </div>

                    {/* Other Services Recommendations */}
                    <div>
                        <FadeUp className="mb-12">
                            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Explore Other Services</h2>
                        </FadeUp>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {otherServices.map((other, idx) => (
                                <FadeUp key={other.slug} delay={0.1 * idx}>
                                    <Link href={`/services/${other.slug}`} className="block h-full group">
                                        <GlassCard className="p-6 h-full flex flex-col justify-between transition-colors duration-500 hover:border-red-700/30">
                                            <div>
                                                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-red-700 transition-colors">{other.title}</h3>
                                                <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">{other.shortDesc}</p>
                                            </div>
                                            <div className="mt-6 flex justify-end">
                                                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-red-700 group-hover:border-red-700 group-hover:text-white transition-all text-neutral-900">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </Link>
                                </FadeUp>
                            ))}
                        </div>
                    </div>
                </Container>

                <div className="mt-32">
                    <CTASection />
                </div>
            </div>

            <Footer />
        </main>
    );
}
