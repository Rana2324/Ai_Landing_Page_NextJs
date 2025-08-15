import { Navigation } from "@/components/sections/navigation"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { Pricing } from "@/components/sections/pricing"
import { CTA } from "@/components/sections/cta"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <ScrollIndicator />
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
