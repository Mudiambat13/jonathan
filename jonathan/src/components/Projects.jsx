import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import jamhyImage from '../assets/images/jamhy.png';
import portfolioImage from '../assets/images/portfolio.png';
import mediconnectImage from '../assets/images/mediconnect.webp';
import mkboutiqueImage from '../assets/images/mk.png';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const featuredRepos = [
    {
      id: 1,
      name: "Portfolio",
      description: "Mon portfolio personnel créé avec React et Tailwind CSS. Une vitrine moderne et responsive de mes compétences et projets en développement web.",
      topics: ["react", "tailwind", "javascript", "portfolio"],
      html_url: "https://github.com/jonathan13dev/portfolio",
      homepage: "https://jonathan-code.vercel.app/",
      image: portfolioImage
    },
    {
      id: 2,
      name: "MK Boutique",
      description: "Site web élégant pour un service de maquillage à domicile. Interface moderne permettant aux clientes de découvrir les services, voir les réalisations et prendre rendez-vous facilement.",
      topics: ["react", "tailwind", "javascript", "html"],
      html_url: "https://github.com/Mudiambat13/mk",
      homepage: "https://mk-kohl.vercel.app/",
      image: mkboutiqueImage
    },
    {
      id: 3,
      name: "MediConnect",
      description: "Une plateforme de téléconsultation médicale permettant aux patients de prendre rendez-vous et consulter des médecins en ligne. Développée avec Django, Tailwind CSS et SQLite.",
      topics: ["django", "tailwind", "sqlite", "python", "html"],
      html_url: "https://github.com/Mudiambat13/Doctor",
      homepage: "https://mediconnect-demo.com",
      image: mediconnectImage
    },
    {
      id: 4,
      name: "Jamhy Sarl",
      description: "Site vitrine moderne pour Jamhy Sarl, une entreprise spécialisée dans le génie civil et les grands travaux. Interface interactive présentant les services, projets réalisés et l'expertise de l'entreprise dans le secteur de la construction.",
      topics: ["react", "tailwind", "javascript", "html"],
      html_url: "https://github.com/Mudiambat13/jmy",
      homepage: "https://jmy-iota.vercel.app/",
      image: jamhyImage
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setProjects(featuredRepos);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <section id="projects" className="py-20" style={{ background: 'linear-gradient(to bottom right, #EDE0D0, #F5E6D3)' }}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Mes Projets
        </motion.h2>
        
        {loading ? (
          <div className="flex justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 