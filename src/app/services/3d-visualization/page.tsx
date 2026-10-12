import ServiceDetail from "@/components/sections/ServiceDetail";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "3D Visualization",
  "Architectural exterior and interior visualization for your future home.",
  "/services/3d-visualization",
);
export default function Page() {
  return <ServiceDetail slug="3d-visualization" />;
}
