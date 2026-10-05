"use client";

import Link from "next/link";
import { CustomButton } from "@/components/ui/custom-button";

interface TechCTAProps {
  techName: string;
  description: string;
}

export default function TechCTA({ techName, description }: TechCTAProps) {
  return (
    <section className="mx-4 xl:mx-auto max-w-[1400px] py-16 md:py-24 px-4 sm:px-8 md:px-12 my-8 md:my-16 rounded-[24px] md:rounded-[32px] bg-[#080d16] text-white relative overflow-hidden">
      {/* Refined grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(204,255,0,0.12),transparent_50%)] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tighter leading-[1.1] md:leading-[1.0] px-2">
          Ready to Build with <span className="font-semibold text-[#ccff00]">{techName}</span>?
        </h2>
        <p className="text-slate-300 text-sm md:text-base font-light max-w-xl mx-auto px-2">
          {description}
        </p>
        <div className="pt-4">
          <Link href="/contact">
            <CustomButton 
              variant="cyan" 
              uppercase={false} 
              showArrow 
              className="uppercase tracking-wider text-[10px] sm:text-sm px-4 sm:px-8 py-3.5 sm:py-5 shadow-lg shadow-[#ccff00]/10 max-w-full"
            >
              <span className="hidden sm:inline">Book a Free Consultation</span>
              <span className="inline sm:hidden">Free Consultation</span>
            </CustomButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

