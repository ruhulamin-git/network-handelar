"use client";

import Link from "next/link";

interface OtherRelease {
  slug: string;
  title: string;
  category: string;
  date: string;
}

interface PressReleaseOtherListProps {
  otherReleases: OtherRelease[];
}

export default function PressReleaseOtherList({
  otherReleases
}: PressReleaseOtherListProps) {
  if (!otherReleases || otherReleases.length === 0) return null;

  return (
    <div className="p-6 rounded-[24px] border border-gray-200 bg-white space-y-5 shadow-sm">
      <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 pb-3 border-b border-gray-100">
        Other Updates
      </h3>

      <div className="space-y-4 divide-y divide-gray-100">
        {otherReleases.map((other) => (
          <div key={other.slug} className="pt-4 first:pt-0 space-y-1.5 group">
            <span className="text-[9px] font-black uppercase tracking-wider text-[#88b300] block">
              {other.category}
            </span>
            <Link 
              href={`/press-release/${other.slug}`}
              className="text-xs font-bold text-black leading-snug group-hover:text-black transition-colors block line-clamp-2"
            >
              {other.title}
            </Link>
            <span className="text-[10px] text-gray-400 block font-semibold">{other.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
