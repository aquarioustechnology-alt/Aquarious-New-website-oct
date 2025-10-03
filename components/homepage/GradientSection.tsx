"use client"

import { useState, useEffect } from "react"

export default function GradientSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const dynamicContent = [
    {
      multiplier: "4X",
      title: "Faster Deployment",
      subtitle:
        "Experience rapid project turnaround times with our streamlined development process and expert team delivery.",
    },
    {
      multiplier: "3X",
      title: "Enhanced Performance",
      subtitle:
        "Optimize your applications for peak efficiency with cutting-edge technologies and advanced performance monitoring.",
    },
    {
      multiplier: "5X",
      title: "Increased Scalability",
      subtitle:
        "Easily adapt to growing user demands with our robust, cloud-native architecture solutions and seamless scaling.",
    },
    {
      multiplier: "2X",
      title: "Improved Reliability",
      subtitle:
        "Ensure consistent uptime and performance with comprehensive monitoring, automated backups, and proactive support.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % dynamicContent.length)
        setIsAnimating(false)
      }, 600) // Smoother transition timing
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full px-6 lg:px-8 pt-8">
      <div className="max-w-7xl mx-auto">
        {/* Gradient Container with Background Image */}
        <div className="relative rounded-3xl overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onLoadStart={() => console.log("[v0] Video loading started")}
            onCanPlay={() => console.log("[v0] Video can play")}
            onError={(e) => console.log("[v0] Video error:", e)}
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oil_reflection_slow_stronger_1200px-PJ2Ec8EP2Hjl4FV0BA6sZoGU7z0clQ.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content overlay */}
          <div className="relative p-4 sm:p-6 lg:p-12 pb-0 lg:pb-0">
            <div className="flex flex-col lg:flex-row justify-between lg:items-end h-full min-h-[300px] lg:min-h-[400px] gap-6 lg:gap-0">
              {/* Left side - Google Rating */}
              <div
                className="flex justify-center lg:justify-start order-2 lg:order-1"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="relative bg-white rounded-t-2xl p-4 shadow-lg flex items-center gap-4 btn-hover-scale">
                  <img src="/images/BL-Before.svg" alt="" className="absolute bottom-0 left-[-14px] w-4 h-4" />
                  <img src="/images/BL-after.svg" alt="" className="absolute bottom-0 right-[-14px] w-4 h-4" />

                  <div className="bg-white rounded-full p-2 shadow-sm">
                    <img src="/images/google-icon.webp" alt="Google" className="w-8 h-8" />
                  </div>
                  <div className="text-black">
                    <div className="flex items-center gap-1">
                      <h5 className="text-black">Rating 4.9</h5>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm">200+ Reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Main content */}
              <div
                className="flex justify-between lg:justify-end order-1 lg:order-2"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 w-[385px] lg:mb-14 btn-hover-scale h-[350px] flex flex-col justify-between relative overflow-hidden">
                  <div
                    className={`flex flex-col justify-between h-full transition-opacity duration-600 ease-in-out ${
                      isAnimating ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {/* Top section - Heading and Title */}
                    <div className="relative">
                      <h2 className="text-black font-normal">{dynamicContent[currentIndex].multiplier}</h2>
                      <h3 className="text-black text-[26px] leading-tight">{dynamicContent[currentIndex].title}</h3>
                    </div>

                    {/* Bottom section - Subtitle/Description */}
                    <div className="mt-auto">
                      <p className="text-black opacity-80 leading-relaxed">{dynamicContent[currentIndex].subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
