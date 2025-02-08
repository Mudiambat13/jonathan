import { motion } from 'framer-motion';
import { 
  FaReact, FaPython, FaDatabase, FaCode, FaNodeJs, 
  FaGitAlt, FaDocker, FaHtml5, FaCss3, FaAws 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTailwindcss, SiTypescript, 
  SiMongodb, SiPostgresql, SiDjango, SiFlask,
  SiRedux, SiTensorflow, SiPandas 
} from 'react-icons/si';

const Background = () => {
  const icons = [
    { Icon: FaReact, size: "8rem", position: "top-20 left-10", rotation: 15, color: "rgba(97, 218, 251, 0.2)" },
    { Icon: FaPython, size: "6rem", position: "top-40 right-20", rotation: -20, color: "rgba(55, 118, 171, 0.2)" },
    { Icon: SiJavascript, size: "7rem", position: "bottom-40 left-30", rotation: 25, color: "rgba(247, 223, 30, 0.2)" },
    { Icon: FaDatabase, size: "5rem", position: "bottom-20 right-10", rotation: -15, color: "rgba(51, 103, 145, 0.2)" },
    { Icon: SiTailwindcss, size: "6rem", position: "top-1/2 left-1/3", rotation: 10, color: "rgba(6, 182, 212, 0.2)" },
    { Icon: FaCode, size: "7rem", position: "bottom-1/3 right-1/4", rotation: -25, color: "rgba(255, 71, 133, 0.2)" },
    { Icon: FaNodeJs, size: "7rem", position: "top-1/4 right-1/3", rotation: 20, color: "rgba(51, 153, 51, 0.2)" },
    { Icon: SiTypescript, size: "5rem", position: "bottom-1/4 left-1/4", rotation: -15, color: "rgba(49, 120, 198, 0.2)" },
    { Icon: FaGitAlt, size: "6rem", position: "top-3/4 right-1/2", rotation: 30, color: "rgba(240, 80, 50, 0.2)" },
    { Icon: FaDocker, size: "8rem", position: "bottom-2/3 left-2/3", rotation: -20, color: "rgba(36, 150, 237, 0.2)" },
    { Icon: SiMongodb, size: "7rem", position: "top-1/3 right-2/3", rotation: 15, color: "rgba(71, 162, 72, 0.2)" },
    { Icon: SiDjango, size: "6rem", position: "bottom-1/2 left-1/2", rotation: -25, color: "rgba(9, 46, 32, 0.15)" },
    { Icon: FaHtml5, size: "5rem", position: "top-2/3 left-20", rotation: 20, color: "rgba(227, 79, 38, 0.2)" },
    { Icon: FaCss3, size: "5rem", position: "bottom-2/4 right-30", rotation: -15, color: "rgba(21, 114, 182, 0.2)" },
    { Icon: SiRedux, size: "6rem", position: "top-3/4 right-40", rotation: 25, color: "rgba(118, 74, 188, 0.2)" },
    { Icon: SiTensorflow, size: "7rem", position: "bottom-3/4 left-40", rotation: -20, color: "rgba(255, 111, 0, 0.2)" },
    { Icon: SiPandas, size: "6rem", position: "top-1/4 left-2/3", rotation: 15, color: "rgba(21, 4, 88, 0.15)" },
    { Icon: FaAws, size: "7rem", position: "bottom-1/3 right-2/3", rotation: -25, color: "rgba(255, 153, 0, 0.2)" }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} transform`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: [item.rotation, -item.rotation, item.rotation],
            y: [0, 20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 0.2
          }}
        >
          <item.Icon 
            style={{ 
              fontSize: item.size,
              color: item.color,
              filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.1))'
            }} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Background; 