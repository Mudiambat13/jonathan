import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Initialiser EmailJS au chargement du composant
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Jonathan',
        }
      );

      console.log('Succès:', result);
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Afficher le message de succès pendant 5 secondes
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <FaEnvelope className="text-2xl" />,
      href: 'mailto:jonathanmudiambat@gmail.com',
      color: 'hover:text-sky-400'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      href: 'https://github.com/Mudiambat13',
      color: 'hover:text-sky-400'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      href: 'https://linkedin.com/in/jonathan-mudiambat-m-609899130/',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        Contactez-moi
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Formulaire de contact */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-sky-400 mb-4">
            Envoyez-moi un message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sky-200 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-sky-900/30 border border-sky-700 text-white focus:outline-none focus:border-sky-400 transition-colors backdrop-blur-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sky-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-sky-900/30 border border-sky-700 text-white focus:outline-none focus:border-sky-400 transition-colors backdrop-blur-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sky-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-sky-900/30 border border-sky-700 text-white focus:outline-none focus:border-sky-400 transition-colors backdrop-blur-sm"
              />
            </div>
            
            {/* Affichage des messages de statut */}
            {status.error && (
              <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-100">
                {status.error}
              </div>
            )}
            
            {status.submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-100">
                Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status.submitting}
              className={`w-full py-3 px-6 rounded-lg ${
                status.submitting 
                  ? 'bg-sky-800 cursor-not-allowed' 
                  : 'bg-sky-600 hover:bg-sky-700'
              } text-white font-semibold transition-colors`}
            >
              {status.submitting ? 'Envoi en cours...' : 'Envoyer'}
            </motion.button>
          </form>
        </motion.div>

        {/* Informations de contact */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-semibold text-sky-400 mb-4">
              Retrouvez-moi sur
            </h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 text-sky-200 ${link.color} transition-colors`}
                  whileHover={{ x: 10 }}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-sky-400 mb-4">
              Disponibilité
            </h3>
            <p className="text-sky-200">
              Je suis actuellement disponible pour des projets freelance et des opportunités à temps plein.
            </p>
          </div>

          <div className="bg-sky-900/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-sky-400 mb-4">
              Réponse rapide
            </h3>
            <p className="text-sky-200">
              Je réponds généralement dans les 24 heures. N'hésitez pas à me contacter pour toute question ou proposition de projet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 