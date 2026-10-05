"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type PageRevealSection = {
  selector: string;
  trigger?: string;
  start?: string;
  y?: number;
  duration?: number;
  delayStep?: number;
  /** Hard cap on per-element stagger delay (default: 0.4s) */
  maxDelay?: number;
};

type PageRevealOptions = {
  hero?: string | string[];
  sections?: PageRevealSection[];
};

export function usePageRevealAnimations(
  scopeRef: RefObject<HTMLElement | null>,
  options: PageRevealOptions = {}
) {
  useGSAP(
    () => {
      const heroSelectors = Array.isArray(options.hero)
        ? options.hero
        : options.hero
          ? [options.hero]
          : [];

      heroSelectors.forEach((selector) => {
        gsap.from(selector, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.1,
        });
      });

      options.sections?.forEach((section) => {
        gsap.utils.toArray<HTMLElement>(section.selector).forEach((element, index) => {
          gsap.fromTo(
            element,
            {
              y: section.y ?? 60,
              opacity: 0,
            },
            {
              scrollTrigger: {
                trigger: section.trigger ?? element,
                start: section.start ?? "top 85%",
                toggleActions: "play none none reverse",
              },
              y: 0,
              opacity: 1,
              duration: section.duration ?? 0.8,
              ease: "power2.out",
              delay: Math.min((section.delayStep ?? 0) * index, section.maxDelay ?? 0.4),
            }
          );
        });
      });
    },
    { scope: scopeRef }
  );
}