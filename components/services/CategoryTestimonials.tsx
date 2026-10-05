"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    quote: "Network Handlers transformed our legacy systems into a modern, scalable platform. Their expertise in software modernization is unmatched.",
    img: "/images/t1.jpg"
  },
  {
    name: "Michael Chen",
    role: "CEO, DataFlow Inc",
    quote: "The AI solutions they built for us have revolutionized our operations. We've seen a 40% increase in efficiency within the first quarter.",
    img: "/images/t2.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "VP Operations, GlobalTech",
    quote: "Their cybersecurity implementation gave us peace of mind. Professional, thorough, and always available when we need them.",
    img: "/images/t3.jpg"
  },
  {
    name: "David Park",
    role: "Director IT, Enterprise Solutions",
    quote: "The CRM integration they delivered seamlessly connected all our systems. Data flows effortlessly across our entire organization now.",
    img: "/images/t4.jpg"
  }
];

export default function CategoryTestimonials() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container-premium">
        <div className="service-item">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-gray-900" />
            <span className="uppercase tracking-[0.4em] text-sm">Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-6xl text-gray-900 tracking-tighter leading-[0.95] mb-6 font-bold">
            What they say <br />
            <span className="text-gray-600">about us?</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-2xl border-l-4 border-cyan-500/10 pl-8">
            Here&apos;s what they shared about their experience working with our team.
          </p>
        </div>
      </div>

      <div className="mt-20 overflow-hidden">
        <div
          className="flex items-start gap-8 px-6 animate-scroll"
          style={{
            animation: "scroll 40s linear infinite",
          }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => {
            const imageHeights = [
              "h-[280px]",
              "h-[350px]",
              "h-[280px]",
              "h-[350px]",
            ];

            return (
              <article
                key={i}
                className="w-[350px] shrink-0 rounded-[28px] bg-[#ececec] p-3 border border-gray-200"
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-[22px] ${imageHeights[i % imageHeights.length]}`}>
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="350px"
                  />
                </div>

                {/* Content */}
                <div className="bg-[#f8f8f8] rounded-[22px] p-6 mt-3">
                  <Quote className="h-8 w-8 text-black mb-4 fill-black" />
                  <p className="text-[15px] leading-[1.8] text-gray-900 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="text-sm text-gray-700 text-right">
                    - {t.name} {t.role}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          width: max-content;
        }
      `}} />
    </section>
  );
}
