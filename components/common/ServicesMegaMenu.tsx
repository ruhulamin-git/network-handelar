"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { servicesData } from "@/lib/services-data";

interface ServicesMegaMenuProps {
  onNavigate?: () => void;
}

// Slugify helper to map sub-services to dynamic routes
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export default function ServicesMegaMenu({ onNavigate }: ServicesMegaMenuProps) {
  const categories = Object.values(servicesData);
  const [activeSlug, setActiveSlug] = useState<string>(categories[0].slug);

  const activeCategory = servicesData[activeSlug] || categories[0];

  return (
    <div
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      className="w-[95%] max-w-6xl mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] backdrop-blur-xl flex text-slate-800"
      style={{ animation: "servicesMenuIn 0.28s cubic-bezier(0.16,1,0.3,1)" }}
    >
      {/* ── Col 1: Category list sidebar (No icons or images) ───────────────── */}
      <div className="w-[24%] shrink-0 border-r border-slate-100 bg-slate-50/50 p-4 flex flex-col gap-1">
        {categories.map((cat) => {
          const isActive = activeSlug === cat.slug;
          return (
            <Link
              key={cat.slug}
              href={`/services/${cat.slug}`}
              onMouseEnter={() => setActiveSlug(cat.slug)}
              onClick={onNavigate}
              className={`w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-200 group rounded-xl cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white font-extrabold shadow-md shadow-slate-900/10"
                  : "text-slate-650 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              <span className="text-[13px] font-bold tracking-wide">
                {cat.title}
              </span>
              <ChevronRight
                size={14}
                className={`shrink-0 transition-all duration-200 ${isActive ? "text-[#ccff00] translate-x-1" : "text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5"}`}
              />
            </Link>
          );
        })}
      </div>

      {/* ── Col 2: Sub-services Grid ────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col p-6 min-w-0 justify-between">
        <div className="space-y-6">
          {/* Category Info Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="min-w-0 flex-1 pr-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">
                Category
              </span>
              <h4 className="font-extrabold text-slate-900 text-lg leading-tight truncate">
                {activeCategory.title}
              </h4>
              <p className="text-[12.5px] text-slate-500 mt-1 leading-relaxed line-clamp-1 font-medium">
                {activeCategory.tagline}
              </p>
            </div>
            
            <Link
              href={`/services/${activeCategory.slug}`}
              onClick={onNavigate}
              className="relative shrink-0 rounded-xl bg-slate-900 px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-white hover:bg-slate-800 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300 flex items-center gap-1 group/btn cursor-pointer"
            >
              <span>Explore All</span>
              <ArrowUpRight size={12} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>

          {/* Sub-services Grid */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-2.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
              Sub Services
            </p>
            
            <div className="grid grid-cols-3 gap-x-4 gap-y-2 max-h-[320px] overflow-y-auto pr-2 overscroll-contain">
              {activeCategory.subServices.map((sub) => {
                const subServiceRoute = `/services/${activeCategory.slug}/${slugify(sub.title)}`;
                return (
                  <Link
                    key={sub.title}
                    href={subServiceRoute}
                    onClick={onNavigate}
                    className="group/item block p-2 rounded-xl border border-transparent hover:border-slate-200/60 hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                  >
                    <p className="text-[12.5px] font-bold text-slate-800 leading-snug group-hover/item:text-cyan-600 transition-colors flex items-center gap-0.5">
                      <span className="line-clamp-1">{sub.title}</span>
                      <ArrowUpRight size={11} className="opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                    </p>
                    <p className="text-[10px] text-slate-500 leading-normal mt-0.5 font-medium line-clamp-2">
                      {sub.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframe & scrollbar */}
      <style jsx global>{`
        @keyframes servicesMenuIn {
          from { opacity: 0; transform: translateY(-10px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        /* Custom scrollbar for services mega menu */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}
