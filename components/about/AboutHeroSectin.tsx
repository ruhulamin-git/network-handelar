"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
];

const floatingCards = {
  expense: {
    items: [
      { name: "Cloud Deployment", date: "November 14, 2025", amount: "$340" },
      { name: "API Integration", date: "November 14, 2025", amount: "$210" },
      { name: "SaaS Subscription", date: "November 14, 2025", amount: "$90" },
    ],
  },
};

export default function HeroPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen mt-20 ">
      <section className="relative  overflow-hidden  flex flex-col lg:flex-row  mx-3 gap-4 ">

        {/* LEFT PANEL */}
        <div className="relative container-premium flex flex-col bg-[#f0efed] rounded-[28px] justify-center w-full lg:w-1/2 z-10 px-8 py-16 md:px-16">
          {/* Grain overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "180px 180px",
            }}
          />

          {/* Trusted Badge */}
          <div
            className={`relative flex flex-wrap items-center gap-3 mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-[#f0efed] object-cover w-9 h-9"
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium tracking-wide">
              Trusted by 5,000+ developers
            </span>
          </div>

          {/* Heading */}
          <h1
            className={` text-4xl md:text-6xl  text-gray-900 tracking-tighter leading-[0.95] mb-6 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-0.04em",
              transitionDelay: "200ms",
            }}
          >
            Build smarter
            <br />
            software, faster.
          </h1>

          {/* Description */}
          <p
            className={`relative text-gray-500 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-lg mb-10 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "320ms" }}
          >
            Network Handlers delivers end-to-end software engineering solutions — from cloud infrastructure and API integrations to custom SaaS platforms that scale with your business.
          </p>

          {/* CTA Button */}
          <div
            className={`relative transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "440ms" }}
          >
            <Link href="/contact">
            <button
              className="group inline-flex items-center gap-3 bg-gray-900 text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 hover:bg-gray-800 active:scale-95 shadow-xl"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span>Start Building</span>
              <span className="w-8 h-8 rounded-full bg-[#b5f23d] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 12L12 2M12 2H5M12 2V9"
                    stroke="#111"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            </Link>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative w-full lg:w-1/2 min-h-[550px] rounded-[28px] lg:min-h-screen overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="/images/bg-about.png"
              alt="Background"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-sky-500/25" />

          {/* Floating Card - Expertise */}
          <div
            className={`absolute top-[30%] sm:top-[40%] left-[6%] sm:left-[20%] lg:left-[20%]
            w-[220px] sm:w-[250px] md:w-[280px]
            transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              animation: mounted ? "float1 6s ease-in-out infinite" : "none",
            }}
          >
            <div className="rounded-[28px] bg-gray-900/95 backdrop-blur-md p-5 sm:p-6 shadow-2xl">
              <p className="text-white text-lg sm:text-xl font-bold leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Software{" "}
                <span className="inline-flex items-center">
                  <span className="w-4 h-4 rounded-full bg-[#b5f23d]" />
                </span>{" "}
                that
                <br />
                Combines
                <br />
                Speed,{" "}
                <span className="italic">Scale,</span>
                <br />
                and Security
              </p>
            </div>
          </div>

          {/* Floating Card - Dev Spend */}
          <div
            className={`absolute bottom-[8%] sm:bottom-[25%] right-[5%] sm:right-[10%] lg:right-[20%]
            w-[260px] sm:w-[300px]
            transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              animation: mounted ? "float2 7s ease-in-out infinite" : "none",
            }}
          >
            <div className="rounded-[28px] bg-white/95 backdrop-blur-md p-5 shadow-2xl">
              <p className="text-gray-500 text-xs mb-1 font-medium">
                Monthly dev spend
              </p>

              <div className="flex items-end gap-1 mb-4">
                <span className="text-3xl font-black text-gray-900">$4,900</span>
                <span className="text-gray-400 text-sm">/ $10,000</span>
              </div>

              {/* Progress */}
              <div className="w-full h-1.5 bg-gray-100 rounded-full mb-4 overflow-hidden">
                <div className="h-full bg-[#b5f23d] rounded-full" style={{ width: "49%" }} />
              </div>

              <div className="space-y-3">
                {floatingCards.expense.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#b5f23d]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">{item.name}</p>
                        <p className="text-[10px] text-gray-400">{item.date}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-700">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      <style jsx global>{`
  

        @keyframes float1 {
          0%, 100% { transform: rotate(-6deg) translateY(0px); }
          50%       { transform: rotate(-6deg) translateY(-14px); }
        }

        @keyframes float2 {
          0%, 100% { transform: rotate(4deg) translateY(0px); }
          50%       { transform: rotate(4deg) translateY(-10px); }
        }
      `}</style>
    </main>
  );
}