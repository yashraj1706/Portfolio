import React from "react";
import { cn } from "../../lib/utils";

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  startAngle = 0,
  offset = 0,
  ...props
}) {
  const calculatedDuration = duration / speed;
  const count = React.Children.count(children) || 1;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 w-full h-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = startAngle + (360 / count) * index;
        return (
          <div className="absolute left-1/2 top-1/2">
            <div
              style={{
                "--duration": `${calculatedDuration}`,
                "--radius": `${radius}`,
                "--angle": `${angle}`,
                "--icon-size": `${iconSize}px`,
                "--offset": `${offset}`,
                width: "var(--icon-size)",
                height: "var(--icon-size)",
                marginLeft: "calc(var(--icon-size) / -2)",
                marginTop: "calc(var(--icon-size) / -2)",
                willChange: "transform",
              }}
              className={cn(
                "flex origin-center transform-gpu animate-orbit items-center justify-center rounded-full",
                reverse && "animate-orbit-reverse",
                className
              )}
              {...props}
            >
              {child}
            </div>
          </div>
        );
      })}
    </>
  );
}
