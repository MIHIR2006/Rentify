import React from 'react'

const Team = () => {
  return (
    <div class="team container-fluid mt-5 p-3" style={{ backgroundColor:"rgba(237, 234, 234, 0.848)!important" }}>
        <div class="container">
        <div class="content text-center">
            <h3>Team</h3>
            <i>We believe in building long-term relationships based on trust, transparency, and reliability</i>
          </div>
          <div class="row text-center mt-5">
            <div class="col-lg-3 col-sm-12">
              <div class="card border-0 bg-transparent">
                <div class="card-img">
                <img src="./images/user1.jpg" class="card-img-top rounded-circle w-100 h-100" alt="..."/>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Mark L.</h5>
                  <em>CEO</em>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-12">
              <div class="card border-0 bg-transparent">
                <div class="card-img">
                <img src="./images/user3.jpeg" class="card-img-top rounded-circle w-100 h-100" alt="..."/>
              </div>
                <div class="card-body">
                  <h5 class="card-title">Emma G.</h5>
                  <em>Marketing Manager</em>
                </div>
              </div>
            </div>
            <div class="col-lg-3  col-sm-12">
              <div class="card border-0 bg-transparent">
                <div class="card-img">
                <img src="./images/user2.jpg" class="card-img-top rounded-circle w-100 h-100" alt="..."/>
              </div>
                <div class="card-body">
                  <h5 class="card-title"> John R.</h5>
                  <em>Customer Service</em>
                </div>
              </div>
            </div>
            <div class="col-lg-3  col-sm-12">
              <div class="card border-0 bg-transparent">
                <div class="card-img">
                <img src="./images/user4.png" class="card-img-top rounded-circle w-100 h-100" alt="..."/>
              </div>
                <div class="card-body">
                  <h5 class="card-title">Cassy S.</h5>
                  <em>Customer Service</em>
                </div>
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Team