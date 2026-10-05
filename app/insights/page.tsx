"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";
import CTASection from "@/components/CTASection";
import { usePageRevealAnimations } from "@/components/animations/usePageRevealAnimations";

// Mock blog data - Replace with actual API call
const mockInsights = [
  {
    slug: "unlocking-the-power-of-ai-agentics",
    title: "Unlocking the Power of AI Agentics",
    excerpt: "Think of AI Agentics like your smartest employee—but one who never sleeps, forgets, or burns out. A Real-World Guide for Visionary Businesses.",
    date: "2024",
    category: "AI & Innovation"
  },
  {
    slug: "digital-transformation-guide",
    title: "The Complete Guide to Digital Transformation",
    excerpt: "Learn how to successfully navigate digital transformation and modernize your business operations for the future.",
    date: "2024",
    category: "Digital Strategy"
  },
  {
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration: Best Practices for Success",
    excerpt: "Discover proven strategies for migrating your infrastructure to the cloud without disrupting your business.",
    date: "2024",
    category: "Cloud Computing"
  },
  {
    slug: "cybersecurity-essentials",
    title: "Cybersecurity Essentials for Modern Businesses",
    excerpt: "Protect your business with these essential cybersecurity practices and stay ahead of emerging threats.",
    date: "2024",
    category: "Security"
  },
  {
    slug: "automation-workflow-optimization",
    title: "Workflow Automation: Boost Your Productivity",
    excerpt: "Automate repetitive tasks and streamline your workflows to increase efficiency and reduce costs.",
    date: "2024",
    category: "Automation"
  },
  {
    slug: "custom-software-roi",
    title: "Maximizing ROI with Custom Software Development",
    excerpt: "Learn how custom software solutions can deliver measurable returns and competitive advantages.",
    date: "2024",
    category: "Development"
  }
];

export default function InsightsPage() {
  const containerRef = useRef(null);
  const [insights, setInsights] = useState(mockInsights.slice(0, 3));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);

  // Simulate API call to fetch more posts
  const loadMoreInsights = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const startIndex = page * 3;
    const endIndex = startIndex + 3;
    const newInsights = mockInsights.slice(startIndex, endIndex);
    
    if (newInsights.length === 0) {
      setHasMore(false);
    } else {
      setInsights(prev => [...prev, ...newInsights]);
      setPage(prev => prev + 1);
    }
    
    setLoading(false);
  }, [page, loading, hasMore]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreInsights();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loadMoreInsights, hasMore, loading]);

  usePageRevealAnimations(containerRef, {
    hero: ".insights-hero-animate",
    sections: [
      {
        selector: ".insight-card",
        y: 100,
        duration: 1,
        start: "top 80%",
        delayStep: 0.1,
      },
    ],
  });

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section - Creative with Email Subscription */}
      <section className="relative w-full min-h-screen bg-gray-800 flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float-slower" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Icons */}
        <div className="absolute top-32 right-20 opacity-20 animate-float-slow">
          <svg className="w-24 h-24 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <div className="absolute bottom-32 left-20 opacity-20 animate-float-slower">
          <svg className="w-32 h-32 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <div className="max-w-[1600px] mx-auto px-6  md:px-24 w-full relative z-10">
          <div className="insights-hero-animate max-w-5xl mx-auto text-center">
            <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-xs mt-8 mb-6 block animate-fade-in">
              Insights & Trends
            </span>
            
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 tracking-tight leading-[1.05] text-white">
              Digital Strategy For The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-shift">
                Impact-Driven
              </span>
            </h1>
            
            <p className="text-md md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Join a growing community of purpose-driven entrepreneurs, nonprofit changemakers, and bold tech leaders who 
              trust Network Handlers for real, results-oriented insights. Get battle-tested growth tips, AI-powered strategies, 
              and zero-fluff tech know-how—delivered straight to your inbox.
            </p>

            {/* Email Subscription Form */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                {/* Decorative Arrows */}
                <div className="hidden md:block absolute -left-32 top-1/2 -translate-y-1/2">
                  <svg className="w-24 h-24 text-cyan-400 opacity-50" viewBox="0 0 100 100" fill="none">
                    <path d="M20 50 Q 35 30, 50 50 T 80 50" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <path d="M70 40 L 80 50 L 70 60" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="hidden md:block absolute -right-32 top-1/2 -translate-y-1/2">
                  <svg className="w-24 h-24 text-cyan-400 opacity-50 scale-x-[-1]" viewBox="0 0 100 100" fill="none">
                    <path d="M20 50 Q 35 30, 50 50 T 80 50" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <path d="M70 40 L 80 50 L 70 60" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Form */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-3 shadow-2xl">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your work email"
                      className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    />
                    <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Trust Badge */}
                <p className="text-gray-400 text-sm mt-4">
                  🔒 No spam. Unsubscribe anytime. Trusted by 1000+ leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid with Infinite Scroll */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-premium">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {insights.map((insight, index) => (
                <Link 
                  key={`${insight.slug}-${index}`}
                  href={`/insights/${insight.slug}`}
                  className="insight-card block group"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 hover:border-cyan-400 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        {/* Category & Date */}
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-4 py-1 bg-cyan-500/10 text-cyan-600 rounded-full text-xs font-bold uppercase tracking-wider">
                            {insight.category}
                          </span>
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar size={16} />
                            <span>{insight.date}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                          {insight.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {insight.excerpt}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                          <ArrowRight size={24} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Loading Indicator */}
            {loading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
                <span className="ml-3 text-gray-600 font-medium">Loading more insights...</span>
              </div>
            )}

            {/* Intersection Observer Target */}
            <div ref={observerTarget} className="h-10" />

            {/* End Message */}
            {!hasMore && (
              <div className="text-center py-12">
                <p className="text-gray-500 font-medium">You've reached the end of our insights. Check back soon for more!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Business?"
        description="Discover how our innovative solutions can help you stay ahead in the digital age. Let's build something extraordinary together."
        buttonText="Get Started"
      />
    </div>
  );
}
