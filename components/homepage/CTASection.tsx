import Image from "next/image"

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 min-h-[400px] lg:min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/complex-problems-bg.png"
              alt="Business team collaboration"
              fill
              className="object-cover object-center hidden lg:block"
              priority
            />
            <Image
              src="/images/complex-problems-mobile-bg.jpg"
              alt="Business team collaboration"
              fill
              className="object-cover object-center block lg:hidden"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-12 min-h-[400px] lg:min-h-[500px]">
            {/* Top - Heading */}
            <div className="text-left">
              <h2 className="text-white text-balance mb-10">Complex Problems. Elegant Solutions. Scalable Outcomes.</h2>
            </div>

            {/* Mobile Layout - Vertical Stack */}
            <div className="flex flex-col items-center gap-8 lg:hidden">
              {/* Rating Badges - Mobile */}
              <div className="flex flex-row gap-4 w-full max-w-sm">
                {/* Clutch Badge */}
                <div className="flex items-center gap-3 bg-white rounded-full px-1 py-1 shadow-sm flex-1">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Image src="/images/clutch-icon.svg" alt="Clutch" width={60} height={60} />
                  </div>
                  <div className="flex flex-col pr-4">
                    <span className="text-sm text-gray-600 font-medium">4.8 ⭐</span>
                    <span className="text-xs text-gray-500">200+ Reviews</span>
                  </div>
                </div>

                {/* Google Badge */}
                <div className="flex items-center gap-3 bg-white rounded-full px-1 py-1 shadow-sm flex-1">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                    <Image src="/images/google-icon.svg" alt="Google" width={60} height={60} />
                  </div>
                  <div className="flex flex-col pr-4">
                    <span className="text-sm text-gray-600 font-medium">4.9 ⭐</span>
                    <span className="text-xs text-gray-500">150+ Reviews</span>
                  </div>
                </div>
              </div>

              {/* CTA Button - Mobile */}
              <div className="w-full max-w-sm">
                <button className="group inline-flex items-center justify-between bg-white text-black pl-6 sm:pl-8 pr-1 rounded-full btn-text btn-hover-enhanced w-full py-1 hover:bg-gray-50 transition-all duration-300">
                  <span className="inline-flex items-center justify-between transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base">
                    Get in touch!
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

            {/* Desktop Layout - Horizontal */}
            <div className="hidden lg:flex flex-row items-end justify-between gap-8">
              {/* CTA Button - Desktop */}
              <div className="flex justify-start">
                <button className="group inline-flex items-center justify-between bg-white text-black pl-6 sm:pl-8 pr-1 rounded-full btn-text btn-hover-enhanced min-w-[200px] sm:min-w-[220px] py-1 hover:bg-gray-50 transition-all duration-300">
                  <span className="inline-flex items-center justify-between transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base">
                    Get in touch!
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

              {/* Rating Badges - Desktop */}
              <div className="flex flex-row gap-6">
                {/* Clutch Badge */}
                <div className="flex items-center gap-3 bg-white rounded-full px-1 py-1 shadow-sm">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Image src="/images/clutch-icon.svg" alt="Clutch" width={60} height={60} />
                  </div>
                  <div className="flex flex-col pr-4">
                    <span className="text-sm text-gray-600 font-medium">Rating 4.8</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-red-500" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Google Badge */}
                <div className="flex items-center gap-3 bg-white rounded-full px-1 py-1 shadow-sm">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                    <Image src="/images/google-icon.svg" alt="Google" width={60} height={60} />
                  </div>
                  <div className="flex flex-col pr-4">
                    <span className="text-sm text-gray-600 font-medium">Rating 4.9</span>
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
          </div>
        </div>
      </div>
    </section>
  )
}
