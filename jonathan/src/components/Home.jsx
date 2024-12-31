import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import profileImage from '/assets/images/profile.jpg';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FaPython, FaReact, FaDatabase, FaChartBar } from 'react-icons/fa';

const TypewriterText = ({ text, delay = 0.1, startDelay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Reset text when component mounts
    setDisplayedText('');
    
    // Initial delay
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
    }, startDelay * 1000);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!isTyping) return;

    const typeText = async () => {
      for (let i = 0; i < text.length; i++) {
        await new Promise(resolve => setTimeout(resolve, delay * 1000));
        setDisplayedText(text.slice(0, i + 1));
      }
    };

    typeText();

    return () => {
      setDisplayedText('');
      setIsTyping(false);
    };
  }, [text, delay, isTyping]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      {displayedText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </motion.span>
  );
};

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 10 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-6 h-10 border-2 border-sky-400 rounded-full p-1"
      >
        <motion.div className="w-2 h-2 bg-sky-400 rounded-full mx-auto" />
      </motion.div>
      <p className="text-sky-400 text-sm mt-2">Défiler</p>
    </motion.div>
  );
};

const TechIcons = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 9.5 }}
      className="flex justify-center gap-6 mt-8"
    >
      {[FaPython, FaReact, FaDatabase, FaChartBar].map((Icon, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="text-2xl md:text-3xl text-sky-400" />
        </motion.div>
      ))}
    </motion.div>
  );
};

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#38bdf8",
          },
          links: {
            color: "#38bdf8",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-16 md:py-0">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {/* Section texte */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
            >
              <TypewriterText 
                text="Bonjour, je suis " 
                delay={0.15}
                startDelay={0.5}
              />
              <span className="text-sky-400 block">
                <TypewriterText 
                  text="Jonathan Mudiambat" 
                  delay={0.15}
                  startDelay={2.5}
                />
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-3xl font-semibold text-sky-200 mb-6 md:mb-8 leading-relaxed"
            >
              <TypewriterText 
                text="Développeur Full Stack Python & JavaScript" 
                delay={0.15}
                startDelay={4.5}
              />
              <br className="hidden md:block" />
              <span className="text-sky-300 inline-block mt-2 md:mt-0">
                <TypewriterText 
                  text="Data Analyst" 
                  delay={0.15}
                  startDelay={7}
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 8.5 }}
              className="text-base md:text-xl text-sky-100 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Passionné par le développement web et l'analyse de données, 
              je transforme des idées innovantes en applications performantes. 
              Mon expertise en Python et JavaScript me permet de créer des 
              solutions complètes, de l'interface utilisateur à l'analyse de données.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 9 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg transition-colors text-sm md:text-base text-center"
              >
                Voir mes projets
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-sky-800/50 hover:bg-sky-700/50 text-white px-8 py-3 rounded-lg transition-colors backdrop-blur-sm text-sm md:text-base text-center"
              >
                Me contacter
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Section image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-lg mx-auto"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                <div className="relative">
                  {/* Cercle décoratif */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-sky-600 rounded-full blur-2xl opacity-20 transform scale-110" />
                  
                  {/* Image avec bordure */}
                  <div className="relative rounded-2xl overflow-hidden border-4 border-sky-400/30 shadow-2xl">
                    <img
                      src={profileImage}
                      alt="Jonathan"
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 to-transparent" />
                  </div>

                  {/* Éléments décoratifs */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-400/10 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-600/10 rounded-full blur-xl" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900 opacity-20"
        animate={{
          background: [
            "linear-gradient(to bottom right, #0c4a6e, #075985, #0c4a6e)",
            "linear-gradient(to bottom right, #075985, #0c4a6e, #075985)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default Home; 