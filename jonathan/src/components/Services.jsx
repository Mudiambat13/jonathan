import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaChartBar, 
  FaBrain,
  FaPython 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Développement Frontend",
      icon: <FaReact className="text-[#61DAFB]" />,
      description: "Création d'interfaces modernes et réactives avec React, Vue.js et les dernières technologies web."
    },
    {
      title: "Développement Backend",
      icon: <FaNodeJs className="text-[#68A063]" />,
      description: "Création d'API robustes et scalables avec Node.js et django, Express et les dernières technologies backend."
    },
    {
      title: "Machine Learning",
      icon: <FaBrain className="text-[#3776AB]" />,
      description: "Création de modèles de machine learning avec Python et les dernières technologies de l'intelligence artificielle."
    },
    {
      title: "Data Analyst",
      icon: <FaChartBar className="text-[#3776AB]" />,
      description: "Analyse de données avec Python et les dernières technologies de l'intelligence artificielle."
    },
    {
      title: "Base de données",
      icon: <FaDatabase className="text-[#336791]" />,
      description: "Création de base de données avec MongoDB, PostgreSQL et les dernières technologies de la base de données."
    }
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#EDE0D0' }}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-black text-center mb-12"
        >
          Mes Services
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 