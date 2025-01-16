import ServiceCard from './ServiceCard';
import { FaReact, FaNodeJs, FaPython , FaDatabase } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Développement Frontend",
      icon: <FaReact />,
      description: "Création d'interfaces modernes et réactives avec React, Vue.js et les dernières technologies web."
    },
    {
      title: "Développement Backend",
      icon: <FaNodeJs />,
      description: "Création d'API robustes et scalables avec Node.js et django, Express et les dernières technologies backend."
    },
    {
      title: "Machine Learning",
      icon: <FaPython />,
      description: "Création de modèles de machine learning avec Python et les dernières technologies de l'intelligence artificielle."
    },
    {
      title: "Data Analyst",
      icon: <FaPython />,
      description: "Analyse de données avec Python et les dernières technologies de l'intelligence artificielle."
    }
    {
      title: "Base de données",
      icon: <FaDatabase />,
      description: "Création de base de données avec MongoDB, PostgreSQL et les dernières technologies de la base de données."
    }
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#EDE0D0', color: 'black' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Mes Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 