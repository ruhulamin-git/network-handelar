import Link from "next/link";
import { ArrowLeft, Bot, BrainCircuit, ChevronRight, MessageSquareText, Sparkles, Workflow, Users, BarChart2, Zap, GitMerge } from "lucide-react";

const highlights = [
  { value: "24/7", label: "Always-on support for customers, leads, and internal teams" },
  { value: "3x", label: "Faster response times with guided answers and smart routing" },
  { value: "89%", label: "Of repetitive questions handled without a human handoff" },
];

const capabilities = [
  { title: "Lead qualification", description: "Capture context, score intent, and route high-value conversations to the right team.", icon: Users },
  { title: "Knowledge retrieval", description: "Answer product, service, and policy questions from curated content sources.", icon: BarChart2 },
  { title: "Human handoff", description: "Escalate with full conversation history so support starts with context, not repetition.", icon: GitMerge },
  { title: "Workflow automation", description: "Trigger follow-ups, create tickets, and capture CRM fields without leaving the chat.", icon: Zap },
];

const steps = [
  { title: "Discover", description: "Map customer intents, top questions, and the business outcomes the chatbot must support." },
  { title: "Design", description: "Shape the conversation flows, tone of voice, fallback paths, and escalation rules." },
  { title: "Deploy", description: "Launch on the website, connect tools, and measure performance from day one." },
];

const outcomes = [
  "Fewer repetitive tickets",
  "More qualified inbound leads",
  "Faster time to answer",
  "Better visibility into user intent",
];

// Curated Unsplash images (direct CDN URLs, no API key needed)
const IMAGES = {
  // Hero bg — soft workspace/desk flat lay
  heroBg: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1400&q=80&auto=format&fit=crop",
  // "Why it works" — person on laptop in bright workspace
  whyItWorks: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=900&q=80&auto=format&fit=crop",
  // Capabilities banner — abstract minimal shapes / UI feel
  capabilitiesBanner: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop",
  // CTA — team collaboration meeting
  ctaTeam: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80&auto=format&fit=crop",
  // Floating avatar — person portrait (friendly support rep feel)
  avatar1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop&crop=face",
  avatar2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format&fit=crop&crop=face",
};

