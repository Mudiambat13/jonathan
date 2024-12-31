import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const headers = {
          'Accept': 'application/vnd.github.v3+json',
        };

        const response = await fetch('https://api.github.com/users/Mudiambat13/repos?per_page=100', { headers });
        
        if (!response.ok) {
          throw new Error(`GitHub API responded with status ${response.status}`);
        }

        const data = await response.json();
        console.log('Raw GitHub data:', data);

        const filteredProjects = data
          .filter(project => {
            return project.name && (project.description || !project.fork);
          })
          .sort((a, b) => {
            const dateA = new Date(a.updated_at);
            const dateB = new Date(b.updated_at);
            return dateB - dateA || b.stargazers_count - a.stargazers_count;
          })
          .slice(0, 9);

        console.log('Filtered projects:', filteredProjects);
        
        setProjects(filteredProjects);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Projets statiques de secours au cas où l'API ne fonctionne pas
  const fallbackProjects = [
    {
      id: 1,
      name: "Portfolio",
      description: "Mon portfolio personnel créé avec React et Tailwind CSS",
      topics: ["react", "tailwind", "javascript"],
      html_url: "https://github.com/jonathan13dev/portfolio",
      homepage: "https://votre-portfolio.com"
    },
    // Ajoutez d'autres projets de secours si nécessaire
  ];

  const displayProjects = projects.length > 0 ? projects : fallbackProjects;

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-sky-900/30 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sky-200 mb-4 h-20 overflow-hidden">
                  {project.description || "Un projet intéressant en développement"}
                </p>
                
                {project.topics && project.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics.map(topic => (
                      <span 
                        key={topic}
                        className="text-xs px-2 py-1 rounded-full bg-sky-800/50 text-sky-200"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex space-x-4 mt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-sky-700/50 hover:bg-sky-600/50 text-white rounded-lg transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </motion.a>
                  {project.homepage && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-sky-800/30 hover:bg-sky-700/30 text-white rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Demo
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