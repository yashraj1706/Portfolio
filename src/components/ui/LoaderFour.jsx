// src/components/ui/LoaderFour.jsx

import React from "react";
import { cn } from "../../lib/utils"; // Adjusted to a relative path

export const LoaderFour = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-loader-4", className)} // This class applies the animation
    >
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m7.8 16.2-2.9 2.9" />
      <path d="M6 12H2" />
      <path d="m7.8 7.8-2.9-2.9" />
    </svg>
  );
};
