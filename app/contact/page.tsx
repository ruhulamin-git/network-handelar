"use client";

import { useRef } from "react";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  usePageRevealAnimations(containerRef, {
    hero: ".contact-hero-animate",
    sections: [
      {
        selector: ".contact-panel",
        y: 55,
        duration: 0.9,
        start: "top 88%",
        delayStep: 0.08,
      },
    ],
  });

  return (
    <div ref={containerRef} >
      {/* ── Hero / Header ── */}
      <ContactHeroSection />
      {/* ── Main Contact Form & Info ── */}
      {/* <ContactMainPage /> */}
    </div>
  );
}
