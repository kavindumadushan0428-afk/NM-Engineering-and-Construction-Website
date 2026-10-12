import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Arrow from "@/components/ui/Arrow";
interface Props {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}
export default function CTASection({
  heading = "Let’s build something personal.",
  subtext = "Your ideas. Our attention. A clear first step.",
  primaryLabel = "Start a conversation",
  primaryHref = "/book-consultation",
  secondaryLabel = "Contact N&M",
  secondaryHref = "/contact",
}: Props) {
  return (
    <section className="cta-section">
      <Container>
        <Reveal className="cta-panel">
          <div>
            <p className="eyebrow">Your next chapter</p>
            <h2 className="section-heading">{heading}</h2>
            <p className="body-copy">{subtext}</p>
          </div>
          <div className="cta-actions">
            <Link href={primaryHref} className="button primary">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="text-link">
              {secondaryLabel}
              <Arrow size={14} />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
