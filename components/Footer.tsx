"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Clock, Send } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { aiProducts } from "./common/Products";

// Custom SVG Social Icons
const SocialIcons = {
  Facebook: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  ),
  Twitter: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  ),
  Linkedin: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  Instagram: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
};
const socialLinks = [
  {
    icon: SocialIcons.Facebook,
    href: "https://www.facebook.com/NetworkHandlers",
  },
  {
    icon: SocialIcons.Twitter,
    href: "https://x.com/nhandlers",
  },
  {
    icon: SocialIcons.Linkedin,
    href: "https://www.linkedin.com/company/networkhandlers",
  },
  {
    icon: SocialIcons.Instagram,
    href: "https://www.instagram.com/network.handlers/",
  },
];
const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Cookies Policy", href: "/cookies" },
];
const serviceLinks = [
  { name: "AI Services", href: "/services/ai-services" },
  { name: "AI Solutions", href: "/services/ai-solutions" },
  { name: "IoT Development", href: "/services/iot-development" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Software Solutions", href: "/services/software-solutions" },
];
const technologyLinks = [
  { name: "Next JS Development", href: "/technologies/nextjs" },
  { name: "Node JS Development", href: "/technologies/nodejs" },
  { name: "Python Development", href: "/technologies/python" },
  { name: "React JS Development", href: "/technologies/reactjs" },
];


export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Main Footer Container with Rounded Top Corners */}
      <div className="bg-[#131313] border-t border-white/10 rounded-t-[50px] pt-20 pb-0 px-0 relative overflow-hidden shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.3)]">
        {/* Abstract Background Accents - Dark theme */}
   

        <div className="container-premium relative z-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12 xl:gap-10">
            {/* Column 1: Logo & Info */}
            <div className="flex flex-col">
              <Link href="/" className="inline-block mb-8">
                <Image
                  src="/logo-dark.png"
                  alt="Network Handlers"
                  width={220}
                  height={55}
                  className="object-contain"
                />
              </Link>
              <p className="text-gray-300 text-sm leading-[1.8] pr-4">
                At Network Handlers, we specialize in helping organizations
                develop and implement effective digital strategies to drive
                growth and achieve their business objectives.
              </p>
            </div>

            {/* Column 2: Company */}
            <div>
              <div className="flex  items-center gap-3 mb-8 ">
                <div className="w-6 h-0.5 bg-cyan-400" />
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                  Company
                </h3>
              </div>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group text-sm font-medium"
                    >
                      <span className="text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: AI Products */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-0.5 bg-cyan-400" />
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                  AI Products
                </h3>
              </div>
              <ul className="space-y-4">
                {aiProducts.map((product) => (
                  <li key={product.id}>
                    <Link 
                      href={product.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group text-sm font-medium"
                    >
                      <span className="text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {product.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Services */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-0.5 bg-cyan-400" />
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                  Services
                </h3>
              </div>
              <ul className="space-y-4">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group text-sm font-medium"
                    >
                      <span className="text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Technologies */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-0.5 bg-cyan-400" />
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                  Technologies
                </h3>
              </div>
              <ul className="space-y-4">
                {technologyLinks.map((tech) => (
                  <li key={tech.name}>
                    <Link 
                      href={tech.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group text-sm font-medium"
                    >
                      <span className="text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {tech.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 6: Newsletter */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-0.5 bg-cyan-400" />
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                  Our Newsletter
                </h3>
              </div>
              <div className="space-y-5">
                <div className="relative group shadow-[0_8px_30px_rgb(0,0,0,0.2)] rounded-2xl">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm text-white placeholder:text-[#fff] outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-white shadow-md hover:bg-cyan-600 hover:scale-105 transition-all">
                    <Send size={16} />
                  </button>
                </div>
                <p className="text-[11px] text-[#fff] tracking-wide pl-2 uppercase font-semibold">
                  * We respect your inbox. No spam.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Unified Bottom Bar */}
        <div className="border-t border-white/10 relative z-10">
          <div className="container-premium py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="flex flex-col text-left md:flex-row items-left gap-8 md:gap-16">
                {/* Email Us */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-1">
                      Email Us
                    </div>
                    <div className="text-white font-bold text-sm">
                      info@networkhandlers.com
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Clock size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-1">
                      Opening Hours{" "}
                    </div>
                    <div className="text-white font-bold text-sm">
                      09:00 AM – 07:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="shrink-0">
                <Link href="/contact">
                  <CustomButton
                    variant="cyan"
                    uppercase
                    showArrow
                    className=" shadow-lg shadow-cyan-500/20"
                  >
                    Contact Us
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Final Copyright */}
        <div className="py-6 border-t border-white/10 bg-[#1a1a1a]">
          <div className="container-premium flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-bold text-white">
            {/* Left side: Location */}
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-cyan-400 shrink-0" />
              <span className="text-gray-300 normal-case tracking-normal font-medium">
                200 Rector Place Suite 17H, New York, NY 10280
              </span>
            </div>

            {/* Right side: Copyright & Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-gray-400">
                © 2026 Network Handlers. All Rights Reserved.
              </div>
              <div className="flex items-center gap-2">
                {socialLinks.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 shrink-0"
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
