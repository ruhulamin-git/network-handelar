"use client";

import { useRef } from "react";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";
import { CustomButton } from "@/components/ui/custom-button";

import { 
  Building2, 
  Heart, 
  GraduationCap, 
  Landmark, 
  HandHeart, 
  Users, 
  Home, 
  Lightbulb, 
} from "lucide-react";
import Link from "next/link"; 

const industries = [
  {
    icon: Building2,
    title: "Government & Public Sector",
    description: "Providing secure, reliable, and compliant software solutions that streamline operations, improve public services, and enhance efficiency.",
    color: "bg-blue-500",
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    description: "Developing HIPAA-compliant software systems, healthcare management applications, and patient portals designed to improve patient care, operational efficiency, and data security.",
    color: "bg-red-500",
  },
  {
    icon: GraduationCap,
    title: "Education & eLearning",
    description: "Building intuitive Learning Management Systems (LMS), virtual classrooms, and educational platforms designed to empower educators and enhance learner engagement.",
    color: "bg-purple-500",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Delivering secure financial technology solutions including custom banking applications, financial management tools, and compliance-focused platforms that simplify complex processes.",
    color: "bg-green-500",
  },
  {
    icon: HandHeart,
    title: "Nonprofit Organizations",
    description: "Providing powerful donor management software, fundraising platforms, and CRM solutions designed to maximize impact, streamline operations, and optimize resources.",
    color: "bg-orange-500",
  },
  {
    icon: Users,
    title: "Human Resources & Talent Management",
    description: "Designing comprehensive HR software, talent management platforms, and workforce analytics systems to enhance employee engagement, productivity, and operational efficiency.",
    color: "bg-cyan-500",
  },
  {
    icon: Home,
    title: "Real Estate & Property Management",
    description: "Developing robust property management software, real estate CRM systems, and digital platforms tailored to simplify transactions, manage assets effectively, and improve client relationships.",
    color: "bg-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Technology & Innovation",
    description: "Partnering with technology-driven businesses to build cutting-edge AI-powered solutions, cloud applications, and scalable software systems that fuel innovation and growth.",
    color: "bg-yellow-500",
  },
];

