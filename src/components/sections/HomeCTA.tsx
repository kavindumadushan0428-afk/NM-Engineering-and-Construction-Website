import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/motion/MagneticButton";

export default function HomeCTA() {
  return (
    <section className="w-full py-12 md:py-16">
      <Container>
        <GlassCard className="w-full grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center gap-8 p-8 md:p-14 relative overflow-hidden">
          {/* Background subtle ambient glow */}
          <div className="absolute -right-32 -bottom-32 w-[36rem] h-[36rem] rounded-full bg-white/40 blur-[100px] pointer-events-none" />

          {/* Left: Text Area */}
          <div className="flex-1 md:pr-10 relative z-10 mb-6 md:mb-0">
            <p className="eyebrow mb-3">Next Steps</p>
            <h2 className="section-heading mb-3">
              Ready to Build Something Meaningful?
            </h2>
            <p className="body-copy">
              Let’s discuss your ideas and find the right architectural path forward.
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:justify-end gap-3.5 relative z-10 w-full">
            <MagneticButton strength={0.15}>
              <Link
                href="/book-consultation"
                className="button primary w-full sm:w-auto"
              >
                Book a Consultation
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.1}>
              <Link
                href="/contact"
                className="button outline w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </MagneticButton>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
