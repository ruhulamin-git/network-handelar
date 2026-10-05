"use client";

interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: string;
}

interface TechCaseStudiesProps {
  eyebrow: string;
  title: string;
  description: string;
  projects: ProjectItem[];
}

export default function TechCaseStudies({
  eyebrow,
  title,
  description,
  projects,
}: TechCaseStudiesProps) {
  return (
    <section className="py-24 bg-white border-y border-zinc-100/80 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
      <div className="container-premium relative z-10">
        <div className="max-w-3xl mb-20 space-y-4">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="group flex flex-col bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl border border-zinc-800/80 hover:border-[#ccff00]/40 hover:scale-[1.02] transition-all duration-350">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_70%_30%,rgba(204,255,0,0.12),transparent_65%)] pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <div className="mb-8 flex justify-between items-start">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ccff00] px-3.5 py-1.5 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/25">
                  {proj.metrics}
                </span>
              </div>
              <div className="flex-grow space-y-3.5">
                <h4 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#ccff00] transition-colors duration-300">{proj.title}</h4>
                <h5 className="text-sm font-semibold text-[#ccff00]/90">{proj.subtitle}</h5>
                <p className="text-zinc-400 font-light text-sm leading-relaxed pt-2">
                  {proj.description}
                </p>
              </div>
              <div className="border-t border-zinc-900 pt-6 mt-8 flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800/60 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

