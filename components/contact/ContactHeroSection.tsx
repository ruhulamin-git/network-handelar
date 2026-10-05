"use client";


import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ fullName: "", email: "", message: "" });
  };

  const socials = [
    {
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      link: "https://www.instagram.com/networkhandlers/",
    },
    {
      label: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      link: "https://www.facebook.com/networkhandlers/",
    },
    {
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      link: "https://www.linkedin.com/company/network-handlers/",
    },
    {
      label: "X",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      link: "https://twitter.com/networkhandlers",
    },
  ];

  return (
    <section className="flex  font-sans flex-col lg:flex-row pt-20 gap-4 ">
      

      {/* ── LEFT PANEL ── */}
      <div className="bg-[#f0f1f3] w-full lg:w-[38%]  flex flex-col justify-between p-10 lg:p-14 shrink-0 rounded-[24px]">
        {/* Headline */}
        <div>
           <h3 className="text-md mb-2">Work with Network Handlers</h3>
          <p className="text-4xl lg:text-5xl  text-[#131313] mb-3">
          Ready to start a project?
          </p>
          <p className="text-sm text-[#131313] leading-relaxed max-w-xs">
            Fill out the form and one of our Web Strategist will be in touch with you as soon as possible.
          </p>
        </div>

        {/* Contact info + socials */}
        <div className="mt-auto pt-16 flex flex-col gap-0">
          <p className="text-xs   text-[#131313] mb-0.5">Email:</p>
          <p className="text-[15px] font-semibold   text-[#131313] mb-5">info@networkhanlers.com</p>

          <p className="text-xs   text-[#131313] mb-0.5">Phone:</p>
          <p className="text-[15px] font-semibold   text-[#131313] mb-5">(470) 543-5547</p>

          <p className="text-xs   text-[#131313] mb-0.5">Office:</p>
          <p className="text-[15px] font-semibold   text-[#131313] mb-5">
200 Rector Place Suite 17H, New York, NY 10280</p>

          <p className="text-xs   text-[#131313] mb-3">Follow Us:</p>
<div className="flex items-center gap-2.5">
  {socials.map((s) => (
    <a
      key={s.label}
      href={s.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={s.label}
      className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
    >
      {s.icon}
    </a>
  ))}
</div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div
        className="flex-1  relative flex items-center justify-center p-10 lg:p-12 rounded-[24px]"
        style={{
          backgroundImage:
            "url('/images/bg-contact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-sky-200/20" />

        {/* Form Card */}
        <div className="relative z-10 w-full max-w-[600px] max-h-[800px] bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/70">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" className="w-6 h-6">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="  text-[#131313] font-bold text-base">Message Sent!</p>
              <p className="  text-[#131313] text-sm">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              {/* Full Name */}
              <div className="mb-5">
                <label className="block text-[15px] font-semibold   text-[#131313] mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white placeholder-gray-300 outline-none focus:border-gray-400 focus:ring-2 focus:ring-black/5 transition-all"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-[15px] font-semibold   text-[#131313] mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white placeholder-gray-300 outline-none focus:border-gray-400 focus:ring-2 focus:ring-black/5 transition-all"
                />
              </div>

              {/* Message */}
              <div className="mb-7">
                <label className="block text-[15px] font-semibold   text-[#131313] mb-2">
                  Messages
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your messages here..."
                  rows={6}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white placeholder-gray-300 outline-none focus:border-gray-400 focus:ring-2 focus:ring-black/5 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full pl-5 pr-2 py-2 text-[11px] font-bold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              >
                SUBMIT
                <span
                  className={`w-8 h-8 rounded-full bg-[#c6f135] flex items-center justify-center transition-transform duration-300 ${hovering ? "rotate-45" : ""}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" className="w-4 h-4">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </button>
            </>
          )}
        </div>
      </div>

    </section>
  );
}