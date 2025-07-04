"use client";
import { useState } from "react";
import Image from "next/image";
import umair from "../../../../public/home-image/umair-gray.png";
import { motion } from "framer-motion";
import Title from "./Title";
import Buttons from "./Buttons";

const HomePage = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  return (
    <main className="h-screen w-[90%] max-w-screen-2xl flex flex-col items-center justify-center overflow-x-hidden">
      {/* SEO: Main content wrapped in semantic HTML */}
      <div className="relative flex flex-col lg:flex-row justify-between items-center w-[95%] h-[75%] lg:mt-20 max-w-screen-2xl">
        
        {/* Content Section */}
        <motion.div className="flex flex-col lg:w-1/2 text-center lg:text-start xs:items-center lg:items-start">
          <Title />
          <Buttons />
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 400, rotateY: 45 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="w-[50%] sm:w-[40%] md:w-[35%] lg:w-[30%]"
          onAnimationComplete={() => setTriggerAnimation(true)}
        >
          {/* SEO: Image with descriptive alt text */}
          <Image
            src={umair}
            alt="Umair's professional profile picture"
            className="shadow-glass-sm rounded-full mt-3"
            priority
            width={500} // Optional: Add width/height for better SEO
            height={500}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default HomePage;
