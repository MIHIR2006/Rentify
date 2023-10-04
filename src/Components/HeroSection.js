import React from 'react'

const HeroSection = (props) => {
  return (
    <div class="hero-section container-fluid d-flex align-items-center text-center" style={{ height: "40vh" }}>
      <div class="content container pt-5">
        <h1 style={{ fontSize: "3rem", width: "80%", margin: "0 auto" }}>{props.title}</h1>
      </div>
    </div>
  )
}

export default HeroSection;