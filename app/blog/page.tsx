"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { featuredPosts, recentPosts } from "@/lib/blog-data";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";

export default function BlogSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const post = featuredPosts[active];

  usePageRevealAnimations(containerRef, {
    hero: ".blog-hero-reveal",
    sections: [
      {
        selector: ".blog-featured-reveal",
        y: 60,
        duration: 0.9,
        start: "top 85%",
        delayStep: 0.08,
      },
      {
        selector: ".blog-list-reveal",
        y: 60,
        duration: 0.9,
        start: "top 85%",
        delayStep: 0.08,
      },
    ],
  });

  return (
    <section ref={containerRef} className="w-full bg-white pb-14 px-4 sm:px-8 md:px-14 lg:px-20 font-sans mt-20">
      <div className="container-premium mx-auto">

        {/* ══ Header ══ */}
        <div className="blog-hero-reveal mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">
              Blog and Articles
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl  text-gray-900 tracking-tighter leading-[0.95] mb-6">
                Latest insights and trends
              </h2>
              <p className="text-gray-400 mt-3 text-sm max-w-xs leading-relaxed">
                Whether you&apos;re optimizing today or building for tomorrow we
                help you move faster with confidence.
              </p>
            </div>
            <div className="flex items-center gap-2 md:mb-2">
              {featuredPosts.map((p, i) => (
                <button
                  key={p.slug}
                  onClick={() => setActive(i)}
                  aria-label={`Select post ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    active === i ? "w-6 h-2.5 bg-black" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ══ Featured post ══ */}
        <Link href={`/blog/${post.slug}`} className="blog-featured-reveal group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center mb-20 block">
          <div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3]">
            <Image
              src="/images/blog-image.png"
              alt={post.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
              {post.category}
            </span>
            <div className="absolute bottom-5 right-5 w-11 h-11 bg-[#CCFF00] rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
              <ArrowUpRight size={18} className="text-black" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-gray-400 text-sm mb-4">{post.date}</p>
            <h3 className="text-3xl sm:text-4xl  text-black leading-snug mb-5 group-hover:text-gray-700 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">{post.summary}</p>
            <span className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white text-xs  tracking-widest uppercase px-6 py-3 rounded-full hover:bg-black transition-colors duration-200 self-start">
              Learn More
              <span className="w-7 h-7 rounded-full bg-[#CCFF00] flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </div>
        </Link>

        <div className="blog-list-reveal">
          {/* ══ Recent Published heading ══ */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-xs tracking-[0.2em] uppercase  text-black">Published</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <h2 className="text-3xl sm:text-4xl  text-black leading-tight">Recent published</h2>
                <p className="text-gray-400 mt-2 text-sm max-w-sm leading-relaxed">
                  Whether you&apos;re optimizing today or building for tomorrow we help you move faster with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* ══ Articles grid ══ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group cursor-pointer block">
              <div className="relative h-[260px] rounded-[28px] overflow-hidden mb-6 shadow-lg shadow-gray-200 transition-transform duration-500 group-hover:-translate-y-2">
                <Image
                  src={article.image}
                  alt={article.title}
          fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-5 left-5 px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow">
                  <span className="text-[10px]  text-gray-900 uppercase tracking-widest">{article.category}</span>
                </div>
                <div className="absolute bottom-5 right-5 w-11 h-11 bg-[#CCFF00] rounded-full flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <ArrowUpRight size={20} className="text-black" />
                </div>
              </div>
              <div className="px-1 space-y-3">
                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest flex-wrap">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg text-gray-900 leading-snug tracking-tight group-hover:text-gray-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
       
              </div>
            </Link>
          ))}
          </div>
        </div>

      </div>
    </section>
  );
}