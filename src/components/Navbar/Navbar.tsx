"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUp } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // ✅ Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // ✅ Show "Back to Top" after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) setShowScrollTop(true)
      else setShowScrollTop(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-5 flex items-center justify-between">
          {/* Logo (hidden when menu open) */}
          {!isMenuOpen && (
            <Link href="/" className="flex items-center">
              <Image
                src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png"
                alt="Lightning Deco Logo"
                width={140}
                height={40}
                priority
                className="w-[110px] h-[30px] sm:w-[120px] sm:h-[35px] xl:w-[140px] xl:h-[40px] object-contain"
              />
            </Link>
          )}

          {/* ✅ Desktop menu only for xl+ */}
          <div className="hidden xl:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition"
            >
              Request Consultation
            </Link>
          </div>

          {/* ✅ Mobile/Tablet Menu Button */}
          <button
            className="xl:hidden flex items-center space-x-2 text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ✅ Mobile/Tablet Slide-in Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 bg-black z-[9999] flex flex-col"
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-gold/30">
                <span className="text-lg font-semibold text-gold">Menu</span>
                <button
                  className="flex items-center space-x-1 text-gold hover:text-[#b9962e] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-sm">Close</span>
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col flex-grow divide-y divide-white/20">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/projects", label: "Projects" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/contact", label: "Contact" },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg sm:text-xl font-light text-gold px-6 py-4 hover:text-[#D4AF37] transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 py-6 border-t border-white/20">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition"
                >
                  Request Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ✅ Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="fixed bottom-6 right-6 z-[999] bg-[#D4AF37] text-black p-3 rounded-full shadow-md hover:shadow-lg hover:bg-[#c29a31] transition-all duration-300"
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}