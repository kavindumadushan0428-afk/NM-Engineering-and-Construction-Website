import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";


export default function VRTeaser() {
    return (
        <section className="w-full py-20 md:py-32">
            <Container>
                <div className="flex flex-col md:flex-row overflow-hidden relative bg-white/60 backdrop-blur-2xl border border-white/60 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                    {/* Left Side: Text Content */}
                    <div className="flex-1 p-8 md:p-16 flex flex-col justify-center z-10 border-b border-neutral-200/60 md:border-b-0 md:border-r">
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">
                            VR Experience
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-2">
                            Walk Through Your Future Home
                        </h2>

                        <p className="text-lg font-medium text-neutral-400 mb-6 tracking-wide">
                            Coming Soon
                        </p>

                        <p className="text-neutral-600 mb-10 text-base md:text-lg leading-relaxed max-w-md">
                            Explore your future space in immersive virtual reality before construction begins.
                        </p>

                        <div>
                            <Link
                                href="/vr-experience"
                                className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-8 py-3 text-sm font-medium text-neutral-900 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition hover:bg-neutral-50 hover:border-neutral-300 hover:-translate-y-0.5"
                            >
                                Explore VR Experience
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Visual Image */}
                    <div className="flex-1 relative flex items-center justify-center min-h-[350px] md:min-h-full bg-[#0a0a0a] overflow-hidden">
                        <Image
                            src="/image/Vr/vr-teaser.jpg"
                            alt="VR Experience"
                            fill
                            className="object-contain"
                        />
                        {/* Subtle Launching Soon Badge */}
                        <div className="absolute bottom-8 right-8 z-10">
                            <span className="px-4 py-2 bg-white/70 backdrop-blur-md border border-white/60 rounded-full shadow-sm text-xs font-semibold uppercase tracking-widest text-neutral-800">
                                Launching Q3 2026
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
