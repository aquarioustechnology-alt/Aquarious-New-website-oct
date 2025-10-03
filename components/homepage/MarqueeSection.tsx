import Image from "next/image"

const logos = [
  { src: "/images/linde-logo.webp", alt: "Linde", width: 120, height: 60 },
  { src: "/images/zoya.svg", alt: "Zoya", width: 100, height: 50 },
  { src: "/images/apjship.svg", alt: "APJ Ship", width: 110, height: 55 },
  { src: "/images/funcorp-logo.webp", alt: "Fun Corp", width: 90, height: 45 },
  { src: "/images/usc-annenberg.webp", alt: "USC Annenberg", width: 140, height: 70 },
  { src: "/images/duffy-electric.webp", alt: "Duffy Electric Boats", width: 130, height: 65 },
  { src: "/images/gkw-logo.webp", alt: "GKW", width: 100, height: 50 },
  { src: "/images/masterflow-logo.webp", alt: "Masterflow", width: 140, height: 70 },
  { src: "/images/sntls-logo.webp", alt: "SNTLS", width: 120, height: 60 },
  { src: "/images/mc3i-logo.webp", alt: "MC3i Learning and Development", width: 130, height: 65 },
  { src: "/images/bird-group.webp", alt: "Bird Group", width: 120, height: 60 },
  { src: "/images/lazada-logo.webp", alt: "Lazada", width: 110, height: 55 },
  { src: "/images/vert-energy.webp", alt: "Vert Energy Group", width: 130, height: 65 },
]

export default function MarqueeSection() {
  return (
    <section className="py-8 bg-white overflow-hidden w-full" data-aos="fade-up">
      <div className="w-full">
        {/* Marquee Container */}
        <div className="w-full">
          <div className="marquee-container">
            <div className="marquee-content">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={`first-${index}`} className="marquee-item">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="logo-image"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`second-${index}`} className="marquee-item">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="logo-image"
                  />
                </div>
              ))}
              {/* Third set for extra smoothness */}
              {logos.map((logo, index) => (
                <div key={`third-${index}`} className="marquee-item">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="logo-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
