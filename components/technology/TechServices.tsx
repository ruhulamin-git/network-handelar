"use client";

interface MetricItem {
  value: string;
  label: string;
}

interface ServiceItem {
  title: string;
  description: string;
  status: string;
  metrics: MetricItem[];
}

interface TechServicesProps {
  eyebrow: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export default function TechServices({
  eyebrow,
  title,
  description,
  services,
}: TechServicesProps) {
  return (
    <section className="py-24 bg-[#FAF9F6] border-b border-zinc-200/50 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]">
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
          <p className="text-zinc-500 font-light text-base md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-sm hover:border-[#ccff00]/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#ccff00]/5 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/20 flex items-center justify-center text-zinc-900 text-sm font-bold font-mono group-hover:bg-[#ccff00] group-hover:text-black transition-all duration-300">
                  0{idx + 1}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-700 bg-zinc-50/70 px-2.5 py-1 rounded-full font-mono font-semibold border border-zinc-200/50 group-hover:border-[#ccff00]/30 group-hover:bg-[#ccff00]/10 group-hover:text-black transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> {service.status}
                </span>
              </div>
              <h4 className="text-lg font-bold text-zinc-950 mb-2.5 transition-colors duration-300">{service.title}</h4>
              <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex gap-8 pt-4.5 border-t border-zinc-100">
                {service.metrics.map((m, mi) => (
                  <div key={mi} className="flex flex-col">
                    <span className="font-mono text-base font-bold text-zinc-950">{m.value}</span>
                    <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider font-semibold mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

