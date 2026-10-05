import { servicesData } from "@/lib/services-data";
import ServiceCategoryCommonPage from "@/components/services/ServiceCategoryCommonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services | Network Handlers",
  description: "Autonomous Agentic AI, custom AI models, custom LLM solutions, and expert AI engineering.",
};

export default function Page() {
  const category = servicesData["ai-services"];
  return <ServiceCategoryCommonPage category={category} />;
}
