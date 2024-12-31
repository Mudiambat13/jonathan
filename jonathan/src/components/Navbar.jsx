import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: "Accueil", href: "#home" },
    { title: "Services", href: "#services" },
    { title: "Projets", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-sky-950/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold text-white">
            Jonathan<span className="text-sky-400">.dev</span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sky-100 hover:text-sky-400 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Mobile Overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-sky-950/95 backdrop-blur-lg"
          >
            <div className="px-4 py-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block py-2 text-sky-100 hover:text-sky-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 