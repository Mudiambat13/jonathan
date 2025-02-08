import { motion } from 'framer-motion';

const ServiceCard = ({ title, mainIcon, description, technologies }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600/10 to-blue-500/10">
          {mainIcon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <div className="flex gap-4 mt-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="tooltip-container"
          >
            <div className="text-xl" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <span className="tooltip absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 transition-opacity duration-200">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard; 