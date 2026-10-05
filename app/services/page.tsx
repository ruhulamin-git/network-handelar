"use client";

import { useState, useRef } from "react";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";
import Link from "next/link";

import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Network, 
  Zap, 
  Database,
  Quote,
  Sparkles
} from "lucide-react";

// Modular Components
import ServiceDetailModal from "@/components/services/ServiceDetailModal";
import { CustomButton } from "@/components/ui/custom-button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    quote: "Network Handlers transformed our legacy systems into a modern, scalable platform. Their expertise in software modernization is unmatched.",
    img: "/images/t1.jpg"
  },
  {
    name: "Michael Chen",
    role: "CEO, DataFlow Inc",
    quote: "The AI solutions they built for us have revolutionized our operations. We've seen a 40% increase in efficiency within the first quarter.",
    img: "/images/t2.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "VP Operations, GlobalTech",
    quote: "Their cybersecurity implementation gave us peace of mind. Professional, thorough, and always available when we need them.",
    img: "/images/t3.jpg"
  },
  {
    name: "David Park",
    role: "Director IT, Enterprise Solutions",
    quote: "The CRM integration they delivered seamlessly connected all our systems. Data flows effortlessly across our entire organization now.",
    img: "/images/t4.jpg"
  }
];

const services = [
  {
    id: "01",
    title: "Custom Software Development",
    subtitle: "Tailored Solutions",
    desc: "Build software precisely aligned with your business processes to enhance productivity and streamline workflows.",
    icon: Code2,
    image: "/images/hero_ai_nodes.png",
    features: ["Business Process Automation", "Workflow Optimization", "Custom Applications"],
    route: "/services/custom-software-development",
    detailedContent: {
      overview: "Our custom software development services are designed to create solutions that perfectly align with your unique business requirements. We work closely with you to understand your processes and build software that enhances productivity.",
      benefits: [
        "Tailored to your specific business needs",
        "Scalable architecture for future growth",
        "Seamless integration with existing systems",
        "Enhanced operational efficiency",
        "Reduced manual processes and errors"
      ],
      process: [
        "Requirements Analysis & Planning",
        "UI/UX Design & Prototyping",
        "Agile Development & Testing",
        "Deployment & Training",
        "Ongoing Support & Maintenance"
      ]
    }
  },
  {
    id: "02",
    title: "Legacy Software Modernization",
    subtitle: "System Transformation",
    desc: "Transform outdated systems into powerful, modern solutions that drive efficiency and innovation.",
    icon: Zap,
    image: "/images/about_mission_engineering.png",
    features: ["System Migration", "Technology Upgrade", "Performance Enhancement"],
    route: "/services/legacy-software-modernization",
    detailedContent: {
      overview: "Breathe new life into your legacy systems with our modernization services. We help you transition from outdated technology to modern, efficient platforms without disrupting your business operations.",
      benefits: [
        "Improved system performance and reliability",
        "Enhanced security and compliance",
        "Better user experience and interface",
        "Reduced maintenance costs",
        "Cloud-ready architecture"
      ],
      process: [
        "Legacy System Assessment",
        "Modernization Strategy Development",
        "Phased Migration Planning",
        "Implementation & Testing",
        "Knowledge Transfer & Support"
      ]
    }
  },
  {
    id: "03",
    title: "CRM & ERP Integrations",
    subtitle: "Unified Systems",
    desc: "Unify your customer relationship management (CRM) and enterprise resource planning (ERP) systems for seamless data flow and operational efficiency.",
    icon: Database,
    image: "/images/about_precision_tech.png",
    features: ["Data Integration", "Process Automation", "System Synchronization"],
    route: "/services/crm-erp-integrations",
    detailedContent: {
      overview: "Connect your business systems for a unified view of your operations. Our integration services ensure seamless data flow between CRM, ERP, and other critical business applications.",
      benefits: [
        "Real-time data synchronization",
        "Eliminated data silos",
        "Improved decision-making with unified insights",
        "Automated workflows across systems",
        "Enhanced customer experience"
      ],
      process: [
        "System Analysis & Mapping",
        "Integration Architecture Design",
        "API Development & Configuration",
        "Testing & Validation",
        "Monitoring & Optimization"
      ]
    }
  }
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  usePageRevealAnimations(containerRef, {
    hero: ".services-hero-content",
    sections: [
      {
        selector: ".service-item",
        y: 50,
        duration: 1,
        start: "top 80%",
        delayStep: 0.08,
      },
    ],
  });

  return (
    <div ref={containerRef} className="bg-white mt-20">
      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
      
   
     <section className="relative flex items-center pt-20 md:pt-32 overflow-hidden rounded-[24px] mx-3">
        <div className="absolute inset-0 bg-[url('/images/service-hero.jpg')] bg-cover bg-center" />
       
        <div className="relative z-10 container-premium w-full">
          <div className="grid cols items-center">
           
            <div className="space-y-8">
              <div className="services-hero-content space-y-4">
                <h2 className="text-5xl md:text-7xl tracking-tighter text-white">
                  Smarter strategy. <br />
                  <span className="text-gray-200">Powered by AI.</span>
                </h2>
                
                <p className="leading-relaxed text-gray-100 max-w-xl">
                  From strategy to implementation, we create solutions that deliver measurable impact.
                </p>

                {/* CTA Button */}
                <div className="pt-2">
                  <Link href="/contact">
                     <CustomButton variant="cyan" uppercase showArrow className="px-8 py-5 shadow-lg shadow-cyan-500/20">
                         Get Started
                     </CustomButton>
                  </Link>
                </div>
              </div>

              {/* Infinite Scrolling Cards Area - Optimized Height */}
              <div className="relative h-[220px] mt-10 overflow-visible">
                <div className="flex gap-4 animate-scroll-cards">
                  
                  {/* Card 1 - Person (Sleek Profile) */}
                  <div className="flex-shrink-0 w-[170px] h-[180px] rounded-[20px] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.25)] overflow-hidden border-2 border-lime-400">
                    <img src="/images/about_mission_engineering.png" alt="Team member" className="w-full h-[120px] object-cover" />
                    <div className="p-3 bg-white text-center">
                      <div className="text-xs font-bold text-black">AI Engineering Team</div>
                      <div className="text-[10px] text-gray-400">Network Handlers</div>
                    </div>
                  </div>

                  {/* Card 2 - Black Expertise (Minimalist) */}
                  <div className="flex-shrink-0 w-[170px] h-[180px] rounded-[20px] bg-black text-white p-4 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                      <div className="text-[10px] font-bold uppercase tracking-wider opacity-60">Expertise</div>
                    </div>
                    <div className="text-xs leading-snug font-medium opacity-90">
                      Combining strategy, clean data, and intelligence.
                    </div>
                  </div>

                  {/* Card 3 - Performance Stats */}
                  <div className="flex-shrink-0 w-[170px] h-[180px] rounded-[20px] bg-white p-4 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Growth</span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-lime-100 text-lime-700 font-bold rounded-md">+49%</span>
                    </div>
                    <div className="text-4xl font-black text-black leading-none">AI Ops</div>
                    <div className="text-[10px] text-gray-500 font-medium">Accelerated delivery models</div>
                  </div>

                  {/* Card 4 - White Workflow Status */}
                  <div className="flex-shrink-0 w-[170px] h-[180px] rounded-[20px] bg-white p-4 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                        <Sparkles size={12} />
                      </div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase">Integration</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] px-2 py-1 bg-gray-50 rounded-md font-medium text-gray-700">✓ Secure Pipeline</div>
                      <div className="text-[10px] px-2 py-1 bg-gray-50 rounded-md font-medium text-gray-700">✓ Unified CRM/ERP</div>
                    </div>
                  </div>

                  {/* Card 5 - High Impact Metrics */}
                  <div className="flex-shrink-0 w-[170px] h-[180px] rounded-[20px] bg-slate-900 text-white p-4 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                    <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Scale</div>
                    <div className="text-3xl font-black tracking-tight text-white">520k+</div>
                    <div className="text-[10px] text-gray-400 font-light">Data nodes connected globally</div>
                  </div>

                  {/* ================= DUPLICATE SET FOR LOOP ================= */}
                  <div className="flex-shrink-0 w-[170px] h-[180px] rounded-[20px] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.25)] overflow-hidden border-2 border-lime-400">
                    <img src="/images/about_mission_engineering.png" alt="Team member" className="w-full h-[120px] object-cover" />
                    <div className="p-3 bg-white text-center">
                      <div className="text-xs font-bold text-black">AI Engineering Team</div>
                      <div className="text-[10px] text-gray-400">Network Handlers</div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-[170px] h-[180px] rounded-[20px] bg-black text-white p-4 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                      <div className="text-[10px] font-bold uppercase tracking-wider opacity-60">Expertise</div>
                    </div>
                    <div className="text-xs leading-snug font-medium opacity-90">
                      Combining strategy, clean data, and intelligence.
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-[170px] h-[180px] rounded-[20px] bg-white p-4 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Growth</span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-lime-100 text-lime-700 font-bold rounded-md">+49%</span>
                    </div>
                    <div className="text-4xl font-black text-black leading-none">AI Ops</div>
                    <div className="text-[10px] text-gray-500 font-medium">Accelerated delivery models</div>
                  </div>

                  <div className="flex-shrink-0 w-[170px] h-[180px] rounded-[20px] bg-white p-4 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                        <Sparkles size={12} />
                      </div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase">Integration</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] px-2 py-1 bg-gray-50 rounded-md font-medium text-gray-700">✓ Secure Pipeline</div>
                      <div className="text-[10px] px-2 py-1 bg-gray-50 rounded-md font-medium text-gray-700">✓ Unified CRM/ERP</div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-[170px] h-[180px] rounded-[20px] bg-slate-900 text-white p-4 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                    <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Scale</div>
                    <div className="text-3xl font-black tracking-tight text-white">520k+</div>
                    <div className="text-[10px] text-gray-400 font-light">Data nodes connected globally</div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-cards {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-cards {
            animation: scroll-cards 25s linear infinite;
            width: max-content;
          }
        `}</style>
      </section>

      {/* Services Showcase Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-premium">
          {/* Heading */}
          <div className="service-item mx-auto max-w-4xl text-center mb-20">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="w-12 h-0.5 bg-gray-900" />
              <span className="uppercase tracking-[0.4em] text-sm">Services</span>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-6xl  text-gray-900 tracking-tighter leading-[0.95] mb-6">
              Comprehensive consulting and intelligent innovation
            </h2>
            <p className="text-gray-500  leading-relaxed font-medium max-w-2xl mx-auto">
              Whether you're optimizing today or building for tomorrow, we help you move faster with confidence.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-3 bg-[#ececec] p-3 rounded-[26px]">
            {services.map((s, i) => (
              <article
                key={s.title}
                className={` service-item group relative overflow-hidden rounded-[22px] border border-gray-200 bg-white p-8 ${
                  i === 0 ? "md:row-span-2" : ""
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300">
                  <Sparkles className="h-5 w-5 text-black" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8 ">
                  <h3 className="text-2xl md:text-4xl  tracking-tight text-black">
                    {s.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-sm">
                    {s.desc}
                  </p>

                  <Link href={s.route}>
                    <button className="mt-6 rounded-md bg-gray-200 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-black hover:text-white">
                      Learn More
                    </button>
                  </Link>
                </div>

                {/* VISUALS */}
                {i === 0 && (
                  <div className="lg:flex relative mt-12 items-end justify-center">
                    {/* Back Black Card */}
                    <div className="absolute left-8 bottom-12 rotate-[-8deg] rounded-[20px] bg-black text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] p-4 w-[140px]">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="text-[10px] font-bold opacity-70">Performance</div>
                        <svg className="w-3 h-3 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-4xl font-black mb-2">50+</div>
                      <div className="text-[9px] opacity-50">Monthly expense</div>
                    </div>

                    {/* Main White Card */}
                    <div className="relative z-10 w-[220px] rounded-[22px] bg-white p-4 border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-[9px] text-gray-500 font-bold">Monthly expense</div>
                        <div className="text-[9px] text-gray-400">2026</div>
                      </div>

                      <div className="flex items-end gap-2 mb-3">
                        <div className="text-3xl font-black text-black">$4900</div>
                        <div className="pb-1 text-sm text-gray-300 line-through">$10,000</div>
                      </div>

                      <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden mb-3">
                        <div className="h-full w-[58%] rounded-full bg-cyan-400" />
                      </div>

                      <div className="space-y-1.5">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-black" />
                              <div>
                                <div className="text-[10px] font-bold text-black">vit premium</div>
                                <div className="text-[8px] text-gray-400">Nov 14, 2025</div>
                              </div>
                            </div>
                            <div className="text-[10px] font-bold text-gray-700">$120</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {i === 1 && (
                  <div className="relative mt-8 lg:absolute lg:bottom-8 lg:right-8 flex justify-center lg:block scale-75 lg:scale-100">
                    {/* Black Float Card */}
                    <div className="hidden lg:block absolute -left-8 top-0 rotate-[-8deg] rounded-[18px] bg-black text-white p-3 w-[120px] shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                        <div className="text-[9px] font-bold opacity-70">Performance</div>
                      </div>
                      <div className="text-[10px] leading-snug font-medium">
                        Legacy System Transformation
                      </div>
                    </div>

                    {/* White Analytics Card */}
                    <div className="relative z-10 rotate-0 lg:rotate-[6deg] rounded-[20px] bg-white p-4 w-[160px] shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-gray-200">
                      <div className="text-[11px] leading-tight font-black text-black mb-1">
                        Modernization Success Rate
                      </div>

                      <div className="mt-4 flex items-end gap-1.5 h-[60px]">
                        <div className="w-3.5 h-7 bg-gray-100 rounded-full" />
                        <div className="w-3.5 h-10 bg-gray-100 rounded-full" />
                        <div className="w-3.5 h-12 bg-gray-100 rounded-full" />
                        <div className="w-3.5 h-14 bg-gray-100 rounded-full" />
                        <div className="w-3.5 h-9 bg-cyan-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                )}

                {i === 2 && (
                   <div className="relative mt-8 lg:absolute lg:bottom-8 lg:right-8 flex justify-center lg:block scale-75 lg:scale-100">
                    {/* Black Float Card */}
                    <div className="hidden lg:block absolute -left-8 top-0 rotate-[-8deg] rounded-[18px] bg-black text-white p-3 w-[120px] shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                        <div className="text-[9px] font-bold opacity-70">Expertise</div>
                      </div>
                      <div className="text-[10px] leading-snug font-medium">
                        that Combines Strategy and Artificial Intelligence
                      </div>
                    </div>

                    {/* White Analytics Card */}
                    <div className="relative z-10 rotate-0 lg:rotate-[6deg] rounded-[20px] bg-white p-4 w-[160px] shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-gray-200">
                      <div className="text-[11px] leading-tight font-black text-black mb-1">
                        Intelligence in Every Decision
                      </div>

                      <div className="mt-4 flex items-end gap-1.5 h-[60px]">
                        <div className="w-3.5 h-7 bg-gray-100 rounded-full" />
                        <div className="w-3.5 h-10 bg-gray-100 rounded-full" />
                        <div className="w-3.5 h-12 bg-gray-100 rounded-full" />
                        <div className="w-3.5 h-14 bg-gray-100 rounded-full" />
                        <div className="w-3.5 h-9 bg-cyan-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Why Us Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="service-item">
              <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-0.5 bg-gray-900" />
              <span className="uppercase tracking-[0.4em] text-sm">Why Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl  text-gray-900 tracking-tighter leading-[0.95] mb-6">
                We build solutions that create real, <span className="text-gray-600">measurable impact</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium border-l-4 border-cyan-500/10 pl-8 mb-8">
                Our approach blends strategic consulting, human-centered design, and advanced AI — giving you the clarity, tools, and confidence to thrive in the age of intelligence.
              </p>
              <div className="flex items-center gap-3 bg-cyan-50 p-4 rounded-2xl w-fit">
                <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-gray-900">+38% average growth in client outcomes</span>
              </div>
            </div>

            <div className="service-item overflow-hidden rounded-[40px] shadow-xl shadow-gray-200/50">
              <img 
                src="/images/why-us.jpg" 
                alt="Team collaborating" 
                className="h-full w-full object-cover" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container-premium">
          <div className="service-item">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gray-900" />
              <span className="uppercase tracking-[0.4em] text-sm">Testimonials</span>
            </div>

            <h2 className="text-4xl md:text-6xl  text-gray-900 text-gray-900 tracking-tighter leading-[0.95] mb-6">
              What they say <br />
              <span className="text-gray-600">about us?</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-2xl border-l-4 border-cyan-500/10 pl-8">
              Here's what they shared about their experience working with our team.
            </p>
          </div>
        </div>

        <div className="mt-20 overflow-hidden">
          <div
            className="flex items-start gap-8 px-6 animate-scroll"
            style={{
              animation: "scroll 40s linear infinite",
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => {
              // Different image heights like reference design
              const imageHeights = [
                "h-[280px]",
                "h-[350px]",
                "h-[280px]",
                "h-[350px]",
              ];

              // Different card vertical positions
              const offsets = [
                "mt-0"
              ];

              return (
                <article
                  key={i}
                  className={`w-[350px] shrink-0 rounded-[28px] bg-[#ececec] p-3 border border-gray-200 ${offsets[i % offsets.length]}`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden rounded-[22px] ${imageHeights[i % imageHeights.length]}`}
                  >
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="bg-[#f8f8f8] rounded-[22px] p-6 mt-3">
                    <Quote className="h-8 w-8 text-black mb-4 fill-black" />

                    <p className="text-[15px] leading-[1.8] text-gray-900 mb-6">
                      "{t.quote}"
                    </p>

                    <div className="text-sm text-gray-700 text-right">
                      - {t.name} {t.role}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            width: max-content;
          }
        `}</style>
      </section>

      {/* CTA Section with Cards */}
      <section className="py-16 lg:h-[450px] h-auto rounded-[24px] mx-3 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/cta.jpeg')]  bg-cover bg-center" />
      </div>
     <div className="absolute inset-0 opacity-100 pointer-events-none bg-gradient-to-r from-black/20 to-transparent z-[1]"></div>

        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center flex justify-between">
            {/* Left Content */}
            <div className="text-white col-span-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.95] mb-6">
                We combine human insight with artificial intelligence
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8">
                Our consulting team bridges strategic thinking and advanced AI technologies to help companies streamline processes, improve decision-making, and create intelligent digital experiences.
              </p>
               {/* CTA Button */}
                 <div className="shrink-0">
                    <Link href="/contact">
                       <CustomButton variant="cyan" uppercase showArrow className="px-8 py-5 shadow-lg shadow-cyan-500/20">
                           Get Started
                       </CustomButton>
                    </Link>
                 </div>
            </div>

            {/* Right Cards */}
            <div className="relative flex items-center justify-center  scale-75 md:scale-90 lg:scale-100">
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
              <div className="relative z-10 rotate-[8deg] -right-12 border border-3 border-white rounded-[16px] bg-white p-4 w-[240px] shadow-[0_30px_60px_rgba(0,0,0,0.25)] border border-gray-100">
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
