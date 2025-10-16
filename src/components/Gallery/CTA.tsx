"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="relative bg-ivory py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-gold/10 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >
        {/* Elegant Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Let’s Design Your{" "}
          <span className="text-gold">Dream Space</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
          From bespoke interiors to timeless architecture, we bring vision to life 
          with elegance, precision, and creativity. Your dream begins here.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="px-10 py-4 rounded-full bg-gold text-black font-semibold text-lg shadow-lg hover:bg-black hover:text-gold transition-all border border-gold"
          >
            Book a Consultation
          </Link>
        </div>
      </motion.div>
    </section>
  )
}