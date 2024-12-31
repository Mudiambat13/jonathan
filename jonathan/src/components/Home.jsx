import { motion } from 'framer-motion';
import profileImage from '/assets/images/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Fond avec effet parallaxe */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/50 to-sky-950/50 backdrop-blur-sm"></div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src={profileImage}
              alt="Jonathan"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-sky-400"
              onError={(e) => {
                console.error('Erreur de chargement de l\'image:', e);
                e.target.src = 'https://via.placeholder.com/128';
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Bonjour, je suis <span className="text-sky-400">Jonathan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Développeur Full Stack créatif spécialisé en React et Django. 
            Je transforme des idées innovantes en applications web performantes 
            et intuitives. Passionné par l'expérience utilisateur et les 
            solutions technologiques qui font la différence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Voir mes projets
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-sky-800/50 hover:bg-sky-700/50 text-white px-8 py-3 rounded-lg transition-colors backdrop-blur-sm"
            >
              Me contacter
            </motion.a>
          </motion.div>

          {/* Indicateur de défilement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-6 text-sky-400"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 