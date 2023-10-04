import React from 'react'
import HeroSection from '../Components/HeroSection'

const TeamPage = () => {
  return (
    <div>
        <HeroSection title='Team'/>
        <div className="team container-fluid mt-5 p-3" style={{ backgroundColor:"white" }}>
        <div className="container">
        <div className="content text-center">
            <h3>Team</h3>
            <i>We believe in building long-term relationships based on trust, transparency, and reliability</i>
          </div>
          <div className="row text-center mt-5">
            <div className="col-lg-12 col-sm-12">
              <div className="card border-0 bg-transparent">
                <div className="card-img">
                <img src="./images/user1.jpg" className="card-img-top rounded-circle w-100 h-100" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Mark L.</h5>
                  <em>CEO</em>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-sm-12 "></div>
            <div className="col-lg-5 col-sm-12 p-0 m-0">
              <div className="card border-0 bg-transparent">
                <div className="card-img">
                <img src="./images/user3.jpeg" className="card-img-top rounded-circle w-100 h-100" alt="..."/>
              </div>
                <div className="card-body">
                  <h5 className="card-title">Emma G.</h5>
                  <em>Marketing Manager</em>
                </div>
              </div>
            </div>
            <div className="col-lg-5  col-sm-12 m-0 p-0">
              <div className="card border-0 bg-transparent">
                <div className="card-img">
                <img src="./images/user2.jpg" className="card-img-top rounded-circle w-100 h-100" alt="..."/>
              </div>
                <div className="card-body">
                  <h5 className="card-title"> John R.</h5>
                  <em>Customer Service</em>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-sm-12 "></div>
            <div className="col-lg-4   col-sm-12 m-0 p-0">
              <div className="card border-0 bg-transparent">
                <div className="card-img">
                <img src="./images/user4.png" className="card-img-top rounded-circle w-100 h-100" alt="..."/>
              </div>
                <div className="card-body">
                  <h5 className="card-title">Cassy S.</h5>
                  <em>Customer Service</em>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-sm-12  ">
              <div className="card border-0 bg-transparent">
                <div className="card-img">
                <img src="./images/user5.png" className="card-img-top rounded-circle w-100 h-100" alt="..."/>
              </div>
                <div className="card-body">
                  <h5 className="card-title">John D.</h5>
                  <em>Customer Service</em>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-sm-12 m-0 p-0">
              <div className="card border-0 bg-transparent">
                <div className="card-img">
                <img src="./images/user6.png" className="card-img-top rounded-circle w-100 h-100" alt="..."/>
              </div>
                <div className="card-body">
                  <h5 className="card-title">Cassy S.</h5>
                  <em>Customer Service</em>
                </div>
              </div>
            </div>
          </div>
          </div>
    </div>
    </div>
  )
}

export default TeamPage