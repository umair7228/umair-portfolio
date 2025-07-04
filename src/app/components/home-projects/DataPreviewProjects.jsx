"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { dataEngineeringProjects } from "../../../../data/dataEngineering"; // adjust path if needed

const PreviewProjects = () => {
  // Get the latest 4 projects based on descending ID
    const projectIds = [19, 11, 9, 8];

    const latestProjects = dataEngineeringProjects.filter(p =>
    projectIds.includes(p.id)
    );


  return (
    <section className="w-full px-4 sm:px-10 md:px-20 py-10 sm:py-14 lg:py-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-black/90 tracking-wide">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {latestProjects.map((project) => (
          <article key={project.id} className="relative border pb-16 border-black/30 bg-black/10 rounded-xl p-4 flex flex-col">
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={250}
              className="w-full h-[50%] sm:h-[60%] md:h-[50%] lg:h-[55%] 2xl:h-[55%] object-fill rounded-xl object-center select-none pointer-events-none"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mt-4 mb-2 text-black/90">
              {project.name}
            </h3>
            <p className="text-sm text-black/70 line-clamp-3">
              {project.description}
            </p>

            <Link
              href={project.demoLink}
              className="absolute bottom-4 left-4 mt-4 w-1/4 text-sm text-black border rounded-[8px] border-black/40 py-2 px-4 hover:underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Details
            </Link>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/projects">
          <button className="border border-black/40 text-black hover:text-white hover:bg-black font-medium px-6 py-2 rounded-xl tracking-wide transition">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PreviewProjects;