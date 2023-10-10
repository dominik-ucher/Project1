'use client';
import React from 'react'
import { Footer } from 'flowbite-react';
import Logo_w_Text from '../../img/logo_with_text.png'
import { Link } from 'react-router-dom';

export default function FooterWithLogo() {
  return (
    <div className='bg-black'>
    <Footer container className='bg-black'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Link to="/"><Footer.Brand alt="Logo" src={Logo_w_Text} /></Link>
          <Footer.LinkGroup>
            <Footer.Link href="#" className='text-white'>About</Footer.Link>
            <Footer.Link href="#" className='text-white'>Privacy Policy</Footer.Link>
            <Footer.Link href="#" className='text-white'>Licensing</Footer.Link>
            <Footer.Link href="#" className='text-white'>Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className='bg-white' />
        <Footer.Copyright by="UcherTech™" href="#" year={2022} className='text-white'/>
      </div>
    </Footer>
    </div>
  )
}


