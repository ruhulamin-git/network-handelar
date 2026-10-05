"use client";

import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = "Let's Build Together",
  description = "Network Handlers is committed to providing industry-specific solutions that drive measurable results. Connect with us today and discover how we can support your unique needs.",
  buttonText = "Contact Our Experts",
  buttonLink = "/contact"
}: CTASectionProps) {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float-slower" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-24 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-cyan-400">{title.split(' ').slice(-1)}</span>
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            {description}
          </p>
          
          {/* Button */}
          <a href={buttonLink}>
            <CustomButton 
              variant="cyan" 
              uppercase 
              showArrow 
              className="px-12 py-7 text-base font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
            >
              {buttonText}
            </CustomButton>
          </a>
        </div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
}
