import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { motion  } from "motion/react"
import './About.css'
import img1 from './../../assets/1.png'
import img2 from './../../assets/2.png'

const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
                <img src={img1} className='w-100' alt='img' />
            </div>
            <div className='col-md-6 d-flex align-items-center'>
              <div>
                <h2>We pride ourselves on making real food from the best ingredients.              </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <motion.button
                  className="mt-4"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{
                    scale: 0.98,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut", 
                  }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center'>
              <div>
                <h2>We make everything by hand with the best possible ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <ul className="list mb-lg-2 mb-2">
                  <li><FontAwesomeIcon icon={faCheck} /> Etiam sed dolor ac diam volutpat.</li>
                  <li><FontAwesomeIcon icon={faCheck} /> Erat volutpat aliquet imperdiet.</li>
                  <li><FontAwesomeIcon icon={faCheck} /> purus a odio finibus bibendum.</li>
                </ul>
                <motion.button
                  className="mt-4"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{
                    scale: 0.98,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut", 
                  }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
            <div className='col-md-6'>
                <img src={img2} className='w-100' alt='img' />
            </div>
          </div>
            
        </div>
      </section>
    </>
  )
}

export default About
