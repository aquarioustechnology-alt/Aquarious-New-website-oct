"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const sectionsData = [
  {
    id: 1,
    number: "1",
    title: "Intuitive UX Solutions",
    description:
      "We create intuitive, frictionless user journeys that align with user behavior and business goals. Our UX approach increases engagement, reduces churn, and boosts long-term satisfaction.",
    stats: [
      {
        value: "+47%",
        label: "User Task Completion Rate",
        description: "Smart information flow and reduced cognitive load lead to seamless usability across devices.",
      },
      {
        value: "-38%",
        label: "Drop-Off Rate in Key Flows",
        description: "Optimized paths reduce confusion and keep users focused on meaningful actions.",
      },
    ],
    image: "/images/intuitive-ux-solutions.jpg",
    bgColor: "bg-white",
  },
  {
    id: 2,
    number: "2",
    title: "Holistic UI Designs",
    description:
      "Our UI design blends aesthetics with functionality – creating consistent, accessible, and brand-aligned interfaces. We design for usability, delight, and long-term visual consistency across platforms.",
    stats: [
      {
        value: "+52%",
        label: "Improvement in User Retention",
        description: "Visually engaging familiar UI patterns help users stay, return, and interact longer.",
      },
      {
        value: "3x",
        label: "Faster Onboarding Time",
        description: "Clean layouts, clear hierarchy, and responsive design reduce friction for first-time users.",
      },
    ],
    image: "/images/holistic-ui-designs.jpg",
    bgColor: "bg-white",
  },
  {
    id: 3,
    number: "3",
    title: "Digital Marketing & Growth",
    description:
      "We blend storytelling, performance strategy, and analytics to drive measurable brand and business growth. From awareness to acquisition, we turn visibility into velocity.",
    stats: [
      {
        value: "3.4x",
        label: "Return on Ad Spend (ROAS)",
        description: "Optimized creative + targeted campaigns that drive consistent revenue and higher ROI.",
      },
      {
        value: "+220%",
        label: "Growth in Organic Traffic",
        description: "SEO content, and social growth strategies that drive consistent revenue and conversions.",
      },
    ],
    image: "/images/digital-marketing.jpg",
    bgColor: "bg-white",
  },
  {
    id: 4,
    number: "4",
    title: "Creative Product Design",
    description:
      "We design digital products that are functional, intuitive, and built to solve real business problems. From SaaS platforms to enterprise tools, our design process drives both usability and market differentiation.",
    stats: [
      {
        value: "+68%",
        label: "Improvement in User Retention",
        description: "Visually engaging familiar UI patterns help users stay, return, and interact longer.",
      },
      {
        value: "2.8x",
        label: "Faster Feature Adoption",
        description: "Our modular design systems reduce learning curves and enhance user experience.",
      },
    ],
    image: "/images/creative-product-design.jpg",
    bgColor: "bg-white",
  },
]

export default function OverlappingScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      const scrollStart = containerTop - windowHeight * 0.3
      const scrollEnd = containerTop + containerHeight - windowHeight * 0.7
      const scrollProgress = Math.max(0, Math.min(1, (scrollY - scrollStart) / (scrollEnd - scrollStart)))

      const totalSections = sectionsData.length
      const sectionProgress = scrollProgress * (totalSections - 1)
      const sectionIndex = Math.min(totalSections - 1, Math.floor(sectionProgress + 0.1))

      setActiveSection(sectionIndex)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[350vh] bg-white">
      {/* Header */}
      <div className="relative z-20 bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:items-start">
            <h2 className="font-normal text-black leading-tight text-center lg:text-left">
              Every product we build is user-centric, designed to drive satisfaction, engagement, and long-term value.
            </h2>
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 flex-shrink-0">
              Explore our portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Overlapping Sections */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {sectionsData.map((section, index) => {
          const isActive = index === activeSection
          const isPassed = index < activeSection
          const translateY = isPassed ? -100 : isActive ? 0 : (index - activeSection) * 75

          const zIndex = isActive ? 50 : isPassed ? 10 : 30 - index

          return (
            <div
              key={section.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${section.bgColor}`}
              style={{
                transform: `translateY(${translateY}%)`,
                zIndex: zIndex,
                opacity: isActive ? 1 : isPassed ? 0.1 : 0.4,
              }}
            >
              <div className="h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-[#F3F7FD] rounded-2xl p-8 lg:p-12">
                    {/* Left Content */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-semibold">
                          {section.number}
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-medium text-black">{section.title}</h3>
                      </div>

                      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">{section.description}</p>

                      {/* Statistics */}
                      <div className="grid md:grid-cols-2 gap-8">
                        {section.stats.map((stat, statIndex) => (
                          <div key={statIndex} className={`rounded-2xl p-6 ${statIndex === 0 ? "bg-[#D9F2FB]" : ""}`}>
                            <div className="text-4xl lg:text-5xl font-normal text-black mb-2">{stat.value}</div>
                            <div className="text-lg font-semibold text-black mb-2">{stat.label}</div>
                            <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={section.image || "/placeholder.svg"}
                          alt={section.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
