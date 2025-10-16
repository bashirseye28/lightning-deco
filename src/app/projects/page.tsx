"use client";

import dynamic from "next/dynamic"; // ✅ from Next.js
import { motion } from "framer-motion";
import Head from "next/head";

// ✅ Dynamically import the Hero (avoids SSR + hydration issues)
const ProjectsHero = dynamic(() => import("@/components/Projects/Hero"), {
  ssr: false,
  loading: () => (
    <div className="h-[88vh] flex items-center justify-center text-[#D4AF37]">
      Loading...
    </div>
  ),
});

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Lightning Deco</title>
        <meta
          name="description"
          content="Explore Lightning Deco’s portfolio — luxury interiors shaped by light, texture, and timeless form."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Lightning Deco Projects" />
        <meta
          property="og:description"
          content="A cinematic showcase of spaces designed by Lightning Deco — where light and form create harmony."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png"
        />
        <meta property="og:url" content="https://lightningdeco.com/projects" />
        <meta property="og:site_name" content="Lightning Deco" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lightning Deco Projects" />
        <meta
          name="twitter:description"
          content="Luxury interiors by Lightning Deco — elegant, architectural, timeless."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png"
        />
      </Head>

      <main className="bg-[#0B0B0B] text-white overflow-hidden">
        {/* Hero Section */}
        <ProjectsHero
          imageSrc="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png"
          title="The Art of Spatial Storytelling"
          subtitle="Each space is a dialogue between shadow, structure, and serenity."
          align="left"
        />

        {/* Fade Transition Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-[#0B0B0B] text-center py-28"
        >
          <div className="max-w-5xl mx-auto">
            <div className="h-[3px] w-20 mx-auto mb-8 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-playfair italic text-[#D4AF37] mb-4">
              Timeless Works
            </h2>
            <p className="text-[#E5E5E5]/90 max-w-2xl mx-auto font-lato text-lg leading-relaxed">
              Discover our portfolio of interiors — each project a symphony of
              proportion, craftsmanship, and light.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid Placeholder */}
        <section className="bg-[#111] py-28 px-6 text-center">
          <p className="text-gray-500 font-lato">— Grid section coming next —</p>
        </section>
      </main>
    </>
  );
}

// ✅ Renamed to avoid conflict with Next.js's `dynamic()`
export const runtimeDynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";