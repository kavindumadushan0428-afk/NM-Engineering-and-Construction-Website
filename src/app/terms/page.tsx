import { company, pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Website terms",
  "Information about using the N&M Engineering website and making project inquiries.",
  "/terms",
);
export default function Terms() {
  return (
    <main id="main-content" tabIndex={-1} className="legal-content">
      <p className="eyebrow">Using this website</p>
      <h1>Website terms</h1>
      <h2>Project information</h2>
      <p>
        Service descriptions and project images provide an introduction to our
        work. Architectural visualizations and demonstration models illustrate
        design possibilities. Confirm project specifications, costs, timelines
        and service availability directly with N&M.
      </p>
      <h2>Inquiries and consultations</h2>
      <p>
        Submitting an inquiry does not create a construction contract or reserve
        a meeting. A requested date and time must be confirmed by our team.
        Project work is subject to a separately agreed scope and terms.
      </p>
      <h2>3D and VR previews</h2>
      <p>
        The interactive model is a demonstration. The immersive VR platform is
        in development; features and availability should be confirmed with our
        team.
      </p>
      <h2>Questions</h2>
      <p>
        Contact <a href={"mailto:" + company.email}>{company.email}</a> or{" "}
        <a href={company.phoneHref}>{company.phone}</a> for clarification about
        services and project information.
      </p>
    </main>
  );
}
