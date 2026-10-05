"use client";

import { useState, useRef } from "react";

const testimonials = [
  {
    id: 1,
    logo: "LOGOIPSUM",
    quote:
      "Our website's user experience improved drastically thanks to Network Handlers.",
    author: "Haskell Theresa",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    id: 2,
    logo: "LOODO",
    quote:
      "Engage Your Audience is what they promise, and they deliver. Our engagement has soared!",
    author: "Finnegan Philomena",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
  },
  {
    id: 3,
    logo: "LOGO",
    quote:
      "Thanks to Network Handlers, our revenue has truly skyrocketed. Incredible work!",
    author: "Karen Smith",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
  {
    id: 4,
    logo: "IPSUM",
    quote:
      "Content Management System Solutions made updating our website a breeze. Thanks, Network Handlers!",
    author: "Maureen Longstreet",
    image:
      "/images/testimonial/maureen.png",
  },
  {
    id: 5,
    logo: "BRANDCO",
    quote:
      "The Chat GPT Integrations added a personalized touch to our website. Customers love it!",
    author: "Josephine Colbert",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
  },
  {
    id: 6,
    logo: "NEXTECH",
    quote:
      "CRM Solutions by Network Handlers streamlined our processes. So much more efficient now!",
    author: "Sheila Wiseman",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop&crop=face",
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 16;
const STEP = CARD_WIDTH + CARD_GAP;

export default function TestimonialsSection() {
  const [offset, setOffset] = useState(0);
  const maxOffset = -(testimonials.length - 3.3) * STEP;

  const handlePrev = () => {
    setOffset((prev) => Math.min(prev + STEP, 0));
  };

  const handleNext = () => {
    setOffset((prev) => Math.max(prev - STEP, maxOffset));
  };

  const canPrev = offset < 0;
  const canNext = offset > maxOffset;

  return (
    <section className="w-full bg-white py-16  font-sans overflow-hidden">
       <div className="container-premium testimonial-card">
      {/* Header row */}
      <div className="flex items-start justify-between  mx-auto mb-10 testimonial-card">
        {/* Left: label + heading + subtext */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-black leading-tight">
            What they say about us?
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Here&apos;s what they shared about their experience working with our team.
          </p>
        </div>

        {/* Right: arrow buttons */}
        <div className="flex items-center gap-3 mt-4 shrink-0">
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200
              ${canPrev
                ? "border-gray-300 text-black hover:bg-gray-100 cursor-pointer"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={!canNext}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200
              ${canNext
                ? "border-gray-300 text-black hover:bg-gray-100 cursor-pointer"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards slider */}
        
      <div className=" mx-auto overflow-hidden testimonial-card">
        <div
          className="flex gap-4"
          style={{
            transform: `translateX(${offset}px)`,
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            width: `${testimonials.length * STEP}px`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative rounded-3xl overflow-hidden shrink-0"
              style={{ width: `${CARD_WIDTH}px`, height: "420px" }}
            >
              {/* Full background image */}
              <img
                src={t.image}
                alt={t.author}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6">
                {/* Logo top-left */}
                <span className="text-white font-extrabold text-lg tracking-tight drop-shadow">
                  {t.logo}
                </span>

                {/* Quote bottom */}
                <div>
                  {/* Quote marks */}
                  <div className="flex gap-0.5 mb-3">
                    <svg width="24" height="18" viewBox="0 0 32 24" fill="white" opacity="0.9">
                      <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 3.2C10.667 4.533 8 7.2 8 11.2H14.4V24H0zm17.6 0V14.4C17.6 6.4 22.4 1.6 32 0l1.6 3.2C28.267 4.533 25.6 7.2 25.6 11.2H32V24H17.6z"/>
                    </svg>
                  </div>

                  <p className="text-white text-base font-medium leading-snug mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <p className="text-white/60 text-sm">- {t.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}