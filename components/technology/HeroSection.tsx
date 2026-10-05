"use client";

const HeroSection = () => {
  const stats = [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "500TB+", label: "Data Managed" },
    { value: "<15ms",  label: "Avg Latency" },
    { value: "24/7",   label: "Monitoring" },
  ];

  return (
    <section className="relative w-full text-white flex items-center py-20 overflow-hidden">
      {/* Decorative Technical Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] opacity-40 z-0 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] opacity-30 z-0" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-24 w-full mt-8">
        <div className="max-w-4xl mx-auto text-center hero-text-animate">

          {/* Eyebrow */}
          <div className="eyebrow flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-cyan-400/60" />
            <span className="text-cyan-400 font-black uppercase tracking-[0.4em] text-xs">
              Technology Stack
            </span>
            <div className="w-8 h-px bg-cyan-400/60" />
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.05] mb-8">
            Focus on{" "}
            <span className="text-cyan-400">Trendy Technologies</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-14">
            Founded by tech-savvy professionals, we understand the importance of
            utilizing the latest frameworks to save time and optimize infrastructure
            costs. Our precision-engineered solutions scale with your business demands.
          </p>

          {/* Stats row */}
          <div className="stats-grid grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="text-3xl md:text-4xl font-black text-cyan-400">{s.value}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.25em] font-bold">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;