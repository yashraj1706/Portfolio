import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ChevronDown } from "lucide-react";
import HeroSpline from "./canvas/HeroSpline";

const Hero = () => {
  return (
    <section
      className={`relative flex flex-col gap-52 w-full h-screen overflow-clip mx-auto`}
    >
      {/* <div
        className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex  flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 shine rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col md:mt-0 mt-10">
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
              className="text-[#915EFF]"
            >
              Yash
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 z-[10] text-white-100`}>
            <TypeAnimation
              sequence={[
                `I craft solutions with GenAI, LLMs, RAG, and\nAgentic AI workflows.`,
                3000,
                "I build Full-stack Web & Mobile Apps.",
                3000,
                "I design Cloud-native Backend systems.",
                3000,
              ]}
              wrapper="span"
              speed={99}
              style={{ display: "inline-block" }}
              className="text-white-100 md:whitespace-pre-wrap"
              repeat={Infinity}
              cursor={true}
              deletionSpeed={99}
            />
          </p>
        </div>
      </div> */}

      
        <HeroSpline />
       
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-[10]">
        <a href="#about" aria-label="Scroll to about section">
          <div className="group w-[42px] h-[72px] rounded-3xl border-[3px] border-secondary/80 bg-black/20 backdrop-blur-sm flex justify-center items-start p-2 shadow-[0_0_20px_rgba(145,94,255,0.25)] hover:shadow-[0_0_28px_rgba(145,94,255,0.35)] transition-shadow">
            <motion.div
              animate={{ y: [0, 22, 0], opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 text-secondary"
            >
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

// useEffect(() => {
//   const span = document.querySelector("h1 > span ");

//   if (!span) return;

//   let interval = null;
//   let iteration = 0;
//   let isAnimating = false;

//   const animateText = (target) => {
//     if (isAnimating) return;
//     isAnimating = true;
//     iteration = 0;
//     clearInterval(interval);

//     interval = setInterval(() => {
//       target.innerText = target.innerText
//         .split("")
//         .map((letter, index) => {
//           if (index < iteration) {
//             return target.dataset.value[index];
//           }
//           return letters[Math.floor(Math.random() * 72)];
//         })
//         .join("");

//       if (iteration >= target.dataset.value.length) {
//         clearInterval(interval);
//         isAnimating = false;
//       }

//       iteration += 1 / 5;
//     }, 5);
//   };

//   // Run the animation once when the component mounts with a 1-second delay
//   // setTimeout(() => animateText(span), 1000);

//   // Add hover event listener
//   const handleMouseOver = () => {
//     if (!isAnimating) {
//       animateText(span);
//     }
//   };

//   span.addEventListener("mouseover", handleMouseOver);

//   return () => {
//     clearInterval(interval);
//     span.removeEventListener("mouseover", handleMouseOver);
//   };
// }, []);
//

// const letters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiosdfghjzxcvbnpaklm1234567890-=!@#$%^&*()";

// Style for highlighted text
// const textStyle = {
//   GenAI: { color: "#915EFF" },
//   LLMs: { color: "#915EFF" },
//   RAG: { color: "#915EFF" },
//   agentic: { color: "#915EFF" },
//   "full-stack": { color: "#915EFF" },
//   "cloud-native": { color: "#915EFF" },
//   backend: { color: "#915EFF" },
// };
