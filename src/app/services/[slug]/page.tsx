import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/site";
type Props = { params: Promise<{ slug: string }> };
// Published services have explicit routes; unknown slugs must return a real 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return service
    ? pageMetadata(service.title, service.shortDesc, "/services/" + slug)
    : { title: "Service not found" };
}
export default async function Service({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        eyebrow={service.title}
        title={service.title}
        description={service.shortDesc}
        image={service.image}
      />
      <section className="section">
        <Container>
          <div className="service-detail-card">
            <p className="eyebrow">Service specifications</p>
            <h2 className="section-heading">Overview</h2>
            <p className="body-copy mt-6">{service.fullDesc}</p>
            <div className="service-features-grid">
              {service.features.map((f) => (
                <div key={f} className="feature-pill">
                  <span className="feature-dot" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </main>
  );
}
