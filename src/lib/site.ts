import type { Metadata } from "next";
export const company = {
  name: "N&M Engineering Services & Construction",
  shortName: "N&M Engineering",
  phone: "+94 70 486 6966",
  phoneHref: "tel:+94704866966",
  email: "nmengser@gmail.com",
  address: "Rambukkana, Kegalle, Sri Lanka",
  whatsapp: "https://wa.me/94704866966",
  map: "https://www.google.com/maps/search/?api=1&query=Rambukkana%2C+Kegalle%2C+Sri+Lanka",
  facebook: "https://www.facebook.com/nmengineering76",
  instagram: "https://www.instagram.com/nm_engineering_",
};
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl = configuredUrl
  ? new URL(configuredUrl).origin
  : undefined;
export const description =
  "N&M Engineering Services & Construction in Kegalle, Sri Lanka. Practical house plans, design and build, renovations, 3D visualization and BOQ estimation.";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: siteUrl ? { canonical: siteUrl + path } : undefined,
    openGraph: {
      title: title + " | " + company.shortName,
      description,
      type: "website",
      locale: "en_LK",
      siteName: company.name,
      ...(siteUrl
        ? {
            url: siteUrl + path,
            images: [
              {
                url: siteUrl + "/social.jpg",
                width: 1200,
                height: 630,
                alt: company.name,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(siteUrl ? { images: [siteUrl + "/social.jpg"] } : {}),
    },
  };
}
