"use client";

import { Sparkles } from "lucide-react";

export function WhyTeam() {
  return (
    <section className="relative border-t border-[#ddd5c8] bg-[#f5f3ee] py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Context and tags */}
          <div className="space-y-6 team-item">
            {/* Tagline dot label */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">
                Why Our Team
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] md:text-5xl">
              Specialist focus. High ownership. Guaranteed outcomes.
            </h2>
            
            <p className="max-w-2xl text-base leading-relaxed text-[#5c5449]">
              Our team structure is built directly around our five core practice areas. By assigning a dedicated domain lead to every vertical, we eliminate management layers and guarantee direct, expert-level accountability.
            </p>

            {/* Horizontal pill tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Dedicated domain owners",
                "Strict SLA compliance",
                "Direct developer channels",
                "Autonomous delivery focus",
              ].map((item) => (
                <span key={item} className="rounded-full border border-[#c9c0b2] bg-white px-4 py-2 text-xs text-[#5c5449] shadow-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Visual panel */}
          <div className="relative team-item">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#ddd5c8] shadow-lg">
              <img
                src="/images/why-us.jpg"
                alt="Team collaborating in a bright workspace"
                className="h-[520px] w-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
