"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────────
export type AiProductFeature = {
  title: string;
  desc: string;
};

export type AiProduct = {
  id: string;
  label: string;
  href: string;
  icon: string; // emoji or image path
  tagline: string; // short bold subheading shown in the center card
  exploreLabel?: string;
  features: AiProductFeature[];
  previewImage?: string; // path to screenshot / mockup shown in right panel
  previewAlt?: string;
};

type AiProductsMegaMenuProps = {
  products: AiProduct[];
  defaultProductId?: string;
  onNavigate?: () => void;
};

// ─── Mock dashboard SVG preview (used when no previewImage is supplied) ────────
function DashboardPreview({ label }: { label: string }) {
  return (
    <div className="relative w-full h-[240px] rounded-b-xl overflow-hidden bg-white flex flex-col p-4 gap-3 select-none border border-slate-200/60">
      {/* Header bar (internal) */}
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">Analytics Console</span>
        <span className="max-w-[60%] truncate text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
          {label}
        </span>
        <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/25 px-1.5 py-0.5 rounded text-[8px] font-bold text-emerald-600 animate-pulse">
          ● Live
        </div>
      </div>

      {/* Stat pills row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { v: "99.8%", l: "Uptime" },
          { v: "24.5k", l: "Requests" },
          { v: "14ms", l: "Latency" },
        ].map((s) => (
          <div
            key={s.l}
            className="rounded-lg p-2 flex flex-col gap-0.5 bg-slate-50 border border-slate-100"
          >
            <span className="text-xs font-black text-slate-800">{s.v}</span>
            <span className="text-[8px] text-slate-400 uppercase tracking-wider">{s.l}</span>
          </div>
        ))}
      </div>

      {/* Sparkline area */}
      <div className="flex-1 rounded-lg bg-slate-50 border border-slate-100 p-3 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[8px] text-slate-400 font-semibold uppercase tracking-wider">Performance Metrics</span>
          <span className="text-[8px] text-slate-500">Real-time</span>
        </div>
        
        {/* Fake sparklines */}
        <svg viewBox="0 0 200 40" className="w-full mt-2" fill="none">
          <polyline points="0,30 30,15 60,22 90,8 120,18 150,5 180,12 200,2" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
          <polyline points="0,35 30,25 60,28 90,18 120,25 150,12 180,20 200,10" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function AiProductsMegaMenu({
  products,
  defaultProductId,
  onNavigate,
}: AiProductsMegaMenuProps) {
  const [active, setActive] = useState<AiProduct>(
    products.find((p) => p.id === defaultProductId) ?? products[0],
  );

  return (
    <div
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      className="w-[95%] max-w-7xl mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] backdrop-blur-xl flex text-slate-800"
      style={{ animation: "aiMenuIn 0.28s cubic-bezier(0.16,1,0.3,1)" }}
    >
      {/* ── Col 1: Product list sidebar (No icons/images on left sidebar) ───── */}
      <div className="w-[22%] shrink-0 border-r border-slate-100 bg-slate-50/50 p-4 flex flex-col gap-1">
        {products.map((product) => {
          const isActive = active.id === product.id;
          return (
            <Link
              key={product.id}
              href={product.href}
              onMouseEnter={() => setActive(product)}
              onClick={onNavigate}
              className={`w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-200 group rounded-xl cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white font-extrabold shadow-md shadow-slate-900/10"
                  : "text-slate-650 hover:text-slate-900 hover:bg-slate-100/60"
              }`}
            >
              <span className="text-[13px] font-bold tracking-wide">
                {product.label}
              </span>
              <ChevronRight
                size={14}
                className={`shrink-0 transition-all duration-200 ${isActive ? "text-[#ccff00] translate-x-1" : "text-slate-400 group-hover:text-slate-650 group-hover:translate-x-0.5"}`}
              />
            </Link>
          );
        })}
      </div>

      {/* ── Col 2: Feature detail ─────────────────────────────────── */}
      <div className="flex-1 flex flex-col p-6 min-w-0 justify-between">
        <div className="space-y-6">
          {/* Hero card */}
          <div className="flex items-center gap-4 rounded-2xl bg-slate-50 border border-slate-100 p-5 relative overflow-hidden group/hero">
            {/* Subtle background gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-200/30 via-transparent to-transparent opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500" />
            
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-2xl shadow-sm z-10">
              {active.icon}
            </div>
            <div className="min-w-0 flex-1 z-10">
              <p className="font-extrabold text-slate-900 text-base leading-tight truncate">{active.label}</p>
              <p className="text-[13px] text-slate-500 mt-1 leading-snug line-clamp-2">{active.tagline}</p>
            </div>
            <Link
              href={active.href}
              onClick={onNavigate}
              className="relative shrink-0 rounded-xl bg-slate-900 px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-white hover:bg-slate-800 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300 flex items-center gap-1 group/btn z-10 cursor-pointer"
            >
              <span>{active.exploreLabel ?? "Explore"}</span>
              <ArrowUpRight size={12} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>

          {/* Features / Capabilities */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-2.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
              Key Capabilities
            </p>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {active.features.slice(0, 4).map((feat) => (
                <Link
                  key={feat.title}
                  href={active.href}
                  onClick={onNavigate}
                  className="group/item block p-3 rounded-2xl border border-transparent hover:border-slate-200/60 hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                >
                  <p className="text-[13px] font-bold text-slate-800 leading-snug group-hover/item:text-cyan-600 transition-colors">
                    {feat.title}
                  </p>
                  <p className="text-[11.5px] text-slate-500 leading-snug mt-1 font-medium line-clamp-2">
                    {feat.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Col 3: Visual preview ─────────────────────────────────── */}
      <div className="w-[44%] shrink-0 border-l border-slate-100 p-6 bg-slate-50/30 flex items-center justify-center">
        <div className="w-full flex flex-col gap-2">
          {/* Browser frame header */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-100/90 rounded-t-xl border-t border-x border-slate-200/80 text-slate-400 text-[10px]">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <span className="h-2 w-2 rounded-full bg-green-500/70" />
            </div>
            <div className="bg-white border border-slate-200 px-3 py-0.5 rounded text-[8px] tracking-wider text-slate-400 truncate max-w-[180px] text-center">
              networkhandlers.com{active.href}
            </div>
            <div className="w-10" />
          </div>
          
          {/* Image/Mockup Container */}
          <div className="relative rounded-b-xl overflow-hidden border-b border-x border-slate-200 bg-white shadow-xl shadow-slate-200/40 group/preview">
            {active.previewImage ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={active.previewImage}
                alt={active.previewAlt ?? active.label}
                className="w-full h-[240px] object-cover transition-transform duration-700 ease-out group-hover/preview:scale-[1.03]"
              />
            ) : (
              <DashboardPreview label={active.label} />
            )}
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-200/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Animation keyframe */}
      <style jsx global>{`
        @keyframes aiMenuIn {
          from { opacity: 0; transform: translateY(-10px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>
    </div>
  );
}