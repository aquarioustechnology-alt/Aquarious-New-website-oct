"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const statisticsData = [
  { value: 2.6, suffix: "X", label: "ROI Improvement", color: "#666666" },
  { value: 92, suffix: "%", label: "people", color: "#C6ADFF" },
  { value: 94, suffix: "%", label: "Project Success Rate", color: "#666666" },
  { value: 150, suffix: "+", label: "Global Projects", color: "#666666" },
  { value: 24, suffix: "/7", label: "Support Available", color: "#666666" },
]

export default function StatisticsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statisticsData.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getCirclePosition = (index: number) => {
    const positions = [-2, -1, 0, 1, 2] // 5 visible positions
    const relativeIndex = (index - currentIndex + statisticsData.length) % statisticsData.length

    // Map data indices to visible positions
    if (relativeIndex === 0) return 0 // center (active)
    if (relativeIndex === 1) return 1 // bottom
    if (relativeIndex === 2) return 2 // bottom (partially visible)
    if (relativeIndex === statisticsData.length - 1) return -1 // top
    if (relativeIndex === statisticsData.length - 2) return -2 // top (partially visible)

    return 3 // hidden
  }

  return (
    <section ref={sectionRef} className="bg-black overflow-hidden lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content - Sticky */}
          <div className="text-center lg:text-left lg:sticky lg:top-20 lg:h-fit py-[110px]">
            <div className="mb-8">
              <Image
                src="/images/new-quotation-mark.svg"
                alt="Quote"
                width={65}
                height={49}
                className="mx-auto lg:mx-0 opacity-80"
              />
            </div>

            <h2 className="text-white font-normal leading-tight mb-8">
              The real innovation isn't in the code – it's in solving what matters.
            </h2>

            <div className="inline-flex">
              <button className="group inline-flex items-center justify-between bg-white text-black pl-6 sm:pl-8 pr-1 rounded-full btn-text btn-hover-enhanced min-w-[200px] sm:min-w-[220px] py-1 hover:bg-gray-50 transition-all duration-300">
                <span className="inline-flex items-center justify-between transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base">
                  Get a quote!
                </span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center ml-3 sm:ml-4 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-0.5 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Individual Circle Carousel */}
          <div className="relative h-full flex justify-center overflow-hidden items-center">
            {statisticsData.map((stat, index) => {
              const position = getCirclePosition(index)
              const isActive = position === 0
              const isVisible = Math.abs(position) <= 2

              if (!isVisible) return null

              return (
                <div
                  key={`circle-${index}`}
                  className="absolute transition-all duration-1000 ease-in-out"
                  style={{
                    transform: `translateY(${position * 230}px) scale(${isActive ? 1 : 0.7})`,
                    opacity: isActive ? 1 : Math.max(0.3, 1 - Math.abs(position) * 0.3),
                    zIndex: isActive ? 10 : 5 - Math.abs(position),
                  }}
                >
                  <div
                    className={`${
                      isActive ? "w-96 h-96" : "w-80 h-80"
                    } rounded-full flex flex-col items-center justify-center text-center transition-all duration-1000`}
                    style={{
                      backgroundColor: "#121212",
                      boxShadow: isActive ? "0 20px 40px rgba(198, 173, 255, 0.1)" : "none",
                    }}
                  >
                    <div
                      className="font-bold mb-2 transition-all duration-1000 ease-in-out"
                      style={{
                        fontSize: isActive ? "clamp(4rem, 8vw, 6rem)" : "clamp(3rem, 6vw, 4rem)",
                        color: isActive ? "#C6ADFF" : "#666666",
                        lineHeight: "1.1",
                      }}
                    >
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div
                      className="font-medium px-4 transition-all duration-1000 ease-in-out"
                      style={{
                        fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                        color: "#FFFFFF",
                        opacity: isActive ? 1 : 0,
                        transform: `translateY(${isActive ? 0 : 10}px)`,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
