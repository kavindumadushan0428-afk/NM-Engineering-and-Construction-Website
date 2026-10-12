import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import AboutScrollytelling from "@/components/motion/AboutScrollytelling";
import { values } from "@/lib/data";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "About us",
  "A hands-on engineering and construction team in Kegalle, Sri Lanka. Practical homes, thoughtful renovations and honest communication.",
  "/about",
);
export default function About() {
  return (
    <main id="main-content" tabIndex={-1}>
      <AboutScrollytelling />
      <PageHero
        eyebrow="About N&M"
        title="People first. Always."
        description="A small team. A hands-on approach. Homes shaped around the way you live."
        image="/Image/Projects/project-1.webp"
      />
      <section className="section">
        <Container>
          <div className="studio-grid">
            <Reveal className="studio-copy">
              <p className="eyebrow">Grounded in Kegalle</p>
              <h2 className="section-heading">
                Good buildings begin
                <br />
                with listening.
              </h2>
              <p className="body-copy">
                We’re N&M Engineering Services & Construction, based in
                Rambukkana, Kegalle. We bring planning, engineering and
                construction together with personal attention at every stage.
              </p>
              <p className="body-copy">
                Our work focuses on practical homes, thoughtful renovations and
                direct client support. On site in Kegalle and nearby areas, and
                through online design and BOQ consultations across Sri Lanka.
              </p>
            </Reveal>
            <Reveal className="studio-image">
              <Image
                src="/Image/Services/D&B.webp"
                alt="Residential design and construction planning"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
              <div className="image-note">
                Local knowledge.
                <br />
                <strong>Personal attention.</strong>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <section className="section principles-section">
        <Container>
          <p className="eyebrow">What you can expect</p>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal className="value-card" key={v.title}>
                <span className="section-number">0{i + 1}</span>
                <h2>{v.title}</h2>
                <p>{v.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </main>
  );
}
