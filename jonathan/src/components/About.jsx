import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaAws,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaFlask,
  FaFileExcel
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb,
  SiJavascript,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiTensorflow,
  SiDotnet,
  SiDjango
} from 'react-icons/si';

const About = () => {
  const skills = [
    // Langages & Frameworks
    { 
      category: "Langages & Frameworks",
      items: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "C#/.NET", icon: <SiDotnet className="text-[#512BD4]" /> },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
        { name: "Flask", icon: <FaFlask className="text-[#000000]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ]
    },
    // Data Science & Analytics
    {
      category: "Data Science & Analytics",
      items: [
        { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
        { name: "NumPy", icon: <SiNumpy className="text-[#013243]" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
        { name: "Jupyter", icon: <SiJupyter className="text-[#F37626]" /> },
        { name: "Excel", icon: <FaFileExcel className="text-[#217346]" /> }
      ]
    },
    // Outils & Base de données
    {
      category: "Outils & Base de données",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> }
      ]
    }
  ];

  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-white mb-8"
      >
        À Propos de Moi
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Mon Parcours</h3>
          <p className="text-gray-300">
          "Passionné par la technologie et le développement, je me suis forgé une solide expérience dans le domaine du contrôle en salle d’opérations et de l’analyse de données avant de me reconvertir avec succès en tant que développeur front-end et full-stack. Avec un Mastère Spécialisé en programmation et plusieurs projets à mon actif, je combine rigueur, créativité et expertise technique pour concevoir des solutions modernes et performantes. Mon parcours illustre ma capacité à relever des défis complexes et à m'adapter rapidement à de nouveaux environnements technologiques."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Compétences</h3>
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h4 className="text-lg font-medium text-blue-400">
                {category.category}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.2,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center p-4 rounded-lg backdrop-blur-sm bg-transparent hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="text-4xl mb-2 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 text-sm text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 