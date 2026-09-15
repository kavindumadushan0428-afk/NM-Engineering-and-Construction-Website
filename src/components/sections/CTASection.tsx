import Link from "next/link";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/motion/MagneticButton";

interface CTASectionProps {
    heading?: string;
    subtext?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}

export default function CTASection({
    heading = "Ready to Build Something Meaningful?",
    subtext = "Let's discuss your ideas and find the right way to move forward.",
    primaryLabel = "Book a Consultation",
    primaryHref = "/book-consultation",
    secondaryLabel = "Contact Us",
    secondaryHref = "/contact",
}: CTASectionProps) {
    return (
        <section className="w-full py-20 pb-24 md:py-32 md:pb-40">
            <Container>
                <div className="w-full grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center gap-8">
                    {/* Text */}
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                            {heading}
                        </h2>
                        <p className="text-base md:text-lg text-neutral-500 max-w-lg">
                            {subtext}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center lg:justify-end gap-4 relative z-10 w-full">
                        <MagneticButton strength={0.15}>
                            <Link
                                href={primaryHref}
                                className="w-full sm:w-auto block rounded-full bg-red-700/80 backdrop-blur-lg border border-red-500/40 px-8 py-4 text-center text-sm font-medium text-white
                                shadow-[0_4px_20px_rgba(185,28,28,0.2)]
                                transition-[background-color,border-color,box-shadow,transform]
                                duration-250
                                [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                                will-change-[transform]
                                hover:bg-red-600/90 hover:border-red-400/60 hover:shadow-[0_8px_32px_rgba(220,38,38,0.3)] hover:-translate-y-1
                                active:scale-[0.97] active:duration-75"
                            >
                                {primaryLabel}
                            </Link>
                        </MagneticButton>
                        <MagneticButton strength={0.1}>
                            <Link
                                href={secondaryHref}
                                className="w-full sm:w-auto block rounded-full border border-white/60 bg-white/60 backdrop-blur-lg px-8 py-4 text-center text-sm font-medium text-neutral-900
                                shadow-[0_2px_16px_rgba(0,0,0,0.06)]
                                transition-[background-color,border-color,box-shadow,transform]
                                duration-250
                                [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                                will-change-[transform]
                                hover:bg-white/80 hover:border-white hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1
                                active:scale-[0.97] active:duration-75"
                            >
                                {secondaryLabel}
                            </Link>
                        </MagneticButton>
                    </div>
                </div>
            </Container>
        </section>
    );
}
