"use client";

import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

interface PressReleaseDetailHeroProps {
  image: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
}

export default function PressReleaseDetailHero({
  image,
  title,
  date,
  readTime,
  category
}: PressReleaseDetailHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center py-20 overflow-hidden rounded-[32px] mx-4 my-2 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 opacity-20" 
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-[1]" />
      </div>

      <div className="relative z-10 container-premium w-full text-white">
        <div className="max-w-4xl space-y-6">
          {/* Back Navigation Button */}
          <div className="inline-block">
            <Link href="/press-release">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer">
                <ArrowLeft className="w-4 h-4 text-white" />
                All Press Releases
              </button>
            </Link>
          </div>

          {/* Tagline Badge */}
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="text-[#CCFF00] font-extrabold uppercase tracking-[0.25em] text-xs">
              Official Release
            </span>
          </div>

          {/* Announcement Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] max-w-4xl text-white">
            {title}
          </h1>
          
          {/* Announcement Meta Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 border-t border-slate-800/80 pt-4">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#CCFF00]" />
              <span>{date}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>{readTime}</span>
            <span className="hidden sm:inline">•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#CCFF00] text-black text-[10px] font-bold">{category}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
