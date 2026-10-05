"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "2017",
    text: "We launched as a lean software development studio focused on building custom web and mobile applications for startups.",
  },
  {
    year: "2019",
    text: "We scaled our engineering capabilities into cloud architecture, DevOps automation, and API-first platform development.",
  },
  {
    year: "2021",
    text: "We integrated AI and machine learning into our stack — delivering intelligent software systems, predictive pipelines, and NLP-powered products.",
  },
  {
    year: "2023",
    text: "We partnered with enterprise clients worldwide, shipping production-grade SaaS platforms, microservices, and real-time data infrastructure.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function JourneyPage() {
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <main
      className="bg-white py-16 sm:py-20 lg:py-28"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <div className="container-premium mx-auto ">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <div
            ref={leftRef}
            className="flex flex-col text-center lg:text-left"
            style={{
              opacity: leftIn ? 1 : 0,
              transform: leftIn
                ? "translateX(0)"
                : "translateX(-40px)",
              transition:
                "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {/* Badge */}
            <div className="mb-5 flex items-center justify-center gap-2 lg:justify-start">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-900" />

              <span
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-700"
                style={{
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Our Journey
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl  text-gray-900 tracking-tighter leading-[0.95] mb-6">
              Our path to
              <br />
              building world-class
              <br />
              software
            </h1>

            {/* Description */}
            <p
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-gray-500 sm:text-[16px] md:text-[18px] lg:max-w-md"
              style={{
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              From a scrappy dev studio to a trusted
              engineering partner for global teams —
              our journey has been shaped by clean code,
              relentless iteration, and a passion for
              shipping products that scale.
            </p>
          </div>

          {/* RIGHT TIMELINE */}
          <div
            ref={rightRef}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            style={{
              opacity: rightIn ? 1 : 0,
              transform: rightIn
                ? "translateX(0)"
                : "translateX(40px)",
              transition:
                "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {milestones.map((m, i) => {
              const isHovered = hoveredCard === m.year;

              return (
                <div
                  key={m.year}
                  onMouseEnter={() =>
                    setHoveredCard(m.year)
                  }
                  onMouseLeave={() =>
                    setHoveredCard(null)
                  }
                  className="cursor-pointer overflow-hidden rounded-[28px] border border-gray-200 bg-white"
                  style={{
                    boxShadow: isHovered
                      ? "0 20px 50px rgba(0,0,0,0.12)"
                      : "0 4px 12px rgba(0,0,0,0.04)",
                    transform: isHovered
                      ? "translateY(-6px)"
                      : "translateY(0)",
                    transition:
                      "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                    transitionDelay: rightIn
                      ? `${i * 90}ms`
                      : "0ms",
                  }}
                >
                  {/* Year Badge */}
                  <div
                    className="mx-4 mt-4 rounded-2xl px-5 py-4 text-center"
                    style={{
                      background: isHovered
                        ? "#b5f23d"
                        : "#111",
                      transition:
                        "all 0.35s ease",
                    }}
                  >
                    <span
                      className="text-lg font-black tracking-widest"
                      style={{
                        fontFamily:
                          "'DM Mono', monospace",
                        color: isHovered
                          ? "#111"
                          : "#fff",
                      }}
                    >
                      {m.year}
                    </span>
                  </div>

                  {/* Card Text */}
                  <div className="p-5 sm:p-6">
                    <p
                      className="text-sm leading-7 sm:text-[15px]"
                      style={{
                        fontFamily:
                          "'DM Sans', sans-serif",
                        color: isHovered
                          ? "rgba(0,0,0,0.72)"
                          : "#555",
                        transition:
                          "color 0.35s ease",
                      }}
                    >
                      {m.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


    </main>
  );
}