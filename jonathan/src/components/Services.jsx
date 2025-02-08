import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaChartBar, 
  FaBrain,
  FaPython,
  FaCode 
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiTensorflow, 
  SiPandas, 
  SiScikitlearn,
  SiMongodb,
  SiPostgresql
} from 'react-icons/si';

const Services = () => {
  const services = [
    {
      title: "Développement Frontend",
      mainIcon: <FaReact className="text-[#61DAFB] text-4xl" />,
      description: "Création d'interfaces modernes et réactives avec React et les dernières technologies web.",
      technologies: [
        { icon: <FaReact />, color: "#61DAFB", name: "React" },
        { icon: <FaCode />, color: "#F7DF1E", name: "JavaScript" },
        { icon: <FaCode />, color: "#38B2AC", name: "Tailwind" }
      ],
      image: "/assets/images/frontend-service.jpg"
    },
    {
      title: "Développement Backend",
      mainIcon: <FaNodeJs className="text-[#68A063] text-4xl" />,
      description: "Création d'API robustes et scalables avec Node.js et Django.",
      technologies: [
        { icon: <FaNodeJs />, color: "#68A063", name: "Node.js" },
        { icon: <SiDjango />, color: "#092E20", name: "Django" },
        { icon: <FaPython />, color: "#3776AB", name: "Python" }
      ],
      image: "/assets/images/backend-service.jpg"
    },
    {
      title: "Machine Learning",
      mainIcon: <FaBrain className="text-[#FF6F00] text-4xl" />,
      description: "Développement de modèles d'intelligence artificielle et apprentissage automatique.",
      technologies: [
        { icon: <SiTensorflow />, color: "#FF6F00", name: "TensorFlow" },
        { icon: <SiScikitlearn />, color: "#F7931E", name: "Scikit-learn" },
        { icon: <FaPython />, color: "#3776AB", name: "Python" }
      ],
      image: "/assets/images/machine-learning-service.jpg"
    },
    {
      title: "Data Analysis",
      mainIcon: <FaChartBar className="text-[#FF4785] text-4xl" />,
      description: "Analyse approfondie des données et visualisation avec des outils modernes.",
      technologies: [
        { icon: <SiPandas />, color: "#150458", name: "Pandas" },
        { icon: <FaChartBar />, color: "#FF4785", name: "Visualization" },
        { icon: <FaPython />, color: "#3776AB", name: "Python" }
      ],
      image: "/assets/images/data-analysis-service.jpg"
    },
    {
      title: "Base de données",
      mainIcon: <FaDatabase className="text-[#336791] text-4xl" />,
      description: "Conception et gestion de bases de données relationnelles et NoSQL.",
      technologies: [
        { icon: <SiMongodb />, color: "#47A248", name: "MongoDB" },
        { icon: <SiPostgresql />, color: "#336791", name: "PostgreSQL" },
        { icon: <FaDatabase />, color: "#336791", name: "SQL" }
      ],
      image: "/assets/images/database-service.jpg"
    }
  ];

  return (
    <section id="services" className="py-20" style={{ background: 'linear-gradient(to bottom right, #EDE0D0, #F5E6D3)' }}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 