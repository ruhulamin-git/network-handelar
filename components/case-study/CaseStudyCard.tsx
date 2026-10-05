"use client";

import Link from "next/link";
import { TrendingUp } from "lucide-react";

interface CaseStudyCardProps {
  cs: {
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    summary: string;
    stats: { value: string; label: string }[];
    meta: {
      client: string;
      industry: string;
      timeline: string;
      services: string[];
      techStack: string[];
    };
  };
}

export default function CaseStudyCard({ cs }: CaseStudyCardProps) {
  const mainStat = cs.stats && cs.stats[0];

  return (
    <div className="cs-card-reveal flex flex-col rounded-[28px] border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-550 group cursor-pointer">
      {/* Case Study Image Wrapper */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cs.image}
          alt={cs.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Metrics Tag Badge on Image - uses brand slate-900 and lime green accent */}
        {mainStat && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white border border-white/10 shadow-md select-none">
            <TrendingUp size={12} className="text-[#CCFF00]" />
            <span className="text-xs font-black text-[#CCFF00]">{mainStat.value}</span>
            <span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider">
              {mainStat.label.split(" ")[0]}
            </span>
          </div>
        )}

        {/* Category Overlay Tag */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 rounded-lg bg-white/95 text-slate-800 text-[10px] font-bold uppercase tracking-wider shadow-sm border border-slate-100">
            {cs.category}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-6">
        <div className="space-y-3">
          <h3 className="text-lg xl:text-xl font-bold text-black leading-tight group-hover:text-black transition-colors line-clamp-2">
            {cs.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed font-normal line-clamp-3">
            {cs.summary}
          </p>
        </div>

        {/* Footer / Meta & Link */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="text-[11px] font-semibold text-gray-400">
            <span>{cs.meta.client.split(" ")[0]}</span>
            <span className="mx-2">•</span>
            <span>{cs.meta.timeline}</span>
          </div>

          <Link href={`/case-study/${cs.slug}`}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:shadow-black/25">
              <span>Read Case</span>
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
