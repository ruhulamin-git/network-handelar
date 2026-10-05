import Image from 'next/image';
import React from 'react';
import enterpriseImage from "../../public/images/enterprise_integration.png";

const Enterprise = () => {
  const features = [
    "99.99% Infrastructure Uptime SLA",
    "Real-time Performance Monitoring",
    "SOC 2 Type II Compliant Architectures",
  ];

  return (
    <section className="tech-section relative py-16 sm:py-20 md:py-24 bg-white border-t border-gray-100 overflow-hidden">
      {/* Decorative tint */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-[140px] -z-0" />

      <div className="container-premium relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-20">

          {/* ── Left: Image ── */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden w-full max-w-sm sm:max-w-md mx-auto md:mx-0 aspect-[4/3] md:aspect-[3/4] shadow-2xl shadow-gray-200/60">
              <Image
                src={enterpriseImage}
                alt="Enterprise network infrastructure with fiber optic cables"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-200/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="w-full md:w-1/2 space-y-5 sm:space-y-6">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-cyan-500/50" />
              <span className="text-cyan-600 text-xs font-black uppercase tracking-[0.4em]">
                Enterprise Grade
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[1.0]">
              Seamless Enterprise{" "}
              <span className="text-cyan-500">Integration</span>
            </h2>

            {/* Body */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium max-w-md">
              Our handlers specialize in complex network transitions. Whether
              migrating from legacy on-premise solutions to Hybrid Cloud or
              scaling your edge computing capacity, we ensure zero-latency
              operational continuity.
            </p>

            {/* Divider */}
            <div className="h-px bg-gray-100 w-full" />

            {/* Feature list */}
            <ul className="space-y-3 sm:space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-cyan-400/60 flex items-center justify-center bg-cyan-50">
                    <svg
                      className="w-2.5 h-2.5 text-cyan-500"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm font-bold">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2">
              <button
                className="
                  inline-flex items-center gap-2
                  px-6 py-3 text-sm font-black text-cyan-600
                  border border-cyan-400/60 rounded-lg
                  bg-transparent hover:bg-cyan-50
                  transition-all duration-200 tracking-widest uppercase
                  group
                "
              >
                Review SLA Documents
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;