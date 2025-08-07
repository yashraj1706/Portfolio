import React from "react";
import { certCategories } from "../constants";
import CertCategoryCard from "./CertCategoryCard";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const CertificationsPreview = () => (
  <section className="p-10 w-full h-screen">
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My achievements</p>
      <h2 className={styles.sectionHeadText}>Certifications</h2>
    </motion.div>
    <div className="mt-10 flex flex-wrap justify-evenly gap-7">
      {certCategories.map((cat, idx) => (
        
        <CertCategoryCard key={cat.id} {...cat} />
      ))}
    </div>
  </section>
);

export default CertificationsPreview;