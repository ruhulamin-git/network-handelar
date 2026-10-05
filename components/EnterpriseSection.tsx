// "use client";

// import Image from "next/image";
// import enterpriseImage from "../public/images/enterprise_integration.png";

// const features = [
//   "99.99% Infrastructure Uptime SLA",
//   "Real-time Performance Monitoring",
//   "SOC 2 Type II Compliant Architectures",
// ];

// export default function EnterpriseSection() {
//   return (
//     <section className=" ">
//       <div className="container-premium">
//         <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-12">
//           {/* ── Left: Image ── */}
//           <div className="w-full md:w-1/2 flex-shrink-0">
//             <div className="relative rounded-2xl overflow-hidden aspect-[3/4] w-full max-w-md mx-auto md:mx-0">
//               <Image
//                 src={enterpriseImage}
//                 alt="Enterprise network infrastructure with fiber optic cables"
//                 fill
//                 className="object-cover"
//               />

//               {/* subtle inner border overlay */}
//               <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
//             </div>
//           </div>

//           {/* ── Right: Content ── */}
//           <div className="w-full md:w-1/2 space-y-6">
//             {/* Heading */}
//             <h2 className="text-white text-2xl md:text-3xl font-semibold leading-snug">
//               Seamless Enterprise{" "}
//               <span className="text-cyan-400 font-semibold">Integration</span>
//             </h2>

//             {/* Body */}
//             <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light max-w-md">
//               Our handlers specialize in complex network transitions. Whether
//               migrating from legacy on-premise solutions to Hybrid Cloud or
//               scaling your edge computing capacity, we ensure zero-latency
//               operational continuity.
//             </p>

//             {/* Feature list */}
//             <ul className="space-y-3">
//               {features.map((feature) => (
//                 <li key={feature} className="flex items-center gap-3">
//                   {/* Cyan check circle */}
//                   <span className="flex-shrink-0 w-5 h-5 rounded-full border border-cyan-400/60 flex items-center justify-center">
//                     <svg
//                       className="w-3 h-3 text-cyan-400"
//                       viewBox="0 0 12 12"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <polyline points="2,6 5,9 10,3" />
//                     </svg>
//                   </span>
//                   <span className="text-gray-300 text-sm font-medium">
//                     {feature}
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             {/* CTA Button */}
//             <div className="pt-2">
//               <button
//                 className="
//                   px-6 py-2.5 text-sm font-semibold text-cyan-400
//                   border border-cyan-400/70 rounded-lg
//                   bg-transparent
//                   hover:bg-cyan-400/10
//                   transition-colors duration-200
//                   tracking-wide
//                 "
//               >
//                 Review SLA Documents
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
