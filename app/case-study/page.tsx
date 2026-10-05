"use client";

import { useRef } from "react";
import { caseStudies } from "@/lib/blog-data";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";
import CaseStudiesHero from "@/components/case-study/CaseStudiesHero";
import CaseStudyCard from "@/components/case-study/CaseStudyCard";
import CaseStudyCTA from "@/components/case-study/CaseStudyCTA";

export default function CaseStudiesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  usePageRevealAnimations(containerRef, {
    hero: ".cs-hero-reveal",
    sections: [
      {
        selector: ".cs-card-reveal",
      },
      {
        selector: ".cs-cta-reveal",
      }
    ],
  });

  return (
    <div ref={containerRef} className="bg-white mt-20 text-slate-900 min-h-screen">
      {/* Hero Section */}
      <CaseStudiesHero />

      {/* Listing Grid */}
      <section className="py-24 bg-white">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CaseStudyCTA variant="section" />
    </div>
  );
}
