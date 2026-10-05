"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Cookie,
  ChevronRight,
  ExternalLink,
  Globe2,
  Mail,
  Menu,
  Phone,
  Shield,
  ShieldCheck,
  X,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const cookieRows = [
  {
    category: "Essential Website Cookies",
    description:
      "These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.",
  },
  {
    category: "Performance and Functionality Cookies",
    description:
      "These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.",
  },
  {
    category: "Analytics and Customization Cookies",
    description:
      "These cookies collect information used in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.",
  },
  {
    category: "Advertising Cookies",
    description:
      "These cookies are used to make advertising messages more relevant to you — preventing the same ad from reappearing and in some cases selecting ads based on your interests.",
  },
];

const usageItems = [
  {
    label: "Ensure proper functioning of our Website:",
    text: "This includes maintaining the security of our forms and other interactive elements.",
  },
  {
    label: "Analyze and improve our services:",
    text: "We use analytics cookies to understand which of our services are most popular and how we can improve them.",
  },
  {
    label: "Personalize your experience:",
    text: "We may use cookies to remember your preferences and provide you with more relevant content.",
  },
  {
    label: "Marketing and advertising:",
    text: "We may use cookies to deliver targeted advertising for our services on other websites you visit.",
  },
  {
    label: "Client Projects:",
    text: "For client projects showcased on our website, any cookie use in those applications is governed by the respective client's cookie policy.",
  },
];

const cookieSections = [
  {
    id: "what-are-cookies",
    title: "What are cookies?",
    icon: Globe2,
    intro:
      "Cookies are small data files placed on your device when you visit a website. They help websites work more efficiently and provide reporting information.",
    items: [
      "First-party cookies are set by Network Handlers.",
      "Third-party cookies are set by other providers that enable analytics, advertising, or embedded features.",
      "Those providers may recognize your device both on our website and on other sites they support.",
    ],
  },
  {
    id: "why-do-we-use-cookies",
    title: "Why do we use cookies?",
    icon: ShieldCheck,
    intro:
      "We use first-party and third-party cookies for technical, analytical, and marketing purposes.",
    items: [
      "Essential cookies keep the website and forms secure and functional.",
      "Performance cookies help us understand what content and services matter most.",
      "Advertising cookies help us make promotional messaging more relevant.",
    ],
  },
  {
    id: "category-of-cookie",
    title: "Category of Cookie",
    icon: Cookie,
    intro:
      "The table below summarizes the main cookie categories we may use on the website.",
    items: cookieRows.map((row) => `${row.category}: ${row.description}`),
  },
  {
    id: "how-we-use-cookies-on-our-website",
    title: "How We Use Cookies on Our Website",
    icon: Shield,
    intro:
      "Given the nature of our services, we use cookies to support security, analytics, personalization, and advertising.",
    items: usageItems.map((item) => `${item.label} ${item.text}`),
  },
  {
    id: "your-choices-regarding-cookies",
    title: "Your Choices Regarding Cookies",
    icon: ExternalLink,
    intro:
      "You can accept or reject cookies through your browser settings and most advertising networks also offer opt-out tools.",
    items: [
      "If you reject cookies, some features or areas of the website may be limited.",
      "Browser controls vary, so check your browser help menu for the exact steps.",
      "You can also explore industry opt-out tools such as aboutads.info and youronlinechoices.com.",
    ],
  },
  {
    id: "how-often-will-you-update-this-cookie-policy",
    title: "How often will you update this Cookie Policy?",
    icon: Clock3,
    intro:
      "We may update this Cookie Policy from time to time for operational, legal, or regulatory reasons.",
    items: [
      "Please revisit this page regularly to stay informed about our use of cookies.",
      "The date at the top of the policy indicates when it was last updated.",
    ],
  },
  {
    id: "where-can-i-get-further-information",
    title: "Where can I get further information?",
    icon: Mail,
    intro:
      "If you have any questions about our use of cookies or other technologies, contact us directly.",
    items: ["Email: info@networkhandlers.com", "Phone: (347) 227 2771"],
  },
];

