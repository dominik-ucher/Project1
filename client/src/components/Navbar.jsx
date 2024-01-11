import React from 'react';
import { Navbar } from 'flowbite-react';
import Logo_w_Text from '../../img/logo_with_text.png'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function DefaultNavbar() {
  return (
    <Navbar fluid className="sticky top-0 z-10 bg-black">
      <Link to="/"><Navbar.Brand>
        <LazyLoadImage alt="Logo" className="mr-3 h-12 sm:h-16" src={Logo_w_Text} />
        {/* <img alt="Logo" className="mr-3 h-12 sm:h-16" src={Logo_w_Text} /> */}
      </Navbar.Brand>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/" ><Navbar.Link className='text-white'>Home</Navbar.Link></Link>
        <Link to="/about"><Navbar.Link className='text-white'>About</Navbar.Link></Link>
        {/* <Link to="/references"><Navbar.Link className='text-white'>Projects</Navbar.Link></Link> */}
        <Link to="/contact"><Navbar.Link className='text-white'>Contact</Navbar.Link></Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
