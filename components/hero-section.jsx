"use client"

import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [lines, setLines] = useState([])

  useEffect(() => {
    // Generate random vertical lines
    const generateLines = () => {
      return Array.from({ length: 5 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2,
      }))
    }
    setLines(generateLines())

    // Regenerate lines periodically
    const interval = setInterval(() => {
      setLines(generateLines())
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          45% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          55% {
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        .animate-slide-down {
          animation: slideDown linear infinite;
        }
      `}} />
      
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pb-[50px] sm:pb-[60px] md:pb-[80px] lg:pb-[100px]">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{
              // backgroundImage: `url('/kawsu-presentation.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-transparent" />
          
          {/* Custom blue gradient overlay - #0863e4 */}
          <div 
            className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t to-transparent h-3/4"
            style={{
              background: 'linear-gradient(to top, rgba(8, 99, 228, 0.85), transparent)'
            }}
          />
        </div>

        {/* Animated vertical glowing lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {lines.map((line) => (
            <div
              key={line.id}
              className="absolute top-0 w-px h-full opacity-0 animate-slide-down"
              style={{
                left: `${line.left}%`,
                animationDelay: `${line.delay}s`,
                animationDuration: `${line.duration}s`,
                background: 'linear-gradient(to bottom, transparent, rgba(147, 197, 253, 0.8), transparent)',
                boxShadow: '0 0 10px rgba(147, 197, 253, 0.6), 0 0 20px rgba(147, 197, 253, 0.4)',
              }}
            />
          ))}
        </div>

        {/* Content Container - Fixed to prevent overlap */}
        <div className="relative z-10 w-full h-full flex flex-col">
          {/* Text Content - Takes up top portion */}
          <div className="flex-1 flex items-center justify-center pt-20 xs:pt-24 sm:pt-24 md:pt-28 pb-4 xs:pb-6 sm:pb-12 md:pb-16">
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-3 xs:mb-4 sm:mb-6 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
                  <span className="font-sans text-[10px] xs:text-xs sm:text-sm font-medium text-blue-200">Powered by Gomindz_Inc</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 xs:mb-4 sm:mb-4 px-2 xs:px-4">
                  Transform Data Into Intelligence.
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                    Build Software That Scales.
                  </span>
                </h1>

                {/* Two attention-grabbing lines */}
                <div className="max-w-3xl mx-auto px-2 xs:px-4">
                  <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-blue-50 leading-relaxed font-light">
                    We turn raw data into predictive intelligence and ideas into scalable software.
                  </p>
                  <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-white leading-relaxed font-medium mt-2 xs:mt-2 sm:mt-2">
                    AI-powered insights. Data-driven decisions. Software that evolves with you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Space - Fixed height for dashboard */}
          <div className="relative h-[160px] xs:h-[200px] sm:h-[280px] md:h-[340px] lg:h-[400px] xl:h-[450px]">
            {/* Dashboard Preview - Positioned with 3/4 visible */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[25%] z-20 w-[92%] sm:w-[88%] md:w-[85%] lg:w-[90%] xl:w-full max-w-6xl px-3 sm:px-4">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white">
                <img
                  src="/ministry of fishries.jpg"
                  alt="CRM Dashboard Preview"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Decorative glow effect */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-2xl sm:blur-3xl -z-10 opacity-70" />
            </div>
          </div>
        </div>

        {/* Wave SVG - Now outside main content container and fixed at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
          <svg viewBox="0 0 1440 100" className="w-full h-[50px] sm:h-[60px] md:h-[80px] lg:h-[100px]" preserveAspectRatio="none">
            <path fill="white" d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>
    </>
  )
}