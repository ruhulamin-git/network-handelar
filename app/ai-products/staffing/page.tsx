"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronRight,
  GitMerge,
  Globe,
  Play,
  Shield,
  Sparkles,
  Users,
  Video,
  Zap,
} from "lucide-react";

/* ─────────────────────────────────────────
   IMAGES  (Unsplash CDN — no API key)
───────────────────────────────────────── */
const IMG = {
  heroBg:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85&auto=format&fit=crop",
  dashboard:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85&auto=format&fit=crop",
  office:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=85&auto=format&fit=crop",
  meeting:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1000&q=85&auto=format&fit=crop",
  workflow:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&q=85&auto=format&fit=crop",
  avatar1:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&q=80&auto=format&fit=crop&crop=face",
  avatar2:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&q=80&auto=format&fit=crop&crop=face",
  avatar3:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&q=80&auto=format&fit=crop&crop=face",
  avatar4:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&q=80&auto=format&fit=crop&crop=face",
  avatar5:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&q=80&auto=format&fit=crop&crop=face",
  avatar6:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&q=80&auto=format&fit=crop&crop=face",
};

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const stats = [
  { value: "4.2×", label: "Faster hiring", sub: "vs legacy ATS" },
  { value: "91%", label: "Match accuracy", sub: "AI-scored talent" },
  { value: "62%", label: "Cost reduction", sub: "per successful hire" },
  { value: "18K+", label: "Companies", sub: "across 40 industries" },
];

const features = [
  {
    id: 0,
    tag: "01 — Talent Intelligence",
    title: "Match candidates with surgical precision.",
    desc:
      "Our multimodal AI scores every applicant against 200+ signals — skills, culture fit, growth trajectory, and role context — surfacing the right person before your competition sees them.",
    img: IMG.dashboard,
    accent: "sky",
  },
  {
    id: 1,
    tag: "02 — Workflow Automation",
    title: "Your entire pipeline. Fully automated.",
    desc:
      "From job posting to offer letter, every stage runs on intelligent automation. Scheduling, screening, follow-ups, and compliance checks — handled without lifting a finger.",
    img: IMG.workflow,
    accent: "sky",
  },
  {
    id: 2,
    tag: "03 — Hiring Intelligence",
    title: "Decisions backed by real-time data.",
    desc:
      "Live dashboards surface bottlenecks, predict drop-off, and benchmark your team's velocity against industry data — so you ship the right hires, faster.",
    img: IMG.meeting,
    accent: "emerald",
  },
];

const capabilities = [
  { icon: Brain, title: "Resume Parsing", desc: "Extract structured data from any resume format in milliseconds." },
  { icon: Shield, title: "Bias Detection", desc: "Equitable screening with algorithmic fairness guardrails built in." },
  { icon: Video, title: "Video Analysis", desc: "AI-assisted interview scoring and sentiment analysis at scale." },
  { icon: GitMerge, title: "ATS Integration", desc: "Plug into Greenhouse, Lever, Workday, and 30+ platforms." },
  { icon: BarChart3, title: "Predictive Attrition", desc: "Forecast employee tenure and culture fit before day one." },
  { icon: Globe, title: "Global Compliance", desc: "GDPR, EEOC, and regional hiring law enforcement built-in." },
];

const testimonials = [
  {
    quote:
      "TalentOS cut our time-to-hire from 47 days to 11. The AI matching is genuinely uncanny — it surfaces people our old system would have buried.",
    name: "Sarah Chen",
    title: "VP People, Stripe",
    img: IMG.avatar1,
  },
  {
    quote:
      "We replaced three separate tools with this platform. The ROI was visible in the first quarter and our recruiters actually enjoy using it.",
    name: "Marcus Reid",
    title: "Head of Talent, Shopify",
    img: IMG.avatar2,
  },
  {
    quote:
      "The bias detection alone was worth the switch. Our offer acceptance rate jumped 34% and diversity metrics improved quarter over quarter.",
    name: "Priya Sharma",
    title: "Chief People Officer, Notion",
    img: IMG.avatar3,
  },
];

const logos = ["Stripe", "Shopify", "Notion", "Figma", "Linear", "Vercel", "Loom", "Retool"];

