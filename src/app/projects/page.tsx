import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import RevealImage from "@/components/ui/RevealImage";
import GlassCard from "@/components/ui/GlassCard";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import ParallaxWrapper from "@/components/motion/ParallaxWrapper";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

const projects = [
    {
        id: 1,
        title: "Modern Tropical Home",
        location: "Rambukkana",
        category: "New Build",
        status: "Completed",
        description: "A contemporary tropical home designed around natural ventilation, comfort, and a connection to the surrounding greenery.",
        image: "/image/Projects/project-1.png",
    },
    {
        id: 2,
        title: "Two-Storey Residence",
        location: "Kegalle",
        category: "New Build",
        status: "Completed",
        description: "A practical two-storey family home designed to fit a compact plot while making the most of every square foot.",
        image: "/image/Projects/project-2.png",
    },
    {
        id: 3,
        title: "Compact Family Home",
        location: "Kegalle Area",
        category: "New Build",
        status: "Ongoing",
        description: "A smart, space-efficient home designed around the family's lifestyle, budget and future needs.",
        image: "/image/Projects/project-3.png",
    },
    {
        id: 4,
        title: "Hillside Expansion",
        location: "Mawanella",
        category: "Renovation",
        status: "Ongoing",
        description: "A complex hillside structural expansion intended to integrate an elevated panoramic viewing deck with the existing framework.",
        image: "/image/Projects/project-1.png",
    },
    {
        id: 5,
        title: "Luxury Estate Villa",
        location: "Kandy",
        category: "Design & Build",
        status: "Ongoing",
        description: "A sprawling estate villa set against the misty hills, featuring expansive glass facades and an infinity edge pool.",
        image: "/image/Projects/project-2.png",
    },
    {
        id: 6,
        title: "Urban Commercial Complex",
        location: "Colombo",
        category: "Commercial",
        status: "Completed",
        description: "A modern, multi-story commercial hub designed with sustainability and smart energy management at its core.",
        image: "/image/Projects/project-3.png",
    }
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-transparent animate-page-enter">

            {/* ── FIXED GLASSY MOOD BACKGROUND ─────────────────────────────────── */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
                <Image
                    src="/image/Projects/project-3.png"
                    alt="N&M Engineering projects"
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
                            Our Work
                        </p>
                        <span className="w-8 h-px bg-red-700/60" />
                    </div>
                    <SplitTextReveal
                        wrapperClassName="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-10 text-balance"
                        lines={[
                            { text: "Built Projects.", className: "block text-white" },
                            { text: "Real Spaces.", className: "block text-white/40 mt-1" }
                        ]}
                    />
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl text-balance">
                        A look at the homes and spaces we&apos;ve had the privilege of helping to plan and build. These are real projects done with care in and around Kegalle.
                    </p>
                </Container>
            </section>

            {/* ── ARCHITECTURAL INVERSION GLASS MASK ───────────────────── */}
            <div className="relative z-20 w-full -mt-24 md:-mt-36 bg-[#FDFCFA]/95 rounded-t-[2.5rem] md:rounded-t-[4rem]  shadow-[0_-30px_80px_rgba(0,0,0,0.6)] border-t border-white/60 ring-1 ring-white/20 overflow-hidden pt-20 md:pt-32">

                {/* ── PROJECTS GRID ─────────────────────────────────────── */}
                <section className="w-full pt-10 pb-24 bg-transparent">
                    <Container>
                        {/* Completed Projects Section */}
                        <div className="mb-12 flex items-center gap-4">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">Ongoing Projects</h2>
                            <div className="h-px flex-1 bg-neutral-200"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                            {projects.filter(p => p.status === "Completed").map((project, idx) => (
                                <FadeUp
                                    key={project.id}
                                    delay={idx * 0.15}
                                    className="h-full"
                                >
                                    <GlassCard className="flex flex-col h-full overflow-hidden group cursor-pointer p-0 relative border border-white/60 shadow-sm">
                                        {/* Image */}
                                        <RevealImage delay={0.1}>
                                            <div className="relative h-[320px] w-full overflow-hidden bg-[#EAE8E2]/60">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                                />
                                                {/* Category pill */}
                                                <div className="absolute top-5 left-5">
                                                    <span className="px-3 py-1.5 bg-white/50 backdrop-blur-md text-[10px] font-bold tracking-widest text-neutral-800 uppercase shadow-sm border border-white/80 rounded-full ring-1 ring-black/5">
                                                        {project.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </RevealImage>
                                        {/* Details */}
                                        <div className="flex flex-col flex-1 p-6 gap-2">
                                            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">{project.title}</h3>
                                            <p className="text-[0.95rem] font-medium text-neutral-500 flex items-center gap-2 mb-2">
                                                <span className="w-4 h-[1px] bg-red-700/60" />
                                                {project.location}
                                            </p>
                                            <p className="text-[0.9rem] font-medium text-neutral-600 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </GlassCard>
                                </FadeUp>
                            ))}
                        </div>

                        {/* Ongoing Projects Section */}
                        <div className="mb-12 flex items-center gap-4">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">Completed Projects</h2>
                            <div className="h-px flex-1 bg-neutral-200"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {projects.filter(p => p.status === "Ongoing").map((project, idx) => (
                                <FadeUp
                                    key={project.id}
                                    delay={idx * 0.15}
                                    className="h-full"
                                >
                                    <GlassCard className="flex flex-col h-full overflow-hidden group cursor-pointer p-0 relative opacity-90 hover:opacity-100 transition-opacity border border-white/60 shadow-sm">
                                        {/* Image */}
                                        <RevealImage delay={0.1}>
                                            <div className="relative h-[320px] w-full overflow-hidden bg-[#EAE8E2]/60">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                                />
                                                {/* Category pill */}
                                                <div className="absolute top-5 left-5 flex items-center gap-2">
                                                    <span className="px-3 py-1.5 bg-red-700/80 backdrop-blur-md text-[10px] font-bold tracking-widest text-[#FDFCFA] uppercase shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-red-500/20 rounded-full ring-1 ring-white/10">
                                                        In Progress
                                                    </span>
                                                </div>
                                            </div>
                                        </RevealImage>
                                        {/* Details */}
                                        <div className="flex flex-col flex-1 p-6 gap-2">
                                            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">{project.title}</h3>
                                            <p className="text-[0.95rem] font-medium text-neutral-500 flex items-center gap-2 mb-2">
                                                <span className="w-4 h-[1px] bg-red-700/60" />
                                                {project.location}
                                            </p>
                                            <p className="text-[0.9rem] font-medium text-neutral-600 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </GlassCard>
                                </FadeUp>
                            ))}
                        </div>

                        {/* Note */}
                    </Container>
                </section>

                <div className="bg-white/80 backdrop-blur-xl border-t border-white/30">
                    {/* ── CTA ───────────────────────────────────────────────── */}
                    <CTASection
                        heading="Want to Start Your Own Project?"
                        subtext="We'd love to hear about your ideas. Let's talk about what you're planning."
                    />

                    {/* ── FOOTER ────────────────────────────────────────────── */}
                    <Footer />
                </div>
            </div> {/* End of Architectural Inversion Mask */}
        </main>
    );
}
