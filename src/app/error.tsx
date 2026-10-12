"use client";
import Link from "next/link";
export default function ErrorPage({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <main id="main-content" tabIndex={-1} className="legal-content">
      <p className="eyebrow">Something went wrong</p>
      <h1>A brief interruption.</h1>
      <p>We couldn’t load this page. Please try again or contact our team.</p>
      <div className="hero-actions">
        <button type="button" className="button primary" onClick={retry}>
          Try again
        </button>
        <Link href="/contact" className="button outline">
          Contact N&M
        </Link>
      </div>
    </main>
  );
}
