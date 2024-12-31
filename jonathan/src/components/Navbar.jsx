import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet de scroll pour changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { title: 'Accueil', href: '#home' },
    { title: 'Projets', href: '#projects' },
    { title: 'À propos', href: '#about' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-sky-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo avec animation */}
          <motion.a 
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="font-bold text-xl flex items-center"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sky-400"
            >
              Jonathan
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white ml-2"
            >
              Code
            </motion.span>
          </motion.a>

          {/* Menu Desktop avec effet de soulignement */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="relative text-sky-200 hover:text-white transition-colors py-2"
                whileHover={{ scale: 1.1 }}
              >
                <span>{item.title}</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Menu Mobile Button avec animation */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-sky-200 hover:text-white p-2 rounded-lg hover:bg-sky-800/30"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Menu Mobile avec animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md bg-sky-900/80 rounded-lg mt-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="block px-3 py-2 text-sky-200 hover:text-white hover:bg-sky-800/50 rounded-md transition-all"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 