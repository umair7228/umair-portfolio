import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import the CertificationDetails component with lazy loading
const CertificationDetails = dynamic(() => import("@/app/components/certification-details/page"), {
  ssr: false, // Disable SSR for this component if it's client-only
  loading: () => <p>Loading Certifications...</p>
});

const Certifications = () => {
  return (
    <>
      <Head>
        <title>My Certifications - Umair Nawaz</title>
        <meta name="description" content="View all of my certifications in Cloud Computing, Data Engineering, and Frontend Development." />
        <meta name="keywords" content="certifications, cloud computing, data engineering, frontend development" />
        <meta name="author" content="Umair Nawaz" />
        <meta property="og:title" content="My Certifications - Umair Nawaz" />
        <meta property="og:description" content="Explore my certifications in various technologies and domains." />
      </Head>

      <main className="flex min-h-screen flex-col items-center -z-10 relative">
        <Suspense fallback={<p>Loading Certifications...</p>}>
          <CertificationDetails />
        </Suspense>
      </main>
    </>
  );
};

export default Certifications;