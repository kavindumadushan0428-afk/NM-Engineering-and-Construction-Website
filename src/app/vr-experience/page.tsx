import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import InquiryForm from "@/components/InquiryForm";
import ScrollHouseExperience from "@/components/three/ScrollHouseExperience";
import Arrow from "@/components/ui/Arrow";
import { pageMetadata } from "@/lib/site";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata(
  "3D & VR experience",
  "Explore an interactive architectural house model from N&M Engineering and inquire about the immersive VR home planning experience in development.",
  "/vr-experience",
);
export default function Experience() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        eyebrow="3D & VR experience"
        title="A new perspective."
        description="Explore a house model today. Discover the immersive home-planning experience we’re developing for tomorrow."
        image="/Image/VR-Ecperience/vr-teaser.webp"
      />
      <section className="section">
        <Container>
          <div className="section-top">
            <div>
              <p className="eyebrow">Interactive 3D preview</p>
              <h2 className="section-heading">Look a little closer.</h2>
            </div>
            <p className="body-copy">
              Rotate the exterior model to understand its shape and proportions.
              This is a demonstration model; your project’s design is developed
              with you.
            </p>
          </div>
          <ScrollHouseExperience />
        </Container>
      </section>
      <section className="section dark-section">
        <Container>
          <div className="studio-grid">
            <div>
              <p className="eyebrow">In development / Virtual reality</p>
              <h2 className="section-heading">
                Step inside.
                <br />
                Before you build.
              </h2>
            </div>
            <div>
              <p className="body-copy">
                Our planned VR experience will help you explore room layouts,
                materials and spatial relationships in an immersive environment.
                The full walkthrough platform is still in development.
              </p>
              <p className="body-copy mt-5">
                Register your interest to discuss availability with the team. A
                public launch date is not confirmed here.
              </p>
              <Link href="#vr-inquiry" className="text-link mt-6">
                Register your interest <Arrow size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="section" id="vr-inquiry">
        <Container>
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Keep in touch</p>
              <h2 className="section-heading">
                Be part of
                <br />
                what comes next.
              </h2>
              <div className="faq-list">
                <details>
                  <summary>Is a headset needed for the preview?</summary>
                  <p>
                    No. The exterior model on this page works in a supported
                    desktop or mobile browser.
                  </p>
                </details>
                <details>
                  <summary>Can I explore my own design?</summary>
                  <p>
                    Our team can discuss project-specific 3D visualization. The
                    model on this page is a demonstration.
                  </p>
                </details>
                <details>
                  <summary>When will VR be available?</summary>
                  <p>
                    The immersive platform is in development. Contact us for the
                    latest project availability and preview opportunities.
                  </p>
                </details>
              </div>
            </div>
            <InquiryForm
              kind="vr"
              emailEnabled={Boolean(
                process.env.RESEND_API_KEY && process.env.INQUIRY_FROM_EMAIL,
              )}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
