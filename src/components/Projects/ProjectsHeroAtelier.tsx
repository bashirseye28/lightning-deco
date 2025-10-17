"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectsHeroAtelier() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0D0D0D] text-white flex flex-col md:flex-row">
      {/* --- Left Content Column --- */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 py-24 md:py-0">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="tracking-[0.25em] text-[#D4AF37] uppercase text-[12px] mb-4"
        >
          Projects
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-playfair italic text-4xl md:text-6xl font-semibold leading-tight"
        >
          Spaces Born from <span className="text-[#D4AF37]">Light</span>
        </motion.h1>

        {/* Gold Motion Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="origin-left mt-6 h-[3px] w-24 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-md text-[#F9F7F1]/80 font-lato text-base md:text-lg leading-relaxed"
        >
          Each environment we shape begins as a dialogue —
          between light, proportion, and material.
        </motion.p>
      </div>

      {/* --- Right Visual Column --- */}
      <div className="relative flex-1 min-h-[60vh] md:min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318585/IMG_0079_w0bpic.jpg"
            alt="Architectural background"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0D0D0D]/90 via-[#0D0D0D]/70 to-transparent" />
      </div>

      {/* --- Scroll Cue --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center select-none"
        >
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37]/90 uppercase">
            Scroll
          </span>
          <span className="mt-2 h-8 w-px bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}