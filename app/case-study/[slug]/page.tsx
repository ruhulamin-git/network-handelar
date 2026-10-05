import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/blog-data";
import CaseStudyDetailHero from "@/components/case-study/CaseStudyDetailHero";
import CaseStudyStatsBar from "@/components/case-study/CaseStudyStatsBar";
import CaseStudyContent from "@/components/case-study/CaseStudyContent";
import CaseStudyTestimonial from "@/components/case-study/CaseStudyTestimonial";
import CaseStudyBlueprint from "@/components/case-study/CaseStudyBlueprint";
import CaseStudyCTA from "@/components/case-study/CaseStudyCTA";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) {
    notFound();
  }

  return (
    <div className="bg-white mt-20 text-slate-900 min-h-screen pb-24">
      {/* Immersive Hero Section */}
      <CaseStudyDetailHero 
        image={cs.image} 
        category={cs.category} 
        title={cs.title} 
        summary={cs.summary} 
      />

      {/* Key Performance Metrics Bar */}
      <CaseStudyStatsBar stats={cs.stats} />

      {/* Case Study Content Body */}
      <section className="py-24 bg-white relative">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Content Area (Challenge, Solution, Achievements, Testimonial) */}
            <div className="lg:col-span-2 space-y-16">
              <CaseStudyContent 
                challenge={cs.challenge} 
                solution={cs.solution} 
                achievements={cs.achievements} 
              />
              
              <CaseStudyTestimonial testimonial={cs.testimonial} />
            </div>

            {/* Right Sticky Sidebar (Project Blueprint, Action CTA) */}
            <div className="lg:col-span-1 lg:sticky lg:top-32 space-y-6">
              <CaseStudyBlueprint meta={cs.meta} />
              <CaseStudyCTA variant="sidebar" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
