function NavItem({ id, label, activeSection }) {
  const scrollToSection = (e) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (element) {
      // Scroll básico que SÍ funciona
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' // Esto posiciona el elemento al inicio del viewport
      });
    }
  };

  // Determinamos el estado para calcular el padding
  const isActive = activeSection === id;
     
  return (
    <li className="ml-4 sm:ml-6 lg:ml-[36px]">
      <a
        href={`#${id}`}
        onClick={scrollToSection}
        className={`flex items-center group transition-all duration-300 text-xs sm:text-sm lg:text-[12px] ${
          isActive ? 'text-white' : 'text-[#94a3b8] hover:text-gray-300'
        } ${
          isActive
            ? 'pl-8 sm:pl-10 lg:pl-12'
            : 'pl-4 sm:pl-5 lg:pl-6 hover:pl-8 sm:hover:pl-10 lg:hover:pl-12'
        }`}
      >
        {/* Línea que se posiciona y cambia de tamaño */}
        <span 
          className={`absolute left-0 h-[1px] bg-white ml-4 sm:ml-6 lg:ml-[36px] transition-all duration-300 ${
            isActive
              ? 'w-12 sm:w-14 lg:w-16'
              : 'w-8 sm:w-9 lg:w-10 group-hover:w-12 sm:group-hover:w-14 lg:group-hover:w-16'
          }`}
        ></span>
                 
        {label}
      </a>
    </li>
  );
}

export default NavItem;