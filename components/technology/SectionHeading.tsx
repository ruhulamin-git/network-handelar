// components/common/SectionHeading.tsx

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  center = true,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`
        ${center ? "text-center" : "text-left"}
        ${className} py-4 sm:py-6
      `}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <div
          className={`flex items-center gap-3 mb-6 ${
            center ? "justify-center" : "justify-start"
          }`}
        >
          <div
            className={`h-px w-8 ${
              dark ? "bg-cyan-400/40" : "bg-cyan-500/40"
            }`}
          />

          <span
            className={`
              text-xs font-black uppercase tracking-[0.4em]
              ${dark ? "text-cyan-400" : "text-cyan-600"}
            `}
          >
            {eyebrow}
          </span>

          <div
            className={`h-px w-8 ${
              dark ? "bg-cyan-400/40" : "bg-cyan-500/40"
            }`}
          />
        </div>
      )}

      {/* Title */}
      <h2
        className={`
          text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.0] mb-4
          ${dark ? "text-white" : "text-gray-900"}
        `}
      >
        {title}{" "}
        {highlight && (
          <span className="text-cyan-400">{highlight}</span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`
            text-sm sm:text-base leading-relaxed max-w-xl
            ${center ? "mx-auto" : ""}
            ${dark ? "text-gray-400 font-light" : "text-gray-500"}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}