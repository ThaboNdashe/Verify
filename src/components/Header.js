import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setIsVisible(false);
      } else { // if scroll up show the navbar
        setIsVisible(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const isHomePage = location.pathname === '/';
  const shouldHaveBackgroundImage = [
    '/about', 
    '/services', 
    '/contact', 
    '/services/background-checks', 
    '/services/identity-verification',
    '/services/continuous-monitoring',
    '/services/bank-confirmation'
  ].includes(location.pathname);

  const headerStyle = shouldHaveBackgroundImage
    ? {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/verified.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 ${isHomePage ? 'bg-transparent' : shouldHaveBackgroundImage ? 'bg-opacity-70 bg-black' : 'bg-white'} ${isHomePage || shouldHaveBackgroundImage ? 'text-white' : 'text-blue-500'} py-4 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      style={headerStyle}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={`${process.env.PUBLIC_URL}/images/logo.png`} 
            alt="VerifyNow Logo" 
            className="w-auto h-10 md:h-12 lg:h-14 mr-3 object-contain"
          />
          <span className="text-2xl font-bold"></span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className={`font-bold hover:text-${isHomePage || shouldHaveBackgroundImage ? 'blue-300' : 'blue-700'} transition-colors duration-200`}>Home</Link></li>
            <li><Link to="/about" className={`font-bold hover:text-${isHomePage || shouldHaveBackgroundImage ? 'blue-300' : 'blue-700'} transition-colors duration-200`}>About Us</Link></li>
            <li><Link to="/services" className={`font-bold hover:text-${isHomePage || shouldHaveBackgroundImage ? 'blue-300' : 'blue-700'} transition-colors duration-200`}>Services</Link></li>
            <li><Link to="/contact" className={`font-bold hover:text-${isHomePage || shouldHaveBackgroundImage ? 'blue-300' : 'blue-700'} transition-colors duration-200`}>Contact Us</Link></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            ☰
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-0 bg-white shadow-md rounded-bl-lg w-full">
          <ul className="py-4">
            <li><Link to="/" className="block px-6 py-3 text-lg font-medium text-blue-500 hover:bg-blue-100" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="block px-6 py-3 text-lg font-medium text-blue-500 hover:bg-blue-100" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/services" className="block px-6 py-3 text-lg font-medium text-blue-500 hover:bg-blue-100" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/contact" className="block px-6 py-3 text-lg font-medium text-blue-500 hover:bg-blue-100" onClick={toggleMenu}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;