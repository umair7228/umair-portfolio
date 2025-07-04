import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navigation from "./components/navigation";
import Head from "next/head";

// Load Inter font with subsets and optimize font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // This ensures text is visible with fallback font until the main font loads
});

export const metadata = {
  title: "Umair Portfolio",
  description: "Created by Umair - A personal portfolio showcasing my skills and projects",
  robots: "index, follow", // Allow search engines to index and follow links
  openGraph: {
    type: "website",
    url: "https://umair-portfolio-web.vercel.app/", // Update with your actual site URL
    title: "Umair Portfolio",
    description: "Created by Umair",
    images: [
      {
        url: "/favicon.ico", // Replace with actual image URL for Open Graph preview
        width: 1200,
        height: 630,
        alt: "Umair Portfolio",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
        sizes: "32x32",
      },
    ],
  },
  // Additional metadata to support SEO
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000", // Dark theme color for mobile
  keywords: "Umair, Portfolio, Web Development, Frontend, Data Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Preload critical fonts and important resources */}
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/favicon.ico" as="image" />
      </Head>
      <body className={clsx(inter.variable, 'relative -z-20 text-foreground font-inter')}>
        {/* Navigation */}
        <Navigation />
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}