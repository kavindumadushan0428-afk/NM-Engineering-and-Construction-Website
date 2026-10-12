import Container from "@/components/ui/Container";
import { LuMapPin, LuGlobe } from "react-icons/lu";

export default function ServiceArea() {
  return (
    <section className="w-full py-20 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row relative bg-[#FDFCFA]/30 backdrop-blur-3xl border border-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.02] rounded-3xl overflow-hidden">
          {/* Desktop Divider */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-neutral-200/40 -translate-x-1/2" />

          {/* Left Side */}
          <div className="flex-1 p-8 md:p-12 relative">
            <div className="flex items-center gap-3 mb-5">
              <LuMapPin
                size={20}
                strokeWidth={1.75}
                className="text-red-700 shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                On-Site Construction Area
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">
              Kegalle & Nearby Areas
            </h3>
            <p className="text-neutral-600 mb-8 text-sm md:text-base leading-relaxed max-w-sm">
              Site visits, construction and on-site project support are mainly
              available around Kegalle and nearby areas.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2.5">
              {["Rambukkana", "Kegalle", "Nearby Areas"].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/80 rounded-full text-[11px] font-bold uppercase tracking-wider text-neutral-600 whitespace-nowrap shadow-sm ring-1 ring-black/5"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Divider */}
          <div className="md:hidden h-px bg-neutral-200/40 mx-8" />

          {/* Right Side */}
          <div className="flex-1 p-8 md:p-12 relative">
            <div className="flex items-center gap-3 mb-5">
              <LuGlobe
                size={20}
                strokeWidth={1.75}
                className="text-red-700 shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Island-Wide Services (Online)
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">
              Online Consultations
            </h3>
            <p className="text-neutral-600 mb-8 text-sm md:text-base leading-relaxed max-w-md">
              Planning discussions, BOQ reviews, design consultations and online
              meetings are available across Sri Lanka.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2.5">
              {[
                "Planning",
                "BOQ Discussions",
                "Design Consultation",
                "Online Meetings",
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/80 rounded-full text-[11px] font-bold uppercase tracking-wider text-neutral-600 whitespace-nowrap shadow-sm ring-1 ring-black/5"
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
