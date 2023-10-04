import React from 'react'

const ContactUs = () => {
  return (
    <div class="contact container">
        <div class="row">
            <div class="col-lg-8 mt-5 col-sm-12 ">
                <div class="row ">
                    <div class="col-lg-6  mt-2 col-sm-12">
                        <input type="text" class="w-100 form-control" placeholder="Full Name"/>
                    </div>
                    <div class="col-lg-6  mt-2 col-sm-12">
                        <input type="text" class="w-100 form-control" placeholder="Subject"/>
                    </div>
                    <div class="col-lg-12 mt-2 col-sm-12">
                        <textarea name="" id="" class="w-100 form-control" rows="7" placeholder="Your Message"></textarea>
                    </div>
                    <div class="col-lg-12 mt-2">
                    <button type="button" class="btn btn-primary">Contact Us</button>
                </div>
                </div>
            </div>
            <div class="col-lg-4 mt-5 col-sm-12 bg-primary text-white p-3">
                <div class="row">
                    <div class="col-12">
                        <p style={{ wordBreak: "break-all;" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam nostrum officia! Corporis nostrum adipisci incidunt vero mollitia tempore quidem.</p>
                        <ul class="p-0 list-unstyled">
                            <li>Phone:+1 333 4040 5566</li>
                            <li>Email:contact@company.com</li>
                            <li>Address: 212 Barrington Court New York</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactUs