"use client";

interface PressReleaseContentProps {
  paragraphs: string[];
  location: string;
}

export default function PressReleaseContent({
  paragraphs,
  location
}: PressReleaseContentProps) {
  return (
    <div className="space-y-12">
      {/* Narrative Body */}
      <div className="prose max-w-none text-gray-650 font-normal leading-relaxed text-base md:text-lg space-y-6">
        {paragraphs.map((pText, idx) => (
          <p key={idx}>
            {idx === 0 ? (
              <>
                <span className="font-bold text-black uppercase">
                  {location} —{" "}
                </span>
                {pText}
              </>
            ) : (
              pText
            )}
          </p>
        ))}
      </div>

      {/* Boilerplate Block */}
      <div className="p-8 rounded-[28px] bg-[#F5F5F5] border border-gray-200 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-black">
          About the Provider
        </h4>
        <p className="text-xs leading-relaxed text-gray-500 font-normal">
          We are a forward-thinking software engineering group delivering dynamic, custom cognitive technology solutions, automated workflows, and enterprise integrations. By bridging deep operational logic with robust UI execution, we help corporations scale, reduce administrative overhead, and stay ahead of the digital curve.
        </p>
      </div>
    </div>
  );
}
