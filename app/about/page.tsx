"use client";

import { useRef } from "react";

import AboutSection from "@/components/about/AboutSection";
import HeroPage from "@/components/about/AboutHeroSectin";
import JourneySection from "@/components/about/JourneySection";
import TeamSection from "@/components/about/TeamSection";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";

export default function AboutUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  usePageRevealAnimations(containerRef, {
    hero: ".about-hero-reveal",
    sections: [
      {
        selector: ".about-section-reveal",
        y: 70,
        duration: 0.9,
        start: "top 85%",
        delayStep: 0.06,
      },
      {
        selector: ".journey-section-reveal",
        y: 70,
        duration: 0.9,
        start: "top 85%",
        delayStep: 0.06,
      },
      {
        selector: ".team-section-reveal",
        y: 70,
        duration: 0.9,
        start: "top 85%",
        delayStep: 0.06,
      },
    ],
  });

  return (
    <div ref={containerRef} className="bg-white">
      <div className="about-hero-reveal">
        <HeroPage />
      </div>

      <div className="about-section-reveal">
        <AboutSection />
      </div>

      <div className="journey-section-reveal">
        <JourneySection />
      </div>

      <div className="team-section-reveal">
        <TeamSection />
      </div>
    </div>
  );
}
