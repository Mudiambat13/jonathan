import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiDjango, SiSqlite } from 'react-icons/si';

const techIcons = {
  react: { icon: FaReact, color: "#61DAFB" },
  tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  python: { icon: FaPython, color: "#3776AB" },
  django: { icon: SiDjango, color: "#092E20" },
  sqlite: { icon: SiSqlite, color: "#003B57" },
  html: { icon: FaHtml5, color: "#E34F26" },
  portfolio: { icon: FaReact, color: "#61DAFB" }
};

const ProjectCard = ({ name, description, html_url, homepage, topics, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
    >
      {image && (
        <div className="relative h-64 overflow-hidden">
          <motion.img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-top"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          {name}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {topics.map((tech, index) => {
            const IconInfo = techIcons[tech.toLowerCase()];
            if (!IconInfo) return null;
            
            const { icon: Icon, color } = IconInfo;
            return (
              <motion.div
                key={index}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                className="tooltip-container"
              >
                <Icon 
                  className="text-2xl transition-transform duration-200 hover:scale-110" 
                  style={{ color }}
                />
                <span className="tooltip absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 transition-opacity duration-200">
                  {tech}
                </span>
              </motion.div>
            );
          })}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium transition-all hover:opacity-90 shadow-md hover:shadow-lg"
          >
            <FaGithub className="mr-2" />
            Code source
          </motion.a>
          
          {homepage && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-lg border-2 border-purple-500 text-purple-600 font-medium hover:bg-purple-50 transition-colors shadow-md hover:shadow-lg"
            >
              <FaExternalLinkAlt className="mr-2" />
              Démo live
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 