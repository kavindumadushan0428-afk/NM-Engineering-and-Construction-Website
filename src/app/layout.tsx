import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { company, siteUrl, description } from "@/lib/site";
import "./globals.css";
const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
export const viewport: Viewport = { themeColor: "#ffffff" };
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: company.name, template: "%s | N&M Engineering" },
  description,
  applicationName: company.shortName,
  robots: siteUrl
    ? { index: true, follow: true }
    : { index: false, follow: false },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company.name,
    description,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rambukkana",
      addressRegion: "Kegalle",
      addressCountry: "LK",
    },
    areaServed: [{ "@type": "Place", name: "Kegalle and nearby areas" }],
    sameAs: [company.facebook, company.instagram],
    ...(siteUrl
      ? {
          url: siteUrl,
          logo: siteUrl + "/Image/Logo/nm-logo-web.png",
          image: siteUrl + "/social.jpg",
        }
      : {}),
  };
  return (
    <html lang="en">
      <body className={geist.variable}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
