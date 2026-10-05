// "use client";

// import { Star, Plus, TrendingUp } from "lucide-react";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { CustomButton } from "./ui/custom-button";

// const personImg = "/images/t1.jpg";

// type FloatCard = {
//   rotate: number;
//   y: number;
//   scale: number;
//   content: React.ReactNode;
// };

// const cards: FloatCard[] = [
//   {
//     rotate: -22,
//     y: 40,
//     scale: 0.85,
//     content: (
//       <div className="w-44 h-56 rounded-[24px] bg-white border border-gray-200/50 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col hover:border-cyan-300/50 transition-all duration-300">
//         <p className="text-[11px] font-bold text-gray-900 tracking-wide">Intelligence in Every Decision</p>
//         <div className="mt-auto h-20 flex items-end gap-1.5">
//           {[30, 45, 25, 60, 40, 75, 55].map((h, i) => (
//             <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500 to-cyan-400" style={{ height: `${h}%` }} />
//           ))}
//         </div>
//       </div>
//     ),
//   },
//   {
//     rotate: -15,
//     y: 10,
//     scale: 0.95,
//     content: (
//       <div className="w-48 h-60 rounded-[24px] bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-cyan-300/50 transition-all duration-300">
//         <p className="text-[11px] text-gray-600 font-semibold tracking-wide">YEARLY INCOME</p>
//         <p className="text-lg font-black text-gray-900 mt-2">$4,900 <span className="text-gray-400 font-normal text-sm">/ $10,000</span></p>
//         <div className="mt-3 h-2 rounded-full bg-gray-200 overflow-hidden">
//           <div className="h-full w-1/2 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" />
//         </div>
//         <div className="mt-4 space-y-2.5">
//           {[["Payment", "$300"], ["Withdraw", "$150"], ["Transfer", "$100"]].map(([l, v]) => (
//             <div key={l} className="flex items-center justify-between rounded-lg bg-gray-100/60 px-3 py-2 border border-gray-200/50">
//               <span className="text-[10px] font-semibold text-gray-700">{l}</span>
//               <span className="text-[11px] font-bold text-gray-900">{v}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     ),
//   },
//   {
//     rotate: -8,
//     y: -10,
//     scale: 1,
//     content: (
//       <div className="w-48 h-60 rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] relative bg-white border border-gray-200/50 hover:border-cyan-300/50 transition-all duration-300">
//         <img src={personImg} alt="" className="w-full h-full object-cover" loading="lazy" />
//         <div className="absolute bottom-3 left-3 right-3 rounded-[16px] bg-white/90 backdrop-blur-md p-3 flex justify-between border border-white/40 shadow-lg">
//           <div>
//             <p className="text-[9px] text-gray-600 font-semibold">Income</p>
//             <p className="text-xs font-bold text-gray-900 mt-1">$2,670</p>
//           </div>
//           <div>
//             <p className="text-[9px] text-gray-600 font-semibold">Expense</p>
//             <p className="text-xs font-bold text-gray-900 mt-1">$1,200</p>
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     rotate: -3,
//     y: -20,
//     scale: 1.05,
//     content: (
//       <div className="w-52 h-64 rounded-[24px] bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col hover:border-cyan-300/50 transition-all duration-300">
//         <p className="text-sm font-black leading-tight text-gray-900">Analytics & Performance</p>
//         <div className="mt-auto h-24 relative">
//           <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
//             <defs>
//               <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
//                 <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.1" />
//                 <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
//               </linearGradient>
//             </defs>
//             <path d="M0,40 Q20,30 40,25 T80,12 L100,8" stroke="rgb(6, 182, 212)" fill="none" strokeWidth="2" />
//             <path d="M0,40 Q20,30 40,25 T80,12 L100,8 L100,50 L0,50 Z" fill="url(#chartGrad)" />
//           </svg>
//           <div className="flex justify-between text-[8px] text-gray-500 font-semibold mt-2">
//             {["2019","2020","2021","2022","2023","2024"].map(y=><span key={y}>{y}</span>)}
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     rotate: 2,
//     y: -25,
//     scale: 1.05,
//     content: (
//       <div className="w-52 h-64 rounded-[24px] bg-gradient-to-br from-gray-900 to-black text-white border border-gray-800/50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex items-center hover:border-cyan-500/30 transition-all duration-300">
//         <p className="text-base font-bold leading-snug">
//           Expertise <span className="inline-flex w-2.5 h-2.5 rounded-full bg-lime-400 align-middle mx-1" /> that Combines <span className="text-cyan-400 font-black">Strategy,</span> Data & AI
//         </p>
//       </div>
//     ),
//   },
//   {
//     rotate: 8,
//     y: -15,
//     scale: 1,
//     content: (
//       <div className="w-48 h-60 rounded-[24px] bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/60 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center hover:border-cyan-300/50 transition-all duration-300">
//         <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
//           <Plus className="w-7 h-7 text-white" />
//         </div>
//         <p className="text-sm font-bold text-gray-900">AI Training</p>
//         <p className="text-[10px] mt-2 text-gray-600 font-medium">Upload your content</p>
//       </div>
//     ),
//   },
//   {
//     rotate: 14,
//     y: 0,
//     scale: 0.95,
//     content: (
//       <div className="w-48 h-60 rounded-[24px] bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-cyan-300/50 transition-all duration-300">
//         <div className="flex flex-wrap gap-2">
//           {["Professional", "Strategic", "AI-Led"].map(t => (
//             <span key={t} className="text-[9px] px-2.5 py-1.5 rounded-full bg-gray-100 text-gray-700 font-semibold border border-gray-200/50">{t}</span>
//           ))}
//           {["Smarter", "Grow Faster"].map(t => (
//             <span key={t} className="text-[9px] px-2.5 py-1.5 rounded-full bg-gray-900 text-white font-semibold">{t}</span>
//           ))}
//         </div>
//         <p className="text-[10px] text-gray-600 font-semibold mt-5">Total Data Points</p>
//         <p className="text-3xl font-black text-gray-900 mt-2">520k+</p>
//       </div>
//     ),
//   },
//   {
//     rotate: 20,
//     y: 25,
//     scale: 0.88,
//     content: (
//       <div className="w-44 h-56 rounded-[24px] bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-cyan-300/50 transition-all duration-300">
//         <div className="rounded-[14px] bg-gray-900 text-white px-3 py-2 flex items-center justify-between">
//           <span className="text-[9px] font-semibold">Performance</span>
//           <TrendingUp className="w-3.5 h-3.5 text-lime-400" />
//         </div>
//         <p className="text-3xl font-black text-gray-900 mt-4">49%</p>
//         <p className="text-[9px] text-gray-600 font-semibold mt-2">Growth Rate</p>
//         <div className="flex flex-wrap gap-1.5 mt-4">
//           {["Strategic","AI-Focused","Grow Fast"].map(t=>(
//             <span key={t} className="text-[8px] px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold border border-gray-200/50">{t}</span>
//           ))}
//         </div>
//       </div>
//     ),
//   },
// ];

