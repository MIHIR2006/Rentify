import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Talk from '../Components/Talk'
import Testimonials from '../Components/Testimonials'

const AboutPage = () => {
  return (
    <div>
        <HeroSection title="About"/>
        <About/>
        <Talk/>
        <Testimonials/>
    </div>
  )
}

export default AboutPage