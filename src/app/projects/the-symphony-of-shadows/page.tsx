
"use client"

import { motion, type Transition } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const fadeTransition: Transition = { duration: 0.8, ease: "easeOut" }

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: fadeTransition,
  viewport: { once: true },
}

export default function SymphonyOfShadowsPage() {
  return (
    <main className="bg-[#0B0B0B] text-[#F9F7F1] overflow-hidden">
      {/* 🧭 Back to Projects */}
      <Link
        href="/projects"
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2
                   border border-[#D4AF37]/40 rounded-full backdrop-blur-md
                   bg-black/40 text-[#D4AF37] text-xs uppercase tracking-[0.2em]
                   hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]
                   transition-all duration-500"
        aria-label="Back to Projects"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" className="w-4 h-4 -mr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Back to Projects
      </Link>

      {/* 1️⃣ HERO SECTION */}
      <section className="relative h-[95vh] w-full overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318564/IMG_0025_tyavad.jpg"
          alt="The Symphony of Shadows – Leeds Penthouse"
          fill
          priority
          className="object-cover object-center brightness-[0.9]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-playfair italic text-5xl md:text-7xl font-semibold mb-4"
          >
            The Symphony of Shadows
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[#D4AF37] tracking-[0.25em] uppercase text-xs md:text-sm"
          >
            Leeds Penthouse
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="origin-center h-[3px] w-24 mt-6 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full"
          />
        </div>
      </section>

      {/* 2️⃣ PROJECT NARRATIVE */}
      <section className="relative py-32 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <Image
              src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318564/IMG_0025_tyavad.jpg"
              alt="Concept Lighting"
              width={700}
              height={500}
              className="rounded-2xl object-cover shadow-lg shadow-black/30"
            />
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="font-playfair italic text-4xl mb-6 text-[#D4AF37]">
              Where Light Composes Space
            </h2>
            <p className="text-[#F9F7F1]/85 font-lato text-lg leading-relaxed">
              Every surface, every line, every reflection within this penthouse
              was orchestrated to evoke rhythm and calm.
              <br /><br />
              The architecture breathes through silence — where shadow becomes
              language, and gold whispers light. Lightning Deco approached this
              residence as a symphony of material and illumination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ IMAGE GALLERY */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318564/IMG_0025_tyavad.jpg",
            "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318564/IMG_0025_tyavad.jpg",
            "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318564/IMG_0025_tyavad.jpg",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl group"
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4️⃣ PROCESS & PHILOSOPHY STRIP */}
      <section className="py-28 bg-[#0B0B0B] border-t border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center px-6">
          {[
            { title: "Concept", text: "We begin with emotion — translating atmosphere into structure and proportion." },
            { title: "Craft", text: "Every material, every reflection, is selected to resonate with light and soul." },
            { title: "Completion", text: "The final form emerges where precision and poetry converge in quiet harmony." },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp}>
              <h3 className="text-[#D4AF37] font-playfair italic text-2xl mb-4">{item.title}</h3>
              <p className="text-[#F9F7F1]/70 font-lato text-[15px] leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5️⃣ CLIENT QUOTE SECTION */}
      <section className="relative py-36 bg-[#0B0B0B] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_80%)]" />
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6 relative z-10"
        >
          <p className="font-playfair italic text-2xl md:text-3xl leading-relaxed text-[#F9F7F1]/90">
            “Lightning Deco transformed our penthouse into a sanctuary of shadow and reflection.”
          </p>
          <footer className="mt-6 text-[#D4AF37]/90 uppercase tracking-[0.2em] text-xs">
            — Private Client, Leeds
          </footer>
        </motion.blockquote>
      </section>

      {/* 6️⃣ FADE TRANSITION TO FOOTER */}
      {/* <section className="relative h-[40vh] bg-gradient-to-t from-[#0B0B0B] via-[#D4AF37]/10 to-transparent flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[#F9F7F1]/80 font-playfair italic text-lg"
        >
          Light fades… yet design endures.
        </motion.div>
      </section> */}
    </main>
  )
}