// export function HeroSection() {
//   const typewriterRef = useRef<HTMLSpanElement | null>(null);

//   useEffect(() => {
//     const el = typewriterRef.current;
//     if (!el) return;

//     const words = ["AI Agents", "Experiences", "Integration", "Software", "Technology"];
//     let wordIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;
//     let timeoutId: number;
//     let mounted = true;

//     const tick = () => {
//       if (!mounted) return;
//       const current = words[wordIndex];
//       if (!isDeleting) {
//         el.textContent = current.slice(0, charIndex + 1);
//         charIndex += 1;
//         if (charIndex === current.length) {
//           isDeleting = true;
//           timeoutId = window.setTimeout(tick, 1100);
//         } else {
//           timeoutId = window.setTimeout(tick, 80);
//         }
//       } else {
//         el.textContent = current.slice(0, charIndex - 1);
//         charIndex -= 1;
//         if (charIndex === 0) {
//           isDeleting = false;
//           wordIndex = (wordIndex + 1) % words.length;
//           timeoutId = window.setTimeout(tick, 300);
//         } else {
//           timeoutId = window.setTimeout(tick, 40);
//         }
//       }
//     };

//     tick();
//     return () => {
//       mounted = false;
//       clearTimeout(timeoutId);
//     };
//   }, []);

