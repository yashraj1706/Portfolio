import React from "react";

export default function LinkItem({
  title,
  subtitle,
  url,
  icon,
  isSub = false,
  showToggle = false,
  expanded = false,
  onToggle,
}) {
  return (
    <li className="group relative flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md backdrop-saturate-150 shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-brand-deep/20 hover:ring-brand-strong/40 hover:border-white/20 hover:bg-white/10 transition-colors duration-[500ms]">
      {/* Glass highlight overlay */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent"
      />
      {/* Sub-link marker removed in favor of file-tree connectors */}
      <div className="relative z-10 flex items-center gap-3 min-w-0">
        {icon ? (
          <img
            src={icon}
            alt=""
            className="h-9 w-9 shrink-0 rounded bg-white p-0.5 object-contain"
            loading="lazy"
          />
        ) : (
          <div className="h-6 w-6 shrink-0 rounded bg-brand-deep/50 ring-1 ring-brand-deep/60" />
        )}
        <div className="min-w-0">
          <p className="truncate font-semibold exp-bg bg-gradient-to-br from-[#ccf6c8] via-[#00a66d] to-[#1e6139] text-transparent bg-clip-text group-hover:opacity-90 transition-opacity duration-[800ms]">
            {title}
          </p>
          {subtitle && (
            <p className="truncate text-secondary text-sm">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="relative z-10 flex items-center gap-2">
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-deep/50 bg-black/30 text-brand-strong hover:border-brand-strong/70 hover:bg-black/50 transition-colors duration-500"
            aria-label={expanded ? `Collapse ${title}` : `Expand ${title}`}
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 transition-transform duration-500 ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        {url && url !== "#" && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-9 w-[92px] overflow-hidden rounded-lg p-[1px] focus:outline-none"
            aria-label={`Open ${title}`}
          >
            {/* Old purple ring */}
            {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ccf6c8_0%,#00a66d_50%,#ccf6c8_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-[1000ms] group-hover:text-brand">
              Open
            </span>
          </a>
        )}
        
      </div>
    </li>
  );
}