const plans = [
  {
    name: "Starter",
    price: "$79",
    desc: "For small teams getting started with AI hiring.",
    features: ["Up to 5 active roles", "AI candidate scoring", "Email integration", "Basic analytics"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$249",
    desc: "For scaling teams that need full-pipeline intelligence.",
    features: ["Unlimited active roles", "Full AI suite", "ATS integrations", "Video analysis", "Bias detection", "Priority support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large orgs with complex hiring infrastructure.",
    features: ["Everything in Growth", "Dedicated CSM", "Custom compliance", "SSO & audit logs", "SLA guarantee"],
    highlight: false,
  },
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Page() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [email, setEmail] = useState("");

  const accentMap: Record<string, string> = {
    sky: "text-sky-600",
    emerald: "text-emerald-600",
  };

  return (
    <>
      {/* Google Fonts */}
      <style>{`

        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { from{background-position:200% center} to{background-position:-200% center} }
        @keyframes spin-slow { to{transform:rotate(360deg)} }
        .float { animation: floatY 6s ease-in-out infinite; }
        .animate-in { animation: fadeSlideUp 0.6s ease both; }
        .shimmer-text {
          background: linear-gradient(120deg, #0ea5e9 0%, #38bdf8 30%, #0ea5e9 60%, #0284c7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; animation: shimmer 4s linear infinite;
        }
        .dot-grid {
          background-image: radial-gradient(circle, #dbeafe 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .card-hover { transition: all 0.25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(14,165,233,0.10); }
        .tab-line { position:relative; }
        .tab-line::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; border-radius:2px; background:#131313; opacity:0; transition:opacity 0.2s; }
        .tab-line.active::before { opacity:1; }
        .logo-track { display:flex; gap:48px; animation: marquee 22s linear infinite; white-space:nowrap; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>

      <div className="bg-[#fafaf8] text-[#1a1814] overflow-x-hidden mt-20">



        {/* ── HERO ──────────────────────────────────── */}
        <section className="relative  flex items-center py-16 overflow-hidden container-premium">
          {/* Background layers */}
          <div className="absolute inset-0 dot-grid opacity-60" />
          <div className="absolute inset-0">
            <img src={IMG.heroBg} alt="" className="w-full h-full object-cover opacity-[0.04]" />
          </div>
    
          <div className="relative mx-auto container-premium w-full">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">

              {/* Left text */}
              <div className="">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-700  text-[10px] font-500 uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  AI-Powered Staffing Platform
                </div>

                <div className="font-display text-4xl lg:text-5xl font-900 leading-[0.94] tracking-[-0.03em] text-[#0f0d0a] mb-6">
                  Hire smarter.<br />
                  <em className="not-italic shimmer-text">10× faster.</em><br />
                  At scale.
                </div>

                <p className="text-[17px] leading-[1.75] text-stone-500 mb-10 max-w-[480px]">
                  TalentOS combines deep AI matching, automated workflows, and predictive analytics to fill roles in days — not months. Built for teams that can't afford to get hiring wrong.
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  <button className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-px hover:shadow-xl hover:shadow-sky-200">
                    Start free trial <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 bg-white border border-stone-200 hover:border-stone-300 text-[#1a1814] text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-px hover:shadow-md">
                    <Play className="w-3.5 h-3.5 fill-sky-600 text-sky-600" />
                    Watch demo
                  </button>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[IMG.avatar1, IMG.avatar2, IMG.avatar3, IMG.avatar4, IMG.avatar5].map((src, i) => (
                      <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-[13px]">★</span>)}
                    </div>
                    <p className="font-mono2 text-[11px] text-stone-400">18,400+ teams trust TalentOS</p>
                  </div>
                </div>
              </div>

              {/* Right — hero card */}
              <div className="relative">
                <div className="float">
                  {/* Main card */}
                  <div className="relative rounded-2xl border border-stone-200 bg-white shadow-2xl shadow-stone-200/80 overflow-hidden">
                    {/* Card header bar */}
                    <div className="bg-stone-50 border-b border-stone-100 px-5 py-3.5 flex items-center gap-2">
                      {["#fca5a5","#fcd34d","#6ee7b7"].map((c,i) => (
                        <div key={i} className="w-2.5 h-2.5 rounded-full" />
                      ))}
                      <span className="font-mono2 text-[11px] text-stone-400 ml-2">TalentOS — Candidate Pipeline</span>
                    </div>
                    <img src={IMG.dashboard} alt="Dashboard" className="w-full block" />
                  </div>

                  {/* Floating match badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl border border-stone-200 shadow-xl shadow-stone-200/60 p-4 min-w-[160px]">
                    <p className="font-mono2 text-[9px] font-500 uppercase tracking-widest text-stone-400 mb-1">AI Match Score</p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-[36px] font-900 leading-none text-emerald-600">97</span>
                      <span className="text-sm text-stone-400">/100</span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1">Sarah K. · Senior Engineer</p>
                    <div className="mt-2 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full w-[97%] bg-emerald-400 rounded-full" />
                    </div>
                  </div>

                  {/* Floating velocity badge */}
                  <div className="absolute -top-4 -right-4 bg-sky-600 text-white rounded-xl px-4 py-2.5 shadow-lg shadow-sky-300/50">
                    <p className="font-mono2 text-[10px] font-500">↑ 4.2× faster hiring</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ── STATS ─────────────────────────────────── */}
        <section className="py-20 bg-[#fafaf8]">
          <div className="container-premium grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.value} className="bg-white rounded-2xl border border-stone-200 p-7 shadow-sm card-hover">
                <div className="font-display text-[52px] font-900 leading-none tracking-[-0.04em] text-[#0f0d0a] mb-3">{s.value}</div>
                <div className="text-[14px] font-semibold text-[#1a1814] mb-1">{s.label}</div>
                <div className="font-mono2 text-[11px] text-stone-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES (TABBED) ─────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container-premium">
            {/* Section header */}
            <div className="mb-16">
              <p className="font-mono2 text-[11px] font-500 uppercase tracking-[0.2em] text-sky-600 mb-4">Core Platform</p>
              <div className="flex items-end justify-between gap-8 flex-wrap">
                <h2 className="font-display text-[clamp(28px,4vw,52px)] font-900 leading-[1.05] tracking-[-0.03em] max-w-xl">
                  The complete hiring operating system.
                </h2>
                <p className="text-[15px] leading-relaxed text-stone-500 max-w-sm">
                  Every tool your team needs to source, assess, and close top talent — unified in one intelligent platform.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">
              {/* Tabs */}
              <div className="space-y-1">
                {features.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFeature(f.id)}
                    className={`tab-line w-full text-left px-6 py-5 rounded-xl transition-all ${activeFeature === f.id ? "active bg-sky-50 border border-sky-100" : "hover:bg-stone-50 border border-transparent"}`}
                  >
                    <p className={`font-mono2 text-[10px] font-500 uppercase tracking-[0.15em] mb-2 ${activeFeature === f.id ? "text-sky-600" : "text-stone-400"}`}>{f.tag}</p>
                    <h3 className={`text-[15px] font-700 leading-snug transition-colors ${activeFeature === f.id ? "text-[#0f0d0a]" : "text-stone-400"}`}>{f.title}</h3>
                    {activeFeature === f.id && (
                      <p className="mt-2 text-[13px] text-stone-500 leading-relaxed">{f.desc}</p>
                    )}
                  </button>
                ))}
              </div>

              {/* Image panel */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-stone-200/80 border border-stone-200 aspect-[16/10]">
                <img
                  src={features[activeFeature].img}
                  alt={features[activeFeature].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className={`font-mono2 text-[10px] font-500 uppercase tracking-widest bg-white/90 backdrop-blur-sm border border-stone-200 px-3 py-1.5 rounded-full ${accentMap[features[activeFeature].accent]}`}>
                    {features[activeFeature].tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SHOWCASE: SIDE BY SIDE ─────────────────── */}
        <section className="py-24 bg-[#fafaf8]">
          <div className="container-premium space-y-24">

            {/* Row 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-mono2 text-[10px] font-500 uppercase tracking-widest text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full">Talent Intelligence</span>
                <h2 className="font-display text-[clamp(28px,3.5vw,46px)] font-900 leading-[1.08] tracking-[-0.03em] mt-6 mb-5">
                  Find the right person before your competition does.
                </h2>
                <p className="text-[15px] leading-[1.8] text-stone-500 mb-8">
                  Our AI evaluates every candidate against 200+ signals — skills, culture fit, growth trajectory, and role context — and resurfaces hidden talent your ATS would have buried.
                </p>
                {["200+ scoring dimensions", "Real-time candidate ranking", "Culture & values fit analysis", "Passive talent rediscovery"].map((pt) => (
                  <div key={pt} className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                    <span className="text-[14px] text-stone-600 font-medium">{pt}</span>
                  </div>
                ))}
                <button className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-sky-600 hover:text-sky-700 transition-colors group">
                  Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-stone-200/60 border border-stone-200">
                  <img src={IMG.office} alt="Office" className="w-full block h-[400px] object-cover" />
                </div>
                {/* Floating stat */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl border border-stone-200 shadow-xl p-4">
                  <p className="font-mono2 text-[9px] uppercase tracking-widest text-stone-400 mb-1">Avg. time to hire</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl font-900 text-sky-600">11</span>
                    <span className="text-sm text-stone-400 font-medium">days</span>
                  </div>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">↓ from 47 days</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative lg:order-2">
                <div>
                  <span className="font-mono2 text-[10px] font-500 uppercase tracking-widest text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full">Workflow Automation</span>
                  <h2 className="font-display text-[clamp(28px,3.5vw,46px)] font-900 leading-[1.08] tracking-[-0.03em] mt-6 mb-5">
                    Your pipeline runs itself. Really.
                  </h2>
                  <p className="text-[15px] leading-[1.8] text-stone-500 mb-8">
                    From job posting to offer letter, every stage runs on intelligent automation. Scheduling, screening, follow-ups, and compliance — handled without human intervention.
                  </p>
                  {["Auto-scheduling across time zones", "Smart follow-up sequences", "Compliance checks built-in", "One-click offer generation"].map((pt) => (
                    <div key={pt} className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                      <span className="text-[14px] text-stone-600 font-medium">{pt}</span>
                    </div>
                  ))}
                  <button className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-sky-600 hover:text-sky-700 transition-colors group">
                    Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="relative lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-stone-200/60 border border-stone-200">
                  <img src={IMG.workflow} alt="Workflow" className="w-full block h-[400px] object-cover" />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-5 -left-5 bg-sky-600 text-white rounded-xl px-4 py-3 shadow-lg shadow-sky-200/50">
                  <p className="font-mono2 text-[10px]">⚡ 89% auto-resolved</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── CAPABILITIES GRID ─────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container-premium">
            <div className="flex items-end justify-between mb-14 flex-wrap gap-8">
              <div>
                <p className="font-mono2 text-[11px] font-500 uppercase tracking-[0.2em] text-stone-400 mb-3">What's Included</p>
                <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-900 tracking-[-0.03em] leading-[1.1]">
                  Everything in one platform.
                </h2>
              </div>
              <button className="flex items-center gap-2 border border-stone-200 text-[13px] font-semibold text-[#1a1814] px-6 py-3 rounded-full hover:border-stone-300 hover:bg-stone-50 transition-all">
                See all features <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="group bg-[#fafaf8] border border-stone-200 rounded-2xl p-7 card-hover cursor-default">
                    <div className="w-11 h-11 rounded-xl bg-[#D6f770]  flex items-center justify-center mb-5 transition-colors">
                      <Icon className="w-5 h-5 text-[#131313]" />
                    </div>
                    <h3 className="text-[16px] font-bold mb-2 text-[#0f0d0a]">{c.title}</h3>
                    <p className="text-[13px] text-stone-500 leading-relaxed">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────── */}
        <section className="py-24 bg-[#fafaf8]">
          <div className="container-premium">
            <div className="text-center mb-14">
              <p className="font-mono2 text-[11px] font-500 uppercase tracking-[0.2em] text-stone-400 mb-3">Customer Stories</p>
              <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-900 tracking-[-0.03em]">Trusted by people-first teams.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white border border-stone-200 rounded-2xl p-7 shadow-sm card-hover flex flex-col gap-5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                  </div>
                  <p className="text-[14px] text-stone-600 leading-[1.8] flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-stone-100">
                    <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-stone-100" />
                    <div>
                      <p className="text-[14px] font-bold text-[#0f0d0a]">{t.name}</p>
                      <p className="font-mono2 text-[11px] text-stone-400">{t.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}