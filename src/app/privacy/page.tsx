import { company, pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Privacy notice",
  "How N&M uses the contact details you choose to share through this website.",
  "/privacy",
);
export default function Privacy() {
  return (
    <main id="main-content" tabIndex={-1} className="legal-content">
      <p className="eyebrow">Your information</p>
      <h1>Privacy notice</h1>
      <p>
        This notice describes the information handled by this website’s inquiry
        features.
      </p>
      <h2>Information you choose to share</h2>
      <p>
        Inquiry forms ask for your name, contact details and information about
        your project. Consultation requests can also include a preferred meeting
        date, method and budget. Please avoid sending sensitive documents or
        identification through these forms.
      </p>
      <h2>How inquiries work</h2>
      <p>
        When online sending is enabled, your inquiry is passed to our email
        delivery provider, Resend, for delivery to N&M. When the form offers an
        email draft, your details remain in the page until you open and send the
        draft using your own email application. Preparing a draft does not
        submit your inquiry.
      </p>
      <h2>Purpose and contact</h2>
      <p>
        N&M uses the details you submit to respond to your inquiry and discuss
        your project. For questions about your information, or to request
        correction or deletion, contact{" "}
        <a href={"mailto:" + company.email}>{company.email}</a>.
      </p>
      <h2>Technical information</h2>
      <p>
        The hosting provider may process request logs to operate and secure the
        website. The inquiry endpoint uses temporary, hashed request identifiers
        to limit repeated submissions. This site does not add advertising
        cookies or analytics tracking.
      </p>
      <h2>Other services</h2>
      <p>
        Links to WhatsApp, social platforms, email applications and maps open
        services with their own privacy practices. Those services receive
        information according to how you use them.
      </p>
    </main>
  );
}
