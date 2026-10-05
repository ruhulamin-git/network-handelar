"use client";

interface TestimonialItem {
  text: string;
  author: string;
  role: string;
}

interface CaseStudyTestimonialProps {
  testimonial: TestimonialItem;
}

export default function CaseStudyTestimonial({ testimonial }: CaseStudyTestimonialProps) {
  if (!testimonial) return null;

  return (
    <div className="p-8 rounded-[28px] bg-black text-white border border-slate-900 relative overflow-hidden shadow-xl shadow-black/10">
      <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-[#CCFF00]/5 blur-2xl animate-pulse-slow" />
      
      <div className="relative z-10 space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCFF00] text-black text-xs font-bold uppercase tracking-wider">
          Client Feedback
        </span>
        
        <blockquote className="text-xl md:text-2xl font-medium italic leading-relaxed text-slate-150">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
          <div>
            <div className="font-bold text-white text-base">{testimonial.author}</div>
            <div className="text-xs text-gray-400 font-semibold">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
