import React from 'react'

const About = () => {
  return (
    <div className="about-us container mt-5 mb-5">
      <h3 className="text-center">About us</h3>
        <div className="row">
            <div className="col-lg-7">
                
                <p className="mt-3"> At Rentify, we are passionate about providing exceptional car rental services that cater to the diverse needs of our valued customers.</p>
                <p className="mt-3">Our mission is to make car rental hassle-free, convenient, and affordable for everyone. Whether you are a frequent traveler, a road trip enthusiast, or simply in need of temporary transportation, we have you covered. </p>
                <button type="button" className="btn btn-primary rounded-0">Discover More</button>
              </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4 mt-5">
              <img src="images/car-about.jpg" alt="" width="100%" height="100%"/>
            </div>
            
            
          
        </div>
    </div>
  )
}

export default About