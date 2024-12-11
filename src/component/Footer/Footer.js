import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className='top-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <a href="#">Register</a>
              <a href='#'>Forum </a>
              <a href='#'>Affiliate</a>
              <a href='#'>FAQ</a>
            </div>
            <div className='col-md-12'>
              <div className='footer-social py-4'>
                <a href='https://web.facebook.com/profile.php?id=100028147566924&_rdc=1&_rdr'>
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href='https://x.com/LailaMo90'>
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href='https://www.instagram.com/codeswithlaila/'>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://www.linkedin.com/in/laila-a-mohamed/'>
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <p>&copy; {currentYear} Food. <a target="_blank" href='https://lailamohamedd.github.io/Laila/'>Laila Abdellatif</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
