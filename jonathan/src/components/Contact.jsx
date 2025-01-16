import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();

  useEffect(() => {
    gsap.fromTo(formRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5 });
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
  };

  return (
    <section id="contact" className="py-8" style={{ backgroundColor: '#EDE0D0' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-black">Contactez-moi</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Nom" 
            value={formData.name} 
            onChange={e => setFormData({ ...formData, name: e.target.value })} 
            className="input bg-white border border-gray-300 rounded p-2 w-full text-black" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={e => setFormData({ ...formData, email: e.target.value })} 
            className="input bg-white border border-gray-300 rounded p-2 w-full text-black" 
          />
          <textarea 
            placeholder="Message" 
            value={formData.message} 
            onChange={e => setFormData({ ...formData, message: e.target.value })} 
            className="textarea bg-white border border-gray-300 rounded p-2 w-full h-32 text-black"
          ></textarea>
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