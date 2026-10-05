"use client";

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, CheckCircle2, Zap } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Network Handlers has been an exceptional partner in delivering custom programming solutions and building out our facilities application. Their team demonstrated deep technical expertise and a commitment to understanding our unique needs.",
    author: "Platinum Benefit Planning",
    role: "Enterprise Client",
  },
  {
    quote:
      "Great partner for over 10 years now supporting our online presence.",
    author: "Academic Success",
    role: "Long-term Client",
  },
  {
    quote: "Quality work and amazing personalized customer support!",
    author: "Dr. Cathy MD",
    role: "Client",
  },
  {
    quote:
      "Our website's user experience improved drastically thanks to Network Handlers.",
    author: "Haskell Theresa",
    role: "Client",
  },
];

export default function BeforeYouGoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    let hasOpened = false;
    const mountTime = Date.now();
    const GRACE_PERIOD = 5_000; // No triggers fire in the first 5s after page load

    // Only show modal once per session (sessionStorage clears on browser close)
    const alreadyShown = sessionStorage.getItem("beforeYouGoShown") === "true";

    const openModal = () => {
      if (hasOpened) return;
      if (sessionStorage.getItem("beforeYouGoShown") === "true") return;
      // Don't fire during the initial grace period
      if (Date.now() - mountTime < GRACE_PERIOD) return;
      hasOpened = true;
      setIsOpen(true);
    };

    // ── Trigger 1: Exit Intent (cursor leaves top of viewport) ──
    // Only fires AFTER the mouse has entered the page at least once
    let mouseHasEntered = false;
    const handleMouseEnter = () => {
      mouseHasEntered = true;
    };
    const handleMouseLeave = (e: MouseEvent) => {
      if (mouseHasEntered && e.clientY < 10) openModal();
    };

    // ── Trigger 2: Inactivity Timeout (45s of no real interaction) ──
    let idleTimeoutId: ReturnType<typeof setTimeout>;
    const startIdleTimer = () => {
      clearTimeout(idleTimeoutId);
      idleTimeoutId = setTimeout(openModal, 45_000);
    };
    startIdleTimer();

    // Debounce mousemove so tiny cursor jitter doesn't keep resetting
    let mouseMoveDebounce: ReturnType<typeof setTimeout>;
    const handleMouseMove = () => {
      clearTimeout(mouseMoveDebounce);
      mouseMoveDebounce = setTimeout(() => {
        startIdleTimer();
      }, 300);
    };

    const handleKeyOrClick = () => {
      startIdleTimer();
    };

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeyOrClick);
    document.addEventListener("click", handleKeyOrClick);

    // ── Trigger 3: Mobile Scroll past 50% page height ──
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      if ((window.scrollY / docHeight) * 100 > 50) openModal();
    };

    // ── Trigger 4: Tab Visibility — away ≥ 5s then returns ──
    let hiddenTime = 0;
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        hiddenTime = Date.now();
      } else if (document.visibilityState === "visible") {
        if (hiddenTime > 0 && Date.now() - hiddenTime >= 5_000) openModal();
        startIdleTimer();
      }
    };

    // ── Trigger 5: Guaranteed fallback — show after 90s no matter what ──
    const fallbackTimerId = setTimeout(openModal, 90_000);

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", handleKeyOrClick);
      document.removeEventListener("click", handleKeyOrClick);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(idleTimeoutId);
      clearTimeout(mouseMoveDebounce);
      clearTimeout(fallbackTimerId);
    };
  }, []);

  // Handle Testimonial Carousel navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Close and suppress for the rest of this session only
  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("beforeYouGoShown", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead captured:", formData);
    setIsSubmitted(true);
    sessionStorage.setItem("beforeYouGoShown", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fade-in font-sans">
      <div className="flex min-h-full justify-center items-start md:items-center pt-4 pb-10 px-4 md:p-6">
        <div className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-2xl md:rounded-[32px] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 animate-scale-up text-left">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5 hover:border-white/10 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Section: Social Proof & Testimonials */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#0f1f45] via-[#091530] to-[#050d1e] pt-8 pb-5 px-5 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden">
            {/* Subtle accent glow */}
            <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            <div className="space-y-3 md:space-y-6 relative z-10 pr-12 md:pr-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d6fd70]/20 bg-[#d6fd70]/5 text-[#d6fd70] text-xs font-black uppercase tracking-wider">
                <Zap className="w-3 h-3 animate-pulse" />
                Before You Go...
              </div>

              <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {"Let's"} turn your vision into{" "}
                <span className="text-[#d6fd70]">intelligent software</span>.
              </h2>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium">
                See how companies worldwide scale their platforms, design premium
                architectures, and secure their assets with Network Handlers.
              </p>
            </div>

            {/* Testimonials Carousel */}
            <div className="hidden md:block mt-8 border-t border-white/10 pt-6 space-y-4 relative z-10">
              <div className="min-h-[190px]">
                <p className="text-slate-200 text-xs md:text-sm italic leading-relaxed font-medium">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d6fd70] flex items-center justify-center text-[#131313] font-bold text-xs uppercase shadow-md">
                    {testimonials[currentTestimonial].author[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <p className="text-[10px] text-slate-300 font-bold">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-[#d6fd70] hover:text-[#131313] text-slate-300 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-[#d6fd70] hover:text-[#131313] text-slate-300 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="md:col-span-7 bg-white py-5 px-5 md:p-10 flex flex-col justify-center text-slate-900">
            {isSubmitted ? (
              <div className="text-center space-y-4 py-8 animate-fade-in">
                <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mx-auto border border-cyan-100 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-slate-900">
                  Thank You!
                </h3>
                <p className="text-slate-500 max-w-sm mx-auto text-sm font-medium leading-relaxed">
                  {"We've"} received your request. Our technical advisors will
                  reach out with a custom approach for your project details
                  shortly.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 px-6 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 font-extrabold text-sm transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="space-y-2 mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight text-[#0f1f45] leading-tight">
                    Share your vision
                  </h3>
                  <p className="text-slate-500 text-xs font-semibold">
                    Get a personalized architectural blueprint & project estimate
                    from our engineers.
                  </p>
                </div>

                {/* Full Name */}
                <div className="mb-3 md:mb-5">
                  <label className="block text-[14px] md:text-[15px] font-semibold text-[#131313] mb-1 md:mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 md:py-3 text-sm text-gray-700 bg-white placeholder-gray-300 outline-none focus:border-gray-400 focus:ring-2 focus:ring-black/5 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="mb-3 md:mb-5">
                  <label className="block text-[14px] md:text-[15px] font-semibold text-[#131313] mb-1 md:mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 md:py-3 text-sm text-gray-700 bg-white placeholder-gray-300 outline-none focus:border-gray-400 focus:ring-2 focus:ring-black/5 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="mb-4 md:mb-7">
                  <label className="block text-[14px] md:text-[15px] font-semibold text-[#131313] mb-1 md:mb-2">
                    Messages
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Your messages here..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full h-20 md:h-32 border border-gray-200 rounded-xl px-4 py-2.5 md:py-3 text-sm text-gray-700 bg-white placeholder-gray-300 outline-none focus:border-gray-400 focus:ring-2 focus:ring-black/5 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex justify-stretch md:justify-end">
                  <button
                    type="submit"
                    onMouseEnter={() => setButtonHovered(true)}
                    onMouseLeave={() => setButtonHovered(false)}
                    className="w-full md:w-auto flex md:inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full pl-5 pr-2 py-2 text-[11px] font-bold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    SUBMIT
                    <span
                      className={`w-8 h-8 rounded-full bg-[#c6f135] flex items-center justify-center transition-transform duration-300 ${buttonHovered ? "rotate-45" : ""}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#111"
                        strokeWidth="2.5"
                        className="w-4 h-4"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
