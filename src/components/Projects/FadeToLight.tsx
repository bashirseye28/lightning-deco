"use client"

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"
import { useRef } from "react"

export default function FadeToLight() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // 🌅 Animate light rise
  const gradientY = useTransform(scrollYProgress, [0, 1], ["30%", "0%"])
  const glowIntensity = useTransform(scrollYProgress, [0, 1], [0.2, 0.6])
  const lineOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])

  // ✅ Fix: useMotionTemplate instead of `.to()`
  const backgroundGradient = useMotionTemplate`
    linear-gradient(
      to top,
      rgba(13,13,13,1) 0%,
      rgba(212,175,55,${glowIntensity}) 40%,
      rgba(249,247,241,${glowIntensity}) 100%
    )
  `

  return (
    <section
      ref={ref}
      className="relative w-full h-[50vh] overflow-hidden bg-[#0B0B0B] flex items-center justify-center"
    >
      {/* 🌌 Background gradient (dark → gold → ivory) */}
      <motion.div
        style={{
          background: backgroundGradient,
        }}
        className="absolute inset-0 transition-all duration-700"
      />

      {/* 🌟 Center Glow Aura */}
      <motion.div
        style={{
          opacity: glowIntensity,
          y: gradientY,
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.3)_0%,transparent_70%)] blur-3xl pointer-events-none"
      />

      {/* 💫 Central Light Line */}
      <motion.div
        style={{
          opacity: lineOpacity,
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute bottom-[40%] left-1/2 -translate-x-1/2 h-[2px] w-[60%] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full"
      />

      {/* ✨ Subtle Floating Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10 text-[#F9F7F1]/70 font-playfair italic text-lg tracking-wide text-center"
      >
        Light fades into stillness — yet the design lives on.
      </motion.p>
    </section>
  )
}