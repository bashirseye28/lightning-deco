"use client"

import { useState } from "react"
import GalleryHero from "@/components/Gallery/GalleryHero"
import GalleryIntro from "@/components/Gallery/GalleryIntro"
import GalleryFilters from "@/components/Gallery/GalleryFilters"
import GalleryGrid from "@/components/Gallery/GalleryGrid"
import { categories, mediaItems } from "@/data/galleryData"
import CTA from "@/components/Gallery/CTA"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory)

  return (
    <main className="min-h-screen bg-ivory text-black">
      <GalleryHero />
      <GalleryIntro />
      <GalleryFilters
        categories={categories}
        active={activeCategory}
        setActive={setActiveCategory}
      />
      <GalleryGrid items={filteredItems} />
        <CTA />
    </main>
  )
}