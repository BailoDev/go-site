import React from 'react';

export function Clients() {
  // Top row logos (sliding left)
  const topRowLogos = [
    { name: 'Education', img: 'https://via.placeholder.com/120/1e88e5/ffffff?text=EDU' },
    { name: 'NaNA', img: 'https://via.placeholder.com/120/c62828/ffffff?text=NaNA' },
    { name: 'NCCRM', img: 'https://via.placeholder.com/120/2e7d32/ffffff?text=NCCRM' },
    { name: 'Porek', img: 'https://via.placeholder.com/120/f57c00/ffffff?text=POREK' },
    { name: 'TQ Design', img: 'https://via.placeholder.com/120/b71c1c/000000?text=TQ' },
    { name: 'Partner 1', img: 'https://via.placeholder.com/120/5e35b1/ffffff?text=P1' },
    { name: 'Partner 2', img: 'https://via.placeholder.com/120/00897b/ffffff?text=P2' },
    { name: 'Partner 3', img: 'https://via.placeholder.com/120/d84315/ffffff?text=P3' },
  ];

  // Middle row logos (sliding right)
  const middleRowLogos = [
    { name: 'Client 1', img: 'https://via.placeholder.com/120/1565c0/ffffff?text=C1' },
    { name: 'Client 2', img: 'https://via.placeholder.com/120/6a1b9a/ffffff?text=C2' },
    { name: 'Client 3', img: 'https://via.placeholder.com/120/00695c/ffffff?text=C3' },
    { name: 'Client 4', img: 'https://via.placeholder.com/120/c62828/ffffff?text=C4' },
    { name: 'Client 5', img: 'https://via.placeholder.com/120/558b2f/ffffff?text=C5' },
    { name: 'Client 6', img: 'https://via.placeholder.com/120/ef6c00/ffffff?text=C6' },
    { name: 'Client 7', img: 'https://via.placeholder.com/120/283593/ffffff?text=C7' },
    { name: 'Client 8', img: 'https://via.placeholder.com/120/ad1457/ffffff?text=C8' },
  ];

  // Bottom row logos (sliding left)
  const bottomRowLogos = [
    { name: 'Brand 1', img: 'https://via.placeholder.com/120/0277bd/ffffff?text=B1' },
    { name: 'Brand 2', img: 'https://via.placeholder.com/120/c2185b/ffffff?text=B2' },
    { name: 'Brand 3', img: 'https://via.placeholder.com/120/7b1fa2/ffffff?text=B3' },
    { name: 'Brand 4', img: 'https://via.placeholder.com/120/388e3c/ffffff?text=B4' },
    { name: 'Brand 5', img: 'https://via.placeholder.com/120/f57f17/ffffff?text=B5' },
    { name: 'Brand 6', img: 'https://via.placeholder.com/120/1976d2/ffffff?text=B6' },
    { name: 'Brand 7', img: 'https://via.placeholder.com/120/e64a19/ffffff?text=B7' },
    { name: 'Brand 8', img: 'https://via.placeholder.com/120/455a64/ffffff?text=B8' },
  ];

  // Duplicate arrays for seamless loop
  const topLogos = [...topRowLogos, ...topRowLogos, ...topRowLogos];
  const middleLogos = [...middleRowLogos, ...middleRowLogos, ...middleRowLogos];
  const bottomLogos = [...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="w-full max-w-7xl">
        {/* Logos Container with Fade Edges */}
        <div className="relative">
          {/* Top Fade Gradient - Balanced transparency */}
          <div className="absolute left-0 right-0 top-0 h-40 md:h-56 bg-gradient-to-b from-white/85 via-white/50 to-transparent z-20 pointer-events-none" />
          
          {/* Bottom Fade Gradient */}
          <div className="absolute left-0 right-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-white/85 via-white/50 to-transparent z-20 pointer-events-none" />
          
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white/85 via-white/50 to-transparent z-20 pointer-events-none" />
          
          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white/85 via-white/50 to-transparent z-20 pointer-events-none" />

          {/* Header - Above logos */}
          <div className="absolute -top-20 md:-top-24 left-0 right-0 text-center z-30">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4">
              Play in <span className="text-blue-600">25+ languages</span>
            </h1>
          </div>
          
          {/* Paragraph - Over first deck */}
          <div className="absolute top-4 md:top-6 left-0 right-0 text-center z-30">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              Show off your JavaScript skills in a Clash of Codes or
              brush up your Python while building a bot.
            </p>
          </div>

          <div className="space-y-8">
            {/* Top Row - Sliding Left */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left gap-6">
                {topLogos.map((logo, index) => (
                  <div
                    key={`top-${index}`}
                    className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200 hover:scale-110 hover:shadow-[0_8px_40px_rgba(37,99,235,0.2)] transition-all duration-300 p-3"
                  >
                    <img 
                      src={logo.img} 
                      alt={logo.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Row - Sliding Right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right gap-6">
                {middleLogos.map((logo, index) => (
                  <div
                    key={`middle-${index}`}
                    className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200 hover:scale-110 hover:shadow-[0_8px_40px_rgba(37,99,235,0.2)] transition-all duration-300 p-3"
                  >
                    <img 
                      src={logo.img} 
                      alt={logo.name}
                      className="w-full h-full object-contain"
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
                    className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200 hover:scale-110 hover:shadow-[0_8px_40px_rgba(37,99,235,0.2)] transition-all duration-300 p-3"
                  >
                    <img 
                      src={logo.img} 
                      alt={logo.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
};
