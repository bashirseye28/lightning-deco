"use client"

import { motion } from "framer-motion"
import { Lightbulb, Ruler, Building2 } from "lucide-react"

export default function ProcessPhilosophy() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Concept",
      text: "Every project begins with emotion — we translate light, proportion, and purpose into spatial poetry.",
    },
    {
      icon: Ruler,
      title: "Craft",
      text: "We shape each line and texture with intention, blending precision, materials, and atmosphere.",
    },
    {
      icon: Building2,
      title: "Completion",
      text: "Every detail culminates into a harmonious whole — where space, function, and beauty coexist.",
    },
  ]

  return (
    <section className="relative bg-[#0D0D0D] text-white py-28 overflow-hidden">
      {/* ✨ Ambient Glow Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />

      {/* ✨ Section Title */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#D4AF37] tracking-[0.25em] uppercase text-sm mb-3"
        >
          Our Process
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair italic text-[#F9F7F1]"
        >
          From Concept to Atmosphere
        </motion.h3>
      </div>

      {/* 💎 Process Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-12">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-b from-[#111]/70 to-[#0D0D0D] border border-[#D4AF37]/15 backdrop-blur-lg rounded-2xl px-8 py-12 shadow-[0_0_50px_-20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_70px_-10px_rgba(212,175,55,0.3)] transition-all duration-500"
          >
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
                className="p-4 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-all duration-300"
              >
                <step.icon size={36} className="text-[#D4AF37]" />
              </motion.div>
            </div>

            {/* Title */}
            <h4 className="text-2xl font-playfair italic text-[#F9F7F1] text-center mb-4">
              {step.title}
            </h4>

            {/* Text */}
            <p className="text-[#F9F7F1]/75 text-center font-lato leading-relaxed">
              {step.text}
            </p>

            {/* Gold Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="mx-auto mt-8 h-[2px] w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            />
          </motion.div>
        ))}
      </div>

      {/* ✨ Bottom Gold Gradient Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.5 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto mt-24 h-[5px] w-[70%] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent rounded-full"
      />
    </section>
  )
}