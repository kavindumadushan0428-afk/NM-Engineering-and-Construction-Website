import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { services } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
    "/book-consultation",
    "/vr-experience",
    "/privacy",
    "/terms",
    ...services.map((s) => "/services/" + s.slug),
  ].map((path) => ({
    url: siteUrl + path,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.8 : 0.6,
  }));
}
