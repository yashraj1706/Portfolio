// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { testimonials } from "../constants";
// import accentureImg from "../assets/company/accenture.png";
// import linkedInImg from "../assets/socialsSvgs/linkedin.png"

// const linkedInRecsUrl="https://www.linkedin.com/in/yash-raj-singh-b48756256/details/recommendations/";

// const MagicButton = ({
//         title,
//         icon,
//         position,
//         handleClick,
//         otherClasses
//       }) => {
//         return (
//           <button
//             className="relative inline-flex h-14 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
//             onClick={handleClick}
//           >
//             <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//             <span
//               className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
//                    bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
//             >
//               {position === "left" && icon}
//               {title}
//               {position === "right" && icon}
//             </span>
//           </button>
//         );
//       };
// const TestimonialCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between'
//   >
//     <div>
//       <p className='text-white font-black text-[48px]'>"</p>

//     <div className='mt-1'>
//       <p className='text-white tracking-wider md:text-[18px] text-[14px]'>{testimonial}</p>

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col'>
//           <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} @ <b className="text-violet-300">{company}</b>
//           </p>
//         </div>

//         <img
//           // src={image}
//           src={accentureImg}
//           alt={`feedback_by-${name}`}
//           className='w-14 h-14 rounded-full bg-white p-[6px] object-cover'
//         />
//       </div>
//     </div>
//     </div>
//     <a
//       href={linkedInRecsUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//         <MagicButton
//           title="View full recommendation"
//           icon={linkedInImg}
//           positoion="left"
//         />
//     </a>
//   </motion.div>
// );

// const Feedbacks = () => {

//   return (
//     <div className={`mt-0 sm:mt-12  bg-black-100 rounded-[20px] block`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-around gap-5`}>
//         {testimonials.map((testimonial, index) => (
//             <TestimonialCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "");

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import accentureImg from "../assets/company/accenture.png";
import linkedInImg from "../assets/socialsSvgs/linkedin.png";

const linkedInRecsUrl =
  "https://www.linkedin.com/in/yash-raj-singh-b48756256/details/recommendations/";

const MagicButton = ({ title, icon, position, handleClick, otherClasses }) => {
  return (
    <button
      className="relative inline-flex h-14 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      {/* Old purple ring kept */}
      {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ccf6c8_0%,#00a66d_50%,#ccf6c8_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                   bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};
import { useState } from "react";

const TestimonialCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  // Remove HTML <br/> and normalize whitespace
  const cleanText = testimonial
    .replace(/<br\s*\/?>(\s*)?/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = cleanText.split(" ");
  const previewWordCount = 40; // Adjust this value for more/less preview
  const isLong = words.length > previewWordCount;
  const [showFull, setShowFull] = useState(false);

  // For full text, split into paragraphs for spacing
  const paragraphs = testimonial
    .replace(/<br\s*\/?>(\s*)?/gi, "\n\n")
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-100 p-10 rounded-3xl xs:w-[320px] w-full "
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1 mb-2">
        {!showFull ? (
          <p className="text-white tracking-wider md:text-[18px] text-[14px] mb-3 last:mb-0">
            {words.slice(0, previewWordCount).join(" ")}
            {isLong && !showFull ? "..." : ""}
          </p>
        ) : (
          paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-white tracking-wider md:text-[18px] text-[14px] mb-3 last:mb-0"
            >
              {p}
            </p>
          ))
        )}
        {isLong && !showFull && (
          <button
            className="text-brand-strong underline text-sm mt-1 hover:text-brand transition-colors duration-[1000ms]"
            onClick={() => setShowFull(true)}
          >
            See more
          </button>
        )}
        {isLong && showFull && (
          <button
            className="text-brand-strong underline text-sm mt-1 hover:text-brand transition-colors duration-[1000ms]"
            onClick={() => setShowFull(false)}
          >
            Show less
          </button>
        )}
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} @ <b className="text-brand-strong">{company}</b>
            </p>
          </div>
          <img
            // src={image}
            src={accentureImg}
            alt={`feedback_by-${name}`}
            className="w-14 h-14 rounded-full bg-white p-[6px] object-cover"
          />
        </div>
      </div>
      <a href={linkedInRecsUrl} target="_blank" rel="noopener noreferrer">
        <MagicButton
          title="View on LinkedIn"
          icon={<img src={linkedInImg} alt="LinkedIn" />}
          positoion="left"
          className=""
        />
      </a>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    // brand: "#00beb5", // Primary (A)
    // "brand-strong": "#00a66d",
    // "brand-foreground": "#ccf6c8",
    // "brand-dark": "#1e6139",
    // "brand-deep": "#00383c",
    <div className={`mt-0 sm:mt-12 bg-brand-deep rounded-[20px] block`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-around gap-5`}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonials, "testimonials");
