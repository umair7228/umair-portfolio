import AboutDetails from "@/app/components/about";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Umair Nawaz</title>
        <meta
          name="description"
          content="Learn more about Umair Nawaz, a certified Data Engineer with experience in AWS, Apache Spark, and building scalable data architectures."
        />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="About Me | Umair Nawaz" />
        <meta
          property="og:description"
          content="Learn more about Umair Nawaz, a certified Data Engineer with experience in AWS, Apache Spark, and building scalable data architectures."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://umair-portfolio-web.vercel.app/about" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me | Umair Nawaz" />
        <meta
          name="twitter:description"
          content="Learn more about Umair Nawaz, a certified Data Engineer with experience in AWS, Apache Spark, and building scalable data architectures."
        />
        <meta name="twitter:image" content="/favicon.ico" />
      </Head>
      
      <main className="flex min-h-screen flex-col items-center -z-10 relative">
        <AboutDetails />
      </main>
    </>
  );
}