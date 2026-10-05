import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProcessDevelopmentIcon({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const innerGroupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const tl = gsap.timeline({ paused: true });

    gsap.set(svgElement, { autoAlpha: 1, y: 20 });
    gsap.set(innerGroupRef.current, { scale: 0, x: -10, transformOrigin: "center" });

    tl.to(svgElement, { autoAlpha: 1, y: 0, duration: 0.5 })
      .to(innerGroupRef.current, { scale: 1, x: 0, duration: 0.8, ease: "back.out(1.5)" }, "-=0.3");

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
        <path d="M24 30C24 26.686 26.686 24 30 24H70C73.314 24 76 26.686 76 30V62C76 65.314 73.314 68 70 68H30C26.686 68 24 65.314 24 62V30ZM30 28C28.895 28 28 28.895 28 30V62C28 63.105 28.895 64 30 64H70C71.105 64 72 63.105 72 62V30C72 28.895 71.105 28 70 28H30Z" opacity="0.4"/>
        <path d="M42 70H58V74H42V70Z" opacity="0.4"/>
        <path d="M36 74H64V78H36V74Z" opacity="0.8"/>
        <path d="M43 40L33 46L43 52V47L37.167 46L43 45V40ZM57 40L67 46L57 52V47L62.833 46L57 45V40Z" />
        <path d="M53 36L45 56H49L57 36H53Z" />
      </g>
    </svg>
  );
}
