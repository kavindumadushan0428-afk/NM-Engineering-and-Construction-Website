import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Arrow from "@/components/ui/Arrow";
import ServicesPreview from "@/components/sections/ServicesPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CTASection from "@/components/sections/CTASection";
import HomeScrollytelling from "@/components/motion/HomeScrollytelling";
import { pageMetadata, description } from "@/lib/site";
export const metadata = pageMetadata(
  "N&M Engineering & Construction | Kegalle, Sri Lanka",
  description,
  "/",
);
export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HomeScrollytelling />
      <section className="home-hero">
        <div className="hero-image">
          <Image
            src="/Image/Home/hero.webp"
            alt="Tropical residential architecture with shaded balconies and a landscaped garden"
            fill
            sizes="(max-width: 767px) 100vw, 55vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
        </div>
        <div className="hero-shade" />
        <Container className="hero-content">
          <p className="hero-kicker">
            <span className="red-dot" />
            N&M Engineering & Construction
          </p>
          <h1 className="headline-reveal">
            Built around
            <br />
            <span className="soft">your life.</span>
          </h1>
          <div className="hero-intro">
            <p className="hero-description">
              Thoughtful homes. Precise engineering.
              <br />
              From Kegalle, with a personal approach.
            </p>
            <div className="hero-actions">
              <Link href="/book-consultation" className="button primary">
                Start your project
              </Link>
              <Link href="/projects" className="button secondary">
                View our work <Arrow size={14} />
              </Link>
            </div>
          </div>
        </Container>
        <Container className="hero-bottom">
          <a href="#introduction" className="hero-location">
            Discover N&M <span aria-hidden="true">↓</span>
          </a>
          <span className="hero-coordinate">
            Rambukkana · Kegalle · Sri Lanka
          </span>
        </Container>
      </section>
      <section className="section" id="introduction">
        <Container>
          <Reveal className="intro-grid">
            <p className="eyebrow">01 / A considered approach</p>
            <div>
              <h2 className="section-heading">
                A home should feel
                <br />
                like it belongs to you.
              </h2>
              <div className="intro-bottom">
                <p className="body-copy">
                  We connect thoughtful design with practical construction. A
                  hands-on team in Kegalle, helping you make clear decisions
                  from the first sketch to the final handover.
                </p>
                <Link href="/about" className="text-link">
                  Meet N&M <Arrow size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
      <FeaturedProjects />
      <ServicesPreview limit={3} showCta />
      <section className="perspective-section">
        <Container>
          <div className="studio-grid">
            <Reveal className="studio-image">
              <Image
                src="/Image/3D/3d-teaser.webp"
                alt="Architectural model showing the arrangement of rooms within a home"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </Reveal>
            <Reveal className="studio-copy" delay={0.08}>
              <p className="eyebrow">A clearer perspective</p>
              <h2 className="section-heading">
                See it.
                <br />
                Before you build it.
              </h2>
              <p className="body-copy">
                Explore the proportions, materials and spaces of your future
                home. Make confident decisions before work begins.
              </p>
              <Link href="/vr-experience" className="text-link">
                Explore in 3D <Arrow size={14} />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
      <CTASection />
    </main>
  );
}
