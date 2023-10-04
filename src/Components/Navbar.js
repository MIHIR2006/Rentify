import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="header container-fluid bg-dark p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container p-3">
            <Link className="navbar-brand" to="/">
                <img src="./images/rentify-logo.png" width="200" height="30" className="d-inline-block align-top" alt=""/>
                
              </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto text-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/offers">Offers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/team">Team</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                
              </ul>
            </div>
          </nav>
    </div>
  )
}

export default Navbar