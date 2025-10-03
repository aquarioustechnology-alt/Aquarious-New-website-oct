"use client"

import { useState } from "react"
import Image from "next/image"

const solutionsData = [
  {
    id: "01",
    title: "AI & Automation Services",
    content: [
      "Intelligent Process Automation",
      "Voice AI System",
      "Predictive Analytics",
      "Document Understanding",
      "Workflow Orchestration",
      "Custom ML Integrations",
    ],
  },
  {
    id: "02",
    title: "Custom Software Development",
    content: [
      "Enterprise Web Applications",
      "Mobile Apps (iOS, Android)",
      "SaaS Platforms",
      "ERP & CRM Systems",
      "API Development & Integration",
      "Cloud-Native Applications",
    ],
  },
  {
    id: "03",
    title: "IT Consulting & Support",
    content: [
      "Technology Strategy & Roadmapping",
      "Cloud & Infrastructure",
      "DevOps Enablement",
      "Security & Compliance",
      "Legacy System Modernization",
      "24/7 SLA-Based Support",
    ],
  },
  {
    id: "04",
    title: "Digital Marketing",
    content: [
      "Performance Marketing",
      "SEO & Content Strategy",
      "Paid Ads Campaigns",
      "Conversion Funnel Optimization",
      "Marketing Automation",
      "Analytics & Attribution",
    ],
  },
  {
    id: "05",
    title: "Dedicated Teams",
    content: [
      "Frontend Developers",
      "Backend Engineers",
      "Full-Stack Teams",
      "UI/UX Designers",
      "DevOps Specialists",
      "QA & Automation Experts",
      "Project Managers",
    ],
  },
]

export default function SolutionsSection() {
  const [activeItem, setActiveItem] = useState("01")

  return (
    <section className="py-8 lg:py-12 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col lg:flex-row lg:items-start lg:gap-8">
          <div className="lg:w-2/5 mb-4 lg:mb-0" data-aos="fade-up" data-aos-delay="200">
            <span className="bg-[var(--brand-light-blue)] text-[var(--brand-dark-blue)] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              Our Solutions
            </span>
          </div>
          <div className="lg:w-3/5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              We engineer and transform digital systems to keep your business modern, efficient, and agile.
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 lg:w-2/5 w-full" data-aos="fade-right" data-aos-delay="200">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/solutions-laptop.webp"
                alt="Developer working on laptop with code interface"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="order-1 lg:order-2 lg:w-3/5 w-full" data-aos="fade-left" data-aos-delay="400">
            <div className="space-y-3 sm:space-y-4">
              {solutionsData.map((item, index) => (
                <div
                  key={item.id}
                  className={`${
                    activeItem === item.id
                      ? "border-t-2 border-t-[var(--brand-blue)] pt-3 sm:pt-4"
                      : "border-t-2 border-t-gray-200 pt-3 sm:pt-4"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 100}
                >
                  <button
                    onClick={() => setActiveItem(activeItem === item.id ? "" : item.id)}
                    className="w-full flex items-center text-left group hover:text-[var(--brand-blue)] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                      <span className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-400 group-hover:text-[var(--brand-blue)] transition-colors duration-300 flex-shrink-0">
                        {item.id}
                      </span>
                      <h4 className="text-base sm:text-lg lg:text-xl font-medium text-black group-hover:text-[var(--brand-blue)] transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeItem === item.id ? "max-h-96 opacity-100 mt-3 sm:mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-6 sm:pl-8 lg:pl-12">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-gray-600">
                        {item.content.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center py-1">
                            <span className="text-sm sm:text-base">{service}</span>
                            {serviceIndex < item.content.length - 1 && serviceIndex % 2 === 0 && (
                              <span className="mx-2 text-gray-400 hidden sm:inline">|</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
