import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LeadershipAndExtracurriculars from './components/LeadershipAndExtracurriculars';
import ExperienceAndProjects from './components/ExperienceAndProjects';
import SkillCloud from './components/SkillCloud';
import Contact from './components/Contact';
import LLMProjectsDashboard from './components/LLMProjectsDashboard';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <SkillCloud />
    <ExperienceAndProjects />
    <LeadershipAndExtracurriculars />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <main className="min-h-screen selection:bg-fuchsia-500/30">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/llm-projects" element={<LLMProjectsDashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
