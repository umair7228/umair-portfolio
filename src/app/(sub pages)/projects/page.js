import Head from "next/head";
import SectionLayout from "../../components/projects-sections/sectionLayout";

export default function Projects() {
  return (
    <>
      <Head>
        {/* SEO Metadata */}
        <title>Projects - My Portfolio</title>
        <meta
          name="description"
          content="Explore my projects in Data Engineering, Frontend Development, and more."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Projects - My Portfolio" />
        <meta
          property="og:description"
          content="Explore my projects in Data Engineering, Frontend Development, and more."
        />
        <meta
          property="og:image"
          content="/section-images/data-engineering.png" // Replace with your actual image URL
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/projects" />
        <link rel="canonical" href="https://umair-portfolio-web.vercel.app/projects" />
        
        {/* Preload important fonts or assets */}
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center -z-10 relative">
        <SectionLayout />
      </main>
    </>
  );
}