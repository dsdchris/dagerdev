function ProjectsSection() {
  const projects = [
    {
      title: "Asistente de IA para una Cafetería",
      subtitle: "Desarrollador de Automatización",
      image: "/miniatura.jpg",
      description: "Desarrollé una aplicación web para control de ingresos y gastos personales. Implementé funcionalidades como registro de movimientos, balance automático y visualización moderna del historial financiero.",
      skills: ["IA", "n8n", "API", "OpenAI", "Meta"],
      link: "https://t.me/Aidagerbot"
    },
    {
      title: "Mi Wallet App",
      subtitle: "Desarrollador Full-Stack",
      image: "/miniatura2.png",
      description: "Desarrollé una aplicación web para control de ingresos y gastos personales. Implementé funcionalidades como registro de movimientos, balance automático y visualización moderna del historial financiero.",
      skills: ["JavaScript", "HTML", "CSS", "LOCALSTORAGE"],
      link: "https://miwallet.vercel.app/",
      apkLink: "/Mi_wallet.apk" // Ruta al archivo APK
    },
    {
      title: "Dagerid",
      subtitle: "Desarrollador de Automatización",
      image: "/image.png",
      description: "Dagerid es una app web moderna para gestionar tus hábitos de lectura. Te permite registrar libros, seguir tu progreso, visualizar estadísticas y desbloquear logros que te motivan a seguir leyendo, todo con una interfaz intuitiva y atractiva.",
      skills: ["JavaScript", "HTML", "Bootstrap", "LOCALSTORAGE", "API REST"],
      link: "https://dagerid.vercel.app"
    }
  ];

  const SkillTag = ({ skill }) => (
    <span className="inline-block px-2 sm:px-3 py-1 rounded-full bg-teal-900/30 text-teal-300 text-xs sm:text-sm mr-2 mb-2 lg:text-[11px]">
      {skill}
    </span>
  );

  // Función para manejar la descarga del APK
  const handleApkDownload = (apkLink, appName) => {
    // Crear un elemento <a> temporal para la descarga
    const link = document.createElement('a');
    link.href = apkLink;
    link.download = `${appName.replace(/\s+/g, '_')}.apk`; // Nombre del archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-full lg:max-w-3xl lg:mr-8 xl:mr-20 lg:mt-[-550px] mt-[-490px]" id="projects" style={{ paddingTop: '80px', marginBottom: '-80px' }}>
      {projects.map((project, index) => (
        <div key={index} className={`${index !== 0 ? 'mt-8 sm:mt-12' : ''} mb-8 sm:mb-12 group hover:bg-[#162039] hover:shadow-lg hover:shadow-black/20 border-t border-t-transparent hover:border-t-slate-600/40 p-4 rounded-md transition-all duration-300 cursor-pointer`}>
          <a href={project.link} className="flex flex-col sm:flex-row items-start" target="_blank">
            <div className="mb-4 sm:mb-0 sm:mr-6 w-full sm:w-auto flex justify-center sm:justify-start">
              <img src={project.image} alt={project.title} className="w-24 h-16 sm:w-20 sm:h-12 lg:w-32 lg:h-20 bg-gray-800 rounded overflow-hidden object-cover" />
            </div>
            
            <div className="flex-1 w-full">
              <h3 className="text-base sm:text-lg lg:text-xl font-medium flex items-center group-hover:text-teal-300 transition-colors duration-300 lg:text-[12px]">
                {project.title}
                <svg
                  className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </h3>
              <p className="text-sm sm:text-base lg:text-xl font-medium flex items-center group-hover:text-teal-300 transition-colors duration-300 lg:text-[12px]">{project.subtitle}</p>
              
              {/* Mostrar "Descargar APK" para proyectos que tengan apkLink */}
              {project.apkLink && (
                <div className="mb-4 sm:mb-8">
                  <button 
                    onClick={(e) => {
                      e.preventDefault(); // Prevenir que se active el enlace del proyecto
                      e.stopPropagation();
                      handleApkDownload(project.apkLink, project.title);
                    }}
                    className="text-blue-400 hover:text-blue-300 flex items-center bg-transparent border-none cursor-pointer text-sm"
                  >
                    Descargar APK
                    <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              )}
              
              <p className="mt-2 mb-4 text-gray-300 text-xs sm:text-sm lg:text-[13px]">{project.description}</p>
              <div className="flex flex-wrap font-bold">
                {project.skills.map((skill, idx) => (
                  <SkillTag key={idx} skill={skill} />
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProjectsSection;