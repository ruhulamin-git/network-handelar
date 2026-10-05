import React from "react";

export default function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#06b6d4" />
      <path
        d="M29.5962 20.7071C29.9867 20.3166 29.9867 19.6834 29.5962 19.2929L23.2323 12.9289C22.8417 12.5384 22.2086 12.5384 21.818 12.9289C21.4275 13.3195 21.4275 13.9526 21.818 14.3431L27.4749 20L21.818 25.6569C21.4275 26.0474 21.4275 26.6805 21.818 27.0711C22.2086 27.4616 22.8417 27.4616 23.2323 27.0711L29.5962 20.7071ZM11.1113 20L11.1113 21L28.8891 21L28.8891 20L28.8891 19L11.1113 19L11.1113 20Z"
        fill="white"
      />
    </svg>
  );
}
