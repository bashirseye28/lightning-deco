"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-gold mb-6">
          🚧 Coming Soon
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 font-body">
          We’re currently working on this page to bring you something beautiful.  
          Stay tuned, it will be available very soon!
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-gold text-black font-medium shadow-md hover:shadow-lg hover:bg-gold/90 transition-all"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  )
}