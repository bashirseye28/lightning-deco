"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Zap } from "lucide-react"

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Parallax values
  const yDesktopBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const yMobileBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const yMobileText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0.7])

  const bgUrl =
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318588/IMG_0068_rhcqkz.jpg"

  return (
    <section
      ref={ref}
      className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Desktop Background with Parallax + subtle zoom */}
      <motion.img
        src={bgUrl}
        alt="Philosophy background"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        style={{ y: yDesktopBg }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Mobile Background */}
      <motion.img
        src={bgUrl}
        alt="Philosophy background mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
        style={{ y: yMobileBg }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6"
        style={{ y: yMobileText, opacity: opacityText }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading italic font-bold text-gold tracking-wide mb-8"
        >
          Our Philosophy
        </motion.h2>

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
      </motion.div>
    </section>
  )
}