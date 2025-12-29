"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, MessageCircle } from "lucide-react"

export default function MasonryTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ministry of Fishries",
      content:
        " The data visualization dashboards implemented by Gomindz have transformed the way we interpret complex information. The user-friendly interface has facilitated clearer communication and decision-making across our teams.",
      companyLogo: "/partners/fisheries.webp",
      rating: 5,
    },
    {
      id: 2,
      name: "NCCRM",
      // role: "",
      // company: "",
      content:
        "Simply outstanding. They delivered a product that not only met our requirements but elevated our brand to a whole new level.",
      companyLogo: "/partners/nccrm.png",
      rating: 5,
    },
    {
      id: 3,
      name: "NANA",
      content:
        "The software development expertise showcased by Gomindz is truly commendable. The applications created have not only met our specific needs but have set a new standard for efficiency and innovation.",
      companyLogo: "/partners/nana.webp",
      rating: 5,
    },
    {
      id: 4,
      name: "PMO",
      // role: "",
      // company: "",
      content:
        "Exceptional work from start to finish. The collaborative process was seamless, and the results speak for themselves.",
      companyLogo: "/partners/PMO.png",
      rating: 5,
    },
    {
      id: 5,
      name: "Porek Financial Services",
      content:
        "Our collaboration with Gomindz goes beyond transactional business. The dedicated support and ongoing partnership have created a sense of trust and confidence in their commitment to our success.",
      companyLogo: "/partners/porek.webp",
      rating: 5,
    },
    {
      id: 6,
      name: "Tendaba",
      // role: "",
      // company: "",
      content:
        "The technical expertise combined with design sensibility is rare. They delivered a solution that's both beautiful and performant.",
      companyLogo: "/partners/tendaba.webp",
      rating: 5,
    },
  ]

  return (
    <section className="relative w-full overflow-hidden  py-16 px-4 sm:py-24 sm:px-6 lg:px-8 isolate">
      <div className="testimonial-decoration-left" />

      <div className="testimonial-decoration-right" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFEFFB] border mb-2  border-blue-100 rounded-full shadow-sm">
            <span className="text-[#092A6B]">✦</span>
            <span className="text-sm font-medium text-[#092A6B]">clients success stories</span>
            <span className="text-[#092A6B]">✦</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Trusted by <span className="text-blue-900">Innovators</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground sm:text-xl"
            style={{ fontSize: "17px", fontFamily: 'Geist, "Geist Fallback"' }}
          >
            {"Discover what leading teams are saying about their experience working with us"}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 gap-3 space-y-3 sm:columns-2 lg:columns-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="break-inside-avoid">
              <Card className="overflow-hidden border border-slate-200/60 bg-card backdrop-blur-sm shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] hover:border-blue-300/60">
                <CardContent className="p-6 sm:p-8">
                  <div className="absolute right-6 top-6 opacity-10">
                    <MessageCircle className="h-12 w-12 text-blue-600" />
                  </div>

                  <div className="relative mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border-2 border-slate-200 bg-white p-1.5 shadow-sm">
                      <img
                        src={testimonial.companyLogo || "/placeholder.svg"}
                        alt={`${testimonial.name} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Stars Rating */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-blue-900 text-blue-900"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="relative mb-6 text-pretty text-base leading-relaxed text-card-foreground sm:text-lg">
                    {`"${testimonial.content}"`}
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-white via-white/95 via-30% to-transparent" />

      <style jsx>{`
        .testimonial-decoration-left {
          position: absolute;
          left: 0;
          top: 0;
          width: 400px;
          height: 400px;
          background-image: url('/testimonials-left-dec.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: left top;
          pointer-events: none;
          opacity: 0.6;
          filter: brightness(0) saturate(100%) invert(13%) sepia(85%) saturate(4346%) hue-rotate(216deg) brightness(91%) contrast(106%);
        }
        
        .testimonial-decoration-right {
          position: absolute;
          right: 0;
          top: 0;
          width: 400px;
          height: 400px;
          background-image: url('/testimonials-right-dec.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: right top;
          pointer-events: none;
          opacity: 0.6;
          filter: brightness(0) saturate(100%) invert(13%) sepia(85%) saturate(4346%) hue-rotate(216deg) brightness(91%) contrast(106%);
        }
      `}</style>
    </section>
  )
}
