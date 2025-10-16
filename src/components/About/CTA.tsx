"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutCTA() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background for Desktop – Video */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dnmoy5wua/video/upload/v1759374887/1000066533_hdbd76.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Background for Mobile – Static Image */}
      <div
        className="block md:hidden absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318594/IMG_0880_mzqch7.png')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Fade Gradient at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair italic font-bold text-gold mb-6"
        >
          Ready to Transform Your Space?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
        >
          Let’s create timeless interiors where light and shadow tell your story.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            href="/contact"
            className="px-8 py-3 bg-gold text-black font-medium rounded-full hover:bg-white hover:text-gold transition"
          >
            Request Consultation
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 border border-gold text-gold font-medium rounded-full hover:bg-gold hover:text-black transition"
          >
            View Our Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}