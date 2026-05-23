import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Drawer } from 'antd'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const showMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 px-4 md:px-6 py-4 bg-primary-200">
      
      <div className="max-w-5xl mx-auto flex items-center justify-between rounded-full bg-white/30 backdrop-blur-md border border-white/20 shadow-lg px-6 md:px-8 py-3 relative">
        <Link to="/" onClick={closeMenu} className="flex items-center tracking-tighter text-black-800">
          <h4>XOXO <span className='text-primary-500'>GlamBox</span></h4>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-black-700">
          <Link to="/portfolio" className="span-medium hover:text-primary-500 transition-colors">Portfolio</Link>
          <Link to="/services" className="span-medium hover:text-primary-500 transition-colors">Services</Link>
          <Link to="/about" className="span-medium hover:text-primary-500 transition-colors">About</Link>
        </nav>

        <Link
          to="/book"
          className="hidden md:block span-bold bg-black-800 text-white px-5 py-2 rounded-full hover:bg-black-600 hover:scale-105 transition-all shadow-md"
        >
          Book Now
        </Link>

        <button 
          className="md:hidden text-black-800 p-2"
          onClick={showMenu}
          aria-label="Open Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <Drawer
        title={
          <div className="flex items-center tracking-tighter text-black-800">
            <h4>XOXO</h4>
            <h4 className="text-primary-500">GlamBox</h4>
          </div>
        }
        placement="right"
        onClose={closeMenu}
        open={isMenuOpen}
        size={300}
      >
        <div className="flex flex-col h-full justify-between pb-8">
          
          <nav className="flex flex-col gap-6 mt-4">
            <Link to="/portfolio" onClick={closeMenu} className="h5-medium text-black-800 hover:text-primary-500 transition-colors">
              Portfolio
            </Link>
            <div className="h-px w-full bg-black-100"></div> {/* Subtle Divider */}
            
            <Link to="/services" onClick={closeMenu} className="h5-medium text-black-800 hover:text-primary-500 transition-colors">
              Services
            </Link>
            <div className="h-px w-full bg-black-100"></div> {/* Subtle Divider */}
            
            <Link to="/about" onClick={closeMenu} className="h5-medium text-black-800 hover:text-primary-500 transition-colors">
              About
            </Link>
          </nav>


          <Link
            to="/book"
            onClick={closeMenu}
            className="text-center h6-medium bg-black-800 text-white px-5 py-4 rounded-full hover:bg-black-600 transition-all shadow-md w-full"
          >
            Book Now
          </Link>

        </div>
      </Drawer>

    </header>
  )
}

export default Header