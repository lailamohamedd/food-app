import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from './../../assets/logo.png';
import './Navbar.css'
import classNames from 'classnames';
import { Link } from 'react-scroll';

const CustomNavbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  const headerClasses = classNames('sticky-top', { 'scrolled': hasScrolled });
  return (
    <Navbar expand="lg" className={headerClasses}>
      <Container>
        <Navbar.Brand className='p-0'>
          <img src={logo} alt='logo' /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="home" smooth={true} duration={200}>Home</Link></Nav.Link>
            <Nav.Link><Link to="about" smooth={true} duration={200}>About Us</Link></Nav.Link>
            <Nav.Link><Link to="explore" smooth={true} duration={200}>Explore Food</Link></Nav.Link>
            <Nav.Link><Link to="testimonials" smooth={true} duration={200}>Review</Link></Nav.Link>
            <Nav.Link><Link to="faq" smooth={true} duration={200}>Faq</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id='last-nav'>01144302722</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;