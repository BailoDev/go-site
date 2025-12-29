import React from 'react'

import  HeroSection  from '@/components/projects/HeroSection'
import  FilterableProjects  from "@/components/projects/FilterableProjects"

const page = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FilterableProjects />
    </main>
  )
}

export default page