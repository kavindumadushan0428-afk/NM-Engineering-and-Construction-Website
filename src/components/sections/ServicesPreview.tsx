import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/lib/data";

interface ServicesPreviewProps {
  limit?: number;
  showCta?: boolean;
}

export default function ServicesPreview({
  limit,
  showCta = false,
}: ServicesPreviewProps = {}) {
  const displayedServices = limit ? services.slice(0, limit) : services;
  const isFeatured = limit === 3;

  return (
    <section className="section" id="expertise">
      <Container>
        <Reveal className="section-top">
          <div>
            <p className="eyebrow">Our expertise</p>
            <h2 className="section-heading">
              Every stage.
              <br />
              One considered approach.
            </h2>
          </div>
          <p className="body-copy">
            From planning a new home to rethinking an existing space. Choose the
            support your project needs.
          </p>
        </Reveal>

        <div
          className={`services-grid ${isFeatured ? "services-grid-featured" : ""}`}
        >
          {displayedServices.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.09, 0.45)}>
              <Link
                href={`/services/${s.slug}`}
                className="service-card"
                aria-label={`View details for ${s.title}`}
              >
                <div className="service-card-content">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="service-num">0{s.id}</span>
                    <div className="service-icon-wrap">
                      <ServiceIcon slug={s.slug} size={20} />
                    </div>
                  </div>
                  <span className="service-accent" />
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.shortDesc}</p>
                </div>
                <div className="service-card-image">
                  <Image
                    src={s.image}
                    alt={s.title + " — N&M Engineering service"}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 768px) 100vw, 33vw"
                        : "(max-width: 480px) calc(100vw - 32px), (max-width: 1024px) 44vw, 22vw"
                    }
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal className="services-cta-wrap" delay={0.25}>
            <Link href="/services" className="button services-explore-btn">
              Explore All Services
            </Link>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
