import ServiceDetail from "@/components/sections/ServiceDetail";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Renovation",
  "Home renovations, improvements and extensions in Kegalle and nearby areas.",
  "/services/renovation",
);
export default function Page() {
  return <ServiceDetail slug="renovation" />;
}
