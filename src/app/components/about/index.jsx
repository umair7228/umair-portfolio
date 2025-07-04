"use client";
import { motion } from "framer-motion";
import umair2 from "../../../../public/home-image/umair-gray.png";
import React from "react";
import {
  FaAws,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDiscord,
  FaDocker,
} from "react-icons/fa6";
import { TbBrandSnowflake } from "react-icons/tb";
import {
  SiMicrosoftsqlserver,
  SiApacheairflow,
  SiVercel,
  SiApachekafka,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { IoLogoPython, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { VscVscodeInsiders } from "react-icons/vsc";
import AnimateLayout from "./AnimateLayout";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className=" w-full flex flex-col items-center  justify-center gap-12 pb-12 pt-10 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
      <div className="flex flex-col gap-14 w-full max-w-screen-2xl min-h-screen items-center justify-center text-center">
        {/* Image div  */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%]"
        >
          <Image
            src={umair2}
            alt="Umair Image"
            className="shadow-glass-sm rounded-full backdrop-blur-[6px]"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl xs:text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-[font5] tracking-wide uppercase text-black/90">
            Umair Nawaz
          </h1>
          <p className="font-light text-black/80 text-xs xs:text-sm sm:text-lg">
            Meet the wizard behind this portfolio
          </p>
        </motion.div>
      </div>

      {/* Architect text  */}
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full max-w-screen-2xl">
        <AnimateLayout
          className={
            "col-span-full xl:col-span-8 row-span-2 flex flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left text-black/90 font-semibold w-full capitalize tracking-wider">
            🚀 Cloud Data Engineer
          </h2>

          <p className="font-light text-black/80 text-xs xs:text-sm 2xl:text-lg tracking-wide">
            Hello! I&#39;m Umair, a passionate and skilled <strong>Cloud Data Engineer</strong> dedicated to solving real-world data challenges. My expertise spans across <strong>AWS, Snowflake, Apache Kafka, Airflow, SQL, and Python (Pandas, Numpy)</strong>, sharpened through intensive trainings. I specialize in designing <strong>scalable data pipelines</strong> and building <strong>cloud-based solutions</strong> that streamline workflows and deliver impactful results.
          </p>

          <p className="font-light text-black/80 text-xs xs:text-sm 2xl:text-lg tracking-wide">
            I focus on constructing robust and <strong>efficient data architectures</strong> that drive powerful business intelligence. Whether it&#39;s <strong>data ingestion, transformation, or real-time processing</strong>, I am committed to integrating and automating data at scale, ensuring systems are high-performing, reliable, and available.
          </p>

          <p className="font-light text-black/80 text-xs xs:text-sm 2xl:text-lg tracking-wide">
            With a solid foundation in modern data engineering tools and technologies, my goal is to tackle complex <strong>data challenges</strong>, empower teams with actionable <strong>insights</strong>, and craft high-performance solutions that fuel <strong>data-driven decision-making</strong> and innovation.
          </p>

        </AnimateLayout>

        <AnimateLayout
          className={
            " col-span-full sm:col-span-6 xl:col-span-4 text-accent pointer-events-none select-none"
          }
        >
          <p className="font-semibold w-full text-black/90 text-center text-3xl md:text-7xl">
            25+ <sub className="font-semibold text-xl">Projects</sub>
          </p>
        </AnimateLayout>

        <AnimateLayout
          className={
            " col-span-full sm:col-span-6 xl:col-span-4 text-accent pointer-events-none select-none"
          }
        >
          <div className="font-semibold w-full text-black/90 text-center text-3xl md:text-7xl">
            2+ <sub className="font-semibold text-xl">Year Experience</sub>
          </div>
        </AnimateLayout>

        <AnimateLayout
          className={"col-span-full sm:col-span-5 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=umair7228&theme=black&hide_border=true&title_color=000000&text_color=000000&icon_color=000000&text_bold=false"
            alt="Umair Github"
            loading="lazy"
          />
        </AnimateLayout>

        <AnimateLayout
          className={"col-span-full sm:col-span-7 md:col-span-8 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=umair7228&theme=transparent&hide_border=true&title_color=000000&text_color=000000&icon_color=000000&text_bold=false"
            alt="Umair Github"
            loading="lazy"
          />
        </AnimateLayout>

        <AnimateLayout className={"col-span-full"}>
          <div className=" flex flex-wrap items-center justify-center gap-4">
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <FaAws className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 text-sky-500 rounded-2xl">
              <TbBrandSnowflake className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-red-400 p-2 md:p-3 rounded-2xl">
              <SiMicrosoftsqlserver className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-blue-400 p-2 md:p-3 rounded-2xl">
              <BiLogoPostgresql className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-orange-400 p-2 md:p-3 rounded-2xl">
              <GrMysql className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-yellow-300 p-2 md:p-3 rounded-2xl">
              <IoLogoPython className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <SiApachekafka className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <SiApacheairflow className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <FaDocker className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <RiNextjsFill className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-2 md:p-3 rounded-2xl">
              <GrReactjs className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-600 p-2 md:p-3 rounded-2xl">
              <BiLogoTypescript className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-yellow-400 p-2 md:p-3 rounded-2xl">
              <IoLogoJavascript className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-2 md:p-3 rounded-2xl">
              <IoLogoCss3 className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-2 md:p-3 rounded-2xl">
              <RiTailwindCssFill className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-orange-500 p-2 md:p-3 rounded-2xl">
              <IoLogoHtml5 className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-green-500 p-2 md:p-3 rounded-2xl">
              <FaNodeJs className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-orange-600 p-2 md:p-3 rounded-2xl">
              <FaGitAlt className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <FaGithub className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <SiVercel className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-2 md:p-3 rounded-2xl">
              <VscVscodeInsiders className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-purple-300 p-2 md:p-3 rounded-2xl">
              <FaDiscord className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
          </div>
        </AnimateLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
