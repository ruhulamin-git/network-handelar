"use client";

import { useState } from "react";
import { teamMembers, departments } from "@/lib/team-data";
import { TeamMemberCard } from "./TeamMemberCard";
import { Sparkles } from "lucide-react";

type DeptFilter = (typeof departments)[number] | "All";

export function TeamShowcase() {
  const [activeDept, setActiveDept] = useState<DeptFilter>("All");

  const filtered = activeDept === "All"
    ? teamMembers
    : teamMembers.filter((m) => m.department === activeDept);

  return (
    <section id="showcase" className="py-24 bg-white relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-4xl text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">
              Our Domain Experts
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight leading-[1.1]">
            One specialist per discipline, <br />
            <span className="text-slate-800">built to deliver excellence.</span>
          </h2>
          <p className="text-[#5c5449] leading-relaxed font-medium max-w-2xl mx-auto text-sm md:text-base">
            Our team is structured around five service verticals — each led by an elite specialist who owns design, engineering, and delivery end-to-end.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-16">
          {(["All", ...departments] as DeptFilter[]).map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeDept === dept
                  ? "bg-[#1a1a1a] text-white border-transparent shadow-sm"
                  : "bg-white text-[#5c5449] border-[#ddd5c8] hover:border-[#c9c0b2] hover:text-[#1a1a1a]"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#faf8f5] p-4 md:p-6 rounded-[36px] border border-[#ddd5c8]">
          {filtered.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
