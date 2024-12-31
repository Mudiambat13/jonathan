import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Mudiamabat13', icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/votre-profil', icon: <FaLinkedin /> },
    { name: 'Twitter', url: 'https://twitter.com/votre-compte', icon: <FaTwitter /> }
  ];

  return (
    <footer className="bg-sky-900/80 backdrop-blur-sm text-sky-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl flex items-center"
            >
              <span className="text-sky-400">Jonathan</span>
              <span className="text-white ml-2">Code</span>
            </motion.div>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#38bdf8' }}
                className="text-sky-200 hover:text-sky-400 text-2xl transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#home" 
            className="text-sky-200 hover:text-white transition-colors"
          >
            Accueil
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#projects" 
            className="text-sky-200 hover:text-white transition-colors"
          >
            Projets
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#about" 
            className="text-sky-200 hover:text-white transition-colors"
          >
            À propos
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#contact" 
            className="text-sky-200 hover:text-white transition-colors"
          >
            Contact
          </motion.a>
        </div>

        <div className="mt-8 pt-8 border-t border-sky-800 text-center">
          <p className="text-sm text-sky-300">
            © {new Date().getFullYear()} Jonathan Code. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 