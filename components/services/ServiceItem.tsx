"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServiceItemProps {
  service: any;
  index: number;
  onSelect: (service: any) => void;
}

export default function ServiceItem({ service, index, onSelect }: ServiceItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && itemRef.current && numberRef.current && titleRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      // Animate number color on scroll into view
      gsap.to(numberRef.current, {
        color: "#22d3ee", // cyan-400
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        },
        duration: 0.6,
        ease: "power2.out"
      });

      // Animate title color on scroll into view
      gsap.to(titleRef.current, {
        color: "#0891b2", // cyan-600
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        },
        duration: 0.6,
        ease: "power2.out"
      });
    }
  }, []);

  return (
    <div ref={itemRef} className="service-item group">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Number Only */}
        <div className="lg:col-span-2">
          <span 
            ref={numberRef}
            className="text-8xl font-black text-gray-100 transition-colors duration-500"
          >
            {service.id}
          </span>
        </div>

        {/* Content */}
        <div className="lg:col-span-10 space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-cyan-500" />
              <span className="text-cyan-600 font-black uppercase tracking-[0.3em] text-[10px]">
                {service.subtitle}
              </span>
            </div>
            
            <h3 
              ref={titleRef}
              className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight transition-colors"
            >
              {service.title}
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              {service.desc}
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-3 pt-2">
            {service.features.map((feature: string, fIndex: number) => (
              <div 
                key={fIndex} 
                className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-300"
              >
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link 
              href={`/services/${
                service.id === "01" ? "custom-software-development" :
                service.id === "02" ? "legacy-software-modernization" :
                service.id === "03" ? "crm-erp-integrations" :
                service.id === "04" ? "ai-machine-learning" :
                service.id === "05" ? "cybersecurity-compliance" :
                service.id === "06" ? "structured-cabling-solutions" :
                "#"
              }`}
              className="text-cyan-600 font-black text-sm uppercase tracking-wider hover:text-cyan-700 transition-colors flex items-center gap-2 group/btn"
            >
              <span>Learn More</span>
              <svg 
                className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  );
}
