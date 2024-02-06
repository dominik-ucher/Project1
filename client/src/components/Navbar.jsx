'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Logo from '../../img/logo_with_text.png'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsLayoutSidebarInset } from "react-icons/bs";


export default function DefaultNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);










  return (
    // <div className="sticky top-0 z-50 bg-gray-800">
    <div className="main-container" style={{ overflowX:'hidden'}} ref={sidebarRef}>
    <div className='flex items-center bg-black h-auto w-screen border-b-2 border-white'>
      <div className='flex items-center p-4'>
        <Link className="flex items-center" to="/">
        <img className="h-12" src={Logo} alt="" />
        </Link>
      </div>

      <div className='invisible md:visible flex items-center absolute right-0 p-4'>
        <Link className='text-sm text-white p-2' to="/">Home</Link>
        <Link className='text-sm text-white p-2' to="/about">About</Link>
        <Link className='text-sm text-white p-2' to="/contact">Contact</Link>
        <button className='hover:border-2 rounded-2xl p-2 md:invisible visible' onClick={() => setSidebarOpen(!sidebarOpen)}><p><BsLayoutSidebarInset className="h-6 w-auto" color="white"/></p></button>

      </div>
    </div>
    
      <div className='md:w-1/3 w-3/4 h-auto bg-black relative rounded-br-3xl border-r-2 border-b-2 border-white' style={{ position: 'absolute', zIndex: '9999', left: sidebarOpen ? '0' : '-100%', transition: 'left 1s ease-in-out' }}>
        <div>
          <div className='visible md:invisible md:h-0 h-auto flex flex-col jusitfy-center items-center border-b-2'>
          <Link className='text-sm text-white p-2' to="/">Home</Link>
          <Link className='text-sm text-white p-2' to="/about">About</Link>
          <Link className='text-sm text-white p-2' to="/contact">Contact</Link> 
          </div>
        </div>
      </div>

    </div>
  )
}


