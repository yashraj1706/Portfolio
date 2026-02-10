import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import "../index.css";
// import SmartImage from "./ui/SmartImage";

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className="xs:w-[250px] w-full card select-none ">
//       <motion.div
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//       >
//         <div
//           className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//         >
//           <SmartImage
//             src={icon}
//             alt={title}
//             width={64}
//             height={64}
//             className="w-16 h-16 object-contain"
//           />
//           <h3 className="text-white font-bold text-center text-[20px]">
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };

const About = () => {
  // const cardsRef = useRef(null);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const cards = cardsRef.current.getElementsByClassName("card");
  //     for (const card of cards) {
  //       const rect = card.getBoundingClientRect();
  //       const x = e.clientX - rect.left;
  //       const y = e.clientY - rect.top;

  //       card.style.setProperty("--mouse-x", `${x}px`);
  //       card.style.setProperty("--mouse-y", `${y}px`);
  //     }
  //   };

  //   const cardsElement = cardsRef.current;
  //   if (cardsElement) {
  //     cardsElement.addEventListener("mousemove", handleMouseMove, {
  //       passive: true,
  //     });
  //   }

  //   return () => {
  //     if (cardsElement) {
  //       cardsElement.removeEventListener("mousemove", handleMouseMove);
  //     }
  //   };
  // }, []);
  return (
    <>
      <motion.div className="mt-10 z-[1000]" variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>About</p>
        <h2 className={`${styles.sectionHeadText}`}>About.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {/* Previous About copy (kept for reference)
        Hi, I’m Yash Raj Singh, a Full-stack and GenAI developer...
        */}
        I’m a{" "}
        <span className="font-semibold text-[#FFE600] drop-shadow-[0_0_10px_rgba(255,230,0,0.25)]">
          Technology Consulting Intern
        </span>{" "}
        in the{" "}
        {/* <span className="font-semibold exp-bg bg-gradient-to-br from-[#ccf6c8] via-[#00a66d] to-[#1e6139] text-transparent bg-clip-text"> */}
          Generative AI
        {/*</span>*/}{" "}
        space at{" "}
        <span className="font-semibold text-[#FFE600] drop-shadow-[0_0_10px_rgba(255,230,0,0.25)]">
          EY
        </span>
        , working on applying AI and software systems to real enterprise and
        business problems.
        <br />
        <br />
        My professional foundation includes hands-on engineering work in
        enterprise environments, with prior experience at{" "}
        <span className="font-semibold text-[#A100FF]">Accenture</span>, where I
        contributed to production-grade platforms involving data integration,
        backend analytics, and intelligent interfaces.
        <br />
        <br />
        My engagement with Generative AI developed alongside this work and now
        continues at EY, where it is applied within technology consulting
        contexts that emphasize{" "}
        <span className="font-semibold text-slate-100">
          reliability, governance, and real-world impact
        </span>
        .
        <br />
        <br />
        Across roles, I’ve worked on backend services, system integrations, and
        full-stack applications when needed, always with a focus on{" "}
        <span className="font-semibold text-slate-100">
          clarity, scalability, and long-term usability
        </span>
        . I’m particularly interested in the intersection of technology and
        consulting, where technical execution meets problem framing and context.
        <br />
        <br />I hold a <span className="font-semibold text-slate-100">Computer Science</span> background{" "}
        <span className="font-semibold text-slate-100">
          (Class of 2026)
        </span>{" "}
        and have been recognized through competitive technical forums,
        hackathons, and certifications, which helped build a strong foundation
        in problem-solving and execution early in my career.
        <br />
        <br />I value environments that emphasize{" "}
        <span className="font-semibold text-slate-100">
          ownership, rigor, and impact
        </span>
        , and I’m driven by opportunities to contribute to systems that perform
        at scale and deliver meaningful, real-world outcomes.
      </motion.p>
      {/* <div className="mt-20  cards flex flex-wrap gap-10 " ref={cardsRef}>
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
