"use client"

import { motion } from "framer-motion"

export default function GalleryIntro() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-playfair italic font-bold text-gold mb-6"
        >
          A Story Told Through Spaces
        </motion.h2>

        {/* Animated Gold Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1 w-20 mx-auto mb-8 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Every project in our gallery is more than just design — it is the
          balance of radiance and shadow, of elegance and function.  
          Explore kitchens, living rooms, bedrooms, and unique spaces where
          light itself becomes art.
        </motion.p>
      </div>
    </section>
  )
}