"use client"

import React from 'react';

export function ClientsSection() {
  const topRowLogos = [
    { name: 'Ab Forex', img: '/partners/ab.png' },
    { name: 'Gomindz Academy', img: '/partners/academy.webp' },
    { name: 'tendaba', img: '/partners/tendaba.webp' },
    { name: 'PMO', img: '/partners/PMO.png' },
    { name: 'NCCRM', img: '/partners/nccrm.png' },
    { name: 'Porek', img: '/partners/porek.webp' },
    { name: 'NCCP', img: '/partners/nccp.png' },
    { name: 'Modem Pay', img: '/partners/modem.png' },
    { name: 'NaNa', img: '/partners/nana.webp' },
    { name: 'Gicta', img: '/partners/gicta.png' },
    { name: 'Easy Financial', img: '/partners/easy_financial.png' },
    { name: 'Demz', img: '/partners/demz.png' },
    { name: 'Mops', img: '/partners/mops.png' },
    { name: 'Ecomansa', img: '/partners/ecomansa.webp' },
    { name: 'Aneked', img: '/partners/aneked.png' },
  ];

  // Middle row logos (sliding right)
  const middleRowLogos = [
    { name: 'Ab Forex', img: '/partners/ab.png' },
    { name: 'Gomindz Academy', img: '/partners/academy.webp' },
    { name: 'tendaba', img: '/partners/tendaba.webp' },
    { name: 'PMO', img: '/partners/PMO.png' },
    { name: 'NCCRM', img: '/partners/nccrm.png' },
    { name: 'Porek', img: '/partners/porek.webp' },
    { name: 'NCCP', img: '/partners/nccp.png' },
    { name: 'Modem Pay', img: '/partners/modem.png' },
    { name: 'NaNa', img: '/partners/nana.webp' },
    { name: 'Gicta', img: '/partners/gicta.png' },
    { name: 'Easy Financial', img: '/partners/easy_financial.png' },
    { name: 'Demz', img: '/partners/demz.png' },
    { name: 'Mops', img: '/partners/mops.png' },
    { name: 'Ecomansa', img: '/partners/ecomansa.webp' },
    { name: 'Aneked', img: '/partners/aneked.png' },
  ];

  // Bottom row logos (sliding left)
  const bottomRowLogos = [
    { name: 'Ab Forex', img: '/partners/ab.png' },
    { name: 'Gomindz Academy', img: '/partners/academy.webp' },
    { name: 'tendaba', img: '/partners/tendaba.webp' },
    { name: 'PMO', img: '/partners/PMO.png' },
    { name: 'NCCRM', img: '/partners/nccrm.png' },
    { name: 'Porek', img: '/partners/porek.webp' },
    { name: 'NCCP', img: '/partners/nccp.png' },
    { name: 'Modem Pay', img: '/partners/modem.png' },
    { name: 'NaNa', img: '/partners/nana.webp' },
    { name: 'Gicta', img: '/partners/gicta.png' },
    { name: 'Easy Financial', img: '/partners/easy_financial.png' },
    { name: 'Demz', img: '/partners/demz.png' },
    { name: 'Mops', img: '/partners/mops.png' },
    { name: 'Ecomansa', img: '/partners/ecomansa.webp' },
    { name: 'Aneked', img: '/partners/aneked.png' },
  ];

  // Duplicate arrays for seamless loop
  const topLogos = [...topRowLogos, ...topRowLogos, ...topRowLogos];
  const middleLogos = [...middleRowLogos, ...middleRowLogos, ...middleRowLogos];
  const bottomLogos = [...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos];

  return (
    <div className="bg-white flex items-center justify-center px-4 py-22 mt-20 overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-10 right-[-200px] h-[300px] w-[300px] rounded-full border-[25px] border-blue-950/5 animate-pulse" />
      
      <div className="w-full max-w-7xl">
        {/* Logos Container with Fade Edges */}
        <div className="relative">
          {/* Sphere/Radial Fade Gradient - Creates circular shadow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_30%,white/60_60%,white/95_85%,white_100%)] z-20 pointer-events-none" />
          
          {/* Top Fade Gradient - Maximum opacity */}
          <div className="absolute left-0 right-0 top-0 h-40 md:h-56 bg-gradient-to-b from-white via-white/95 to-transparent z-20 pointer-events-none" />
          
          {/* Bottom Fade Gradient - Further decreased opacity */}
          <div className="absolute left-0 right-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-white/55 via-white/25 to-transparent z-20 pointer-events-none" />
          
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white/95 via-white/70 to-transparent z-20 pointer-events-none" />
          
          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white/95 via-white/70 to-transparent z-20 pointer-events-none" />

          {/* Header - Above logos */}
          <div className="absolute -top-20 md:-top-24 left-0 right-0 text-center z-30">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-0">
              Trusted by <span className="text-blue-900">
                <br />
                Industry Leaders</span>
            </h1>
          </div>
          
          {/* Paragraph - Over first deck */}
          <div className="absolute top-2 md:top-3 left-0 right-0 text-center z-30">
            <p className="font-outfit text-[#161f2b] max-w-3xl mx-auto px-4">
              From startups to global enterprises, our work speaks through those who trust us. Explore the brands that chose excellence.
            </p>
          </div>

          <div className="space-y-10">
            {/* Top Row - Sliding Left */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left gap-6">
                {topLogos.map((logo, index) => (
                  <div
                    key={`top-${index}`}
                    className="flex-shrink-0 w-20 h-20 md:w-22 md:h-22 bg-white rounded-2xl flex items-center justify-center border border-gray-200 hover:scale-110 transition-all duration-300 p-3"
                  >
                    <img 
                      src={logo.img} 
                      alt={logo.name}
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                      style={{ 
                        filter: 'contrast(1.1) brightness(1)',
                        imageRendering: 'crisp-edges'
                        }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Row - Sliding Right - No opacity gradient applied, increased spacing */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right gap-10">
                {middleLogos.map((logo, index) => (
                  <div
                    key={`middle-${index}`}
                    className="flex-shrink-0 w-20 h-20 md:w-22 md:h-22 bg-white rounded-2xl flex items-center justify-center border border-gray-200 hover:scale-110 transition-all duration-300 p-3"
                  >
                    <img 
                      src={logo.img} 
                      alt={logo.name}
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                      style={{ 
                        filter: 'contrast(1.1) brightness(1.5)',
                        imageRendering: 'crisp-edges'
                        }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Sliding Left */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left-slow gap-6">
                {bottomLogos.map((logo, index) => (
                  <div
                    key={`bottom-${index}`}
                    className="flex-shrink-0 w-20 h-20 md:w-22 md:h-22 bg-white rounded-2xl flex items-center justify-center border border-gray-200 hover:scale-110 transition-all duration-300 p-3"
                  >
                    <img 
                      src={logo.img} 
                      alt={logo.name}
                      className="w-auto h-auto max-w-full max-h-full object-contain brightness-125"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-[-200px] h-[300px] w-[300px] rounded-full border-[25px] border-blue-950/5 animate-pulse" />

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-left-slow {
          animation: scroll-left-slow 28s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 26s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover,
        .animate-scroll-left-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}