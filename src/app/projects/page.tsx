"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import ProjectsHeroAtelier from "@/components/Projects/ProjectsHeroAtelier"
import ProjectsGrid from "@/components/Projects/ProjectGrid"
import FeaturedProject from "@/components/Projects/FeaturedProject"
import ProcessPhilosophy from "@/components/Projects/ProcessPhilosophy"
import ClientQuote from "@/components/Projects/ClientQuote"
// import FadeToLight from "@/components/Projects/FadeToLight"

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Smooth fade-through & rise transition
  const fadeOverlay = useTransform(scrollYProgress, [0.05, 0.25], [0, 1])
  const gridY = useTransform(scrollYProgress, [0.15, 0.4], ["60px", "0px"])
  const gridOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1])

  return (
    <main
      ref={containerRef}
      className="relative bg-[#0D0D0D] text-white overflow-hidden"
    >
      {/* 1️⃣ Hero Section */}
      <ProjectsHeroAtelier />

      {/* 2️⃣ Soft Fade Transition (luxury dimmer) */}
      <motion.div
        style={{ opacity: fadeOverlay }}
        className="absolute top-[85vh] left-0 w-full h-[25vh] bg-gradient-to-b from-transparent via-[#0D0D0D]/85 to-[#0D0D0D] pointer-events-none"
      />

      {/* 3️⃣ Project Grid Entrance */}
      {/* <motion.div
        style={{ opacity: gridOpacity, y: gridY }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10"
      > */}
        <ProjectsGrid />
      {/* </motion.div> */}

      {/* 4️⃣ Featured Project Spotlight */}
      <FeaturedProject />

      {/* 5️⃣ Process & Philosophy */}
      <ProcessPhilosophy />

      {/* 6️⃣ Client Testimonial */}
      <ClientQuote />

      {/* 7️⃣ Fade to Light Transition */}
      {/* <FadeToLight /> */}
    </main>
  )
}