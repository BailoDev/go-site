import { Target, Eye } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="relative bg-white py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Column - Image with decorative shapes */}
          <div className="relative flex justify-center lg:justify-start group">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1000&fit=crop"
                alt="Team working together in modern office"
                className="w-full max-w-lg h-auto rounded-3xl transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(rgba(0, 0, 0, 0.6), rgb(8, 99, 228))",
                }}
              >
                <div className="text-center px-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-3xl font-bold mb-2">Transforming Data</h3>
                  <p className="text-white/90 text-lg">Into Intelligent Insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm text-blue-900 uppercase tracking-wider font-medium">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Do More With <span className="text-blue-900">Your Data</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  We are a unique data analytics consulting company enabling business to understand their data like
                  never before, turning their data into actionable insights to drive better business outcome.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              {/* Mission Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
                  <Target className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To help businesses and individuals gain clarity from complexity—transforming raw data into intelligent
                  insights.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
                  <Eye className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To be the go-to consultancy for data-driven transformation, empowering clients with the tools and
                  confidence to succeed in an increasingly digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
