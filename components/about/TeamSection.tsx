"use client";

import Link from "next/link";
import { useState } from "react";

const team = [
  {
    id: 1,
    name: "Ria Nancoo",
    role: "Team Lead",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Cheyenne George",
    role: "Marketing Officer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Jaylon Calzoni",
    role: "Senior Analyst",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
];

export default function TeamsPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <>
 

      <main
        className="min-h-screen bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
     
      >
        <div className="container-premium mx-auto">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">

            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span
                  className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold text-gray-700"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Teams
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl  text-gray-900 tracking-tighter leading-[0.95] mb-6">
                Meet our teams
              </h1>
            </div>

            {/* Desktop CTA */}
            <div className="hidden sm:block shrink-0">
              <Link href="/contact">
                <button
                  className="group inline-flex items-center gap-3 rounded-full bg-gray-900 px-5 lg:px-6 py-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-black active:scale-95"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  <span>Get in Touch</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b5f23d] transition-transform duration-300 group-hover:rotate-45">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 12L12 2M12 2H5M12 2V9"
                        stroke="#111"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">

            {team.map((member) => {
              const isActive = activeCard === member.id;

              const [firstName, lastName] = member.name.split(" ");

              return (
                <div
                  key={member.id}
                  onMouseEnter={() => setActiveCard(member.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() =>
                    setActiveCard(isActive ? null : member.id)
                  }
                  className={`
                    group relative overflow-hidden rounded-[28px]
                    cursor-pointer border transition-all duration-500
                    ${
                      isActive
                        ? "bg-[#111] border-[#111] shadow-2xl shadow-black/15 -translate-y-2"
                        : "bg-[#f5f5f3] border-gray-200"
                    }
                  `}
                >
                  {/* Top Content */}
                  <div className="p-5 sm:p-6 lg:p-7 pb-4">
                    <div className="flex items-start justify-between gap-4">

                      <div className="min-w-0 flex-1">
                        <h2
                          className={`
                            tracking-tight leading-[0.95]
                            text-2xl sm:text-[2rem] lg:text-[2.2rem]
                            transition-colors duration-300
                            ${
                              isActive
                                ? "text-white"
                                : "text-gray-900"
                            }
                          `}
                        >
                          {firstName}
                          <br />
                          {lastName || ""}
                        </h2>

                        <p
                          className={`
                            mt-2 text-sm transition-colors duration-300
                            ${
                              isActive
                                ? "text-[#b5f23d]"
                                : "text-gray-500"
                            }
                          `}
                          style={{
                            fontFamily:
                              "'DM Sans', sans-serif",
                          }}
                        >
                          {member.role}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div
                        className={`
                          flex h-10 w-10 sm:h-11 sm:w-11 shrink-0
                          items-center justify-center rounded-full
                          transition-all duration-500
                          ${
                            isActive
                              ? "bg-[#b5f23d] rotate-45"
                              : "bg-black"
                          }
                        `}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2 12L12 2M12 2H5M12 2V9"
                            stroke={
                              isActive ? "#111" : "#fff"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="mx-4 sm:mx-5 mb-4 overflow-hidden rounded-[22px] relative h-[280px] sm:h-[320px] md:h-[360px] xl:h-[420px]">

                    <img
                      src={member.img}
                      alt={member.name}
                      className={`
                        h-full w-full object-cover object-top
                        transition-transform duration-700
                        ${
                          isActive
                            ? "scale-110"
                            : "scale-100"
                        }
                      `}
                    />

                    {/* Hover overlay */}
                    <div
                      className={`
                        absolute inset-0 transition-opacity duration-500
                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0"
                        }
                      `}
                      style={{
                        background:
                          "linear-gradient(to top, rgba(181,242,61,0.18) 0%, transparent 60%)",
                      }}
                    />
                  </div>

                  {/* Bottom Reveal */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-500
                      px-5 sm:px-6
                      ${
                        isActive
                          ? "max-h-20 opacity-100 pb-6"
                          : "max-h-0 opacity-0 pb-0"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-white/15" />

                      <span
                        className="text-[11px] uppercase tracking-[0.25em] text-[#b5f23d]"
                        style={{
                          fontFamily:
                            "'DM Mono', monospace",
                        }}
                      >
                        View Profile
                      </span>

                      <div className="flex-1 h-px bg-white/15" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="mt-10 flex justify-center sm:hidden">
            <Link href="/contact">
              <button
                className="group inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg active:scale-95"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <span>Get in Touch</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b5f23d] transition-transform duration-300 group-active:rotate-45">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 12L12 2M12 2H5M12 2V9"
                      stroke="#111"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}