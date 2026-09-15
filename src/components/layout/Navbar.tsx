"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/motion/MagneticButton";

const navItems = [
    { label: "About", href: "/about" },
    {
        label: "Services",
        href: "/services",
        dropdown: [
            { label: "Design & Build", href: "/services/design-build" },
            { label: "House Plans", href: "/services/house-plans" },
            { label: "3D Visualization", href: "/services/3d-visualization" },
            { label: "Renovation", href: "/services/renovation" },
            { label: "BOQ & Estimation", href: "/services/boq-estimation" },
            { label: "Landscaping", href: "/services/landscaping" },
        ]
    },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const navRef = useRef<HTMLElement>(null);

    const handleLogoClick = (e: React.MouseEvent) => {
        setIsOpen(false);
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    // Manage mount state for exit animations
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (isOpen) {
            timer = setTimeout(() => setIsMounted(true), 0);
        } else {
            timer = setTimeout(() => setIsMounted(false), 240);
        }
        return () => clearTimeout(timer);
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Close on outside click and scroll
    useEffect(() => {
        if (!isOpen) return;

        const handleOutsideClick = (e: PointerEvent | MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Pointerdown is preferred for modern touch/mouse setups
        document.addEventListener("pointerdown", handleOutsideClick);
        document.addEventListener("mousedown", handleOutsideClick); // fallback
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // init immediately

        return () => {
            document.removeEventListener("pointerdown", handleOutsideClick);
            document.removeEventListener("mousedown", handleOutsideClick);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    return (
        <>
            {/* Full screen backdrop for mobile menu */}
            {isMounted && (
                <div
                    className={`fixed inset-0 z-40 bg-black/[0.03] backdrop-blur-[1px] lg:hidden transition-opacity ease-out motion-reduce:transition-none
                    ${isOpen ? "opacity-100 duration-300" : "opacity-0 duration-200"}`}
                    aria-hidden="true"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <header ref={navRef} className="fixed left-0 right-0 top-5 z-50 w-full pointer-events-none">
                <Container className="relative pointer-events-auto">
                    <nav
                        className={`
          flex w-full
          items-center justify-between
          rounded-full
          px-5 py-3
          backdrop-blur-2xl
          transition-all
          duration-500
          ease-out
          will-change-[background-color,border-color,box-shadow,transform]
          ${isScrolled
                                ? 'bg-[#FDFCFA]/85 backdrop-blur-xl border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.02]'
                                : 'bg-black/10 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'}
        `}
                    >
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center z-50 lg:z-auto transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97]"
                            onClick={handleLogoClick}
                        >
                            <Image
                                src="/image/logo/nm-logo.png"
                                alt="N&M Engineering Services & Construction"
                                width={200}
                                height={60}
                                priority
                                className="h-7 sm:h-8 lg:h-11 w-auto object-contain transition-all duration-500"
                            />
                        </Link>

                        {/* Navigation - Desktop */}
                        <div className="hidden items-center gap-2 lg:flex relative">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                                return (
                                    <div key={item.href} className="relative group">
                                        <MagneticButton strength={0.15}>
                                            <Link
                                                href={item.href}
                                                className={`
                                                    relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium
                                                    rounded-full
                                                    transition-[color,background-color,border-color,transform,box-shadow]
                                                    duration-250
                                                    [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                                                    will-change-[transform]
                                                    hover:-translate-y-[1px] hover:scale-[1.01]
                                                    active:scale-[0.97] active:duration-75
                                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700/50
                                                    motion-reduce:transition-none motion-reduce:transform-none
                                                    ${isActive
                                                        ? (isScrolled ? "text-red-700 bg-white/80 border border-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.02)]" : "text-white bg-white/20 border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)]")
                                                        : (isScrolled ? "text-neutral-600 hover:text-red-700 hover:bg-white/70 hover:border hover:border-white/80 hover:backdrop-blur-md border border-transparent" : "text-white/80 border border-transparent hover:text-white hover:bg-white/15 hover:border-white/20 hover:backdrop-blur-md")}
                                                `}
                                            >
                                                {item.label}
                                                {item.dropdown && (
                                                    <svg className={`w-3 h-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-scale-y-100 opacity-60 ${isActive && isScrolled ? "text-red-700" : "text-current"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                )}
                                            </Link>
                                        </MagneticButton>

                                        {/* Dropdown panel */}
                                        {item.dropdown && (
                                            <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 
                                                opacity-0 translate-y-3 pointer-events-none scale-95
                                                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-hover:scale-100
                                                transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] z-[60]"
                                            >
                                                <div className={`w-[200px] border rounded-[20px] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.2)] p-2 backdrop-blur-3xl transition-colors duration-500
                                                    ${isScrolled
                                                        ? 'bg-[#FDFCFA]/90 border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] ring-1 ring-black/[0.04]'
                                                        : 'bg-[#0a0a0a]/30 border-white/10 shadow-[inner_0_1px_1px_rgba(255,255,255,0.05)] ring-1 ring-white/10'}`
                                                }>
                                                    <div className="flex flex-col gap-0.5">
                                                        {item.dropdown.map(dropItem => (
                                                            <Link
                                                                key={dropItem.label}
                                                                href={dropItem.href}
                                                                className={`block px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors 
                                                                    ${isScrolled
                                                                        ? 'text-neutral-600 hover:text-red-700 hover:bg-black/[0.03] active:bg-black/[0.06]'
                                                                        : 'text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20'}`
                                                                }
                                                            >
                                                                {dropItem.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA - Desktop */}
                        <MagneticButton strength={0.2} className="hidden lg:inline-flex">
                            <Link
                                href="/book-consultation"
                                className="
                    rounded-full bg-red-700/80 backdrop-blur-lg border border-red-500/40
                    px-5 py-2.5
                    text-sm font-medium text-white
                    shadow-[0_4px_16px_rgba(185,28,28,0.2)]
                    transition-[background-color,border-color,box-shadow,transform]
                    duration-250
                    [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                    will-change-[transform]
                    hover:bg-red-600/90 hover:border-red-400/60 hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(220,38,38,0.3)]
                    active:scale-[0.97] active:duration-75
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700/50 focus-visible:ring-offset-2
                    motion-reduce:transition-none motion-reduce:transform-none
                "
                            >
                                Book Consultation
                            </Link>
                        </MagneticButton>

                        {/* Mobile Menu Button  */}
                        <button
                            className={`flex lg:hidden h-[42px] w-[42px] items-center justify-center rounded-full border shadow-sm
                            transition-[background-color,border-color,box-shadow,transform,color]
                            duration-200
                            [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                            active:scale-95 active:duration-75
                            z-50
                            ${isOpen
                                    ? "bg-white border-neutral-200 shadow-md text-neutral-800"
                                    : isScrolled
                                        ? "bg-white/60 border-neutral-200/80 hover:bg-neutral-100 text-neutral-800"
                                        : "bg-white/20 border-white/20 hover:bg-white/30 text-white"
                                }`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                        >
                            <div className="relative w-5 h-3.5 flex flex-col justify-between">
                                <span className={`h-[2px] w-full bg-current rounded-full transition-transform duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-1' : ''}`} />
                                <span className={`h-[2px] w-full bg-current rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                                <span className={`h-[2px] w-full bg-current rounded-full transition-transform duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-1' : ''}`} />
                            </div>
                        </button>
                    </nav>

                    {/* Mobile Menu Dropdown */}
                    {isMounted && (
                        <div className={`absolute top-[calc(100%+16px)] left-4 right-4 sm:left-6 sm:right-6 lg:hidden flex flex-col overflow-y-auto overflow-x-hidden max-h-[calc(100vh-120px)] rounded-[24px] bg-white/75 border border-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl p-6
                        transition-[opacity,transform]
                        [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]
                        motion-reduce:transition-none origin-top
                        ${isOpen ? "opacity-100 translate-y-0 scale-100 duration-350" : "opacity-0 -translate-y-3 scale-[0.97] duration-200"}`}>
                            <div className="flex flex-col space-y-1 w-full">
                                {navItems.map((item, idx) => {
                                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block w-full px-4 py-3.5 text-base font-semibold transition-all duration-200 ease-out motion-reduce:transition-none active:scale-[0.98] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700/50
                                            ${isActive
                                                    ? "text-red-700 bg-red-50/60 border border-red-100/50"
                                                    : "text-neutral-800 hover:text-red-700 hover:bg-red-50/40 border border-transparent"}
                                            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                                            style={{
                                                transitionDuration: "300ms",
                                                transitionDelay: isOpen ? `${idx * 25}ms` : "0ms",
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="my-5 h-px w-full bg-neutral-200/60" />

                            <Link
                                href="/book-consultation"
                                onClick={() => setIsOpen(false)}
                                className={`w-full rounded-[20px] bg-red-700/80 backdrop-blur-lg border border-red-500/40 shadow-[0_4px_16px_rgba(185,28,28,0.2)] py-4 text-center text-sm font-medium text-white transition-all active:scale-[0.98]
                                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                                style={{
                                    transitionDuration: "300ms",
                                    transitionDelay: isOpen ? `${navItems.length * 25}ms` : "0ms",
                                }}
                            >
                                Book a Consultation
                            </Link>
                        </div>
                    )}
                </Container>
            </header>
        </>
    );
}