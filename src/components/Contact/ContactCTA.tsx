"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-32 px-6 lg:px-20">
      {/* Soft ambient gold glow */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.2, 0.45, 0.2],
          x: ["-8%", "8%", "-8%"],
          y: ["-5%", "5%", "-5%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(212,175,55,0.12)_0%,transparent_70%)]"
      />

      {/* Frosted Glass Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center bg-white/30 backdrop-blur-2xl rounded-3xl border border-[#E5CDA5]/40 shadow-lg overflow-hidden p-12 md:p-16">
        {/* Moving Light Reflection Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-light-sweep" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair italic font-semibold mb-6 text-[#D4AF37]"
        >
          Your Vision Deserves Light
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-[#1E3A5F]/80 max-w-2xl mx-auto leading-relaxed mb-10 font-lato"
        >
          Every masterpiece begins with a conversation. Let’s bring your space to life through the
          art of light and form.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="#consultation"
            className="group inline-flex items-center gap-3 px-10 py-4 border border-[#D4AF37] text-[#D4AF37] rounded-full text-lg font-medium hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            Book Your Consultation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}