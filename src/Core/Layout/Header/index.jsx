import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import HeaderBow from '../../../Assets/Images/titleBow.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 w-full z-50 h-[70px] flex justify-center items-center transition-all duration-300 ${isScrolled ? 'bg-linear-to-r from-[#5A4FCF] to-[#242124] shadow-md' : 'bg-transparent'}`}>
      <div className='container flex items-center justify-between'>
        <div className='relative'>
          <h4 className='header__title text-primary-700'>XOXO<span className='pl-1 text-secondary-500'>GlamBox</span></h4>
          <img src={HeaderBow} alt="" className='absolute top-[-7px] left-[-3px]' style={{ width: 30, height: 30, transform: 'rotate(-15deg)' }} />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-black-700">
          <Link to="/portfolio" className={`span-regular ${isScrolled ? 'text-white' : ''} hover:text-primary-500 transition-colors`}>Portfolio</Link>
          <Link to="/services" className={`span-regular ${isScrolled ? 'text-white' : ''} hover:text-primary-500 transition-colors`}>Services</Link>
          <Link to="/about" className={`span-regular ${isScrolled ? 'text-white' : ''} hover:text-primary-500 transition-colors`}>About</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header