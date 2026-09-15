import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import RevealImage from "@/components/ui/RevealImage";
import GlassCard from "@/components/ui/GlassCard";

const projects = [
    { title: "Modern Tropical Home", location: "Rambukkana", image: "/image/Projects/project-1.png" },
    { title: "Two-Storey Residence", location: "Kegalle", image: "/image/Projects/project-2.png" },
    { title: "Compact Family Home", location: "Kegalle Area", image: "/image/Projects/project-3.png" },
];

export default function FeaturedProjects() {
    return (
        <section className="w-full py-20 md:py-32 bg-transparent border-t border-white/20">
            <Container>
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                    <div>
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">
                            Our Work
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
                            Featured Projects
                        </h2>
                    </div>
                    <div className="md:pb-2">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 backdrop-blur-md px-6 py-3 text-sm font-medium text-neutral-900 shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-white hover:border-white hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] active:scale-[0.97]"
                        >
                            View All Projects
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-12 gap-6">
                    {projects.map((project, idx) => (
                        <FadeUp
                            key={idx}
                            delay={idx * 0.15}
                            className="col-span-12 md:col-span-4 h-full"
                        >
                            <GlassCard className="flex flex-col h-full group p-3 overflow-hidden hover:border-white transition-colors duration-500 cursor-pointer">
                                {/* Image Placeholder */}
                                <RevealImage delay={0.1}>
                                    <div className="relative h-72 lg:h-80 w-full overflow-hidden flex items-center justify-center bg-[#EAE8E2]/50 rounded-[20px]">
                                        <Image
                                            src={`/image/Projects/project-${idx + 1}.png`}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                        />
                                        {/* View Project Overlay (Frosted Acrylic) */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FDFCFA]/60 backdrop-blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center border border-white/80 shadow-2xl rounded-full ring-1 ring-black/5 px-6 py-3 scale-95 group-hover:scale-100">
                                            <span className="text-neutral-900 text-sm font-bold tracking-wide flex items-center gap-2">
                                                View Details
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </RevealImage>

                                {/* Text Content */}
                                <div className="flex flex-col px-4 pt-6 pb-4">
                                    <h3 className="text-[17px] font-bold tracking-tight text-neutral-900 group-hover:text-red-700 transition-colors duration-300 mb-1.5">{project.title}</h3>
                                    <p className="text-[13px] font-medium text-neutral-500 flex items-center gap-2">
                                        <span className="w-4 h-px bg-red-700/60" />
                                        {project.location}
                                    </p>
                                </div>
                            </GlassCard>
                        </FadeUp>
                    ))}
                </div>
            </Container>
        </section>
    );
}
