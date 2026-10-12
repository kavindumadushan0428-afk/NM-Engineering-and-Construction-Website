import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="legal-content">
      <p className="eyebrow">404 / Page not found</p>
      <h1>
        Let’s get you
        <br />
        back on solid ground.
      </h1>
      <p>This page may have moved, or the address may be incorrect.</p>
      <div className="hero-actions">
        <Link href="/" className="button primary">
          Back to home →
        </Link>
        <Link href="/services" className="button outline">
          Explore services
        </Link>
      </div>
    </main>
  );
}