export default function Page() {
  return (
    <main className="relative overflow-hidden  text-[#1a1a1a] mt-20" >

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative mx-auto flex w-full  flex-col container-premium">

        {/* Hero background image — faded into the warm parchment */}



        <div className="mt-8 grid flex-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#000]">
              <Sparkles className="h-4 w-4" />
              Conversational AI Experience
            </div>

            <h1 className="max-w-2xl text-4xl lg:text-5xl leading-[0.95] tracking-tight text-[#1a1a1a] " >
              A chatbot that feels like a premium product, not a widget.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5c5449] md:text-xl">
              Design an AI assistant that welcomes visitors, answers questions with clarity, and routes every conversation toward action. A polished, high-end conversational experience that converts.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#2d2d2d]"
              >
                Start a project
                <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-full border border-[#c9c0b2] bg-white/60 px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-white/90"
              >
                Explore features
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#ddd5c8] bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                  <div className="text-3xl  tracking-tight text-[#131313]" >{item.value}</div>
                  <p className="mt-2 text-sm leading-6 text-[#6b6256]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat card */}
          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#ddd5c8] bg-white/80 p-4 shadow-xl shadow-amber-900/10 backdrop-blur-xl md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(186,230,253,0.2),transparent_45%)]" />

              <div className="relative rounded-[1.5rem] border border-[#e8e0d5] bg-[#fafaf8] p-5 md:p-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#e8e0d5] pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#131313]">Live assistant</p>
                    <h2 className="mt-1 text-2xl  text-[#1a1a1a]" >MIRA AI Concierge</h2>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Online now
                  </div>
                </div>

                {/* Messages */}
                <div className="mt-5 space-y-4">
                  <div className="flex gap-3">
                    {/* Bot avatar with image */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl ring-2 ring-amber-200">
                      <img src={IMAGES.avatar1} alt="AI" className="h-full w-full object-cover" />
                    </div>
                    <div className="max-w-[85%] rounded-3xl rounded-tl-md border border-[#e2d9cc] bg-white px-4 py-3 text-sm leading-6 text-[#3d3730] shadow-sm">
                      Hi, I&apos;m your chatbot assistant. I can answer service questions, qualify leads, and hand off to a human when needed.
                    </div>
                  </div>

                  <div className="ml-auto flex max-w-[85%] justify-end gap-3">
                    <div className="rounded-3xl rounded-tr-md bg-[#1a1a1a] px-4 py-3 text-sm leading-6 font-medium text-white shadow-sm">
                      Can you help me choose the right service?
                    </div>
                    {/* User avatar */}
                    <div className="flex h-11 w-11 shrink-0 overflow-hidden rounded-2xl ring-2 ring-[#ddd5c8]">
                      <img src={IMAGES.avatar2} alt="User" className="h-full w-full object-cover" />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 ring-1 ring-sky-200">
                      <BrainCircuit className="h-5 w-5" />
                    </div>
                    <div className="max-w-[85%] rounded-3xl rounded-tl-md border border-[#e2d9cc] bg-white px-4 py-3 text-sm leading-6 text-[#3d3730] shadow-sm">
                      Absolutely. I&apos;ll ask a few quick questions, recommend the best fit, and connect you with the right team.
                    </div>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {outcomes.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#e2d9cc] bg-amber-50/60 px-4 py-3 text-sm text-[#5c5449]">
                      <MessageSquareText className="h-4 w-4 text-amber-600 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────────────────────── */}
      <section id="capabilities" className="relative  bg-white py-20 md:py-28">

        {/* Wide banner image at top of section */}
        <div className="mx-auto mb-16 container-premium">
          <div className="relative h-48 overflow-hidden rounded-[2rem] md:h-64">
            <img
              src={IMAGES.capabilitiesBanner}
              alt="AI technology visualization"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#131313]">Capabilities</p>
                <h2 className="mt-2 max-w-xl text-2xl  tracking-tight text-[#1a1a1a] md:text-4xl" >
                  Everything the assistant needs to answer, qualify, and convert.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1600px] px-6 md:px-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="text-base leading-8 text-[#5c5449] md:text-lg">
                A fully editorial, product-focused presentation with stronger contrast, refined card surfaces, and sharp typographic hierarchy.
              </p>

              {/* Steps card */}
              <div className="mt-8 rounded-3xl border border-[#ddd5c8] bg-[#faf8f5] p-6">
                <div className="flex items-center gap-3 text-[#000]">
                  <Workflow className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.24em]">Recommended flow</span>
                </div>
                <ol className="mt-5 space-y-4 text-[#5c5449]">
                  {steps.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border  bg-[#D6FD70] text-sm font-semibold text-[#000]">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#1a1a1a]">{step.title}</h3>
                        <p className="mt-1 text-sm leading-6">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Capability cards */}
            <div className="grid gap-5 md:grid-cols-2">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="group rounded-[1.75rem] border border-[#ddd5c8] bg-[#faf8f5] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D6FD70] text-[#131313] transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl  text-[#1a1a1a]" >{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#6b6256]">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ─────────────────────────────────────────────── */}
      <section className="relative border-t border-[#ddd5c8] bg-[#f5f3ee] py-20 md:py-28">
        <div className="mx-auto container-premium">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#131313]">Why it works</p>
              <h2 className="mt-4 text-3xl  tracking-tight text-[#1a1a1a] md:text-5xl">
                Clear conversation design. Stronger conversion. Less friction.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5c5449] md:text-lg">
                The chatbot experience is built to feel intentional on the page, with a premium visual system that supports the product story without changing the overall route layout.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Custom tone of voice", "CRM and ticketing integration", "Analytics-ready handoff paths", "Website and landing page fit"].map((item) => (
                  <span key={item} className="rounded-full border border-[#c9c0b2] bg-white px-4 py-2 text-sm text-[#5c5449] shadow-sm">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 rounded-[2rem] border border-[#ddd5c8] bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["1", "Discovery aligned to your business goals"],
                    ["2", "Scripted flows with intelligent fallbacks"],
                    ["3", "Rich UI that feels native to your brand"],
                    ["4", "Optimized for launches, updates, and scaling"],
                  ].map(([number, text]) => (
                    <div key={number} className="rounded-3xl border border-[#e8e0d5] bg-[#faf8f5] p-5">
                      <div className="text-2xl  text-[#131313]" >{number}</div>
                      <p className="mt-3 text-sm leading-6 text-[#5c5449]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image panel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-amber-900/10">
                <img
                  src={IMAGES.whyItWorks}
                  alt="Person working on a laptop in a bright modern workspace"
                  className="h-[520px] w-full object-cover object-center"
                />
                {/* Overlay card floating at the bottom */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/60 bg-white/90 p-5 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <img src={IMAGES.avatar1} alt="" className="h-9 w-9 rounded-full border-2 border-white object-cover" />
                      <img src={IMAGES.avatar2} alt="" className="h-9 w-9 rounded-full border-2 border-white object-cover" />
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#D6FD70] text-xs  text-[#000]">+12</div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1a1a1a]">Trusted by 200+ teams</p>
                      <p className="text-xs text-[#6b6256]">From startups to enterprise</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1 text-[#131313]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78z" /></svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -right-4 -top-4 rotate-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-2 text-xs  text-[#000] shadow-md">
                ✦ No-code setup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative border-t border-[#ddd5c8] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-200 shadow-xl shadow-amber-100/60">
            {/* Background image with overlay */}
            <img
              src={IMAGES.ctaTeam}
              alt="Team collaborating around a table"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fff8ed]/97 via-[#fff8ed]/90 to-[#fff8ed]/50" />
            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-amber-200/50" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-amber-200/40" />

            <div className="relative p-8 md:p-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#131313]">Next step</p>
                <h2 className="mt-4 text-3xl  tracking-tight text-[#1a1a1a] md:text-5xl" >
                  Turn your chatbot into a high-trust entry point for every visitor.
                </h2>
                <p className="mt-5 text-base leading-8 text-[#5c5449] md:text-lg">
                  If you want, I can also redesign the page with a brighter, more minimal look or make it match a specific brand direction.
                </p>
              </div>

              <div className="relative mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#2d2d2d]"
                >
                  Talk to us
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/ai-products"
                  className="inline-flex items-center gap-2 rounded-full border border-[#c9c0b2] bg-white px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#f5f3ee]"
                >
                  View more AI products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}