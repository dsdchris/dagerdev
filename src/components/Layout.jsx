import { useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import useActiveSection from '../hooks/useActiveSection';

function Layout({ children, activeSection, setActiveSection }) {
  const observedSection = useActiveSection(['about', 'experience', 'projects']);

  useEffect(() => {
    if (observedSection) {
      setActiveSection(observedSection);
    }
  }, [observedSection, setActiveSection]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0a1326] text-white">
      <Sidebar activeSection={activeSection} />
      <MainContent>{children}</MainContent>
    </div>
  );
}

export default Layout;