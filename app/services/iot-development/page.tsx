import { servicesData } from "@/lib/services-data";
import ServiceCategoryCommonPage from "@/components/services/ServiceCategoryCommonPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Development | Network Handlers",
  description: "Connected firmware, mesh networks, PCB designs, and smart wearable app development.",
};

export default function Page() {
  const category = servicesData["iot-development"];
  return <ServiceCategoryCommonPage category={category} />;
}
