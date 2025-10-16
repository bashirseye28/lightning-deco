import Hero from "@/components/About/Hero"
import AboutIntro from "@/components/About/AboutIntro"
import MissionVisionValues from "@/components/About/MissionVisionValues"
// import OurStory from "@/components/About/OurStory"
// import PhilosophyBlock from "@/components/About/PhilosophyBlock"
// import MissionVisionValues from "@/components/About/MissionVisionValues"
import ServicesTeaser from "@/components/About/ServicesTeaser"
import Process from "@/components/About/Process"
// import Team from "@/components/About/Team"
import PhilosophyBlock from "@/components/About/PhilosophyBlock"
import Testimonials from "@/components/About/Testimonials"
import CTA from "@/components/About/CTA"

export default function AboutPage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <MissionVisionValues />
      <ServicesTeaser />
      <Process />
      {/* <Team /> */}
      <PhilosophyBlock />
      <Testimonials />
      <CTA />
    </>
  )
}