import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

export function InViewMount({ children, margin = "200px", once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin, once });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isInView) setMounted(true);
  }, [isInView]);

  return <div className="w-full h-full" ref={ref}>{mounted ? children : null}</div>;
}