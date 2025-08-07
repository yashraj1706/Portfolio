import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { certCategories } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Certifications = () => {
  const { categoryId } = useParams();
  const category = certCategories.find((cat) => cat.id === categoryId) || certCategories[0];
  const [showAll, setShowAll] = useState(false);

  const certsToShow = showAll ? category.certs : category.certs.slice(0, 4);

  return (
    <section className="mt-20">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{category.title} Certifications</h2>
        <p className="mt-2 text-secondary text-[17px]">{category.description}</p>
      </motion.div>
      <div className="mt-10 flex gap-7 overflow-x-auto">
        {certsToShow.map((cert) => (
          <div key={cert.id} className="bg-black-200 p-6 rounded-xl min-w-[250px] flex flex-col justify-between">
            <h3 className="text-lg font-bold text-[#915EFF]">{cert.title}</h3>
            <p className="text-sm text-secondary">{cert.provider}</p>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 underline text-xs mt-2 block"
            >
              View Certificate
            </a>
          </div>
        ))}
        {category.certs.length > 4 && (
          <button
            className="text-violet-300 underline ml-2"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? "View Less" : "View More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Certifications;