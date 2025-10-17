"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ClientQuote() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // 🌕 Subtle parallax and fade
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[70vh] bg-[#0B0B0B] text-white flex items-center justify-center overflow-hidden"
    >
      {/* 🌌 Background with soft parallax light bokeh */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-[url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png')] bg-cover bg-center brightness-[0.4]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#0B0B0B]" />

      {/* ✨ Gold Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]" />

      {/* 💬 Quote Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center px-8"
      >
        <p className="text-[#F9F7F1]/90 font-playfair italic text-2xl md:text-4xl leading-snug mb-8">
          “Lightning Deco transformed our space into <span className="text-[#D4AF37]">poetry in light</span>.”
        </p>

        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-24 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent border-0 my-6"
        />

        <p className="text-[#BFBFBF] font-lato tracking-wide uppercase text-sm">
          — Private Client, London
        </p>
      </motion.div>

      {/* ✨ Floating Ambient Gold Dust Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.15),transparent_70%)]"
        />
      </div>
    </section>
  )
}