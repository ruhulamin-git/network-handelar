"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import {
  Building2,
  Clock3,
  Cookie,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  Scale,
  ShieldAlert,
  ShieldCheck,
  UserRound,
  Phone,
  ExternalLink,
  ChevronRight,
  Shield,
  Menu,
  X,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type PolicySection = {
  id: string;
  title: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  intro?: string;
  items: string[];
  outro?: string;
  subheads?: Array<{
    title: string;
    items: string[];
    outro: string;
  }>;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const policySections: PolicySection[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: FileText,
    intro: "We may collect the following types of information:",
    items: [
      "Personal Information: Name, email address, phone number, postal address, payment details (e.g., credit/debit card info), organization details.",
      "Non-Personal Information: Browser type, operating system, referring URLs, device type, location data, and other technical information.",
      "Usage Information: Details of how you use our services, such as page visits and interaction behavior.",
    ],
    outro:
      "If you submit a form, sign up for an event, donate, or otherwise engage with our services, you are voluntarily providing this information.",
  },
  {
    id: "how-we-use-your-information",
    title: "How We Use Your Information",
    icon: ShieldCheck,
    intro: "We use the information collected for the following purposes:",
    items: [
      "To provide and manage our services",
      "To process donations or event registrations",
      "To improve user experience and site functionality",
      "To send you relevant updates and communication",
      "For analytics, security, and compliance purposes",
      "To comply with applicable laws and legal obligations",
    ],
  },
  {
    id: "gmail-data-usage-and-google-api-compliance",
    title: "Gmail Data & Google API Compliance",
    icon: Globe2,
    items: [
      "Data accessed via Google APIs (including Gmail) is used solely to provide CRM-related functionality within our Gmail Add-on, such as contact management, activity logging, and task creation.",
      "We do not send, share, or process Gmail data with any AI or machine learning services, and Gmail data is never used for AI training or inference.",
      "All Google API data is handled in accordance with the Google API Services User Data Policy, including the Limited Use requirements.",
    ],
  },
  {
    id: "cookies-and-tracking-technologies",
    title: "Cookies & Tracking Technologies",
    icon: Cookie,
    intro: "We use cookies and similar technologies to:",
    items: [
      "Personalize content",
      "Analyze site traffic",
      "Improve your experience",
      "Deliver targeted advertisements",
    ],
  },
  {
    id: "information-sharing-and-disclosure",
    title: "Information Sharing & Disclosure",
    icon: ShieldAlert,
    intro: "We do not sell your personal data. We may share information with:",
    items: [
      "Trusted service providers who assist us in operations (e.g., payment processors, CRM, analytics tools), bound by confidentiality agreements.",
      "Legal authorities when required to comply with laws, regulations, or court orders.",
      "Affiliates and partners for internal use, improvement, and communication – always under strict privacy protections.",
    ],
    outro:
      "We do not share Google user data obtained via Google APIs with AI or machine learning service providers. Any AI-powered features offered in our products operate independently and rely only on user-provided, non-Google-API data.",
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: Clock3,
    items: [
      "We retain your data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. After that, your data is securely deleted or anonymized.",
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: LockKeyhole,
    items: [
      "We implement reasonable technical, physical, and organizational safeguards to protect your personal information from unauthorized access, loss, misuse, or alteration.",
      "Please note: No transmission of data over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: Scale,
    intro: "Depending on your location, you may have rights regarding your personal data:",
    items: [],
    subheads: [
      {
        title: "If you are a California resident (CCPA):",
        items: [
          "Right to know what personal information we collect",
          "Right to request deletion",
          "Right to opt out of the sale of personal information",
          "Right to non-discrimination for exercising your rights",
        ],
        outro: "To exercise these rights, contact us at info@networkhandlers.com",
      },
      {
        title: "If you are an EU/EEA resident (GDPR):",
        items: [
          "Right to access, correct, or delete your data",
          "Right to restrict or object to processing",
          "Right to data portability",
          "Right to withdraw consent at any time",
        ],
        outro: "To exercise GDPR rights, contact info@networkhandlers.com",
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    icon: UserRound,
    items: [
      "Our services are not directed to individuals under 13. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will delete it.",
    ],
  },
  {
    id: "external-links",
    title: "External Links",
    icon: ExternalLink,
    items: [
      "Our website may contain links to other websites. We are not responsible for the privacy practices or content of such third-party sites.",
    ],
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "Changes to This Privacy Policy",
    icon: FileText,
    items: [
      "We may update this policy occasionally to reflect changes in legal or operational requirements. We encourage you to review it periodically.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    icon: Building2,
    intro: "For any questions, complaints, or requests regarding your data:",
    items: [
      "Network Handlers",
      "https://www.networkhandlers.com/",
      "Email: info@networkhandlers.com",
      "Phone: (347) 227 2771",
    ],
  },
];

const sectionLinks = policySections.map(({ id, title }, i) => ({
  id,
  title,
  number: String(i + 1).padStart(2, "0"),
}));

// ─── Inline styles ────────────────────────────────────────────────────────────
const sidebarHeaderBg: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg,rgba(2,132,199,0.92) 0%,rgba(15,23,42,0.97) 100%), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const footerCardBg: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(135deg,rgba(15,23,42,0.96) 0%,rgba(2,132,199,0.88) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

// ─── Sidebar Nav (shared between drawer and desktop) ─────────────────────────
function SidebarNav({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <>
      {/* Image header */}
      <div className="px-6 py-7" style={sidebarHeaderBg}>
        <div className="flex items-center gap-3">
          <Shield size={18} className="text-sky-300" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-sky-200">
            Policy Sections
          </span>
        </div>
        <p className="mt-2.5 text-sm leading-6 text-slate-300">
          Jump to any section of the policy.
        </p>
      </div>

      {/* Nav links */}
      <nav className="divide-y divide-slate-100 px-3 py-2 overflow-y-auto max-h-[60vh] lg:max-h-none">
        {sectionLinks.map(({ id, title, number }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={onLinkClick}
            className="group flex items-center gap-3 rounded-xl border-l-2 border-transparent px-3 py-2.5 text-sm text-slate-600 transition-all duration-200 hover:border-l-sky-500 hover:bg-sky-50 hover:pl-4 hover:text-sky-700"
          >
            <span className="w-6 shrink-0 text-right text-[11px] font-black text-sky-400 transition-colors group-hover:text-sky-600">
              {number}
            </span>
            <span className="leading-5 text-[13px]">{title}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PrivacyPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <style>{`
      

        .privacy-page { font-family: 'DM Sans', sans-serif; }
        .privacy-heading { font-family: 'Syne', sans-serif; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .policy-card {
          animation: fadeSlideUp 0.45s ease both;
        }
        .policy-card:nth-child(1)  { animation-delay: 0.05s; }
        .policy-card:nth-child(2)  { animation-delay: 0.10s; }
        .policy-card:nth-child(3)  { animation-delay: 0.15s; }
        .policy-card:nth-child(4)  { animation-delay: 0.20s; }
        .policy-card:nth-child(5)  { animation-delay: 0.25s; }
        .policy-card:nth-child(6)  { animation-delay: 0.30s; }
        .policy-card:nth-child(7)  { animation-delay: 0.35s; }
        .policy-card:nth-child(8)  { animation-delay: 0.40s; }

        @keyframes drawerSlide {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        .drawer-open { animation: drawerSlide 0.28s cubic-bezier(0.32,1,0.6,1) both; }

        /* Smooth scroll */
        html { scroll-behavior: smooth; }
      `}</style>

      <div className="privacy-page text-slate-900 antialiased ">

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section
          className="relative flex items-center justify-center overflow-hidden min-h-[480px] sm:min-h-[540px] md:min-h-[600px] mt-20 overflow-hidden rounded-[24px] mx-3"
          style={{
            backgroundImage: "url('/images/privacy-policy.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 " />

          <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8 md:px-12 md:py-28 lg:py-36">

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md sm:px-5 sm:py-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-400 sm:h-6 sm:w-6">
                <LockKeyhole size={10} className="text-white sm:text-[12px]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white sm:text-[11px]">
                Privacy Policy
              </span>
            </div>

            {/* Eyebrow line */}
            <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8">
              <div className="h-px w-8 bg-sky-400 sm:w-10" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white sm:text-[11px]">
                Network Handlers
              </span>
              <div className="h-px w-8 bg-sky-400 sm:w-10" />
            </div>

            {/* Main heading */}
            <h1 className="privacy-heading mt-5 text-center text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Your Privacy
              <br />

            </h1>

            {/* Description */}
            <div className="mt-6 max-w-2xl space-y-3 text-center text-[14px] leading-7 text-white/85 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
              <p>
                The terms <em>&ldquo;We / Us / Our / Company&rdquo;</em> refer to Network Handlers;{" "}
                <em>&ldquo;You / Your / Yourself&rdquo;</em> refer to you, the user.
              </p>
              <p>
                This Policy describes how Network Handlers collects, uses, stores, shares, and
                protects your personal information. By using our services you agree to these terms.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            MOBILE "Jump to section" sticky bar
        ══════════════════════════════════════════ */}
        <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-md lg:hidden">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-sky-500" />
            <span className="text-[12px] font-bold uppercase tracking-widest text-slate-700">
              Privacy Policy
            </span>
          </div>
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-1.5 rounded-xl bg-sky-50 px-3 py-2 text-[12px] font-semibold text-sky-700 transition-colors hover:bg-sky-100 active:scale-95"
            aria-label="Open policy sections menu"
          >
            <Menu size={15} />
            <span>Sections</span>
          </button>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE DRAWER
        ══════════════════════════════════════════ */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />
            {/* Drawer panel */}
            <div className="drawer-open absolute left-0 top-0 bottom-0 w-[85vw] max-w-[320px] overflow-hidden rounded-r-3xl bg-white shadow-2xl flex flex-col">
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-700">
                  Jump to Section
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <SidebarNav onLinkClick={() => setDrawerOpen(false)} />
              </div>
              {/* Contact strip */}
              <div className="border-t border-slate-100 bg-sky-50 px-5 py-4 space-y-2.5">
                <a href="mailto:info@networkhandlers.com" className="flex items-center gap-2 text-[13px] text-sky-700 font-medium">
                  <Mail size={14} />
                  info@networkhandlers.com
                </a>
                <a href="tel:+13472272771" className="flex items-center gap-2 text-[13px] text-sky-700 font-medium">
                  <Phone size={14} />
                  (347) 227 2771
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════
            BODY
        ══════════════════════════════════════════ */}
        <section className="bg-slate-50 py-10 md:py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr]">

              {/* ── DESKTOP SIDEBAR ────────────────── */}
              <aside className="hidden lg:block h-fit space-y-5 lg:sticky lg:top-20">
                {/* Nav card */}
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                  <SidebarNav />
                </div>

                {/* Contact card */}
                <div className="rounded-3xl bg-gradient-to-br from-sky-500 to-sky-700 p-6 text-white shadow-lg shadow-sky-300/25">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-100">
                    Get in Touch
                  </p>
                  <div className="mt-4 space-y-3">
                    <a
                      href="mailto:info@networkhandlers.com"
                      className="flex items-center gap-2.5 text-sm text-sky-50 transition-colors hover:text-white"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                        <Mail size={13} />
                      </span>
                      info@networkhandlers.com
                    </a>
                    <a
                      href="tel:+13472272771"
                      className="flex items-center gap-2.5 text-sm text-sky-50 transition-colors hover:text-white"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                        <Phone size={13} />
                      </span>
                      (347) 227 2771
                    </a>
                  </div>
                </div>
              </aside>

              {/* ── POLICY CARDS ─────────────────────── */}
              <div className="space-y-4 sm:space-y-5">
                {policySections.map((section, index) => {
                  const Icon = section.icon;
                  const num = String(index + 1).padStart(2, "0");

                  return (
                    <article
                      id={section.id}
                      key={section.id}
                      className="policy-card scroll-mt-20 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/60"
                    >
                      {/* Top accent bar */}
                      <div className="h-1 w-full bg-gradient-to-r from-sky-400 via-sky-500 to-transparent" />

                      <div className="p-5 sm:p-7 md:p-8 lg:p-9">

                        {/* Card header */}
                        <div className="flex items-start gap-3 sm:gap-4">
                          {/* Icon */}
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 ring-1 ring-sky-200">
                            <Icon size={18} className="text-sky-600 sm:text-[20px]" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
                                {num}
                              </span>
                              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                              <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-sky-600 ring-1 ring-sky-100 whitespace-nowrap">
                                Section {index + 1}
                              </span>
                            </div>
                            <h2 className="privacy-heading mt-1 text-xl font-black  leading-snug tracking-tight text-slate-900 sm:text-2xl md:text-[1.6rem]">
                              {section.title}
                            </h2>
                          </div>
                        </div>

                        {/* Card body — full width on mobile (no indent), indented on sm+ */}
                        <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4 sm:pl-14 lg:pl-16">

                          {section.intro && (
                            <p className="text-[14px] leading-7 text-slate-500 sm:text-[15px] sm:leading-8">
                              {section.intro}
                            </p>
                          )}

                          {section.items.length > 0 && (
                            <div className="space-y-2">
                              {section.items.map((item, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 sm:px-5 sm:py-3.5 transition-colors hover:border-sky-100 hover:bg-sky-50/40"
                                >
                                  <ChevronRight size={14} className="mt-0.5 sm:mt-1 shrink-0 text-sky-500" />
                                  <p className="text-[13px] leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                                    {item}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.outro && (
                            <div className="flex gap-3 rounded-xl sm:rounded-2xl border border-sky-100 bg-sky-50/60 px-4 py-3.5 sm:px-5 sm:py-4">
                              <div className="mt-1 h-4 w-0.5 shrink-0 rounded-full bg-sky-400" />
                              <p className="text-[13px] italic leading-6 text-slate-500 sm:text-[14px] sm:leading-7">
                                {section.outro}
                              </p>
                            </div>
                          )}

                          {section.subheads && (
                            <div className="space-y-3 sm:space-y-4 pt-1">
                              {section.subheads.map((sub) => (
                                <div key={sub.title} className="overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200">
                                  <div className="flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-slate-50 to-sky-50 px-4 sm:px-5 py-3 sm:py-3.5">
                                    <div className="h-0.5 w-4 sm:w-5 rounded-full bg-sky-400 shrink-0" />
                                    <h3 className="text-[13px] sm:text-sm font-bold text-slate-800">{sub.title}</h3>
                                  </div>
                                  <div className="divide-y divide-slate-100 bg-white">
                                    {sub.items.map((item, i) => (
                                      <div key={i} className="flex items-start gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3">
                                        <ChevronRight size={13} className="mt-0.5 shrink-0 text-sky-400" />
                                        <p className="text-[13px] sm:text-[14px] leading-6 text-slate-600">{item}</p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="border-t border-slate-100 bg-sky-50/50 px-4 sm:px-5 py-2.5 sm:py-3">
                                    <p className="text-[12px] sm:text-[13px] italic text-slate-500">{sub.outro}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                        </div>
                      </div>
                    </article>
                  );
                })}

                {/* ── Summary cards ── */}
                <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                  {[
                    {
                      label: "Google API Compliance",
                      body: "All Google API data is handled strictly in accordance with the Google API Services User Data Policy, including all Limited Use requirements.",
                      icon: Globe2,
                    },
                    {
                      label: "Your Data Promise",
                      body: "We do not sell your personal data and never share Google user data with AI or machine learning service providers.",
                      icon: Shield,
                    },
                  ].map(({ label, body, icon: Icon }) => (
                    <div
                      key={label}
                      className="rounded-2xl sm:rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-5 sm:p-7 shadow-sm transition-all duration-200 hover:shadow-md hover:shadow-sky-100/50"
                    >
                      <div className="mb-3 sm:mb-4 flex items-center gap-3">
                        <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-sky-100">
                          <Icon size={15} className="text-sky-600 sm:text-[16px]" />
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-sky-700">
                          {label}
                        </span>
                      </div>
                      <p className="text-[13px] sm:text-sm leading-6 sm:leading-7 text-slate-500">{body}</p>
                    </div>
                  ))}
                </div>

                {/* ── Footer contact card ── */}
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl text-white shadow-2xl" style={footerCardBg}>
                  <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-10">

                    <div className="mb-6 sm:mb-8 flex items-center gap-3">
                      <div className="h-px w-7 sm:w-8 bg-sky-400" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-300">
                        Privacy Contact
                      </span>
                    </div>

                    <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                      <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/10 p-4 sm:p-6 backdrop-blur-sm">
                        <p className="mb-3 sm:mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-sky-300">
                          Network Handlers
                        </p>
                        <div className="space-y-2.5 sm:space-y-3 text-[13px] sm:text-sm text-slate-200">
                          <a href="https://www.networkhandlers.com/" className="flex items-center gap-2 sm:gap-2.5 transition-colors hover:text-sky-300">
                            <ExternalLink size={13} className="shrink-0" />
                            networkhandlers.com
                          </a>
                          <a href="mailto:info@networkhandlers.com" className="flex items-center gap-2 sm:gap-2.5 transition-colors hover:text-sky-300">
                            <Mail size={13} className="shrink-0" />
                            info@networkhandlers.com
                          </a>
                          <a href="tel:+13472272771" className="flex items-center gap-2 sm:gap-2.5 transition-colors hover:text-sky-300">
                            <Phone size={13} className="shrink-0" />
                            (347) 227 2771
                          </a>
                        </div>
                      </div>

                      <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/10 p-4 sm:p-6 backdrop-blur-sm">
                        <p className="mb-3 sm:mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-sky-300">
                          Key Commitments
                        </p>
                        <ul className="space-y-2.5 sm:space-y-3 text-[13px] sm:text-sm leading-6 sm:leading-7 text-slate-200">
                          {[
                            "We do not sell your personal data.",
                            "Google user data is never shared with AI providers.",
                            "Policy may be updated to reflect legal changes.",
                          ].map((c, i) => (
                            <li key={i} className="flex items-start gap-2 sm:gap-2.5">
                              <ChevronRight size={13} className="mt-0.5 shrink-0 text-sky-400" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 sm:mt-6 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3 sm:py-4 text-[11px] sm:text-xs leading-5 sm:leading-6 text-slate-400">
                      This policy was last reviewed and may be updated periodically. Please
                      check back regularly for the most current version.
                    </div>
                  </div>
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