"use client"

import { Sparkles, Rocket, Target, TrendingUp, Zap, Star } from "lucide-react"

export default function CallToAction() {
  return (
    <div className="relative w-full flex items-center justify-center p-6 md:p-12 font-['Outfit',sans-serif] isolate">
      <div className="relative w-full max-w-6xl bg-[#3352a7] rounded-3xl p-12 md:p-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Fine grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Diagonal lines pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.08) 35px, rgba(255,255,255,0.08) 70px)",
            }}
          ></div>

          {/* Subtle dots pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          {/* Soft gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/15 rounded-full blur-2xl"></div>
        </div>

        {/* Top left icons */}
        <div className="absolute top-12 left-16 text-white/30 animate-float" style={{ animationDelay: "0s" }}>
          <Rocket className="w-10 h-10" />
        </div>
        <div className="absolute top-32 left-32 text-white/20 animate-float-slow" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-6 h-6" />
        </div>

        {/* Top right icons */}
        <div className="absolute top-20 right-20 text-white/30 animate-float" style={{ animationDelay: "0.5s" }}>
          <Target className="w-9 h-9" />
        </div>
        <div className="absolute top-40 right-32 text-white/25 animate-float-slow" style={{ animationDelay: "1.5s" }}>
          <Star className="w-7 h-7" />
        </div>

        {/* Bottom left icons */}
        <div className="absolute bottom-24 left-20 text-white/30 animate-float-slow" style={{ animationDelay: "0.8s" }}>
          <TrendingUp className="w-10 h-10" />
        </div>
        <div className="absolute bottom-40 left-40 text-white/20 animate-float" style={{ animationDelay: "2s" }}>
          <Sparkles className="w-6 h-6" />
        </div>

        {/* Bottom right icons */}
        <div className="absolute bottom-20 right-24 text-white/30 animate-float" style={{ animationDelay: "1.2s" }}>
          <Zap className="w-9 h-9" />
        </div>
        <div
          className="absolute bottom-36 right-36 text-white/25 animate-float-slow"
          style={{ animationDelay: "0.3s" }}
        >
          <Star className="w-7 h-7" />
        </div>

        {/* Decorative corner dots */}
        <div className="absolute top-12 left-12 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute top-12 left-20 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
        <div className="absolute top-20 left-12 w-1.5 h-1.5 bg-white/20 rounded-full"></div>

        <div className="absolute top-12 right-12 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute top-12 right-20 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
        <div className="absolute top-20 right-12 w-1.5 h-1.5 bg-white/20 rounded-full"></div>

        <div className="absolute bottom-12 left-12 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-12 left-20 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-12 w-1.5 h-1.5 bg-white/20 rounded-full"></div>

        <div className="absolute bottom-12 right-12 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-12 right-20 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-12 w-1.5 h-1.5 bg-white/20 rounded-full"></div>

        {/* Decorative lines */}
        <div className="absolute top-8 left-8 right-8 h-px bg-white/10"></div>
        <div className="absolute bottom-8 left-8 right-8 h-px bg-white/10"></div>
        <div className="absolute top-8 bottom-8 left-8 w-px bg-white/10"></div>
        <div className="absolute top-8 bottom-8 right-8 w-px bg-white/10"></div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-lg"></div>
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-lg"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-lg"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-lg"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-lg text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Start Today
          </div>

          <h1 className="text-[48px] font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Contact us for quick, actionable insights
          </h1>

          <p className="text-white/90 font-outfit text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's turn your data into one of your most powerful assets.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
