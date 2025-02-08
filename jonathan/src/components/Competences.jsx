import { motion } from 'framer-motion';

const competencesList = [
  {
    title: "React & Redux",
    description: "Développement d'applications web complexes et interactives.",
    icon: "⚛️"
  },
  {
    title: "Python",
    description: "Développement backend et analyse de données.",
    icon: "🐍"
  },
  {
    title: "JavaScript",
    description: "Développement frontend moderne et animations.",
    icon: "🌟"
  },
  {
    title: "Data Analysis",
    description: "Analyse et visualisation de données complexes.",
    icon: "📊"
  },
  {
    title: "Node.js",
    description: "Construction d'APIs et services backend.",
    icon: "🚀"
  },
  {
    title: "SQL & NoSQL",
    description: "Gestion et optimisation des bases de données.",
    icon: "🗄️"
  }
];

const Competences = () => {
  return (
    <section id="competences" className="py-20" style={{ background: 'linear-gradient(to bottom right, #EDE0D0, #F5E6D3)' }}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Mes Compétences
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencesList.map((competence, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{competence.icon}</span>
                <h3 className="text-xl font-bold text-gray-800">{competence.title}</h3>
              </div>
              <p className="text-gray-600">{competence.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competences; 