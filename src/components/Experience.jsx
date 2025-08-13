import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#0b1a1c", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #0b1a1c" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className={`rounded-full object-cover my-auto mx-auto ${
            experience.company_name === "Accenture"
              ? `w-[65%] mt-2 h-[65%] md:mt-[12px] ml-[22.5%] p-[0px] m-auto rounded-none`
              : experience.company_name === "Deloitte"
              ? `md:mt-6 mt-4 w-[95%]`
              : `w-[100%] h-[100%]`
          }`}
        />
      </div>
    }
  >
    <div>
      <h3 className="exp-bg bg-gradient-to-br from-[#ccf6c8] via-[#00a66d] to-[#1e6139] text-transparent bg-clip-text text-[24px] font-bold">
        {experience.title}
      </h3>
      <p className="text-[16px] text-slate-200 font-semibold">
        {experience.company_name}
      </p>
    </div>

    {experience.company_name === "Accenture" ? (
      <div className="mt-5 space-y-4">
        <p className="text-white-100 text-[14px] tracking-wider">
          <strong className="exp-bg bg-gradient-to-br from-[#ccf6c8] via-[#00a66d] to-[#1e6139] text-transparent bg-clip-text">Project:</strong> GenAI-Powered Asset Manager for 1,200+ Utility Assets
        </p>
        <p className="text-white-100 text-[14px] tracking-wider">
          <strong className="exp-bg bg-gradient-to-br from-[#ccf6c8] via-[#00a66d] to-[#1e6139] text-transparent bg-clip-text">Problem:</strong> Manual asset diagnosis took 5+ hours per issue.
        </p>
        <div>
          <strong className="exp-bg bg-gradient-to-br from-[#ccf6c8] via-[#00a66d] to-[#1e6139] text-transparent bg-clip-text">My Role & Contributions:</strong>
          <ul className="mt-2 list-disc ml-5 space-y-2">
            <li>Built full-stack solution with React, Flask, and Neon PostgreSQL.</li>
            <li>Integrated SCADA, maintenance, and inspection data from SQL sources.</li>
            <li>Implemented Python rule engine for asset risk assessment.</li>
            <li>Developed RAG + Agentic AI workflows with FAISS & LangChain.</li>
            <li>Deployed on Azure with CI/CD; 99.9% uptime.</li>
          </ul>
        </div>
        <p className="text-white-100 text-[14px] tracking-wider">
          <strong className="exp-bg bg-gradient-to-br from-[#ccf6c8] via-[#00a66d] to-[#1e6139] text-transparent bg-clip-text">Impact:</strong> Reduced resolution time from 5+ hours to under 5 minutes.
        </p>
      </div>
    ) : (
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            className="text-white-100 text-[14px] pl-1 tracking-wider"
            key={`experience-point-${index}`}
          >
            {point}
          </li>
        ))}
      </ul>
    )}
  </VerticalTimelineElement>
);

const Experience = () => {
  const ref = React.createRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="" ref={ref}>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center `}>
          Work Experience.
        </h2>
      </motion.div>
      <div className=" bg-transparent sticky top-[2.35rem] left-0 p-10 z-[100]">
        <motion.div
          /* Old gradient kept for reference: from-[#00ffe5] via-[#b798fe] to-[#ff69e3] */
          className="progressBar h-[5px] exp-bg bg-gradient-to-r from-[#00383c] via-[#00a66d] to-[#ccf6c8] rounded-full"
          style={{ scaleX }}
        />
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          // Old multicolor gradient kept for reference:
          // lineColor='linear-gradient(to top, rgba(255, 105, 227, 0.9) 0%, rgba(183, 152, 254, 0.9) 50%, rgba(0, 255, 229, 0.9) 100%)'
          lineColor="#00383c"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
