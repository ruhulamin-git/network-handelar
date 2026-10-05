"use client";

import { useRef } from "react";
import { pressReleases } from "@/lib/blog-data";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";
import PressReleaseHero from "@/components/press-release/PressReleaseHero";
import PressReleaseCard from "@/components/press-release/PressReleaseCard";
import PressReleaseContactCard from "@/components/press-release/PressReleaseContactCard";

export default function PressReleasesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  usePageRevealAnimations(containerRef, {
    hero: ".pr-hero-reveal",
    sections: [
      {
        selector: ".pr-card-reveal",
      },
      {
        selector: ".pr-contact-reveal",
      }
    ],
  });

  return (
    <div ref={containerRef} className="bg-white mt-20 text-slate-900 min-h-screen">
      {/* Hero Section */}
      <PressReleaseHero />

      {/* Press Releases Grid */}
      <section className="py-24 bg-white">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((pr) => (
              <PressReleaseCard key={pr.slug} pr={pr} />
            ))}
          </div>
        </div>
      </section>

      {/* Media Relations Contact Block */}
      <PressReleaseContactCard variant="section" />
    </div>
  );
}
