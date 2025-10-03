import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[10%]">
          {/* Left Content - 60% width */}
          <div className="lg:w-[60%] space-y-8">
            {/* Trusted Badge */}
            <div className="inline-block" data-aos="fade-up" data-aos-delay="200">
              <span className="bg-[var(--brand-light-blue)] text-[var(--brand-dark-blue)] px-4 py-2 rounded-full text-sm font-medium">
                Trusted Globally
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
              <h1 className="whitespace-nowrap tracking-tight">
                <span className="inline-block">
                  <span className="inline-block animate-letter" style={{ animationDelay: "0.1s" }}>
                    A
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "0.2s" }}>
                    I
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "0.3s" }}>
                    -
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "0.4s" }}>
                    P
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "0.5s" }}>
                    o
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "0.6s" }}>
                    w
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "0.7s" }}>
                    e
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "0.8s" }}>
                    r
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "0.9s" }}>
                    e
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "1.0s" }}>
                    d
                  </span>
                </span>
                <br />
                <Image
                  src="/images/gradient-capsule.svg"
                  alt="Gradient capsule"
                  width={120}
                  height={60}
                  className="inline-block mr-4 align-middle"
                />
                <span className="inline-block animate-letter" style={{ animationDelay: "1.1s" }}>
                  G
                </span>
                <span className="inline-block animate-letter" style={{ animationDelay: "1.2s" }}>
                  l
                </span>
                <span className="inline-block animate-letter" style={{ animationDelay: "1.3s" }}>
                  o
                </span>
                <span className="inline-block animate-letter" style={{ animationDelay: "1.4s" }}>
                  b
                </span>
                <span className="inline-block animate-letter" style={{ animationDelay: "1.5s" }}>
                  a
                </span>
                <span className="inline-block animate-letter" style={{ animationDelay: "1.6s" }}>
                  l
                </span>
                <span className="inline-block animate-letter" style={{ animationDelay: "1.7s" }}>
                  &nbsp;
                </span>
                <span className="inline-block">
                  <span className="inline-block animate-letter" style={{ animationDelay: "1.8s" }}>
                    S
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "1.9s" }}>
                    o
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "2.0s" }}>
                    f
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "2.1s" }}>
                    t
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "2.2s" }}>
                    w
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "2.3s" }}>
                    a
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "2.4s" }}>
                    r
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "2.5s" }}>
                    e
                  </span>
                </span>
                <br />
                <span className="inline-block">
                  <span className="inline-block animate-letter" style={{ animationDelay: "2.6s" }}>
                    S
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "2.7s" }}>
                    o
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "2.8s" }}>
                    l
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "2.9s" }}>
                    u
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "3.0s" }}>
                    t
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "3.1s" }}>
                    i
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "3.2s" }}>
                    o
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "3.3s" }}>
                    n
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "3.4s" }}>
                    s
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "3.5s" }}>
                    &nbsp;
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "3.6s" }}>
                    P
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "3.7s" }}>
                    a
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "3.8s" }}>
                    r
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "3.9s" }}>
                    t
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "4.0s" }}>
                    n
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "4.1s" }}>
                    e
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "4.2s" }}>
                    r
                  </span>
                  <span className="inline-block animate-letter" style={{ animationDelay: "4.3s" }}>
                    .
                  </span>
                </span>
              </h1>
            </div>
          </div>

          {/* Right Content - 30% width */}
          <div className="lg:w-[30%] space-y-8">
            <p data-aos="fade-up" data-aos-delay="600">
              We build intelligent systems that automate, optimize, and scale - trusted by global businesses for secure,
              AI-driven growth.
            </p>

            {/* Award Badges */}
            <div className="flex items-center gap-6" data-aos="fade-up" data-aos-delay="800">
              <Image
                src="/images/clutch-logo.webp"
                alt="Clutch Top IT Services India 2021"
                width={80}
                height={80}
                className="h-16 w-auto float-animation"
              />
              <Image
                src="/images/goodfirms-logo.webp"
                alt="GoodFirms Top Mobile App Development Company"
                width={80}
                height={80}
                className="h-16 w-auto float-animation"
              />
              <Image
                src="/images/guru-logo.webp"
                alt="Guru.com"
                width={80}
                height={80}
                className="h-16 w-auto float-animation"
              />
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-between bg-[var(--black)] text-white pl-8 pr-1 rounded-full btn-text btn-hover-enhanced group min-w-[220px] py-1"
              data-animate="zoom-in"
              data-delay="1000"
            >
              <span className="inline-flex items-center justify-between transition-all duration-300 group-hover:translate-x-1">
                Let's work together
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
    </section>
  )
}
