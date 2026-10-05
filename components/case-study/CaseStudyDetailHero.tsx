"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CaseStudyDetailHeroProps {
  image: string;
  category: string;
  title: string;
  summary: string;
}

export default function CaseStudyDetailHero({
  image,
  category,
  title,
  summary
}: CaseStudyDetailHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center py-20 overflow-hidden rounded-[32px] mx-4 my-2 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" 
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-[1]" />
      </div>

      <div className="relative z-10 container-premium w-full text-white">
        <div className="max-w-4xl space-y-8">
          {/* Back Navigation Button */}
          <div className="inline-block">
            <Link href="/case-study">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer">
                <ArrowLeft className="w-4 h-4 text-white" />
                Back to Case Studies
              </button>
            </Link>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="text-[#CCFF00] font-extrabold uppercase tracking-[0.25em] text-xs">
              {category}
            </span>
          </div>

          {/* Header */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
            {title.split(" ").slice(0, -1).join(" ")} <br />
            <span className="text-[#CCFF00]">
              {title.split(" ").slice(-1)}
            </span>
          </h1>
          
          <p className="text-slate-350 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
}
