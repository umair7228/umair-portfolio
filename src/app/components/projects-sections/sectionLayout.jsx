"use client";
import Image from "next/image";
import React, { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectSections } from "../../../../data/projectSection";

const SectionLayout = () => {
  return (
      <section className="flex flex-col w-full items-center justify-center gap-5 pt-8 md:!pt-20 xl:py-10 sm:py-16 lg:py-5 max-w-screen-2xl">
        {/* Title with animation */}
        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold font-serif text-black/80 select-none mt-14 sm:mt-8 tracking-widest"
          initial={{ opacity: 0, y: -50 }}  // Initial state
          animate={{ opacity: 1, y: 0 }}    // Final state
          transition={{ duration: 0.8 }}    // Animation duration
        >
          Projects
        </motion.div>

        <div className="relative grid lg:grid-cols-2 gap-10 sm:gap-14 pb-5 lg:gap-16 xl:gap-20 overflow-hidden px-8 sm:px-20 md:px-28 lg:px-16 w-full 2xl:max-w-[75%]">
          
          {/* Engineering Section */}
          <motion.div
            className="relative pb-16 flex flex-col gap-3 text-start border border-black/40 p-4 rounded-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* image */}
            <Image
              src={projectSections.engineering.image}
              alt="Data Engineering project"
              width={400}
              height={300}
              className="w-full object-cover object-center rounded-xl select-none pointer-events-none"
              priority // Load first for above-the-fold
            />

            <h2 className="text-lg md:text-xl 2xl:text-2xl text-black/90 font-semibold select-none pointer-events-none tracking-wider">
              {projectSections.engineering.name}
            </h2>
            <p className="text-sm md:text-[1rem] text-black select-none pointer-events-none tracking-wider">
              {projectSections.engineering.description}
            </p>
            <Link href={'/components/project-details/data-engineering'}>
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-xs md:text-lg lg:text-[15px] absolute bottom-3 !text-black/80 font-semibold select-none border hover:!text-white hover:bg-black border-black/40 px-4 py-2 rounded-xl tracking-wider"
              >
                See Projects
              </motion.button>
            </Link>
          </motion.div>

          {/* Frontend Section */}
          <motion.div
            className="relative pb-16 flex flex-col gap-3 text-start border border-black/40 p-4 rounded-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* image */}
            <Image
              src={projectSections.frontend.image}
              alt="Frontend Development project"
              width={400}
              height={300}
              className="w-full object-cover object-center select-none rounded-xl pointer-events-none"
              priority
            />

            <h2 className="text-lg md:text-xl 2xl:text-2xl text-black/90 font-semibold select-none pointer-events-none tracking-wider">
              {projectSections.frontend.name}
            </h2>
            <p className="text-sm md:text-[1rem] text-black select-none pointer-events-none tracking-wider">
              {projectSections.frontend.description}
            </p>
            <Link href={"/components/project-details/frontend"}>
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-xs md:text-lg lg:text-[15px] absolute bottom-3 !text-black/90 font-semibold border hover:!text-white hover:bg-black border-black/40 select-none px-4 py-2 rounded-xl tracking-wider"
              >
                See Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
  );
};

export default memo(SectionLayout);