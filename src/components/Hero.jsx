import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import DesktopSpline from "./canvas/DesktopSpline";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiosdfghjzxcvbnpaklm1234567890-=!@#$%^&*()";

// Style for highlighted text
const textStyle = {
  GenAI: { color: "#915EFF" },
  LLMs: { color: "#915EFF" },
  RAG: { color: "#915EFF" },
  agentic: { color: "#915EFF" },
  "full-stack": { color: "#915EFF" },
  "cloud-native": { color: "#915EFF" },
  backend: { color: "#915EFF" },
};

const Hero = () => {
  useEffect(() => {
    const span = document.querySelector("h1 > span ");

    if (!span) return;

    let interval = null;
    let iteration = 0;
    let isAnimating = false;

    const animateText = (target) => {
      if (isAnimating) return;
      isAnimating = true;
      iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        target.innerText = target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 72)];
          })
          .join("");

        if (iteration >= target.dataset.value.length) {
          clearInterval(interval);
          isAnimating = false;
        }

        iteration += 1 / 5;
      }, 5);
    };

    // Run the animation once when the component mounts with a 1-second delay
    // setTimeout(() => animateText(span), 1000);

    // Add hover event listener
    const handleMouseOver = () => {
      if (!isAnimating) {
        animateText(span);
      }
    };

    span.addEventListener("mouseover", handleMouseOver);

    return () => {
      clearInterval(interval);
      span.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <section
      className={`relative flex flex-col gap-52 w-full h-screen overflow-clip mx-auto`}
    >
      <div
        className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex  flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 shine rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText} z-[10] text-white w-full`}>
            Hi, I'm{" "}
            <span
              data-value="Yash"
              style={{
                zIndex: 10,
                position: "relative",
                pointerEvents: "auto",
                userSelect: "none",
              }}
              // id="hack" //turned off hover text hack effect
              className="text-[#915EFF]"
            >
              Yash
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 z-[10] text-white-100`}>
            <TypeAnimation
              sequence={[
                `I craft solutions with GenAI, LLMs, RAG, and 
                \nAgentic AI workflows.`,
                2500,
                'I build Full-stack Web & Mobile Apps.',
                2500,
                'I design Cloud-native Backend systems.',
                2500,
              ]}
              wrapper="span"
              speed={100}
              style={{ display: "inline-block" }}
              className="text-white-100"
              repeat={Infinity}
              cursor={true}
              deletionSpeed={10}
            />
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <DesktopSpline />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
