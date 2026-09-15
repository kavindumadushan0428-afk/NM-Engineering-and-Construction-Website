import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "VR Experience", href: "/vr-experience" },
    { label: "Contact Us", href: "/contact" },
    { label: "Book Consultation", href: "/book-consultation" },
];

const serviceLinks = [
    { label: "Design & Build", href: "/services/design-build" },
    { label: "House Plans", href: "/services/house-plans" },
    { label: "3D Visualization", href: "/services/3d-visualization" },
    { label: "Renovation", href: "/services/renovation" },
    { label: "BOQ & Estimation", href: "/services/boq-estimation" },
    { label: "Landscaping", href: "/services/landscaping" },
];

export default function Footer() {
    return (
        <footer className="w-full pt-16 md:pt-24 pb-8 text-sm relative">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-12 lg:gap-10 xl:gap-14 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col items-start lg:pr-8">
                        <Link href="/" className="mb-6 inline-block">
                            <Image
                                src="/image/logo/nm-logo.png"
                                alt="N&M Engineering Services & Construction"
                                width={180}
                                height={60}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-neutral-500 leading-relaxed mb-8 max-w-sm">
                            A Kegalle-based engineering and construction company focused on practical homes, renovations, and planning support.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 items-center">
                            <a href="https://www.facebook.com/nmengineering76" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/55 backdrop-blur-xl text-neutral-500 hover:text-[#1877F2] hover:border-[#1877F2]/30 hover:bg-white/90 hover:shadow-[0_4px_14px_rgba(24,119,242,0.15)] transition-all group">
                                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="https://www.instagram.com/nm_engineering_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/55 backdrop-blur-xl text-neutral-500 hover:text-[#E4405F] hover:border-[#E4405F]/30 hover:bg-white/90 hover:shadow-[0_4px_14px_rgba(228,64,95,0.15)] transition-all group">
                                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/55 backdrop-blur-xl text-neutral-500 hover:text-[#0a66c2] hover:border-[#0a66c2]/30 hover:bg-white/90 hover:shadow-[0_4px_14px_rgba(10,102,194,0.15)] transition-all group">
                                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/55 backdrop-blur-xl text-neutral-500 hover:text-[#25D366] hover:border-[#25D366]/30 hover:bg-white/90 hover:shadow-[0_4px_14px_rgba(37,211,102,0.15)] transition-all group">
                                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-neutral-900 mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
                        <ul className="space-y-3.5 text-neutral-500">
                            {quickLinks.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-red-700 transition-colors">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-neutral-900 mb-6 uppercase tracking-wider text-xs">Our Services</h4>
                        <ul className="space-y-3.5 text-neutral-500">
                            {serviceLinks.map(s => (
                                <li key={s.label}>
                                    <Link href={s.href} className="hover:text-red-700 transition-colors">{s.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Area */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-neutral-900 mb-6 uppercase tracking-wider text-xs">Service Area</h4>

                        <div className="mb-6">
                            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block mb-2.5">On-Site:</span>
                            <ul className="space-y-2.5 text-neutral-500">
                                <li>Kegalle &amp; Nearby Areas</li>
                            </ul>
                        </div>

                        <div>
                            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block mb-2.5">Online:</span>
                            <ul className="space-y-2.5 text-neutral-500">
                                <li>Planning</li>
                                <li>BOQ Discussions</li>
                                <li>Design Consultations</li>
                                <li>Island-Wide</li>
                            </ul>
                        </div>
                    </div>

                    {/* Get In Touch */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-neutral-900 mb-6 uppercase tracking-wider text-xs">Get In Touch</h4>
                        <ul className="space-y-3.5 text-neutral-500">
                            <li>
                                <a href="tel:+94704866966" className="hover:text-red-700 transition-colors">+94 70 486 6966</a>
                            </li>
                            <li>
                                <a href="mailto:nmengser@gmail.com" className="hover:text-red-700 transition-colors">nmengser@gmail.com</a>
                            </li>
                            <li>Rambukkana, Kegalle, Sri Lanka</li>
                            <li>Mon–Sat: 8:00 AM – 6:00 PM</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/60 pt-8 gap-4 text-xs text-neutral-400">
                    <p>© 2026 N&amp;M Engineering Services &amp; Construction. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-neutral-900 transition-colors">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
