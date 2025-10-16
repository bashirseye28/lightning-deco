"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Modern Minimalist Kitchen",
    category: "Kitchen Design",
    images: [
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318910/IMG_0130_ko5kss.jpg",
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0673_jtlxxn.jpg",
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318912/IMG_0969_uhcmh2.png",
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png",
    ],
  },
  {
    title: "Luxury Living Room",
    category: "Living Space",
    images: [
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318633/9795CABC-ADE1-4CD1-A5C9-0A984C67C91A_azplba.png",
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318624/IMG_0920_pdalfs.png",
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318603/IMG_1006_y8yv99.jpg",
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318564/IMG_0025_tyavad.jpg",
    ],
  },
  {
    title: "Elegant Outdoor Retreat",
    category: "Exterior / Garden",
    images: [
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279433/IMG_0028_tgxoc2.jpg",
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279442/IMG_0643_dzasll.jpg",
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279438/IMG_0162_1_udf7jm.jpg",
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279448/IMG_0811_vjfomy.jpg",
    ],
  },
]

export default function FeaturedProjects() {
  return (
    <section className="bg-black text-white py-28 px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading italic font-bold text-gold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
            A glimpse into our signature interiors, where light and shadow shape timeless elegance.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-block px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition-colors duration-300 font-body font-medium"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [current, setCurrent] = useState(0)

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [project.images.length])

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length)
  const nextSlide = () => setCurrent((prev) => (prev + 1) % project.images.length)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border border-gold/20 shadow-lg hover:shadow-gold/20 transition-all"
    >
      {/* Image */}
      <Image
        src={project.images[current]}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-80 object-cover transition duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition">
        <h3 className="text-2xl font-heading italic font-bold text-gold mb-1">
          {project.title}
        </h3>
        <p className="text-gray-200 text-sm font-body">{project.category}</p>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-gold text-white hover:text-black p-2 rounded-full transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-gold text-white hover:text-black p-2 rounded-full transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2">
        {project.images.map((_: string, i: number) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === current ? "bg-gold" : "bg-white/40"
            }`}
          ></span>
        ))}
      </div>
    </motion.div>
  )
}