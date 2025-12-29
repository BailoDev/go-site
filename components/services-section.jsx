"use client"

import { useState } from "react"
import { Database, LineChart, Brain, Code, Users, Target } from "lucide-react"

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const services = [
    {
      icon: Database,
      title: "Data Management & Integration",
      description:
        "We help you organize, clean, and structure your data—ensuring it is secure, accessible, and ready to power informed decisions.",
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.5)",
      bgImage: "/data-management-database-integration-servers-techn.jpg",
    },
    {
      icon: LineChart,
      title: "Advanced Analytics & Insights",
      description:
        "Go beyond surface-level metrics. We apply advanced analytical models to uncover trends, patterns, and opportunities hidden in your data.",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.5)",
      bgImage: "/data-analytics-charts-graphs-insights-business-int.jpg",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence Solutions",
      description:
        "From predictive modeling to intelligent automation, we design and deploy AI-powered systems that drive efficiency, innovation, and performance.",
      gradient: "from-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.5)",
      bgImage: "/artificial-intelligence-neural-network-machine-lea.jpg",
    },
    {
      icon: Code,
      title: "Software Solutions Development",
      description:
        "Whether you need a custom dashboard, a reporting tool, or an end-to-end digital product, our software team builds intuitive, scalable solutions tailored to your needs.",
      gradient: "from-green-500 to-emerald-500",
      glowColor: "rgba(34, 197, 94, 0.5)",
      bgImage: "/software-development-coding-programming-computer-s.jpg",
    },
    {
      icon: Users,
      title: "Capacity Building & Training",
      description:
        "We empower teams and individuals through practical, hands-on training in data literacy, analytics, and digital tools—enabling them to work smarter, adapt faster, and lead with confidence.",
      gradient: "from-indigo-500 to-blue-500",
      glowColor: "rgba(99, 102, 241, 0.5)",
      bgImage: "/team-training-workshop-collaboration-learning-prof.jpg",
    },
    {
      icon: Target,
      title: "Strategy & Consultancy",
      description:
        "Get expert guidance to align your data, technology, and operations with your business goals. We co-develop strategic roadmaps that are actionable, scalable, and measurable.",
      gradient: "from-yellow-500 to-orange-500",
      glowColor: "rgba(234, 179, 8, 0.5)",
      bgImage: "/business-strategy-consulting-planning-roadmap-prof.jpg",
    },
  ]

  return (
    <section id="Services" className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-10 right-[-200px] h-[500px] w-[500px] rounded-full border-[40px] border-amber-500/5 animate-pulse" />
        <div className="absolute bottom-10 left-[-200px] h-[500px] w-[500px] rounded-full border-[40px] border-blue-900/5 animate-pulse" />
      </div>
      

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-2">
            <span className="text-[#092A6B]">✦</span>
            <span className="text-sm font-semibold text-gray-600">OUR SERVICES</span>
            <span className="text-[#092A6B]">✦</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            What We{" "}
            <span className="text-blue-900 bg-clip-text">Offer</span>
          </h2>
          <p className="font-outfit text-[#161f2b] max-w-3xl mx-auto px-4">
            We offer a holistic suite of services designed to support businesses and individuals at every stage of their digital and data transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                {/* Background Image on Hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Numbered Badge - Top Right */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#092A6B] rounded-full flex items-center justify-center text-sm font-bold text-white group-hover:from-white group-hover:to-gray-100 transition-all duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-[#FAFAFC] mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    style={{
                      boxShadow: hoveredIndex === index ? `0 20px 40px ${service.glowColor}` : "none",
                    }}
                  >
                    <service.icon className="w-8 h-8 text-blue-900" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold group-hover:text-white transition-colors duration-300">
                    <span className="relative">
                      Learn More
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:bg-white transition-all duration-300" />
                    </span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
                </div>

                {/* Glow Effect */}
                <div
                  className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10 rounded-2xl"
                  style={{
                    background: `linear-gradient(to right, ${service.glowColor}, transparent)`,
                  }}
                />

                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 -mb-1">
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <path fill="white" d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  )
}
