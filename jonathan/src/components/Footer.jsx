import { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: '#424242' }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">Jonathan Code</h3>
            <p>© {new Date().getFullYear()} Tous droits réservés.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/243977571963" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-white hover:text-green-500 transition-colors duration-300">
              <FaWhatsapp size="1.5em" />
            </a>
            <a href="https://github.com/Mudiambat13" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-white hover:text-gray-300 transition-colors duration-300">
              <FaGithub size="1.5em" />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-mudiambat-m-609899130/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-white hover:text-blue-500 transition-colors duration-300">
              <FaLinkedin size="1.5em" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 