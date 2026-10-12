import { company } from "@/lib/site";

export default function Loading() {
  return (
    <div className="legal-content" aria-busy="true">
      <p role="status">Loading your next perspective…</p>
      <noscript>
        <p>
          Enable JavaScript to view this page. N&M Engineering provides house
          plans, construction, renovation, 3D visualization, BOQ estimation and
          landscaping in Kegalle and nearby areas.
        </p>
        <p>
          Contact us directly: <a href={company.phoneHref}>{company.phone}</a>
          {" · "}
          <a href={"mailto:" + company.email}>{company.email}</a>
        </p>
      </noscript>
    </div>
  );
}
