"use client"

import { useState } from "react"

const testimonials = [
  {
    id: 1,
    quote:
      "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode.",
    client: "Becky Nelson",
    role: "Marketing Director",
    avatar: "/professional-woman-smiling.png",
    rating: 5,
    floatingAvatars: [
      { src: "/business-man-1.png", position: "top-8 left-[5%]" },
      { src: "/business-woman-2.jpg", position: "top-20 left-[15%]" },
      { src: "/professional-man-3.png", position: "top-[35%] left-[2%]" },
      { src: "/business-woman-4.jpg", position: "top-8 right-[5%]" },
      { src: "/professional-man-5.jpg", position: "top-24 right-[18%]" },
      { src: "/business-man-6.jpg", position: "top-[40%] right-[3%]" },
      { src: "/professional-woman-7.jpg", position: "bottom-24 left-[12%]" },
      { src: "/business-man-8.jpg", position: "bottom-20 right-[15%]" },
    ],
  },
  {
    id: 2,
    quote:
      "Working with TechForge has transformed our business operations. Their AI-powered solutions have increased our productivity significantly.",
    client: "John Mitchell",
    role: "CTO, Tech Innovations",
    avatar: "/professional-man-smiling-glasses.jpg",
    rating: 5,
    floatingAvatars: [
      { src: "/tech-professional-1.jpg", position: "top-4 left-8" },
      { src: "/developer-woman-2.jpg", position: "top-12 left-24" },
      { src: "/engineer-man-3.jpg", position: "top-20 left-2" },
      { src: "/data-scientist-4.jpg", position: "top-4 right-8" },
      { src: "/tech-lead-5.jpg", position: "top-12 right-28" },
      { src: "/software-engineer-6.jpg", position: "top-28 right-4" },
      { src: "/developer-woman-7.jpg", position: "bottom-20 left-12" },
      { src: "/tech-manager-8.jpg", position: "bottom-28 right-16" },
    ],
  },
  {
    id: 3,
    quote:
      "The team's expertise in data science helped us unlock insights we never knew existed. Their platform has become indispensable.",
    client: "Sarah Chen",
    role: "Director of Analytics",
    avatar: "/asian-woman-professional-smiling.jpg",
    rating: 5,
    floatingAvatars: [
      { src: "/placeholder.svg?height=60&width=60", position: "top-4 left-8" },
      { src: "/placeholder.svg?height=60&width=60", position: "top-12 left-24" },
      { src: "/placeholder.svg?height=50&width=50", position: "top-20 left-2" },
      { src: "/placeholder.svg?height=60&width=60", position: "top-4 right-8" },
      { src: "/placeholder.svg?height=60&width=60", position: "top-12 right-28" },
      { src: "/placeholder.svg?height=60&width=60", position: "top-28 right-4" },
      { src: "/placeholder.svg?height=50&width=50", position: "bottom-20 left-12" },
      { src: "/placeholder.svg?height=60&width=60", position: "bottom-28 right-16" },
    ],
  },
  {
    id: 4,
    quote:
      "TechForge delivered exceptional results beyond our expectations. Their innovative approach has made them our go-to technology partner.",
    client: "David Rodriguez",
    role: "VP of Engineering",
    avatar: "/placeholder.svg?height=120&width=120",
    rating: 5,
    floatingAvatars: [
      { src: "/placeholder.svg?height=60&width=60", position: "top-4 left-8" },
      { src: "/placeholder.svg?height=60&width=60", position: "top-12 left-24" },
      { src: "/placeholder.svg?height=50&width=50", position: "top-20 left-2" },
      { src: "/placeholder.svg?height=60&width=60", position: "top-4 right-8" },
      { src: "/placeholder.svg?height=60&width=60", position: "top-12 right-28" },
      { src: "/placeholder.svg?height=60&width=60", position: "top-28 right-4" },
      { src: "/placeholder.svg?height=50&width=50", position: "bottom-20 left-12" },
      { src: "/placeholder.svg?height=60&width=60", position: "bottom-28 right-16" },
    ],
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useState(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleAvatarClick = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="relative py-24 md:py-40 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-200/15 to-blue-200/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-blue-300/10 to-purple-300/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#092A6B]">What Our Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Our Clients send us bunch of smiles with our services and we love them
          </p>
        </div>

        {/* Testimonial Card with Floating Avatars */}
        <div className="relative max-w-6xl mx-auto min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center">
          {/* Floating Avatar Circles */}
          <div className="absolute inset-0">
            {current.floatingAvatars.map((avatar, index) => (
              <div
                key={index}
                className={`absolute ${avatar.position} transition-all duration-700 ${
                  isAnimating ? "opacity-0 scale-50" : "opacity-100 scale-100"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative group cursor-pointer hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                  <img
                    src={avatar.src || "/placeholder.svg"}
                    alt="Client avatar"
                    className="relative w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-xl object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Center Content Card */}
          <div
            className={`relative z-20 max-w-3xl mx-auto px-8 transition-all duration-600 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Large Central Avatar */}
            <div className="flex justify-center mb-10 relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse" />
                <img
                  src={current.avatar || "/placeholder.svg"}
                  alt={current.client}
                  className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full border-[6px] border-white shadow-2xl object-cover"
                />
              </div>
            </div>

            {/* Quote */}
            <div className="relative mb-12">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[120px] md:text-[140px] font-serif text-purple-300/30 leading-none">
                "
              </div>
              <p className="relative text-gray-700 text-xl md:text-2xl lg:text-3xl leading-relaxed text-center italic px-4 md:px-12 py-8">
                {current.quote}
              </p>
            </div>

            {/* Client Info */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#092A6B] mb-2">{current.client}</h3>
              <p className="text-gray-600 text-base md:text-lg">{current.role}</p>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center gap-2 mb-10">
              {[...Array(current.rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 md:w-7 md:h-7 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleAvatarClick(index)}
                  disabled={isAnimating}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#092A6B] to-blue-600 w-12 h-3 shadow-lg"
                      : "bg-gray-300 w-3 h-3 hover:bg-gray-400 hover:w-8"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
