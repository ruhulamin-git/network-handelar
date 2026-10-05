"use client";

import Image from "next/image";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

const ExploreDomain = () => {
  const [activeDomainTab, setActiveDomainTab] = useState("Frontend");

  const domainTechnologies: Record<
    string,
    { name: string; image: string; invert?: boolean }[]
  > = {
    Frontend: [
      {
        name: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Vue.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Angular",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
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
        name: "Tailwind",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
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
      {
        name: "Sass",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
    ],
    Backend: [
      {
        name: "Node.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Laravel",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
      {
        name: "Django",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        name: "Spring",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: ".NET Core",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "GraphQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Redis",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Elasticsearch",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
      },
    ],
    Mobile: [
      {
        name: "Flutter",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "React Native",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
      {
        name: "Android",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },
      {
        name: "iOS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
      },
      {
        name: "Expo",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
      },
    ],
    "AI / ML": [
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
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
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
        name: "Pandas",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
    ],
    Testing: [
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
  };

  const domainCategories = Object.keys(domainTechnologies);
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="container-premium explore-domain-animate space-y-10">
        <SectionHeading
          center
          eyebrow="Explore Domains"
          title="Technology by Domain"
          description="   Whether you need a sleek frontend or a robust backend architecture,
                    we have the expertise to build solutions across all technology
                    domains."
        />

        {/* Domain Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 sm:mb-12">
          {domainCategories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveDomainTab(tab)}
              className={`
                        px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-[11px]
                        font-bold uppercase tracking-wider
                        transition-all duration-300 border
                        ${
                          activeDomainTab === tab
                            ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/20"
                            : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-900"
                        }
                      `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {domainTechnologies[activeDomainTab].map((tech, index) => (
            <div
              key={index}
              className="
                     explore-domain-card
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreDomain;
