import { motion } from 'framer-motion';
import PofileImage from '../assets/images/profile.jpg'

const Home = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home" 
      className="min-h-screen flex items-center justify-center"
      style={{ 
        background: 'linear-gradient(to bottom right, #EDE0D0, #F5E6D3)',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-6"
        >
          Jonathan Mudiambat
        </motion.h1>
        <motion.p 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl text-gray-700 mb-8"
        >
          Développeur Full Stack Python & JavaScript et Data Analyst
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a 
            href="#projects" 
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors mr-4"
          >
            Voir mes projets
          </a>
          <a 
            href="#contact" 
            className="border-2 border-black text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-black hover:text-white transition-colors"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home; 