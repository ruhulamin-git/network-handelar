"use client";

import { LucideIcon } from "lucide-react";

interface CapabilityItem {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

interface TechCapabilitiesProps {
  eyebrow: string;
  title: string;
  description: string;
  capabilities: CapabilityItem[];
}

export default function TechCapabilities({
  eyebrow,
  title,
  description,
  capabilities,
}: TechCapabilitiesProps) {
  return (
    <section className="py-24 bg-white border-y border-zinc-100/80 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
      {/* Soft radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccff00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-premium relative z-10">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center justify-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">
              {eyebrow}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-zinc-950">
            {title}
          </h2>
          <p className="text-zinc-500 font-light text-base md:text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-zinc-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-[#ccff00]/80 hover:shadow-[0_20px_40px_rgba(204,255,0,0.06)] hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#ccff00]/10 border border-[#ccff00]/20 flex items-center justify-center text-zinc-900 group-hover:scale-110 group-hover:bg-[#ccff00] group-hover:text-black group-hover:border-[#ccff00] transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-zinc-950 font-mono tracking-tight group-hover:text-cyan-600 transition-colors duration-300">{cap.metric}</span>
                    <span className="block text-[10px] text-zinc-400 font-mono uppercase tracking-wider font-semibold mt-0.5">{cap.metricLabel}</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-zinc-950 mb-3 transition-colors duration-300">{cap.title}</h4>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

