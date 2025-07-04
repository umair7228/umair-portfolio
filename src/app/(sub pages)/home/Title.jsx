"use client";
import { motion } from "framer-motion";

// Reusable motion settings to avoid redundancy
const motionSettings = {
  initial: { opacity: 0, x: -200 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "circOut" },
};

const Title = () => {
  return (
    <div className="text-center lg:text-start">
      {/* Main Title (h1) for SEO */}
      <motion.h1
        {...motionSettings}
        transition={{ ...motionSettings.transition, delay: 0.3 }}
        className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-[font5] tracking-wide text-black/90 uppercase"
      >
        UMAIR NAWAZ
      </motion.h1>

      {/* Subtitle (h2) */}
      <motion.h2
        {...motionSettings}
        transition={{ ...motionSettings.transition, delay: 0.5 }}
        className="text-xl md:text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-[font5] tracking-wide text-black/90 uppercase"
      >
        Cloud Data Engineer
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: "circOut" }}
        className="text-sm xl:text-lg mt-4 lg:mt-2 tracking-wide text-black/90"
      >
        Certified Data Engineer with hands-on experience in building and optimizing ETL pipelines, real-time data streaming, and cloud-native solutions. Proficient in AWS, Apache Spark, Kafka, Airflow, and Snowflake. Passionate about designing scalable data architectures that drive actionable insights and business impact.
      </motion.p>
    </div>
  );
};

export default Title;