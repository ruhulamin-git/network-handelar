import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Box,
    ChevronRight,
    Code2,
    Globe,
    Layers3,
    PackageCheck,
    ShieldCheck,
    Sparkles,
    Truck,
    WalletCards,
} from "lucide-react";
import Image from "next/image";

const metrics = [
    { value: "43%", label: "Higher conversion with faster storefront interactions" },
    { value: "2.4x", label: "More reusable commerce logic across channels" },
    { value: "99.9%", label: "Reliable checkout and inventory-ready architecture" },
];

const capabilities = [
    {
        icon: Code2,
        title: "API-first storefronts",
        description: "Build flexible shopping experiences that connect cleanly to headless CMS, ERP, and payment systems.",
    },
    {
        icon: Layers3,
        title: "Composable commerce",
        description: "Swap in best-in-class services for catalog, search, promotions, and checkout without replatforming.",
    },
    {
        icon: WalletCards,
        title: "Checkout optimization",
        description: "Reduce friction with streamlined cart flows, conversion-focused UI, and clear purchase signals.",
    },
    {
        icon: ShieldCheck,
        title: "Secure operations",
        description: "Protect customer data, order traffic, and business logic with modern controls and clear boundaries.",
    },
];

const steps = [
    {
        title: "Discover",
        description: "Map catalog complexity, customer journeys, platform constraints, and channel priorities.",
    },
    {
        title: "Design",
        description: "Shape the storefront layout, product storytelling, checkout flow, and backend integration plan.",
    },
    {
        title: "Launch",
        description: "Deploy a commerce experience that scales across web, mobile, and campaign landing pages.",
    },
];

const useCases = [
    "DTC storefronts",
    "Marketplace experiences",
    "B2B ordering portals",
    "Subscription commerce",
    "International sales",
    "Campaign landing pages",
];

export default function Page() {
    return (
        <main className="relative overflow-hidden bg-[#f7f6f2] text-[#111827] mt-20">

<section className="relative overflow-hidden bg-white py-12">
  <div className="container-premium">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
          Modern Commerce Platform
        </span>

        <h1 className="mt-6 text-6xl  text-slate-900 leading-tight">
          Sell Everywhere.
          <span className="block text-sky-600">
            Manage Everything.
          </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
          Create fast, flexible shopping experiences powered by
          headless commerce architecture, centralized product data,
          and seamless customer journeys.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-200"
          >
            Get Started
          </Link>

          <Link
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-px hover:bg-slate-50"
          >
            Explore Features
          </Link>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/images/products/hero-ecommerce.jpg"
          alt="Commerce Dashboard"
          width={1200}
          height={900}
          className="rounded-[32px] shadow-2xl"
        />

        <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-6 shadow-xl">
          <p className="text-sm text-slate-500">Monthly Revenue</p>
          <h3 className="text-3xl font-bold text-slate-900">$284k</h3>
        </div>
      </div>

    </div>
  </div>
</section>

          <section
  id="capabilities"
  className="relative overflow-hidden bg-slate-50 py-24"
>
  <div className="mx-auto container-premium">

    {/* Heading */}
    <div className="max-w-3xl">
      <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
        Commerce Capabilities
      </span>

      <h2 className="mt-6 text-5xl  tracking-tight text-slate-900">
        Everything you need to build, sell, and scale.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Modern commerce architecture designed for performance,
        flexibility, and growth across every customer touchpoint.
      </p>
    </div>

    {/* Main Layout */}
    <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

      {/* Image Side */}
      <div className="relative">

        <div className="overflow-hidden rounded-[36px]">
          <Image
            src="/images/products/headless.jpg"
            alt="Commerce Platform"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>



      </div>

      {/* Content Side */}
      <div>

        <div className="space-y-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[28px] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex gap-5">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-sky-600">
                        0{index + 1}
                      </span>

                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Process Timeline */}
   

      </div>
      
    </div>
  </div>
</section>

            <section className="relative border-t border-slate-200 bg-[#f7f6f2] py-20 md:py-28">
                <div className="mx-auto max-w-[1600px] px-6 md:px-24">
                    <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700/80">Use cases</p>
                            <h2 className="mt-4 text-3xl  tracking-tight text-slate-950 md:text-5xl">
                                Built for brands that need commerce flexibility without compromise.
                            </h2>
                            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                                Headless commerce works best when marketing, product, and operations can move independently while sharing the same product and order backbone.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {useCases.map((item) => (
                                    <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    ["1", "Launch a storefront designed for speed and story"],
                                    ["2", "Keep product data centralized across all channels"],
                                    ["3", "Connect fulfillment, inventory, and promotions cleanly"],
                                    ["4", "Scale into new markets without rebuilding the stack"],
                                ].map(([number, text]) => (
                                    <div key={number} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                        <div className="text-2xl  text-sky-700">{number}</div>
                                        <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



      <section className="relative border-t border-[#ddd5c8] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-200 shadow-xl shadow-amber-100/60">
            {/* Background image with overlay */}

                <Image
             src="/images/products/headless-bg.jpeg"
              alt="Ecommerce Background"
                fill
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fff8ed]/97 via-[#fff8ed]/90 to-[#fff8ed]/50" />
            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-amber-200/50" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-amber-200/40" />

            <div className="relative p-8 md:p-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">Next step</p>
                <h2 className="mt-4 text-3xl  tracking-tight text-[#1a1a1a] md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                     Turn ecommerce into a flexible operating system for growth.
                </h2>
                <p className="mt-5 text-base leading-8 text-[#5c5449] md:text-lg">
                        Build faster storefronts, improve customer experiences,
          and scale your commerce infrastructure without limitations.
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