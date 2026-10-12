import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import InquiryForm from "@/components/InquiryForm";
import ContactScrollytelling from "@/components/motion/ContactScrollytelling";
import Arrow from "@/components/ui/Arrow";
import { company, pageMetadata } from "@/lib/site";
import { FaWhatsapp } from "react-icons/fa6";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata(
  "Contact N&M",
  "Contact N&M Engineering in Rambukkana, Kegalle for house plans, construction, renovations and design consultations. Call +94 70 486 6966.",
  "/contact",
);
export default function Contact() {
  return (
    <main id="main-content" tabIndex={-1}>
      <ContactScrollytelling />
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about home."
        description="An idea, a plot of land or a question about what comes next. We’re here to help you move forward."
      />
      <section className="section">
        <Container>
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Speak to our team</p>
              <h2 className="section-heading">
                Let’s make
                <br />a start.
              </h2>
              <div className="contact-details">
                <div>
                  <span>Call us</span>
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
                <div>
                  <span>Email</span>
                  <a href={"mailto:" + company.email}>{company.email}</a>
                </div>
                <div>
                  <span>Based in</span>
                  <p>{company.address}</p>
                  <a
                    href={company.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    <span>Explore the area</span>
                    <Arrow diagonal size={14} />
                  </a>
                </div>
                <div>
                  <span>Opening hours</span>
                  <p>
                    Monday–Saturday
                    <br />
                    8:00 AM–6:00 PM · Sri Lanka time
                  </p>
                </div>
                <div>
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button outline whatsapp-btn"
                    aria-label="Chat on WhatsApp with N&M Engineering (+94 70 486 6966)"
                  >
                    <FaWhatsapp className="whatsapp-btn-icon" aria-hidden="true" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
            <InquiryForm
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
