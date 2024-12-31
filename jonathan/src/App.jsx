import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 via-sky-800 to-sky-950">
      <Navbar />
      
      <main>
        <Home />

        <Projects />

        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
