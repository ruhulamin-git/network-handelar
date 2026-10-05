import Image from "next/image";

const certificates = [
  { id: 1, src: "/images/certifcate/cert-1.png", alt: "FEDBIZ Access SAM Certified" },
  { id: 2, src: "/images/certifcate/cert-2.png", alt: "SBA WOSB Certified Woman Owned Small Business" },
  { id: 3, src: "/images/certifcate/cert-3.png", alt: "Certified WBENC Women's Business Enterprise" },
  { id: 4, src: "/images/certifcate/cert-4.png", alt: "CRP Capital Readiness Program" },
];

export default function CertificationsSection() {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="container-premium">
        
        {/* Standardized Clinical Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
        
                  <div className="flex items-center justify-center gap-2 mb-2 About-us">
        <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
        <span className="text-lg  font-medium text-black font-sans-serif tracking-widest">
         Accreditations
        </span>
      </div>
          </div>
            <h2 className="text-4xl md:text-5xl text-black leading-tight">
            Our Certifications
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-gray-50/80 rounded-3xl flex items-center justify-center p-8 border border-gray-100/50 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-2 transition-all duration-500 h-48"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={cert.src} 
                  alt={cert.alt} 
                  fill 
                  className="object-contain transition-all duration-500" 
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
