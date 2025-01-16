import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="bg-[#EDE0D0] shadow-md rounded-lg p-6 border border-gray-200"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div 
          className="text-4xl mb-4"
          whileHover={{ 
            rotate: 360,
            transition: { duration: 0.6 }
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-3 text-black">{title}</h3>
        <p className="text-black">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 