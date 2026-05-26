import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoursesSection } from "@/components/courses-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { InspirationsSection } from "@/components/inspirations-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { InteractiveGridBackground } from "@/components/interactive-grid-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <InteractiveGridBackground />
      <div className="relative z-10 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_textarea]:pointer-events-auto [&_select]:pointer-events-auto">
        <Header />
        <HeroSection />
        <CoursesSection />
        <PortfolioSection />
        <InspirationsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
