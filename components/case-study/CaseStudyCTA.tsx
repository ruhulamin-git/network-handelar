"use client";

import Link from "next/link";
import { CustomButton } from "@/components/ui/custom-button";

interface CaseStudyCTAProps {
  variant?: "section" | "sidebar";
}

export default function CaseStudyCTA({ variant = "section" }: CaseStudyCTAProps) {
  if (variant === "sidebar") {
    return (
      <div className="p-8 rounded-[24px] bg-[#F5F5F5] border border-gray-200 shadow-sm relative overflow-hidden group">
        <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-[#CCFF00]/5 blur-2xl transition-all duration-500 group-hover:bg-[#CCFF00]/10" />
        
        <div className="relative z-10 space-y-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-black">
              Ready to Scale?
            </span>
          </div>

          <h3 className="text-xl font-bold text-black leading-tight">
            Deploy a similar AI or system solution
          </h3>

          <p className="text-gray-500 text-xs leading-relaxed font-normal">
            Connect with our technical consultants to receive an implementation roadmap, estimated timeline, and custom quotes.
          </p>

          <Link href="/contact" className="block pt-2">
            <button className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#1a1a1a] hover:bg-black px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:shadow-lg hover:shadow-black/20 cursor-pointer group">
              <span>Schedule a Session</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] transition-all duration-300 group-hover:rotate-45">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7v10"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="cs-cta-reveal py-16 bg-white">
      <div className="container-premium">
        <div className="rounded-[28px] bg-black text-white p-12 md:p-16 text-center space-y-8 relative overflow-hidden">
          {/* Radial glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(204,255,0,0.08),transparent_50%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white leading-tight">
              Ready to Design Your Next Success Story?
            </h2>
            <p className="text-gray-400 leading-relaxed font-normal text-sm md:text-base">
              Partner with our engineering team to build high-performance automation pipelines, cognitive systems, and scale-ready architectures customized for your workflows.
            </p>
          </div>

          <div className="flex justify-center items-center relative z-10">
            <Link href="/contact">
              <CustomButton variant="cyan" uppercase showArrow className="px-8 py-5 shadow-lg shadow-[#CCFF00]/10">
                Start a Conversation
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
