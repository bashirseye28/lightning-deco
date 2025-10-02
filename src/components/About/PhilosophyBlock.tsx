"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

export default function AboutPhilosophy() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1759317501/IMG_0920_b0leiz.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair italic font-bold text-gold mb-6"
        >
          Our Philosophy
        </motion.h2>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-1 w-24 mx-auto mb-12 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full"
        />

        {/* Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed font-body"
        >
          We believe light is not just illumination — it is{" "}
          <span className="text-gold font-semibold">a language</span>, shaping space,
          mood, and memory. At{" "}
          <span className="text-gold font-semibold">Lightning Deco</span>, we create
          sanctuaries where radiance and shadow coexist, where design becomes
          timeless art — not only seen, but felt.
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center space-x-2 text-gray-400 italic font-body"
        >
          <Zap size={22} className="text-gold" />
          <span>
            <span className="text-gold font-semibold">Lightning Deco</span> – The Art of Shadow and Light
          </span>
        </motion.div>
      </div>
    </section>
  )
}