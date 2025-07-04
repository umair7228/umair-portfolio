import ProjectLayout from "./projectLayout";
import Head from "next/head";

export default function DataProjects() {
  return (
    <>
      <Head>
        {/* SEO Metadata */}
        <title>My Data Engineering Projects</title>
        <meta
          name="description"
          content="Explore my Data Engineering projects, showcasing innovative solutions, architecture diagrams, and data workflows."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Data Engineering Projects - My Portfolio" />
        <meta
          property="og:description"
          content="Explore my Data Engineering projects, showcasing innovative solutions, architecture diagrams, and data workflows."
        />
        <meta
          property="og:image"
          content="/images/data-engineering-projects-thumbnail.png" // Replace with actual image URL
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.umair-portfolio-web.vercel.app/components/project-details/data-engineering" />
        <link rel="canonical" href="https://www.umair-portfolio-web.vercel.app/components/project-details/data-engineering" />
      </Head>

      <main className="flex min-h-screen flex-col items-center -z-10 relative">
        <ProjectLayout />
      </main>
    </>
  );
}