import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Logo_w_Text from '../../img/logo_with_text.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function DefaultNavbar() {
  return (
    <Navbar fluid className="sticky top-0 z-10 bg-black">
      <Link to="/">
        <Navbar.Brand>
          <LazyLoadImage alt="Logo" className="mr-3 h-12 sm:h-16" src={Logo_w_Text} />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/" className='text-white'><Navbar.Link>Home</Navbar.Link></Link>
        <Link to="/about" className='text-white'><Navbar.Link>About</Navbar.Link></Link>
        {/* Uncomment the line below if you have a "Projects" route */}
        {/* <Link to="/projects" className='text-white'><Navbar.Link>Projects</Navbar.Link></Link> */}
        <Link to="/contact" className='text-white'><Navbar.Link>Contact</Navbar.Link></Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
