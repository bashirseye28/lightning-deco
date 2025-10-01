"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowUp, Instagram, Linkedin } from "lucide-react"
import { SiTiktok } from "react-icons/si"

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black text-white pt-16 pb-10 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Logo & Tagline */}
        <div>
          <Image
            src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png"
            alt="Lightning Deco Logo"
            width={160}
            height={50}
            className="mb-6"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-body">
            <span className="text-gold font-semibold">Lightning Deco</span> – The Art of Shadow and Light.  
            We craft interiors where light and shadow define timeless elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gold font-heading text-lg mb-5 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 font-body">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-gold font-heading text-lg mb-5 tracking-wide">
            Connect with Us
          </h3>
          <div className="flex space-x-6 text-gray-400">
            <Link
              href="https://www.instagram.com/lightning.deco"
              target="_blank"
              className="hover:text-gold transition-colors duration-300"
            >
              <Instagram size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/lightningdeco"
              target="_blank"
              className="hover:text-gold transition-colors duration-300"
            >
              <Linkedin size={22} />
            </Link>
            <Link
              href="https://www.tiktok.com/@lightningdeco"
              target="_blank"
              className="hover:text-gold transition-colors duration-300"
            >
              <SiTiktok size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm font-body">
        © {new Date().getFullYear()} Lightning Deco. All rights reserved.
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gold text-black shadow-lg hover:bg-white hover:text-black transition-colors duration-300"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  )
}