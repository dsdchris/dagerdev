import { useState } from 'react';
import Layout from './components/Layout';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      <div id="about" className="section">
        <AboutSection />
      </div>
      <div id="experience" className="section">
        <ExperienceSection />
      </div>
      <div id="projects" className="section">
        <ProjectsSection />
      </div>
    </Layout>
  );
}

export default App;