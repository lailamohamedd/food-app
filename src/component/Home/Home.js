import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import Header from './Header/Header'
import Count from './Count/Count'
import About from '../About/About'
import ExploreFood from './ExploreFood/ExploreFood'
import Banner from './Banner/Banner'
import Subscribe from './Subscribe/Subscribe'
import Faq from './Faq/Faq'
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
  return (
    <>
      <Header name="home" />
      <Count />
      <About name="about" />
      <Banner />
      <ExploreFood name="explore" />
      <Testimonials name="testimonials" />
      <Faq name="faq" />
      {/* start parallax */}
      <section className="parallax text-center">
          <div className="overlay"></div>
          <div className="container position-relative">
              <div className="row">
                  <div className="col-md-8">
                      <h4>Baked fresh daily by bakers with passion.</h4>
                  </div>
                  <div className="col-md-4">
                      <a href="#" className="btn btn-lg">Learn More <FontAwesomeIcon icon={faArrowRight} /></a>
                  </div>
              </div>
          </div>
        </section>
        {/* end parallax */}
        <Subscribe />
      
    </>
  )
}

export default Home
