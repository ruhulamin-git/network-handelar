"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { ServiceCategory } from "@/lib/services-data";

interface CategoryHeroProps {
  category: ServiceCategory;
}

export default function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <section className="relative flex items-center overflow-hidden rounded-[20px] mx-3 min-h-[580px] md:min-h-[620px] lg:min-h-[660px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={category.heroImage}
          alt={category.title}
          fill
          priority
          className="object-cover object-center"
        />
        {/* Grid texture overlay */}
        {/* <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        /> */}
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <div className="max-w-[640px] flex flex-col gap-4">

          {/* Eyebrow */}
          <span className="text-[11px] font-black uppercase tracking-[0.28em] text-lime-300 block">
            {category.subtitle}
          </span>

          {/* Title */}
          <h1
            className="font-bold text-white leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(34px, 5.5vw, 68px)" }}
          >
            {category.title}.
            <span
              className="text-gray-300 font-medium block mt-2"
              style={{ fontSize: "clamp(18px, 2.5vw, 38px)" }}
            >
              {category.tagline}
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-[480px] font-light">
            {category.description}
          </p>

          {/* CTA */}
          <div className="pt-1">
            <Link href="/contact">
              <CustomButton
                variant="cyan"
                uppercase
                showArrow
                className="px-7 py-4 sm:px-8 sm:py-5 text-sm shadow-lg shadow-cyan-500/20"
              >
                Get Started
              </CustomButton>
            </Link>
          </div>
        </div>

        {/* Infinite Scrolling Cards */}
        <div className="relative mt-8 sm:mt-10 h-[168px] sm:h-[180px] md:h-[200px] overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 z-20 pointer-events-none bg-gradient-to-r from-black/80 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 z-20 pointer-events-none bg-gradient-to-l from-black/80 to-transparent" />

          <div className="flex gap-3 sm:gap-4 animate-scroll-cards w-max h-full">

            {/* ── CARD SET (duplicated below for seamless loop) ── */}

            {/* Card 1 — Team image */}
            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.3)] overflow-hidden border-2 border-lime-400 flex flex-col">
              <div className="relative w-full flex-1">
                <Image
                  src="/images/about_mission_engineering.png"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-3 py-2 bg-white text-center">
                <div className="text-[11px] font-bold text-black leading-tight">{category.title} Team</div>
                <div className="text-[9px] text-gray-400 mt-0.5">Network Handlers</div>
              </div>
            </div>

            {/* Card 2 — Expertise */}
            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-black text-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-white/8">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-400 flex-shrink-0" />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Expertise</span>
              </div>
              <p className="text-[11px] leading-snug font-medium text-white/85">
                Combining enterprise strategy, clean code, and advanced technology.
              </p>
            </div>

            {/* Card 3 — Growth stats */}
            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">Growth</span>
                <span className="text-[9px] px-1.5 py-0.5 bg-lime-100 text-lime-700 font-bold rounded-md">+49%</span>
              </div>
              <div className="text-[38px] font-black text-black leading-none tracking-tight">Ops</div>
              <p className="text-[9px] text-gray-500 font-medium">Accelerated delivery models</p>
            </div>

            {/* Card 4 — Integration */}
            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 flex-shrink-0">
                  <Sparkles size={12} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">Integration</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[9px] px-2 py-1.5 bg-gray-50 rounded-md font-semibold text-gray-700">✓ Secure Pipeline</div>
                <div className="text-[9px] px-2 py-1.5 bg-gray-50 rounded-md font-semibold text-gray-700">✓ Industry Standards</div>
              </div>
            </div>

            {/* Card 5 — Scale */}
            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-slate-900 text-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-cyan-500/15">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">Scale</span>
              <div className="text-[30px] font-black text-white tracking-tight leading-none">520k+</div>
              <p className="text-[9px] text-gray-400 font-light">Data nodes connected globally</p>
            </div>

            {/* Card 6 — Uptime */}
            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-black text-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-white/8">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Uptime</span>
              </div>
              <div className="text-[34px] font-black text-cyan-400 leading-none tracking-tight">
                99.9<span className="text-base">%</span>
              </div>
              <p className="text-[9px] text-white/40 font-light">SLA guaranteed</p>
            </div>

            {/* Card 7 — Clients */}
            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-gray-100">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">Clients</span>
              <div className="text-[34px] font-black text-black leading-none tracking-tight">180+</div>
              <p className="text-[9px] text-gray-500 font-medium">Enterprise accounts served</p>
            </div>

            {/* ── DUPLICATE SET for seamless loop ── */}

            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.3)] overflow-hidden border-2 border-lime-400 flex flex-col">
              <div className="relative w-full flex-1">
                <Image
                  src="/images/about_mission_engineering.png"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-3 py-2 bg-white text-center">
                <div className="text-[11px] font-bold text-black leading-tight">{category.title} Team</div>
                <div className="text-[9px] text-gray-400 mt-0.5">Network Handlers</div>
              </div>
            </div>

            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-black text-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-white/8">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-400 flex-shrink-0" />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Expertise</span>
              </div>
              <p className="text-[11px] leading-snug font-medium text-white/85">
                Combining enterprise strategy, clean code, and advanced technology.
              </p>
            </div>

            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">Growth</span>
                <span className="text-[9px] px-1.5 py-0.5 bg-lime-100 text-lime-700 font-bold rounded-md">+49%</span>
              </div>
              <div className="text-[38px] font-black text-black leading-none tracking-tight">Ops</div>
              <p className="text-[9px] text-gray-500 font-medium">Accelerated delivery models</p>
            </div>

            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 flex-shrink-0">
                  <Sparkles size={12} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">Integration</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[9px] px-2 py-1.5 bg-gray-50 rounded-md font-semibold text-gray-700">✓ Secure Pipeline</div>
                <div className="text-[9px] px-2 py-1.5 bg-gray-50 rounded-md font-semibold text-gray-700">✓ Industry Standards</div>
              </div>
            </div>

            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-slate-900 text-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-cyan-500/15">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">Scale</span>
              <div className="text-[30px] font-black text-white tracking-tight leading-none">520k+</div>
              <p className="text-[9px] text-gray-400 font-light">Data nodes connected globally</p>
            </div>

            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-black text-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-white/8">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Uptime</span>
              </div>
              <div className="text-[34px] font-black text-cyan-400 leading-none tracking-tight">
                99.9<span className="text-base">%</span>
              </div>
              <p className="text-[9px] text-white/40 font-light">SLA guaranteed</p>
            </div>

            <div className="flex-shrink-0 w-[148px] sm:w-[158px] md:w-[170px] h-[155px] sm:h-[168px] md:h-[180px] rounded-[18px] bg-white p-4 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.3)] border border-gray-100">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">Clients</span>
              <div className="text-[34px] font-black text-black leading-none tracking-tight">180+</div>
              <p className="text-[9px] text-gray-500 font-medium">Enterprise accounts served</p>
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-cards {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-cards {
          animation: scroll-cards 28s linear infinite;
        }
        .animate-scroll-cards:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-cards {
            animation: none;
          }
        }
      `}} />
    </section>
  );
}