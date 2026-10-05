"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface BadgeData {
  platform: string;
  rating: string;
  reviews: string;
}

interface TechHeroProps {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  badges?: BadgeData[];
}

const defaultBadges: BadgeData[] = [
  { platform: "Upwork", rating: "4.8/5", reviews: "120+ Reviews" },
  { platform: "Clutch", rating: "4.9/5", reviews: "24 Reviews" },
  { platform: "UpCity", rating: "5.0/5", reviews: "16 Reviews" },
  { platform: "Overall", rating: "5.0/5", reviews: "250+ Reviews" },
];

export default function TechHero({
  eyebrow,
  titlePrefix,
  titleHighlight,
  description,
  badges = defaultBadges,
}: TechHeroProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessSize: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.businessSize || !formData.message) {
      setFormStatus("error");
      return;
    }
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", businessSize: "", message: "" });
    }, 1000);
  };

  return (
    <div className="relative overflow-hidden mt-3">
      <section className="relative min-h-[calc(100vh-100px)] lg:min-h-screen flex flex-col justify-center items-center py-16 md:py-24 overflow-hidden rounded-[24px] mx-3 bg-[#080d16] text-white">
        {/* Background image & deep mask */}
        <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-950/75 mix-blend-multiply" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 container-premium grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="flex items-center justify-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse shrink-0" />
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-white">
                {eyebrow}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight leading-[1.05] text-white">
              {titlePrefix}<br />
              <span className="bg-gradient-to-r from-[#ccff00] to-emerald-400 bg-clip-text text-transparent font-bold">
                {titleHighlight}
              </span>
            </h1>

            <p className="text-slate-350 text-slate-300 text-base md:text-lg font-light max-w-xl leading-relaxed">
              {description}
            </p>

            {/* Platform Ratings Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {badges.map((badge, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-3.5 hover:bg-white/10 hover:border-[#ccff00]/30 transition-all duration-300">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">{badge.platform}</div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-white font-mono">{badge.rating}</span>
                    <div className="text-[#ccff00] text-[10px]">★</div>
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{badge.reviews}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#telemetry" className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 rounded-xl text-white text-sm font-semibold transition-all">
                View Telemetry
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute inset-0 bg-[#ccff00]/5 rounded-3xl blur-3xl pointer-events-none" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 md:p-8 shadow-2xl">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#ccff00]/20 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] mb-2">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Estimate Request Sent!</h4>
                  <p className="text-zinc-400 text-sm max-w-sm">
                    Thank you for reaching out. A senior technology advisor will analyze your requirements and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-4 text-xs font-mono uppercase tracking-wider text-[#ccff00] hover:text-[#d6fd70] transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">Get in Touch <span className="text-[#ccff00] font-light">with us Today!</span></h3>
                  <p className="text-zinc-500 text-xs mb-6">Receive a custom architectural estimate with transparent pricing structures.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1.5">Full Name *</label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          placeholder="Name"
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#ccff00] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#ccff00]/20 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1.5">Email Address *</label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="Email"
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#ccff00] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#ccff00]/20 transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1.5">Phone Number *</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          placeholder="Phone"
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#ccff00] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#ccff00]/20 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1.5">Business Size *</label>
                        <select 
                          value={formData.businessSize}
                          onChange={(e) => setFormData({ ...formData, businessSize: e.target.value })}
                          required
                          className="w-full bg-white/5 border border-white/10 focus:border-[#ccff00] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#ccff00]/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="bg-zinc-950 text-zinc-550">Select business size</option>
                          <option value="Startup" className="bg-zinc-950 text-white">Startup</option>
                          <option value="SME" className="bg-zinc-950 text-white">Small / Medium Scale</option>
                          <option value="Enterprise" className="bg-zinc-950 text-white">Enterprise</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-1.5">Message *</label>
                      <textarea 
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="Type your message here..."
                        className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#ccff00] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#ccff00]/20 transition-all resize-none"
                      />
                    </div>

                    {formStatus === "error" && (
                      <div className="text-red-400 text-xs font-medium">Please fill in all required fields.</div>
                    )}

                    <button 
                      type="submit" 
                      disabled={formStatus === "submitting"}
                      className="w-full py-4 rounded-xl bg-[#ccff00] text-black font-bold text-sm hover:bg-[#d6fd70] hover:shadow-lg hover:shadow-[#ccff00]/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {formStatus === "submitting" ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Estimate Request</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
