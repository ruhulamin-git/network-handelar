"use client";

import React, { useRef } from "react";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";
import { ServiceCategory } from "@/lib/services-data";
import CategoryHero from "./CategoryHero";
import CategoryCapabilities from "./CategoryCapabilities";
import CategoryWhyChooseUs from "./CategoryWhyChooseUs";
import CategoryTestimonials from "./CategoryTestimonials";
import CategoryCTA from "./CategoryCTA";

interface ServiceCategoryCommonPageProps {
  category: ServiceCategory;
}

export default function ServiceCategoryCommonPage({ category }: ServiceCategoryCommonPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  usePageRevealAnimations(containerRef, {
    hero: ".category-hero-content",
    sections: [
      {
        selector: ".service-item",
        y: 50,
        duration: 1,
        start: "top 80%",
        delayStep: 0.08,
      },
    ],
  });

  return (
    <div ref={containerRef} className="bg-white mt-20 text-slate-900">
      <CategoryHero category={category} />
      <CategoryCapabilities category={category} />
      <CategoryWhyChooseUs />
      <CategoryTestimonials />
      <CategoryCTA />
    </div>
  );
}
