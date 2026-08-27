import React, { useEffect, useState } from 'react';
import Logo from '../../../Assets/Images/ceba-portfolio-logo.png';
import './style.scss'

const NavigationOptions = [
  {
    id: '#about_wrapper',
    title: 'About',
  },
  {
    id: '#service_wrapper',
    title: 'Services',
  },
  {
    id: '#portfolio_wrapper',
    title: 'Portfolio',
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 w-full z-50 h-[70px] flex justify-center items-center transition-all duration-300 bg-transparent`}>
      <div className="container relative flex items-center justify-between h-full">
        <a href="#main_wrapper" className="absolute left-[-75px] top-0 w-[250px] h-[110px]">
          <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </a>

        <nav className="ml-auto hidden md:flex items-center gap-8">
          {NavigationOptions.map((el) => (
            <a key={el.id} href={el.id} className={`${isScrolled ? 'nav_glasseffect_wrapper' : ''} px-4 py-1 span-regular text-white hover:text-primary-500 transition-colors`}>
              {el.title}
            </a>
          ))}
        </nav>

      </div>
    </div>
  );
};

export default Header;