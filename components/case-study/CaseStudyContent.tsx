"use client";

import { BookOpen, Sparkles, Layers, CheckCircle2 } from "lucide-react";

interface CaseStudyContentProps {
  challenge: string;
  solution: string;
  achievements: string[];
}

export default function CaseStudyContent({
  challenge,
  solution,
  achievements
}: CaseStudyContentProps) {
  return (
    <div className="space-y-16">
      {/* Challenge Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-slate-100 text-black">
            <BookOpen className="w-5 h-5" />
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight">
            The Challenge
          </h2>
        </div>
        <p className="text-gray-650 leading-relaxed font-normal text-base md:text-lg">
          {challenge}
        </p>
      </div>

      {/* Solution Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-[#CCFF00] text-black">
            <Sparkles className="w-5 h-5" />
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight">
            Our Solution & Engineering Approach
          </h2>
        </div>
        <p className="text-gray-650 leading-relaxed font-normal text-base md:text-lg">
          {solution}
        </p>
      </div>

      {/* Achievements Checklist */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-black text-[#CCFF00]">
            <Layers className="w-5 h-5" />
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight">
            Key Achievements
          </h2>
        </div>
        <div className="grid gap-4">
          {achievements.map((item, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-[#F5F5F5] border border-gray-150 flex gap-4 items-start"
            >
              <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
              <p className="text-sm font-bold text-gray-700 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
