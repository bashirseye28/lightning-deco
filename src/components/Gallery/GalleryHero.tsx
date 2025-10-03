"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png"
        alt="Lightning Deco Gallery Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-widest text-sm text-gold mb-4"
        >
          Gallery
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-playfair italic font-bold text-white mb-6 leading-tight"
        >
          Explore Our World of  
          <span className="text-gold"> Timeless Design</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto"
        >
          A curated collection of our finest interiors and atmospheres,  
          where every detail tells a story of elegance and innovation.
        </motion.p>
      </div>
    </section>
  )
}