"use client";

import { CustomButton } from "@/components/ui/custom-button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

interface GetInTouchSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function GetInTouchSection({
  title = "Ready to Transform Your Digital Landscape?",
  description = "Partner with Network Handlers for clinical-grade engineering and innovative solutions tailored to your organization's unique challenges.",
  buttonText = "Get In Touch",
  buttonLink = "/contact"
}: GetInTouchSectionProps) {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white border-t border-gray-100">
      {/* Background Ornaments */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="container-premium relative z-10">

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-cyan-500" />
                <span className="text-cyan-600 font-black uppercase tracking-[0.4em] text-xs">Connect With Us</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.95]">
                {title}
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                {description}
              </p>

              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-gray-900 font-bold">contact@networkhandlers.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                    <p className="text-gray-900 font-bold">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - CTA Box */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 rounded-[40px] rotate-3 opacity-10 blur-2xl" />
              <div className="relative bg-white p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-2xl shadow-gray-200/50 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-cyan-500 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl shadow-cyan-500/20">
                  <ArrowRight size={40} strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1]">
                  Let's Start Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Next Project</span>
                </h3>

                <p className="text-gray-500 mb-10 font-medium leading-relaxed">
                  Schedule a consultation with our technology experts to discuss your requirements.
                </p>
                <Link href={buttonLink} className="w-full">
                  <button className="relative w-full py-7 bg-white border-2 border-gray-900 rounded-[2rem] group overflow-hidden transition-all duration-500 shadow-2xl shadow-transparent hover:shadow-cyan-500/20">
                    {/* Liquid Fill Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-gray-900 rounded-full group-hover:w-[150%] group-hover:h-[500%] transition-all duration-700 ease-in-out" />
                    
                    <div className="relative z-10 flex items-center justify-center gap-6">
                      <span className="text-lg font-black tracking-widest text-gray-900 group-hover:text-white transition-colors duration-500">
                        {buttonText}
                      </span>
                      <div className="flex items-center mx-1 justify-center w-12 h-12 rounded-full bg-cyan-500 text-white group-hover:bg-white group-hover:text-cyan-500 transition-all duration-500 transform group-hover:translate-x-3 group-hover:scale-110">
                        <ArrowRight size={24} strokeWidth={3} />
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

