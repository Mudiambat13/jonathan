import { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">Jonathan Code</h3>
            <p>© {new Date().getFullYear()} Tous droits réservés.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/243977571963" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaWhatsapp size="1.5em" />
            </a>
            <a href="https://github.com/Mudiambat13" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub size="1.5em" />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-mudiambat-m-609899130/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaLinkedin size="1.5em" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 