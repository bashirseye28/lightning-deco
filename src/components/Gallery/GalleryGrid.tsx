"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react"

type GalleryItem = {
  src: string
  title: string
  category: string
  type: "image" | "video"
  poster?: string
}

type GalleryGridProps = {
  items: GalleryItem[]
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [itemsPerPage, setItemsPerPage] = useState(15)
  const [visibleCount, setVisibleCount] = useState(15)

  // 📱 Responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      const perPage = window.innerWidth < 768 ? 9 : 15
      setItemsPerPage(perPage)
      setVisibleCount(perPage)
    }
    updateItemsPerPage()
    window.addEventListener("resize", updateItemsPerPage)
    return () => window.removeEventListener("resize", updateItemsPerPage)
  }, [])

  const currentItems = items.slice(0, visibleCount)
  const hasMore = visibleCount < items.length

  // ✅ Lightbox navigation wrapped in useCallback
  const prevLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + items.length) % items.length)
    }
  }, [lightboxIndex, items.length])

  const nextLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % items.length)
    }
  }, [lightboxIndex, items.length])

  // ✅ Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") setLightboxIndex(null)
      if (e.key === "ArrowLeft") prevLightbox()
      if (e.key === "ArrowRight") nextLightbox()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxIndex, prevLightbox, nextLightbox])

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20">
      {/* ✅ Uniform Card Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {currentItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:shadow-gold/20 transition-all cursor-pointer"
            onClick={() => setLightboxIndex(i)}
          >
            <div className="relative w-full h-64 sm:h-72 lg:h-80">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    poster={item.poster || "/default-thumb.jpg"} // ✅ preview
                    preload="metadata"
                    className="w-full h-full object-cover rounded-2xl"
                    muted
                    playsInline
                  />
                  {/* ✅ Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 rounded-full p-4 transition group-hover:scale-110">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-5 w-full text-white">
                <p className="uppercase text-xs tracking-widest text-gold">{item.category}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ Load More */}
      {hasMore && (
        <div className="flex justify-center mt-12 mb-16">
          <button
            onClick={() => setVisibleCount((prev) => prev + itemsPerPage)}
            className="px-8 py-3 rounded-full border border-gold text-gold hover:bg-gold hover:text-black transition-all shadow-sm"
          >
            Load More
          </button>
        </div>
      )}

      {/* ✅ Lightbox with swipe */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-6"
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-gold transition"
            >
              <X className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>

            {/* Arrows */}
            <button
              onClick={prevLightbox}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
            <button
              onClick={nextLightbox}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Content with swipe gestures */}
            <motion.div
              key={lightboxIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(
                e: MouseEvent | TouchEvent | PointerEvent,
                { offset, velocity }: PanInfo
              ) => {
                if (offset.x > 100 || velocity.x > 500) prevLightbox()
                else if (offset.x < -100 || velocity.x < -500) nextLightbox()
              }}
              className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
            >
              {items[lightboxIndex].type === "image" ? (
                <Image
                  src={items[lightboxIndex].src}
                  alt={items[lightboxIndex].title}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[85vh] w-auto rounded-lg"
                />
              ) : (
                <video
                  src={items[lightboxIndex].src}
                  poster={items[lightboxIndex].poster || "/default-thumb.jpg"}
                  controls
                  autoPlay
                  className="w-full max-h-[85vh] rounded-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}