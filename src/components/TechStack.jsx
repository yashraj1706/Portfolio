import React from "react";
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
          radius={isMobile ? 150 : 230}
          iconSize={56} speed={0.9} startAngle={0}>
          <IconReact size={56} {...badge} />
          <IconNext size={56} color="ffffff" {...badge} />
          <IconNode size={56} {...badge} />
          <IconTypeScript size={56} {...badge} />
          <IconPython size={56} {...badge} />
          <IconOpenAI size={56} color="ffffff" {...badge} />
          <IconDocker size={56} {...badge} />
          <IconMongoDB size={56} {...badge} />
        </OrbitingCircles>

        {/* Middle ring: UI + tooling */}
        <OrbitingCircles
          radius={isMobile ? 90 : 160}
          reverse
          iconSize={40}
          speed={1.0}
          startAngle={24}
        >
          <IconTailwind size={40} {...badge} />
          <IconExpress size={40} color="ffffff" {...badge} />
          <IconFirebase size={40} {...badge} />
          <IconRedux size={40} {...badge} />
          <IconJavaScript size={40} {...badge} />
          <IconGit size={40} {...badge} />
          <IconThreeJS size={40} {...badge} />
        </OrbitingCircles>

        {/* Inner ring: platforms/providers (uniform size) */}
        <OrbitingCircles
          radius={isMobile ? 45 : 105}
          iconSize={44}
          speed={1.2}
          startAngle={0}
          offset={0}
        >
          <IconPostgres size={32} color="ffffff" {...badge} />
          <IconMySQL size={32} color="ffffff" {...badge} />
          <BrandIcon name="appwrite" size={32} {...badge} />
          <IconVercel size={32} color="ffffff" {...badge} />
          <IconAWS size={32} {...badge} />
          <IconGCP size={32} {...badge} />
        </OrbitingCircles>
      </div>
    </div>
  );
};

export default SectionWrapper(TechStack, "techStack");
