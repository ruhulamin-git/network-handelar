"use client";

interface PipelineStep {
  num: string;
  title: string;
  description: string;
}

interface TechPipelineProps {
  eyebrow: string;
  title: string;
  description: string;
  steps: PipelineStep[];
}

export default function TechPipeline({
  eyebrow,
  title,
  description,
  steps,
}: TechPipelineProps) {
  return (
    <section className="py-24 bg-white border-y border-zinc-100/80 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
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

        <div className="grid lg:grid-cols-3 gap-12 relative mt-16">
          {/* Connecting line with brand gradient */}
          <div className="hidden lg:block absolute top-[58px] left-[calc(16.66%+30px)] right-[calc(16.66%+30px)] h-[2px] bg-gradient-to-r from-zinc-200 via-[#ccff00] to-zinc-200" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="group text-center space-y-4 relative bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-zinc-200/50 hover:border-[#ccff00]/50 hover:shadow-xl hover:shadow-[#ccff00]/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-full border-2 border-zinc-200 bg-white flex items-center justify-center font-mono text-lg font-bold text-zinc-800 mx-auto z-10 relative group-hover:border-[#ccff00] group-hover:bg-[#ccff00]/10 group-hover:text-black transition-all duration-300">
                {step.num}
              </div>
              <h4 className="text-lg font-bold text-zinc-950 transition-colors duration-300">{step.title}</h4>
              <p className="text-zinc-500 font-light text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

