import React, { useState } from 'react';

const ContactMainPage = () => {
     const [agreed, setAgreed] = useState(false);
    return (
  <section className="contact-main-animate bg-[#f5f7fa] py-12 px-4">
<div className="container-premium">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-5">

            {/* Hotline card */}
            <div className="contact-panel bg-white border border-gray-200 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-8 h-8 rounded-full border border-cyan-400/50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">24/7 Technical Hotline</p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-0.5">
                    Priority queue for Tier-3 network incidents and infrastructure failures.
                  </p>
                </div>
              </div>

              <div className="bg-[#0f1f45] rounded-lg px-5 py-4">
                <p className="text-cyan-400 text-[9px] font-semibold uppercase tracking-[0.25em] mb-1">
                  North America
                </p>
                <p className="text-white font-black text-xl sm:text-2xl tracking-tight">
                  +1 (800) NET-PRO-911
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                <span className="text-gray-500 text-xs">Current Status: Operational</span>
              </div>
            </div>

            {/* Dedicated Channels card */}
            <div className="contact-panel bg-white border border-gray-200 rounded-xl p-6 space-y-4">
              <p className="text-gray-900 font-bold text-sm uppercase tracking-wider">
                Dedicated Channels
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-7 h-7 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider">Enterprise Sales</p>
                    <a href="mailto:solutions@network-handlers.com" className="text-cyan-600 text-xs hover:underline">
                      solutions@network-handlers.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-7 h-7 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 text-xs font-semibold uppercase tracking-wider">SLA Compliance</p>
                    <a href="mailto:sla-ops@network-handlers.com" className="text-cyan-600 text-xs hover:underline">
                      sla-ops@network-handlers.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Operations card */}
            <div className="contact-panel bg-white border border-gray-200 rounded-xl p-6 space-y-4">
              <p className="text-gray-900 font-bold text-sm uppercase tracking-wider">
                Global Operations Centers
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p className="text-gray-900 text-xs font-bold">New York HQ</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      One World Trade Center, Suite 65<br />
                      New York, NY 10007, USA
                    </p>
                    <a href="#" className="text-cyan-600 text-[10px] font-semibold uppercase tracking-wider hover:underline mt-1 inline-flex items-center gap-1">
                      View on Map
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p className="text-gray-900 text-xs font-bold">London Regional Hub</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      30 St Mary Axe (The Gherkin)<br />
                      London EC3A 8BF, UK
                    </p>
                    <a href="#" className="text-cyan-600 text-[10px] font-semibold uppercase tracking-wider hover:underline mt-1 inline-flex items-center gap-1">
                      View on Map
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Form ── */}
          <div className="contact-panel bg-white border border-gray-200 rounded-xl p-6 sm:p-8 space-y-6 h-fit">
            <div>
              <p className="text-gray-900 font-bold text-base mb-1">Service Inquiry Intake</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Please provide specific technical details to ensure your request is routed to the appropriate engineering team.
              </p>
            </div>

            <div className="space-y-4">
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    placeholder="j.doe@enterprise.com"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition"
                  />
                </div>
              </div>

              {/* Row 2: Inquiry Type + Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                    Inquiry Type
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition appearance-none">
                    <option>Technical Support Request</option>
                    <option>Architecture Consultation</option>
                    <option>SLA Review</option>
                    <option>Enterprise Sales</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                    Urgency Level
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition appearance-none">
                    <option>P1 - Critical Failure</option>
                    <option>P2 - High Impact</option>
                    <option>P3 - Medium</option>
                    <option>P4 - Low / Informational</option>
                  </select>
                </div>
              </div>

              {/* Technical Environment */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                  Technical Environment
                </label>
                <input
                  type="text"
                  placeholder="e.g., Hybrid Cloud, On-Premise Data Center, Cisco Nexus Core"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition"
                />
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                  Project Description / Technical Logs
                </label>
                <textarea
                  rows={4}
                  placeholder="Please describe the infrastructure requirements or attach incident logs..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition resize-none"
                />
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-cyan-500 flex-shrink-0 cursor-pointer"
                />
                <span className="text-gray-500 text-xs leading-relaxed">
                  I confirm that this inquiry involves secure infrastructure and adheres to
                  our{" "}
                  <a href="#" className="text-cyan-600 underline underline-offset-2 hover:text-cyan-700">
                    Data Privacy Agreement
                  </a>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="button"
                className="
                  w-full bg-[#0f1f45] hover:bg-[#162a5e]
                  text-white font-bold text-xs uppercase tracking-[0.2em]
                  py-3.5 rounded-lg
                  transition-all duration-200
                  hover:shadow-[0_4px_20px_rgba(15,31,69,0.4)]
                  active:scale-[0.99]
                "
              >
                Submit Engineering Request
              </button>
            </div>
          </div>

        </div>
</div>
      </section>
    );
};

export default ContactMainPage;