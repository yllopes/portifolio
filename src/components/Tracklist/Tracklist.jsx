import { motion } from "framer-motion";
import SemesterCover from "../Album/SemesterCover";
import Equalizer from "../ui/Equalizer";
import { PROJECTS_DATA } from "./PROJECTS_DATA";

export default function Tracklist({ album, onBack, onSelectProject, currentProject }) {
  if (!album) return <div className="text-white p-6">Carregando faixas...</div>;

  const projects = PROJECTS_DATA[album.id] || [];

  return (
    <div className="w-full max-w-4xl bg-[#050a06]/70 rounded-xl p-6 border border-white/5 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8 border-b border-white/5 pb-6">
        <SemesterCover
          src={album.cover}
          alt={album.title}
          imgClassName="w-44 h-44 object-cover object-top rounded-lg shadow-2xl border border-white/5 bg-ink-3"
          boxClassName="w-44 h-44 rounded-lg border border-white/5"
        />
        <div className="text-center sm:text-left">
          <span className="text-xs font-bold text-spotify tracking-widest uppercase">Álbum de Semestre</span>
          <h2 className="text-4xl font-black mt-1 text-white uppercase tracking-tight">{album.title}</h2>
          <p className="text-xs text-muted-fg font-bold mt-2 tracking-wide">
            {album.artist} •{" "}
            {projects.length > 0 ? (
              <span className="text-[#1db954]">{projects.length} tracks detectadas</span>
            ) : (
              <span className="text-spotify">carregando</span>
            )}
          </p>
        </div>
      </div>

      {projects.length > 0 && (
        <div className="grid grid-cols-12 text-xs font-bold text-muted-fg uppercase tracking-wider pb-2 border-b border-white/5 mb-3 px-3">
          <span className="col-span-1 text-center">#</span>
          <span className="col-span-7">Título do Projeto</span>
          <span className="col-span-3">Categoria</span>
          <span className="col-span-1 text-center">⏱️</span>
        </div>
      )}

     <div className="space-y-1">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className={`grid grid-cols-12 items-center text-sm py-3 px-3 rounded-md cursor-pointer transition-colors group ${
              currentProject?.id === project.id ? "bg-spotify-950/70 border border-spotify/30" : "hover:bg-white/5 border border-transparent"
            }`}
          >
            <div className="col-span-1 flex items-center justify-center font-bold text-muted-fg group-hover:text-white">
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
              <p className={`font-bold truncate ${currentProject?.id === project.id ? "text-[#1db954]" : "text-white/90 group-hover:text-white"}`}>
                {project.title}
              </p>
              <p className="text-xs text-dim truncate mt-0.5 group-hover:text-muted-fg">{project.repo}</p>
            </div>

            <div className="col-span-3 text-muted-fg text-xs truncate group-hover:text-white/80">{project.type}</div>
            <div className="col-span-1 text-center text-muted-fg text-xs">{project.duration}</div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 py-12">
            <Equalizer bars={5} barClassName="w-[4px] bg-spotify" gap="gap-1" height="h-8" />
            <span className="text-xs uppercase tracking-widest text-muted-fg">Carregando projetos</span>
          </div>
        )}
      </div>

      <button onClick={onBack} className="mt-8 text-xs text-dim hover:text-white transition-colors underline tracking-widest uppercase">
        ← Voltar para a Discografia
      </button>

    </div>
  );
}
