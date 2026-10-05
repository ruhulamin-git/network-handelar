"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";

export function TeamsHero() {
  return (
    <div className="bg-white mt-3 relative">
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-16 overflow-hidden rounded-[24px] mx-3 px-4">
        {/* Root page background image */}
        <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center" />
        
        {/* Overlay gradient to keep text readable */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* Text Content */}
        <div className="relative z-10 max-w-3xl mx-auto container-premium mt-5 space-y-6">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight font-medium teams-hero-content">
            The minds behind
          </h1>
          
          <div className="mt-2 flex items-center justify-center w-full teams-hero-content">
            <h2 className="text-4xl leading-tight tracking-tight font-bold text-cyan-400 sm:text-5xl md:text-6xl lg:text-7xl">
              Network Handlers.
            </h2>
          </div>

          <p className="mt-5 text-white/80 text-sm sm:text-base max-w-lg mx-auto leading-relaxed teams-hero-content">
            Every service we deliver is led by specialists who live and breathe their domain. Meet the people powering our five core practices and driving digital excellence.
          </p>

          {/* Action buttons following root page layout */}
          <div className="flex items-center justify-center gap-4 pt-6 flex-wrap teams-hero-content">
            <a
              href="#showcase"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full cursor-pointer border-2 border-white/50 px-7 py-3 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              Discover Our Specialists
            </a>
            <Link href="/contact">
              <CustomButton
                variant="cyan"
                uppercase
                showArrow
                className="px-8 shadow-lg shadow-cyan-500/20"
              >
                Work With Us
              </CustomButton>
            </Link>
          </div>

          {/* Trust Badge matching root page */}
          <div className="pt-8 text-center teams-hero-content">
            <p className="text-white/90 text-sm">Rated 4.9/5 by 4,900+ clients</p>
            <div className="mt-2 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[oklch(0.85_0.18_85)] text-[oklch(0.85_0.18_85)]" />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