const sectionLinks = cookieSections.map(({ id, title }, index) => ({
  id,
  title,
  number: String(index + 1).padStart(2, "0"),
}));

const heroBg: CSSProperties = {
  backgroundImage: "url('/images/privacy-policy.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

// ─── Sidebar Nav (shared) ─────────────────────────────────────────────────────
function SidebarNav({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-6 border-b border-slate-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-8 bg-cyan-500" />
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-700">
            Sections
          </span>
        </div>
        <p className="text-[13px] leading-6 text-slate-500 mt-2">
          Navigate the cookie policy by section.
        </p>
      </div>

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1.5 max-h-[55vh] lg:max-h-none">
        {sectionLinks.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={onLinkClick}
            className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-[13px] font-medium text-slate-700 transition-all hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-slate-950 active:scale-[0.98]"
          >
            <span className="w-6 shrink-0 text-right text-[11px] font-black text-cyan-500 group-hover:text-cyan-700">
              {item.number}
            </span>
            <span className="leading-5">{item.title}</span>
          </a>
        ))}
      </nav>

      {/* Contact block */}
      <div className="mx-4 mb-4 mt-2 rounded-2xl bg-slate-950 p-5 text-white">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300 mb-3">
          Contact
        </div>
        <div className="space-y-2.5 text-[13px] leading-6 text-slate-300">
          <a
            href="mailto:info@networkhandlers.com"
            className="flex items-center gap-2.5 hover:text-cyan-300 transition-colors"
          >
            <Mail size={13} className="text-cyan-400 shrink-0" />
            info@networkhandlers.com
          </a>
          <a
            href="tel:+13472272771"
            className="flex items-center gap-2.5 hover:text-cyan-300 transition-colors"
          >
            <Phone size={13} className="text-cyan-400 shrink-0" />
            (347) 227 2771
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CookiesPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <style>{`
       

        .cookies-page   { font-family: 'DM Sans', sans-serif; }
        .cookies-heading { font-family: 'Syne', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cookie-card {
          animation: fadeUp 0.5s ease both;
        }
        .cookie-card:nth-child(1) { animation-delay: 0.04s; }
        .cookie-card:nth-child(2) { animation-delay: 0.08s; }
        .cookie-card:nth-child(3) { animation-delay: 0.12s; }
        .cookie-card:nth-child(4) { animation-delay: 0.16s; }
        .cookie-card:nth-child(5) { animation-delay: 0.20s; }
        .cookie-card:nth-child(6) { animation-delay: 0.24s; }
        .cookie-card:nth-child(7) { animation-delay: 0.28s; }

        @keyframes drawerSlide {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        .drawer-slide { animation: drawerSlide 0.26s cubic-bezier(0.32,1,0.6,1) both; }

        html { scroll-behavior: smooth; }
      `}</style>

      <div className="cookies-page text-slate-900 antialiased">

        {/* ══════════════════════════════════
            HERO
        ══════════════════════════════════ */}
        <section
          className="relative flex items-center justify-center overflow-hidden bg-slate-950 text-white min-h-[460px] sm:min-h-[520px] md:min-h-[580px] mt-20 overflow-hidden rounded-[24px] mx-3"
          style={heroBg}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 " />

          <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-28">

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border text-white border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-200 backdrop-blur-md sm:px-5 sm:py-2.5 sm:text-[11px]">
              <Cookie size={13} className="sm:text-[14px]" />
              <span>Cookies &amp; Preferences</span>
            </div>

            {/* Eyebrow */}
            <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8">
              <div className="h-px w-8 bg-cyan-400 sm:w-10" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white sm:text-[11px]">
                Network Handlers
              </span>
              <div className="h-px w-8 bg-cyan-400 sm:w-10" />
            </div>

            {/* Heading */}
            <h1 className="cookies-heading mt-5 text-center text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Cookie Policy
            </h1>

            {/* Description */}
            <div className="mt-6 max-w-3xl space-y-4 text-center text-[14px] leading-7 text-white/85 sm:mt-8 sm:text-base sm:leading-8 md:text-lg md:leading-9">
              <p>
                We use cookies to keep the website fast, understand what content matters,
                and let you manage preferences in a clear way.
              </p>
              <p>
                This Cookie Policy explains how Network Handlers uses cookies and similar
                technologies to recognize you when you visit our website and how you can
                control them.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            MOBILE STICKY BAR
        ══════════════════════════════════ */}
        <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-md lg:hidden">
          <div className="flex items-center gap-2">
            <Cookie size={15} className="text-cyan-500" />
            <span className="rivacy-heading mt-5 text-center text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Cookie Policy
            </span>
          </div>
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-1.5 rounded-xl bg-cyan-50 px-3 py-2 text-[12px] font-semibold text-cyan-700 transition-colors hover:bg-cyan-100 active:scale-95"
            aria-label="Open sections menu"
          >
            <Menu size={14} />
            <span>Sections</span>
          </button>
        </div>

        {/* ══════════════════════════════════
            MOBILE DRAWER
        ══════════════════════════════════ */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />
            {/* Drawer */}
            <div className="drawer-slide absolute left-0 top-0 bottom-0 w-[85vw] max-w-[320px] overflow-hidden rounded-r-3xl bg-white shadow-2xl flex flex-col">
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-2">
                  <Cookie size={15} className="text-cyan-500" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-700">
                    Sections
                  </span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={15} />
                </button>
              </div>
              <SidebarNav onLinkClick={() => setDrawerOpen(false)} />
            </div>
          </div>
        )}

        {/* ══════════════════════════════════
            BODY
        ══════════════════════════════════ */}
        <section className="bg-white py-10 md:py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr]">

              {/* ── DESKTOP SIDEBAR ──────────────── */}
              <aside className="hidden lg:flex flex-col h-fit rounded-[2rem] border border-slate-200 bg-white shadow-[0_22px_60px_-40px_rgba(15,23,42,0.22)] lg:sticky lg:top-24 overflow-hidden">
                <SidebarNav />
              </aside>

              {/* ── POLICY CARDS ─────────────────── */}
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">

                {cookieSections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <article
                      id={section.id}
                      key={section.id}
                      className="cookie-card scroll-mt-20 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/60"
                    >
                      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-transparent" />

                      <div className="p-5 sm:p-7 md:p-8 lg:p-9">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 ring-1 ring-cyan-200">
                            <Icon size={18} className="text-cyan-600 sm:text-[20px]" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <span className="bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                              <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-cyan-600 ring-1 ring-cyan-100 whitespace-nowrap">
                                Section {index + 1}
                              </span>
                            </div>

                            <h2 className="cookies-heading mt-1 text-xl font-black leading-snug tracking-tight text-slate-900 sm:text-2xl md:text-[1.6rem]">
                              {section.title}
                            </h2>
                          </div>
                        </div>

                        <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4 sm:pl-14 lg:pl-16">
                          {section.intro && (
                            <p className="text-[14px] leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                              {section.intro}
                            </p>
                          )}

                          {section.items.length > 0 && (
                            <div className="space-y-2">
                              {section.items.map((item, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 sm:px-5 sm:py-3.5 transition-colors hover:border-cyan-100 hover:bg-cyan-50/40"
                                >
                                  <span className="mt-0.5 shrink-0 text-cyan-500">
                                    <ChevronRight size={14} className="sm:text-[15px]" />
                                  </span>
                                  <p className="text-[13px] leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                                    {item}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}

                {/* ── Extra cards (Browser + Updates) ── */}
                <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                  {/* Browser control */}
                  <article className="rounded-2xl sm:rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-7 transition-all hover:-translate-y-0.5 hover:border-cyan-200">
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                      <div className="h-px w-7 sm:w-8 bg-cyan-500" />
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-cyan-700">
                        Browser Control
                      </span>
                    </div>
                    <h3 className="cookies-heading text-lg sm:text-xl font-black tracking-tight text-slate-950 mb-3 sm:mb-4">
                      Your Choices Regarding Cookies
                    </h3>
                    <p className="text-[13px] sm:text-[15px] leading-6 sm:leading-7 text-slate-600 mb-3">
                      You can accept or reject cookies through your browser settings. If you
                      reject cookies, some features or areas of the website may be limited.
                    </p>
                    <p className="text-[13px] sm:text-[15px] leading-6 sm:leading-7 text-slate-600">
                      For advertising opt-outs, visit{" "}
                      <a href="http://www.aboutads.info/choices/" className="text-cyan-700 hover:underline font-medium">
                        aboutads.info/choices
                      </a>{" "}
                      or{" "}
                      <a href="http://www.youronlinechoices.com" className="text-cyan-700 hover:underline font-medium">
                        youronlinechoices.com
                      </a>.
                    </p>
                  </article>

                  {/* Updates */}
                  <article className="rounded-2xl sm:rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-7 transition-all hover:-translate-y-0.5 hover:border-cyan-200">
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                      <div className="h-px w-7 sm:w-8 bg-cyan-500" />
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-cyan-700">
                        Updates
                      </span>
                    </div>
                    <h3 className="cookies-heading text-lg sm:text-xl font-black tracking-tight text-slate-950 mb-3 sm:mb-4">
                      How often will you update this Cookie Policy?
                    </h3>
                    <p className="text-[13px] sm:text-[15px] leading-6 sm:leading-7 text-slate-600">
                      We may update this Cookie Policy from time to time for operational,
                      legal, or regulatory reasons. Please revisit this page regularly to stay
                      informed.
                    </p>
                  </article>
                </div>

                {/* ── Dark footer card ── */}
                <article className="rounded-2xl sm:rounded-[1.75rem] bg-slate-950 p-6 sm:p-8 md:p-10 text-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.45)]">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                    <div className="h-px w-7 sm:w-8 bg-cyan-400" />
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                      Further Information
                    </span>
                  </div>

                  <h3 className="cookies-heading text-lg sm:text-xl font-black tracking-tight text-white mb-3 sm:mb-4">
                    Where can I get further information?
                  </h3>
                  <p className="text-[13px] sm:text-[15px] leading-6 sm:leading-7 text-slate-300 mb-6 sm:mb-8">
                    If you have any questions about our use of cookies or other technologies,
                    please email us at{" "}
                    <a href="mailto:info@networkhandlers.com" className="text-cyan-300 hover:underline font-medium">
                      info@networkhandlers.com
                    </a>.
                  </p>

                  {/* Info cards — 1 col on mobile, 3 col on md+ */}
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                    {[
                      { label: "Policy Owner", value: "Network Handlers" },
                      { label: "Website", value: "networkhandlers.com" },
                      { label: "Contact", value: "info@networkhandlers.com" },
                    ].map(({ label, value }) => (
                      <div key={label} className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                        <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-cyan-200 mb-2 sm:mb-3">
                          {label}
                        </div>
                        <div className="text-[13px] sm:text-sm leading-5 sm:leading-6 text-slate-200 break-words">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                {/* ── Link pills ── */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  <a
                    href="https://www.networkhandlers.com/"
                    className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] sm:text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-200 hover:bg-cyan-50 hover:text-slate-950 active:scale-[0.97]"
                  >
                    Visit website
                    <ArrowUpRight size={13} />
                  </a>
                  <a
                    href="mailto:info@networkhandlers.com"
                    className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] sm:text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-200 hover:bg-cyan-50 hover:text-slate-950 active:scale-[0.97]"
                  >
                    Email us
                    <ArrowUpRight size={13} />
                  </a>
                  <a
                    href="tel:+13472272771"
                    className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] sm:text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-200 hover:bg-cyan-50 hover:text-slate-950 active:scale-[0.97]"
                  >
                    Call us
                    <ArrowUpRight size={13} />
                  </a>
                </div>

              </div>
              {/* end cards column */}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}