"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="container-premium ">
        {/* About Label */}
        <div className="flex items-center justify-center gap-2 mb-5 About-us">
          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />

          <span className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-black">
            About Us
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center About-us">
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl  text-black leading-[1.15] tracking-tight">
            A full-stack software partner
            <br className="hidden sm:block" />
            engineered to ship{" "}
            <span className="inline-flex items-center gap-2">
              <Image
                src="/icons/about-icon-1.svg"
                alt="brain icon"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              faster
            </span>
            <br />

            <span className="text-gray-400">
              and{" "}
              <span className="inline-flex items-center gap-2">
                <Image
                  src="/icons/about-icon-2.svg"
                  alt="circuit icon"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                />
                more scalable
              </span>
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-6 About-us">
          {/* Card 1 */}
          <div className="relative rounded-[28px] overflow-hidden min-h-[320px] md:min-h-[380px] lg:min-h-[420px]">
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src="/images/card-3.png"
                alt="background"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-5 sm:p-6">
              {/* Top */}
              <div className="flex items-start justify-between">
                <span className="text-white  text-2xl md:text-3xl tracking-tight">
                  IPSUM
                  <sup className="text-xs">™</sup>
                </span>

                <button className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="3"
                      y="12"
                      width="4"
                      height="9"
                      rx="1"
                      fill="#222"
                    />
                    <rect
                      x="10"
                      y="7"
                      width="4"
                      height="14"
                      rx="1"
                      fill="#222"
                    />
                    <rect
                      x="17"
                      y="3"
                      width="4"
                      height="18"
                      rx="1"
                      fill="#222"
                    />
                  </svg>
                </button>
              </div>

              {/* Inner White Card */}
              <div className="bg-white rounded-[24px] p-5 sm:p-6 shadow-xl max-w-sm">
                <p className="text-3xl md:text-4xl  text-black tracking-tight">
                  120+
                </p>

                <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
                  Collaborating with leading AI and cloud technology providers.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[28px] bg-[#F5F5F5] min-h-[320px] md:min-h-[380px] p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm md:text-base text-gray-500 font-medium">
                Commitment to measurable
              </p>

              <p className="text-2xl sm:text-3xl md:text-5xl text-black mt-3 tracking-tight">
                100%
              </p>
            </div>

            {/* Avatars */}
            <div className="flex items-center -space-x-3 mt-6">
              {[
                {
                  image: "/images/card-1.png",
                  label: "A",
                },
                {
                  image: "/images/card-2.png",
                  label: "B",
                },
                {
                  image: "/images/card-3.png",
                  label: "C",
                },
                {
                  image: "/images/card-4.png",
                  label: "D",
                },
              ].map((a, i) => (
                <div
                  key={i}
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full border-[3px] border-white overflow-hidden bg-gray-300"
                >
                  <Image
                    src={a.image}
                    alt={a.label}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-5">
              &ldquo;Their automation strategy completely reshaped how we work.
              It&rsquo;s efficient, intelligent, and seamless.&rdquo;
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            {/* Card 3 */}
            <div className="rounded-[28px] bg-[#CCFF00] p-6 sm:p-7 flex-1 min-h-[180px] flex flex-col justify-between">
              <div>
                <p className="text-sm md:text-base font-semibold text-black">
                  Data Points
                </p>

                <p className="text-2xl sm:text-3xl md:text-5xl text-black mt-3 tracking-tight">
                  520k+
                </p>
              </div>

              <p className="text-sm md:text-base text-black leading-relaxed mt-4">
                Analyzed monthly to power smarter business strategies.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-[28px] bg-black p-6 sm:p-7 min-h-[140px] flex items-center justify-between">
              <div>
                <p className="text-white text-sm md:text-base font-medium">
                  Continents
                </p>
              </div>

              <p className="text-white text-2xl md:text-3xl  tracking-tight">
                20+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}