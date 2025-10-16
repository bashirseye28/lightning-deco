"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Clock, Instagram, PlayCircle } from "lucide-react"
import Link from "next/link"

export default function ContactInfoGrid() {
  const infoCards = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "Speak directly with our design team.",
      content: (
        <Link
          href="tel:07578742523"
          className="text-lg font-medium text-[#1E3A5F] hover:text-[#D4AF37] transition-colors"
        >
          0757&nbsp;874&nbsp;2523
        </Link>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      detail: "Send us your project brief or inquiry.",
      content: (
        <Link
          href="mailto:lightning.inquiriess@gmail.com"
          className="text-lg font-medium text-[#1E3A5F] hover:text-[#D4AF37] transition-colors"
        >
          lightning.inquiriess@gmail.com
        </Link>
      ),
    },
    {
      icon: Clock,
      title: "Opening Hours",
      detail: "We’re available throughout the week.",
      content: (
        <div className="leading-relaxed text-[#1E3A5F]">
          <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
          <p>Sun: 10:00 AM – 5:00 PM</p>
        </div>
      ),
    },
    {
      icon: Instagram,
      title: "Follow Our Work",
      detail: "Discover our latest projects and stories.",
      content: (
        <div className="flex items-center justify-center space-x-6">
          <Link
            href="https://www.instagram.com/lightning.deco"
            target="_blank"
            aria-label="Instagram"
            className="text-[#1E3A5F] hover:text-[#D4AF37] transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.tiktok.com/@lightning.deco"
            target="_blank"
            aria-label="TikTok"
            className="text-[#1E3A5F] hover:text-[#D4AF37] transition-colors"
          >
            <PlayCircle className="w-6 h-6" />
          </Link>
        </div>
      ),
    },
  ]

  return (
    <section className="relative bg-[#F9F7F1] text-[#1E3A5F] py-28 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair italic font-semibold text-[#D4AF37] mb-6"
        >
          Studio Coordinates
        </motion.h2>

        {/* Gold Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-[2px] w-24 mx-auto mb-20 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full"
        />

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {infoCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl border border-[#E5CDA5]/30 p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <card.icon className="w-10 h-10 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                  <div className="w-10 h-[2px] bg-[#D4AF37] mt-3 mx-auto opacity-70" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-1 text-[#1E3A5F]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#5A6270] mb-4 font-lato">{card.detail}</p>
                <div className="text-base font-lato">{card.content}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}