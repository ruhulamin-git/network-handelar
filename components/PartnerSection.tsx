"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const partners = [
  { name: "Partner 1", src: "/images/partner/Pasted image.png" },
  { name: "Partner 2", src: "/images/partner/Pasted image (2).png" },
  { name: "Partner 3", src: "/images/partner/Pasted image (3).png" },
  { name: "Partner 4", src: "/images/partner/Pasted image (4).png" },
  { name: "Partner 5", src: "/images/partner/Pasted image (5).png" },
  { name: "Partner 6", src: "/images/partner/Pasted image (6).png" },
  { name: "Partner 7", src: "/images/partner/Pasted image (7).png" },
];

export default function PartnerSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollRef.current) return;

    // Duplicate the content for a seamless loop
    const scrollContent = scrollRef.current;
    const contentWidth = scrollContent.scrollWidth;
    
    gsap.to(scrollContent, {
      x: -(contentWidth / 2),
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, { scope: scrollRef });

  return (
    <section className="py-2 bg-gray-50/80 overflow-hidden">

      <div className="relative">
        {/* Gradient Overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex overflow-hidden group">
          <div 
            ref={scrollRef}
            className="flex items-center  whitespace-nowrap py-4"
          >
            {/* Original Logos */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="relative h-16 w-64 flex-shrink-0 transition-all duration-500 opacity-60 hover:opacity-100"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
