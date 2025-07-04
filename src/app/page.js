'use client'
import React, { Suspense } from 'react';
import Head from 'next/head';

const HomePage = React.lazy(() => import("./(sub pages)/home/page"));
const DataPreviewProjects = React.lazy(() => import("./components/home-projects/DataPreviewProjects"));
const Experiences = React.lazy(() => import("./components/experiences/Experiences"));

const mainStyle = "flex min-h-screen flex-col items-center -z-10 justify-between relative";

export default function Home() {
  return (
    <main className={mainStyle}>
      <Head>
        <title>Umair&#39;s Portfolio</title>
        <meta name="description" content="Cloud Data Engineer with expertise in building scalable data pipelines and modern data architecture" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Suspense fallback={<div>Loading HomePage...</div>}>
        <HomePage />
      </Suspense>
      <Suspense fallback={<div>Loading Experiences...</div>}>
        <Experiences />
      </Suspense>
      <Suspense fallback={<div>Loading Projects...</div>}>
        <DataPreviewProjects />
      </Suspense>
    </main>
  );
}