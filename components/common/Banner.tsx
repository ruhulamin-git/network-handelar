import React from 'react';
import { CustomButton } from '../ui/custom-button';
import Link from 'next/link';

const Banner = () => {
    return (
    <section className="py-24 lg:h-[450px] h-auto rounded-[24px] mx-3 relative overflow-hidden">
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
    );
};

export default Banner;