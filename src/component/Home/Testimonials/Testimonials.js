import React from 'react'
import './Testimonials.css'
import Slider from './../../../utiliy/Slider/Slider'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 header text-center">
                    <h3>Testimonials  </h3>
                </div>
                <div className='col-md-12 px-lg-5 pt-lg-3'>
                  <Slider />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
