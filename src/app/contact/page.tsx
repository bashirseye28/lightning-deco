import type { Metadata } from "next"
import Hero from "@/components/Contact/Hero"
import ContactInfoGrid from "@/components/Contact/ContactInfoGrid"
import ConsultationForm from "@/components/Contact/ConsultationForm"
// import ContactSection from "@/components/Contact/ContactSection"
import ContactCTA from "@/components/Contact/ContactCTA"

export const metadata: Metadata = {
  title: "Contact | Lightning Deco",
  description:
    "Get in touch with Lightning Deco — a luxury interior design studio crafting timeless spaces in light and form. Book a consultation or request a bespoke project today.",
  openGraph: {
    title: "Contact Lightning Deco",
    description:
      "Reach out to Lightning Deco — luxury interior design studio based in Manchester. Let’s design your timeless space together.",
    url: "https://lightningdeco.com/contact",
    siteName: "Lightning Deco",
    images: [
      {
        url: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png",
        width: 800,
        height: 800,
        alt: "Lightning Deco Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Lightning Deco",
    description:
      "Get in touch with Lightning Deco — a bespoke luxury interior design studio redefining modern elegance.",
    images: [
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png",
    ],
  },
}

export default function ContactPage() {
  return (
    <main className="bg-[#F9F7F1] text-[#1E3A5F] overflow-hidden">
      {/* 🟡 1️⃣ Hero Section */}
      <Hero />

      {/* 🟡 2️⃣ Studio Coordinates Section */}
      <ContactInfoGrid />

      {/* 🟡 3️⃣ Consultation Request Form */}
      <ConsultationForm />

      {/* 🟡 4️⃣ Contact CTA Section */
      <ContactCTA />}
      
    </main>
  )
}