import ServiceDetail from "@/components/sections/ServiceDetail";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "House Plans",
  "Practical house plans designed around your land, lifestyle and budget in Sri Lanka.",
  "/services/house-plans",
);
export default function Page() {
  return <ServiceDetail slug="house-plans" />;
}
