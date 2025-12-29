import { Target, Zap, ShieldCheck, TrendingUp, Users, Award } from "lucide-react"

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 pb-16 sm:pb-20 md:pb-24 bg-white overflow-hidden">
      <div className="absolute top-[-80px] left-[-200px] h-[500px] w-[500px] rounded-full border-[40px] border-slate-200/30 animate-pulse"></div>
      <div
        className="absolute top-[-40px] left-[-150px] h-[400px] w-[400px] rounded-full border-[30px] border-blue-100/40 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-0 left-[-100px] h-[300px] w-[300px] rounded-full border-[20px] border-slate-300/25 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-600/20 z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <img
                src="/home/course-img-3.webp"
                alt="Team collaborating on AI solutions"
                className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-blue-900/90 to-transparent z-20">
                <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                  We fuse AI and creativity to deliver intelligent, personalized, and future-ready design experiences
                  that inspire.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAFAFC] border border-[#EFEFFB] rounded-full shadow-sm">
              <span className="text-blue-900">✦</span>
              <span className="text-sm font-medium text-[#092A6B]">Why Choose Us</span>
              <span className="text-blue-900">✦</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Innovative Solutions, <span className="text-blue-900">Real-World Results</span>
            </h2>

            {/* Content Sections */}
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FAFAFC] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-blue-900" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[18px] font-outfit font-semibold text-[#060B25] mb-2">Tailored to You</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    Customized strategies that align with your business goals and personal ambitions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FAFAFC] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-blue-900" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[18px] font-outfit font-semibold text-[#060B25] mb-2">Innovative Excellence</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    Harnessing the latest in analytics, AI, and visualization to keep you ahead of the curve.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FAFAFC] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-6 h-6 text-blue-900" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[18px] font-outfit font-semibold text-[#060B25] mb-2">Trusted Expertise</h3>
                  <p className="text-[#64748B] leading-relaxed">
                    We uphold the highest standards of integrity, transparency, and reliability in every engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* KPI Stats */}
            <div className="grid grid-cols-3 gap-0 pt-4">
              <div className="p-4 border-r border-gray-200 transition-all duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-[#FAFAFC] rounded-lg mb-3 mx-auto">
                  <TrendingUp className="w-5 h-5 text-blue-900" />
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Client Satisfaction</div>
                </div>
              </div>

              <div className="p-4 border-r border-gray-200 transition-all duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-[#FAFAFC] rounded-lg mb-3 mx-auto">
                  <Users className="w-5 h-5 text-blue-900" />
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-outfit font-bold text-gray-900">500+</div>
                  <div className="text-xs md:text-sm font-outfit text-gray-600 mt-1">Projects Delivered</div>
                </div>
              </div>

              <div className="p-4 transition-all duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-[#FAFAFC] rounded-lg mb-3 mx-auto">
                  <Award className="w-5 h-5 text-blue-900" />
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
