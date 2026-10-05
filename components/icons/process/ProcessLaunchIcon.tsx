import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProcessLaunchIcon({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const innerGroupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const tl = gsap.timeline({ paused: true });

    gsap.set(svgElement, { autoAlpha: 1, y: 20 });
    gsap.set(innerGroupRef.current, { scale: 0, y: 20, transformOrigin: "center" });

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
        <path d="M50 20C45 20 38 35 38 52C38 58 40 68 40 68H60C60 68 62 58 62 52C62 35 55 20 50 20Z" />
        <circle cx="50" cy="42" r="6" fill="white" />
        <circle cx="50" cy="42" r="4" fill="#06b6d4" />
        <path d="M38 52L26 68H39C39 68 38 60 38 52Z" opacity="0.8"/>
        <path d="M62 52L74 68H61C61 68 62 60 62 52Z" opacity="0.8"/>
        <path d="M43 68C43 68 45 82 50 82C55 82 57 68 57 68H43Z" opacity="0.5"/>
      </g>
    </svg>
  );
}
