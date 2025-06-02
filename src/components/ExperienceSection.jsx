import { useState, useEffect, useRef } from 'react';

function ExperienceSection() {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const dropdownRef = useRef(null);
  
  const experiences = [
    {
      period: "Oct 2023 - Feb 2024",
      title: "Customer Service Associate",
      subtitle: "Amazon",
      description: "Brindé soporte al cliente en inglés y español a través de chat y correo electrónico. Manejo de reembolsos, preguntas sobre productos y problemas relacionados con cuentas con un alto índice de satisfacción",
    }
  ];

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLanguageOptions(false);
      }
    };

    if (showLanguageOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageOptions]);

  // Enlaces a los CVs
  const cvLinks = {
    spanish: "/cv-español.pdf",
    english: "/cv-english.pdf"
  };

  // Función para manejar la descarga del CV
  const handleCvDownload = (language) => {
    const link = document.createElement('a');
    link.href = cvLinks[language];
    link.download = `CV_${language === 'spanish' ? 'Español' : 'English'}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowLanguageOptions(false);
  };

  return (
    <div className="max-w-3xl text-[13px] mr-20 sm:mt-[-150px] sm:mb-[-150px] mt-[-100px]" id="experience">
      {/* ANCLA INVISIBLE PARA EL SCROLL - Posicionada exactamente donde debe empezar */}
      <div id="experience" style={{ position: 'absolute', top: '-100px', visibility: 'hidden' }}></div>
      
      {/* Botón de descarga de CV */}
      <div className="mb-8 relative" ref={dropdownRef}>
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowLanguageOptions(!showLanguageOptions);
          }}
          className="text-blue-400 hover:text-blue-300 flex items-center bg-transparent border-none cursor-pointer transition-colors duration-300 text-[15px]"
        >
          Descargar CV
          <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Menú desplegable de idiomas */}
        {showLanguageOptions && (
          <div className="absolute top-full left-0 mt-2 bg-[#1a2332] border border-slate-600/40 rounded-md shadow-lg z-10 min-w-[150px]">
            <button
              onClick={() => handleCvDownload('spanish')}
              className="w-full text-left px-4 py-2 text-gray-300 hover:bg-[#162039] hover:text-blue-400 transition-colors duration-200 rounded-t-md flex items-center"
            >
              <span className="mr-2">🇪🇸</span>
              Español
            </button>
            <button
              onClick={() => handleCvDownload('english')}
              className="w-full text-left px-4 py-2 text-gray-300 hover:bg-[#162039] hover:text-blue-400 transition-colors duration-200 rounded-b-md flex items-center"
            >
              <span className="mr-2">🇺🇸</span>
              English
            </button>
          </div>
        )}
      </div>

      {/* Experiencias */}
      {experiences.map((exp, index) => (
        <div key={index} className={`${index !== 0 ? 'mt-12' : ''} mb-12 group hover:bg-[#162039] hover:shadow-lg hover:shadow-black/20 border-t border-t-transparent hover:border-t-slate-600/40 p-4 rounded-md transition-all duration-300 cursor-pointer`}>        
          <div className="flex flex-col md:flex-row ">
            <span className="text-gray-400 md:w-[150px] md:mb-0 whitespace-nowrap min-w-fit mt-1">
              {exp.period}
            </span>
            
            <div className="flex-1">
              <h5 className="text-xl font-medium flex items-center group-hover:text-teal-300 transition-colors duration-300 text-[12px]">
                {exp.title}
              </h5>
              <p className="text-lg font-medium flex items-center group-hover:text-teal-300 transition-colors duration-300 text-[12px]">{exp.subtitle}</p>
              <p className="mt-2 mb-4 text-gray-300">{exp.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;