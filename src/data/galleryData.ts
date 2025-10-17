// ⚡ Lightning Deco — Dynamic Gallery Data
// Automatically handles video posters, category grouping, and duplicate prevention.

export type MediaItem = {
  id: number;
  src: string;
  title: string;
  category: string;
  type: "image" | "video";
  poster?: string;
};

// 🧠 Determine if the file is a video or an image
const getType = (url: string): "video" | "image" => {
  const ext = url.split(".").pop()?.toLowerCase();
  return ext && ["mp4", "mov", "webm"].includes(ext) ? "video" : "image";
};

// 🪄 Automatically generate Cloudinary poster for videos
const getVideoPoster = (url: string, fallback?: string): string => {
  try {
    if (url.includes("/upload/")) {
      // Extract frame at 1s, convert to jpg
      return url
        .replace("/upload/", "/upload/so_1,du_1,pg_1,f_jpg/")
        .replace(/\.(mp4|mov|webm)$/i, ".jpg");
    }
  } catch (err) {
    console.error("⚠️ Poster generation failed:", err);
  }

  return (
    fallback ||
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png"
  );
};

// ✨ Elegant fallback (Lightning Deco logo)
const fallbackPoster =
  "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png";

// 🔹 Your actual gallery sources (Full Dataset)
const mediaSources: Record<string, string[]> = {
  Bathroom: [
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1760664618/alsobathroom_lsckef.mp4",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1760664617/bathroom_video_rnxuwq.mp4",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1760664616/bathroom_1_fh2yky.mp4",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1760664617/bathroom-also_ao7nes.mp4",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760664617/bathroom_pic_yhfeoi.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760552451/bathroom_llncm8.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279457/IMG_0822_tjznmd.jpg",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759279456/58bc0b6f-1552-4475-b55c-8bc5e615fcaf_lylhrd.mp4",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759279455/efdab444-7c74-4f69-8977-dd2ed91be849_fvgw4w.mp4",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279454/IMG_0944_vz17p5.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279453/9040BDFC-DEED-430A-A645-FDCBB17B1E8B_qqi7ch.png",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759279452/6c6c1ef6-2962-409e-a74e-184c76e31f86_vgjv1k.mp4",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279451/IMG_0900_d3ltxu.png",
  ],

  "Living Room": [
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1760665023/e5624e5d-84af-4d39-b8c2-11108ea5aba4_wl4slx.mp4",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665021/IMG_0906_vyf1q7.png",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665021/IMG_1010_y7dcs1.jpg",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1760665019/ad429bf1-3870-49d3-b885-aa186075ce77_dmlrnq.mp4",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665019/IMG_0880_elpwgk.png",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1760665018/f4ca0a3b-3f88-46a5-89fb-80de08b91736_myocal.mp4",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665017/IMG_0920_mmmri2.png",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665017/IMG_1007_nquorx.jpg",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1760665017/5406481a-e75d-4138-b043-19a56e52674e_jlt8va.mp4",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1760665016/694cd4e6-f9bd-4d15-bd78-392d10d5496d_pq9fty.mp4",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665016/IMG_0151_y4qqso.jpg",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1760665016/955a722d-af4f-41bd-9f84-182abdcbab16_g9r5a8.mp4",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665015/9795CABC-ADE1-4CD1-A5C9-0A984C67C91A_tia78u.png",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665015/IMG_1006_y3j1pf.jpg",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1760665014/DraftResource_1749363616.319109_xwmedy.mov",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665013/IMG_0026_nvhx5v.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665013/IMG_0022_tn8w2c.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665012/IMG_0069_om9z6u.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665012/IMG_0744_mbn9z7.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665012/IMG_0025_byicsf.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665011/IMG_0156_obpjx4.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665011/IMG_0079_sarisz.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665011/IMG_0068_trmlxf.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665010/IMG_0071_hwgme5.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665010/IMG_0070_yunhc2.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665009/IMG_0102_w08hn1.jpg",
  ],

  Bedroom: [
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279448/IMG_0811_vjfomy.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279447/IMG_0810_oxf74x.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279446/IMG_0812_cd0w3u.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279445/IMG_0813_jrworm.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279444/IMG_0669_efpu6p.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279444/IMG_0938_arlxh4.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279442/IMG_0662_ex7ps3.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279442/IMG_0937_u4qwgm.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279442/IMG_0643_dzasll.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279438/IMG_0162_1_udf7jm.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279437/IMG_0130_jkdcbd.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279435/IMG_0067_es6bl2.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279434/IMG_0162_jnuri5.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279433/IMG_0028_tgxoc2.jpg",
  ],

  Kitchen: [
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665479/IMG_0970_fl0sg2.png",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665477/file_000000002c9c61f4bc8bf87d59db7e58_nkddt2.png",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665477/file_00000000380c61f4ab2ad59ba1f57524_ktzu2g.png",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665476/IMG_0969_ddeh6s.png",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665474/file_000000001f0c6243b115b456aeedd112_yyc063.png",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665473/IMG_0973_qgwpb3.png",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665471/IMG_0983_e1zi9i.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665471/IMG_0130_v1lvj8.jpg",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760665470/IMG_0673_t9bkeq.jpg",
  ],

  "Coffee Shop": [
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759374887/1000066533_hdbd76.mp4",
    "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759374887/1000066537_ysddkj.png",
    "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759279505/export_1749305387713_gcr4ma.mov",
  ],
};

// 🧩 Build the gallery dynamically
export const galleryData: MediaItem[] = Object.entries(mediaSources)
  .flatMap(([category, urls]) =>
    urls.map((url, i) => {
      const type = getType(url);
      return {
        id: Number(`${Object.keys(mediaSources).indexOf(category)}${i}`),
        src: url,
        title: `${category} ${type === "video" ? "Video" : "Image"} ${i + 1}`,
        category,
        type,
        ...(type === "video" ? { poster: getVideoPoster(url, fallbackPoster) } : {}),
      } as MediaItem;
    })
  )
  // ✅ Remove duplicates
  .filter(
    (item, index, self) => index === self.findIndex((t) => t.src === item.src)
  );

// 🏷️ Export unique categories
export const categories = ["All", ...Object.keys(mediaSources)];