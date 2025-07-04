"use client";
import React from "react";
import { Experience } from "../../../../data/experience";

const Experiences = () => {

  return (
    <section className="w-full px-4 sm:px-10 md:px-20 py-10 sm:py-14 lg:py-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-black/90 tracking-wide">
        Experience
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {Experience.map((experience) => (
          <article key={experience.id} className="relative border pb-16 border-black/30 bg-black/10 rounded-xl p-4 flex flex-col">
            <div className="flex items-center justify-between">
                <h3 className="md:text-lg font-semibold -mb-1 text-black/90">
                    {experience.title}
                </h3>
                <h4 className="text-black/40 text-xs">
                    {experience.date}
                </h4>
            </div>
            <h3 className="text-black/60 text-sm md:text-base">
                {experience.company}
            </h3>
            <p className="text-sm text-black/70 mt-3">
              {experience.description}
            </p>
          </article>
        ))}
      </div>

      {/* <div className="flex justify-center mt-10">
        <Link href="/projects">
          <button className="border border-black/40 text-black hover:text-white hover:bg-black font-medium px-6 py-2 rounded-xl tracking-wide transition">
            See More
          </button>
        </Link>
      </div> */}
    </section>
  );
};

export default Experiences;