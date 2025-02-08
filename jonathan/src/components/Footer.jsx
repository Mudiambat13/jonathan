import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook, FaTelegram } from 'react-icons/fa';

const socialLinks = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size="1.5em" />,
    url: "https://wa.me/243977571963",
    hoverColor: "hover:text-green-500"
  },
  {
    name: "GitHub",
    icon: <FaGithub size="1.5em" />,
    url: "https://github.com/Mudiambat13",
    hoverColor: "hover:text-gray-700"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size="1.5em" />,
    url: "https://www.linkedin.com/in/jonathan-mudiambat-m-609899130/",
    hoverColor: "hover:text-blue-500"
  },
  {
    name: "Facebook",
    icon: <FaFacebook size="1.5em" />,
    url: "https://facebook.com/votre-profil",
    hoverColor: "hover:text-blue-600"
  },
  {
    name: "Telegram",
    icon: <FaTelegram size="1.5em" />,
    url: "https://t.me/votre-profil",
    hoverColor: "hover:text-blue-400"
  }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600/5 to-blue-500/5 backdrop-blur-sm border-t border-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Jonathan Code
            </h3>
            <p className="text-gray-600 mt-2">
              Développeur Full Stack & Data Analyst
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 ${social.hoverColor} transition-all duration-300`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-600">
              © {new Date().getFullYear()} Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Conçu et développé avec ❤️
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 