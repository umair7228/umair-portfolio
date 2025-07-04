"use client";
import Button from "@/app/components/Button";
import Link from "next/link";
import { ChevronDown, Github, Linkedin, Notebook } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Buttons = ({ triggerAnimation }) => {
  // const [isHovered, setIsHovered] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className={`flex flex-col gap-5 mt-12 sm:mt-16 md:mt-8 lg:mt-12 xl:mt-24 2xl:mt-16 max-w-screen-2xl ${
        triggerAnimation ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      <div className="flex gap-3 md:gap-4 lg:gap-5">
        {/* LinkedIn Button */}
        <Link
          href="https://www.linkedin.com/in/umairnawaz7228/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-[8px] py-1 sm:py-2 px-1 xs:px-2 sm:px-4 tracking-wider">
            <Linkedin className="w-4 sm:w-6" />
            Linkedin
          </Button>
        </Link>

        {/* Github Button */}
        <Link
          href="https://github.com/umair7228"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-[8px] py-1 sm:py-2 px-1 xs:px-2 sm:px-4 tracking-wider">
            <Github className="w-4 sm:w-6" />
            Github
          </Button>
        </Link>

        {/* Resume Button */}
        <a
          href="/resumes/umair-data-engineering-cv.pdf"
          download="Umair-Data-Engineer"
          className="relative group lg:hover:block"
        >
          <Button className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-[8px] py-1 sm:py-2 px-1 xs:px-2 sm:px-4 tracking-wider mb-2">
            <Notebook className="w-4 sm:w-6" />
            Resume
          </Button>
        </a>
      </div>

      {/* Who I Am Button */}
      <Link href="/about">
        <motion.button
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="tracking-wider -z-10 border-black hover:border bg-black/90 text-white hover:text-black duration-300 hover:bg-white font-semibold py-2 2xl:py-3 px-5 rounded-xl"
        >
          Who I Am
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Buttons;