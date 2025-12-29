"use client"

import { useEffect, useRef } from "react"

export function KpiSection() {
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationId
    let position = 0

    const animate = () => {
      position -= 0.5
      if (slider) {
        slider.style.transform = `translateX(${position}px)`

        if (Math.abs(position) >= slider.scrollWidth / 2) {
          position = 0
        }
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const kpis = [
    { value: "142+", label: "New Features" },
    { value: "28K", label: "APP Download" },
    { value: "23K", label: "Happy Clients" },
    { value: "98%", label: "Positive rate" },
  ]

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-background to-secondary/10">
      {/* Animated Background Text Slider */}
      <div className="absolute inset-0 flex items-center overflow-hidden opacity-30">
        <div ref={sliderRef} className="flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 bg-clip-text text-transparent px-8">
                AI CHATBOT
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none z-20" />

      {/* KPI Cards */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className={`text-center p-6 sm:p-8 bg-transparent backdrop-blur-sm hover:bg-white/5 transition-all duration-300 ${
                index !== kpis.length - 1 ? "border-r border-gray-200/30" : ""
              } shadow-[0_8px_16px_rgba(0,0,0,0.1)]`}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                {kpi.value}
              </div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
