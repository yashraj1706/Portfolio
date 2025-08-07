import { cn } from "../../lib/utils"; // We will fix this path later
import React, { cloneElement, createContext, forwardRef, useContext, useMemo } from "react";
import { motion } from "framer-motion";

// Note: This is a simplified version of the Marquee component from Magic UI
// tailored for this example. For the full, up-to-date code,
// please refer to the official Magic UI website.

const MarqueeContext = createContext({
  isAnimationPaused: false,
});

const Marquee = forwardRef((props, ref) => {
  const {
    className,
    style,
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...rest
  } = props;
  
  const [isAnimationPaused, setIsAnimationPaused] = React.useState(false);

  const marqueeRef = React.useRef(null);

  const duration = useMemo(() => {
    if (marqueeRef.current) {
      const containerWidth = marqueeRef.current.offsetWidth;
      const contentWidth = marqueeRef.current.firstElementChild.offsetWidth;
      return contentWidth < containerWidth ? containerWidth / 100 : contentWidth / 100;
    }
    return 20; // Default duration
  }, [children]);


  return (
    <MarqueeContext.Provider value={{ isAnimationPaused }}>
      <div
        ref={ref}
        style={{
          ...style,
          "--duration": `${duration}s`,
        }}
        className={cn("group flex overflow-hidden [--gap:0rem] [--duration:20s]", {
          "flex-row": !vertical,
          "flex-col": vertical,
        }, className)}
        onMouseEnter={() => pauseOnHover && setIsAnimationPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsAnimationPaused(false)}
        {...rest}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee-horizontal": !vertical,
                "animate-marquee-vertical": vertical,
                "[animation-direction:reverse]": reverse,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
              })}
            >
              {children}
            </div>
          ))}
      </div>
    </MarqueeContext.Provider>
  );
});

export { Marquee };
