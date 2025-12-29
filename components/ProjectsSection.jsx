"use client"

import { useEffect, useRef, useState } from "react"

export default function ProjectsSection() {
  const [isPausedDeck1, setIsPausedDeck1] = useState(false)
  const [isPausedDeck2, setIsPausedDeck2] = useState(false)
  const scrollRef1 = useRef(null)
  const scrollRef2 = useRef(null)

  useEffect(() => {
    const scroll1 = scrollRef1.current
    const scroll2 = scrollRef2.current
    
    let animationFrame

    const animate = () => {
      if (scroll1 && scroll2) {
        // First deck scrolls left
        if (!isPausedDeck1) {
          scroll1.scrollLeft += 1
          if (scroll1.scrollLeft >= scroll1.scrollWidth / 2) {
            scroll1.scrollLeft = 0
          }
        }

        // Second deck scrolls right
        if (!isPausedDeck2) {
          scroll2.scrollLeft -= 1
          if (scroll2.scrollLeft <= 0) {
            scroll2.scrollLeft = scroll2.scrollWidth / 2
          }
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [isPausedDeck1, isPausedDeck2])

  const projectCards1 = [
    {
      title: "Gomindz Academy Website",
      heading: "educational platform for students",
      image: "/projects/ga.png",
    },
    {
      title: "AI-Powered Diagnostic Support System for Breast Cancer",
      heading: "An intelligent diagnostic support tool that leverages AI to assist radiologists and healthcare specialists",
      image: "/projects/brestCancer.png",
    },
    {
      title: "Data Warehouse for Gomindz Academy",
      heading: "A unified data warehouse that integrates fragmented data sources ",
      image: "/projects/academyDashboard.png",
    },
    {
      title: "HR Management System",
      heading: "A comprehensive HR management solution to automate core functions",
      image: "/projects/hrSystem.png",
    },
    {
      title: "Ministry of Fishries and Water Resources",
      heading: "Developed an interactive dashboard that provides real-time monitoring of fisheries and water resource",
      image: "/projects/mof.jpg",
    }
  ]

  const projectCards2 = [
    {
      title: "NCCP - Breast Cancer Screening System",
      heading: "Delivered a secure and user-friendly data portal integrated with an analytics system for nccp,",
      image: "/projects/nccp.png",
    },
    {
      title: "Data Portal and Analytics System for NCCRM",
      heading: "A secure and user-friendly data portal integrated with an analytics system,",
      image: "/projects/nccrm.png",
    },
    {
      title: "National Road Authority Dashboard",
      heading: "Comprehensive dashboard that consolidates data on road networks, maintenance schedules",
      image: "/projects/nraDashboard.jpg",
    },
    {
      title: "Website for Tendaba",
      heading: "Designed and developed a responsive and modern website to enhance Tendaba’s online presence,",
      image: "/projects/tendaba.png",
    }
  ]

  const renderCard = (card, index, deckNumber) => (
    <div
      key={index}
      className="flex-shrink-0 w-96 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
      onMouseEnter={() => deckNumber === 1 ? setIsPausedDeck1(true) : setIsPausedDeck2(true)}
      onMouseLeave={() => deckNumber === 1 ? setIsPausedDeck1(false) : setIsPausedDeck2(false)}
    >
      <div className="w-full h-64 overflow-hidden bg-gray-100 relative">
        <img 
          src={card.image} 
          alt={card.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        {/* Blue Gradient Overlay with Project Name at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
          <div className="w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-xl font-bold mb-1">{card.title}</h3>
            <p className="text-blue-100 text-sm">{card.heading}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="relative py-15 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 mb-20">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFEFFB] border mb-2  border-blue-100 rounded-full shadow-sm">
            <span className="text-[#092A6B]">✦</span>
            <span className="text-sm font-medium text-[#092A6B]">Projects Delivered</span>
            <span className="text-[#092A6B]">✦</span>
          </div>
          <h2 className="text-[48px] font-outfit font-bold leading-tight">
            Delivered Projects That <br /> 
            <span className="text-blue-900">Define Our Craft</span>
          </h2>
          <p className=" font-outfit text-[#64748B] max-w-3xl mx-auto mb-12">
            Each project we deliver showcases our commitment to quality, creativity, and seamless execution, turning ideas into impactful results.
          </p>
        </div>
      </div>

      {/* Projects Decks Container with Shadow Effects */}
      <div className="relative">
        {/* Left Shadow Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Shadow Effect */}
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* First Deck - Scrolls Left */}
        <div className="mb-12">
          <div
            ref={scrollRef1}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {[...projectCards1, ...projectCards1].map((card, idx) => renderCard(card, idx, 1))}
          </div>
        </div>

        {/* Second Deck - Scrolls Right */}
        <div>
          <div
            ref={scrollRef2}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {[...projectCards2, ...projectCards2].map((card, idx) => renderCard(card, idx, 2))}
          </div>
        </div>
      </div>
    </section>
  )
}