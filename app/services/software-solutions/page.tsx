import { servicesData } from "@/lib/services-data";
import ServiceCategoryCommonPage from "@/components/services/ServiceCategoryCommonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Solutions | Network Handlers",
  description: "Turnkey software solutions, multi-vendor marketplaces, trading software, HR integrations, and sports applications.",
};

export default function Page() {
  const category = servicesData["software-solutions"];
  return <ServiceCategoryCommonPage category={category} />;
}
