/**
 * What Drives Us Section Component
 * 
 * A modern section showcasing core values and principles
 * 
 * @component
 * @example
 * <WhatDrivesUsSection />
 */

"use client"

import { Shield, Lightbulb, Users } from 'lucide-react';

export default function WhatDrivesUsSection() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with the highest ethical standards, ensuring transparency, honesty, and confidentiality in all our interactions.",
      color: "blue"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embrace creativity and innovation to continually enhance our solutions and stay at the forefront of industry trends.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Foster a collaborative environment, internally and with our clients, to achieve shared goals and maximize outcomes.",
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        border: "border-blue-200",
        glow: "group-hover:shadow-blue-200"
      },
      purple: {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        border: "border-purple-200",
        glow: "group-hover:shadow-purple-200"
      },
      green: {
        bg: "bg-green-50",
        icon: "text-green-600",
        border: "border-green-200",
        glow: "group-hover:shadow-green-200"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Drives Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every project we deliver is built on a foundation of trust, integrity, and impact because how we work is just as important as what we build.
          </p>
        </div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const colors = getColorClasses(value.color);
            const Icon = value.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 border-2 ${colors.border} transition-all duration-300 hover:shadow-xl ${colors.glow} hover:-translate-y-1`}
              >
                {/* Icon and Title Container */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon Container */}
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 ${colors.bg} rounded-xl transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${colors.bg} rounded-bl-full opacity-20 -z-10`} />
              </div>
            );
          })}
        </div>

        {/* Optional decorative elements */}
        <div className="absolute left-0 top-1/2 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-20 -z-10" />
      </div>
    </section>
  );
}