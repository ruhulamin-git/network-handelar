"use client";

import { Shield, CheckCircle2 } from "lucide-react";

interface TechCodeQualityProps {
  eyebrow: string;
  title: string;
  description: string;
  bulletPoints: string[];
  codeSnippet: string;
  filename: string;
}

const tokenizeLine = (line: string, isPython: boolean) => {
  const regex = isPython 
    ? /(#[^\n]*)|("[^"]*"|'[^']*')|(@[a-zA-Z0-9_\.]+)|([a-zA-Z0-9_]+)|([^\w\s#"'@]+|\s+)/g
    : /(\/\/[^\n]*)|("[^"]*"|'[^']*'|`[^`]*`)|([a-zA-Z0-9_]+)|([^\w\s/"'`]+|\s+)/g;
    
  let match;
  let html = "";
  
  regex.lastIndex = 0;
  
  while ((match = regex.exec(line)) !== null) {
    const [lexeme, comment, str, decorator, word, other] = match;
    
    const escapedLexeme = lexeme
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
      
    if (comment) {
      html += `<span class="text-zinc-500 italic">${escapedLexeme}</span>`;
    } else if (str) {
      html += `<span class="text-emerald-400 font-medium">${escapedLexeme}</span>`;
    } else if (isPython && decorator) {
      html += `<span class="text-cyan-400 font-bold">${escapedLexeme}</span>`;
    } else if (word) {
      const pyKeywords = ["def", "class", "return", "import", "from", "async", "list", "round", "as", "in", "and", "or", "not", "is", "pass"];
      const jsKeywords = ["const", "let", "var", "import", "from", "export", "default", "function", "return", "interface", "class", "new", "type", "as", "true", "false"];
      
      const keywords = isPython ? pyKeywords : jsKeywords;
      const pyBuiltins = ["FastAPI", "BaseModel", "np", "torch", "tensor", "load", "item", "round", "predict_model", "features", "model_version", "PredictionRequest"];
      const jsBuiltins = ["nextConfig", "reactStrictMode", "images", "experimental", "express", "helmet", "cors", "rateLimit", "useState", "useCallback", "useMemo", "useAnalytics", "app", "res", "req"];
      
      const builtins = isPython ? pyBuiltins : jsBuiltins;
      
      if (keywords.includes(word)) {
        html += `<span class="text-pink-400 font-semibold">${escapedLexeme}</span>`;
      } else if (builtins.includes(word)) {
        html += `<span class="text-amber-300 font-medium">${escapedLexeme}</span>`;
      } else {
        html += escapedLexeme;
      }
    } else {
      html += escapedLexeme;
    }
  }
  return html;
};

const highlightCode = (code: string, filename: string) => {
  const isPython = filename.endsWith(".py");
  const lines = code.split("\n");
  return lines.map(line => tokenizeLine(line, isPython)).join("\n");
};

export default function TechCodeQuality({
  eyebrow,
  title,
  description,
  bulletPoints,
  codeSnippet,
  filename,
}: TechCodeQualityProps) {
  return (
    <section className="py-24 bg-[#FAF9F6] border-b border-zinc-200/50 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]">
      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-black">
                {eyebrow}
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-normal tracking-tight text-zinc-950 leading-[1.05]">
              {title}
            </h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              {description}
            </p>
            <div className="space-y-3.5 pt-4">
              {bulletPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-600 shrink-0 mt-0.5" size={16} />
                  <span className="text-sm font-semibold text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MacOS Code Editor mockup */}
          <div className="lg:col-span-6 relative min-w-0 w-full">
            <div className="absolute inset-0 bg-[#ccff00]/5 rounded-[32px] blur-3xl pointer-events-none" />
            <div className="relative bg-[#0c0c0c] text-white rounded-3xl border border-zinc-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_-15px_rgba(204,255,0,0.03)] transition-all duration-300 overflow-hidden">
              {/* Editor Topbar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-[#141414] border-b border-zinc-900">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                {/* Tabs */}
                <div className="flex items-center gap-1.5">
                  <div className="px-3.5 py-1.5 rounded-lg bg-zinc-900 text-[#ccff00] font-mono text-[10px] border border-zinc-800/80 flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" /> {filename}
                  </div>
                </div>
                <span className="hidden sm:inline font-mono text-[10px] text-zinc-650">utf-8</span>
              </div>
              <div className="p-4 sm:p-8 overflow-x-auto w-full">
                <pre className="font-mono text-xs text-zinc-400 leading-relaxed whitespace-pre scrollbar-thin" translate="no" spellCheck={false}>
                  <code className="block w-max min-w-full" dangerouslySetInnerHTML={{ __html: highlightCode(codeSnippet, filename) }} />
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


