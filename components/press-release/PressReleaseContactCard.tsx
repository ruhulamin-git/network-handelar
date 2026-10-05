"use client";

import { Mail, Phone, User } from "lucide-react";

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface PressReleaseContactCardProps {
  variant?: "section" | "sidebar";
  contact?: ContactInfo;
}

const defaultContact = {
  name: "Marcus Miller",
  email: "media@biz4group.com",
  phone: "+1 (407) 555-0182"
};

export default function PressReleaseContactCard({
  variant = "sidebar",
  contact = defaultContact
}: PressReleaseContactCardProps) {
  if (variant === "sidebar") {
    return (
      <div className="p-6 rounded-[24px] border border-slate-900 bg-black text-white space-y-6 shadow-lg shadow-black/10 group relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-28 h-28 rounded-full bg-[#CCFF00]/5 blur-2xl group-hover:bg-[#CCFF00]/10 transition-all duration-300" />
        
        <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#CCFF00] pb-3 border-b border-slate-900">
          Press Inquiries
        </h3>

        <div className="space-y-4 text-xs font-semibold">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#CCFF00]">
              <User size={15} />
            </span>
            <div>
              <span className="text-gray-405 block text-[10px] uppercase font-semibold">Rep</span>
              <span className="text-white font-bold">{contact.name}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#CCFF00]">
              <Mail size={15} />
            </span>
            <div>
              <span className="text-gray-450 block text-[10px] uppercase font-semibold">Email</span>
              <a href={`mailto:${contact.email}`} className="text-[#CCFF00] hover:underline">{contact.email}</a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#CCFF00]">
              <Phone size={15} />
            </span>
            <div>
              <span className="text-gray-450 block text-[10px] uppercase font-semibold">Phone</span>
              <span className="text-white font-medium">{contact.phone}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="pr-contact-reveal py-16 bg-white">
      <div className="container-premium max-w-4xl">
        <div className="rounded-[28px] border border-gray-200 bg-white p-8 md:p-12 shadow-xl shadow-slate-100/30 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black">
                Inquiries
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight">
              Media & Press Contacts
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed font-normal">
              For official statements, interview requests, or high-resolution graphic assets, please reach out directly to our communications representatives.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-[#F5F5F5] border border-gray-200 space-y-4 text-xs font-semibold shadow-sm">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-white border border-gray-150 text-black">
                <User size={15} />
              </span>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-semibold">Communications Rep</span>
                <span className="text-black font-bold">{contact.name}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-white border border-gray-150 text-black">
                <Mail size={15} />
              </span>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-semibold">Email Inquiry</span>
                <a href={`mailto:${contact.email}`} className="text-black hover:underline">{contact.email}</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-white border border-gray-150 text-black">
                <Phone size={15} />
              </span>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-semibold">Phone Contact</span>
                <span className="text-black font-bold">{contact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
