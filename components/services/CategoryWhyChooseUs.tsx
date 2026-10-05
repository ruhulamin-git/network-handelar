"use client";

import React from "react";
import Image from "next/image";

export default function CategoryWhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="service-item">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gray-900" />
              <span className="uppercase tracking-[0.4em] text-sm">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-gray-900 tracking-tighter leading-[0.95] mb-6">
              We build solutions that create real, <span className="text-gray-600">measurable impact</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium border-l-4 border-cyan-500/10 pl-8 mb-8">
              Our approach blends strategic consulting, human-centered design, and advanced technology &mdash; giving you the clarity, tools, and confidence to thrive in the digital age.
            </p>
            <div className="flex items-center gap-3 bg-cyan-50/50 p-4 rounded-2xl w-fit border border-cyan-50">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-sm font-bold text-gray-900">+38% average growth in client outcomes</span>
            </div>
          </div>

          <div className="service-item overflow-hidden rounded-[40px] shadow-xl shadow-gray-200/50 relative min-h-[400px] w-full">
            <Image 
              src="/images/why-us.jpg" 
              alt="Team collaborating" 
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
