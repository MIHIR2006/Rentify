import React from 'react'

const Testimonials = () => {
  return (
    <div className="container  mt-5">
      <div className="content p-3 text-center">
        <h3>Testimonials</h3>
        <i>Lorem ipsum dolor sit amet consectetur.</i>
      </div>
      <div className="testimonials">
        <div className="row mt-5">
          <div className="col-lg-3 col-sm-12 mt-5">
            <div className="position-relative mb-3" style={{ width:"100%",height: "270px" }}>
              <img src="images/team-1-1.jpg" alt="" width="100%" className="position-absolute"/>
                <div className="content p-3">
                  <h4>John Doe</h4>
                  <i>Lorem ipsum dolor sit amet consectetur.</i>
                </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mt-5">
            <div className="position-relative mb-3" style={{ width:"100%",height: "270px" }}>
              <img src="images/team-1-2.jpg" alt="" width="100%" className="position-absolute"/>
              <div className="content p-3">
                <h4>John Doe</h4>
                <i>Lorem ipsum dolor sit amet consectetur.</i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mt-5">
            <div className="position-relative mb-3" style={{ width:"100%",height: "270px" }}>
              <img src="images/team-1-3.jpg" alt="" width="100%" className="position-absolute"/>
              <div className="content p-3">
                <h4>John Doe</h4>
                <i>Lorem ipsum dolor sit amet consectetur.</i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 mt-5"y>
            <div className="position-relative mb-3" style={{ width:"100%",height: "270px" }}>
              <img src="images/team-1-6.jpg" alt="" width="100%"  className="position-absolute"/>
              <div className="content p-3 ">
                <h4>John Doe</h4>
                <i>Lorem ipsum dolor sit amet consectetur.</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials