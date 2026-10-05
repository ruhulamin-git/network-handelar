import { servicesData } from "@/lib/services-data";
import ServiceCategoryCommonPage from "@/components/services/ServiceCategoryCommonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development | Network Handlers",
  description: "Bespoke software platforms, mobile applications, Next.js web systems, and full stack API integrations.",
};

export default function Page() {
  const category = servicesData["software-development"];
  return <ServiceCategoryCommonPage category={category} />;
}
