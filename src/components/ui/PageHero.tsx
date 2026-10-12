import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
export default function PageHero({
  eyebrow,
  title,
  description,
  image = "/Image/Home/hero.webp",
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-visual">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 38vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />
      </div>
      <Container className="relative z-10">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="current">{eyebrow}</span>
        </nav>
        <h1>{title}</h1>
        <p className="hero-description">{description}</p>
      </Container>
    </section>
  );
}
