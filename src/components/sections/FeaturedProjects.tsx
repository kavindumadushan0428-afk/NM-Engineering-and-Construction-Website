import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Arrow from "@/components/ui/Arrow";
import ProjectDepth from "@/components/ui/ProjectDepth";
import { projects } from "@/lib/data";
export default function FeaturedProjects() {
  return (
    <section className="section dark-section">
      <Container>
        <Reveal className="section-top">
          <div>
            <p className="eyebrow">02 / Selected work</p>
            <h2 className="section-heading">
              Rooted in place.
              <br />
              Designed for living.
            </h2>
          </div>
          <Link href="/projects" className="text-link">
            View portfolio <Arrow size={14} />
          </Link>
        </Reveal>
        <div className="project-grid">
          {projects.slice(0, 2).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <ProjectDepth>
                <Link
                  href={"/projects#project-" + p.id}
                  className="project-card"
                >
                  <Image
                    src={p.image}
                    alt={p.title + " — architectural visualization"}
                    fill
                    sizes="(max-width: 767px) 100vw, 60vw"
                  />
                  <div className="project-caption">
                    <p className="meta">
                      {p.location} / {p.category}
                    </p>
                    <h3>{p.title}</h3>
                  </div>
                </Link>
              </ProjectDepth>
            </Reveal>
          ))}
        </div>
        <p className="portfolio-note">
          Architectural imagery illustrates design direction. Explore the
          portfolio for project details.
        </p>
      </Container>
    </section>
  );
}
