import React from 'react'
import HeroSection from '../Components/HeroSection'
import ContactUs from '../Components/ContactUs'
import Team from '../Components/Team'

const ContactPage = () => {
  return (
    <div>
        <HeroSection title="Contact Us"/>
        <ContactUs/>
        <Team/>
    </div>
  )
}

export default ContactPage