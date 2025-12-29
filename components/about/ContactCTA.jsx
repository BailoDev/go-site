"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="relative py-16 px-4 md:py-24 md:px-8 overflow-hidden bg-blue-900">
      <div className="mx-auto max-w-4xl relative z-10 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Get In Touch</h2>
        <p className="mb-6 text-2xl font-semibold text-white/90 md:text-3xl">Let's Build Something Great</p>
        <p className="mx-auto max-w-2xl mb-12 text-lg text-white/80 leading-relaxed">
          Whether you have a clear project in mind or just exploring possibilities, we're here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          {/* Phone */}
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
            <div className="rounded-full bg-white/20 p-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-sm font-medium text-white/70">Phone</h3>
            <a href="tel:+2203258685" className="text-lg font-semibold hover:text-white/80 transition-colors">
              +220 3258685 / 3502246
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
            <div className="rounded-full bg-white/20 p-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-sm font-medium text-white/70">Email</h3>
            <a href="mailto:info@gomindz.gm" className="text-lg font-semibold hover:text-white/80 transition-colors">
              info@gomindz.gm
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
            <div className="rounded-full bg-white/20 p-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-sm font-medium text-white/70">Address</h3>
            <p className="text-lg font-semibold text-center">Kairaba Avenue, Beside Qcell</p>
          </div>
        </div>
      </div>
    </section>
  )
}
