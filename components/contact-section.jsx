"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#092A6B] text-white text-sm font-semibold rounded-full mb-4 tracking-wider">
            CONTACT US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          {/* Left side - Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Reach out to us</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-blue-300 focus:border-[#092A6B] focus:ring-0 outline-none transition-all bg-white text-gray-900 placeholder:text-gray-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-blue-300 focus:border-[#092A6B] focus:ring-0 outline-none transition-all bg-white text-gray-900 placeholder:text-gray-400"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-blue-300 focus:border-[#092A6B] focus:ring-0 outline-none transition-all bg-white text-gray-900 placeholder:text-gray-400"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl border-2 border-blue-300 focus:border-[#092A6B] focus:ring-0 outline-none transition-all resize-none bg-white text-gray-900 placeholder:text-gray-400"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-[#092A6B] text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right side - Contact Information */}
          <div className="lg:pt-16">
            <p className="text-gray-600 leading-relaxed mb-12 text-lg">
              Need to get in touch with us? Either fill out the form with your inquiry or link us through email or phone
              you'd like to contact below, we'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#092A6B] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">Phone</h4>
                  <p className="text-gray-700">+220 3696325 / 3229625</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#092A6B] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-700">academy@gomindz.gm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#092A6B] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">Address</h4>
                  <p className="text-gray-700">Kairaba Avenue, Opposite Qcell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
