import Image from "next/image"
import Link from "next/link"

export default function BusinessScaleSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#E6F6FF] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            {/* First Column - Image */}
            <div className="relative h-full">
              <div className="relative rounded-3xl overflow-hidden h-full">
                <Image
                  src="/images/business-meeting.jpg"
                  alt="Professional business meeting"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover"
                />

                {/* Button overlay */}
                <div className="absolute bottom-8 left-8">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-between bg-white text-black pl-8 pr-1 rounded-full btn-text btn-hover-enhanced group min-w-[200px] py-1 shadow-lg"
                  >
                    <span className="inline-flex items-center justify-between transition-all duration-300 group-hover:translate-x-1">
                      Know our services
                    </span>
                    <div className="w-12 h-12 bg-[var(--black)] rounded-full flex items-center justify-center ml-4 transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110">
                      <svg
                        className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Second and Third Columns Merged - Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Heading */}
              <h3>
                From Fast-Growth Startups to Global Enterprises - We Build for Scale, Security, and Strategic Growth
              </h3>

              {/* Business Categories */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 pb-6 border-b border-[#B3B3B3]">
                  <h4 className="text-xl font-semibold text-black">Small & Emerging Businesses</h4>
                  <p className="text-gray-600 regular-text">
                    We help lean teams scale with automation and smart, low-overhead systems.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 pb-6 border-b border-[#B3B3B3]">
                  <h4 className="text-xl font-semibold text-black">Mid-Cap & Growth-Stage Companies</h4>
                  <p className="text-gray-600 regular-text">
                    We align systems and data with automation without disrupting operations.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 pb-6 border-b border-[#B3B3B3]">
                  <h4 className="text-xl font-semibold text-black">Enterprise & Global Teams</h4>
                  <p className="text-gray-600 regular-text">
                    We deliver secure, scalable systems built for compliance, performance, and global continuity.
                  </p>
                </div>
              </div>

              {/* Statistics and Awards Row */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pt-8">
                {/* Statistics */}
                <div className="flex gap-12">
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold text-[var(--brand-blue)] mb-2">150+</div>
                    <p className="text-gray-600 regular-text">Businesses Scaled Successfully</p>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold text-[var(--brand-blue)] mb-2">94%</div>
                    <p className="text-gray-600 regular-text">SLA Compliance Achieved</p>
                  </div>
                </div>

                {/* Award Badges */}
                <div className="flex items-center gap-6">
                  <Image
                    src="/images/clutch-logo.webp"
                    alt="Clutch Top IT Services"
                    width={80}
                    height={80}
                    className="h-16 w-auto float-animation"
                  />
                  <Image
                    src="/images/goodfirms-logo.webp"
                    alt="GoodFirms Top Development Company"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
