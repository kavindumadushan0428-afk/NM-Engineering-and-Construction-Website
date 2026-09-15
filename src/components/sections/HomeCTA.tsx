import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/motion/MagneticButton";

export default function HomeCTA() {
    return (
        <section className="w-full py-12 md:pb-24">
            <Container>
                <GlassCard className="w-full grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center gap-8 p-10 md:p-16 relative overflow-hidden">
                    {/* Background abstract ambient glow to match premium minimal aesthetics */}
                    <div className="absolute -right-32 -bottom-32 w-[40rem] h-[40rem] rounded-full bg-white/60 blur-[120px] pointer-events-none" />

                    {/* Left: Text Area */}
                    <div className="flex-1 md:pr-10 relative z-10 mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
                            Ready to Build Something Meaningful?
                        </h2>
                        <p className="text-base md:text-lg text-neutral-600 max-w-lg">
                            Let’s discuss your ideas and find the right way to move forward.
                        </p>
                    </div>

                    {/* Right: Buttons */}
                    <div className="flex flex-col sm:flex-row items-center lg:justify-end gap-4 relative z-10 w-full">
                        <MagneticButton strength={0.15}>
                            <Link
                                href="/book-consultation"
                                className="w-full sm:w-auto block rounded-full bg-red-700 px-8 py-4 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-900 active:scale-95 hover:shadow-lg hover:-translate-y-1"
                            >
                                Book a Consultation
                            </Link>
                        </MagneticButton>

                        <MagneticButton strength={0.1}>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto block rounded-full border border-neutral-300 bg-white/70 px-8 py-4 text-center text-sm font-medium text-neutral-900 backdrop-blur-xl transition-all duration-300 hover:bg-white active:scale-95 hover:shadow-md hover:-translate-y-1"
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
