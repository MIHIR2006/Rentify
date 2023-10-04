import React from 'react'

const Blog = () => {
  return (
    <div className="blog container mt-5">
      <div className="content text-center">
        <h3>Latest Blog Posts</h3>
        <i>Lorem ipsum dolor sit amet consectetur.</i>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 col-sm-12 mt-3">
          <div className="card">
            <div className="image" style={{width: "100%",height: "280px"}}>
            <img className="card-img-top" src="images/Best-Car-Blogs-Websites.jpeg" alt="Card image cap" width="100%" height="100%"/>
          </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mt-3">
          <div className="card">
            <div className="image" style={{width: "100%",height: "280px"}}>
            <img className="card-img-top" src="images/Best-Car-Blogs-Websites.jpeg" alt="Card image cap" width="100%" height="100%"/>
          </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mt-3">
          <div className="card">
            <div className="image" style={{width: "100%",height: "280px"}}>
            <img className="card-img-top" src="images/Best-Car-Blogs-Websites.jpeg" alt="Card image cap" width="100%" height="100%"/>
          </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog