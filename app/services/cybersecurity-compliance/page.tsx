"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";

export default function CybersecurityCompliancePage() {
  return (
    <div className="bg-white mt-20">
      {/* Hero Section */}
      <section className=" relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden rounded-[24px] mx-3 ">
       
        
 <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/erp.jpg')]  bg-cover bg-center" />
      </div>
     <div className="absolute inset-0 opacity-100 pointer-events-none bg-gradient-to-r from-black/80 to-transparent z-[1]"></div>

        <div className="relative z-10 container-premium w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
            {/* CTA Button */}
                 <div className="shrink-0">
                    <Link href="/services">
                       <CustomButton variant="cyan" uppercase showArrow className="px-8 py-5 shadow-lg shadow-cyan-500/20">
                           Back to Services
                       </CustomButton>
                    </Link>
                 </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lime-300" />
                <span className="text-lime-300 font-black uppercase tracking-[0.3em] text-xs">
                  Security & Protection
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl tracking-tighter text-white leading-[0.95]">
                Cybersecurity & <br />
                <span className="text-lime-300">Compliance</span>
              </h1>
              
              <p className="leading-relaxed text-gray-100 text-lg">
                At Network Handlers, safeguarding your business against cyber threats and ensuring strict compliance 
                with industry regulations is our highest priority.
              </p>
            </div>

            {/* Right - Visual Cards */}
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute top-0 right-0 w-[200px] rounded-[22px] bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-cyan-400">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm font-black text-black">Security</div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded-full w-full" />
                  <div className="h-2 bg-gray-200 rounded-full w-3/4" />
                  <div className="h-2 bg-cyan-400 rounded-full w-1/2" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-[200px] rounded-[22px] bg-gradient-to-br from-lime-300 to-cyan-400 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm font-black text-black">Protected</div>
                </div>
                <div className="text-3xl font-black text-black mb-2">24/7</div>
                <div className="text-xs text-black/70 font-bold">Monitoring</div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Eye className="w-8 h-8 text-lime-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          {/* Introduction Paragraph */}
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-12">
            At Network Handlers, safeguarding your business against cyber threats and ensuring strict compliance 
            with industry regulations is our highest priority. Our comprehensive <span className="text-cyan-600 font-medium">cybersecurity and compliance solutions</span> are 
            specifically designed to protect your critical data, maintain customer trust, and ensure your business operations are secure and compliant.
          </p>

          {/* Why Choose Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Cybersecurity & Compliance Are Crucial
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-12">
            In today's digital landscape, robust cybersecurity measures and adherence to compliance standards are essential for 
            protecting sensitive information, avoiding costly breaches, and maintaining regulatory requirements across industries.
          </p>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Our Cybersecurity & Compliance Capabilities
          </h2>

          {/* Comprehensive Security Assessments */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Comprehensive Security Assessments
            </h3>
            <ul className="space-y-2 text-base text-gray-700 leading-relaxed list-disc list-inside">
              <li>Detailed vulnerability assessments and penetration testing.</li>
              <li>Identification and remediation of potential security gaps before exploitation.</li>
            </ul>
          </div>

          {/* Managed Security Services */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Managed Security Services
            </h3>
            <ul className="space-y-2 text-base text-gray-700 leading-relaxed list-disc list-inside">
              <li>24/7 monitoring and threat detection to proactively defend your infrastructure.</li>
              <li>Rapid response and incident management by dedicated cybersecurity experts.</li>
            </ul>
          </div>

          {/* Data Protection & Encryption */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Data Protection & Encryption
            </h3>
            <ul className="space-y-2 text-base text-gray-700 leading-relaxed list-disc list-inside">
              <li>Advanced encryption technologies to secure data at rest and in transit.</li>
              <li>Robust backup solutions ensuring business continuity and data recovery.</li>
            </ul>
          </div>

          {/* Compliance Management */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Compliance Management
            </h3>
            <ul className="space-y-2 text-base text-gray-700 leading-relaxed list-disc list-inside">
              <li>Expert assistance with compliance requirements, including GDPR, HIPAA, PCI DSS, and others.</li>
              <li>Ongoing compliance monitoring, reporting, and risk assessments.</li>
            </ul>
          </div>

          {/* Security Awareness Training */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Security Awareness Training
            </h3>
            <ul className="space-y-2 text-base text-gray-700 leading-relaxed list-disc list-inside">
              <li>Customized employee training programs to build a strong security culture.</li>
              <li>Proactive measures to minimize human error and vulnerabilities.</li>
            </ul>
          </div>

          {/* Benefits Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Benefits of Cybersecurity & Compliance with Network Handlers
          </h2>
          <div className="mb-12 space-y-3">
            <p className="text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Risk Reduction:</span> Minimize cybersecurity threats through proactive security measures.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Regulatory Adherence:</span> Ensure full compliance with evolving regulations and standards.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Enhanced Trust:</span> Strengthen customer and stakeholder confidence in your brand.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Continuous Support:</span> Dedicated team providing ongoing guidance and rapid incident response.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 ">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Secure Your Business Today
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Let Network Handlers help fortify your cybersecurity posture and simplify compliance management.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-700">
                  Request Your Free Security Consultation
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </Link>
            </div>

            {/* Social Share */}
            <div className="flex justify-center items-center gap-8 mt-10">
              <span className="text-sm text-gray-700 font-semibold">Share:</span>
              <div className="flex items-center gap-5">
                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Twitter/X */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
