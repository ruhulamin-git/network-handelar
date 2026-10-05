"use client";

interface StatItem {
  label: string;
  value: string;
  change: string;
}

interface TelemetryEndpoint {
  route: string;
  render: string;
  reqs: string;
  p99: string;
  status: string;
}

interface TechTelemetryProps {
  eyebrow: string;
  title: string;
  description: string;
  stats: StatItem[];
  endpoints: TelemetryEndpoint[];
  logFilename: string;
}

export default function TechTelemetry({
  eyebrow,
  title,
  description,
  stats,
  endpoints,
  logFilename,
}: TechTelemetryProps) {
  return (
    <section className="py-24 bg-[#FAF9F6] border-b border-zinc-200/50 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" id="telemetry">
      <div className="container-premium relative z-10">
        
        {/* Split Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & Stats Grid */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
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

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white border border-zinc-200/60 rounded-2xl p-5 shadow-sm hover:border-[#ccff00]/60 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-bold">{stat.label}</span>
                  <div className="text-3xl font-bold text-zinc-950 tracking-tight my-1.5 font-mono">{stat.value}</div>
                  <span className="text-[11px] font-mono text-emerald-600 font-medium">{stat.change}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sleek Minimal Telemetry Dashboard Feed */}
          <div className="lg:col-span-6 relative w-full">
            <div className="absolute inset-0 bg-[#ccff00]/5 rounded-[32px] blur-3xl pointer-events-none" />
            
            <div className="relative bg-slate-900 border border-slate-800 rounded-[28px] overflow-hidden shadow-2xl p-6 space-y-6">
              
              {/* Top window bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="font-mono text-xs text-slate-505 text-slate-500">{logFilename}</span>
                </div>
                
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ccff00]/10 text-[#ccff00] font-mono text-[9px] border border-[#ccff00]/20 font-semibold">
                  <span className="w-1 h-1 rounded-full bg-[#ccff00] animate-pulse" /> EDGE STATS
                </span>
              </div>

              {/* Feed items */}
              <div className="space-y-3">
                {endpoints.slice(0, 4).map((ep, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 bg-slate-950/45 hover:bg-slate-950/90 border border-slate-800/60 hover:border-slate-800 rounded-xl transition-all duration-200">
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-white font-medium">{ep.route}</div>
                      <div className="text-[10px] font-mono text-slate-550 text-slate-500 uppercase tracking-wider">{ep.render}</div>
                    </div>
                    
                    <div className="text-right flex items-center gap-4">
                      <div className="space-y-0.5">
                        <div className="text-xs font-mono text-[#ccff00] font-semibold">{ep.p99}</div>
                        <div className="text-[9px] font-mono text-slate-550 text-slate-500">{ep.reqs}</div>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
