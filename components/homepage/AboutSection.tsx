"use client"

import { useState, useEffect, useRef } from "react"

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

function Counter({ end, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startCount = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startCount + (end - startCount) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-[90px] font-bold text-[#C6ADFF] leading-none mb-2">
        {count}
        {suffix}
      </div>
    </div>
  )
}

function VerticalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const achievements = [
    "Work with South East Asia's largest e-commerce company",
    "Work with Australia's second largest engineering and automation company",
    "Work with World's leading ventilation company based out of Germany",
    "Supporting the growth of one of the top 10 distress and tip management company in USA",
    "Successfully providing an AUTO CAD alternative software to one of the leading HVAC solution companies in Australia",
    "Work with one of the famous green energy building solutions on the West Coast, USA",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length)
    }, 5000) // Increased stoppage time from 3000ms to 5000ms

    return () => clearInterval(interval)
  }, [achievements.length])

  return (
    <div className="relative h-20 overflow-hidden">
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * 80}px)`, // 80px = h-20
        }}
      >
        {achievements.map((achievement, index) => (
          <div key={index} className="h-20 flex items-start py-2">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-[#C6ADFF] rounded-full flex-shrink-0 mt-1"></div>
              <p className="text-xl text-gray-200 leading-tight">{achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
      <div
        className="max-w-7xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden rounded-2xl sm:rounded-3xl"
        data-aos="fade-up"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A2FF]/10 to-[#C6ADFF]/10"></div>

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row">
          {/* Left Column - About Us Badge */}
          <div
            className="w-full lg:w-[300px] flex-shrink-0 py-6 sm:py-8 flex justify-center lg:justify-start"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="inline-block bg-[#E6F6FF] text-black px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium h-fit">
              About Us
            </span>
          </div>

          {/* Right Column - All other content */}
          <div className="flex-1 py-6 sm:py-8">
            {/* Main Heading */}
            <div className="mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-white max-w-5xl leading-tight text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                Based in Kolkata with global operations, we're a team of AI engineers, developers, designers, and
                consultants building scalable digital solutions.
              </h3>
            </div>

            {/* Statistics */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] font-bold text-[#C6ADFF] leading-none mb-2">
                  <Counter end={600} suffix="+" duration={2500} />
                </div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Projects across 25 countries</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] font-bold text-[#C6ADFF] leading-none mb-2">
                  <Counter end={12} suffix="+" duration={2000} />
                </div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Years in IT Enterprise delivery</p>
              </div>
              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] font-bold text-[#C6ADFF] leading-none mb-2">
                  <Counter end={92} suffix="%" duration={2200} />
                </div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Clients Trust & retention</p>
              </div>
            </div>

            {/* Divider */}
            <div
              className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8 sm:mb-10 lg:mb-12"
              data-aos="fade-up"
              data-aos-delay="800"
            ></div>

            {/* Bottom Section */}
            <div
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div className="lg:flex-1 text-center lg:text-left">
                <VerticalSlider />
              </div>

              {/* CTA Button */}
              <div className="lg:flex-shrink-0 flex justify-center lg:justify-end">
                <button className="group inline-flex items-center justify-between bg-white text-black pl-6 sm:pl-8 pr-1 rounded-full btn-text btn-hover-enhanced min-w-[200px] sm:min-w-[220px] py-1 hover:bg-gray-50 transition-all duration-300">
                  <span className="inline-flex items-center justify-between transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base">
                    Book a Call
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
          </div>
        </div>
      </div>
    </section>
  )
}
