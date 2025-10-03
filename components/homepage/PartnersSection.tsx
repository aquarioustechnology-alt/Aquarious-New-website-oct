"use client"

import type React from "react"

import Image from "next/image"

const partnerLogos = [
  {
    src: "/images/masterflow-logo.webp",
    alt: "Masterflow",
    width: 140,
    height: 70,
    description: "Advanced workflow automation platform we have developed.",
    metrics: { value1: "156%", label1: "Efficiency Boost", value2: "89%", label2: "Cost Reduction" },
    brandColor: "#1E40AF", // Blue for Masterflow
  },
  {
    src: "/images/linde-logo.webp",
    alt: "Linde",
    width: 120,
    height: 60,
    description: "Industrial gas management system we have developed.",
    metrics: { value1: "124%", label1: "Sales Growth", value2: "135%", label2: "Active Users Spike" },
    brandColor: "#DC2626", // Red for Linde
  },
  {
    src: "/images/sntls-logo.webp",
    alt: "SNTLS",
    width: 120,
    height: 60,
    description: "Technology solutions platform we have developed.",
    metrics: { value1: "98%", label1: "User Retention", value2: "167%", label2: "Revenue Growth" },
    brandColor: "#059669", // Green for SNTLS
  },
  {
    src: "/images/gkw-logo.webp",
    alt: "GKW",
    width: 100,
    height: 50,
    description: "Enterprise resource planning system we have developed.",
    metrics: { value1: "78%", label1: "Process Speed", value2: "145%", label2: "Data Accuracy" },
    brandColor: "#7C3AED", // Purple for GKW
  },
  {
    src: "/images/bird-group.webp",
    alt: "Bird Group",
    width: 120,
    height: 60,
    description: "Hospitality management platform we have developed.",
    metrics: { value1: "203%", label1: "Booking Rate", value2: "92%", label2: "Guest Satisfaction" },
    brandColor: "#EA580C", // Orange for Bird Group
  },
  {
    src: "/images/lazada-logo.webp",
    alt: "Lazada",
    width: 110,
    height: 55,
    description: "E-commerce optimization tools we have developed.",
    metrics: { value1: "189%", label1: "Sales Volume", value2: "76%", label2: "Cart Conversion" },
    brandColor: "#0F172A", // Dark for Lazada
  },
  {
    src: "/images/mc3i-logo.webp",
    alt: "MC3i Learning",
    width: 130,
    height: 65,
    description: "Learning management system we have developed.",
    metrics: { value1: "234%", label1: "Course Completion", value2: "158%", label2: "User Engagement" },
    brandColor: "#0891B2", // Cyan for MC3i
  },
  {
    src: "/images/vert-energy.webp",
    alt: "Vert Energy",
    width: 130,
    height: 65,
    description: "Energy monitoring platform we have developed.",
    metrics: { value1: "67%", label1: "Energy Savings", value2: "123%", label2: "Efficiency Gain" },
    brandColor: "#16A34A", // Green for Vert Energy
  },
]

