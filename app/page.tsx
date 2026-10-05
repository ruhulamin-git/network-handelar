"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import PartnerSection from "@/components/PartnerSection";
import TestimonialSection from "@/components/TestimonialSection";
import InsightSection from "@/components/InsightSection";
import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import ServicesSection from "@/components/ServiceSection";

import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";
import { HeroSection } from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      // Hero Text Reveal Animation
      gsap.from(".hero-text", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.12,
      });

      // Smooth Typewriter Effect
      const words = [
        "Software",
        "Technology",
        "AI Agents",
        "Experiences",
        "Integration",
      ];

      if (typewriterRef.current) {
        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.5,
        });

        words.forEach((word) => {
          // Type text
          tl.to(typewriterRef.current, {
            duration: word.length * 0.08,
            text: word,
            ease: "none",
          });

          // Pause
          tl.to({}, { duration: 1.5 });

          // Delete text
          tl.to(typewriterRef.current, {
            duration: word.length * 0.05,
            text: "",
            ease: "none",
          });

          // Gap before next word
          tl.to({}, { duration: 0.2 });
        });
      }

      // Section Reveal Animations
      const sections = [
        {
          id: "#about",
          selector:
            ".about-text-animate > *, .about-visual-animate",
        },
        {
          id: ".capabilities-content",
          selector:
            ".capabilities-content, .capability-card",
        },
        {
          id: ".nextgen-visual-animate",
          selector:
            ".nextgen-visual-animate, .nextgen-content-animate",
        },
        {
          id: ".process-section-animate",
          selector: ".process-section-animate",
        },
        {
          id: ".insight-card",
          selector: ".insight-card",
        },
        {
          id: ".testimonial-card",
          selector: ".testimonial-card",
        },
      ];

      sections.forEach((section) => {
        gsap.fromTo(
          section.selector,
          {
            y: 60,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: section.id,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      });

      // Background Parallax
      gsap
        .utils
        .toArray<HTMLElement>(".section-bg")
        .forEach((bg) => {
          gsap.to(bg, {
            scrollTrigger: {
              trigger: bg,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            yPercent: 20,
            ease: "none",
          });
        });
    },
    { scope: containerRef }
  );



  usePageRevealAnimations(containerRef, {
    hero: ".hero-text-animate",
    sections: [
      { selector: ".About-us" },
      { selector: ".services-content" },
      { selector: ".testimonial-card" },
      { selector: ".insight-card" },
    ],
  });

  return (
    <div ref={containerRef} className="bg-white text-zinc-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative z-10">
          <HeroSection />
          <PartnerSection />
        </div>
      </div>

      {/* Main Sections */}
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialSection />
      <InsightSection />
      <CertificationsSection />
    </div>
  );
}