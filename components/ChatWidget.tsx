"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import MiraChatWidget from "@/components/chat/MiraChatWidget";
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5}>
    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open MIRA chat"
        className="hero-text fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 shadow-lg transition-all hover:bg-cyan-600 hover:shadow-xl cursor-pointer"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-end  px-4 "
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-[420px] overflow-hidden rounded-[32px] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close MIRA chat"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center cursor-pointer hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
            >
               <IconChevron />
            </button>

            <MiraChatWidget embedded />
          </div>
        </div>
      )}
    </>
  );
}