export default function IndustriesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  usePageRevealAnimations(containerRef, {
    hero: ".hero-text-animate",
    sections: [
      { selector: ".industries-grid-animate" },
      { selector: ".get-in-touch-animate" },
    ],
  });

  return (
    <div ref={containerRef} className="bg-white mt-20">
      
      {/* ================= HERO SECTION (PREMIUM WEBFLOW STYLE) ================= */}
      <section className="relative min-h-screen flex items-center pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden rounded-[24px] mx-3 bg-gradient-to-br from-white via-slate-50 to-gray-100">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/service-hero.jpg')] bg-cover bg-center mix-blend-overlay opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/8 to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 container-premium w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Premium Typography */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8 hero-text-animate text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-50/90 border border-cyan-100/90">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">Vertical Excellence</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tighter text-gray-900 leading-[0.9]">
                 Industry <br className="hidden lg:block" />
                <span className="text-gray-400">Solutions.</span>
              </h1>
              
              <p className="leading-relaxed text-gray-600 max-w-xl font-light text-base md:text-lg opacity-95 mx-auto lg:mx-0">
                 Tailored software expertise across every vertical. From healthcare to finance, we deliver industry-specific solutions engineered for your sector's unique demands.
              </p>

              <div className="pt-4">
                <Link href="/contact">
                  <CustomButton variant="cyan" uppercase showArrow className="px-8 py-5 shadow-sm hover:shadow-md transition-shadow">
                    Get Started
                  </CustomButton>
                </Link>
              </div>
            </div>

            {/* Right Column: Premium Floating Industry Cards (Fully Responsive & Centered) */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[450px] md:h-[500px] lg:h-[580px] w-full overflow-visible flex justify-center items-center mt-8 lg:mt-0">
              {/* Central Glow Circle */}
              <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-cyan-500/25 to-blue-500/15 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              {/* Central Positioning Frame with Scale Handling */}
              <div className="relative w-full h-full max-w-[500px] flex items-center justify-center scale-75 sm:scale-90 lg:scale-100 origin-center">
                {industries.map((industry, idx) => {
                  const Icon = industry.icon;
                  const angle = (idx / industries.length) * Math.PI * 2;
                  
                  // Responsive radius based on screen width
                  const radius = 135; 
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const delay = idx * 0.1;
                  
                  return (
                    <div
                      key={idx}
                      className="absolute animate-float"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)', // Keeps cards dead center on their vector point
                        animationDelay: `${delay}s`,
                      }}
                    >
                      <div className="relative group">
                        {/* Card Glow */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Card */}
                        <div className="relative w-24 h-24 sm:w-36 sm:h-36 rounded-2xl bg-white/70 border border-white/80 backdrop-blur-md p-2 sm:p-4 flex flex-col items-center justify-center hover:border-cyan-500/70 transition-all duration-300 shadow-xl group-hover:shadow-2xl hover:bg-white/90">
                          <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl ${industry.color} flex items-center justify-center mb-1 sm:mb-2 shadow-lg group-hover:scale-110 transition-transform`}>
                            <Icon className="w-4 sm:w-6 h-4 sm:w-6 text-white" strokeWidth={1.5} />
                          </div>
                          <p className="text-[9px] sm:text-xs font-bold text-gray-900 text-center leading-tight line-clamp-2 px-1">
                            {industry.title.split(' ')[0]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

       <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-15px);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
      </section>

      {/* Industries Grid Section */}
      <section className="py-20 md:py-32 bg-white" id="industries-grid">
        <div className="container-premium industries-grid-animate">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${industry.color} flex items-center justify-center text-white flex-shrink-0`}>
                    <industry.icon size={28} strokeWidth={2.5} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       {/* CTA Section with Cards */}
      <section className="py-16 lg:h-[450px] h-auto rounded-[24px] mx-3 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/cta.jpeg')] bg-cover bg-center" />
      </div>
     <div className="absolute inset-0 opacity-100 pointer-events-none bg-gradient-to-r from-black/20 to-transparent z-[1]"></div>
        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center justify-between">
            {/* Left Content */}
            <div className="text-white col-span-2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.95] mb-6">
              Let's Build Together
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Network Handlers is committed to providing industry-specific solutions that drive measurable results. Connect with us today and discover how we can support your industry's unique needs.
              </p>
               {/* CTA Button */}
                <div className="shrink-0">
                <Link href="/contact">
                  <CustomButton variant="cyan" uppercase showArrow className="px-8 py-5 shadow-lg shadow-cyan-500/20">
                   Contact Our Experts
                  </CustomButton>
                </Link>
              </div>
            </div>

            {/* Right Cards */}
            <div className="relative flex items-center justify-center scale-75 md:scale-90 lg:scale-100 mt-8 lg:mt-0">
              {/* Black Card - Back */}
              <div className="border border-4 border-white absolute -left-12 md:left-0 top-8 rotate-[-16deg] rounded-[16px] bg-black text-white p-4 w-[200px] shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-lime-400" />
                  <div className="text-xs font-bold opacity-70">Expertise</div>
                </div>
                <div className="text-md uppercase leading-relaxed">
                  Combines Strategy, Data, and Artificial Intelligence
                </div>
              </div>

              {/* White Card - Front */}
              <div className="relative z-10 rotate-[8deg] -right-12 border border-3 border-white rounded-[16px] bg-white p-4 w-[240px] shadow-[0_30px_60px_rgba(0,0,0,0.25)] border-gray-100">
                <div className="rounded-xl bg-black text-white p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xs opacity-60 font-bold">Performance</div>
                    <svg className="w-3 h-3 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-sm">AI-Focused</div>
                </div>

                <div className="flex items-end gap-3 mb-4">
                  <div className="text-4xl text-black">49%</div>
                  <div className="mb-3 rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-lime-600">
                    +2.5%
                  </div>
                </div>

                <div className="text-xs text-gray-400 font-bold mb-4">Strategic</div>

                <div className="flex flex-wrap gap-2">
                  {["AI-Focused", "Build Fast", "Grow Faster"].map((tag) => (
                    <div key={tag} className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-black">
                      {tag}
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
