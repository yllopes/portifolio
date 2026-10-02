
// IMPORTAÇÃO LOCAIS DE TESTE
import buguelaSimbol from "../../assets/img/S1/Buguela/buguela-simbol.png";
import buguelaMain from "../../assets/img/S1/Buguela/buguela.png";
import buguela1 from "../../assets/img/S1/Buguela/buguela1.png";
import buguela2 from "../../assets/img/S1/Buguela/buguela2.png";
import buguela3 from "../../assets/img/S1/Buguela/buguela3.png";

const PROJECTS_DATA = {
  1: [
    { 
      id: "p1", 
      title: "Projeto Buguela Game / App", 
      type: "Front-End", 
      duration: "03:45", 
      repo: "://github.com", 
      desc: "Projeto de teste utilizando imagens locais para validar a transição de carrossel no player estilo Spotify.", 
      tech: ["HTML5", "CSS3", "JavaScript", "Bulma"],
      artwork: buguelaMain,
      prints: [
        buguelaMain,
        buguelaSimbol,
        buguela1,
        buguela2,
        buguela3
      ]
    },
    { 
      id: "p2", 
      title: "Calculadora de Algoritmos", 
      type: "Logic", 
      duration: "02:15", 
      repo: "://github.com", 
      desc: "Exercícios iniciais de lógica de programação estruturada e manipulação de arrays.", 
      tech: ["JavaScript", "Logic"],
      artwork: buguelaSimbol,
      prints: [buguelaSimbol]
    }
  ],
  2: [
    { id: "p3", title: "Sistema CRUD Back + Front", type: "Full Stack", duration: "05:12", repo: "://github.com", desc: "Aplicação conectando back-end em PHP com banco de dados MySQL local.", tech: ["PHP", "MySQL", "Tailwind"], artwork: buguelaMain, prints: [buguelaMain] }
  ]
};

export default function Tracklist({ album, onBack, onSelectProject, currentProject }) {
  if (!album) return <div className="text-white p-6">Carregando faixas...</div>;

  const projects = PROJECTS_DATA[album.id] || [];

  return (
    <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      
      <div className="lg:col-span-2 w-full">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8">
          <img 
            src={album.cover} 
            alt={album.title} 
            className="w-40 h-40 object-cover rounded-lg shadow-2xl border border-white/5 bg-zinc-800" 
          />
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Álbum de Semestre</span>
            <h2 className="text-3xl font-black mt-1 text-white uppercase tracking-tight">{album.title}</h2>
            <p className="text-xs text-purple-400 font-bold mt-2 tracking-wide">
              {album.artist} • {projects.length} tracks detectadas
            </p>
          </div>
        </div>

        <div className="w-full bg-[#121216]/60 rounded-xl p-4 border border-white/5 backdrop-blur-md">
          <div className="grid grid-cols-12 text-xs font-bold text-gray-400 uppercase tracking-wider pb-2 border-b border-white/5 mb-3 px-3">
            <span className="col-span-1 text-center">#</span>
            <span className="col-span-7">Título do Projeto</span>
            <span className="col-span-3">Categoria</span>
            <span className="col-span-1 text-center">⏱️</span>
          </div>

          <div className="space-y-1">
            {projects.map((project, idx) => (
              <div 
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`grid grid-cols-12 items-center text-sm py-3 px-3 rounded-md cursor-pointer transition-colors group ${
                  currentProject?.id === project.id ? "bg-purple-950/40 border border-purple-500/30" : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="col-span-1 text-center text-gray-400 font-bold group-hover:text-white">
                  {currentProject?.id === project.id ? (
                    <span className="text-[#1db954] text-xs animate-pulse">▶</span>
                  ) : (
                    idx + 1
                  )}
                </div>

                <div className="col-span-7 pr-2">
                  <p className={`font-bold truncate ${currentProject?.id === project.id ? "text-[#1db954]" : "text-gray-100 group-hover:text-white"}`}>
                    {project.title}
                  </p>
                  <p className="text-xs text-gray-500 truncate mt-0.5 group-hover:text-gray-400">{project.repo}</p>
                </div>

                <div className="col-span-3 text-gray-400 text-xs truncate group-hover:text-gray-300">
                  {project.type}
                </div>

                <div className="col-span-1 text-center text-gray-400 text-xs">
                  {project.duration}
                </div>
              </div>
            ))}

            {projects.length === 0 && (
              <div className="text-center py-8 text-xs text-gray-500 uppercase tracking-wider">
                Nenhum projeto cadastrado para este álbum ainda.
              </div>
            )}
          </div>
        </div>

        <button 
          onClick={onBack} 
          className="mt-8 text-xs text-gray-500 hover:text-white transition-colors underline tracking-widest uppercase"
        >
          ← Voltar para a Discografia
        </button>
      </div>

      <div className="w-full lg:col-span-1 sticky top-6">
        <div className="h-48 border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center text-center p-6 text-gray-500 text-xs tracking-wider">
          Selecione uma track acima para disparar o player imersivo com carrossel.
        </div>
      </div>

    </div>
  );
}
