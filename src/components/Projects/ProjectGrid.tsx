"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import clsx from "clsx"

const projects = [
  {
    title: "The Serenity Living Room",
    subtitle: "Residential Interior – London",
    image: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318624/IMG_0920_pdalfs.png",
    category: "Living Room",
  },
  {
    title: "Golden Harmony Lounge",
    subtitle: "Private Residence – York",
    image: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318564/IMG_0025_tyavad.jpg",
    category: "Living Room",
  },
  {
    title: "Whispering Shadows Bedroom",
    subtitle: "Master Suite – Leeds",
    image: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279442/IMG_0643_dzasll.jpg",
    category: "Bedroom",
  },
]

export default function ProjectsGrid() {
  return (
    <section className="relative bg-[#0D0D0D] py-32 px-6 lg:px-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#D4AF37] tracking-[0.25em] text-sm uppercase mb-3"
        >
          Timeless Works
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair italic text-[#F9F7F1]"
        >
          Spaces that Speak in Light
        </motion.h3>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto perspective-[1000px]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              rotateX: 2,
              rotateY: -2,
              boxShadow: "0 20px 40px rgba(212, 175, 55, 0.1)",
            }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer h-[480px] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
          >
            {/* Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Ambient glow ring */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-700" />

            {/* Text Content */}
            <div className="absolute bottom-8 left-8 right-8 text-[#F9F7F1]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-playfair italic text-2xl mb-2 group-hover:text-[#D4AF37] transition-colors duration-500">
                  {project.title}
                </h4>
                <p className="text-sm text-[#F9F7F1]/80 mb-2">{project.subtitle}</p>
                <div className="h-[2px] w-0 group-hover:w-24 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-700" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}