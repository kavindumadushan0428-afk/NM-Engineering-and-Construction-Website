import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Arrow from "@/components/ui/Arrow";
import CTASection from "@/components/sections/CTASection";
import ProjectsScrollytelling from "@/components/motion/ProjectsScrollytelling";
import { projects } from "@/lib/data";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Our projects",
  "Explore residential design and construction projects from N&M Engineering in Rambukkana, Kegalle and beyond.",
  "/projects",
);
export default function Projects() {
  return (
    <main id="main-content" tabIndex={-1}>
      <ProjectsScrollytelling />
      <PageHero
        eyebrow="Our projects"
        title="Spaces for living."
        description="Homes designed around real lives, local surroundings and the possibilities of each site."
        image="/Image/Projects/project-2.webp"
      />
      <section className="section">
        <Container>
          <div className="section-top">
            <h2 className="section-heading">Selected work.</h2>
            <p className="body-copy">
              Explore the design direction and scope of our existing portfolio.
              Images illustrate design concepts and may be shared across
              entries. Contact us for project-specific details.
            </p>
          </div>
          <div className="project-list">
            {projects.map((p) => (
              <Reveal key={p.id}>
                <article
                  id={"project-" + p.id}
                  className="project-card scroll-mt-28"
                >
                  <Image
                    src={p.image}
                    alt={p.title + " — architectural project image"}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1440px) 48vw, 680px"
                  />
                  <div className="project-caption">
                    <p className="meta">
                      {p.location} · {p.category}
                    </p>
                    <h3>{p.title}</h3>
                    <p className="project-description">{p.description}</p>
                    <Link href="/book-consultation" className="text-link">
                      Discuss a similar project <Arrow size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </main>
  );
}