//   return (
//     <div className="bg-white mt-3 relative">
//        <section className="relative min-h-screen flex-col justify-center items-center text-center pt-16 md:pt-32 overflow-hidden rounded-[24px] mx-3">
//        <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center" />
//       <div className="relative z-10 max-w-3xl mx-auto px-4 container-premium mt-5">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight font-md">
//           Building Better
//         </h1>
//         <div className="mt-2 flex items-center justify-center w-full">
//           <h2 className="min-w-[260px] whitespace-nowrap text-center text-4xl leading-tight tracking-tight font-md text-cyan-400 sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl">
//             <span
//               ref={typewriterRef}
//               className="inline-block min-w-[12ch] align-baseline"
//             />
//           </h2>
//         </div>
//         <p className="mt-5 text-white/75 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
//           We believe technology&apos;s potential is limitless. Our mission is to
//           help businesses become smarter, faster, and simpler—in short, better.
//         </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
//           <Link href="/services">
//             <button className="rounded-full cursor-pointer border-2 border-white/50 px-7 py-3 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-black hover:bg-black hover:text-white">
//               Discover Our Services
//             </button>
//           </Link>
//           <Link href="/contact">
//             <CustomButton
//               variant="cyan"
//               uppercase
//               showArrow
//               className="px-8 shadow-lg shadow-cyan-500/20"
//             >
//               Get in Touch
//             </CustomButton>
//           </Link>
//         </div>
      

//       {/* Adjust responsive spacing for train container */}
//       <div className="relative z-10 lg:mt-[6%] xl:mt-[8%] 2xl:mt-[10%] md:mt-[12%]  mt-[10%]">
//         <CurvedCardTrain cards={cards} />

//         <div className="text-center pb-8 sm:pb-12 lg:-mt-10  md:mt-10 mt-5">
//           <p className="text-white text-sm">Rated 4.9/5 by 4,900+ clients</p>
//           <div className="mt-2 flex justify-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="w-5 h-5 fill-[oklch(0.85_0.18_85)] text-[oklch(0.85_0.18_85)]" />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// }

// function CurvedCardTrain({ cards }: { cards: FloatCard[] }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const ringRef = useRef<HTMLDivElement>(null);
//   const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const pausedRef = useRef(false);

//   // Responsive values state
//   const [cardCount, setCardCount] = useState(18);
//   const [cardScale, setCardScale] = useState(0.55);

//   // Handle dynamic sizing and counts based on screen width
//   useEffect(() => {
//     const handleResize = () => {
//       if (!containerRef.current) return;
//       const width = window.innerWidth;

//       if (width < 640) {
//         // Mobile
//         setCardCount(6);
//         setCardScale(0.55); // Bigger cards on mobile
//       } else if (width < 1024) {
//         // Tablet
//         setCardCount(10);
//         setCardScale(0.62); // Bigger cards on tablet
//       } else {
//         // Desktop
//         setCardCount(18);
//         setCardScale(0.55);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Generate dynamic item array based on state count
//   const items = Array.from({ length: cardCount }, (_, i) => cards[i % cards.length]);
//   const N = items.length;

//   useEffect(() => {
//     let raf = 0;
//     let last = performance.now();
//     let t = 0;
//     const DURATION = 32000;

//     const tick = (now: number) => {
//       const dt = now - last;
//       last = now;
//       if (!pausedRef.current) {
//         t = (t - dt / DURATION + 1) % 1;
//       }

//       const el = containerRef.current;
//       const ring = ringRef.current;
//       if (el && ring) {
//         const W = el.clientWidth;
        
//         // Dynamic Radius Calculation: balance between visibility and spacing
//         let R = Math.min(W * 0.28, 750);
//         if (W < 640) {
//           R = Math.min(W * 0.26, 220); // Increased spacing on mobile
//         } else if (W < 1024) {
//           R = Math.min(W * 0.27, 380); // Increased spacing on tablet
//         }

//         // Rotate the entire ring
//         ring.style.transform = `translate(-50%, -50%) rotateX(12deg) rotateY(${t * 360}deg)`;

//         for (let i = 0; i < N; i++) {
//           const node = itemRefs.current[i];
//           if (!node) continue;
//           const angle = (i / N) * Math.PI * 2;
//           const world = angle + t * Math.PI * 2;
//           const front = Math.cos(world); 
//           const opacity = 0.15 + ((front + 1) / 2) * 0.85;

