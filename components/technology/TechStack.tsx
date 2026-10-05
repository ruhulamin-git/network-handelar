"use client";

import Image from "next/image";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

const technologies = {
  "Microsoft Platform": [
    {
      name: "C#",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "ASP.NET",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "ASP.NET MVC",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      name: ".NET CORE",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      name: "VB.NET",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualbasic/visualbasic-original.svg",
    },
    {
      name: "ADO.NET",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg",
    },
    {
      name: "Microsoft WPF",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    },
    {
      name: "SharePoint",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg",
    },
    {
      name: "SQL Server",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    },
    {
      name: "Azure",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "MySQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],
  Opensource: [
    {
      name: "PHP",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "CodeIgniter",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
    },
    {
      name: "WordPress",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    },
    {
      name: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Django",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "Ruby",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    },
    {
      name: "Rails",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
    },
  ],
  "Java-based Platform": [
    {
      name: "Java",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Spring Boot",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "Hibernate",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
    },
    {
      name: "Maven",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
    },
    {
      name: "Gradle",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg",
    },
  ],
  "Cutting-edge Technologies": [
    {
      name: "TensorFlow",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "PyTorch",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "OpenAI",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    },
    {
      name: "Blockchain",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    },
    {
      name: "GraphQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
  ],
  "Front-end Development": [
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Angular",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "Vue.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Next.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ],
  "Software Testing": [
    {
      name: "Selenium",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
    },
    {
      name: "Jest",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "Cypress",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
    },
    {
      name: "Playwright",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
    },
    {
      name: "JUnit",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg",
    },
  ],
  "Mobile Technology": [
    {
      name: "React Native",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Flutter",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "iOS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    },
    {
      name: "Android",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    },
    {
      name: "Swift",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    },
    {
      name: "Kotlin",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    },
  ],
  "Cloud Platform": [
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
      name: "Google Cloud",
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
  ],
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<string>("Microsoft Platform");
  const categories = Object.keys(technologies);

  return (
    <section className=" bg-white">
      <div className="">
        {/* Tab pills */}
     {/* Tab pills */}
<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols gap-2">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveTab(category)}
      className={`
        py-6 text-[12px] rounded-md
        font-bold uppercase tracking-wider
        transition-all duration-200 border whitespace-nowrap cursor-pointer
        ${
          activeTab === category
            ? "bg-[#0a0f1e] text-cyan-400 border-cyan-400/60 shadow-[0_0_16px_rgba(34,211,238,0.15)]"
            : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700 hover:bg-gray-300"
        }
      `}
    >
      {category}
    </button>
  ))}
</div>

        {/* Tech cards grid */}
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
          {technologies[activeTab as keyof typeof technologies].map(
            (tech, index) => (
              <div
                key={index}
                className="
                          group relative flex flex-col items-center justify-center gap-2 sm:gap-3
                          bg-white border border-gray-100 rounded-xl sm:rounded-2xl
                          p-3 sm:p-5 md:p-6
                          transition-all duration-300 cursor-default
                          hover:border-cyan-400/60
                          hover:shadow-[0_8px_32px_rgba(34,211,238,0.10)]
                        "
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={56}
                    height={56}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-600 text-center leading-tight group-hover:text-gray-800 transition-colors">
                  {tech.name}
                </p>
                <span className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
