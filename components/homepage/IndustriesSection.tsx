"use client"

import { useState } from "react"
import Image from "next/image"

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState("retail")

  const industries = [
    { id: "healthcare", name: "Healthcare" },
    { id: "retail", name: "Retail & E-Commerce" },
    { id: "realestate", name: "Real Estate" },
    { id: "logistics", name: "Logistics" },
    { id: "education", name: "Education" },
    { id: "finance", name: "Finance" },
    { id: "manufacturing", name: "Manufacturing" },
    { id: "government", name: "Govt. & Public Sector" },
  ]

  const industryContent = {
    healthcare: {
      title:
        "Digital health solutions, telemedicine platforms, and patient management systems to improve healthcare delivery and patient outcomes.",
      features: [
        "HIPAA-compliant patient portals and electronic health records (EHR) systems.",
        "AI-powered diagnostic tools and predictive analytics for better patient care.",
        "Telemedicine platforms with secure video consultations and appointment scheduling.",
      ],
      images: ["/images/ecommerce-woman.webp", "/images/ecommerce-laptop.webp"],
    },
    retail: {
      title:
        "Custom storefronts, mobile apps, inventory automation, and AI-led personalization to elevate digital commerce and drive conversions.",
      features: [
        "Custom eCommerce platforms built on Shopify or custom stacks with seamless UX and fast checkout.",
        "AI-powered product recommendations that personalize shopping experiences in real time.",
        "Advanced analytics, SEO, and performance marketing integrations to drive traffic and conversions.",
      ],
      images: ["/images/ecommerce-woman.webp", "/images/ecommerce-laptop.webp"],
    },
    realestate: {
      title:
        "Property management systems, virtual tours, and CRM solutions to streamline real estate operations and enhance client experiences.",
      features: [
        "Property listing platforms with advanced search and filtering capabilities.",
        "Virtual reality tours and 3D property visualization tools.",
        "CRM systems for lead management and automated marketing campaigns.",
      ],
      images: ["/images/ecommerce-woman.webp", "/images/ecommerce-laptop.webp"],
    },
    logistics: {
      title:
        "Supply chain optimization, fleet management, and tracking systems to improve operational efficiency and delivery performance.",
      features: [
        "Real-time tracking and route optimization for delivery management.",
        "Warehouse management systems with inventory automation.",
        "Supply chain analytics and predictive maintenance solutions.",
      ],
      images: ["/images/ecommerce-woman.webp", "/images/ecommerce-laptop.webp"],
    },
    education: {
      title:
        "Learning management systems, virtual classrooms, and educational apps to enhance learning experiences and outcomes.",
      features: [
        "LMS platforms with interactive content and progress tracking.",
        "Virtual classroom solutions with collaboration tools.",
        "AI-powered personalized learning paths and assessment systems.",
      ],
      images: ["/images/ecommerce-woman.webp", "/images/ecommerce-laptop.webp"],
    },
    finance: {
      title:
        "Fintech solutions, digital banking platforms, and investment management tools to modernize financial services.",
      features: [
        "Secure digital banking platforms with multi-factor authentication.",
        "Investment portfolio management and trading applications.",
        "AI-driven fraud detection and risk assessment systems.",
      ],
      images: ["/images/ecommerce-woman.webp", "/images/ecommerce-laptop.webp"],
    },
    manufacturing: {
      title:
        "Industrial IoT solutions, production monitoring, and quality control systems to optimize manufacturing processes.",
      features: [
        "IoT-enabled production monitoring and predictive maintenance.",
        "Quality control systems with automated inspection and reporting.",
        "Supply chain integration and inventory management solutions.",
      ],
      images: ["/images/ecommerce-woman.webp", "/images/ecommerce-laptop.webp"],
    },
    government: {
      title:
        "Digital governance solutions, citizen portals, and public service platforms to improve government efficiency and citizen engagement.",
      features: [
        "Citizen service portals with online application and payment processing.",
        "Digital identity verification and document management systems.",
        "Data analytics platforms for policy making and resource allocation.",
      ],
      images: ["/images/ecommerce-woman.webp", "/images/ecommerce-laptop.webp"],
    },
  }

  const currentContent = industryContent[activeTab]

  return (
    <section className="py-8 lg:py-12 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl" data-aos="fade-up" data-aos-delay="200">
            Industries We Serve
          </h2>
          <button
            className="group relative inline-flex items-center justify-center bg-[var(--black)] text-white px-6 sm:px-8 rounded-full btn-text hover:bg-gray-800 transition-all duration-300 overflow-hidden min-w-[160px] sm:min-w-[180px] py-2.5 sm:py-3 self-start sm:self-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base">
              All Industries
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          </button>
        </div>

        {/* Industry Tabs */}
        <div className="mb-8 sm:mb-10 lg:mb-12" data-aos="fade-up" data-aos-delay="400">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 sm:gap-2 lg:gap-4 pb-2 sm:pb-0 border-b border-gray-200">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-sm sm:text-base lg:text-xl font-medium transition-all duration-300 border-b-2 whitespace-nowrap flex-shrink-0 ${
                  activeTab === industry.id
                    ? "text-[var(--brand-blue)] border-[var(--brand-blue)]"
                    : "text-gray-600 border-transparent hover:text-[var(--brand-blue)] hover:border-gray-300"
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-10 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Content - 70% */}
          <div className="lg:col-span-7 order-2 lg:order-1" data-aos="fade-right" data-aos-delay="500">
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl lg:text-2xl leading-relaxed">{currentContent.title}</h4>

              <div className="space-y-3 sm:space-y-4">
                {currentContent.features.map((feature, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {feature}
                  </p>
                ))}
              </div>

              <div className="pt-2 sm:pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[var(--brand-blue)] font-medium hover:gap-3 transition-all duration-300 text-sm sm:text-base"
                >
                  Explore More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Images - 30% */}
          <div className="lg:col-span-3 order-1 lg:order-2" data-aos="fade-left" data-aos-delay="600">
            <div className="relative w-full h-64 sm:h-72 lg:h-80 max-w-sm mx-auto lg:max-w-none">
              {/* Background Image - Rotated */}
              <div className="absolute top-2 sm:top-4 right-0 w-40 sm:w-48 lg:w-56 h-40 sm:h-48 lg:h-56 transform rotate-6 z-10">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg w-full h-full">
                  <Image
                    src={currentContent.images[1] || "/placeholder.svg"}
                    alt={`${industries.find((i) => i.id === activeTab)?.name} technology`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Foreground Image - Main */}
              <div className="absolute top-0 left-0 w-44 sm:w-52 lg:w-64 h-44 sm:h-52 lg:h-64 transform -rotate-3 z-20">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl w-full h-full">
                  <Image
                    src={currentContent.images[0] || "/placeholder.svg"}
                    alt={`${industries.find((i) => i.id === activeTab)?.name} solution`}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
