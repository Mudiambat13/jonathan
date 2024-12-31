import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaChartBar, FaMobile, FaServer, FaTools, FaBrain } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ 
        duration: 0.5, 
        delay,
        whileHover: { duration: 0.2 }
      }}
      viewport={{ once: true }}
      className="group bg-sky-900/30 backdrop-blur-sm p-6 rounded-xl border border-sky-400/20 hover:border-sky-400/60 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div 
          className="p-3 bg-sky-400/20 rounded-lg mb-4 group-hover:bg-sky-400/30 transition-all duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="text-3xl text-sky-400 group-hover:text-sky-300" />
        </motion.div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-300 transition-colors">{title}</h3>
        <p className="text-sky-100/80 group-hover:text-sky-100 transition-colors">{description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Développement Frontend",
      description: "Création d'interfaces modernes et réactives avec React, Vue.js et les dernières technologies web.",
      delay: 0.2
    },
    {
      icon: FaServer,
      title: "Développement Backend",
      description: "Architecture robuste avec Python/Django, API RESTful et gestion de bases de données.",
      delay: 0.3
    },
    {
      icon: FaDatabase,
      title: "Base de données",
      description: "Conception et optimisation de bases de données SQL et NoSQL pour des performances optimales.",
      delay: 0.4
    },
    {
      icon: FaBrain,
      title: "Machine Learning",
      description: "Développement d'algorithmes d'apprentissage automatique et d'intelligence artificielle avec Python, TensorFlow et scikit-learn.",
      delay: 0.5
    },
    {
      icon: FaChartBar,
      title: "Data Analysis",
      description: "Analyse de données, visualisation et création de tableaux de bord avec Python, Pandas et Power BI.",
      delay: 0.6
    },
    {
      icon: FaMobile,
      title: "Applications Responsive",
      description: "Développement d'applications web adaptatives pour tous les appareils.",
      delay: 0.7
    },
    {
      icon: FaTools,
      title: "Maintenance & Support",
      description: "Support technique, maintenance et optimisation continue des applications.",
      delay: 0.8
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-transparent to-sky-950/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mes Services
          </h2>
          <p className="text-sky-100/80 max-w-2xl mx-auto">
            Une gamme complète de services pour répondre à vos besoins en développement web, 
            analyse de données et intelligence artificielle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 