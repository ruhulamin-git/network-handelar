import { notFound } from "next/navigation";
import { pressReleases } from "@/lib/blog-data";
import PressReleaseDetailHero from "@/components/press-release/PressReleaseDetailHero";
import PressReleaseContent from "@/components/press-release/PressReleaseContent";
import PressReleaseContactCard from "@/components/press-release/PressReleaseContactCard";
import PressReleaseOtherList from "@/components/press-release/PressReleaseOtherList";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return pressReleases.map((pr) => ({
    slug: pr.slug,
  }));
}

export default async function PressReleaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  const pr = pressReleases.find((p) => p.slug === slug);
  if (!pr) {
    notFound();
  }

  // Get other press releases for the sidebar recommendations
  const otherReleases = pressReleases.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-white mt-20 text-slate-900 min-h-screen pb-24">
      {/* Immersive Dark Hero Section */}
      <PressReleaseDetailHero 
        image={pr.image} 
        title={pr.title} 
        date={pr.date} 
        readTime={pr.readTime} 
        category={pr.category} 
      />

      {/* Press Release Content Body */}
      <section className="py-20 bg-white relative">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Content Area (Narrative and Boilerplate) */}
            <div className="lg:col-span-2">
              <PressReleaseContent 
                paragraphs={pr.paragraphs} 
                location={pr.location} 
              />
            </div>

            {/* Right Sticky Sidebar (Contact Card and Related Updates) */}
            <div className="lg:col-span-1 lg:sticky lg:top-32 space-y-6">
              <PressReleaseContactCard variant="sidebar" contact={pr.contact} />
              <PressReleaseOtherList otherReleases={otherReleases} />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
