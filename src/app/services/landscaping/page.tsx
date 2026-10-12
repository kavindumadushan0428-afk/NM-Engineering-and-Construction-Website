import ServiceDetail from "@/components/sections/ServiceDetail";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Landscaping",
  "Thoughtful garden and outdoor planning to complement your home.",
  "/services/landscaping",
);
export default function Page() {
  return <ServiceDetail slug="landscaping" />;
}
