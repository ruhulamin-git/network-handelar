"use client";

interface CaseStudiesHeroProps {
  title?: string;
  tagline?: string;
  description?: string;
}

export default function CaseStudiesHero({
  title = "Proven Results. Real Business Value.",
  tagline = "Client Success Stories",
  description = "Explore how we design and deploy intelligent agentic systems and bespoke software integrations to accelerate workflows and minimize overhead."
}: CaseStudiesHeroProps) {
  return (
    <section className="relative min-h-[45vh] flex items-center py-16 md:py-24 overflow-hidden rounded-[28px] mx-3 my-3 bg-[#F5F5F5] border border-gray-250/20">
      {/* Architectural grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      
      <div className="relative z-10 container-premium">
        <div className="max-w-4xl space-y-6 cs-hero-reveal">
          {/* Label indicator matching homepage */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-black">
              {tagline}
            </span>
          </div>

          {/* Heading matching homepage size and leading */}
          <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl text-black leading-[1.15] tracking-tight font-medium">
            {title.split(".")[0]}.
            {title.split(".")[1] && (
              <>
                <br />
                <span className="text-gray-400">{title.split(".").slice(1).join(".")}</span>
              </>
            )}
          </h1>
          
          <p className="leading-relaxed text-gray-500 max-w-2xl font-normal text-sm md:text-base opacity-90">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
