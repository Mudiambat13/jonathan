import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, technologies, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Voir le projet
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 