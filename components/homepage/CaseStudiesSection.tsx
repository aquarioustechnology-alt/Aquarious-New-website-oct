"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface CaseStudy {
  id: number
  company: "SAGE Automation"
  logo: string
  backgroundImage: string
  title: string
  description: string
  metrics: {
    primary: { value: string; label: string }
    secondary: { value: string; label: string }
    tertiary: { value: string; label: string }
  }
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    company: "SAGE Automation",
    logo: "/images/sage-logo.png",
    backgroundImage: "/images/industrial-warehouse.jpg",
    title: "Modernized Platform Unlocked 3X Sales Growth for a Global Automation Leader.",
    description:
      "Implemented cutting-edge tech, optimizing UI/UX, enhancing performance, and integrating scalable solutions",
    metrics: {
      primary: { value: "3X", label: "Overall Sales Growth" },
      secondary: { value: "46%", label: "Increase in Revenue" },
      tertiary: { value: "135%", label: "Active Users Spike" },
    },
  },
  {
    id: 2,
    company: "TechCorp Solutions",
    logo: "/images/sage-logo.png",
    backgroundImage: "/images/industrial-warehouse.jpg",
    title: "Digital Transformation Boosted Efficiency by 250% for Manufacturing Giant.",
    description: "Streamlined operations through AI-powered automation and real-time analytics integration",
    metrics: {
      primary: { value: "250%", label: "Efficiency Boost" },
      secondary: { value: "60%", label: "Cost Reduction" },
      tertiary: { value: "180%", label: "Productivity Gain" },
    },
  },
  {
    id: 3,
    company: "Global Industries",
    logo: "/images/sage-logo.png",
    backgroundImage: "/images/industrial-warehouse.jpg",
    title: "Cloud Migration Strategy Delivered 400% ROI for Enterprise Client.",
    description: "Seamless transition to cloud infrastructure with enhanced security and scalability",
    metrics: {
      primary: { value: "400%", label: "Return on Investment" },
      secondary: { value: "75%", label: "Infrastructure Savings" },
      tertiary: { value: "99.9%", label: "System Uptime" },
    },
  },
  {
    id: 4,
    company: "Innovation Labs",
    logo: "/images/sage-logo.png",
    backgroundImage: "/images/industrial-warehouse.jpg",
    title: "AI-Powered Analytics Platform Increased Decision Speed by 300%.",
    description: "Advanced machine learning algorithms providing real-time insights and predictive analytics",
    metrics: {
      primary: { value: "300%", label: "Decision Speed" },
      secondary: { value: "85%", label: "Accuracy Improvement" },
      tertiary: { value: "200%", label: "Data Processing" },
    },
  },
  {
    id: 5,
    company: "Future Systems",
    logo: "/images/sage-logo.png",
    backgroundImage: "/images/industrial-warehouse.jpg",
    title: "Mobile-First Strategy Drove 500% User Engagement for Retail Chain.",
    description: "Responsive design and progressive web app delivering exceptional user experience",
    metrics: {
      primary: { value: "500%", label: "User Engagement" },
      secondary: { value: "90%", label: "Mobile Conversion" },
      tertiary: { value: "150%", label: "Session Duration" },
    },
  },
  {
    id: 6,
    company: "Smart Enterprises",
    logo: "/images/sage-logo.png",
    backgroundImage: "/images/industrial-warehouse.jpg",
    title: "IoT Integration Solution Reduced Operational Costs by 45%.",
    description: "Connected devices and smart sensors optimizing resource utilization and maintenance",
    metrics: {
      primary: { value: "45%", label: "Cost Reduction" },
      secondary: { value: "70%", label: "Energy Savings" },
      tertiary: { value: "95%", label: "Equipment Efficiency" },
    },
  },
]

