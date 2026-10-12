import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import InquiryForm from "@/components/InquiryForm";
import { pageMetadata } from "@/lib/site";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata(
  "Book a consultation",
  "Discuss your construction, house plan or renovation project with N&M Engineering. Request an online or in-person consultation in Kegalle.",
  "/book-consultation",
);
export default function Consultation() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        eyebrow="Book a consultation"
        title="Make the first move."
        description="Tell us a little about your project. We’ll help shape a practical plan for the way forward."
        image="/Image/Projects/project-3.webp"
      />
      <section className="section">
        <Container>
          <div className="contact-grid">
            <div>
              <p className="eyebrow">A clear first step</p>
              <h2 className="section-heading">
                Your ideas.
                <br />
                Our attention.
              </h2>
              <p className="body-copy mt-6">
                Whether you’re planning a new home, updating an existing space
                or making sense of construction costs, we’ll help you identify
                the next step.
              </p>
              <div className="contact-details">
                <div>
                  <span>01 / Share</span>
                  <p>Tell us your goals, location and budget.</p>
                </div>
                <div>
                  <span>02 / Discuss</span>
                  <p>Choose how you’d like to meet.</p>
                </div>
                <div>
                  <span>03 / Plan</span>
                  <p>
                    We’ll contact you to agree a time and confirm the scope.
                  </p>
                </div>
              </div>
              <p className="body-copy mt-6">
                Submitting this form requests a consultation. It does not
                reserve a meeting time or commit you to a construction contract.
              </p>
            </div>
            <InquiryForm
              kind="consultation"
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
