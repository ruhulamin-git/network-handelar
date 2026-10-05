import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles, CheckCircle2, Shield, Calendar, ArrowRight, Zap, Target } from "lucide-react";
import { servicesData } from "@/lib/services-data";
import { CustomButton } from "@/components/ui/custom-button";

interface PageProps {
  params: Promise<{
    category: string;
    service: string;
  }>;
}

// Slugify helper
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export async function generateStaticParams() {
  const paths: { category: string; service: string }[] = [];
  
  Object.values(servicesData).forEach((cat) => {
    cat.subServices.forEach((sub) => {
      paths.push({
        category: cat.slug,
        service: slugify(sub.title),
      });
    });
  });

  return paths;
}

export default async function Page({ params }: PageProps) {
  const { category, service } = await params;
  
  const categoryData = servicesData[category];
  if (!categoryData) {
    notFound();
  }

  const subService = categoryData.subServices.find(
    (s) => slugify(s.title) === service
  );

  if (!subService) {
    notFound();
  }

  // Theme configurations based on category color
  const themeColors = {
    cyan: {
      text: "text-cyan-600",
      bg: "bg-cyan-50",
      accent: "text-cyan-400",
      border: "border-cyan-500",
      gradient: "from-cyan-500 to-blue-600",
      shadow: "shadow-cyan-500/20"
    },
    lime: {
      text: "text-lime-600",
      bg: "bg-lime-50",
      accent: "text-lime-400",
      border: "border-lime-500",
      gradient: "from-lime-400 to-emerald-600",
      shadow: "shadow-lime-500/20"
    },
    purple: {
      text: "text-purple-600",
      bg: "bg-purple-50",
      accent: "text-purple-400",
      border: "border-purple-500",
      gradient: "from-purple-500 to-indigo-600",
      shadow: "shadow-purple-500/20"
    },
    blue: {
      text: "text-blue-600",
      bg: "bg-blue-50",
      accent: "text-blue-400",
      border: "border-blue-500",
      gradient: "from-blue-500 to-cyan-600",
      shadow: "shadow-blue-500/20"
    },
    emerald: {
      text: "text-emerald-600",
      bg: "bg-emerald-50",
      accent: "text-emerald-400",
      border: "border-emerald-500",
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/20"
    }
  }[categoryData.iconColor || "cyan"];

  return (
    <div className="bg-white mt-20 text-slate-900">
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] flex items-center py-24 overflow-hidden rounded-[32px] mx-4 my-2 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" 
            style={{ backgroundImage: `url('${categoryData.heroImage || "/images/erp.jpg"}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-[1]" />
        </div>

        <div className="relative z-10 container-premium w-full text-white">
          <div className="max-w-3xl space-y-8">
            {/* Back Navigation Button */}
            <div className="inline-block">
              <Link href={`/services/${category}`}>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md text-sm font-semibold tracking-wide transition-all duration-300">
                  <ArrowLeft className="w-4 h-4" />
                  Back to {categoryData.title}
                </button>
              </Link>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full bg-lime-400 animate-pulse`} />
              <span className="text-lime-400 font-extrabold uppercase tracking-[0.25em] text-xs">
                {categoryData.subtitle}
              </span>
            </div>

            {/* Big Premium Header */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              {subService.title.split(" ").slice(0, -1).join(" ")} <br />
              <span className={`bg-gradient-to-r ${themeColors.gradient} bg-clip-text text-transparent`}>
                {subService.title.split(" ").slice(-1)}
              </span>
            </h1>
            
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              {subService.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Structured Body */}
      <section className="py-24 bg-white relative">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Content Area: 2 Columns Wide */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Introduction Card */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Overview & Value Delivery
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  At Network Handlers, we deliver high-impact engineering and strategic integration models for <span className="font-bold text-slate-900">{subService.title}</span>. Our team bridges the gap between clean execution and complex logic, ensuring your systems scale sustainably.
                </p>
              </div>

              {/* Core capabilities */}
              <div className="space-y-8">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Key Capabilities & Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {subService.features.map((feat, idx) => (
                    <div 
                      key={idx} 
                      className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 flex gap-4 items-start"
                    >
                      <span className={`flex h-8 w-8 items-center justify-center rounded-xl bg-lime-100 text-lime-700 font-extrabold text-sm shrink-0`}>
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{feat}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          Enterprise-grade deployment conforming to rigorous compliance protocols.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process timeline steps */}
              <div className="space-y-8">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Our Delivery Blueprint
                </h3>
                <div className="relative border-l-2 border-slate-100 pl-6 space-y-10 ml-4">
                  {[
                    { title: "Discovery & Strategy", desc: "We evaluate your current data pipelines, infrastructure constraints, and business goals to map out a concrete architecture.", icon: Target },
                    { title: "Architecture & Design", desc: "Detailed technical specifications, high-fidelity prototypes, and robust security/compliance parameters are mapped.", icon: Shield },
                    { title: "Agile Implementation", desc: "Iterative development cycles backed by strict peer reviews, automated unit testing, and dynamic checks.", icon: Zap }
                  ].map((step, sIdx) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={sIdx} className="relative group">
                        {/* Dot indicator */}
                        <div className="absolute -left-[35px] top-1.5 bg-white border-2 border-slate-200 group-hover:border-cyan-500 rounded-full h-5 w-5 flex items-center justify-center transition-colors">
                          <div className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-cyan-500 transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            <StepIcon className="w-5 h-5 text-slate-500 group-hover:text-cyan-500 transition-colors" />
                            {step.title}
                          </h4>
                          <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Content Area: Sticky Action Form Card */}
            <div className="lg:col-span-1 lg:sticky lg:top-32 space-y-6">
              
              <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-cyan-500/10 blur-2xl" />
                <div className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full bg-lime-500/10 blur-2xl" />

                <div className="relative z-10 space-y-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-lime-400 text-xs font-bold uppercase tracking-wider">
                    Consultation
                  </span>

                  <h3 className="text-2xl font-black leading-tight">
                    Deploy {subService.title} for Your Organization
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    Connect with our technical consultants to receive an implementation roadmap, estimated timeline, and custom quotes.
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-300">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-300">Available Schedules</div>
                        <div className="text-slate-400">Within 24-48 Business Hours</div>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact" className="block pt-4">
                    <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime-300 hover:bg-lime-400 px-6 py-4 text-sm font-bold text-black transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/20">
                      Schedule a Session
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Trust parameters */}
              <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  Engineering Standards
                </h4>
                <div className="space-y-2.5">
                  {["SOC2 & HIPAA Ready Architecture", "24/7 Deployment Health Monitoring", "Continuous Integration Pipelines"].map((std, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs font-bold text-slate-700">{std}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
