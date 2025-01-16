import { motion } from 'framer-motion';

const ProjectCard = ({ name, description, html_url, homepage, topics }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg p-6" style={{ backgroundColor: '#EDE0D0' }}>
      <h3 className="text-xl font-bold mb-2 text-black">{name}</h3>
      <p className="mb-4 text-black">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {topics.map((tech, index) => (
          <span key={index} className="px-3 py-1 rounded-full text-sm text-white" 
                style={{ backgroundColor: '#424242' }}>
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a 
          href={html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-4 py-2 rounded-lg transition-colors text-white"
          style={{ backgroundColor: '#424242' }}
        >
          Voir le code
        </a>
        {homepage && (
          <a 
            href={homepage} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 rounded-lg transition-colors text-white"
            style={{ backgroundColor: '#424242' }}
          >
            Démo live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 