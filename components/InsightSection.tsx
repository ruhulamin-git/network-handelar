"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";

const articles = [
  {
    title: "Beyond Bugs - The Strategic Impact of Security ...",
    date: "January 15, 2026",
    author: "Network Handlers",
    image: "/images/blog/insight_ai_search.png",
    category: "AI & Search",
  },
  {
    title: "Why Custom Software Is Outperforming Off-the- ...",
    date: "April 8, 2025",
    author: "Network Handlers",
    image: "/images/blog/hero_ai_nodes.png",
    category: "Implementation",
  },
  {
    title: "What is Workflow Automation and Why is it Imp ...",
    date: "February 2, 2024",
    author: "Network Handlers",
    image: "/images/blog/insight_workflow_automation.png",
    category: "Innovation",
  },
];

export default function InsightSection() {
  return (
    <section className="relative pt-10 md:pt-14 lg:pt-20 pb-16 md:pb-24 overflow-hidden">
      <div className="container-premium">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-10 mb-12 md:mb-16">
          {/* Left Content */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />

              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-black">
                Blog and Articles
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl text-black leading-[1.1] tracking-tight">
              Latest insights and trends
            </h2>

            <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              Whether you’re optimizing today or building for tomorrow,
              we help you move faster with confidence.
            </p>
          </div>

          {/* Right Button */}
          <div className="w-full lg:w-auto flex lg:justify-end">
            <Link href="/blog" className="w-full sm:w-auto">
              <CustomButton
                variant="cyan"
                uppercase
                showArrow
                className="w-full sm:w-auto text-sm font-bold shadow-xl shadow-cyan-500/20"
              >
                View All Articles
              </CustomButton>
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <Link
              href="/blog"
              key={index}
              className="group block h-full"
            >
              <article className="h-full rounded-[28px] transition-all duration-500 hover:-translate-y-2">
                {/* Image Card */}
                <div className="relative overflow-hidden rounded-[28px] shadow-xl shadow-gray-200 mb-5 md:mb-6">
                  <div className="relative h-[240px] sm:h-[280px] md:h-[320px] lg:h-[350px]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Category */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                      <div className="px-3 py-2 sm:px-4 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                        <span className="text-[10px] sm:text-xs  text-gray-900 uppercase tracking-widest">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500 rounded-full flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl shadow-cyan-500/40">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 px-1">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                    <span className="text-cyan-600">
                      {article.date}
                    </span>

                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full hidden sm:block" />

                    <span className="text-gray-400">
                      By {article.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl  text-gray-900 leading-tight tracking-tight transition-colors duration-300 group-hover:text-cyan-500 line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}