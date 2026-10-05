"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { ReactNode } from "react";

interface ServiceDetailLayoutProps {
  subtitle: string;
  title: string;
  titleHighlight: string;
  description: string;
  children: ReactNode;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
}

export default function ServiceDetailLayout({
  subtitle,
  title,
  titleHighlight,
  description,
  children,
  ctaTitle = "Ready to Get Started?",
  ctaDescription = "Contact Network Handlers today for a personalized consultation.",
  ctaButtonText = "Request Free Consultation"
}: ServiceDetailLayoutProps) {
  return (
    <>
      {/* Hero Section - Full Width & Height */}
      <section className="relative w-full min-h-screen bg-gray-900 text-white flex items-center py-20">
        {/* Content with container */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-24 w-full">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wider">Back to Services</span>
          </Link>

          <div className="max-w-4xl">
            <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-xs mb-6 block">
              {subtitle}
            </span>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
              {title} <br />
              <span className="text-cyan-400">{titleHighlight}</span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-premium">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="w-full py-20 md:py-28 bg-gray-50">
        <div className="container-premium text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight max-w-3xl mx-auto">
            {ctaTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          <CustomButton 
            variant="cyan" 
            uppercase 
            showArrow 
            className="px-10 py-6 text-base font-bold"
          >
            {ctaButtonText}
          </CustomButton>
        </div>
      </section>
    </>
  );
}
