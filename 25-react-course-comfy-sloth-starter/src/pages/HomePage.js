import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts></FeaturedProducts>
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