export default function CaseStudiesSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [animateLetters, setAnimateLetters] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setAnimateLetters(false)
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % caseStudies.length)
        setIsTransitioning(false)
        setTimeout(() => setAnimateLetters(true), 50)
      }, 150)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSlideChange = (index: number) => {
    if (index !== activeSlide) {
      setIsTransitioning(true)
      setAnimateLetters(false)
      setTimeout(() => {
        setActiveSlide(index)
        setIsTransitioning(false)
        setTimeout(() => setAnimateLetters(true), 50)
      }, 150)
    }
  }

  const renderAnimatedText = (text: string) => {
    if (!animateLetters) {
      return <span style={{ opacity: 0 }}>{text}</span>
    }

    return text.split("").map((char, index) => (
      <span
        key={`${activeSlide}-${index}`}
        className="inline-block animate-letter"
        style={{
          animationDelay: `${index * 0.05}s`,
          minWidth: char === " " ? "0.3em" : "auto",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }

  const currentCase = caseStudies[activeSlide]

  return (
    <section className="w-full py-20 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-blue-100"></div>

      {/* Animated Gradient Blur Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bottom left floating circle */}
        <div className="absolute bottom-32 -left-12 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-500/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>

        {/* Center right swaying circle */}
        <div className="absolute top-1/2 -right-16 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-500/25 rounded-full blur-3xl animate-[sway_12s_ease-in-out_infinite]"></div>

        {/* Bottom center drifting circle */}
        <div className="absolute -bottom-16 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-300/15 to-cyan-400/20 rounded-full blur-3xl animate-[drift_10s_ease-in-out_infinite]"></div>

        {/* Center left rotating circle */}
        <div className="absolute top-1/3 -left-8 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-blue-600/15 rounded-full blur-3xl animate-[rotate_15s_linear_infinite]"></div>

        {/* Bottom right orbital circle */}
        <div className="absolute -bottom-24 right-1/4 w-88 h-88 bg-gradient-to-br from-cyan-400/15 to-blue-500/20 rounded-full blur-3xl animate-[orbital_14s_ease-in-out_infinite]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Case Study Image with Metrics */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className={`transition-all duration-700 ease-out ${isTransitioning ? "opacity-20" : "opacity-100"}`}>
                <Image
                  src={currentCase.backgroundImage || "/placeholder.svg"}
                  alt={`${currentCase.company} facility`}
                  width={600}
                  height={400}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>

              {/* Company Logo Overlay */}
              <div
                className={`absolute top-6 left-6 transition-all duration-700 ease-out ${isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
              >
                <Image
                  src={currentCase.logo || "/placeholder.svg"}
                  alt={`${currentCase.company} logo`}
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>

              {/* Metrics Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-700 ease-out ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
                >
                  {/* Navigation Dots */}
                  <div className="flex gap-2 mb-6">
                    {caseStudies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                          index === activeSlide
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-6">
                    <div
                      className={`text-center transition-all duration-700 ease-out delay-75 ${isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
                        {currentCase.metrics.primary.value}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-600 font-medium">
                        {currentCase.metrics.primary.label}
                      </div>
                    </div>
                    <div
                      className={`text-center transition-all duration-700 ease-out delay-100 ${isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
                        {currentCase.metrics.secondary.value}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-600 font-medium">
                        {currentCase.metrics.secondary.label}
                      </div>
                    </div>
                    <div
                      className={`text-center transition-all duration-700 ease-out delay-150 ${isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
                        {currentCase.metrics.tertiary.value}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-600 font-medium">
                        {currentCase.metrics.tertiary.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Case Studies Badge */}
            <div
              className={`transition-all duration-700 ease-out ${isTransitioning ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"}`}
            >
              <span className="inline-block bg-[#E6F6FF] text-black px-6 py-3 rounded-full text-sm font-medium">
                Case Studies
              </span>
            </div>

            {/* Heading with Letter Animation */}
            <h2 className="max-w-lg">{renderAnimatedText(currentCase.title)}</h2>

            {/* Description */}
            <div
              className={`transition-all duration-700 ease-out delay-100 ${isTransitioning ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"}`}
            >
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">{currentCase.description}</p>
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-700 ease-out delay-150 ${isTransitioning ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"}`}
            >
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-between bg-[var(--black)] text-white pl-8 pr-1 rounded-full btn-text btn-hover-enhanced group min-w-[220px] py-1"
              >
                <span className="inline-flex items-center justify-between transition-all duration-300 group-hover:translate-x-1">
                  View case study
                </span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center ml-4 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110">
                  <svg
                    className="w-6 h-6 text-black group-hover:translate-x-0.5 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes sway {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          33% { transform: translateX(15px) translateY(-10px); }
          66% { transform: translateX(-10px) translateY(15px); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translateX(0px) scale(1); }
          50% { transform: translateX(30px) scale(1.1); }
        }
        
        @keyframes orbital {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }

        @keyframes animate-letter {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0px); }
        }

        .animate-letter {
          animation: animate-letter 0.5s ease-in-out forwards;
        }
      `}</style>
    </section>
  )
}
