"use client";

import { Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Johnson", role: "CTO, TechCorp", quote: "Network Handlers transformed our legacy systems into a modern, scalable platform. Their engineering team is unmatched.", img: "/images/t1.jpg" },
  { name: "Michael Chen", role: "CEO, DataFlow Inc", quote: "The AI solutions team built for us have revolutionized our operations. We've seen a 40% increase in efficiency.", img: "/images/t2.jpg" },
  { name: "Emily Rodriguez", role: "VP Operations, GlobalTech", quote: "Their cybersecurity implementation gave us peace of mind. Professional, thorough, and always available.", img: "/images/t3.jpg" },
  { name: "David Park", role: "Director IT, Enterprise Solutions", quote: "The IoT platform they delivered seamlessly connected all our devices. Data flows effortlessly now.", img: "/images/t4.jpg" },
];

export function TeamTestimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ddd5c8] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ddd5c8] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="team-item max-w-4xl mx-auto text-center space-y-4 mb-16">
          {/* Top Tagline matching landing page */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">
              Client Feedback
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight leading-[1.1]">
            What they say <br />
            <span className="text-slate-800">about our team.</span>
          </h2>

          <p className="text-[#5c5449] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium pl-6 border-l-2 border-amber-400/20">
            Hear directly from the technology leaders and innovators who have partnered with our specialists.
          </p>
        </div>
      </div>

      {/* Infinite scrolling row */}
      <div className="mt-16 overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]">
        <div className="flex gap-8 px-6 animate-scroll-testimonials hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => {
            const cardHeight = i % 2 === 0 ? "h-[200px]" : "h-[240px]";
            return (
              <article
                key={i}
                className="w-[360px] shrink-0 rounded-[28px] bg-[#faf8f5] border border-[#ddd5c8] p-4 backdrop-blur-md transition-all duration-300 hover:border-amber-300 shadow-sm"
              >
                <div className={`relative overflow-hidden rounded-[20px] ${cardHeight} w-full`}>
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                </div>
                
                <div className="bg-white rounded-[20px] p-6 mt-4 border border-[#e2d9cc] shadow-xs">
                  <Quote className="h-7 w-7 text-amber-500 mb-3 fill-amber-500/5" />
                  <p className="text-[14px] leading-relaxed text-[#5c5449] mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="w-6 h-[1px] bg-slate-100" />
                    <div className="text-xs text-[#1a1a1a] font-bold tracking-wider">{t.name} • <span className="text-[#6b6256] font-normal">{t.role}</span></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-testimonials {
          animation: scroll-testimonials 45s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
