"use client"

import { Linkedin, Twitter, Github, Instagram, Brain, Users, Globe, Lightbulb } from "lucide-react"

const teamMembers = [
  {
    name: "Mr Modou Jallow",
    role: "Chief Executive Officer",
    image: "/staff/molima.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Salieu Jallow",
    role: "Director",
    image: "/staff/salieu.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Fatoumatta Danso",
    role: "Chief Technology Officer",
    image: "/staff/Danso.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Ndey Sambou",
    role: "Head of Analysts",
    image: "/staff/ndey.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Ebrima Konteh",
    role: "UI/UX Designer",
    image: "/staff/konteh.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Muhammed Jawo",
    role: "Marketing Officer",
    image: "/staff/jawo.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Jainaba Ceesay",
    role: "Data Analyst",
    image: "/staff/jainaba.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sanna BS Jammeh",
    role: "FullStack Engineer",
    image: "/staff/sana.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Kawsu Kanteh",
    role: "AI Engineer",
    image: "/staff/kawsu.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Amadou Bailo Bah",
    role: "Frontend Engineer",
    image: "/staff/Bailo.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="relative py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-0 w-96 h-96 opacity-30">
          <img src="/icons/team-bottom.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-10 right-0 w-80 h-80 opacity-40">
          <img src="/icons/team-bottom.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="absolute top-1/2 right-20 w-64 h-64 pointer-events-none opacity-20">
        <img src="/icons/team-after.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-blue-900 md:text-5xl">Meet Our Expert Team</h2>
          <p className="mx-auto max-w-3xl text-lg text-blue-900 leading-relaxed">
            The People Behind Gomindz's Innovation
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-blue-900 flex items-center gap-2">
              <Brain className="h-4 w-4" />
              AI Expertise
            </span>
            <span className="rounded-full bg-blue-50 px-4 py-2 text-blue-900 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Collaboration First
            </span>
            <span className="rounded-full bg-blue-50 px-4 py-2 text-blue-900 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Global Mindset
            </span>
            <span className="rounded-full bg-blue-50 px-4 py-2 text-blue-900 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Innovation Driven
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient overlay - always visible, expands on hover */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-blue-900/90 via-blue-700/60 to-transparent opacity-95 transition-all duration-500 group-hover:h-full" />

              {/* Content - always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500">
                <div className="text-white">
                  <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                  <p className="mb-4 text-sm text-white/90">{member.role}</p>

                  <div className="flex gap-3">
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        className="transition-transform hover:scale-110"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="transition-transform hover:scale-110"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        className="transition-transform hover:scale-110"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        className="transition-transform hover:scale-110"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}