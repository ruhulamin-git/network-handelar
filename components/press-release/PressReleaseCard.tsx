"use client";

import Link from "next/link";
import { Newspaper } from "lucide-react";

interface PressReleaseCardProps {
  pr: {
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    summary: string;
    location: string;
  };
}

export default function PressReleaseCard({ pr }: PressReleaseCardProps) {
  return (
    <div className="pr-card-reveal flex flex-col rounded-[28px] border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-550 group cursor-pointer">
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pr.image}
          alt={pr.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Category Overlay Tag */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 rounded-lg bg-white/95 text-slate-800 text-[10px] font-bold uppercase tracking-wider shadow-sm border border-slate-100">
            {pr.category}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
            <Newspaper size={13} className="text-slate-350" />
            <span>{pr.date}</span>
            <span>•</span>
            <span>{pr.readTime}</span>
          </div>
          
          <h3 className="text-lg xl:text-xl font-bold text-black leading-tight group-hover:text-black transition-colors line-clamp-2">
            {pr.title}
          </h3>
          
          <p className="text-sm text-gray-500 leading-relaxed font-normal line-clamp-3">
            {pr.summary}
          </p>
        </div>

        {/* Footer / Location & Link */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="text-[11px] font-semibold text-gray-400">
            <span>{pr.location}</span>
          </div>

          <Link href={`/press-release/${pr.slug}`}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:shadow-black/25">
              <span>Read Release</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#CCFF00] transition-all duration-300 group-hover:rotate-45">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7v10"
                    stroke="black"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
