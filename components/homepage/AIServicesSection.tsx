"use client"

const aiServices = [
  {
    id: 1,
    title: "Workflow Automation",
    description: "Automate business processes to reduce manual effort and accelerate delivery across teams.",
    icon: <div className="w-3 h-3 bg-current rounded-full transition-all duration-300"></div>,
  },
  {
    id: 2,
    title: "AI Voice Assistants",
    description: "Deploy multilingual, intent-aware voice bots to streamline customer support and outbound engagement.",
    icon: (
      <div className="flex items-end gap-0.5 transition-all duration-300">
        <div className="w-1 h-2 bg-current rounded-sm animate-pulse" style={{ animationDelay: "0ms" }}></div>
        <div className="w-1 h-4 bg-current rounded-sm animate-pulse" style={{ animationDelay: "150ms" }}></div>
        <div className="w-1 h-6 bg-current rounded-sm animate-pulse" style={{ animationDelay: "300ms" }}></div>
        <div className="w-1 h-4 bg-current rounded-sm animate-pulse" style={{ animationDelay: "450ms" }}></div>
        <div className="w-1 h-2 bg-current rounded-sm animate-pulse" style={{ animationDelay: "600ms" }}></div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Data & AI Integrations",
    description:
      "Extract, categorize, and interpret structured and unstructured documents using AI-powered OCR and NLP.",
    icon: <div className="w-3 h-3 bg-current rounded-full transition-all duration-300"></div>,
  },
  {
    id: 4,
    title: "Lead Qualification Bots",
    description:
      "Train and deploy domain-specific ML models to solve unique challenges across finance, healthcare, logistics, and more.",
    icon: <div className="w-3 h-3 bg-current rounded-full transition-all duration-300"></div>,
  },
]

export default function AIServicesSection() {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <style jsx>{`
        @keyframes intenseSoundWave {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1.5); }
        }
        @keyframes fastSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes intensePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        @keyframes dynamicBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          25% { transform: translateY(-8px) scale(1.1); }
          50% { transform: translateY(-12px) scale(1.15); }
          75% { transform: translateY(-4px) scale(1.05); }
        }
        @keyframes flowingWave1 {
          0% { 
            transform: translateX(-100px) translateY(0px);
            opacity: 0.3;
          }
          50% { 
            transform: translateX(0px) translateY(-8px);
            opacity: 0.6;
          }
          100% { 
            transform: translateX(100px) translateY(0px);
            opacity: 0.3;
          }
        }
        @keyframes flowingWave2 {
          0% { 
            transform: translateX(-120px) translateY(5px) scaleY(0.8);
            opacity: 0.2;
          }
          50% { 
            transform: translateX(20px) translateY(-5px) scaleY(1.2);
            opacity: 0.5;
          }
          100% { 
            transform: translateX(140px) translateY(5px) scaleY(0.8);
            opacity: 0.2;
          }
        }
        @keyframes flowingWave3 {
          0% { 
            transform: translateX(-80px) translateY(-3px) scaleX(0.9);
            opacity: 0.4;
          }
          50% { 
            transform: translateX(40px) translateY(6px) scaleX(1.1);
            opacity: 0.7;
          }
          100% { 
            transform: translateX(160px) translateY(-3px) scaleX(0.9);
            opacity: 0.4;
          }
        }
        .sound-wave-bar {
          animation: intenseSoundWave 1s ease-in-out infinite;
        }
        .fast-spin {
          animation: fastSpin 1.5s linear infinite;
        }
        .intense-pulse {
          animation: intensePulse 1.2s ease-in-out infinite;
        }
        .dynamic-bounce {
          animation: dynamicBounce 1.8s ease-in-out infinite;
        }
        .flowing-wave-1 {
          animation: flowingWave1 8s ease-in-out infinite;
        }
        .flowing-wave-2 {
          animation: flowingWave2 10s ease-in-out infinite;
        }
        .flowing-wave-3 {
          animation: flowingWave3 12s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <svg className="absolute top-12 left-8 w-96 h-64 opacity-80" viewBox="0 0 384 256" fill="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A2FF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#00A2FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00A2FF" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A2FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00A2FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#00A2FF" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A2FF" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#00A2FF" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#00A2FF" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A2FF" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#00A2FF" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#00A2FF" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* First wave - starts high, flows down and across */}
          <path
            d="M-50 60C20 50 60 90 120 80C180 70 220 110 280 100C340 90 380 130 450 120"
            stroke="url(#waveGradient1)"
            strokeWidth="2"
            fill="none"
            className="flowing-wave-1"
          />

          {/* Second wave - intersects with first, deeper curves */}
          <path
            d="M-60 100C0 120 40 80 100 100C160 120 200 80 260 100C320 120 360 80 420 100C480 120 520 80 580 100"
            stroke="url(#waveGradient2)"
            strokeWidth="1.5"
            fill="none"
            className="flowing-wave-2"
          />

          {/* Third wave - crosses through middle, gentle flow */}
          <path
            d="M-40 130C20 110 80 150 140 130C200 110 260 150 320 130C380 110 440 150 500 130"
            stroke="url(#waveGradient3)"
            strokeWidth="1.8"
            fill="none"
            className="flowing-wave-3"
          />

          <path
            d="M-30 90C30 140 90 70 150 120C210 170 270 50 330 100C390 150 450 30 510 80"
            stroke="url(#waveGradient4)"
            strokeWidth="1.3"
            fill="none"
            className="flowing-wave-1"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative mb-12">
          <div className="flex gap-[5%] items-center mb-8">
            {/* Left Content - 30% width */}
            <div className="w-[30%]">
              <h5 className="text-gray-800 text-lg lg:text-xl leading-relaxed">
                Our AI services help enterprises accelerate, reduce costs & stay future ready.
              </h5>
            </div>

            {/* Right Content - 65% width with gradient background */}
            <div className="w-[65%] relative">
              <div className="text-center sm:text-left mb-8 z-2 relative">
                <span className="bg-[var(--brand-light-blue)] text-[var(--brand-dark-blue)] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  AI Automation Capabilities
                </span>
                <h2 className="text-black mt-4 -mb-15">
                  From Voice Assistants to Predictive
                  <span className="inline-block bg-white text-black px-4 pb-8 rounded-full">Systems</span>
                </h2>
              </div>
              <div className="relative rounded-3xl p-8 lg:p-10 overflow-hidden min-h-[300px] flex flex-col justify-between">
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

                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="relative">
            <div className="absolute top-9 left-0 right-0 h-px bg-gray-300 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mt-16">
              {aiServices.map((service, index) => (
                <div key={service.id} className="group p-6 transition-all duration-300 cursor-pointer relative">
                  <div className="relative mb-4 flex justify-start">
                    {/* Circle with brand blue background and border */}
                    <div className="w-6 h-6 bg-[#B8E5FF] group-hover:bg-[var(--brand-blue)] opacity-100 rounded-full border-[5px] border-[#E6F6FF] transition-all duration-300 relative z-10"></div>

                    <div className="absolute -top-8 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[var(--brand-blue)]">
                      {index === 0 && (
                        // Workflow Automation - Faster rotating gear
                        <div className="w-6 h-6 relative">
                          <div className="absolute top-1 left-1 w-2 h-2 bg-current rounded-full animate-pulse"></div>
                          <div
                            className="absolute top-1 right-1 w-2 h-2 bg-current rounded-full animate-pulse"
                            style={{ animationDelay: "0.3s" }}
                          ></div>
                          <div
                            className="absolute bottom-1 left-2 w-2 h-2 bg-current rounded-full animate-pulse"
                            style={{ animationDelay: "0.6s" }}
                          ></div>
                          <div className="absolute top-2 left-2 w-3 h-0.5 bg-current fast-spin origin-left"></div>
                          <div
                            className="absolute top-2 right-2 w-3 h-0.5 bg-current fast-spin origin-right"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                        </div>
                      )}
                      {index === 1 && (
                        // AI Voice Assistants - More intense sound waves with dramatic scaling
                        <div className="flex items-end gap-0.5">
                          <div
                            className="w-1 h-2 bg-current rounded-sm sound-wave-bar"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-1 h-4 bg-current rounded-sm sound-wave-bar"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-1 h-6 bg-current rounded-sm sound-wave-bar"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                          <div
                            className="w-1 h-4 bg-current rounded-sm sound-wave-bar"
                            style={{ animationDelay: "450ms" }}
                          ></div>
                          <div
                            className="w-1 h-2 bg-current rounded-sm sound-wave-bar"
                            style={{ animationDelay: "600ms" }}
                          ></div>
                        </div>
                      )}
                      {index === 2 && (
                        // Data & AI Integrations - Intense pulsing database icon
                        <div className="w-6 h-6 relative">
                          <div className="w-4 h-4 border-2 border-current rounded-sm intense-pulse mx-auto mt-1"></div>
                          <div className="absolute top-0 left-2 w-2 h-1 bg-current rounded-sm"></div>
                          <div className="absolute bottom-0 left-2 w-2 h-1 bg-current rounded-sm"></div>
                        </div>
                      )}
                      {index === 3 && (
                        // Lead Qualification Bots - New modern animated target/funnel icon
                        <div className="w-6 h-6 relative">
                          {/* Animated target rings */}
                          <div className="absolute inset-0 border-2 border-current rounded-full animate-ping opacity-75"></div>
                          <div
                            className="absolute inset-1 border border-current rounded-full animate-ping opacity-50"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                          <div
                            className="absolute inset-2 w-2 h-2 bg-current rounded-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                          ></div>
                          {/* Flowing particles */}
                          <div
                            className="absolute -top-1 left-2 w-1 h-1 bg-current rounded-full animate-bounce opacity-60"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="absolute top-2 -right-1 w-1 h-1 bg-current rounded-full animate-bounce opacity-60"
                            style={{ animationDelay: "0.7s" }}
                          ></div>
                          <div
                            className="absolute -bottom-1 left-1 w-1 h-1 bg-current rounded-full animate-bounce opacity-60"
                            style={{ animationDelay: "1.2s" }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[var(--brand-blue)] mb-3 transition-colors duration-300 text-left">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-[var(--brand-blue)] text-sm leading-relaxed transition-colors duration-300 text-left">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
