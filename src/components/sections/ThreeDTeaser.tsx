import Container from "@/components/ui/Container";
import { LuCheck } from "react-icons/lu";

import ScrollHouseExperience from "../three/ScrollHouseExperience";

export default function ThreeDTeaser() {
  return (
    <section className="w-full py-20 md:py-32">
      <Container>
        <div className="flex flex-col lg:flex-row relative bg-[#FDFCFA]/30 backdrop-blur-3xl border border-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.02] rounded-3xl overflow-hidden">
          {/* Left Side: Text Content */}
          <div className="flex-1 relative z-10 border-b border-neutral-200/60 lg:border-b-0 lg:border-r">
            <div className="sticky top-16 md:top-24 p-8 lg:p-16 flex flex-col h-fit">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-red-700">
                Scroll. Explore. Experience.
              </p>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
                3D Home Experience
              </h2>

              <p className="text-neutral-600 mb-8 text-base md:text-lg leading-relaxed max-w-md">
                Explore a future home visually before construction. The
                interactive 3D experience will allow clients to rotate, inspect
                and understand spaces more clearly.
              </p>

              <ul className="mb-10 space-y-4">
                {[
                  "Explore the exterior",
                  "Understand room layouts",
                  "Review materials and finishes",
                  "Experience scale before construction",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-neutral-700 font-medium"
                  >
                    <LuCheck
                      size={18}
                      strokeWidth={1.75}
                      className="text-red-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Virtual Experience */}
          <div className="flex-1 relative bg-neutral-50/20 backdrop-blur-xl rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl">
            <ScrollHouseExperience />
          </div>
        </div>
      </Container>
    </section>
  );
}
