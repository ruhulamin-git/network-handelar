"use client";

import React from "react";
import DeveloperIcon from "./icons/animated/DeveloperIcon";
import InfraIcon from "./icons/animated/InfraIcon";
import FinTechExpertIcon from "./icons/animated/FinTechExpertIcon";
import BusinessDevIcon from "./icons/animated/BusinessDevIcon";
import AffiliateIcon from "./icons/animated/AffiliateIcon";
import ExecutiveIcon from "./icons/animated/ExecutiveIcon";
import { CustomButton } from "@/components/ui/custom-button";

const expertise = [
  {
    title: "Custom Software Development",
    desc: "End-to-end engineering from concept to production-ready platforms.",
    icon: DeveloperIcon,
  },
  {
    title: "Enterprise Infrastructure",
    desc: "Robust, scalable systems integration for global organizations.",
    icon: InfraIcon,
  },
  {
    title: "Business Logic & ERP",
    desc: "Sophisticated FinTech and ERP solutions for complex workflows.",
    icon: FinTechExpertIcon,
  },
  {
    title: "Growth & Scalability",
    desc: "Strategic technical roadmaps to scale your product rapidly.",
    icon: BusinessDevIcon,
  },
  {
    title: "Network & Ecosystems",
    desc: "Seamless connectivity across diverse technical landscapes.",
    icon: AffiliateIcon,
  },
  {
    title: "Technical Consulting",
    desc: "High-level architectural oversight and clinical precision.",
    icon: ExecutiveIcon,
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container-premium">
        <div className="max-w-4xl mb-24 space-y-6 capabilities-content">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-cyan-500" />
            <span className="text-cyan-600 text-sm font-black uppercase tracking-[0.3em]">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
            Turn Your Vision into a <br />
            <span className="text-cyan-500">Scalable Product Fast</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 capabilities-cards">
          {expertise.map((item, i) => (
            <div key={i} className="capability-card group flex flex-col items-center text-center space-y-8">
              {/* Animated Icon Container */}
              <div className="relative w-48 h-48 flex items-center justify-center bg-gray-50 rounded-[40px] group-hover:bg-cyan-50 transition-colors duration-500 overflow-hidden">
                <div className="w-full h-full p-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                  <item.icon className="w-full h-full object-contain" />
                </div>
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors duration-500" />
              </div>

              <div className="space-y-4 max-w-sm">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <CustomButton 
            variant="outline" 
            uppercase 
            showArrow
            className="px-12 py-8 text-sm font-black border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
          >
            Explore All Capabilities
          </CustomButton>
        </div>
      </div>

      {/* Decorative Background Texture */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute top-1/4 -right-20 text-[30vw] font-black text-gray-900 leading-none">EXPERTISE</div>
      </div>
    </section>
  );
}
