"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "./SectionHeading";

const CloudDevops = () => {
  const devopsTools = [
    {
      name: "AWS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Azure",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "GCP",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Docker",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
    },
    {
      name: "Jenkins",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    },
    {
      name: "Terraform",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    },
    {
      name: "GitHub",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "GitLab",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    },
    {
      name: "NGINX",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    },
    {
      name: "Ansible",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
    },
    {
      name: "Prometheus",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    },
    {
      name: "Grafana",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    },
    {
      name: "Redis",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
  ];

  return (
    <section className="tech-section relative py-16 sm:py-20 bg-slate-50/60 border-t border-gray-100 overflow-hidden">
      {/* Subtle cyan tint in the corner */}
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-[120px] -z-0" />

      <div className="container-premium cloud-devops-animate relative z-10 space-y-10">
        <SectionHeading
          center
          eyebrow="Cloud & DevOps"
          title="Infrastructure Excellence"
          description="   We architect highly available, secure, and scalable cloud
                    environments ensuring your applications run flawlessly under
                    any load."
        />

        {/* DevOps grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4">
          {devopsTools.map((tool, i) => (
            <div
              key={i}
              className="
                cloud-devops-card
                group flex flex-col items-center justify-center gap-2 sm:gap-3
                bg-white border border-gray-100 rounded-xl sm:rounded-2xl
                p-3 sm:p-5
                transition-all duration-300 cursor-default
                hover:border-cyan-400/60
                hover:shadow-[0_8px_32px_rgba(34,211,238,0.10)]
              "
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-500 text-center leading-tight group-hover:text-cyan-600 transition-colors">
                {tool.name}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {[
            "SOC 2 Type II",
            "ISO 27001",
            "GDPR Ready",
            "HIPAA Compliant",
            "PCI-DSS",
          ].map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 rounded-full border border-cyan-200 bg-white text-[10px] font-bold uppercase tracking-widest text-cyan-700"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudDevops;
