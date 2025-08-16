import React from "react";
import { Link } from "react-router-dom";

function BrandLink({ to, children }) {
  return (
    <Link to={to} className="w-full sm:w-auto">
      <span className="relative inline-flex h-12 w-full sm:w-auto overflow-hidden rounded-lg p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ccf6c8_0%,#00a66d_50%,#ccf6c8_100%)]" />
        <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
          {children}
        </span>
      </span>
    </Link>
  );
}

function BrandButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex h-12 w-full sm:w-auto overflow-hidden rounded-lg p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ccf6c8_0%,#00a66d_50%,#ccf6c8_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="relative w-full max-w-2xl">
        <div className="relative rounded-2xl border-[2.5px] border-brand-deep/40 bg-black/50 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.35)] p-8 md:p-10 text-center">
          {/* Brand accent ring behind the badge */}
          <div className="relative inline-block mb-6">
            <span
              className="absolute -inset-8 -z-10 rounded-full blur-2xl bg-brand/15"
              aria-hidden
            />
            <span className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-950 border-2 border-brand-deep/50 shadow-xl select-none overflow-hidden p-[1px]">
              {/* Subtle rotating conic ring */}
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ccf6c8_0%,#00a66d_50%,#ccf6c8_100%)]" />
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-950">
                <span className="text-3xl font-extrabold tracking-tight">
                  404
                </span>
              </span>
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            You found a wormhole 🕳️
          </h1>
          <p className="text-secondary mb-8">
            This route doesn’t exist. Let’s hop back to somewhere safe.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BrandLink to="/">Take me home</BrandLink>
            <BrandLink to="/links/all">Explore Links Hub</BrandLink>
            <BrandButton onClick={() => window.history.back()}>
              Go back
            </BrandButton>
          </div>
        </div>
      </div>
    </div>
  );
}
