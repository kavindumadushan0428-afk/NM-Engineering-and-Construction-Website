import ServiceDetail from "@/components/sections/ServiceDetail";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Design & Build",
  "Complete design and construction support from planning to handover in Kegalle, Sri Lanka.",
  "/services/design-build",
);
export default function Page() {
  return <ServiceDetail slug="design-build" />;
}
