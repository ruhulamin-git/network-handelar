"use client";

import { useRef } from "react";
import { 
  Brain,
  Database,
  Layers,
  Terminal,
  Settings,
  Globe
} from "lucide-react";

import TechHero from "@/components/technology/TechHero";
import TechCapabilities from "@/components/technology/TechCapabilities";
import TechTelemetry from "@/components/technology/TechTelemetry";
import TechServices from "@/components/technology/TechServices";
import TechPipeline from "@/components/technology/TechPipeline";
import TechCodeQuality from "@/components/technology/TechCodeQuality";
import TechCTA from "@/components/technology/TechCTA";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";

export default function PythonPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  usePageRevealAnimations(containerRef, {
    hero: ".tech-hero-reveal",
    sections: [
      { selector: ".tech-capabilities-reveal", y: 50, duration: 0.8, start: "top 85%" },
      { selector: ".tech-telemetry-reveal", y: 50, duration: 0.8, start: "top 85%" },
      { selector: ".tech-services-reveal", y: 50, duration: 0.8, start: "top 85%" },
      { selector: ".tech-pipeline-reveal", y: 50, duration: 0.8, start: "top 85%" },
      { selector: ".tech-code-quality-reveal", y: 50, duration: 0.8, start: "top 85%" },
      { selector: ".tech-cta-reveal", y: 50, duration: 0.8, start: "top 85%" },
    ],
  });

  const capabilities = [
    {
      icon: Brain,
      title: "AI & ML Integration Ready",
      description: "Natively integrates with modern AI/ML frameworks like TensorFlow, PyTorch, and Scikit-Learn to build neural networks and data models.",
      metric: "98.6%",
      metricLabel: "Model accuracy"
    },
    {
      icon: Database,
      title: "Data Processing Power",
      description: "Leverages libraries like Pandas, NumPy, and SciPy to process complex mathematical calculations, data analysis, and visual mapping.",
      metric: "10TB+",
      metricLabel: "Data processed"
    },
    {
      icon: Layers,
      title: "Extensive Ecosystem Support",
      description: "Access to over 137,000+ packages and libraries, enabling our team to implement specific business logic without starting from scratch.",
      metric: "137K+",
      metricLabel: "PyPI packages"
    },
    {
      icon: Terminal,
      title: "Rapid Web Prototyping",
      description: "Fast backend development with frameworks like Django (for robust security) and FastAPI (for modern high-performance APIs).",
      metric: "38ms",
      metricLabel: "Avg inference"
    },
    {
      icon: Settings,
      title: "Process Scripting & Automation",
      description: "Automate manual tasks, scrape web indices, schedule workers, and handle system configurations via modular scripting.",
      metric: "90%",
      metricLabel: "Task automation"
    },
    {
      icon: Globe,
      title: "Cross-Platform Adaptability",
      description: "Write once and run anywhere—Python applications operate flawlessly across Windows, Linux, and macOS environments.",
      metric: "3",
      metricLabel: "OS platforms"
    }
  ];

  const services = [
    {
      title: "Python Custom Development",
      description: "Designing bespoke corporate web solutions, data analysis dashboards, and automation services tailored to business needs.",
      status: "Production",
      metrics: [
        { value: "Django", label: "Framework" },
        { value: "FastAPI", label: "REST" }
      ]
    },
    {
      title: "AI & Machine Learning Engineering",
      description: "Building predictive systems, natural language processing models, and custom recommendation engines using python frameworks.",
      status: "Active",
      metrics: [
        { value: "PyTorch", label: "Training" },
        { value: "98.6%", label: "F1 Score" }
      ]
    },
    {
      title: "Python Web & API Development",
      description: "Creating highly-performant backends and secure RESTful endpoints using modern frameworks like FastAPI and Django.",
      status: "Active",
      metrics: [
        { value: "38ms", label: "p99 Latency" },
        { value: "45K/m", label: "Throughput" }
      ]
    },
    {
      title: "Automation & Scripting Workflows",
      description: "Deploying custom automation scripts, database sync tools, and web crawlers to streamline administrative tasks.",
      status: "Continuous",
      metrics: [
        { value: "90%", label: "Automated" },
        { value: "24/7", label: "Scheduling" }
      ]
    },
    {
      title: "Legacy System Migration",
      description: "Upgrading existing legacy applications to python, cleaning database pipelines, and optimizing script architectures.",
      status: "On-demand",
      metrics: [
        { value: "0", label: "Downtime" },
        { value: "100%", label: "Data integrity" }
      ]
    },
    {
      title: "Python Consulting & Maintenance",
      description: "Continuous diagnostic checks, performance optimization, vulnerability patching, and developer resource planning.",
      status: "Continuous",
      metrics: [
        { value: "50+", label: "Audits/yr" },
        { value: "<4h", label: "Response" }
      ]
    }
  ];

  const pipelineSteps = [
    {
      num: "01",
      title: "Connect & Clean Data",
      description: "Ingest structured or unstructured data indices, clean redundancies, and configure custom versioning schemas."
    },
    {
      num: "02",
      title: "Model & API Design",
      description: "Train classification algorithms using GPU clusters and wrap model checkpoints with highly-performant API routes."
    },
    {
      num: "03",
      title: "Telemetry & Evals",
      description: "Configure content filtering guardrails, track inference latency, and log model accuracy drifts."
    }
  ];

  const telemetryEndpoints = [
    { route: "/api/v1/predict", render: "FastAPI inference API", reqs: "45K / min", p99: "38ms", status: "Healthy" },
    { route: "/api/v1/embeddings", render: "Vector Embedding Store", reqs: "120K / min", p99: "28ms", status: "Healthy" },
    { route: "/api/v1/train", render: "GPU Training Cluster", reqs: "12 / day", p99: "4.2h", status: "Running" },
    { route: "/api/v1/analytics/parse", render: "Pandas Parse Engine", reqs: "85K / min", p99: "14ms", status: "Healthy" }
  ];

  const pythonCodeSnippet = `from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import torch

app = FastAPI()

class PredictionRequest(BaseModel):
    features: list[float]
    model_version: str = "v2.1"

@app.post("/api/predict")
async def predict_model(request: PredictionRequest):
    tensor = torch.tensor(request.features).unsqueeze(0)
    model = torch.jit.load(f"models/{request.model_version}.pt")
    prediction = model(tensor).item()
    return {
        "status": "success",
        "prediction": round(prediction, 4),
        "model": request.model_version
    }`;

  return (
    <div ref={containerRef} className="bg-white text-zinc-900 mt-20">
      <div className="tech-hero-reveal">
        <TechHero 
          eyebrow="v3.12 — Machine Learning Core"
          titlePrefix="Intelligent AI models"
          titleHighlight="powered by Python."
          description="Enterprise-grade data science, neural learning, and secure workflow automation. Deploy scalable models and secure GPU-accelerated endpoints."
        />
      </div>
      
      <div className="tech-capabilities-reveal">
        <TechCapabilities 
          eyebrow="Architecture"
          title="Six pillars of machine speed"
          description="Python offers clean syntaxes for AI workflows. We structure isolated execution pipelines and clean data relational interfaces."
          capabilities={capabilities}
        />
      </div>

      <div className="tech-telemetry-reveal">
        <TechTelemetry 
          eyebrow="Model Telemetry"
          title="Inference & Training Benchmarks"
          description="Real-time telemetry across our model pipelines. We audit GPU usage patterns and cache vectors to optimize latency."
          stats={[
            { label: "Avg Inference Time", value: "38ms", change: "↓ 6ms improvement" },
            { label: "GPU Load (A100)", value: "84.2%", change: "16.2 GB allocated" },
            { label: "Model Accuracy", value: "98.6%", change: "F1 validation score" },
            { label: "Inference Volume", value: "10TB+", change: "Delta versioning active" }
          ]}
          endpoints={telemetryEndpoints}
          logFilename="model-inference-gateway.log"
        />
      </div>

      {/* Python page does not feature case studies, skipped */}

      <div className="tech-services-reveal">
        <TechServices 
          eyebrow="Services"
          title="Python Services We Provide"
          description="From machine learning integrations to custom backend applications, we deliver robust solutions."
          services={services}
        />
      </div>

      <div className="tech-pipeline-reveal">
        <TechPipeline 
          eyebrow="Training Pipeline"
          title="How it works from discovery to inference"
          description="We construct modular data cleansing nodes and automate cloud GPU provisioning schedules."
          steps={pipelineSteps}
        />
      </div>

      <div className="tech-code-quality-reveal">
        <TechCodeQuality 
          eyebrow="Enterprise AI Stack"
          title="Intelligent & Secured Model Pipelines"
          description="We engineer scalable data processing pipelines and train models using isolated execution paths, ensuring safe processing of healthcare and financial records."
          bulletPoints={[
            "Clean execution of neural networks on cloud GPU engines.",
            "Automated model validation checks and logging controls.",
            "RESTful API architectures using FastAPI and Django.",
            "Robust data mapping compliant with GDPR and HIPAA."
          ]}
          codeSnippet={pythonCodeSnippet}
          filename="model_api.py"
        />
      </div>

      <div className="tech-cta-reveal">
        <TechCTA 
          techName="Python"
          description="From model configurations and deep learning integrations to data analytics portals and automated scheduling—let's build something exceptional."
        />
      </div>
    </div>
  );
}
