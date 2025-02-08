import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import profileImage from '../assets/images/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-20" style={{ background: 'linear-gradient(to bottom right, #EDE0D0, #F5E6D3)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Texte et boutons */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Jonathan Mudiambat
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">
              Développeur Full Stack & Data Analyst
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg max-w-2xl">
              Passionné par la création d'applications web modernes et l'analyse de données.
              Je transforme vos idées en solutions digitales innovantes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Me Contacter
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 rounded-lg border-2 border-purple-500 text-purple-600 font-medium hover:bg-purple-50 transition-colors"
              >
                Voir mes projets
              </motion.a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/Mudiambat13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-purple-600 transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/jonathan-mudiambat-m-609899130/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://wa.me/243977571963"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-green-600 transition-colors"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>

          {/* Photo de profil */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Cercle décoratif */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-lg" />
              
              {/* Conteneur de l'image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={profileImage}
                  alt="Jonathan Mudiambat"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600/10 to-blue-500/10 rounded-full blur-md" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-md" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 