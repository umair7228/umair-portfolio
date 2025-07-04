import React from 'react';
import Image from 'next/image';
import { certificates } from '../../../../data/certification';

const CertificationDetails = () => {
  return (
    <section className="flex flex-col gap-6 sm:gap-10 items-center justify-center px-5 sm:px-10 lg:px-16 2xl:px-0 py-32 w-full max-w-screen-2xl">
      <header className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-serif text-black/80 text-center select-none tracking-widest">
        My Certifications
      </header>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-8 animate-rotateBackToFront">
        {certificates.map((certificate) => (
          <article key={certificate.id} className="border border-black/20 bg-black/10 p-4 rounded-xl flex flex-col gap-3">
            <Image
              src={certificate.image}
              alt={certificate.alt || `Certificate from ${certificate.organization}`} // Default alt text for accessibility
              width={300}
              height={250}
              className="rounded-xl w-full h-full"
              loading="lazy" // Lazy load images for better performance
            />
            <h3 className="text-lg sm:text-xl text-black/80 font-semibold tracking-wider">{certificate.title}</h3>
            <div className="flex justify-between text-sm text-black/70 tracking-wider">
              <h5>{certificate.organization}</h5>
              <p>{certificate.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CertificationDetails;