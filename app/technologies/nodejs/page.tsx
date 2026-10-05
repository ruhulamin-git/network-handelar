"use client";

import { useRef } from "react";
import { 
  Zap, 
  Shield, 
  Network, 
  Layers, 
  Server,
  Workflow
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

export default function NodejsPage() {
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
      icon: Network,
      title: "Event-Driven & Non-Blocking",
      description: "Uses an asynchronous event loop to handle thousands of concurrent requests seamlessly with low memory overhead.",
      metric: "24.8K",
      metricLabel: "Req / second"
    },
    {
      icon: Layers,
      title: "Unmatched Backend Scalability",
      description: "Designed to support horizontal and vertical scaling, making it ideal for microservices and cloud-native systems.",
      metric: "∞",
      metricLabel: "Horizontal scale"
    },
    {
      icon: Zap,
      title: "Lightweight & Fast Architecture",
      description: "Runs on Chrome's V8 engine to compile JavaScript directly into native machine code, rendering server operations extremely fast.",
      metric: "V8",
      metricLabel: "JIT Compiler"
    },
    {
      icon: Server,
      title: "Microservices Compatibility",
      description: "Enables teams to divide large backends into modular, independently deployable services that scale with product demand.",
      metric: "gRPC",
      metricLabel: "Protocol"
    },
    {
      icon: Workflow,
      title: "Real-time Bidirectional Channels",
      description: "Perfect for WebSockets (Socket.IO) integration to build instant chat applications, notification hubs, and live trackers.",
      metric: "<1ms",
      metricLabel: "WS latency"
    },
    {
      icon: Shield,
      title: "Robust Security Compliance",
      description: "Leverages NPM security audits, helmet protection headers, and encryption libraries to secure enterprise data pipelines.",
      metric: "OWASP",
      metricLabel: "Compliance"
    }
  ];

  const projects = [
    {
      title: "Subsciety",
      subtitle: "Subscription eCommerce Platform",
      description: "A secure SaaS e-commerce portal supporting multi-vendor subscriptions, automatic billing, and customized vendor onboarding.",
      tags: ["Node.js Backend", "Express.js", "MongoDB"],
      metrics: "50k+ Active Subscriptions"
    },
    {
      title: "Worth Advisors",
      subtitle: "Automated Reporting Analytics",
      description: "An automated data processing system that ingests multi-source financial sheets and generates custom analytics dashboards.",
      tags: ["RESTful API", "Data Ingestion", "PostgreSQL"],
      metrics: "90% Process Automation"
    },
    {
      title: "FetchKnack",
      subtitle: "Social Network for Recruitment",
      description: "A gamified recruiting network connecting employers and job candidates in real time via automated match scoring and chat.",
      tags: ["Socket.IO", "Express.js", "Redis"],
      metrics: "Real-Time Chat Engagements"
    }
  ];

  const services = [
    {
      title: "Custom Node.js Backend Development",
      description: "Engineering secure, modular server-side applications designed to support high-concurrency enterprise workloads.",
      status: "Production",
      metrics: [
        { value: "99.99%", label: "Uptime" },
        { value: "24.8K/s", label: "Throughput" }
      ]
    },
    {
      title: "Node.js Consulting & Audits",
      description: "Strategic architecture review, performance bottleneck diagnostics, and roadmap planning by our senior backend team.",
      status: "On-demand",
      metrics: [
        { value: "50+", label: "Audits/yr" },
        { value: "4x", label: "Perf gain" }
      ]
    },
    {
      title: "Node.js API & Gateway Development",
      description: "Building scalable, secured, and well-documented RESTful and GraphQL APIs for web and mobile clients.",
      status: "Active",
      metrics: [
        { value: "REST", label: "Protocol" },
        { value: "GraphQL", label: "Query" }
      ]
    },
    {
      title: "Microservices Architecture Setup",
      description: "Splitting legacy monolithic backends into secure, loosely-coupled microservices communicating via gRPC or message queues.",
      status: "Active",
      metrics: [
        { value: "K8s", label: "Orchestrator" },
        { value: "Docker", label: "Container" }
      ]
    },
    {
      title: "Legacy Backend Migration",
      description: "Migrating existing Java, PHP, or .NET backends to modern Node.js environments with zero downtime and verified data integrity.",
      status: "Active",
      metrics: [
        { value: "0", label: "Downtime" },
        { value: "100%", label: "Data integrity" }
      ]
    },
    {
      title: "Real-Time Communication Apps",
      description: "Integrating real-time features like chat, alerts, live charts, and collaborative tools using Socket.IO.",
      status: "Continuous",
      metrics: [
        { value: "<1ms", label: "WS latency" },
        { value: "90K", label: "Concurrent" }
      ]
    }
  ];

  const pipelineSteps = [
    {
      num: "01",
      title: "Discovery & Architecture",
      description: "Analyze performance triggers, data relational maps, and expected query volume to structure the server nodes."
    },
    {
      num: "02",
      title: "Modular Engineering",
      description: "Develop clean, async controllers in Express or NestJS, wiring secure token auth and database middleware."
    },
    {
      num: "03",
      title: "DevOps & Scaling",
      description: "Configure Docker containers, orchestrate with Kubernetes, integrate Redis caching, and deploy behind proxy servers."
    }
  ];

  const telemetryEndpoints = [
    { route: "/api/v1/auth/session", render: "JWT Auth Controller", reqs: "820K / min", p99: "14ms", status: "Healthy" },
    { route: "/api/v1/inventory/cache", render: "Redis Cache Stream", reqs: "1.8M / min", p99: "4ms", status: "Healthy" },
    { route: "/api/v1/payment/checkout", render: "External Stripe API", reqs: "240K / min", p99: "142ms", status: "Healthy" },
    { route: "/api/v1/realtime/feed", render: "Socket.IO Websocket", reqs: "90K active", p99: "<1ms", status: "Healthy" }
  ];

  const nodejsConfigSnippet = `import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

// Security middleware stack
app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGINS }));
app.use(express.json({ limit: '10kb' }));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // limit per window
}));

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    memory: process.memoryUsage().heapUsed,
  });
});

export default app;`;

  return (
    <div ref={containerRef} className="bg-white text-zinc-900 mt-20">
      <div className="tech-hero-reveal">
        <TechHero 
          eyebrow="v20.11.0 — LTS & V8 Engine"
          titlePrefix="Scalable backend models"
          titleHighlight="built with Node.js."
          description="We write clean, asynchronous server layers designed for heavy request volumes, real-time message streams, and robust DB integrations."
        />
      </div>
      
      <div className="tech-capabilities-reveal">
        <TechCapabilities 
          eyebrow="Architecture"
          title="Six pillars of server-side speed"
          description="Node.js gives you maximum control over system resources. We architect modular routes, database indexes, and cache layers."
          capabilities={capabilities}
        />
      </div>

      <div className="tech-telemetry-reveal">
        <TechTelemetry 
          eyebrow="Backend Telemetry"
          title="Telemetry & Async Benchmarks"
          description="Real-time telemetry across our API gateways. We maintain sub-10ms lag scopes to guarantee instantaneous mobile-web syncing."
          stats={[
            { label: "Avg Event Lag", value: "0.18ms", change: "↓ 0.05ms improvement" },
            { label: "p99 Response Time", value: "8ms", change: "↓ 2ms lag reduction" },
            { label: "Throughput Limit", value: "24.8K / s", change: "Stable Heap Distribution" },
            { label: "Error Frequency", value: "0.012%", change: "99.988% success rate" }
          ]}
          endpoints={telemetryEndpoints}
          logFilename="gateway-network-router.log"
        />
      </div>

      <div className="tech-case-studies-reveal">
        <TechCaseStudies 
          eyebrow="Featured Work"
          title="Node JS Experiences Our Clients Swear By"
          description="Explore how our custom backend systems power growing businesses and enterprise operations."
          projects={projects}
        />
      </div>

      <div className="tech-services-reveal">
        <TechServices 
          eyebrow="Services"
          title="Node.js Development Services"
          description="Full-spectrum backend engineering built for reliability, velocity, and strict compliance alignment."
          services={services}
        />
      </div>

      <div className="tech-pipeline-reveal">
        <TechPipeline 
          eyebrow="Development Pipeline"
          title="How it works from discovery to cloud"
          description="We leverage custom CI/CD automation and test pipelines to deploy fast, scalable backends."
          steps={pipelineSteps}
        />
      </div>

      <div className="tech-code-quality-reveal">
        <TechCodeQuality 
          eyebrow="Enterprise DevSecOps"
          title="Node.js-Centric Security First"
          description="We proactively harden Node.js environments against security threats. From token-based authentication (JWT) to secure CORS policies, we protect your system."
          bulletPoints={[
            "Protection against OWASP Top 10 vulnerabilities.",
            "Strict input validation and API sanitization filters.",
            "Microservice isolation and containerized network controls.",
            "Continuous security audits on NPM package dependencies."
          ]}
          codeSnippet={nodejsConfigSnippet}
          filename="server.ts"
        />
      </div>

      <div className="tech-cta-reveal">
        <TechCTA 
          techName="Node.js"
          description="From API integration and database indexing to microservices setups and cloud hosting—let's build something exceptional."
        />
      </div>
    </div>
  );
}
