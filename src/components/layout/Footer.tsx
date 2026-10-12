import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { company } from "@/lib/site";
import { services } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-logo">
              <Image
                src="/Image/Logo/nm-logo-web.png"
                alt={company.name}
                width={210}
                height={105}
              />
            </Link>
            <p>
              Thoughtfully designed.
              <br />
              Carefully engineered. Built for life.
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <Link href="/about">About us</Link>
            <Link href="/projects">Our projects</Link>
            <Link href="/vr-experience">3D & VR experience</Link>
            <Link href="/book-consultation">Book a consultation</Link>
          </div>
          <div>
            <h2>Our expertise</h2>
            {services.map((s) => (
              <Link key={s.slug} href={"/services/" + s.slug}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <h2>Let’s build together</h2>
            <a href={company.phoneHref}>{company.phone}</a>
            <a href={"mailto:" + company.email}>{company.email}</a>
            <p>
              {company.address}
              <br />
              Mon–Sat · 8:00 AM – 6:00 PM
            </p>
            <div className="social-links">
              <a
                href={company.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {company.name}
          </p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Website terms</Link>
            <a href="#main-content">Back to top ↑</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
