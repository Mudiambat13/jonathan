import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const formRef = useRef();

  // Animation GSAP
  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    }
  }, []);

  // Gestion des données du formulaire
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Fonction de validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Le nom est requis.';
    if (!formData.email) {
      newErrors.email = 'L’email est requis.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L’email est invalide.';
    }
    if (!formData.message) newErrors.message = 'Le message est requis.';
    return newErrors;
  };

  // Gestion de la soumission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({}); // Réinitialiser les erreurs

    // Simuler l'envoi du formulaire
    console.log('Formulaire soumis avec succès:', formData);

    // Exemple : envoyer les données à un serveur (remplacer l'URL)
    try {
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Réponse du serveur:', data);
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
    }
  };

  return (
    <section id="contact" className="py-8" style={{ backgroundColor: '#EDE0D0' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-black">Contactez-moi</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nom"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input bg-white border border-gray-300 rounded p-2 w-full text-black"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input bg-white border border-gray-300 rounded p-2 w-full text-black"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="textarea bg-white border border-gray-300 rounded p-2 w-full h-32 text-black"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="button py-2 px-4 rounded text-white"
            style={{ backgroundColor: '#424242' }}
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;