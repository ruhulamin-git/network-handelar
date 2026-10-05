import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProcessDesignIcon({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const innerGroupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const tl = gsap.timeline({ paused: true });

    gsap.set(svgElement, { autoAlpha: 1, y: 20 });
    gsap.set(innerGroupRef.current, { scale: 0, y: 10, transformOrigin: "center" });

    tl.to(svgElement, { autoAlpha: 1, y: 0, duration: 0.5 })
      .to(innerGroupRef.current, { scale: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" }, "-=0.3");

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
        <path d="M50 26L22 40L50 54L78 40Z" />
        <path d="M22 51L50 65L78 51L70 47L50 57L30 47Z" opacity="0.7" />
        <path d="M22 62L50 76L78 62L70 58L50 68L30 58Z" opacity="0.4" />
      </g>
    </svg>
  );
}
