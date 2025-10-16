"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318624/IMG_0920_pdalfs.png"
        alt="Lightning Deco Contact Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-widest text-sm text-gold mb-4"
        >
          Contact
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-playfair italic font-bold text-white mb-6 leading-tight"
        >
          Let’s Bring Your Vision
          <span className="text-gold"> to Light</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto"
        >
          Reach out to our design studio to discuss your next project. Every
          detail begins with a conversation — and a spark of inspiration.
        </motion.p>
      </div>
    </section>
  );
}
