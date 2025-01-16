const Competences = () => {
  return (
    <section id="competences" className="bg-white text-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {/* Exemple de compétence */}
          <div className="p-4 shadow-lg rounded-lg">
            <h3 className="font-semibold text-xl">React & Redux</h3>
            <p className="text-md mt-2">Développement d'applications web complexes et interactives.</p>
          </div>
          {/* Ajoutez d'autres compétences ici */}
        </div>
      </div>
    </section>
  );
};

export default Competences; 