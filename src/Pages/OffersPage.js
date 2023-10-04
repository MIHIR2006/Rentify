import React from 'react'
import Hero from '../Components/Hero'
import HeroSection from '../Components/HeroSection'
import Offer from '../Components/Offer'

const OffersPage = () => {
  return (
    <>
        <HeroSection title="Offers"/>
        <Offer condition="true"/>
        <Offer/>
    </>
  )
}

export default OffersPage