"use client";

import { TeamMember } from "@/lib/team-data";

/* ── Inline SVG social icons ── */
const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const TwitterIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="team-item flex flex-col justify-between p-6 bg-white border border-[#ddd5c8] rounded-3xl shadow-xs">
      
      <div>
        {/* Profile Info Row */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[#e2d9cc] flex-shrink-0">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#1a1a1a]">
              {member.name}
            </h3>
            <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-[#000] bg-[#D6FD70] px-2.5 py-0.5 rounded-full">
              {member.role}
            </span>
          </div>
        </div>

        {/* Short Bio */}
        <p className="text-sm text-[#5c5449] leading-relaxed mb-4">
          {member.bio}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-[#faf8f5] border border-[#ddd5c8] px-2.5 py-0.5 text-[11px] font-medium text-[#6b6256]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer (Department and Socials) */}
      <div className="flex items-center justify-between pt-4 border-t border-[#e8e0d5] mt-auto">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b6256] bg-[#faf8f5] border border-[#ddd5c8] px-2.5 py-0.5 rounded-full">
          {member.department}
        </span>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-[#faf8f5] border border-[#ddd5c8] flex items-center justify-center text-[#5c5449] hover:text-[#1a1a1a] hover:border-amber-300 hover:bg-[#fafaf8] transition duration-200"
            >
              <LinkedinIcon size={13} />
            </a>
          )}
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-[#faf8f5] border border-[#ddd5c8] flex items-center justify-center text-[#5c5449] hover:text-[#1a1a1a] hover:border-amber-300 hover:bg-[#fafaf8] transition duration-200"
            >
              <GithubIcon size={13} />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 rounded-full bg-[#faf8f5] border border-[#ddd5c8] flex items-center justify-center text-[#5c5449] hover:text-[#1a1a1a] hover:border-amber-300 hover:bg-[#fafaf8] transition duration-200"
            >
              <TwitterIcon size={13} />
            </a>
          )}
        </div>
      </div>

    </article>
  );
}
