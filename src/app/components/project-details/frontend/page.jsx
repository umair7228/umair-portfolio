import FrontendLayout from "./projectLayout.jsx";
import Head from "next/head";

export default function FrontendProjects() {
  return (
    <>
      <Head>
        {/* SEO Metadata */}
        <title>Frontend Projects - My Portfolio</title>
        <meta
          name="description"
          content="Explore my frontend development projects showcasing modern UI/UX designs, interactive features, and user-centric applications."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Frontend Projects - My Portfolio" />
        <meta
          property="og:description"
          content="Explore my frontend development projects showcasing modern UI/UX designs, interactive features, and user-centric applications."
        />
        <meta
          property="og:image"
          content="/images/frontend-projects-thumbnail.png"  // Replace with your actual image URL
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.umair-portfolio-web.vercel.app/components/project-details/frontend" />
        <link rel="canonical" href="https://www.umair-portfolio-web.vercel.app/components/project-details/frontend" />
      </Head>

      <main className="flex min-h-screen flex-col items-center -z-10 relative">
        <FrontendLayout />
      </main>
    </>
  );
}