import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaAws, FaGitAlt, FaDocker, 
  FaPython, FaFlask, FaFileExcel 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiJavascript,
  SiPostgresql, SiPandas, SiNumpy, SiScikitlearn,
  SiJupyter, SiTensorflow, SiDotnet, SiDjango
} from 'react-icons/si';

const About = () => {
  const skills = [
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
    <section id="about" className="py-20" style={{ background: 'linear-gradient(to bottom right, #EDE0D0, #F5E6D3)' }}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          À Propos de Moi
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Mon Parcours
            </h3>
            <div className="space-y-6">
              <div className="bg-white/50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🎓</span>
                  Formation Principale
                </h4>
                <div className="pl-4 border-l-2 border-purple-500">
                  <p className="text-gray-700 font-medium">Master en Développement Frontend et Fullstack JavaScript</p>
                  <p className="text-gray-600">Tech Global University</p>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  Certifications Professionnelles
                </h4>
                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-blue-500">
                    <p className="text-gray-700 font-medium">Python Essentials 1 & 2</p>
                    <p className="text-gray-600">Certification Cisco</p>
                  </div>
                  <div className="pl-4 border-l-2 border-green-500">
                    <p className="text-gray-700 font-medium">Visualisation de Données</p>
                    <p className="text-gray-600">Certification UniAthena</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">💻</span>
                  Formations Spécialisées Udemy
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="pl-4 border-l-2 border-yellow-500">
                    <p className="text-gray-700 font-medium">Développement Web</p>
                    <ul className="text-gray-600 list-disc ml-4 mt-2">
                      <li>Python</li>
                      <li>Django</li>
                      <li>Flask</li>
                    </ul>
                  </div>
                  <div className="pl-4 border-l-2 border-red-500">
                    <p className="text-gray-700 font-medium">Data Science</p>
                    <ul className="text-gray-600 list-disc ml-4 mt-2">
                      <li>Machine Learning</li>
                      <li>Data Analysis</li>
                      <li>Visualisation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-purple-600/10 to-blue-500/10 p-4 rounded-lg"
              >
                <p className="text-gray-700 italic">
                  "Cette combinaison de formations techniques et pratiques me permet de concevoir des solutions modernes et performantes, en utilisant les meilleures pratiques du développement web et de l'analyse de données."
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {skills.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  {category.category}
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-3xl mb-2">
                        {skill.icon}
                      </div>
                      <span className="text-gray-600 text-sm text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 