import NavItem from './NavItem';
import SocialLinks from './SocialLinks';

function Sidebar({ activeSection }) {
  return (
    <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col p-8 sm:p-6 lg:p-8 lg:fixed lg:h-screen lg:ml-8 xl:ml-32">
      <div className="mt-4 lg:mt-12 mb-8 lg:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 text-textprimary">
          Christian Santamaria
        </h1>
        <h2 className="text-lg sm:text-xl font-medium text-gray-300 mb-4">
          Desarrollador Full-Stack
        </h2>
        <p className="text-[#94a3b8] text-sm sm:text-base">
          Diseño experiencias digitales accesibles, precisas y creativas para la web.
        </p>
      </div>
      
      <nav className="mb-8 lg:mb-auto">
        <ul className="space-y-4 font-bold font-small">
          <NavItem id="about" label="SOBRE MÍ" activeSection={activeSection} />
          <NavItem id="experience" label="EXPERIENCIA" activeSection={activeSection} />
          <NavItem id="projects" label="PROYECTOS" activeSection={activeSection} />
        </ul>
      </nav>
      
      <div className="mt-auto mb-4 lg:mb-12">
        <SocialLinks />
      </div>
    </div>
  );
}

export default Sidebar;