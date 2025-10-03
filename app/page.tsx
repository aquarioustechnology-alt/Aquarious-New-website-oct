import Header from "@/components/common/Header"
import StickyIcons from "@/components/common/StickyIcons"
import HeroSection from "@/components/homepage/HeroSection"
import GradientSection from "@/components/homepage/GradientSection"
import MarqueeSection from "@/components/homepage/MarqueeSection"
import SolutionsSection from "@/components/homepage/SolutionsSection"
import IndustriesSection from "@/components/homepage/IndustriesSection"
import AboutSection from "@/components/homepage/AboutSection"
import PartnersSection from "@/components/homepage/PartnersSection"
import TestimonialsSection from "@/components/homepage/TestimonialsSection"
import CraftedSolutionsSection from "@/components/homepage/CraftedSolutionsSection"
import CTASection from "@/components/homepage/CTASection"
import AIServicesSection from "@/components/homepage/AIServicesSection"
import StatisticsSection from "@/components/homepage/StatisticsSection"
import OverlappingScrollSection from "@/components/homepage/OverlappingScrollSection"
import TechnologyStackSection from "@/components/homepage/TechnologyStackSection"
import BusinessScaleSection from "@/components/homepage/BusinessScaleSection"
import CaseStudiesSection from "@/components/homepage/CaseStudiesSection"

export const metadata = {
  title: "Aquarious Technology - AI-Powered Global Software Solutions Partner",
  description:
    "We build intelligent systems that automate, optimize, and scale - trusted by global businesses for secure, AI-driven growth.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <StickyIcons />
      <HeroSection />
      <GradientSection />
      <MarqueeSection />
      <SolutionsSection />
      <IndustriesSection />
      <AboutSection />
      <PartnersSection />
      <TestimonialsSection />
      <CraftedSolutionsSection />
      <CTASection />
      <AIServicesSection />
      <StatisticsSection />
      <OverlappingScrollSection />
      <TechnologyStackSection />
      <BusinessScaleSection />
      <CaseStudiesSection />
    </main>
  )
}
