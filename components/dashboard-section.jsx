"use client"

import { useEffect, useRef, useState } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardSection() {
  const sectionRef = useRef(null)
  const [scale, setScale] = useState(0.7)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionMiddle = rect.top + rect.height / 2
      const windowMiddle = windowHeight / 2

      const distance = Math.abs(sectionMiddle - windowMiddle)
      const maxDistance = windowHeight

      const newScale = Math.max(0.7, Math.min(1.15, 1.15 - (distance / maxDistance) * 0.45))
      setScale(newScale)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        className="py-8 sm:py-12 md:py-16 overflow-hidden bg-gradient-to-b from-background to-secondary/10"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div
            className="relative transition-transform duration-500 ease-out mx-auto max-w-7xl"
            style={{ transform: `scale(${scale})` }}
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/modern-analytics-dashboard-with-charts-graphs-and-.jpg"
                alt="Analytics Dashboard"
                className="w-full h-auto object-cover"
              />

              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsVideoOpen(true)}
                  className="bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 shadow-xl hover:scale-110 transition-all duration-300"
                >
                  <Play className="w-10 h-10 sm:w-12 sm:h-12 fill-current ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
            >
              <X className="w-6 h-6" />
            </Button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Dashboard Overview Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}
