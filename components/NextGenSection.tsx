"use client";

import Image from "next/image";
import { Laptop, Cpu, Globe, ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";

const features = [
  {
    title: "AI-Driven Architecture",
    desc: "Intelligent systems that learn and adapt to your business needs.",
    icon: Cpu,
  },
  {
    title: "Cross-Platform Unity",
    desc: "Seamless experiences across web, mobile, and enterprise environments.",
    icon: Globe,
  },
  {
    title: "Modern UI/UX Precision",
    desc: "Clinical-grade interfaces designed for maximum user efficiency.",
    icon: Laptop,
  },
];

export default function NextGenSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container-premium relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <span className="inline-block px-4 py-1.5 bg-white text-cyan-600 text-sm font-black rounded-full uppercase tracking-[0.3em] shadow-sm border border-gray-100">
            Our Vision
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">
            Next-Generation <br />
            <span className="text-cyan-500">Applications</span>
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto pt-4">
            At Network Handlers, we engineer the future of software. We empower organizations 
            to operate smarter and perform with greater simplicity through AI-powered platforms.
          </p>
        </div>

        {/* Centerpiece Visual */}
        <div className="relative max-w-6xl mx-auto mb-24 nextgen-visual-animate">
          <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white bg-white">
            <Image
              src="/images/nextgen-app.png"
              alt="Next-Gen Application Interface"
              width={1600}
              height={900}
              className="w-full object-cover"
            />
            {/* Subtle Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative Glows */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-200 rounded-full blur-[100px] opacity-30 z-0" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-200 rounded-full blur-[100px] opacity-30 z-0" />
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto nextgen-content-animate">
          {features.map((feature, i) => (
            <div key={i} className="group space-y-6 p-8 rounded-[32px] bg-white hover:bg-gray-900 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-gray-900">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {feature.desc}
                </p>
              </div>
              <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 text-cyan-500 font-bold text-xs uppercase tracking-widest">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center nextgen-content-animate">
          <CustomButton 
            variant="cyan" 
            uppercase 
            showArrow
            className="px-12 py-8 text-sm font-black shadow-xl shadow-cyan-500/20"
          >
            Find Out What We Offer
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
