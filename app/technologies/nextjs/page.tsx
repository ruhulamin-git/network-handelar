"use client";

import { useRef } from "react";
import { 
  Search, 
  RefreshCw, 
  Server, 
  Image as ImageIcon, 
  Layers, 
  Globe
} from "lucide-react";

import TechHero from "@/components/technology/TechHero";
import TechCapabilities from "@/components/technology/TechCapabilities";
import TechTelemetry from "@/components/technology/TechTelemetry";
import TechCaseStudies from "@/components/technology/TechCaseStudies";
import TechServices from "@/components/technology/TechServices";
import TechPipeline from "@/components/technology/TechPipeline";
import TechCodeQuality from "@/components/technology/TechCodeQuality";
import TechCTA from "@/components/technology/TechCTA";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";

export default function NextjsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  usePageRevealAnimations(containerRef, {
    hero: ".tech-hero-reveal",
    sections: [
      { selector: ".tech-capabilities-reveal", y: 50, duration: 0.8, start: "top 85%" },
      { selector: ".tech-telemetry-reveal", y: 50, duration: 0.8, start: "top 85%" },
      { selector: ".tech-case-studies-reveal", y: 50, duration: 0.8, start: "top 85%" },
      { selector: ".tech-services-reveal", y: 50, duration: 0.8, start: "top 85%" },
      { selector: ".tech-pipeline-reveal", y: 50, duration: 0.8, start: "top 85%" },
      { selector: ".tech-code-quality-reveal", y: 50, duration: 0.8, start: "top 85%" },
      { selector: ".tech-cta-reveal", y: 50, duration: 0.8, start: "top 85%" },
    ],
  });

  const capabilities = [
    {
      icon: Layers,
      title: "Hybrid Rendering Flexibility",
      description: "Supports Static Site Generation (SSG), Server-Side Rendering (SSR), and Incremental Static Regeneration (ISR) to optimize content delivery based on specific product requirements.",
      metric: "3",
      metricLabel: "Render strategies"
    },
    {
      icon: Search,
      title: "Built-in SEO Optimization",
      description: "Renders pages server-side for faster indexing and crawlers, guaranteeing maximum visibility and ranking potential on Google.",
      metric: "99.8",
      metricLabel: "Lighthouse score"
    },
    {
      icon: RefreshCw,
      title: "Fast Refresh & Dx",
      description: "Accelerates development speed with instant, loss-free state hot reloading, keeping codebase clean and iteration times short.",
      metric: "<50ms",
      metricLabel: "HMR latency"
    },
    {
      icon: Server,
      title: "API Routes & Integration",
      description: "Build full-stack applications with serverless endpoints and secure API routes directly in the same codebase.",
      metric: "∞",
      metricLabel: "Serverless routes"
    },
    {
      icon: ImageIcon,
      title: "Built-in Performance Tuning",
      description: "Automatic image optimization, modern format conversion, lazy loading, and script optimizations out of the box.",
      metric: "AVIF",
      metricLabel: "Auto format"
    },
    {
      icon: Globe,
      title: "Edge & CDN-Ready Architecture",
      description: "Deploys to global edge networks (like Vercel and AWS) for low-latency delivery and zero-config caching.",
      metric: "310+",
      metricLabel: "Edge locations"
    }
  ];

  const projects = [
    {
      title: "Valinor",
      subtitle: "Conversational Storytelling AI",
      description: "A private story recording web app that preserves family history using conversational AI, supporting voice notes, images, and timelines.",
      tags: ["Conversational AI", "Edge Rendering", "Tailwind CSS"],
      metrics: "40% Faster Story Load"
    },
    {
      title: "Mtiply",
      subtitle: "AI Menu Management System",
      description: "A smart administrative tool for virtual kitchens and restaurant groups that leverages AI to generate menus, track ingredients, and update prices.",
      tags: ["AI Orchestration", "Serverless Endpoints", "MongoDB"],
      metrics: "Instant Updates (ISR)"
    },
    {
      title: "DrHR",
      subtitle: "Next-Gen AI HRMS Platform",
      description: "A secure, enterprise-ready HR system automating payroll, onboarding, and reviews, featuring role-based dashboards.",
      tags: ["Next.js SSR", "JWT Auth", "PostgreSQL"],
      metrics: "99.9% Core Web Vitals"
    }
  ];

  const services = [
    {
      title: "Next.js Web App Development",
      description: "Bespoke, complex web application development utilizing component architecture for long-term scalability and robust functionality.",
      status: "Production",
      metrics: [
        { value: "SSG+SSR", label: "Rendering" },
        { value: "99.9%", label: "Uptime" }
      ]
    },
    {
      title: "Custom Next.js Web Development",
      description: "Tailored customer-facing websites, SaaS portals, and marketing platforms optimized for premium speed and SEO performance.",
      status: "Active",
      metrics: [
        { value: "99.8", label: "Lighthouse" },
        { value: "#1", label: "PageRank" }
      ]
    },
    {
      title: "Next.js Consulting & Audits",
      description: "Deep architecture review, performance bottleneck diagnostics, and roadmap planning by our senior Next.js engineers.",
      status: "On-demand",
      metrics: [
        { value: "60+", label: "Audits/yr" },
        { value: "3.5x", label: "Perf gain" }
      ]
    },
    {
      title: "Headless CMS Integration",
      description: "Connecting Next.js frontend to modern headless platforms like Contentful, Strapi, or Sanity for dynamic content control.",
      status: "Active",
      metrics: [
        { value: "5+", label: "CMS platforms" },
        { value: "ISR", label: "Revalidation" }
      ]
    },
    {
      title: "Migration & Legacy Upgrades",
      description: "Seamless migration of older React or legacy codebases to modern Next.js versions with zero downtime and preserved SEO authority.",
      status: "Active",
      metrics: [
        { value: "0", label: "Downtime" },
        { value: "100%", label: "SEO preserved" }
      ]
    },
    {
      title: "Deployment & Infrastructure Setup",
      description: "DevOps automation and CI/CD setup on platforms like Vercel and AWS, utilizing edge network optimization.",
      status: "Continuous",
      metrics: [
        { value: "310+", label: "Edge nodes" },
        { value: "<3s", label: "Deploy time" }
      ]
    }
  ];

  const pipelineSteps = [
    {
      num: "01",
      title: "Discovery & Planning",
      description: "Analyze SEO targets, content flows, page complexity, and dynamic API endpoints to structure your architecture."
    },
    {
      num: "02",
      title: "Component Engineering",
      description: "Build semantic React layouts structured in atomic component folders. Leverage CSS frameworks for responsive visual states."
    },
    {
      num: "03",
      title: "SSR & Edge Tuning",
      description: "Fine-tune hydration hooks, configure Incremental Static Regeneration (ISR), map redirects, and deploy to Vercel/AWS edges."
    }
  ];

  const telemetryEndpoints = [
    { route: "/", render: "SSG (Static)", reqs: "1.4M / min", p99: "12ms", status: "Healthy" },
    { route: "/api/chat", render: "Edge (Dynamic)", reqs: "840K / min", p99: "38ms", status: "Healthy" },
    { route: "/case-study/[slug]", render: "ISR (Revalidated)", reqs: "420K / min", p99: "22ms", status: "Healthy" },
    { route: "/admin/dashboard", render: "SSR (Server-Side)", reqs: "120K / min", p99: "110ms", status: "Healthy" }
  ];

  const nextjsConfigSnippet = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cdn.jsdelivr.net',
    }]
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;`;

  return (
    <div ref={containerRef} className="bg-white text-zinc-900 mt-20">
      <div className="tech-hero-reveal">
        <TechHero 
          eyebrow="v16.2.5 — Turbopack & App Router"
          titlePrefix="Optimized SEO web pages"
          titleHighlight="built with Next.js."
          description="We build blazing fast, search-optimized web experiences with server-side generation, edge routing, and automated cache tags."
        />
      </div>
      
      <div className="tech-capabilities-reveal">
        <TechCapabilities 
          eyebrow="Architecture"
          title="Six pillars of production performance"
          description="Next.js provides the foundations for fast user journeys. We engineer reusable component libraries and serverless data layers."
          capabilities={capabilities}
        />
      </div>

      <div className="tech-telemetry-reveal">
        <TechTelemetry 
          eyebrow="Platform Metrics"
          title="Lighthouse & Core Web Vitals"
          description="Real-time telemetry across all customer endpoints. We optimize dynamic queries and statically compile files to maintain fast p99 times."
          stats={[
            { label: "Build Time", value: "3.3s", change: "↓ 0.5s improvement" },
            { label: "p99 Latency", value: "38ms", change: "↓ 4ms latency reduction" },
            { label: "Lighthouse Score", value: "99.8", change: "Passing Core Web Vitals" },
            { label: "Vercel Edge Health", value: "99.99%", change: "0 failed requests" }
          ]}
          endpoints={telemetryEndpoints}
          logFilename="edge-router-telemetry.log"
        />
      </div>

      <div className="tech-case-studies-reveal">
        <TechCaseStudies 
          eyebrow="Featured Work"
          title="Next.js Experiences Our Clients Vouch For"
          description="Explore how we translate robust code into successful real-world digital products."
          projects={projects}
        />
      </div>

      <div className="tech-services-reveal">
        <TechServices 
          eyebrow="Services"
          title="Next.js Services We Provide"
          description="End-to-end frontend engineering, design systems, serverless architecture, and long-term optimization."
          services={services}
        />
      </div>

      <div className="tech-pipeline-reveal">
        <TechPipeline 
          eyebrow="Deployment Pipeline"
          title="How it works from discovery to edge"
          description="We leverage custom CI/CD automation and test pipelines to deploy fast frontends with zero downtime."
          steps={pipelineSteps}
        />
      </div>

      <div className="tech-code-quality-reveal">
        <TechCodeQuality 
          eyebrow="Enterprise Standards"
          title="Code Quality & Security: Our Twin Pillars"
          description="Known for delivering high-performance platforms, we bake test-driven quality and security checks into every level of our Next.js code."
          bulletPoints={[
            "GDPR, HIPAA, and PCI-DSS compliance frameworks.",
            "Component-driven layout architecture (DRY principles).",
            "Automated testing pipeline (Jest, Cypress) with high coverage.",
            "Peer code review audits and strict static code linting."
          ]}
          codeSnippet={nextjsConfigSnippet}
          filename="next.config.mjs"
        />
      </div>

      <div className="tech-cta-reveal">
        <TechCTA 
          techName="Next.js"
          description="From design systems and API integration to headless CMS setups and edge deployments—let's build something exceptional."
        />
      </div>
    </div>
  );
}
