"use client"

import { useState, useEffect } from 'react'

export default function HeroSection() {
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
      
      <section 
        className="relative min-h-[90vh] overflow-hidden bg-slate-900"
        aria-labelledby="hero-heading"
      >
        {/* Background - Same as home page */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{
              backgroundImage: `url('/professional-business-people-presenting-data-analy.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-transparent" />
          
          {/* Custom blue gradient overlay - #0863e4 - Same as home page */}
          <div 
            className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t to-transparent h-3/4"
            style={{
              background: 'linear-gradient(to top, rgba(8, 99, 228, 0.85), transparent)'
            }}
          />
        </div>

        {/* Animated vertical glowing lines - Same as home page */}
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

        {/* Main content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge - White text on blue background */}
            <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6 xs:mb-8">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-xs xs:text-sm font-medium text-blue-200" style={{ fontFamily: 'Geist, system-ui, -apple-system, sans-serif' }}>
                Projects By Gomindz 
              </span>
            </div>
            
            {/* Main heading - White text with Geist font */}
            <h1 
              id="hero-heading"
              className="font-bold mb-6 xs:mb-8 leading-tight text-white px-4"
              style={{
                fontSize: 'clamp(28px, 7vw, 60px)'
              }}
            >
              Transforming Industries
              <span className="block mt-2 xs:mt-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Through Innovation
              </span>
            </h1>
            
            {/* Subheading - White text with Geist font */}
            <p 
              className="mb-4 xs:mb-6 max-w-4xl mx-auto leading-relaxed text-blue-50 px-4"
              style={{
                fontSize: 'clamp(14px, 2.5vw, 18px)'
              }}
            >
              Explore our portfolio of AI, Data Science, and Software Development projects that drive measurable business outcomes.
            </p>
          </div>
          
          {/* Scroll indicator - White text */}
          <div className="flex justify-center mt-12 xs:mt-16">
            <div 
              className="flex flex-col items-center gap-2 transition-colors cursor-pointer group text-white hover:text-blue-300"
              role="button"
              tabIndex={0}
              aria-label="Scroll down to view projects"
              onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                }
              }}
            >
              <span className="text-xs xs:text-sm font-medium">
                Explore Projects
              </span>
              <svg 
                className="w-5 h-5 xs:w-6 xs:h-6 animate-bounce" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
          <svg viewBox="0 0 1440 100" className="w-full h-[50px] sm:h-[60px] md:h-[80px] lg:h-[100px]" preserveAspectRatio="none">
            <path fill="white" d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </section>
    </>
  )
}