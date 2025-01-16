import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

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
    setTimeout(() => {
      setProjects(featuredRepos);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Mes Projets
      </h2>
      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-400"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects; 