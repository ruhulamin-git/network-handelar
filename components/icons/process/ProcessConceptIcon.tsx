import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function ProcessConceptIcon({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const innerGroupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const tl = gsap.timeline({ paused: true });

    gsap.set(svgElement, { autoAlpha: 1, y: 20 });
    gsap.set(innerGroupRef.current, { scale: 0, rotation: -45, transformOrigin: "center" });

    tl.to(svgElement, { autoAlpha: 1, y: 0, duration: 0.5 })
      .to(innerGroupRef.current, { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.5)" }, "-=0.3");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.restart();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(svgElement);

    return () => {
      tl.kill();
      observer.unobserve(svgElement);
    };
  }, []);

  return (
    <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} overflow="visible">
      <g ref={innerGroupRef} fill="#06b6d4">
        <path d="M49.999 22C39.525 22 31 30.525 31 41C31 46.524 33.376 51.492 37.158 54.89C38.931 56.484 40 58.749 40 61.144V66C40 67.657 41.343 69 43 69H57C58.657 69 60 67.657 60 66V61.144C60 58.749 61.069 56.484 62.842 54.89C66.624 51.492 69 46.524 69 41C69 30.525 60.474 22 49.999 22ZM44 72H56V74C56 75.657 54.657 77 53 77H47C45.343 77 44 75.657 44 74V72Z" />
        <path d="M50 32C45.029 32 41 36.029 41 41H45C45 38.239 47.239 36 50 36C52.761 36 55 38.239 55 41H59C59 36.029 54.971 32 50 32Z" opacity="0.5"/>
      </g>
    </svg>
  );
}
