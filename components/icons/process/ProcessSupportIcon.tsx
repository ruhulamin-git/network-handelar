import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProcessSupportIcon({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const innerGroupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const tl = gsap.timeline({ paused: true });

    gsap.set(svgElement, { autoAlpha: 1, y: 20 });
    gsap.set(innerGroupRef.current, { scale: 0, rotation: 45, transformOrigin: "center" });

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
        {/* Outer glass shield */}
        <path d="M50 20 L22 30 V52 C22 68.5 34 81.5 50 88 C66 81.5 78 68.5 78 52 V30 L50 20 Z" opacity="0.3"/>
        {/* Inner solid shield */}
        <path d="M50 28 L30 35 V52 C30 63.5 38.5 73 50 78 C61.5 73 70 63.5 70 52 V35 L50 28 Z" opacity="0.8"/>
        {/* Perfect Stroke Checkmark */}
        <path d="M38 52 L46 60 L62 44" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}
