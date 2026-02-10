import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { OrbitingCircles } from "./magicui/OrbitingCircles";
import {
  BrandIcon,
  IconReact,
  IconNext,
  IconNode,
  IconTypeScript,
  IconJavaScript,
  IconPython,
  IconDocker,
  IconMongoDB,
  IconFirebase,
  IconExpress,
  IconTailwind,
  IconRedux,
  IconOpenAI,
  IconGit,
  IconThreeJS,
  IconPostgres,
  IconMySQL,
  IconAWS,
  IconGCP,
  IconVercel,
} from "./icons/BrandIcon";

const badge = {
  bg: "rgba(255,255,255,0.25)", // whiter background
  style: {
    borderRadius: 12,
    boxShadow: "0 0 0 1px rgba(255,255,255,0.25)", // subtle outline for contrast
  },
};

const TechStack = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  return (
    <div className="flex min-h-fit mt-10 flex-row flex-wrap justify-center gap-0">
      <motion.div className="w-full" variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>The tools I craft with</p>
        <h2 className={`${styles.sectionHeadText}`}>Tech Stack.</h2>
      </motion.div>

      <div className="relative overflow-hidden h-[560px] w-full">
        {/* Outer ring: core stack */}
        <OrbitingCircles 
          radius={isMobile ? 145 : 220}
          iconSize={isMobile ? 46 : 56} speed={0.9} startAngle={0}>
          <IconReact size={isMobile ? 46 : 56} {...badge} />
          <IconNext size={isMobile ? 46 : 56} color="ffffff" {...badge} />
          <IconNode size={isMobile ? 46 : 56} {...badge} />
          <IconTypeScript size={isMobile ? 46 : 56} {...badge} />
          <IconPython size={isMobile ? 46 : 56} {...badge} />
          <IconOpenAI size={isMobile ? 46 : 56} color="ffffff" {...badge} />
          <IconDocker size={isMobile ? 46 : 56} {...badge} />
          <IconMongoDB size={isMobile ? 46 : 56} {...badge} />
        </OrbitingCircles>

        {/* Middle ring: UI + tooling */}
        <OrbitingCircles
          radius={isMobile ? 85 : 150}
          reverse
          iconSize={isMobile ? 36 : 46}
          speed={1.0}
          startAngle={24}
        >
          <IconTailwind size={isMobile ? 36 : 46} {...badge} />
          <IconExpress size={isMobile ? 36 : 46} color="ffffff" {...badge} />
          <IconFirebase size={isMobile ? 36 : 46} {...badge} />
          <IconRedux size={isMobile ? 36 : 46} {...badge} />
          <IconJavaScript size={isMobile ? 36 : 46} {...badge} />
          <IconGit size={isMobile ? 36 : 46} {...badge} />
          <IconThreeJS size={isMobile ? 36 : 46} {...badge} />
        </OrbitingCircles>

        {/* Inner ring: platforms/providers (uniform size) */}
        <OrbitingCircles
          radius={isMobile ? 40 : 85}
          iconSize={isMobile ? 30 : 44}
          speed={1.2}
          startAngle={0}
          offset={0}
        >
          <IconPostgres size={isMobile ? 30 : 44} color="ffffff" {...badge} />
          <IconMySQL size={isMobile ? 30 : 44} color="ffffff" {...badge} />
          <BrandIcon name="appwrite" size={isMobile ? 30 : 44} {...badge} />
          <IconVercel size={isMobile ? 30 : 44} color="ffffff" {...badge} />
          <IconAWS size={isMobile ? 30 : 44} {...badge} />
          <IconGCP size={isMobile ? 30 : 44} {...badge} />
        </OrbitingCircles>
      </div>
    </div>
  );
};

export default SectionWrapper(TechStack, "techStack");