//           node.style.transform = `translate(-50%, -50%) rotateY(${(angle * 180) / Math.PI}deg) translateZ(${R}px)`;
//           node.style.opacity = String(opacity);
//           node.style.zIndex = String(Math.round((front + 1) * 100));
//         }
//       }
//       raf = requestAnimationFrame(tick);
//     };

//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [N]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-[180px] sm:h-[200px] md:h-[180px] [overflow-x:clip] [overflow-y:visible]"
//       onMouseEnter={() => (pausedRef.current = true)}
//       onMouseLeave={() => (pausedRef.current = false)}
//       onTouchStart={() => (pausedRef.current = true)} // Pause on mobile touch
//       onTouchEnd={() => (pausedRef.current = false)}
//       style={{
//         perspective: "1600px",
//         perspectiveOrigin: "50% 40%",
//       }}
//     >
//       <div
//         ref={ringRef}
//         className="absolute left-1/2 top-1/2 w-0 h-0"
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {items.map((c, i) => (
//           <div
//             key={`${i}-${cardCount}`} // Unique key to force re-render when count changes
//             ref={(el) => {
//               itemRefs.current[i] = el;
//             }}
//             className="absolute left-0 top-0 will-change-transform"
//             style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
//           >
//             {/* Dynamic scaling for card sizing across screen steps */}
//             <div style={{ transform: `scale(${cardScale})`, transformOrigin: "center" }}>
//               {c.content}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { Star, Plus, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CustomButton } from "./ui/custom-button";

const personImg = "/images/t1.jpg";

type FloatCard = {
  rotate: number;
  y: number;
  scale: number;
  content: React.ReactNode;
};

const cards: FloatCard[] = [
  {
    rotate: -22,
    y: 40,
    scale: 0.85,
    content: (
      <div className="w-44 h-56 rounded-[24px] bg-white border border-gray-200/50 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col hover:border-cyan-300/50 transition-all duration-300">
        <p className="text-[11px] font-bold text-gray-900 tracking-wide">Intelligence in Every Decision</p>
        <div className="mt-auto h-20 flex items-end gap-1.5">
          {[30, 45, 25, 60, 40, 75, 55].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500 to-cyan-400" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    rotate: -15,
    y: 10,
    scale: 0.95,
    content: (
      <div className="w-48 h-60 rounded-[24px] bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-cyan-300/50 transition-all duration-300">
        <p className="text-[11px] text-gray-600 font-semibold tracking-wide">YEARLY INCOME</p>
        <p className="text-lg font-black text-gray-900 mt-2">$4,900 <span className="text-gray-400 font-normal text-sm">/ $10,000</span></p>
        <div className="mt-3 h-2 rounded-full bg-gray-200 overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" />
        </div>
        <div className="mt-4 space-y-2.5">
          {[["Payment", "$300"], ["Withdraw", "$150"], ["Transfer", "$100"]].map(([l, v]) => (
            <div key={l} className="flex items-center justify-between rounded-lg bg-gray-100/60 px-3 py-2 border border-gray-200/50">
              <span className="text-[10px] font-semibold text-gray-700">{l}</span>
              <span className="text-[11px] font-bold text-gray-900">{v}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    rotate: -8,
    y: -10,
    scale: 1,
    content: (
      <div className="w-48 h-60 rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] relative bg-white border border-gray-200/50 hover:border-cyan-300/50 transition-all duration-300">
        <img src={personImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute bottom-3 left-3 right-3 rounded-[16px] bg-white/90 backdrop-blur-md p-3 flex justify-between border border-white/40 shadow-lg">
          <div>
            <p className="text-[9px] text-gray-600 font-semibold">Income</p>
            <p className="text-xs font-bold text-gray-900 mt-1">$2,670</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-600 font-semibold">Expense</p>
            <p className="text-xs font-bold text-gray-900 mt-1">$1,200</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    rotate: -3,
    y: -20,
    scale: 1.05,
    content: (
      <div className="w-52 h-64 rounded-[24px] bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col hover:border-cyan-300/50 transition-all duration-300">
        <p className="text-sm font-black leading-tight text-gray-900">Analytics & Performance</p>
        <div className="mt-auto h-24 relative">
          <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M0,40 Q20,30 40,25 T80,12 L100,8" stroke="rgb(6, 182, 212)" fill="none" strokeWidth="2" />
            <path d="M0,40 Q20,30 40,25 T80,12 L100,8 L100,50 L0,50 Z" fill="url(#chartGrad)" />
          </svg>
          <div className="flex justify-between text-[8px] text-gray-500 font-semibold mt-2">
            {["2019","2020","2021","2022","2023","2024"].map(y=><span key={y}>{y}</span>)}
          </div>
        </div>
      </div>
    ),
  },
  {
    rotate: 2,
    y: -25,
    scale: 1.05,
    content: (
      <div className="w-52 h-64 rounded-[24px] bg-gradient-to-br from-gray-900 to-black text-white border border-gray-800/50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex items-center hover:border-cyan-500/30 transition-all duration-300">
        <p className="text-base font-bold leading-snug">
          Expertise <span className="inline-flex w-2.5 h-2.5 rounded-full bg-lime-400 align-middle mx-1" /> that Combines <span className="text-cyan-400 font-black">Strategy,</span> Data & AI
        </p>
      </div>
    ),
  },
  {
    rotate: 8,
    y: -15,
    scale: 1,
    content: (
      <div className="w-48 h-60 rounded-[24px] bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/60 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center hover:border-cyan-300/50 transition-all duration-300">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
          <Plus className="w-7 h-7 text-white" />
        </div>
        <p className="text-sm font-bold text-gray-900">AI Training</p>
        <p className="text-[10px] mt-2 text-gray-600 font-medium">Upload your content</p>
      </div>
    ),
  },
  {
    rotate: 14,
    y: 0,
    scale: 0.95,
    content: (
      <div className="w-48 h-60 rounded-[24px] bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-cyan-300/50 transition-all duration-300">
        <div className="flex flex-wrap gap-2">
          {["Professional", "Strategic", "AI-Led"].map(t => (
            <span key={t} className="text-[9px] px-2.5 py-1.5 rounded-full bg-gray-100 text-gray-700 font-semibold border border-gray-200/50">{t}</span>
          ))}
          {["Smarter", "Grow Faster"].map(t => (
            <span key={t} className="text-[9px] px-2.5 py-1.5 rounded-full bg-gray-900 text-white font-semibold">{t}</span>
          ))}
        </div>
        <p className="text-[10px] text-gray-600 font-semibold mt-5">Total Data Points</p>
        <p className="text-3xl font-black text-gray-900 mt-2">520k+</p>
      </div>
    ),
  },
  {
    rotate: 20,
    y: 25,
    scale: 0.88,
    content: (
      <div className="w-44 h-56 rounded-[24px] bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-cyan-300/50 transition-all duration-300">
        <div className="rounded-[14px] bg-gray-900 text-white px-3 py-2 flex items-center justify-between">
          <span className="text-[9px] font-semibold">Performance</span>
          <TrendingUp className="w-3.5 h-3.5 text-lime-400" />
        </div>
        <p className="text-3xl font-black text-gray-900 mt-4">49%</p>
        <p className="text-[9px] text-gray-600 font-semibold mt-2">Growth Rate</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {["Strategic","AI-Focused","Grow Fast"].map(t=>(
            <span key={t} className="text-[8px] px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold border border-gray-200/50">{t}</span>
          ))}
        </div>
      </div>
    ),
  },
];

export function HeroSection() {
  const typewriterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = typewriterRef.current;
    if (!el) return;

    const words = ["AI Agents", "Experiences", "Integration", "Software", "Technology"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: number;
    let mounted = true;

    const tick = () => {
      if (!mounted) return;
      const current = words[wordIndex];
      if (!isDeleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex += 1;
        if (charIndex === current.length) {
          isDeleting = true;
          timeoutId = window.setTimeout(tick, 1100);
        } else {
          timeoutId = window.setTimeout(tick, 80);
        }
      } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex -= 1;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timeoutId = window.setTimeout(tick, 300);
        } else {
          timeoutId = window.setTimeout(tick, 40);
        }
      }
    };

    tick();
    return () => {
      mounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="bg-white mt-3 relative">
      <section className="relative min-h-screen flex flex-col justify-start items-center text-center pt-16 md:pt-28 pb-10 overflow-hidden rounded-[24px] mx-3 gap-y-12">
        <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center" />
        
        {/* Top Text Content Area */}
        <div className="relative z-20 max-w-3xl mx-auto px-4 container-premium mt-5 shrink-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight font-md">
            Building Better
          </h1>
          <div className="mt-2 flex items-center justify-center w-full">
            <h2 className="min-w-[260px] whitespace-nowrap text-center text-4xl leading-tight tracking-tight font-md text-cyan-400 sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl">
              <span
                ref={typewriterRef}
                className="inline-block min-w-[12ch] align-baseline"
              />
            </h2>
          </div>
          <p className="mt-5 text-white/75 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            We believe technology&apos;s potential is limitless. Our mission is to
            help businesses become smarter, faster, and simpler—in short, better.
          </p>
        </div>

        {/* Buttons - Deeply Anchored Grid Layer */}
        <div className="flex items-center justify-center gap-4 px-4 flex-wrap relative z-30 w-full shrink-0">
          <Link href="/services">
            <button className="rounded-full cursor-pointer border-2 border-white/50 px-7 py-3 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-black hover:bg-black hover:text-white">
              Discover Our Services
            </button>
          </Link>
          <Link href="/contact">
            <CustomButton
              variant="cyan"
              uppercase
              showArrow
              className="px-8 shadow-lg shadow-cyan-500/20"
            >
              Get in Touch
            </CustomButton>
          </Link>
        </div>
      
        {/* Isolated Scalable Container for Train Curve */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-center min-h-[200px] sm:min-h-[320px] mt-[5%]">
          <CurvedCardTrain cards={cards} />

          {/* Bottom Trust Badge */}
          <div className="text-center relative z-20 mt-auto">
            <p className="text-white text-sm">Rated 4.9/5 by 4,900+ clients</p>
            <div className="mt-2 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[oklch(0.85_0.18_85)] text-[oklch(0.85_0.18_85)]" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CurvedCardTrain({ cards }: { cards: FloatCard[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pausedRef = useRef(false);

  const [cardCount, setCardCount] = useState(24);
  const [cardScale, setCardScale] = useState(0.55);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = window.innerWidth;

      if (width < 640) {
        setCardCount(10);
        setCardScale(0.42); 
      } else if (width < 1024) {
        setCardCount(16);
        setCardScale(0.52);
      } else {
        setCardCount(26);
        setCardScale(0.58);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = Array.from({ length: cardCount }, (_, i) => cards[i % cards.length]);
  const N = items.length;

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    let t = 0;
    const DURATION = 36000;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!pausedRef.current) {
        t = (t - dt / DURATION + 1) % 1;
      }

      const el = containerRef.current;
      const ring = ringRef.current;
      if (el && ring) {
        const W = el.clientWidth;
        
        // Fluid scalable radius limit logic
        let R = Math.min(W * 0.35, 880);
        if (W < 640) {
          R = Math.min(W * 0.38, 230); 
        } else if (W < 1024) {
          R = Math.min(W * 0.36, 420);
        }

        // Tilt logic locked safely away from overlapping heights
        ring.style.transform = `translate(-50%, -50%) rotateX(6deg) rotateY(${t * 360}deg)`;

        for (let i = 0; i < N; i++) {
          const node = itemRefs.current[i];
          if (!node) continue;
          const angle = (i / N) * Math.PI * 2;
          const world = angle + t * Math.PI * 2;
          const front = Math.cos(world); 
          
          const opacity = 0.22 + ((front + 1) / 2) * 0.78;

          node.style.transform = `translate(-50%, -50%) rotateY(${(angle * 180) / Math.PI}deg) translateZ(${R}px)`;
          node.style.opacity = String(opacity);
          node.style.zIndex = String(Math.round((front + 1) * 100));
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [N]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[180px] sm:h-[210px] md:h-[230px] lg:h-[250px] [overflow-x:clip] [overflow-y:visible] pointer-events-auto"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
      onTouchEnd={() => (pausedRef.current = false)}
      style={{
        perspective: "2000px",
        perspectiveOrigin: "50% 50%", 
      }}
    >
      <div
        ref={ringRef}
        className="absolute left-1/2 top-1/2 w-0 h-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {items.map((c, i) => (
          <div
            key={`${i}-${cardCount}`}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="absolute left-0 top-0 will-change-transform"
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            <div style={{ transform: `scale(${cardScale})`, transformOrigin: "center" }}>
              {c.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}