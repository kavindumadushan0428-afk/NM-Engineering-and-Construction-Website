import ServiceDetail from "@/components/sections/ServiceDetail";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "BOQ & Estimation",
  "Clear bills of quantities and construction cost estimates for your project.",
  "/services/boq-estimation",
);
export default function Page() {
  return <ServiceDetail slug="boq-estimation" />;
}
