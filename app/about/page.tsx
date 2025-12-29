import HeroSection  from '@/components/about/HeroSection'
import WhatDrivesUsSection  from '@/components/about/WhatDrivesUsSection'
import AboutSection  from '@/components/about/AboutSection'
import TeamSection  from '@/components/about/TeamSection'
import ContactCTA  from '@/components/about/ContactCTA'
import React from 'react'




const page = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WhatDrivesUsSection />
      <AboutSection />
      <TeamSection />
      <ContactCTA />
    </main>
  )
}

export default page