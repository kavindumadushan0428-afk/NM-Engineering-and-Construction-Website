import ServicesPreview from "@/components/sections/ServicesPreview";
import ThreeDTeaser from "@/components/sections/ThreeDTeaser";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';
import RevealImage from '@/components/ui/RevealImage';
import SplitTextReveal from '@/components/motion/SplitTextReveal';
import ParallaxWrapper from '@/components/motion/ParallaxWrapper';
import MagneticButton from '@/components/motion/MagneticButton';
import Container from "@/components/ui/Container";
import HeroCountdown from "@/components/ui/HeroCountdown";

/* ── SVG icons ────────────────────────────────────────────────── */
const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent animate-page-enter" style={{ position: "relative", zIndex: 1 }}>

      {/* ── FIXED GLASSY MOOD BACKGROUND ─────────────────────────────────── */}
      <div className="fixed inset-0 z-0 bg-[#0a0a0a] overflow-hidden pointer-events-none">
        <ParallaxWrapper offset={120} className="absolute inset-x-0 -top-[15%] -bottom-[15%] pointer-events-none">
          <Image
            src="/image/Projects/project-1.png"
            alt="Cinematic Modern Architectural Interior"
            fill
            className="object-cover object-center opacity-90 blur-[6px] scale-105"
            priority
            quality={100}
            unoptimized
          />
        </ParallaxWrapper>
        {/* Cinematic lighting gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-[#0a0a0a]/90" />
      </div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex h-[100dvh] w-full flex-col justify-end overflow-hidden text-white selection:bg-red-700 selection:text-white z-10">
        {/* ── Content ───────────────────────────────────────────── */}
        <Container className="relative flex flex-1 flex-col justify-center pt-[5vh]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-16 lg:gap-12 w-full">

            {/* Left Box: Hero Intro */}
            <div className="w-full">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6 animate-page-enter opacity-0" style={{ animationDelay: '50ms' }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  N&amp;M Engineering Services & Construction
                </p>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-white/90">VR Platform Coming Soon</span>
                </span>
              </div>

              {/* Heading */}
              <SplitTextReveal
                wrapperClassName="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] uppercase mt-2 mb-6"
                lines={[
                  { text: "Experience Your", className: "text-white" },
                  { text: "Future Home", className: "text-white/80" }
                ]}
                delayStart={0.3}
              />

              {/* Subtext */}
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/70 max-w-md mt-6 animate-page-enter opacity-0" style={{ animationDelay: '250ms' }}>
                See the space before construction begins. Move freely through every room, review layouts, and finalize materials with absolute certainty in immersive virtual reality.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-page-enter opacity-0" style={{ animationDelay: '450ms' }}>
                <MagneticButton strength={0.15}>
                  <Link
                    href="/book-consultation"
                    className="inline-flex max-w-max items-center justify-center gap-2 rounded-full bg-red-700/80 backdrop-blur-lg border border-red-500/40 px-8 py-3.5 text-sm font-semibold text-white
                    shadow-[0_4px_20px_rgba(185,28,28,0.25)] transition-[background-color,border-color,box-shadow,transform] duration-300 hover:bg-red-600/90 hover:border-red-400/60 hover:shadow-[0_8px_32px_rgba(220,38,38,0.35)] hover:-translate-y-[1px] active:scale-[0.98]"
                  >
                    Book Consultation
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.1}>
                  <Link
                    href="/vr-experience"
                    className="group inline-flex max-w-max items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-[0_4px_16px_rgba(255,255,255,0.06)] hover:-translate-y-[1px] active:scale-[0.98]"
                  >
                    <span className="relative flex h-2 w-2 mr-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    Explore VR Experience
                  </Link>
                </MagneticButton>
              </div>
            </div>

            {/* Right Box: Countdown */}
            <HeroCountdown />

          </div>
        </Container>
      </section>

      {/* ── ARCHITECTURAL INVERSION GLASS MASK ────────────── */}
      <div className="relative z-20 w-full bg-[#FDFCFA]/95 rounded-t-[2.5rem] md:rounded-t-[4rem]  shadow-[0_-30px_80px_rgba(0,0,0,0.6)] border-t border-white/60 ring-1 ring-white/20 overflow-hidden">
        <ServicesPreview />
        <ThreeDTeaser />
        <FeaturedProjects />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}