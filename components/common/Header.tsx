"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showHeader, setShowHeader] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false) // Hide when scrolling down
      } else {
        setShowHeader(true) // Show when scrolling up
      }

      // Add background when scrolled
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      <header
        className={`w-full transition-all duration-300 ease-in-out z-50 ${
          isScrolled ? "fixed top-0 bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-white py-4"
        } ${showHeader ? "translate-y-0" : "-translate-y-full"} px-6 lg:px-8`}
        data-aos="fade-down"
        data-aos-duration="600"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" data-aos="fade-right" data-aos-delay="200">
            <Image src="/images/logo.svg" alt="Aquarious Technology" width={60} height={60} className="h-12 w-auto" />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" data-aos="fade-down" data-aos-delay="400">
            <div className="relative group">
              <button className="flex items-center text-[var(--black)] nav-text nav-hover transition-colors">
                About Us
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-[var(--black)] nav-text nav-hover transition-colors">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link href="/technologies" className="text-[var(--black)] nav-text nav-hover transition-colors">
              Technologies
            </Link>

            <div className="relative group">
              <button className="flex items-center text-[var(--black)] nav-text nav-hover transition-colors">
                Industries
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link href="/customer-stories" className="text-[var(--black)] nav-text nav-hover transition-colors">
              Customer Stories
            </Link>

            <Link href="/contact" className="text-[var(--black)] nav-text nav-hover transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/consultation"
            className="hidden lg:block bg-[var(--brand-blue)] text-white px-6 py-3 rounded-full btn-text btn-hover-glow transition-colors"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            Get free consultation
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>

        {/* Mobile menu */}
        <div
          className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <nav className="space-y-6">
              <div>
                <button className="flex items-center justify-between w-full text-left text-[var(--black)] nav-text py-2">
                  About Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div>
                <button className="flex items-center justify-between w-full text-left text-[var(--black)] nav-text py-2">
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <Link
                href="/technologies"
                className="block text-[var(--black)] nav-text py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Technologies
              </Link>

              <div>
                <button className="flex items-center justify-between w-full text-left text-[var(--black)] nav-text py-2">
                  Industries
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <Link
                href="/customer-stories"
                className="block text-[var(--black)] nav-text py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Customer Stories
              </Link>

              <Link
                href="/contact"
                className="block text-[var(--black)] nav-text py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Link
                href="/consultation"
                className="block bg-[var(--brand-blue)] text-white px-6 py-3 rounded-full btn-text text-center mt-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get free consultation
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
