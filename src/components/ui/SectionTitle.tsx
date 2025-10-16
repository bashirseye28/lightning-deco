// src/components/ui/SectionTitle.tsx
"use client"

import { motion } from "framer-motion"

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-playfair italic font-bold text-gold mb-4"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full animate-pulse"
      />
    </div>
  )
}