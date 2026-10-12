import Link from "next/link";
export default function HeroCountdown() {
  return (
    <div className="glass-card p-6">
      <p className="eyebrow">VR / In development</p>
      <p>Explore a new perspective on your future home.</p>
      <Link href="/vr-experience" className="text-link">
        Discover the experience →
      </Link>
    </div>
  );
}
