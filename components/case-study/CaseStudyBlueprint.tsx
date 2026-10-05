"use client";

interface MetaItem {
  client: string;
  industry: string;
  timeline: string;
  services: string[];
  techStack: string[];
}

interface CaseStudyBlueprintProps {
  meta: MetaItem;
}

export default function CaseStudyBlueprint({ meta }: CaseStudyBlueprintProps) {
  if (!meta) return null;

  return (
    <div className="p-6 rounded-[24px] border border-gray-200 bg-white space-y-6">
      <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 pb-3 border-b border-gray-100">
        Project Blueprint
      </h3>

      <div className="space-y-4 text-xs font-semibold">
        <div>
          <span className="text-gray-400 uppercase tracking-wide text-[10px] block mb-1">Client</span>
          <span className="text-black font-bold">{meta.client}</span>
        </div>
        <div>
          <span className="text-gray-400 uppercase tracking-wide text-[10px] block mb-1">Industry</span>
          <span className="text-black font-bold">{meta.industry}</span>
        </div>
        <div>
          <span className="text-gray-400 uppercase tracking-wide text-[10px] block mb-1">Timeline</span>
          <span className="text-black font-bold">{meta.timeline}</span>
        </div>
        <div>
          <span className="text-gray-400 uppercase tracking-wide text-[10px] block mb-1">Services Delivered</span>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {meta.services.map((serv, sIdx) => (
              <span key={sIdx} className="px-2.5 py-1 rounded-full bg-[#F5F5F5] text-black text-[10px] font-bold border border-gray-150">
                {serv}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="text-gray-400 uppercase tracking-wide text-[10px] block mb-1">Tech Stack</span>
          <div className="flex flex-wrap gap-1 mt-1.5">
            {meta.techStack.map((tech, tIdx) => (
              <span key={tIdx} className="px-2.5 py-1 rounded-full bg-black text-[#CCFF00] text-[10px] font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
