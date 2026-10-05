"use client";

import React from "react";
import Link from "next/link";
import { 
  Brain, Cpu, Smartphone, Watch, Globe, ShoppingCart, 
  Layout, Database, Layers, Shield, Key, Code, Settings, 
  ArrowRight
} from "lucide-react";
import { ServiceCategory } from "@/lib/services-data";

interface CategoryCapabilitiesProps {
  category: ServiceCategory;
}

// Helper to dynamically resolve Lucide Icons based on service name
function getServiceIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("agentic") || t.includes("ai agent") || t.includes("nlp")) return Brain;
  if (t.includes("copilot") || t.includes("avatar") || t.includes("generative")) return Cpu;
  if (t.includes("mobile") || t.includes("wearable")) return Smartphone;
  if (t.includes("watch") || t.includes("sensor") || t.includes("iot")) return Watch;
  if (t.includes("web") || t.includes("cms") || t.includes("digital marketing") || t.includes("e-learning")) return Globe;
  if (t.includes("ecommerce") || t.includes("marketplace") || t.includes("cart") || t.includes("betting")) return ShoppingCart;
  if (t.includes("ui") || t.includes("ux") || t.includes("design") || t.includes("event") || t.includes("manufactur")) return Layout;
  if (t.includes("database") || t.includes("data") || t.includes("integration")) return Database;
  if (t.includes("full stack") || t.includes("hybrid") || t.includes("mesh")) return Layers;
  if (t.includes("security") || t.includes("cybersecurity") || t.includes("insurance")) return Shield;
  if (t.includes("compliance") || t.includes("legal") || t.includes("auth") || t.includes("trading") || t.includes("fintech")) return Key;
  if (t.includes("custom") || t.includes("coding") || t.includes("software") || t.includes("mvp")) return Code;
  return Settings;
}

export default function CategoryCapabilities({ category }: CategoryCapabilitiesProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 container-premium w-full">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
            <span className="uppercase tracking-[0.3em] text-xs font-black text-slate-500">Capabilities</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
          </div>
          <h2 className="text-4xl md:text-6xl text-slate-900 tracking-tight leading-[1.05] mb-5 font-black">
            Comprehensive {category.title}
          </h2>
          <p className="text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto text-base">
            Optimize your workflows, build robust architectures, and scale with confidence using our vetted engineering standards.
          </p>
        </div>

        {/* Dynamic Inversion Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {category.subServices.map((s, i) => {
            const CustomIcon = getServiceIcon(s.title);

            // Set color mapping parameters matching the category configuration
            const theme = {
              cyan: {
                iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
                iconHover: "group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500",
                accentBg: "#06b6d4"
              },
              lime: {
                iconBg: "bg-lime-50 text-lime-750 border-lime-100",
                iconHover: "group-hover:bg-lime-500 group-hover:text-white group-hover:border-lime-500",
                accentBg: "#84cc16"
              },
              purple: {
                iconBg: "bg-purple-50 text-purple-600 border-purple-100",
                iconHover: "group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500",
                accentBg: "#a855f7"
              },
              blue: {
                iconBg: "bg-blue-50 text-blue-600 border-blue-100",
                iconHover: "group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
                accentBg: "#3b82f6"
              },
              emerald: {
                iconBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
                iconHover: "group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
                accentBg: "#10b981"
              }
            }[category.iconColor || "cyan"];

            return (
              <article
                key={s.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-white p-8 md:p-10 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.01)] transition-all duration-500 hover:bg-slate-950 hover:border-slate-950 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 cursor-pointer animate-fade-in"
              >
                {/* Decorative Glow inside the card */}
                <div 
                  className="absolute -right-20 -top-20 w-44 h-44 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl pointer-events-none"
                  style={{ backgroundColor: theme.accentBg }}
                />

                <div className="space-y-8 relative z-10">
                  {/* Card Header: Icon + Module Badge */}
                  <div className="flex items-center justify-between w-full">
                    <div className={`flex items-center justify-center rounded-2xl h-14 w-14 border shadow-sm shrink-0 transition-all duration-500 ${theme.iconBg} ${theme.iconHover}`}>
                      <CustomIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-slate-550 font-black uppercase bg-slate-50 group-hover:bg-slate-900 border border-slate-100 group-hover:border-slate-800 transition-colors duration-500 px-3 py-1 rounded-full">
                      Module 0{i + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-extrabold tracking-tight text-slate-900 group-hover:text-white transition-colors duration-500 text-2xl md:text-3xl leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-slate-500 group-hover:text-slate-350 transition-colors duration-500 leading-relaxed text-sm md:text-base font-medium">
                      {s.desc}
                    </p>
                  </div>

                  {/* Key Capabilities Checklist (Enterprise Style) */}
                  <div className="space-y-3 pt-6 border-t border-slate-50 group-hover:border-slate-900 transition-colors duration-500">
                    {s.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        {/* Custom Check Circle */}
                        <span className="flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-500 border-slate-200 group-hover:border-slate-800 bg-white group-hover:bg-slate-900 text-slate-400 group-hover:text-slate-300">
                          <svg
                            className="w-2.5 h-2.5 text-current transition-colors"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="2,6 5,9 10,3" />
                          </svg>
                        </span>
                        <span className="text-[13px] font-bold text-slate-600 group-hover:text-slate-300 transition-colors duration-500">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-8 border-t border-slate-50 group-hover:border-slate-900 transition-colors duration-500 relative z-10">
                  <Link 
                    href={`/services/${category.slug}/${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="group/link inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-800 group-hover:text-white transition-colors duration-500 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1.5" style={{ color: theme.accentBg }} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
