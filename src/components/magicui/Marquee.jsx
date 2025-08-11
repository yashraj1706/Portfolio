import { cn } from "../../lib/utils"; // We will fix this path later
import React, {
  cloneElement,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
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
    repeat = 2,
    ...rest
  } = props;

  const [isAnimationPaused, setIsAnimationPaused] = React.useState(false);

  // Use an internal ref to measure the container
  const marqueeRef = useRef(null);

  const getSize = () => {
    const el = marqueeRef.current;
    if (!el) return { container: 0, content: 0 };
    const container = vertical ? el.offsetHeight : el.offsetWidth;
    const firstChild = el.firstElementChild;
    const content = firstChild
      ? vertical
        ? firstChild.scrollHeight
        : firstChild.scrollWidth
      : 0;
    return { container, content };
  };

  const duration = useMemo(() => {
    const { container, content } = getSize();
    if (container && content) {
      // Longer content => longer duration; ensure a minimum
      const ratio = Math.max(content / Math.max(container, 1), 1);
      return Math.min(Math.max(ratio * 10, 12), 60); // clamp to [12s, 60s]
    }
    return 20; // Default duration
  }, [children, vertical]);

  // Recompute CSS var on resize
  useEffect(() => {
    const handle = () => {
      // Trigger a re-render by updating state via paused toggle noop
      setIsAnimationPaused((p) => p);
    };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return (
    <MarqueeContext.Provider value={{ isAnimationPaused }}>
      <div
        // Attach internal measuring ref; still forward external ref via callback
        ref={(node) => {
          marqueeRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref && typeof ref === "object") ref.current = node;
        }}
        style={{
          ...style,
          "--duration": `${duration}s`,
        }}
        className={cn(
          "group flex overflow-hidden [--gap:0rem] [--duration:20s]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className
        )}
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
