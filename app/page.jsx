import { HeroSection } from "@/components/hero-section"
import { ClientsSection } from "@/components/clients-section"
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import { ServicesSection } from "@/components/services-section"
import ProjectsSection from "../components/ProjectsSection";
import MasonryTestimonials from "../components/MasonryTestimonials";  


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProjectsSection />
      <MasonryTestimonials />
    </main>
  )
}
