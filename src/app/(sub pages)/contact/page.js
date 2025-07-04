import React from "react";
import Form from "@/app/components/contact/Form";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me - Umair Nawaz</title>
        <meta name="description" content="Get in touch with Umair Nawaz for collaborations, projects, and more!" />
        <meta name="keywords" content="contact, email, projects, collaborations" />
        <meta name="author" content="Umair Nawaz" />
        <meta property="og:title" content="Contact Me - Umair Nawaz" />
        <meta property="og:description" content="Let's discuss your next big idea! Reach out for collaborations or technical support." />
      </Head>

      <main className="flex items-center justify-center min-h-screen px-8">
        <article className="w-full max-w-screen-2xl flex flex-col items-center justify-center space-y-8 pb-8 pt-24 lg:pt-32 2xl:pt-40">
          <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4 sm:px-16 md:px-20 lg:px-24 xl:px-60 2xl:px-80">
            <h1 className="font-semibold text-black/80 text-xl text-center md:text-3xl lg:text-4xl capitalize">
              Let&#39;s Build Something Extraordinary!
            </h1>
            <p className="text-center text-black/70 font-semibold text-xs md:text-base">
              Have a project in mind? Need an expert in Data Engineering, cloud engineering, or data workflows? I&#39;m always excited to connect with like-minded individuals and collaborate on innovative ideas. Let&#39;s make it happen!
            </p>
          </div>
          <Form />
        </article>
      </main>
    </>
  );
}