export default function PartnersSection() {
  return (
    <section className="w-full py-20 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-blue-100"></div>

      {/* Animated Gradient Blur Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large blue circle - bottom left with horizontal movement */}
        <div
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-blue-600/30 rounded-full blur-3xl"
          style={{
            animation: "horizontalLeftToRight 4s ease-in-out infinite, subtlePulse 3s ease-in-out infinite",
            animationDelay: "0s",
          }}
        ></div>

        {/* Medium purple circle - center left with diagonal movement */}
        <div
          className="absolute top-1/2 -left-24 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-purple-600/25 rounded-full blur-3xl"
          style={{
            animation: "diagonalTopLeftToBottomRight 5s ease-in-out infinite, subtleScale 4s ease-in-out infinite",
            animationDelay: "3s",
          }}
        ></div>

        {/* Small blue circle - bottom center with vertical movement */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/30 rounded-full blur-3xl"
          style={{
            animation: "verticalTopToBottom 3s ease-in-out infinite, gentleOpacity 2s ease-in-out infinite",
            animationDelay: "2s",
          }}
        ></div>

        {/* Medium teal circle - center right with drift animation */}
        <div
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-teal-400/15 to-cyan-500/25 rounded-full blur-3xl"
          style={{
            animation: "smoothDrift 4s ease-in-out infinite, subtlePulse 3s ease-in-out infinite",
            animationDelay: "5s",
          }}
        ></div>

        {/* Large purple circle - bottom right with slow rotation */}
        <div
          className="absolute -bottom-32 -right-24 w-88 h-88 bg-gradient-to-br from-purple-500/20 to-indigo-600/30 rounded-full blur-3xl"
          style={{
            animation: "gentleRotate 5s linear infinite, gentleFloat 4s ease-in-out infinite",
            animationDelay: "7s",
          }}
        ></div>

        {/* Small floating circle - center with orbital motion */}
        <div
          className="absolute top-2/3 left-1/3 w-48 h-48 bg-gradient-to-br from-blue-300/15 to-purple-400/20 rounded-full blur-2xl"
          style={{
            animation: "smoothOrbit 5s ease-in-out infinite, subtleScale 3s ease-in-out infinite",
            animationDelay: "4s",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 lg:mb-20">
          {/* Left Side - Heading and Description */}
          <div className="lg:max-w-md mb-8 lg:mb-0">
            <h3 className="mb-6">
              We Have Partners,
              <br />
              Not Clients
            </h3>
            <p className="text-black text-lg leading-relaxed">
              Our partners include companies from the Inc. 5000 and World's Fastest-Growing Companies.
            </p>
          </div>

          {/* Right Side - Rating Badges */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Clutch Rating */}
            <div className="flex items-center gap-3 bg-[#F3F7FE] rounded-full px-1 py-1 shadow-sm">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Image src="/images/clutch-icon.svg" alt="Clutch" width={60} height={60} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Rating 4.8</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-red-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-3 bg-[#F3F7FE] rounded-full px-1 py-1 shadow-sm">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <Image src="/images/google-icon.svg" alt="Google" width={60} height={60} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Rating 4.9</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden min-h-[280px] hover:scale-[1.02] hover:-translate-y-3 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30"
              style={{ "--brand-color": logo.brandColor } as React.CSSProperties}
            >
              <div className="flex items-center justify-center h-full group-hover:opacity-0 group-hover:scale-75 transition-all duration-700 ease-out">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:filter-none transition-all duration-700"
                />
              </div>

              <div className="absolute inset-0 p-6 bg-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-y-6 group-hover:translate-y-0 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 transform transition-all duration-500 delay-100 group-hover:scale-100 scale-95">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={logo.width * 0.6}
                      height={logo.height * 0.6}
                      className="max-w-[80px] max-h-[40px] object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <svg
                      className="w-6 h-6 transition-all duration-500 group-hover:translate-x-1 group-hover:scale-110"
                      style={{ color: "var(--brand-color)" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 mb-8 leading-relaxed transform transition-all duration-500 delay-200 group-hover:translate-y-0 translate-y-2">
                    {logo.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  <div className="transform transition-all duration-500 delay-300 group-hover:scale-105 group-hover:translate-y-0 translate-y-4">
                    <div
                      className="text-3xl font-bold mb-2 transition-all duration-500"
                      style={{ color: "var(--brand-color)" }}
                    >
                      {logo.metrics.value1}
                    </div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      {logo.metrics.label1}
                    </div>
                  </div>
                  <div className="transform transition-all duration-500 delay-400 group-hover:scale-105 group-hover:translate-y-0 translate-y-4">
                    <div
                      className="text-3xl font-bold mb-2 transition-all duration-500"
                      style={{ color: "var(--brand-color)" }}
                    >
                      {logo.metrics.value2}
                    </div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      {logo.metrics.label2}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes horizontalLeftToRight {
          0% { transform: translateX(-100px); }
          50% { transform: translateX(100px); }
          100% { transform: translateX(-100px); }
        }
        
        @keyframes verticalTopToBottom {
          0% { transform: translateX(-50%) translateY(-80px); }
          50% { transform: translateX(-50%) translateY(80px); }
          100% { transform: translateX(-50%) translateY(-80px); }
        }
        
        @keyframes diagonalTopLeftToBottomRight {
          0% { transform: translateX(-60px) translateY(-60px); }
          50% { transform: translateX(60px) translateY(60px); }
          100% { transform: translateX(-60px) translateY(-60px); }
        }
        
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(8px); }
          50% { transform: translateY(-8px) translateX(-12px); }
          75% { transform: translateY(-20px) translateX(4px); }
        }
        
        @keyframes gentleSway {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          33% { transform: translateX(12px) rotate(0.5deg); }
          66% { transform: translateX(-8px) rotate(-0.5deg); }
        }
        
        @keyframes smoothVerticalFloat {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-18px); }
        }
        
        @keyframes smoothDrift {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-12px) translateX(-15px) scale(1.02); }
          50% { transform: translateY(8px) translateX(12px) scale(0.98); }
          75% { transform: translateY(-4px) translateX(-8px) scale(1.01); }
        }
        
        @keyframes gentleRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes smoothOrbit {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(15px) rotate(90deg); }
          50% { transform: translateY(0px) translateX(30px) rotate(180deg); }
          75% { transform: translateY(15px) translateX(15px) rotate(270deg); }
        }
        
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        
        @keyframes subtleScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes gentleOpacity {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </section>
  )
}
