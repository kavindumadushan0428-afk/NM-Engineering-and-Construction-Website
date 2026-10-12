import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Arrow from "@/components/ui/Arrow";
import ServiceIcon from "@/components/ui/ServiceIcon";
import CTASection from "./CTASection";
import { services } from "@/lib/data";
import { company, siteUrl } from "@/lib/site";
const introductions: Record<string, string> = {
  "design-build":
    "From your initial ideas to the final handover, we coordinate design, engineering and on-site construction. One team to guide the decisions, communicate progress and bring your home together.",
  "house-plans":
    "A practical plan starts with your land and the way you live. We consider natural light, everyday movement and efficient use of space, shaping a home around your family and budget.",
  "3d-visualization":
    "Understand your home before construction begins. Exterior and interior views bring proportions, materials and lighting into focus, helping you discuss details and make informed choices.",
  renovation:
    "Make more of the place you already call home. We assess the existing building and plan improvements, extensions and structural changes around its possibilities and your needs.",
  "boq-estimation":
    "Understand the quantities and projected costs behind your project. A clear bill of quantities helps you discuss budgets, compare requirements and plan construction with greater confidence.",
  landscaping:
    "A home extends beyond its walls. We plan gardens and outdoor spaces that complement the architecture, respond to the site and make room for everyday life outdoors.",
};
export default function ServiceDetail({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const next = services[service.id % services.length];
  return (
    <main id="main-content" tabIndex={-1} className="service-detail">
      {siteUrl && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  name: service.title,
                  description: service.shortDesc,
                  url: `${siteUrl}/services/${slug}`,
                  provider: {
                    "@type": "GeneralContractor",
                    name: company.name,
                    url: siteUrl,
                  },
                  areaServed: {
                    "@type": "Place",
                    name: "Kegalle and nearby areas",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: siteUrl,
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: service.title,
                      item: `${siteUrl}/services/${slug}`,
                    },
                  ],
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <PageHero
        eyebrow={service.title}
        title={service.title}
        description={service.shortDesc}
        image={service.image}
      />
      <section className="section">
        <Container>
          <div className="service-editorial">
            <Reveal>
              <div className="flex items-center gap-3 mb-3">
                <div className="service-icon-wrap">
                  <ServiceIcon slug={slug} size={22} />
                </div>
                <p className="eyebrow mb-0">0{service.id} / The approach</p>
              </div>
              <h2 className="section-heading">
                Considered from
                <br />
                the beginning.
              </h2>
            </Reveal>
            <Reveal>
              <p className="service-introduction">{introductions[slug]}</p>
              <div className="scope-list">
                {service.features.map((feature, i) => (
                  <div key={feature}>
                    <span>0{i + 1}</span>
                    <h3>{feature}</h3>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <section className="service-panorama">
        <Image
          src={service.image}
          alt={service.title + " — architectural design illustration"}
          fill
          sizes="100vw"
        />
        <div className="panorama-caption">
          <span>Design with intention.</span>
          <span>N&M / {service.title}</span>
        </div>
      </section>
      {slug === "3d-visualization" && (
        <section className="section">
          <Container>
            <div className="section-top">
              <h2 className="section-heading">A different perspective.</h2>
              <Link href="/vr-experience" className="button outline">
                Explore the house model
              </Link>
            </div>
          </Container>
        </section>
      )}
      <section className="next-service">
        <Container>
          <Link href={"/services/" + next.slug}>
            <span className="eyebrow">Explore next</span>
            <span className="next-service-title">
              {next.title}
              <Arrow size={14} />
            </span>
          </Link>
        </Container>
      </section>
      <CTASection />
    </main>
  );
}
