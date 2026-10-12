"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Arrow from "@/components/ui/Arrow";
import { LuChevronDown, LuX } from "react-icons/lu";
import { services } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const mq = matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (mq.matches) dialog.current?.close();
    };
    mq.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = old;
      mq.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  const close = () => {
    if (!dialog.current || isClosing) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setIsClosing(true);
    document.body.style.overflow = "";

    if (prefersReducedMotion) {
      dialog.current?.close();
      setOpen(false);
      setIsClosing(false);
      return;
    }

    setTimeout(() => {
      dialog.current?.close();
      setOpen(false);
      setIsClosing(false);
    }, 240);
  };

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setServicesOpen(false);
    const isCurrentPage = pathname === href;

    if (open) {
      close();
    }

    if (isCurrentPage) {
      e.preventDefault();
      requestAnimationFrame(() => {
        scrollToTop();
      });
    }
  };

  const active = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className={"site-header " + (scrolled ? "is-scrolled" : "")}>
      <nav className="nav-shell" aria-label="Main navigation">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="brand"
          aria-label="N&M Engineering — home"
          onClick={(e) => handleNavClick(e, "/")}
        >
          <Image
            src="/Image/Logo/nm-logo-web.png"
            alt="N&M Engineering Services & Construction"
            width={152}
            height={76}
            className="brand-logo"
            priority
          />
        </Link>

        {/* Center: Neatly Centered Desktop Navigation Links (Home, About, Services, Projects) */}
        <div className="desktop-nav">
          {links.map((link) => (
            <div
              key={link.href}
              className="nav-item"
              onMouseEnter={() => {
                if (link.href === "/services") setServicesOpen(true);
              }}
              onMouseLeave={() => setServicesOpen(false)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget))
                  setServicesOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setServicesOpen(false);
                  e.currentTarget.querySelector("button")?.focus();
                }
              }}
            >
              <Link
                href={link.href}
                className="nav-link"
                aria-current={active(link.href) ? "page" : undefined}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </Link>
              {link.href === "/services" && (
                <>
                  <button
                    type="button"
                    className="services-toggle"
                    aria-label="Show service links"
                    aria-expanded={servicesOpen}
                    aria-controls="service-links"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    <LuChevronDown size={12} strokeWidth={2} aria-hidden="true" />
                  </button>
                  <div
                    id="service-links"
                    className="service-menu"
                    data-open={servicesOpen}
                  >
                    {services.map((s) => (
                      <Link
                        href={"/services/" + s.slug}
                        key={s.slug}
                        onClick={(e) =>
                          handleNavClick(e, "/services/" + s.slug)
                        }
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Right: Compact Rounded CTA Pill Navigating to /contact & Mobile Menu Toggle */}
        <div className="nav-actions">
          <Link
            href="/contact"
            className="button primary nav-cta"
            onClick={(e) => handleNavClick(e, "/contact")}
          >
            Let’s talk <Arrow diagonal />
          </Link>
          <button
            type="button"
            ref={trigger}
            className="menu-toggle"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => {
              dialog.current?.showModal();
              setOpen(true);
            }}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Accessible Mobile Navigation Modal */}
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-menu"
        data-closing={isClosing ? "true" : undefined}
        aria-labelledby="menu-title"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClose={() => {
          setOpen(false);
          setIsClosing(false);
          document.body.style.overflow = "";
          trigger.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === dialog.current) {
            const rect = dialog.current.getBoundingClientRect();
            const isInDialog =
              rect.top <= e.clientY &&
              e.clientY <= rect.top + rect.height &&
              rect.left <= e.clientX &&
              e.clientX <= rect.left + rect.width;
            if (!isInDialog) close();
          }
        }}
      >
        <div className="mobile-menu-top">
          <span id="menu-title" className="eyebrow">
            Explore N&M
          </span>
          <button
            type="button"
            className="close-button"
            onClick={close}
            aria-label="Close navigation menu"
          >
            <LuX size={18} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              aria-current={active(link.href) ? "page" : undefined}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              <span>{link.label}</span>
              {active(link.href) && (
                <span className="mobile-active-dot" aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="mobile-menu-cta"
          onClick={(e) => handleNavClick(e, "/contact")}
        >
          Let’s talk <Arrow diagonal size={14} />
        </Link>
        <p className="mobile-menu-note">Rambukkana · Kegalle · Sri Lanka</p>
      </dialog>
    </header>
  );
}
