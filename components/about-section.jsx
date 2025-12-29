"use client"

export function AboutSection() {
  return (
    <section className="relative py-6 sm:py-16 md:py-20 overflow-hidden bg-white from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative">
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              <svg className="w-4 h-4 text-red-500" fill="#092A6B" viewBox="0 0 20 20">
                <path d="M10 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
              </svg>
              <span className="text-sm font-medium text-gray-900 tracking-wide">ABOUT US</span>
              <svg className="w-4 h-4 text-red-500" fill="#092A6B" viewBox="0 0 20 20">
                <path d="M10 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-sans text-gray-800 text-center mb-12 sm:mb-16 md:mb-20 leading-tight max-w-6xl mx-auto">
            Our team of data scientists, engineers, and designers work at the intersection technology and{" "} strategy turning complex challenges into simple powered solutions.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-[#F5F8FD] from-[#F5F8FD]/80 to-[#94b6e2]/80 backdrop-blur-xl border border-white/60 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 hover:from-white/90 hover:to-gray-100/90 transition-all group shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Seamless</h3>
                  <h3 className="text-sm font-medium text-gray-600">Integration</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">298+</div>
              <div className="flex items-end gap-2 h-16">
                <div className="w-3 h-8 bg-[#68a1c7] rounded-full relative overflow-hidden">
                  <div className="absolute bottom-0 w-full h-1/2 bg-[#092a6b] rounded-full" />
                </div>
                <div className="w-3 h-12 bg-gray-200 rounded-full" />
                <div className="w-3 h-10 bg-[#68a1c7] rounded-full relative overflow-hidden">
                  <div className="absolute bottom-0 w-full h-2/3 bg-[#092a6b] rounded-full" />
                </div>
                <div className="w-3 h-6 bg-gray-200 rounded-full" />
                <div className="w-3 h-14 bg-[#68a1c7] rounded-full relative overflow-hidden">
                  <div className="absolute bottom-0 w-full h-3/4 bg-[#092a6b] rounded-full" />
                </div>
              </div>
            </div>

            <div className="bg-[#F5F8FD] from-white/80 to-gray-100/80 backdrop-blur-xl border border-white/60 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 hover:from-white/90 hover:to-gray-100/90 transition-all group shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">AI Projects</h3>
                  <h3 className="text-sm font-medium text-gray-600">Delivered</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-colors">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">978+</div>
              <div className="relative h-16">
                <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <path d="M 0 40 Q 50 35 100 30 T 200 20" fill="none" stroke="#092A6B" strokeWidth="2" opacity="0.8" />
                  <circle cx="180" cy="22" r="3" fill="bg-gray-200" />
                  <text x="185" y="18" fill="#fff" fontSize="10" fontWeight="bold">
                    error
                  </text>
                </svg>
              </div>
            </div>

            <div className="bg-[#F5F8FD] from-white/80 to-gray-100/80 backdrop-blur-xl border border-white/60 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 hover:from-white/90 hover:to-gray-100/90 transition-all group shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Handled by AI</h3>
                  <h3 className="text-sm font-medium text-gray-600">Bots</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="#092A6B" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">300%</div>
              <div className="relative h-16">
                <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <polyline
                    points="0,50 40,45 80,40 120,35 160,25 200,20"
                    fill="none"
                    stroke="#092A6B"
                    strokeWidth="2"
                    opacity="0.8"
                  />
                  <circle cx="40" cy="45" r="2" fill="bg-gray-200" />
                  <circle cx="80" cy="40" r="2" fill="bg-gray-200" />
                  <circle cx="120" cy="35" r="2" fill="bg-gray-200" />
                  <circle cx="160" cy="25" r="2" fill="bg-gray-200" />
                  <circle cx="200" cy="20" r="2" fill="bg-gray-200" />
                </svg>
              </div>
            </div>

            <div className="bg-[#F5F8FD] from-white/80 to-gray-100/80 backdrop-blur-xl border border-white/60 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 hover:from-white/90 hover:to-gray-100/90 transition-all group shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Faster Time to</h3>
                  <h3 className="text-sm font-medium text-gray-600">Market</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:from-emerald-200 group-hover:to-teal-200 transition-colors">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">95X</div>
              <div className="flex items-end gap-2 h-16 justify-end">
                <div className="w-3 h-6 bg-gray-200 rounded-sm" />
                <div className="w-3 h-8 bg-gray-200 rounded-sm" />
                <div className="w-3 h-10 bg-gray-200 rounded-sm" />
                <div className="w-3 h-12 bg-gray-200 rounded-sm" />
                <div className="w-3 h-14 bg-gray-200 rounded-sm" />
                <div className="w-3 h-16 bg-[#092A6B] rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
