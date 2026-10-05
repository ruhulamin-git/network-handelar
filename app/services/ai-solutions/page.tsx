import { servicesData } from "@/lib/services-data";
import ServiceCategoryCommonPage from "@/components/services/ServiceCategoryCommonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions | Network Handlers",
  description: "Turnkey vertical AI software solutions tailored for healthcare, printing, wealth management, and insurance.",
};

export default function Page() {
  const category = servicesData["ai-solutions"];
  return <ServiceCategoryCommonPage category={category} />;
}
