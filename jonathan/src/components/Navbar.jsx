import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navbarRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.to(navbarRef.current, { opacity: 1, duration: 1 });
  }, []);

  return (
    <nav ref={navbarRef} className={`fixed w-full z-10 shadow-md text-white font-mono`} style={{ backgroundColor: '#424242' }}>
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        <a href="#home" className="text-2xl text-white font-bold">
          Jonathan Code
        </a>
        <div className="text-3xl cursor-pointer md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
        <ul className={`flex gap-4 mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:static absolute bg-gray-900 md:bg-transparent left-0 w-full md:w-auto md:gap-8`}>
          <li><a href="#home" className="transition-colors duration-300 hover:text-teal-500">Accueil</a></li>
          <li><a href="#about" className="transition-colors duration-300 hover:text-teal-500">À propos</a></li>
          <li><a href="#services" className="transition-colors duration-300 hover:text-teal-500">Services</a></li>
          <li><a href="#contact" className="transition-colors duration-300 hover:text-teal-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 