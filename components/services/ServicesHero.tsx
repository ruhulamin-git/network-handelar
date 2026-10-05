"use client";

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900" />
      
      {/* Animated Overlay Gradients for Never-Ending Effect */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-transparent animate-gradient-shift" />
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/20 via-indigo-900/30 to-transparent animate-gradient-shift-reverse" />
      </div>
      
      {/* Floating Orbs for Depth */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[150px] animate-float-slow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-400/5 rounded-full blur-[180px] animate-pulse-slow" />
      
      <div className="relative z-10 container-premium w-full">
        {/* Main Content */}
        <div className="services-hero-content space-y-12 max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-cyan-400" />
            <span className="text-cyan-400 font-black uppercase tracking-[0.4em] text-xs">
              Our Services
            </span>
          </div>
          
          {/* Heading */}
          <h1 className="text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter text-white">
            Building Better <br />
            <span className="text-cyan-400">Solutions</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-3xl font-medium">
            From custom software to AI integration, we deliver comprehensive technical solutions that transform your business operations.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            <div className="space-y-2">
              <div className="text-5xl font-black text-cyan-400">6+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Core Services</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-cyan-400">20+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-cyan-400">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-cyan-400">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
