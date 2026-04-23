import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LeadershipAndExtracurriculars from './components/LeadershipAndExtracurriculars';
import ExperienceAndProjects from './components/ExperienceAndProjects';
import SkillCloud from './components/SkillCloud';
import Contact from './components/Contact';

function App() {
  return (
    <main className="min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <About />
      <SkillCloud />
      <ExperienceAndProjects />
      <LeadershipAndExtracurriculars />
      <Contact />
    </main>
  );
}

export default App;
