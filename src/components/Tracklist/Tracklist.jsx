import { PROJECTS_DATA } from "./PROJECTS_DATA";

export default function Tracklist({ album, onBack, onSelectProject, currentProject }) {
  if (!album) return <div className="text-white p-6">Carregando faixas...</div>;

  const projects = PROJECTS_DATA[album.id] || [];

  return (
    <div className="w-full max-w-4xl bg-[#121216]/60 rounded-xl p-6 border border-white/5 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8 border-b border-white/5 pb-6">
        <img src={album.cover} alt={album.title} className="w-44 h-44 object-cover rounded-lg shadow-2xl border border-white/5 bg-zinc-800" />
        <div className="text-center sm:text-left">
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">// Álbum de Semestre</span>
          <h2 className="text-4xl font-black mt-1 text-white uppercase tracking-tight">{album.title}</h2>
          <p className="text-xs text-gray-400 font-bold mt-2 tracking-wide">
            {album.artist} • <span className="text-[#1db954]">{projects.length} tracks detectadas</span>
          </p>
        </div>
      </div>

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
            <div className="col-span-1 flex items-center justify-center font-bold text-gray-400 group-hover:text-white">
              {currentProject?.id === project.id ? (
                <div className="flex items-end gap-[2px] h-3 w-4 mb-0.5">
                  {[1, 2, 3].map((bar) => (
                    <motion.div
                      key={bar}
                      className="w-[2px] bg-[#1db954]"
                      animate={{ height: ["30%", "100%", "50%", "90%", "30%"] }}
                      transition={{ duration: 0.4 + bar * 0.1, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </div>
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

            <div className="col-span-3 text-gray-400 text-xs truncate group-hover:text-gray-300">{project.type}</div>
            <div className="col-span-1 text-center text-gray-400 text-xs">{project.duration}</div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="text-center py-8 text-xs text-gray-500 uppercase tracking-wider">// Nenhum projeto cadastrado ainda.</div>
        )}
      </div>

      <button onClick={onBack} className="mt-8 text-xs text-gray-500 hover:text-white transition-colors underline tracking-widest uppercase">
        ← Voltar para a Discografia
      </button>

    </div>
  );
}
