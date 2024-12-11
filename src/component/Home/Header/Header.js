import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ModalForm from '../../../utiliy/Modals/ModalForm'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className="home">
      <div className='container'>
        <div className='row'>
            <div className='col-md-5'>
                <h2>Good Food choices are good investments.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                <ModalForm />
                <Link to="explore" className='btn btn-lg' smooth={true} duration={200}>
                  Learn More 
                  <FontAwesomeIcon className='ms-1' icon={faChevronRight} />
                </Link>
            </div>
            <div className='col-md-7'></div>
        </div>
      </div>
    </header>
  )
}

export default Header
