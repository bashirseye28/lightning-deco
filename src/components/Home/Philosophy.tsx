"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Zap } from "lucide-react"

export default function Philosophy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Mobile parallax (slight vertical shift)
  const yMobile = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section
      ref={ref}
      className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1759317501/IMG_0920_b0leiz.png')",
        }}
      ></div>

      {/* Mobile Background with Parallax */}
      <motion.div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318588/IMG_0068_rhcqkz.jpg')",
          y: yMobile as any, // motion value applied only for mobile
        }}
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading italic font-bold text-gold tracking-wide mb-8"
        >
          Our Philosophy
        </motion.h2>

        {/* Main Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-body"
        >
          We believe light is more than illumination — it is emotion, atmosphere, and art.{" "}
          At <span className="text-gold font-semibold">Lightning Deco</span>, we shape
          spaces where shadow and radiance coexist, where design is not only seen but felt.{" "}
          Every project becomes a sanctuary of elegance, depth, and timeless harmony.
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center space-x-2 text-gray-400 italic font-body"
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