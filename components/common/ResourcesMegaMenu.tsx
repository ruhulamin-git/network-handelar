"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { featuredPosts, featuredCaseStudies, featuredPressReleases } from "@/lib/blog-data";

interface ResourcesMegaMenuProps {
  onNavigate?: () => void;
}

type TabType = "blog" | "case-studies" | "press-releases";

export default function ResourcesMegaMenu({ onNavigate }: ResourcesMegaMenuProps) {
  const [activeTab, setActiveTab] = useState<TabType>("blog");

  const tabInfo = {
    "blog": {
      title: "Blog",
      tagline: "Latest insights, expert guides, and tech trends from our engineering team.",
      exploreHref: "/blog",
      items: featuredPosts
    },
    "case-studies": {
      title: "Case Studies",
      tagline: "Transforming projects into excellence-driven, results-oriented success stories.",
      exploreHref: "/case-study",
      items: featuredCaseStudies
    },
    "press-releases": {
      title: "Press Releases",
      tagline: "Stay updated with our latest announcements, official statements, and media releases.",
      exploreHref: "/press-release",
      items: featuredPressReleases
    }
  };

  const activeInfo = tabInfo[activeTab];

  return (
    <div
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      className="w-[95%] max-w-6xl mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] backdrop-blur-xl flex text-slate-800"
      style={{ animation: "resourcesMenuIn 0.28s cubic-bezier(0.16,1,0.3,1)" }}
    >
      {/* ── Col 1: Sidebar Tabs ────────────────────────────────────────── */}
      <div className="w-[24%] shrink-0 border-r border-slate-100 bg-slate-50/50 p-4 flex flex-col gap-1">
        {/* Blog link */}
        <Link
          href="/blog"
          onMouseEnter={() => setActiveTab("blog")}
          onClick={onNavigate}
          className={`w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-200 group rounded-xl cursor-pointer ${
            activeTab === "blog"
              ? "bg-slate-900 text-white font-extrabold shadow-md shadow-slate-900/10"
              : "text-slate-650 hover:text-slate-900 hover:bg-slate-100/60"
          }`}
        >
          <span className="text-[13px] font-bold tracking-wide">Blog</span>
          <ChevronRight
            size={14}
            className={`shrink-0 transition-all duration-200 ${
              activeTab === "blog"
                ? "text-[#ccff00] translate-x-1"
                : "text-slate-400 group-hover:text-slate-650 group-hover:translate-x-0.5"
            }`}
          />
        </Link>

        {/* Case Studies Link */}
        <Link
          href="/case-study"
          onMouseEnter={() => setActiveTab("case-studies")}
          onClick={onNavigate}
          className={`w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-200 group rounded-xl cursor-pointer ${
            activeTab === "case-studies"
              ? "bg-slate-900 text-white font-extrabold shadow-md shadow-slate-900/10"
              : "text-slate-650 hover:text-slate-900 hover:bg-slate-100/60"
          }`}
        >
          <span className="text-[13px] font-bold tracking-wide">Case Studies</span>
          <ChevronRight
            size={14}
            className={`shrink-0 transition-all duration-200 ${
              activeTab === "case-studies"
                ? "text-[#ccff00] translate-x-1"
                : "text-slate-400 group-hover:text-slate-650 group-hover:translate-x-0.5"
            }`}
          />
        </Link>

        {/* Press Releases Link */}
        <Link
          href="/press-release"
          onMouseEnter={() => setActiveTab("press-releases")}
          onClick={onNavigate}
          className={`w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-200 group rounded-xl cursor-pointer ${
            activeTab === "press-releases"
              ? "bg-slate-900 text-white font-extrabold shadow-md shadow-slate-900/10"
              : "text-slate-650 hover:text-slate-900 hover:bg-slate-100/60"
          }`}
        >
          <span className="text-[13px] font-bold tracking-wide">Press Releases</span>
          <ChevronRight
            size={14}
            className={`shrink-0 transition-all duration-200 ${
              activeTab === "press-releases"
                ? "text-[#ccff00] translate-x-1"
                : "text-slate-400 group-hover:text-slate-650 group-hover:translate-x-0.5"
            }`}
          />
        </Link>
      </div>

      {/* ── Col 2: Active Tab Content Grid ───────────────────────────────── */}
      <div className="flex-1 flex flex-col p-6 min-w-0 justify-between">
        <div className="space-y-6">
          {/* Tab Information Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="min-w-0 flex-1 pr-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">
                Resources
              </span>
              <h4 className="font-extrabold text-slate-900 text-lg leading-tight truncate">
                {activeInfo.title}
              </h4>
              <p className="text-[12.5px] text-slate-500 mt-1 leading-relaxed line-clamp-1 font-medium">
                {activeInfo.tagline}
              </p>
            </div>

            <Link
              href={activeInfo.exploreHref}
              onClick={onNavigate}
              className="relative shrink-0 rounded-xl bg-slate-900 px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-white hover:bg-slate-800 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300 flex items-center gap-1 group/btn cursor-pointer"
            >
              <span>Explore All</span>
              <ArrowUpRight size={12} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-4 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
              Latest Updates
            </p>

            <div className="grid grid-cols-3 gap-5">
              {activeInfo.items.map((item: any) => {
                const targetUrl = 
                  activeTab === "case-studies" 
                    ? `/case-study/${item.slug}` 
                    : activeTab === "press-releases" 
                      ? `/press-release/${item.slug}` 
                      : `/blog/${item.slug}`;

                return (
                  <Link
                    key={item.slug}
                    href={targetUrl}
                    onClick={onNavigate}
                    className="group/item flex flex-col rounded-2xl border border-slate-100 bg-slate-50/30 overflow-hidden hover:border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 cursor-pointer"
                  >
                    {/* Card Image */}
                    <div className="relative h-28 w-full bg-slate-100 overflow-hidden">
                      {typeof item.image === "string" ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                        />
                      ) : (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover/item:scale-105"
                        />
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                      <div className="space-y-1.5">
                        <span className="text-[9px] font-black tracking-widest text-cyan-600 uppercase">
                          {item.category}
                        </span>
                        <h5 className="text-[12.5px] font-extrabold text-slate-800 leading-snug group-hover/item:text-cyan-600 transition-colors line-clamp-2">
                          {item.title}
                        </h5>
                        <p className="text-[10.5px] text-slate-500 leading-normal line-clamp-2">
                          {item.summary}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="flex items-center justify-between border-t border-slate-100/60 pt-2 text-[9.5px] font-semibold text-slate-400">
                        <span>{item.date}</span>
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframe */}
      <style jsx global>{`
        @keyframes resourcesMenuIn {
          from { opacity: 0; transform: translateY(-10px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>
    </div>
  );
}
