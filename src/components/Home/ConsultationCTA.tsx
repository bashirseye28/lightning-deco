"use client"

import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center text-center overflow-hidden">
      {/* Desktop Video Background */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dnmoy5wua/video/upload/v1759374887/1000066533_hdbd76.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Mobile Image Fallback */}
      <div
        className="block md:hidden absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318594/IMG_0880_mzqch7.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
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
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-200 mb-8 font-body leading-relaxed"
        >
          Let us craft a sanctuary of light, shadow, and timeless elegance tailored just for you.
        </motion.p>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="inline-block px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition text-lg font-medium"
        >
          Request a Consultation
        </motion.a>
      </div>
    </section>
  )
}