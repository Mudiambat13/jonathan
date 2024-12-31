import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Liste des repos spécifiques que vous voulez afficher
  const featuredRepos = [
    {
      id: 1,
      name: "Portfolio",
      description: "Mon portfolio personnel créé avec React et Tailwind CSS. Une vitrine moderne et responsive de mes compétences et projets en développement web.",
      topics: ["react", "tailwind", "javascript", "portfolio"],
      html_url: "https://github.com/jonathan13dev/portfolio",
      homepage: "https://votre-portfolio.com"
    },
    {
      id: 2,
      name: "MediConnect",
      description: "Une plateforme de téléconsultation médicale permettant aux patients de prendre rendez-vous et consulter des médecins en ligne. Développée avec Django, Tailwind CSS et SQLite, offrant une expérience utilisateur fluide et sécurisée.",
      topics: ["django", "tailwind", "sqlite", "python", "html", "téléconsultation"],
      html_url: "https://github.com/Mudiambat13/Doctor",
      homepage: "https://mediconnect-demo.com"
    }
  ];

  useEffect(() => {
    // Simuler un petit délai de chargement
    setTimeout(() => {
      setProjects(featuredRepos);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        Mes Projets
      </motion.h2>

      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-400"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-sky-900/30 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.name}
                </h3>
                <p className="text-sky-200 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.topics.map(topic => (
                    <span 
                      key={topic}
                      className="text-sm px-3 py-1 rounded-full bg-sky-800/50 text-sky-200 font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-sky-700/50 hover:bg-sky-600/50 text-white rounded-lg transition-colors font-medium"
                  >
                    <FaGithub className="mr-2 text-xl" />
                    Voir le code
                  </motion.a>
                  {project.homepage && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 bg-sky-800/30 hover:bg-sky-700/30 text-white rounded-lg transition-colors font-medium"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Démo live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects; 