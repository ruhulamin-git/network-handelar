"use client";
import { useState } from "react";

interface MiraChatWidgetProps {
  embedded?: boolean;
}

type ChatMessage = {
  id: number;
  from: "bot" | "user";
  text: string;
};

type ChatUser = {
  name: string;
  email: string;
};

// ─── Inline SVG icons ────────────────────────────────────────────────────────
const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
    <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconSend = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);



// ─── Pulse dot ───────────────────────────────────────────────────────────────
const PulseDot = () => (
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
  </span>
);

// ─── Avatar logo ─────────────────────────────────────────────────────────────
const MiraAvatar = ({ size = "md" }) => {
  const cls = size === "lg"
    ? "w-14 h-14 text-xl"
    : size === "sm"
    ? "w-8 h-8 text-xs"
    : "w-10 h-10 text-sm";
  return (
    <div className={`${cls} rounded-2xl bg-gradient-to-br from-[#1B6EF3] to-[#0A4DD4] flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0`}>
      <span className="font-bold text-white tracking-tight">NH</span>
    </div>
  );
};

// ─── Chat message bubble ──────────────────────────────────────────────────────
const ChatBubble = ({ msg }: { msg: ChatMessage }) => {
  const isBot = msg.from === "bot";
  return (
    <div className={`flex gap-2.5 items-end ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && <MiraAvatar size="sm" />}
      <div
        className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isBot
            ? "bg-white text-slate-700 rounded-bl-sm shadow-sm border border-slate-100"
            : "bg-[#1B6EF3] text-white rounded-br-sm"
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
};

// ─── Welcome / Pre-chat form ──────────────────────────────────────────────────
const WelcomeForm = ({ onStart }: { onStart: (user: ChatUser) => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState<"name" | "email" | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    setTimeout(() => onStart({ name, email }), 900);
  };

  return (
    <div className="flex flex-col items-center px-6 pt-8 pb-6 gap-6">
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
        <div className="text-[#1B6EF3]">
          <IconChat />
        </div>
      </div>

      {/* Heading */}
      <div className="text-center space-y-1.5">
        <h2 className="font-semibold text-slate-800 text-lg leading-snug">
          Welcome! Let&apos;s get acquainted.
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Tell us a bit about yourself so we can help you better.
        </p>
      </div>

      {/* Fields */}
      <div className="w-full space-y-3">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-slate-600 text-xs font-medium tracking-wide uppercase">
            Your name
          </label>
          <input
            type="text"
            value={name}
            placeholder="Jane Doe"
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 bg-slate-50 placeholder:text-slate-400 text-slate-800 ${
              focused === "name"
                ? "border-[#1B6EF3] ring-2 ring-blue-100 bg-white"
                : "border-slate-200 hover:border-slate-300"
            }`}
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-slate-600 text-xs font-medium tracking-wide uppercase">
            Email address
          </label>
          <input
            type="email"
            value={email}
            placeholder="jane@company.com"
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 bg-slate-50 placeholder:text-slate-400 text-slate-800 ${
              focused === "email"
                ? "border-[#1B6EF3] ring-2 ring-blue-100 bg-white"
                : "border-slate-200 hover:border-slate-300"
            }`}
          />
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={handleSubmit}
        disabled={!name.trim() || !email.trim() || loading}
        className="w-full py-3.5 rounded-xl bg-[#1B6EF3] text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-[#1560DC] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Connecting…
          </>
        ) : (
          "Start chatting"
        )}
      </button>

      <p className="text-slate-400 text-xs text-center">
        We&apos;ll only use this to follow up if needed.
      </p>
    </div>
  );
};

// ─── Active Chat View ─────────────────────────────────────────────────────────
const ChatView = ({ user }: { user: ChatUser }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, from: "bot", text: `Hi ${user.name}! 👋 I'm MIRA, your Network Handlers AI. How can I help you today?` },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const botReplies = [
    "Great question! Let me look into that for you right away.",
    "Absolutely, I can help with that. Could you share a bit more detail?",
    "Thanks for reaching out! Our team will follow up at " + user.email + " shortly.",
    "I understand. Let me connect you with the right specialist.",
  ];

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { id: Date.now(), from: "user", text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          id: Date.now() + 1,
          from: "bot",
          text: botReplies[Math.floor(Math.random() * botReplies.length)],
        } as ChatMessage,
      ]);
    }, 1400);
  };

  return (
    <>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} msg={msg} />
        ))}
        {typing && (
          <div className="flex gap-2.5 items-end">
            <MiraAvatar size="sm" />
            <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1 items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-4 pb-4 pt-2">
        <div className="flex gap-2 items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-[#1B6EF3] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <input
            type="text"
            value={input}
            placeholder="Type a message…"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 bg-transparent text-sm outline-none text-slate-700 placeholder:text-slate-400"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="w-8 h-8 rounded-lg bg-[#1B6EF3] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#1560DC] transition-colors active:scale-95 flex-shrink-0"
          >
            <IconSend />
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-400 mt-2">
          Powered by <span className="font-semibold text-[#1B6EF3]">MIRA AI</span>
        </p>
      </div>
    </>
  );
};

// ─── Main Widget ──────────────────────────────────────────────────────────────
export default function MiraChatWidget({ embedded = false }: MiraChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<ChatUser | null>(null);

  if (embedded) {
    return (
      <div className="w-full  font-[Geist,sans-serif]">
        <div className="flex items-center justify-end p-4">
          <div className="relative w-full max-w-[380px]">
            <div
              className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-400/20 border border-slate-200/60 bg-white flex flex-col"
              style={{ maxHeight: 580, minHeight: 520 }}
            >
              <div className="bg-white border-b border-slate-100 px-5 py-4 flex items-center gap-3">
                <MiraAvatar size="md" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-slate-800 text-sm truncate">MIRA</span>
                    <span className="text-slate-400 text-sm">·</span>
                    <span className="text-slate-500 text-sm truncate">Network Handlers</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <PulseDot />
                    <span className="text-xs text-slate-500">24/7 AI support · usually replies in seconds</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
           
  
                </div>
              </div>

              <div className="flex-1 flex flex-col overflow-hidden bg-[#F8FAFC]">
                {!user ? (
                  <div className="overflow-y-auto flex-1">
                    <WelcomeForm onStart={(u) => setUser(u)} />
                  </div>
                ) : (
                  <ChatView user={user} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // Full page background (for demo)
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 flex items-center justify-center p-4 font-[Geist,sans-serif]">

      {/* Demo label */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur border border-slate-200 px-4 py-1.5 rounded-full text-xs text-slate-500 shadow-sm">
        MIRA · Network Handlers — Chat Widget
      </div>

      {/* Widget container */}
      <div className="relative w-[380px]">

        {/* Floating button when closed */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="ml-auto flex items-center gap-2 bg-[#1B6EF3] text-white pl-4 pr-5 py-3 rounded-2xl shadow-2xl shadow-blue-500/30 hover:bg-[#1560DC] transition-all active:scale-95"
          >
            <span className="w-5 h-5"><IconChat /></span>
            <span className="text-sm font-semibold">Chat with MIRA</span>
          </button>
        )}

        {/* Widget panel */}
        {open && (
          <div
            className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-400/20 border border-slate-200/60 bg-white flex flex-col"
            style={{ maxHeight: 580, minHeight: 520 }}
          >
            {/* ── Header ── */}
            <div className="bg-white border-b border-slate-100 px-5 py-4 flex items-center gap-3">
              <MiraAvatar size="md" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-800 text-sm truncate">MIRA</span>
                  <span className="text-slate-400 text-sm">·</span>
                  <span className="text-slate-500 text-sm truncate">Network Handlers</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <PulseDot />
                  <span className="text-xs text-slate-500">24/7 AI support · usually replies in seconds</span>
                </div>
              </div>
    
            </div>

            {/* ── Body ── */}
            <div className="flex-1 flex flex-col overflow-hidden bg-[#F8FAFC]">
              {!user ? (
                <div className="overflow-y-auto flex-1">
                  <WelcomeForm onStart={(u) => setUser(u)} />
                </div>
              ) : (
                <ChatView user={user} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}