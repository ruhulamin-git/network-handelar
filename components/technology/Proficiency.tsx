import React from "react";
import SectionHeading from "./SectionHeading";

const Proficiency = () => {
  const proficiencyData = [
    {
      category: "Frontend & Mobile",
      items: [
        { name: "React / Next.js", pct: 96 },
        { name: "TypeScript", pct: 93 },
        { name: "Flutter / React Native", pct: 88 },
        { name: "Swift / Kotlin", pct: 82 },
      ],
    },
    {
      category: "Backend & Infrastructure",
      items: [
        { name: ".NET / C#", pct: 95 },
        { name: "Node.js / Laravel", pct: 92 },
        { name: "AWS / Azure / GCP", pct: 90 },
        { name: "Docker / Kubernetes", pct: 87 },
      ],
    },
  ];
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container-premium ">
        <SectionHeading
          eyebrow=" Team Proficiency"
          title=" What We Excel At"
          description="Domain expertise ratings across our core engineering teams —
              measured by certifications, delivered projects, and peer review."
        />

        {/* Two-column proficiency grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 max-w-4xl mx-auto">
          {proficiencyData.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-cyan-600 mb-6">
                {group.category}
              </p>
              <div className="space-y-5">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-bold text-gray-800">
                        {item.name}
                      </span>
                      <span className="text-xs font-bold text-gray-500">{item.pct}%</span>
                    </div>
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proficiency;
