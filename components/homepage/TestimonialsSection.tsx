"use client"

import Image from "next/image"
import Link from "next/link"

const testimonialsData = [
  {
    id: 1,
    text: "Aquarious transformed our entire digital infrastructure. Their AI-powered solutions increased our operational efficiency by 40% within just three months. Exceptional team and outstanding results.",
    author: "Sarah Chen",
    location: "San Francisco, CA",
    rating: 5,
  },
  {
    id: 2,
    text: "Working with Aquarious has been a game-changer for our startup. They delivered a scalable platform that grew with us from 1K to 100K users seamlessly. Highly recommend their expertise.",
    author: "Marcus Rodriguez",
    location: "Austin, TX",
    rating: 5,
    isHighlighted: true,
  },
  {
    id: 3,
    text: "The level of innovation and technical excellence Aquarious brings is unmatched. They solved complex integration challenges that other agencies couldn't even approach.",
    author: "Emily Watson",
    location: "London, UK",
    rating: 5,
  },
  {
    id: 4,
    text: "From concept to deployment, Aquarious exceeded every expectation. Their global team delivered a world-class solution on time and under budget. True professionals.",
    author: "David Kim",
    location: "Seoul, South Korea",
    rating: 5,
  },
  {
    id: 5,
    text: "Aquarious doesn't just build software, they build partnerships. Their ongoing support and strategic insights have been invaluable to our company's growth.",
    author: "Isabella Santos",
    location: "São Paulo, Brazil",
    rating: 5,
  },
  {
    id: 6,
    text: "The AI solutions Aquarious developed for us have revolutionized how we serve our customers. ROI was evident within the first quarter of implementation.",
    author: "Ahmed Hassan",
    location: "Dubai, UAE",
    rating: 5,
  },
]

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonialsData)[0] }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg group ${
        testimonial.isHighlighted
          ? "bg-gradient-to-b from-[#C6ADFF] to-[#E1D4FF] text-white"
          : "bg-[#F6F7F9] hover:bg-gradient-to-b hover:from-[#C6ADFF] hover:to-[#E1D4FF] hover:text-white"
      } min-h-[280px] flex flex-col justify-between`}
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Image
          src="/images/quotation-mark.svg"
          alt="Quote"
          width={24}
          height={18}
          className={`transition-all duration-300 ${
            testimonial.isHighlighted ? "brightness-0 invert" : "group-hover:brightness-0 group-hover:invert"
          }`}
        />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 transition-all duration-300 ${
              testimonial.isHighlighted ? "text-white" : "text-[var(--brand-yellow)] group-hover:text-white"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p
        className={`text-sm leading-relaxed mb-6 flex-grow transition-all duration-300 ${
          testimonial.isHighlighted ? "text-white" : "text-gray-700 group-hover:text-white"
        }`}
      >
        {testimonial.text}
      </p>

      {/* Author Info */}
      <div
        className={`border-l-4 pl-4 transition-all duration-300 ${
          testimonial.isHighlighted ? "border-white" : "border-[var(--brand-blue)] group-hover:border-white"
        }`}
      >
        <p
          className={`font-medium transition-all duration-300 ${
            testimonial.isHighlighted ? "text-white" : "text-black group-hover:text-white"
          }`}
        >
          {testimonial.author}
        </p>
        <p
          className={`text-sm transition-all duration-300 ${
            testimonial.isHighlighted ? "text-white/80" : "text-gray-500 group-hover:text-white/80"
          }`}
        >
          {testimonial.location}
        </p>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-20 overflow-hidden lg:pb-0" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
          {/* Left Content */}
          <div
            className="lg:w-2/5 flex flex-col justify-between min-h-[600px]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div>
              {/* Badge */}
              <div className="mb-6">
                <span className="bg-[var(--brand-light-blue)] text-[var(--brand-dark-blue)] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  Testimonials
                </span>
              </div>

              {/* Heading */}
              <h2>They Chose Aquarious. Here's Why.</h2>
            </div>

            <div>
              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                Trusted by businesses worldwide to deliver real results – here's what our clients have to say.
              </p>

              {/* CTA Button */}
              <Link
                href="/testimonials"
                className="inline-flex items-center justify-between bg-[var(--black)] text-white pl-8 pr-1 rounded-full btn-text btn-hover-enhanced group min-w-[220px] py-1"
              >
                <span className="inline-flex items-center justify-between transition-all duration-300 group-hover:translate-x-1">
                  View testimonials
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

          {/* Right Content - Testimonials Marquee */}
          <div className="lg:w-3/5" data-aos="fade-left" data-aos-delay="400">
            <div className="relative h-[600px] overflow-hidden">
              {/* Column 1 */}
              <div className="absolute left-0 w-[48%] h-full">
                <div className="animate-marquee-up space-y-6">
                  {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                    <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div className="absolute right-0 w-[48%] h-full">
                <div className="animate-marquee-down space-y-6">
                  {[...testimonialsData.slice().reverse(), ...testimonialsData.slice().reverse()].map(
                    (testimonial, index) => (
                      <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
                    ),
                  )}
                </div>
              </div>

              {/* Gradient Overlays */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes marquee-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-marquee-up {
          animation: marquee-up 35s linear infinite;
        }

        .animate-marquee-down {
          animation: marquee-down 35s linear infinite;
        }
      `}</style>
    </section>
  )
}
