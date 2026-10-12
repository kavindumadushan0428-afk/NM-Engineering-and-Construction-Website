import PageHero from "@/components/ui/PageHero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import ServicesScrollytelling from "@/components/motion/ServicesScrollytelling";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Engineering & construction services",
  "Design and build, house plans, 3D visualization, renovation, BOQ estimation and landscaping in Kegalle, Sri Lanka.",
  "/services",
);
export default function Services() {
  return (
    <main id="main-content" tabIndex={-1}>
      <ServicesScrollytelling />
      <PageHero
        eyebrow="Our services"
        title="From idea to everyday."
        description="Thoughtful planning and practical engineering, connected through one personal approach to your project."
        image="/Image/Services/D&B.webp"
      />
      <ServicesPreview />
      <section className="section dark-section">
        <Container>
          <div className="studio-grid">
            <div>
              <p className="eyebrow">Where we work</p>
              <h2 className="section-heading">
                Close to your project.
                <br />
                Wherever you are.
              </h2>
            </div>
            <div className="body-copy">
              <p>
                On-site construction and renovation in Kegalle and nearby areas.
              </p>
              <p className="mt-5">
                Online planning, BOQ discussions and design consultations are
                available island-wide. Tell us about your site and we’ll help
                identify the right level of support.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <div>
        <CTASection />
      </div>
    </main>
  );
}
