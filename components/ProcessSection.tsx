"use client";

import ProcessConceptIcon from "./icons/process/ProcessConceptIcon";
import ProcessDesignIcon from "./icons/process/ProcessDesignIcon";
import ProcessDevelopmentIcon from "./icons/process/ProcessDevelopmentIcon";
import ProcessLaunchIcon from "./icons/process/ProcessLaunchIcon";
import ProcessSupportIcon from "./icons/process/ProcessSupportIcon";

const processes = [
  {
    id: "01",
    title: "Concept",
    description:
      "Collaborative strategy sessions to align your vision with market-leading objectives.",
    icon: ProcessConceptIcon,
  },
  {
    id: "02",
    title: "UX/UI Design",
    description:
      "User-centric architecture and iterative design for a seamless digital experience.",
    icon: ProcessDesignIcon,
  },
  {
    id: "03",
    title: "Development",
    description:
      "Expert engineering and rigorous testing to build scalable, high-performance software.",
    icon: ProcessDevelopmentIcon,
  },
  {
    id: "04",
    title: "Launch",
    description:
      "Precision deployment and ecosystem integration for a flawless market entry.",
    icon: ProcessLaunchIcon,
  },
  {
    id: "05",
    title: "Support",
    description:
      "Continuous monitoring and proactive maintenance to ensure long-term stability.",
    icon: ProcessSupportIcon,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 py-16 md:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,182,212,0.08)_0%,transparent_55%)]" />

      <div className="container-premium relative z-10  process-section-animate">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-16 lg:mb-20">
          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">
              Workflow
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl leading-[1.1] mb-6 process-title">
            Our Work
            <br />
            Process
          </h2>

          {/* Description */}
          <div className="border-l-2 border-cyan-200 pl-5 sm:pl-6">
            <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
              A systematic approach to transforming complex ideas into
              clinical-grade digital solutions.
            </p>
          </div>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-5 lg:gap-6">
          {processes.map((process, index) => (
            <div
              key={process.id}
              className="group relative flex flex-col rounded-[28px] lg:rounded-[32px] bg-white border border-gray-100 p-6 lg:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 min-h-[280px] md:min-h-[320px]"
            >
              {/* Watermark Number */}
              <span className="absolute -top-4 right-0 text-[80px] md:text-[100px] font-black text-gray-50 group-hover:text-cyan-50 opacity-80 transition-colors duration-500 pointer-events-none select-none">
                {process.id}
              </span>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] mb-6 flex items-center justify-center shrink-0">
                  <process.icon className="w-full h-full object-contain" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl text-gray-900 mb-4 tracking-tight">
                  {process.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                  {process.description}
                </p>

                {/* Spacer */}
                <div className="flex-grow" />
              </div>

              {/* Connector Line Desktop */}
              {index < processes.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-gray-300 to-transparent z-0" />
              )}

              {/* Bottom Hover Bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-cyan-500 w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 md:mt-20 flex items-center justify-center gap-4 opacity-30">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-300" />

          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-cyan-500"
              />
            ))}
          </div>

          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-300" />
        </div>
      </div>
    </section>
  );
}