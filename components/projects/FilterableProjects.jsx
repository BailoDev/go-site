"use client"

import { useState } from "react"
import Image from "next/image"

const categories = ["All", "Data Science", "Software", "AI"]

const projects = [
  {
    id: 1,
    title: "HR Management System",
    description:
      "A comprehensive HR management solution to automate core functions such as employee attendance, payroll, and performance tracking, helping organizations improve efficiency and reduce errors.",
    image: "/projects/hrSystem.png",
    tags: ["Next.js", "Express", "Postgres SQL"],
    category: "Software",
    link: "https://hr.gomindz.gm/",
  },
  {
    id: 2,
    title: "Gomindz Academy Website",
    description:
      "Designed and developed a responsive and modern website to enhance Gomindz Academy's online presence, improve customer engagement, and showcase services with an accessible digital platform allowing students to be able to register and pay both registration and tuition fee online.",
    image: "/projects/academy.png",
    tags: ["React", "JavaScript"],
    category: "Software",
    link: "https://academy.gomindz.gm/",
  },
  {
    id: 3,
    title: "Ministry of Fisheries and Water Resources",
    description:
      "Developed an interactive dashboard that provides real-time monitoring of fisheries and water resource data. This solution enables the ministry to track usage, manage resources efficiently, and support policy implementation.",
    image: "/projects/mof.jpg",
    tags: ["Tableau", "Power Query", "Excel"],
    category: "Data Science",
    link: "https://public.tableau.com/app/profile/salieu.jallow/viz/Fisheries_17605340760670/Dashboard2?publish=yes",
  },
  {
    id: 4,
    title: "Website for Tendaba",
    description:
      "Designed and developed a responsive and modern website to enhance Tendaba’s online presence, improve customer engagement, and showcase services with an accessible digital platform.",
    image: "/projects/tendaba.png",
    tags: ["Tableau", "SQL", "Python"],
    category: "Software",
    link: "https://bailodev.github.io/tendaba-site/",
  },
  {
    id: 5,
    title: "Data Portal and Analytics System for NCCRM",
    description:
      "Delivered a secure and user-friendly data portal integrated with an analytics system, enabling the organization to efficiently collect, manage, and analyze critical data for improved reporting and transparency.",
    image: "/projects/nccrm.png",
    tags: ["Next.js", "TypeScript", "Mongo DB"],
    category: "Software",
    link: "https://nccrm.gomindz.gm/auth",
  },
  {
    id: 6,
    title: "AI-Powered Diagnostic Support System for Breast Cancer",
    description:
      "Developed an intelligent diagnostic support tool that leverages AI to assist radiologists and healthcare specialists in identifying potential signs of breast cancer. The system enhances early detection accuracy, reduces workload, and supports better patient outcomes.",
    image: "/projects/brestCancer.png",
    tags: ["Next.js", "Python", "TypeScript"],
    category: "AI",
    link: "https://mammo-vision-suite.vercel.app/auth",
  },
  {
    id: 7,
    title: "National Raod Authorithy Dashboard",
    description:
      "Created a comprehensive dashboard that consolidates data on road networks, maintenance schedules, and infrastructure projects. The tool enhances operational efficiency and provides leadership with clear insights for planning and resource allocation.",
    image: "/projects/nraDashboard.jpg",
    tags: ["Tableau", "Excel", "SQL"],
    category: "Data Science",
    link: "https://public.tableau.com/app/profile/salieu.jallow/viz/Dashboard1_17605321329030/Dashboard1?publish=yes",
  },
  {
    id: 8,
    title: "Data Warehouse for Gomindz Academy",
    description:
      "Designed and deployed a unified data warehouse that integrates fragmented data sources such as enrollment, finance, and grading into a single platform. A real-time dashboard was also developed, giving management and faculty on-demand visibility into key metrics for faster decision-making.",
    image: "/projects/academyDashboard.png",
    tags: ["Tableau", "Python", "SQL"],
    category: "Data Science",
    link: "https://public.tableau.com/app/profile/salieu.jallow/viz/GA_360_Dashboard1/GA360Dashboard?publish=yes",
  },
  {
    id: 9,
    title: "NCCP - Breast Cancer Screening System",
    description:
      "Delivered a secure and user-friendly data portal integrated with an analytics system for nccp, enabling the organization to efficiently collect, manage, and analyze critical Breast Cancer data for improved reporting and transparency.",
    image: "/projects/nccp.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    category: "Software",
    link: "https://nccp.gomindz.gm/",
  },
]

export default function FilterableProjects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="relative w-full py-16 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative curved lines - Top Left */}
        <div className="absolute -left-20 top-0 w-48 h-96 opacity-20 pointer-events-none">
          <Image
            src="/projects/projects-diagonal.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: "invert(9%) sepia(79%) saturate(4595%) hue-rotate(210deg) brightness(92%) contrast(103%)",
            }}
          />
        </div>

        {/* Decorative dotted circle - Bottom Right */}
        <div className="absolute -right-20 bottom-0 w-80 h-80 opacity-15 pointer-events-none">
          <Image
            src="/projects/projects-round.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: "invert(9%) sepia(79%) saturate(4595%) hue-rotate(210deg) brightness(92%) contrast(103%)",
            }}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 relative z-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-md font-medium transition-colors ${
                activeCategory === category ? "bg-[#0f2e5c] text-white" : "bg-white text-[#0f2e5c] hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 group cursor-pointer h-80 bg-white"
            >
              {/* Project Image with Zoom Effect */}
              <div className="relative w-full h-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay with Text - Appears on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/80 to-transparent ${
                  index === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                } transition-opacity duration-300 flex flex-col justify-end p-6`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" px-6 py-2.5 bg-white text-[#0f2e5c] hover:bg-gray-100 font-medium  rounded-md transition-colors"
                  >
                    View Project
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
