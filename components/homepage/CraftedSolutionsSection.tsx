"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function CraftedSolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const mockup1Ref = useRef<HTMLDivElement>(null)
  const mockup2Ref = useRef<HTMLDivElement>(null)
  const mockup3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)),
      )

      if (mockup1Ref.current) {
        const translateY = (scrollProgress - 0.5) * -800
        const translateX = (scrollProgress - 0.5) * -250
        const rotate = (scrollProgress - 0.5) * 25
        mockup1Ref.current.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`
      }

      if (mockup2Ref.current) {
        const translateY = (scrollProgress - 0.5) * -380
        const translateX = (scrollProgress - 0.5) * -500
        const rotate = (scrollProgress - 0.5) * -60
        mockup2Ref.current.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`
      }

      if (mockup3Ref.current) {
        const translateY = (scrollProgress - 0.5) * -320
        const translateX = (scrollProgress - 0.5) * 200
        const rotate = (scrollProgress - 0.5) * 30
        mockup3Ref.current.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 lg:px-8 relative overflow-hidden pt-[100px] pb-[100px]"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Main Heading */}
        <div className="text-center relative z-10 my-16 lg:my-24">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[55px] font-medium text-black leading-tight max-w-5xl mx-auto text-balance"
            style={{ letterSpacing: "-1.5%" }}
          >
            Each Solution We Build is Crafted by the Best - Not just in Code <br /> But
            <Image
              src="/images/gradient-capsule.svg"
              alt="Gradient capsule"
              width={120}
              height={60}
              className="inline-block mx-4 align-middle"
            />
            in Thinking.
          </h2>
        </div>

     
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[var(--brand-blue)]/10 to-[var(--accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-[var(--brand-yellow)]/10 to-[var(--brand-blue)]/10 rounded-full blur-3xl"></div>
      </div>
         {/* Floating Device Mockups */}
        {/* Mockup 1 - Top Left */}
        <div
          ref={mockup1Ref}
          className="absolute bottom-[50px] left-0 lg:left-8 xl:left-16 w-32 sm:w-50 lg:w-70 transition-transform duration-300 ease-out"
          style={{ transform: "translate(0px, 0px) rotate(0deg)" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-3xl blur-xl"></div>
            <Image
              src="/images/device-mockup-1.jpg"
              alt="Healthcare app mockup"
              width={240}
              height={300}
              className="relative z-10 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Mockup 2 - Bottom Right */}
        <div
          ref={mockup2Ref}
          className="absolute bottom-0 right-50 w-32 sm:w-50 lg:w-70 transition-transform duration-300 ease-out"
          style={{ transform: "translate(0px, 0px) rotate(0deg)" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-3xl blur-xl"></div>
            <Image
              src="/images/device-mockup-2.jpg"
              alt="Business transformation website"
              width={300}
              height={300}
              className="relative z-10 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Mockup 3 - Top Right */}
        <div
          ref={mockup3Ref}
          className="absolute top-8 right-0 lg:right-24 xl:right-32 w-28 sm:w-36 lg:w-60 transition-transform duration-300 ease-out"
          style={{ transform: "translate(0px, 0px) rotate(0deg)" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-3xl blur-xl"></div>
            <Image
              src="/images/device-mockup-3.jpg"
              alt="Affiliate marketing website"
              width={300}
              height={250}
              className="relative z-10 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

    </section>
  )
}
