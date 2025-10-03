import dynamic from "next/dynamic"
import Header from "@/components/common/Header"
import StickyIcons from "@/components/common/StickyIcons"

const HeroSection = dynamic(() => import("@/components/homepage/HeroSection"), { ssr: true })
const GradientSection = dynamic(() => import("@/components/homepage/GradientSection"), { ssr: true })
const MarqueeSection = dynamic(() => import("@/components/homepage/MarqueeSection"), { ssr: true })
const SolutionsSection = dynamic(() => import("@/components/homepage/SolutionsSection"), { ssr: true })
const IndustriesSection = dynamic(() => import("@/components/homepage/IndustriesSection"), { ssr: true })
const AboutSection = dynamic(() => import("@/components/homepage/AboutSection"), { ssr: true })
const PartnersSection = dynamic(() => import("@/components/homepage/PartnersSection"), { ssr: true })
const TestimonialsSection = dynamic(() => import("@/components/homepage/TestimonialsSection"), { ssr: true })
const CraftedSolutionsSection = dynamic(() => import("@/components/homepage/CraftedSolutionsSection"), { ssr: true })
const CTASection = dynamic(() => import("@/components/homepage/CTASection"), { ssr: true })
const AIServicesSection = dynamic(() => import("@/components/homepage/AIServicesSection"), { ssr: true })
const StatisticsSection = dynamic(() => import("@/components/homepage/StatisticsSection"), { ssr: true })
const OverlappingScrollSection = dynamic(() => import("@/components/homepage/OverlappingScrollSection"), { ssr: true })
const TechnologyStackSection = dynamic(() => import("@/components/homepage/TechnologyStackSection"), { ssr: true })
const BusinessScaleSection = dynamic(() => import("@/components/homepage/BusinessScaleSection"), { ssr: true })
const CaseStudiesSection = dynamic(() => import("@/components/homepage/CaseStudiesSection"), { ssr: true })

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
