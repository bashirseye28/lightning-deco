// types/gallery.ts
export type GalleryItem = {
  id: number
  src: string
  title: string
  category: string
  type: "image" | "video"
}