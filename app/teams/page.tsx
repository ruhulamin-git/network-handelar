"use client";

import { useRef } from "react";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";
import { TeamsHero } from "@/components/teams/TeamsHero";
import { TeamShowcase } from "@/components/teams/TeamShowcase";
import { WhyTeam } from "@/components/teams/WhyTeam";
import { TeamTestimonials } from "@/components/teams/TeamTestimonials";
import { TeamCTA } from "@/components/teams/TeamCTA";

export default function TeamsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  usePageRevealAnimations(containerRef, {
    hero: ".teams-hero-content",
    sections: [
      { selector: ".team-item" },
    ],
  });

  return (
    <div ref={containerRef} className="bg-[#fafaf8] text-[#1a1a1a] mt-20 min-h-screen font-sans selection:bg-amber-200 selection:text-black">
      <title>Our Team | Network Handlers: Custom Software & AI</title>

      {/* ── Hero Section ── */}
      <TeamsHero />

      {/* ── Team Showcase with filter tabs ── */}
      <TeamShowcase />

      {/* ── Why Team Section ── */}
      <WhyTeam />

      {/* ── Testimonials Section ── */}
      <TeamTestimonials />

      {/* ── Call To Action Section ── */}
      <TeamCTA />
    </div>
  );
}
