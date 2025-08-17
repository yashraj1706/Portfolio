import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
// Replace animated SVG components with static icons for lower motion
import reactIcon from "../assets/tech/reactjs.png";
import reduxIcon from "../assets/tech/redux.png";
import tailwindIcon from "../assets/tech/tailwind.png";
import appwriteIcon from "../assets/tech/appwrite.png";
import nodeIcon from "../assets/tech/nodejs.png";
import webrtcIcon from "../assets/tech/webrtc.png";
import nextIcon from "../assets/tech/nextjs.svg";
import tsIcon from "../assets/tech/typescript.png";
import jsIcon from "../assets/tech/javascript.png";
import pgSvg from "../assets/tech/postgresql.svg";
import geminiSvg from "../assets/tech/gemini.svg";
import expoSvg from "../assets/tech/expo.svg";
import awsSvg from "../assets/tech/aws.svg";
import dsaSvg from "../assets/tech/dsa.svg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import SmartImage from "./ui/SmartImage";

import "../index.css";
// import {BackgroundOverlayCard} from "./BackgroundOverlayCard";
// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   website_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           scale: 1,
//           max: 45,
//           speed: 450,
//         }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[400px] w-full"
//       >
//         <div className="relative w-full h-[200px]">
//           <SmartImage
//             src={image}
//             alt={name}
//             width={800}
//             height={400}
//             sizes="(max-width: 640px) 100vw, 400px"
//             className="w-full h-full object-cover rounded-2xl"
//           />
//           <div className="rounded-full absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
//             <div
//               onClick={() => window.open(website_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={link}
//                 alt="project-link"
//                 className="w-[60%] h-[60%] hover:w-[90%] hover:h-[90%] duration-500"
//               />
//             </div>
//             {/*<div
//               onClick={()=> window.open(source_code_link,"_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img src={github} alt="github"
//               className='w-[60%] h-[60%] hover:w-[100%] hover:h-[100%] duration-500 flex items-center'
//               />
//             </div>*/}
//           </div>
//         </div>
//         <div className="mt-5">
//           <h3 className={`text-white text-bold text-[24px]`}>{name}</h3>
//           <p className="mt-2 max-h-[100px] text-secondary text-[14px]">
//             {description}
//           </p>
//         </div>
//         <div className="md:mt-8 mt-16 rounded-xl p-1 flex items-center justify-evenly flex-wrap gap-2">
//           {tags.map((tag) => {
//             if (tag.name === "react") {
//               return <ReactSvg key="react" />;
//             } else if (tag.name === "redux") {
//               return <ReduxSvg key="redux" />;
//             } else if (tag.name === "appwrite") {
//               return <AppwriteSvg key="appwrite" />;
//             } else if (tag.name === "tailwind") {
//               return <TailwindSvg key="tailwind" />;
//             } else if (tag.name === "rtc") {
//               return <WebRTCSvg key="webrtc" />;
//             } else if (tag.name === "node") {
//               return <NodeJsSvg key="node" />;
//             } else {
//               return <></>;
//             }
//           })}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

import { cn } from "../lib/utils";

const BackgroundOverlayCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  const isGenify = (name || "").toLowerCase().includes("genify");
  return (
    <div className="w-full bg-white/5 border border-white/10 ring-1 ring-brand-deep/20 hover:ring-brand-strong/40 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-colors duration-500">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card rounded-xl",
          "bg-black/40 backdrop-blur-sm"
        )}
      >
        <div className="flex flex-col md:flex-row">
          {/* Media (half width on desktop) */}
          <div
            className={cn(
              "relative md:w-1/2 w-full h-56 md:h-80 overflow-hidden bg-black flex items-center justify-center",
              isGenify ? "order-2 md:order-none" : "order-1 md:order-none"
            )}
          >
            <SmartImage
              src={image}
              alt={name}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
            {/* Optional hover overlay for subtle effect */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-black"
            />
          </div>
          {/* Content */}
          <div
            className={cn(
              "md:w-1/2 w-full p-4 md:p-6 flex flex-col",
              isGenify ? "order-1 md:order-none" : "order-2 md:order-none"
            )}
          >
            <h3 className="text-white font-semibold text-xl md:text-2xl">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-sm md:text-base leading-relaxed line-clamp-3">
              {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags?.map((tag, i) => {
                const key = (tag?.name || "").toLowerCase();
                const map = {
                  react: { src: reactIcon, label: "React" },
                  redux: { src: reduxIcon, label: "Redux" },
                  tailwind: { src: tailwindIcon, label: "Tailwind" },
                  appwrite: { src: appwriteIcon, label: "Appwrite" },
                  rtc: { src: webrtcIcon, label: "WebRTC" },
                  node: { src: nodeIcon, label: "Node.js" },
                  next: { src: nextIcon, label: "Next.js" },
                  ts: { src: tsIcon, label: "TypeScript" },
                  typescript: { src: tsIcon, label: "TypeScript" },
                  js: { src: jsIcon, label: "JavaScript" },
                  javascript: { src: jsIcon, label: "JavaScript" },
                  postgresql: { src: pgSvg, label: "PostgreSQL" },
                  sql: { src: pgSvg, label: "SQL" },
                  gemini: { src: geminiSvg, label: "Gemini" },
                  expo: { src: expoSvg, label: "Expo" },
                  aws: { src: awsSvg, label: "AWS" },
                  algo: { src: dsaSvg, label: "DSA" },
                };
                const info = map[key];
                const pretty = (s) =>
                  s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
                const label = info?.label || pretty(key || "Tech");
                return info ? (
                  <span
                    key={`${key}-${i}`}
                    className="group/tech relative inline-flex items-center"
                  >
                    <img
                      src={info.src}
                      alt={label}
                      className="h-10 w-10 rounded bg-black/30 p-1 border border-white/10"
                      loading="lazy"
                      title={label}
                    />
                    <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-0.5 text-[10px] text-white opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 border border-white/10">
                      {label}
                    </span>
                  </span>
                ) : (
                  <span
                    key={`${key}-${i}`}
                    className="px-2 py-1 text-[10px] rounded-md bg-black/40 border border-white/10 text-white/90"
                  >
                    {pretty(key)}
                  </span>
                );
              })}
            </div>
            <div className="mt-4 flex gap-3">
              {website_link && (
                <a
                  href={website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-9 overflow-hidden rounded-lg p-[1px] focus:outline-none"
                  aria-label={`Open ${name}`}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ccf6c8_0%,#00a66d_50%,#ccf6c8_100%)]" />
                  <span className="inline-flex h-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl">
                    <img src={link} alt="open" className="h-4 w-4" />
                    <span>Open</span>
                  </span>
                </a>
              )}
              {source_code_link && (
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-9 overflow-hidden rounded-lg p-[1px] focus:outline-none"
                  aria-label={`Source ${name}`}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ccf6c8_0%,#00a66d_50%,#ccf6c8_100%)]" />
                  <span className="inline-flex h-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl">
                    <img src={github} alt="github" className="h-4 w-4" />
                    <span>GitHub</span>
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex ">
        <motion.p
          variant={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the key projects I’ve developed, showcasing my skills
          in full-stack development, real-time communication, and game
          development. Each project highlights my ability to deliver robust,
          user-friendly applications.
        </motion.p>
      </div>

      {/* <div className="mt-20 max-h-fit flex flex-wrap justify-evenly gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}
      <div className="mt-10 md:mt-12 flex flex-wrap gap-6 md:gap-8 justify-center">
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)] max-w-3xl"
          >
            <BackgroundOverlayCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "");
