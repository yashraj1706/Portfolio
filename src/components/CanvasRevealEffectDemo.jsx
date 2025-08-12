import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-16 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="GenAI & Agentic AI Engineer"
          body="I design and implement GenAI and agentic AI workflows using LLMs, retrieval systems, and automation pipelines to solve real-world challenges. Certified in IBM/Coursera AI and Google GenAI Exchange."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-600"
            totalSize={8}      // Lower = fewer dots (default was 4)
            dotSize={4}        // Higher = bigger dots
          />
        </Card>

        <Card
          title="Fullstack Developer"
          body="I build scalable web and app solutions with modern frameworks, databases, and API architectures. Delivering high-performance products with polished UX."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for a softer reveal fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card
          title="Cloud & Backend Engineer"
          body="I architect and deploy systems on AWS and GCP, leveraging Docker/Kubernetes for containerization and ensuring performance, reliability, and scalability."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({ title, body, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card border border-black/20 dark:border-white/20 max-w-full w-full mx-auto p-4 relative h-[26rem]"
    >
      {/* Decorative corners */}
      <Icon className="absolute h-5 w-5 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 -bottom-3 -right-3 dark:text-white text-black" />

      {/* Hover reveal layer: animated canvas + text */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm md:text-base opacity-90 leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Default (non-hover) state: show title only */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <h2
          className={
            "dark:text-white text-black text-xl md:text-2xl font-bold text-center transition-all duration-200 " +
            (hovered ? "opacity-0 -translate-y-2" : "opacity-100")
          }
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
