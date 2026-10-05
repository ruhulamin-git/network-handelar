"use client";

import Link from "next/link";
import { CustomButton } from "@/components/ui/custom-button";

export function TeamCTA() {
  return (
    <section className="py-24 rounded-[32px] mx-4 relative overflow-hidden bg-[#f5f3ee] border border-[#ddd5c8] shadow-sm mb-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_0%_100%,rgba(251,191,36,0.06),transparent_45%)] pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8e0d5_1px,transparent_1px),linear-gradient(to_bottom,#e8e0d5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column (Main text) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Top Tagline matching landing page */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">
                Next Step
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none text-slate-900">
              Ready to work with a <br />
              <span className="text-slate-800">team that delivers?</span>
            </h2>
            <p className="text-base md:text-lg text-[#5c5449] leading-relaxed max-w-xl">
              Our specialists across AI, IoT, and software engineering are ready to accelerate your next project. Let&apos;s build something great together.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <CustomButton variant="cyan" uppercase showArrow className="px-8 py-5 shadow-lg shadow-cyan-500/20">
                  Get in Touch
                </CustomButton>
              </Link>
            </div>
          </div>

          {/* Right Column (Holographic floating cards) */}
          <div className="lg:col-span-2 relative flex items-center justify-center scale-90 md:scale-95 lg:scale-100 min-h-[300px]">
            {/* Card 1: Left Rotated Card */}
            <div className="absolute left-4 md:left-12 top-6 -rotate-12 rounded-[20px] bg-white border border-[#ddd5c8] text-[#1a1a1a] p-5 w-[200px] shadow-md hover:rotate-0 transition-transform duration-500 z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#D6FD70] animate-pulse" />
                <div className="text-[10px] font-bold text-[#6b6256] uppercase tracking-widest">Our People</div>
              </div>
              <div className="text-sm font-bold leading-relaxed text-[#3d3730]">
                AI, IoT, and Full-Stack Specialists Under One Roof
              </div>
            </div>

            {/* Card 2: Right Rotated Card */}
            <div className="absolute right-4 md:right-8 top-16 rotate-6 rounded-[20px] bg-white border border-[#ddd5c8] p-5 w-[240px] shadow-md hover:rotate-0 transition-transform duration-500 z-20 backdrop-blur-md">
              <div className="rounded-xl bg-[#faf8f5] border border-[#ddd5c8] p-3 mb-4 flex justify-between items-center">
                <div className="text-[10px] text-[#6b6256] font-bold uppercase">Delivery Mode</div>
                <div className="text-[10px] text-amber-800 font-bold px-2 py-0.5 rounded bg-amber-100 border border-amber-300">Domain-Led</div>
              </div>

              <div className="flex items-end gap-2 mb-3">
                <div className="text-3xl font-extrabold text-[#1a1a1a] leading-none">9/10</div>
                <div className="mb-0.5 rounded-full bg-amber-100 border border-amber-300 px-2 py-0.5 text-[9px] font-bold text-amber-800">
                  Satisfaction
                </div>
              </div>

              <div className="text-[9px] text-[#6b6256] font-bold mb-3 uppercase tracking-wider">Team Principles</div>

              <div className="flex flex-wrap gap-1.5">
                {["AI-First", "Ship Fast", "Scale Smart"].map((tag) => (
                  <div key={tag} className="rounded-full bg-[#faf8f5] border border-[#ddd5c8] px-2.5 py-1 text-[9px] font-medium text-[#6b6256]">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
