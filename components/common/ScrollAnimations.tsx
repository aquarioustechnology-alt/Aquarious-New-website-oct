"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          const animationType = element.getAttribute("data-aos")
          const delay = element.getAttribute("data-aos-delay") || "0"

          setTimeout(() => {
            element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"

            switch (animationType) {
              case "fade-up":
                element.style.opacity = "1"
                element.style.transform = "translateY(0)"
                break
              case "fade-down":
                element.style.opacity = "1"
                element.style.transform = "translateY(0)"
                break
              case "fade-left":
                element.style.opacity = "1"
                element.style.transform = "translateX(0)"
                break
              case "fade-right":
                element.style.opacity = "1"
                element.style.transform = "translateX(0)"
                break
              case "zoom-in":
                element.style.opacity = "1"
                element.style.transform = "scale(1)"
                break
              case "float":
                element.style.opacity = "1"
                element.classList.add("animate-float")
                break
              default:
                element.style.opacity = "1"
            }
          }, Number.parseInt(delay))
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll("[data-aos]")
    animatedElements.forEach((el) => {
      const element = el as HTMLElement
      const animationType = element.getAttribute("data-aos")

      element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      element.style.opacity = "0"

      switch (animationType) {
        case "fade-up":
          element.style.transform = "translateY(50px)"
          break
        case "fade-down":
          element.style.transform = "translateY(-50px)"
          break
        case "fade-left":
          element.style.transform = "translateX(50px)"
          break
        case "fade-right":
          element.style.transform = "translateX(-50px)"
          break
        case "zoom-in":
          element.style.transform = "scale(0.8)"
          break
        case "float":
          element.style.transform = "translateY(20px)"
          break
      }

      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
