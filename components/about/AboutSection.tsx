// app/components/AboutSection.tsx

import Image from "next/image";

const avatars = [
  { src: "https://i.pravatar.cc/48?img=1", alt: "Engineer 1" },
  { src: "https://i.pravatar.cc/48?img=2", alt: "Engineer 2" },
  { src: "https://i.pravatar.cc/48?img=3", alt: "Engineer 3" },
  { src: "https://i.pravatar.cc/48?img=4", alt: "Engineer 4" },
  { src: "https://i.pravatar.cc/48?img=5", alt: "Engineer 5" },
];

export default function AboutSection() {
  return (
    <section className="bg-white flex items-center justify-center px-6 py-16 lg:py-24">
      <div className="max-w-4xl w-full mx-auto text-center">

        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-black">
            What We Do
          </p>
        </div>

    <h2 className="text-4xl md:text-6xl  text-gray-900 tracking-tighter leading-[0.95] mb-6">
          A full-stack software partner
        <br />
      engineered to ship
        <span className="inline-flex items-center gap-2">
          <Image
            src="/icons/about-icon-1.svg"
            alt="brain icon"
            width={40}
            height={40}
            className="inline-block"
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
              className="inline-block"
            />
            more scalable
          </span>
        </span>
      </h2>

        {/* Avatars + trust badge */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden -ml-3 first:ml-0"
                style={{ zIndex: avatars.length - i }}
              >
                <img src={avatar.src} alt={avatar.alt} className="w-full h-full object-cover" />
              </div>
            ))}
            <div
              className="relative w-11 h-11 rounded-full bg-[#d6fd70] border-2 border-neutral-200 flex items-center justify-center -ml-3"
              style={{ zIndex: 0 }}
            >
              <span className="text-black font-semibold text-lg leading-none">+</span>
            </div>
          </div>
          <p className="text-sm text-neutral-500 font-medium tracking-wide">
            Trusted by 5,000+ developers & teams
          </p>
        </div>

      </div>
    </section>
  );
}

function ChartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" fill="none" />
      <path d="M12 3 A9 9 0 0 1 21 12 L12 12 Z" fill="white" opacity="0.9" />
      <circle cx="12" cy="12" r="4" fill="#38bdf8" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6H8.3A7.003 7.003 0 0 1 5 9a7 7 0 0 1 7-7z" />
    </svg>
  );
}