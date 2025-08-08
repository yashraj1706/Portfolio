// src/components/ui/ShimmerLoader.jsx

import React from "react";
import { cn } from "../../lib/utils"; // Adjust path if necessary

const ShimmerLoader = ({ className }) => {
  return (
    // This is the container for the skeleton card
    <div className={cn("rounded-xl p-4 w-full mx-auto", className)}>
      <div className="flex space-x-4">
        {/* The round avatar placeholder */}
        <div className="rounded-full bg-slate-700 h-10 w-10 animate-shimmer bg-[linear-gradient(110deg,#334155,45%,#475569,55%,#334155)] bg-[length:200%_100%]"></div>
        <div className="flex-1 space-y-3 py-1">
          {/* The first line of text placeholder */}
          <div className="h-2 rounded bg-slate-700 animate-shimmer bg-[linear-gradient(110deg,#334155,45%,#475569,55%,#334155)] bg-[length:200%_100%]"></div>
          {/* The second, shorter line of text placeholder */}
          <div className="h-2 rounded bg-slate-700 animate-shimmer bg-[linear-gradient(110deg,#334155,45%,#475569,55%,#334155)] bg-[length:200%_100%] w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerLoader;
