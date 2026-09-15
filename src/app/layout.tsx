import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "N&M Engineering Services & Construction",
  description:
    "N&M is a Kegalle-based engineering and construction company focused on practical homes, renovations and planning support.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
