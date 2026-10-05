"use client";

import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function AIAgenticsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-gray-900 text-white flex items-center py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-24 w-full">
          <Link 
            href="/insights" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-wider">Back to Insights</span>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-wider">
                AI & Innovation
              </span>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar size={16} />
                <span>2024</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
              Unlocking the Power of <br />
              <span className="text-cyan-400">AI Agentics</span>
            </h1>
            
            <p className="text-2xl text-gray-300 leading-relaxed font-medium">
              Think of AI Agentics like your smartest employee—but one who never sleeps, forgets, or burns out.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 md:py-32 bg-white">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                A Real-World Guide for Visionary Businesses
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Let's get one thing straight: the future isn't coming. It's already here. And if your business is still 
                stuck in manual workflows, disconnected data, and burnt-out teams, it's time for a serious upgrade.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Welcome to the world of AI Agentics—the future-forward tech you didn't know you desperately needed (until now).
              </p>
            </div>

            {/* What Is AI Agentics */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                So What Is AI Agentics—And Why Should You Care?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Think of AI Agentics like your smartest employee—but one who never sleeps, forgets, or burns out. 
                These are intelligent software agents that learn, act, and evolve on their own to get work done. 
                We're talking machine learning, natural language processing (NLP), automation, decision-making—the whole brainy toolbox.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                This isn't science fiction. This is your new COO, customer service rep, data analyst, and operations manager—all 
                rolled into one digital powerhouse.
              </p>
            </div>

            {/* What Makes AI Agents Game-Changing */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                What Makes AI Agents So Game-Changing?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Let's break it down like a boss:
              </p>
              <ul className="space-y-4">
                <li className="text-lg text-gray-600">
                  <strong className="text-gray-900">Autonomous & Always-On:</strong> They make decisions and execute tasks without needing hand-holding.
                </li>
                <li className="text-lg text-gray-600">
                  <strong className="text-gray-900">Adaptable:</strong> These agents get smarter over time—seriously, they learn.
                </li>
                <li className="text-lg text-gray-600">
                  <strong className="text-gray-900">Interactive:</strong> They talk to humans (yes, real convos), systems, and other bots.
                </li>
                <li className="text-lg text-gray-600">
                  <strong className="text-gray-900">Goal-Driven:</strong> You give them a mission. They make it happen. Period.
                </li>
              </ul>
            </div>

            {/* Why Your Business Needs This */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Why Your Business Needs This Tech Yesterday
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Here's what you gain when you bring AI Agentics into the mix:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Massive Efficiency</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Automate the repetitive junk. Free up your humans to do what only humans can—create, connect, lead.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Smarter Decisions</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    AI agents read data like it's the morning paper. They see patterns we miss and act faster than any exec.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Next-Level Customer Experience</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    From AI chatbots to voice agents, your clients get personalized, instant support 24/7. You look like a rockstar brand that actually listens.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Scalability Without Stress</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Grow without hiring a small army. These agents scale with you—no office space needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Innovation & Edge</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Your competitors are already testing this. Beat them to the punch and show your market who's boss.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Behind AI Agentics */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                What's Under the Hood? The Tech Behind AI Agentics
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Don't worry, you don't need a PhD in AI to get this:
              </p>
              <ul className="space-y-4">
                <li className="text-lg text-gray-600">
                  <strong className="text-gray-900">Machine Learning:</strong> They learn from past data to make better decisions tomorrow. Smart, right?
                </li>
                <li className="text-lg text-gray-600">
                  <strong className="text-gray-900">Natural Language Processing (NLP):</strong> They speak human—so they can chat, email, and even text.
                </li>
                <li className="text-lg text-gray-600">
                  <strong className="text-gray-900">Robotic Process Automation (RPA):</strong> Tedious tasks? Done. These bots mimic human actions, faster and more accurately.
                </li>
                <li className="text-lg text-gray-600">
                  <strong className="text-gray-900">Knowledge & Reasoning:</strong> They remember stuff and make decisions based on real logic, not vibes.
                </li>
              </ul>
            </div>

            {/* How to Start */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                How to Start Using AI Agentics in Your Business
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Starting small is the smartest move. Here's my no-BS roadmap:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">1. Get Clear on Your Goals</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    What's bleeding time or money? Start there—customer service, lead gen, ops?
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">2. Check Your Data</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Clean, quality data is gold. If your data's messy, your agents won't shine.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">3. Choose the Right Stack</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Don't get distracted by shiny tech. Choose tools that integrate with your systems and are built to scale.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">4. Train & Test</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Partner with experts (hey 👋🏽) to build your models, test, tweak, and train your agents until they're ready to fly.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">5. Monitor & Optimize</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    This is not "set it and forget it." Keep watching, refining, and scaling what works.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Word */}
            <div className="bg-gray-50 rounded-3xl p-10 md:p-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Final Word: This Isn't Optional Anymore
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                AI Agentics isn't just a nice-to-have—it's survival-of-the-smartest. In a world where disruption is the norm, 
                only the bold will build what's next.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                So if you're ready to stop playing small, reclaim your time, and lead like the visionary you are—let's talk. 
                We build AI agent systems that aren't just smart. They're built for impact.
              </p>
              <p className="text-xl font-bold text-cyan-600 mt-6">
                Welcome to the future. You're right on time.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Build Your AI Future?"
        description="Let's discuss how AI Agentics can transform your business operations and drive unprecedented growth."
        buttonText="Start Your AI Journey"
      />
    </div>
  );
}
