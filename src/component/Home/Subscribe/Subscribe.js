import React from 'react'
import './Subscribe.css'
import { motion  } from "motion/react"

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className='container'>
        <div className='row'>
            <div className="col-md-12">
                <h1>Hurry up! Subscribe our newsletter <br /> and get<span> 25% Off</span></h1>
                <p>Limited time offer for this month. No credit card required.</p>
                <form className="intro-subscribe" action="#" id="invite" method="POST">
                    <div className="row">
                        <div className="col-md-8">
                            <input className="email" placeholder="Email Address here" name="email" id="email" type="email" />
                        </div>
                        <div className="col-md-4">
                          <motion.button
                              className="btn btn-primary btn-block"
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
                              Subscribe
                            </motion.button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
