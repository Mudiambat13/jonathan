import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EDE0D0' }}>
      <Navbar />
      
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
