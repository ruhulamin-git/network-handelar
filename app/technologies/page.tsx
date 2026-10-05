"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import TechStack from "@/components/technology/TechStack";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";
import { CustomButton } from "@/components/ui/custom-button";

export default function TechnologiesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const devopsTools = [
    { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Azure", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "GCP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
    { name: "Jenkins", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "Terraform", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "GitLab", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "NGINX", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "Ansible", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
    { name: "Prometheus", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
    { name: "Grafana", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
    { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  ];

  const halfLength = Math.ceil(devopsTools.length / 2);
  const leftColTools = devopsTools.slice(0, halfLength);
  const rightColTools = devopsTools.slice(halfLength);

  usePageRevealAnimations(containerRef, {
    hero: ".tech-hero-content",
    sections: [
      {
        selector: ".tech-feature-reveal",
        y: 60,
        duration: 1,
        start: "top 85%",
        delayStep: 0.08,
      },
      {
        selector: ".tech-stack-reveal",
        y: 50,
        duration: 1,
        start: "top 80%",
        delayStep: 0.08,
      },
      {
        selector: ".tech-cta-reveal",
        y: 60,
        duration: 1,
        start: "top 85%",
        delayStep: 0.08,
      },
    ],
  });

  return (
    <div ref={containerRef} className="bg-white mt-20">
      
      {/* ================= HERO SECTION (PIXEL-PERFECT ALIGNMENT) ================= */}
      <section className="relative min-h-screen flex items-center pt-12 md:pt-16 pb-10 md:pb-12 overflow-hidden rounded-[24px] mx-3 my-3 bg-[#fafafa] border border-gray-100/90">
        {/* Refined Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
        <div className="absolute inset-0 bg-[url('/images/service-hero.jpg')] bg-cover bg-center mix-blend-multiply opacity-12" />
        
        {/* Optimized Light Diffusion */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafafa]/30 to-[#fafafa]" />
        
        <div className="relative z-10 container-premium">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Precision Typography */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8 tech-hero-content">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-50/90 border border-cyan-100/90">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">Infrastructure & DevOps</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tighter text-gray-900 leading-[0.9]">
                Next-Gen Stack. <br />
                <span className="text-gray-400">Built for Scale.</span>
              </h1>
              
              <p className="leading-relaxed text-gray-600 max-w-xl font-light text-base md:text-lg opacity-95">
                We bridge the gap between complex infrastructure and automated workflows, leveraging industry-grade tools to secure maximum uptime.
              </p>

              <div className="pt-4">
                <Link href="/contact">
                  <CustomButton variant="cyan" uppercase showArrow className="px-8 py-5 shadow-sm hover:shadow-md transition-shadow">
                    Get Started
                  </CustomButton>
                </Link>
              </div>
            </div>

            {/* Right Column: Enhanced 3D Isometric Display */}
            <div className="lg:col-span-6 relative h-[500px] lg:h-[580px] w-full overflow-hidden mask-gradient-v flex justify-center items-center">
              <div className="webflow-3d-engine w-full max-w-[450px] flex justify-center items-center px-2">
                <div className="grid grid-cols-2 gap-4 perspective-grid w-full">
                  
                  {/* Column 1 - Smooth Upward Animation */}
                  <div className="flex flex-col gap-4 animate-scroll-up">
                    {leftColTools.map((tool, idx) => (
                      <div key={`left-${idx}`} className="webflow-3d-card">
                        <div className="absolute top-0 left-0 w-2 h-[1px] bg-gray-300/70" />
                        <div className="absolute top-0 left-0 w-[1px] h-2 bg-gray-300/70" />
                        <div className="icon-wrapper">
                          <Image src={tool.image} alt={tool.name} width={44} height={44} className="w-11 h-11 object-contain" />
                        </div>
                        <div className="w-full text-center border-t border-gray-100/90 pt-2">
                          <span className="text-[8px] font-mono font-bold uppercase tracking-[0.15em] text-gray-400">{tool.name}</span>
                        </div>
                      </div>
                    ))}
                    {leftColTools.map((tool, idx) => (
                      <div key={`left-clone-${idx}`} className="webflow-3d-card">
                        <div className="absolute top-0 left-0 w-2 h-[1px] bg-gray-300/70" />
                        <div className="absolute top-0 left-0 w-[1px] h-2 bg-gray-300/70" />
                        <div className="icon-wrapper">
                          <Image src={tool.image} alt={tool.name} width={44} height={44} className="w-11 h-11 object-contain" />
                        </div>
                        <div className="w-full text-center border-t border-gray-100/90 pt-2">
                          <span className="text-[8px] font-mono font-bold uppercase tracking-[0.15em] text-gray-400">{tool.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 - Smooth Downward Animation */}
                  <div className="flex flex-col gap-4 animate-scroll-down pt-16">
                    {rightColTools.map((tool, idx) => (
                      <div key={`right-${idx}`} className="webflow-3d-card">
                        <div className="absolute top-0 left-0 w-2 h-[1px] bg-gray-300/70" />
                        <div className="absolute top-0 left-0 w-[1px] h-2 bg-gray-300/70" />
                        <div className="icon-wrapper">
                          <Image src={tool.image} alt={tool.name} width={44} height={44} className="w-11 h-11 object-contain" />
                        </div>
                        <div className="w-full text-center border-t border-gray-100/90 pt-2">
                          <span className="text-[8px] font-mono font-bold uppercase tracking-[0.15em] text-gray-400">{tool.name}</span>
                        </div>
                      </div>
                    ))}
                    {rightColTools.map((tool, idx) => (
                      <div key={`right-clone-${idx}`} className="webflow-3d-card">
                        <div className="absolute top-0 left-0 w-2 h-[1px] bg-gray-300/70" />
                        <div className="absolute top-0 left-0 w-[1px] h-2 bg-gray-300/70" />
                        <div className="icon-wrapper">
                          <Image src={tool.image} alt={tool.name} width={44} height={44} className="w-11 h-11 object-contain" />
                        </div>
                        <div className="w-full text-center border-t border-gray-100/90 pt-2">
                          <span className="text-[8px] font-mono font-bold uppercase tracking-[0.15em] text-gray-400">{tool.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

       <style jsx>{`
  @keyframes scroll-up {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes scroll-down {
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0); }
  }
  .animate-scroll-up {
    animation: scroll-up 30s linear infinite;
  }
  .animate-scroll-down {
    animation: scroll-down 30s linear infinite;
  }
  
  /* Premium White Minimalist Card Design */
  .webflow-3d-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    aspect-ratio: 1 / 1.1;
    padding: 1.25rem 0.75rem 0.75rem 0.75rem;
    border-radius: 10px;
    background: #ffffff;
    border: 1px solid rgba(229, 231, 235, 0.9);
    box-shadow: 
      0 1px 2px rgba(0, 0, 0, 0.008),
      0 8px 24px rgba(0, 0, 0, 0.025);
    transition: all 0.3s ease;
  }
  
  .webflow-3d-card:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.015),
      0 12px 32px rgba(0, 0, 0, 0.04);
  }
  
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
  }

  /* Optimized Edge Fade Mask */
  .mask-gradient-v {
    mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%);
  }
  
  /* Precision 3D Engine */
  .webflow-3d-engine {
    perspective: 1400px;
    perspective-origin: 25% 75%;
    transform-style: preserve-3d;
  }
  
  .perspective-grid {
    transform-style: preserve-3d;
    transform: rotateX(20deg) rotateY(-28deg) rotateZ(8deg) scale(1.02);
  }
`}</style>
      </section>
      

      {/* ================= TECH STACK SECTION ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-premium">
          <div className="tech-feature-reveal service-item mx-auto max-w-4xl text-center mb-20">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="w-12 h-0.5 bg-gray-900" />
              <span className="uppercase tracking-[0.4em] text-sm">Technology</span>
              <div className="w-12 h-0.5 bg-gray-900" />
            </div>
            <h2 className="text-4xl md:text-6xl  text-gray-900 tracking-tighter leading-[0.95] mb-6">
             Focus on researching trendy technologies and have pioneered in many fields.
            </h2>
            <p className="text-gray-500  leading-relaxed font-medium max-w-2xl mx-auto">
             Founded by tech savvy, TSO understands the importance of utilizing latest technologies to save time and optimize costs in solving client&apos;s problems. By leveraging top-notch frameworks, libraries and tools, TSO develops practical custom solutions to meet the ever growing demands of our customers and their businesses.
            </p>
          </div>

          <div className="tech-stack-reveal bg-[#ececec] p-3 rounded-[26px]">
            <div className="bg-white rounded-[22px] p-6 border border-gray-100">
              <TechStack />
            </div>
          </div>
        </div>
      </section>

     {/* CTA Section with Cards */}
      <section className="tech-cta-reveal py-16 lg:h-[450px] h-auto rounded-[24px] mx-3 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/cta.jpeg')]  bg-cover bg-center" />
      </div>
     <div className="absolute inset-0 opacity-100 pointer-events-none bg-gradient-to-r from-black/20 to-transparent z-[1]"></div>
        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center flex justify-between">
            {/* Left Content */}
            <div className="text-white col-span-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.95] mb-6">
                Modern technology stack for scalable solutions
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8">
               We leverage cutting-edge technologies to build robust, performant applications that scale with your business.
              </p>
               {/* CTA Button */}
                <div className="shrink-0">
                <Link href="/contact">
                  <CustomButton variant="cyan" uppercase showArrow className="px-8 py-5 shadow-lg shadow-cyan-500/20">
                    Start a Conversation
                  </CustomButton>
                </Link>
              </div>
            </div>

            {/* Right Cards */}
            <div className="relative flex items-center justify-center  scale-75 md:scale-90 lg:scale-100">
              {/* Black Card - Back */}
              <div className="border border-4 border-white absolute -left-12 md:left-0 top-8 rotate-[-16deg] rounded-[16px] bg-black text-white p-4 w-[200px] shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-lime-400" />
                  <div className="text-xs font-bold opacity-70">Expertise</div>
                </div>
                <div className="text-md uppercase leading-relaxed">
                  Combines Strategy, Data, and Artificial Intelligence
                </div>
              </div>

              {/* White Card - Front */}
              <div className="relative z-10 rotate-[8deg] -right-12 border border-3 border-white rounded-[16px] bg-white p-4 w-[240px] shadow-[0_30px_60px_rgba(0,0,0,0.25)] border border-gray-100">
                <div className="rounded-xl bg-black text-white p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xs opacity-60 font-bold">Performance</div>
                    <svg className="w-3 h-3 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-sm">AI-Focused</div>
                </div>

                <div className="flex items-end gap-3 mb-4">
                  <div className="text-4xl text-black">49%</div>
                  <div className="mb-3 rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-lime-600">
                    +2.5%
                  </div>
                </div>

                <div className="text-xs text-gray-400 font-bold mb-4">Strategic</div>

                <div className="flex flex-wrap gap-2">
                  {["AI-Focused", "Build Fast", "Grow Faster"].map((tag) => (
                    <div key={tag} className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-black">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
