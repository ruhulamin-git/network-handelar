"use client";

import { useRef } from "react";
import { 
  Zap, 
  Shield, 
  Globe, 
  Layers, 
  Code,
  Layout,
  MousePointerClick
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

export default function ReactjsPage() {
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
      icon: Layout,
      title: "Component-Based Architecture",
      description: "Structures user interfaces as modular, independent components, facilitating code reusability and simplifying long-term frontend updates.",
      metric: "128+",
      metricLabel: "Reusable modules"
    },
    {
      icon: Zap,
      title: "Virtual DOM for Speed",
      description: "Optimizes browser rendering times by updating only the items that have changed, rather than re-rendering the whole page.",
      metric: "4ms",
      metricLabel: "Avg render time"
    },
    {
      icon: Shield,
      title: "One-Way Data Binding",
      description: "Maintains a unidirectional data flow, giving our engineers predictable control over how data moves through the application.",
      metric: "0",
      metricLabel: "State race conditions"
    },
    {
      icon: Code,
      title: "JSX Code Simplicity",
      description: "Combines interface layout and logic in one readable file format, making development, testing, and debugging efficient.",
      metric: "40%",
      metricLabel: "Faster iteration"
    },
    {
      icon: MousePointerClick,
      title: "React Hooks for State Logic",
      description: "Allows functional components to access local states, handle side-effects, and reuse logic without declaring nested classes.",
      metric: "100%",
      metricLabel: "Functional components"
    },
    {
      icon: Globe,
      title: "Rich Ecosystem & Integrations",
      description: "Compatible with thousands of third-party libraries, including state management tools like Redux and styling systems.",
      metric: "2M+",
      metricLabel: "NPM weekly downloads"
    }
  ];

  const projects = [
    {
      title: "Homer AI",
      subtitle: "Real Estate Chat Matching Platform",
      description: "A chat-based real estate platform enabling seamless interaction between property buyers and sellers, including scheduling.",
      tags: ["React Frontend", "Mapbox API", "WebSockets"],
      metrics: "Interactive Conversational UI"
    },
    {
      title: "N2IT",
      subtitle: "Location Nightlife Tracker",
      description: "A mobile-responsive portal that maps local clubs, promoter deals, and real-time ratings based on user location.",
      tags: ["React.js", "Geospatial Services", "Tailwind CSS"],
      metrics: "Live Map Navigation"
    },
    {
      title: "Stratum 9",
      subtitle: "Gamified Self-Development App",
      description: "An interactive personal growth platform offering customized skill-assessment charts, progress indicators, and video modules.",
      tags: ["React Frontend", "Chart.js", "Video Integration"],
      metrics: "Interactive Assessment UX"
    }
  ];

  const services = [
    {
      title: "React JS Web App Development",
      description: "Building responsive, modern, and highly-performant SaaS platforms, CRM dashboards, and interactive user interfaces.",
      status: "Production",
      metrics: [
        { value: "99.9%", label: "Uptime" },
        { value: "<2s", label: "TTI" }
      ]
    },
    {
      title: "React UI/UX Custom Development",
      description: "Designing responsive, intuitive, and accessibility-compliant UI libraries structured around reusable components.",
      status: "Active",
      metrics: [
        { value: "WCAG 2.1", label: "Compliance" },
        { value: "AAA", label: "Rating" }
      ]
    },
    {
      title: "React JS Consulting & Reviews",
      description: "Diagnostics on render speed, package size audits, state management restructuring, and UI system modernization planning.",
      status: "On-demand",
      metrics: [
        { value: "40+", label: "Audits/yr" },
        { value: "3x", label: "Perf gain" }
      ]
    },
    {
      title: "API Development & Integration",
      description: "Securing connection streams between your React frontend and backend APIs (REST, GraphQL, gRPC).",
      status: "Active",
      metrics: [
        { value: "REST", label: "Protocol" },
        { value: "GraphQL", label: "Query" }
      ]
    },
    {
      title: "Legacy to React Migrations",
      description: "Porting legacy applications (such as JQuery or old Angular projects) to React JS with clean code standards and no runtime lag.",
      status: "Active",
      metrics: [
        { value: "0", label: "Downtime" },
        { value: "100%", label: "Data integrity" }
      ]
    },
    {
      title: "React JS Support & Optimization",
      description: "Ongoing code optimization, dependencies patching, accessibility alignment, and performance audits.",
      status: "Continuous",
      metrics: [
        { value: "24/7", label: "Monitoring" },
        { value: "<4h", label: "Response" }
      ]
    }
  ];

  const pipelineSteps = [
    {
      num: "01",
      title: "Design & Prototyping",
      description: "Design clean wireframes and export design system specifications, aligning UI with atomic React modules."
    },
    {
      num: "02",
      title: "Component Engineering",
      description: "Develop reusable components using state-management modules. Code responsive interfaces using dynamic routing."
    },
    {
      num: "03",
      title: "Integration & Delivery",
      description: "Connect APIs, run test scenarios, compile file bundles, audit PageSpeed indexes, and deploy to staging."
    }
  ];

  const telemetryEndpoints = [
    { route: "/dashboard/insights", render: "Dynamic Chart Modules", reqs: "120K / min", p99: "28ms", status: "Healthy" },
    { route: "/checkout/portal", render: "Stripe Form Hook", reqs: "45K / min", p99: "12ms", status: "Healthy" },
    { route: "/about/history", render: "Static Asset Image", reqs: "85K / min", p99: "6ms", status: "Healthy" },
    { route: "/realtime/tracker", render: "Live WebSockets Table", reqs: "90K active", p99: "4ms", status: "Healthy" }
  ];

  const reactCodeSnippet = `import { useState, useCallback, useMemo } from 'react';

interface AnalyticsEvent {
  name: string;
  timestamp: number;
  payload: Record<string, unknown>;
}

export function useAnalytics() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  const track = useCallback((name: string, data = {}) => {
    setEvents(prev => [...prev, {
      name,
      timestamp: Date.now(),
      payload: data,
    }]);
  }, []);

  const summary = useMemo(() => ({
    total: events.length,
    unique: new Set(events.map(e => e.name)).size,
  }), [events]);

  return { track, events, summary };
}`;

  return (
    <div ref={containerRef} className="bg-white text-zinc-900 mt-20">
      <div className="tech-hero-reveal">
        <TechHero 
          eyebrow="v18.3.0 — Virtual DOM & State Hooks"
          titlePrefix="Interactive UI layers"
          titleHighlight="built with React JS."
          description="Create high-performance interfaces, atomic components, and modular state machines. We develop reusable components that render instantly."
        />
      </div>
      
      <div className="tech-capabilities-reveal">
        <TechCapabilities 
          eyebrow="Architecture"
          title="Six pillars of component speed"
          description="React JS is the standard for modern interactive web products. We structure clean hooks, modular state layers, and reusable layout grids."
          capabilities={capabilities}
        />
      </div>

      <div className="tech-telemetry-reveal">
        <TechTelemetry 
          eyebrow="Frontend Telemetry"
          title="Render & Interaction Speed"
          description="Real-time telemetry across our frontend modules. We write optimized hooks and clean state bindings to maintain fluid navigation."
          stats={[
            { label: "Main Bundle Size", value: "72.2 kB", change: "↓ 18% reduction" },
            { label: "p95 Render Speed", value: "4ms", change: "↓ 1ms lag improvement" },
            { label: "Lighthouse Score", value: "99.2", change: "Passing Core Web Vitals" },
            { label: "Active Components", value: "128", change: "100% reusable modules" }
          ]}
          endpoints={telemetryEndpoints}
          logFilename="react-client-router.log"
        />
      </div>

      <div className="tech-case-studies-reveal">
        <TechCaseStudies 
          eyebrow="Featured Work"
          title="React JS Experiences Our Clients Swear By"
          description="Explore how we translate modular code structures into responsive user experiences."
          projects={projects}
        />
      </div>

      <div className="tech-services-reveal">
        <TechServices 
          eyebrow="Services"
          title="React JS Services We Provide"
          description="Full-lifecycle frontend development including layout prototyping, API routing, state management, and support."
          services={services}
        />
      </div>

      <div className="tech-pipeline-reveal">
        <TechPipeline 
          eyebrow="Development Pipeline"
          title="How it works from discovery to release"
          description="We leverage custom CI/CD automation and test pipelines to deploy fast frontends."
          steps={pipelineSteps}
        />
      </div>

      <div className="tech-code-quality-reveal">
        <TechCodeQuality 
          eyebrow="Frontend Security"
          title="Optimized Render Paths & Vulnerability Hardening"
          description="We design UI layers to avoid unnecessary render loops and memory leaks. Our code protects against XSS injection, cleans HTML inputs, and securely stores tokens."
          bulletPoints={[
            "Protection against XSS script injections.",
            "Localized state management (Zustand) to limit redraw scopes.",
            "Strict compliance with screen-reader and WCAG criteria.",
            "Pre-integrated unit test structures using React Testing Library."
          ]}
          codeSnippet={reactCodeSnippet}
          filename="useAnalytics.ts"
        />
      </div>

      <div className="tech-cta-reveal">
        <TechCTA 
          techName="React JS"
          description="From custom UI frameworks and API connections to component systems and edge deployments—let's build something exceptional."
        />
      </div>
    </div>
  );
}
