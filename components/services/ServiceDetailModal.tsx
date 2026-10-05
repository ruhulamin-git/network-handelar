"use client";

import { X, CheckCircle2 } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";

interface ServiceDetailModalProps {
  service: any;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[40px] shadow-2xl cursor-default"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <X size={24} className="text-gray-900" />
        </button>

        {/* Modal Content */}
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-6 mb-4">
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-cyan-500/20">
                <service.icon size={32} />
              </div>
              <div>
                <span className="text-cyan-600 font-black uppercase tracking-[0.3em] text-[10px]">
                  {service.subtitle}
                </span>
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter">
                  {service.title}
                </h2>
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed font-medium border-l-4 border-cyan-500/10 pl-8">
              {service.detailedContent.overview}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-10">
            {/* Benefits */}
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-widest border-b border-gray-100 pb-4">
                Key Benefits
              </h3>
              <div className="grid gap-4">
                {service.detailedContent.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
                    <CheckCircle2 size={20} className="text-cyan-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-bold text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-widest border-b border-gray-100 pb-4">
                Our Process
              </h3>
              <div className="grid gap-4">
                {service.detailedContent.process.map((step: string, index: number) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 bg-cyan-500 rounded-xl flex items-center justify-center text-white font-black text-xs shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-900 font-bold text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-gray-100">
            <CustomButton 
              variant="cyan" 
              uppercase 
              showArrow 
              className="w-full px-8 py-6 text-sm font-black shadow-xl shadow-cyan-500/20"
            >
              Get Started with {service.title}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
