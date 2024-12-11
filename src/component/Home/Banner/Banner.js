import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className="row text-center">
            <h1>When a man's stomach is full it makes no <br /> difference whether he is rich or poor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            <a href="#">
                <div className="intro-video-pop mt-lg-3 pt-3">
                <FontAwesomeIcon icon={faPlay} /> Watch Our Story
                </div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
