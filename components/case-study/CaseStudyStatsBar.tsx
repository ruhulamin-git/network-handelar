"use client";

interface StatItem {
  value: string;
  label: string;
}

interface CaseStudyStatsBarProps {
  stats: StatItem[];
}

export default function CaseStudyStatsBar({ stats }: CaseStudyStatsBarProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="relative z-20 -mt-10 mx-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-gray-200 p-8 shadow-xl shadow-slate-100/60 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {stats.map((stat, idx) => (
          <div key={idx} className="pt-6 md:pt-0 first:pt-0 md:first:pl-0 flex flex-col justify-center items-center gap-1.5 animate-fade-in">
            <span className="text-4xl md:text-5xl font-black text-black tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
