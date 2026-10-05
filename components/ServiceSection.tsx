"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react"; // আইকন ইমপোর্ট করা হয়েছে

const services = [
  {
    id: 1,
    title: "AI Services",
    description:
      "Empower your business operations with autonomous agents, custom ML models, and generative AI systems.",
    image: "/images/hero_ai_nodes.png",
    imageAlt: "AI Services illustration",
  },
  {
    id: 2,
    title: "AI Solutions",
    description:
      "Vertical AI software platforms customized for modern healthcare, fitness, wealth management, and insurance.",
    image: "/images/about_mission_engineering.png",
    imageAlt: "AI Solutions illustration",
  },
  {
    id: 3,
    title: "IoT Development",
    description:
      "Connected hardware programming, wireless sensor networks, firmware engineering, and dashboard monitoring.",
    image: "/images/about_precision_tech.png",
    imageAlt: "IoT Development illustration",
  },
  {
    id: 4,
    title: "Software Development",
    description:
      "Bespoke software platforms, mobile applications, Next.js web systems, and full-stack API integrations.",
    image: "/images/software_develop.png",
    imageAlt: "Software Development illustration",
  },
  {
    id: 5,
    title: "Software Solutions",
    description:
      "Turnkey software solutions, multi-vendor marketplaces, HR software, and custom trading platforms.",
    image: "/images/enterprise_integration.png",
    imageAlt: "Software Solutions illustration",
  },
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="w-full bg-white py-16 md:py-20 overflow-hidden">
      <div className="container-premium">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-4 services-content">
          <span className="w-1.5 h-1.5 rounded-full bg-black" />
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">
            Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight max-w-4xl mx-auto services-content">
          Comprehensive consulting and intelligent innovation
        </h2>

        {/* Description */}
        <p className="text-center text-gray-500 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-2 services-content">
          At Network Handlers, we specialize in delivering custom software
          development services tailored to the unique needs of large
          enterprises and government agencies.
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-8 services-content">
          <Link href="/services" className="group inline-block">
            <button className="flex items-center gap-3 rounded-full bg-[#1a1a1a] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30">
              Get Started
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CCFF00] transition-all duration-300 group-hover:rotate-45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7v10"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="mt-12 flex flex-col gap-4 md:hidden">
          {services.map((service) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveId(isActive ? 0 : service.id)}
                className="rounded-[28px] border border-gray-200 bg-white overflow-hidden cursor-pointer"
              >
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-base font-bold text-black pr-3">
                    {service.title}
                  </h3>
                  <svg
                    className={`transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="#666"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isActive ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5">
                    <div className="relative h-[220px] rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= TABLET ================= */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-4 mt-14">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-[20px] border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition duration-300 flex flex-col"
            >
              <div className="relative h-[150px]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-black leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 mt-1.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= LAPTOP + DESKTOP ================= */}
        <div className="hidden lg:flex gap-5 mt-16 h-[320px] w-full bg-gray-100 rounded-2xl p-5">
          {services.map((service) => {
            const isActive = activeId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                className="rounded-[22px] bg-white overflow-hidden cursor-pointer h-full p-5"
                style={{
                  flex: isActive ? "2.5" : "1",
                  transition: "flex .6s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              >
                <div className="flex h-full w-full items-stretch">
                  
                  {/* Left Side: Content Box */}
                  <div
                    className="flex flex-col justify-between p-6 xl:p-8 h-full"
                    style={{
                      width: isActive ? "50%" : "100%",
                      transition: "width .6s ease",
                    }}
                  >
                    {/* Top Section: Icon Area */}
                    <div className="flex items-center justify-between w-full">
                      <div className="p-2 rounded-xl bg-[#cf0] border border-gray-100/80 text-black flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-gray-800" />
                      </div>
                      
                      {/* Active কার্ডে টপ-রাইট ইন্ডিকেটর অ্যারো */}
                      {isActive && (
                        <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300" />
                      )}
                    </div>

                    {/* Bottom Section: Text content pushed down using mt-auto */}
                    <div className="w-full mt-auto">
                      <h3 className="text-lg xl:text-xl font-bold text-black leading-tight">
                        {service.title}
                      </h3>
                      
                      {/* Description: Always visible layout with micro-transition */}
                      <p className="text-gray-500 text-xs xl:text-sm leading-relaxed mt-2.5 line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Image Box */}
                  <div
                    className="relative h-full "
                    style={{
                      width: isActive ? "50%" : "0%",
                      opacity: isActive ? 1 : 0,
                      transition: "width .6s ease, opacity .4s ease",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover rounded-[22px]"
                      priority={service.id === 1}
                    />
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}