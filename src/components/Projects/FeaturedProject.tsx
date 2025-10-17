"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // 🌕 Parallax + Glow Dynamics
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const glowStrength = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.6])

  // Derived glow-responsive styling (type-safe)
  const boxShadowValue = useTransform(glowStrength, (v: number) =>
    `0 0 ${10 + v * 15}px rgba(212,175,55,${0.3 + v * 0.3})`
  )

  const borderColorValue = useTransform(glowStrength, (v: number) =>
    `rgba(212,175,55,${0.6 + v * 0.4})`
  )

  const edgeShadow = useTransform(glowStrength, (v: number) =>
    `0 0 ${20 + v * 10}px rgba(212,175,55,${0.4 + v * 0.2})`
  )

  // ✨ Scroll-reactive “Glass Morph Flow” line transition
  const flowWidth = useTransform(scrollYProgress, [0, 1], ["30%", "100%"])
  const flowOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.55])
  const flowBlur = useTransform(scrollYProgress, [0, 1], ["blur(12px)", "blur(4px)"])
  const flowGlow = useTransform(scrollYProgress, [0, 1], [8, 20])

  const flowBoxShadow = useTransform(flowGlow, (v: number) =>
    `0 0 ${v}px rgba(212,175,55,0.5), 0 0 ${v * 1.5}px rgba(212,175,55,0.3)`
  )

  return (
    <>
      <section
        ref={ref}
        className="relative w-full min-h-[95vh] bg-[#0B0B0B] overflow-hidden text-white flex items-center"
      >
        {/* 🎞️ Background Parallax Layer */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 will-change-transform">
          <Image
            src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318564/IMG_0025_tyavad.jpg"
            alt="Leeds Penthouse by Lightning Deco"
            fill
            priority
            className="object-cover object-center brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>

        {/* 💎 Cinematic Glass Text Panel */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-start px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-black/30 backdrop-blur-2xl border border-[#D4AF37]/20 px-10 md:px-14 py-14 rounded-[2rem] shadow-[0_0_80px_-20px_rgba(212,175,55,0.25)]"
          >
            {/* ✨ Animated Gold Edge */}
            <motion.div
              style={{
                opacity: glowStrength,
                boxShadow: edgeShadow,
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-[3px] top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-[#D4AF37] via-[#F4E3A1]/70 to-transparent"
            />

            {/* Subtle Gold Frame */}
            <div className="absolute inset-0 rounded-[2rem] border border-[#D4AF37]/10 pointer-events-none" />

            {/* Text Content */}
            <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-[11px] mb-4">
              Featured Project
            </p>

            <h3 className="font-playfair italic text-4xl md:text-5xl font-semibold text-[#F9F7F1] leading-tight mb-6">
              The Symphony of Shadows
            </h3>

            <p className="text-[#F9F7F1]/85 font-lato text-[15px] leading-relaxed mb-8 max-w-md">
              A penthouse that harmonizes architecture and atmosphere —
              crafted around the poetry of shadow, reflection, and golden light.
              Located in Leeds, it embodies the dialogue between stillness and illumination.
            </p>

            {/* 🌟 View Project Button (Next.js Link + Framer Glow) */}
            <Link href="/projects/the-symphony-of-shadows" legacyBehavior passHref>
              <motion.a
                aria-label="View The Symphony of Shadows project"
                style={{
                  boxShadow: boxShadowValue,
                  borderColor: borderColorValue,
                }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block mt-2 px-7 py-2 border text-[#D4AF37] rounded-full text-xs tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                View Project
              </motion.a>
            </Link>
          </motion.div>
        </div>

        {/* 🌕 Ambient Gold Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_40%_70%,rgba(212,175,55,0.25)_0%,transparent_70%)]" />
      </section>

      {/* ✨ Elegant Scroll-Reactive “Glass Morph Flow” Transition */}
      <motion.div
        style={{
          width: flowWidth,
          opacity: flowOpacity,
          filter: flowBlur,
          boxShadow: flowBoxShadow,
        }}
        className="mx-auto mt-[-2px] h-[6px] rounded-full bg-gradient-to-r from-[#D4AF37]/80 via-[#F4E3A1]/60 to-transparent"
      />
    </>
  )
}