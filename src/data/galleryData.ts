// src/data/galleryData.ts

export type MediaItem = {
  id: number
  src: string
  title: string
  category: string
  type: "image" | "video"
  poster?: string   // ✅ add poster support
}

export const categories = [
  "All",
  "Bathroom",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Coffee Shop",
]

export const mediaItems: MediaItem[] = [
  // 🛁 Bathroom
  {
    id: 1,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279457/IMG_0822_tjznmd.jpg",
    title: "Luxury Bathroom",
    category: "Bathroom",
    type: "image",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759279456/58bc0b6f-1552-4475-b55c-8bc5e615fcaf_lylhrd.mp4",
    title: "Bathroom Walkthrough",
    category: "Bathroom",
    type: "video",
    poster: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279457/IMG_0822_tjznmd.jpg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759279455/efdab444-7c74-4f69-8977-dd2ed91be849_fvgw4w.mp4",
    title: "Modern Bathroom Flow",
    category: "Bathroom",
    type: "video",
    poster: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279454/IMG_0944_vz17p5.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279454/IMG_0944_vz17p5.jpg",
    title: "Elegant Marble Bathroom",
    category: "Bathroom",
    type: "image",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279453/9040BDFC-DEED-430A-A645-FDCBB17B1E8B_qqi7ch.png",
    title: "Bathroom Elegance",
    category: "Bathroom",
    type: "image",
  },

  // 🛋 Living Room
  {
    id: 6,
    src: "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759318642/DraftResource_1749363616.319109_aqivif.mov",
    title: "Living Room Walkthrough",
    category: "Living Room",
    type: "video",
    poster: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318624/IMG_0920_pdalfs.png",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759318639/955a722d-af4f-41bd-9f84-182abdcbab16_jdp5kf.mp4",
    title: "Atmospheric Living",
    category: "Living Room",
    type: "video",
    poster: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318633/9795CABC-ADE1-4CD1-A5C9-0A984C67C91A_azplba.png",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318633/9795CABC-ADE1-4CD1-A5C9-0A984C67C91A_azplba.png",
    title: "Warm Textures",
    category: "Living Room",
    type: "image",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318624/IMG_0920_pdalfs.png",
    title: "Ambient Light",
    category: "Living Room",
    type: "image",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318621/IMG_0906_l5fz2l.png",
    title: "Modern Living Room",
    category: "Living Room",
    type: "image",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318603/IMG_1006_y8yv99.jpg",
    title: "Luxury Lounge",
    category: "Living Room",
    type: "image",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318588/IMG_0068_rhcqkz.jpg",
    title: "Living Room Atmosphere",
    category: "Living Room",
    type: "image",
  },

  // 🛏 Bedroom
  {
    id: 13,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279448/IMG_0811_vjfomy.jpg",
    title: "Elegant Bedroom",
    category: "Bedroom",
    type: "image",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279447/IMG_0810_oxf74x.jpg",
    title: "Cozy Bedroom",
    category: "Bedroom",
    type: "image",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279444/IMG_0669_efpu6p.jpg",
    title: "Wooden Accents",
    category: "Bedroom",
    type: "image",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279444/IMG_0938_arlxh4.jpg",
    title: "Luxury Suite",
    category: "Bedroom",
    type: "image",
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279442/IMG_0643_dzasll.jpg",
    title: "Soft Tones",
    category: "Bedroom",
    type: "image",
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279437/IMG_0130_jkdcbd.jpg",
    title: "Minimalist Bedroom",
    category: "Bedroom",
    type: "image",
  },

  // 🍴 Kitchen
  {
    id: 19,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318912/IMG_0969_uhcmh2.png",
    title: "Modern Minimalist Kitchen",
    category: "Kitchen",
    type: "image",
  },
  {
    id: 20,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0983_lpq3bw.jpg",
    title: "Luxury Kitchen",
    category: "Kitchen",
    type: "image",
  },
  {
    id: 21,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318910/IMG_0130_ko5kss.jpg",
    title: "Stone & Brass Kitchen",
    category: "Kitchen",
    type: "image",
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0673_jtlxxn.jpg",
    title: "Elegant Kitchen",
    category: "Kitchen",
    type: "image",
  },

  // ☕ Coffee Shop
  {
    id: 23,
    src: "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759374887/1000066533_hdbd76.mp4",
    title: "Coffee Shop Walkthrough",
    category: "Coffee Shop",
    type: "video",
    poster: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759374887/1000066537_ysddkj.png",
  },
  {
    id: 24,
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759374887/1000066537_ysddkj.png",
    title: "Coffee Shop Interior",
    category: "Coffee Shop",
    type: "image",
  },
]