import type { Metadata } from "next"
import ProjectsHero from "@/components/Projects/Hero"
import { motion } from "framer-motion"

export const metadata: Metadata = {
  title: "Projects | Lightning Deco",
  description:
    "Explore Lightning Deco’s portfolio — luxury interiors shaped by light, texture, and timeless form.",
  openGraph: {
    title: "Lightning Deco Projects",
    description:
      "A cinematic showcase of spaces designed by Lightning Deco — where light and form create harmony.",
    url: "https://lightningdeco.com/projects",
    siteName: "Lightning Deco",
    images: [
      {
        url: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png",
        width: 800,
        height: 800,
        alt: "Lightning Deco Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightning Deco Projects",
    description:
      "Luxury interiors by Lightning Deco — elegant, architectural, timeless.",
    images: [
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png",
    ],
  },
}

export default function ProjectsPage() {
  return (
    <main className="bg-[#0B0B0B] text-white overflow-hidden">
      {/* 1️⃣ Cinematic Hero */}
      <ProjectsHero
        imageSrc="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png"
        title="The Art of Spatial Storytelling"
        subtitle="Each space is a dialogue between shadow, structure, and serenity."
        align="left"
      />

      {/* 2️⃣ Fade Transition to Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-[#0B0B0B] text-center py-28"
      >
        <div className="max-w-5xl mx-auto">
          {/* Gold divider line */}
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

      {/* 3️⃣ Projects Grid Placeholder (Next Step) */}
      <section className="bg-[#111] py-28 px-6 text-center">
        <p className="text-gray-500 font-lato">
          — Grid section coming next —
        </p>
      </section>
    </main>
  )
}