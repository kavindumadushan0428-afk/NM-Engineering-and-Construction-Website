import Container from "@/components/ui/Container";

const locationIcon = (
    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const globeIcon = (
    <svg className="w-5 h-5 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12.001A9.001 9.001 0 1112 3a9.001 9.001 0 019 9.001z" />
    </svg>
);

export default function ServiceArea() {
    return (
        <section className="w-full py-20 md:py-32">
            <Container>
                <div className="flex flex-col md:flex-row relative bg-[#FDFCFA]/80 backdrop-blur-2xl border border-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.02] rounded-3xl overflow-hidden">
                    {/* Desktop Divider */}
                    <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-neutral-200/70 -translate-x-1/2" />

                    {/* Left Side */}
                    <div className="flex-1 p-8 md:p-12 relative">
                        <div className="flex items-center gap-3 mb-5">
                            {locationIcon}
                            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                                On-Site Construction Area
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">
                            Kegalle & Nearby Areas
                        </h3>
                        <p className="text-neutral-600 mb-8 text-sm md:text-base leading-relaxed max-w-sm">
                            Site visits, construction and on-site project support are mainly available around Kegalle and nearby areas.
                        </p>

                        {/* Chips */}
                        <div className="flex flex-wrap gap-2.5">
                            {["Rambukkana", "Kegalle", "Nearby Areas"].map((chip) => (
                                <span
                                    key={chip}
                                    className="px-4 py-1.5 bg-white/50 backdrop-blur-md border border-white/80 rounded-full text-[11px] font-bold uppercase tracking-wider text-neutral-600 whitespace-nowrap shadow-sm ring-1 ring-black/5"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Divider */}
                    <div className="md:hidden h-px bg-neutral-200/70 mx-8" />

                    {/* Right Side */}
                    <div className="flex-1 p-8 md:p-12 relative">
                        <div className="flex items-center gap-3 mb-5">
                            {globeIcon}
                            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                                Island-Wide Services (Online)
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">
                            Online Consultations
                        </h3>
                        <p className="text-neutral-600 mb-8 text-sm md:text-base leading-relaxed max-w-md">
                            Planning discussions, BOQ reviews, design consultations and online meetings are available across Sri Lanka.
                        </p>

                        {/* Chips */}
                        <div className="flex flex-wrap gap-2.5">
                            {["Planning", "BOQ Discussions", "Design Consultation", "Online Meetings"].map((chip) => (
                                <span
                                    key={chip}
                                    className="px-4 py-1.5 bg-white/50 backdrop-blur-md border border-white/80 rounded-full text-[11px] font-bold uppercase tracking-wider text-neutral-600 whitespace-nowrap shadow-sm ring-1 ring-black/5"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
