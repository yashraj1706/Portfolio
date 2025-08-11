import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import "../index.css";
import SmartImage from "./ui/SmartImage";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full card select-none ">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <SmartImage
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white font-bold text-center text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = cardsRef.current.getElementsByClassName("card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsElement = cardsRef.current;
    if (cardsElement) {
      cardsElement.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      });
    }

    return () => {
      if (cardsElement) {
        cardsElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  return (
    <>
      <motion.div className="mt-10" variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I’m Yash Raj Singh, a full-stack and GenAI developer from Kashipur,
        India, currently in my final year of B.Tech CSE at KIIT (Class of 2026).
        I specialize in building scalable, production-ready apps, AI-powered
        systems, and intuitive digital experiences across web, mobile, and
        cloud.
        <br />
        <br />
        I’ve led GenAI projects at Accenture, where I built an asset monitoring
        platform that syncs with SCADA and IoT systems, integrates real-time
        data with OpenAI-powered chatbots, and cuts asset diagnosis time from
        hours to minutes. My work combines LangChain, Python logic engines, SQL
        routing, and LLM-driven recommendations to solve real-world problems at
        scale.
        <br />
        <br />
        Beyond AI, I bring deep expertise in full-stack development using React,
        Next.js, Node.js, PostgreSQL, Firebase, and AWS, building dashboards,
        authentication flows, resume scorers, and mobile apps with clean UI and
        robust APIs.
        <br />
        <br />
        I’ve also explored RAG pipelines, prompt engineering, FAISS, and Agentic
        AI workflows through hands-on projects and programs like the Google
        GenAI Exchange. I’m a Top 100 finalist in Deloitte Hacksplosion (12K+
        participants), a Smart India Hackathon finalist, and an open-source
        contributor and mentor to 100+ juniors in DSA and web dev.
        <br />
        <br />
        I’m passionate about building meaningful tech, learning fast, and
        solving hard problems with elegant code.
      </motion.p>
      <div className="mt-20  cards flex flex-wrap gap-10 " ref={cardsRef}>
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
