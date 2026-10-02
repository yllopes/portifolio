import { motion } from "framer-motion";

const PLAYLISTS = [
  {
    id: 1,
    title: "1º Semestre & Front-End",
    artist: "Ygor Lopes",
    tracks: "12 projetos",
    cover: "https://unsplash.com",
    color: "from-green-600/20",
    stacks: ["HTML5", "CSS3", "JavaScript", "Logic", "Git", "Bulma"]
  },
  {
    id: 2,
    title: "2º Semestre & Front-End + BackEnd",
    artist: "Ygor Lopes",
    tracks: "8 projetos",
    cover: "https://unsplash.com",
    color: "from-cyan-600/20",
    stacks: ["PHP", "MySQL", "SQLite", "JavaScript", "Tailwind", "Git", "UI Design"]
  },
  {
    id: 3,
    title: "3º Semestre & Full Stack App + SCRUM",
    artist: "Ygor Lopes",
    tracks: "5 projetos",
    cover: "https://unsplash.com",
    color: "from-purple-600/20",
    stacks: ["Java", "Spring Boot", "React", "MongoDB","Git", "UI Design", "SCRUM"]
  },
  {
    id: 4,
    title: "4º Semestre & Full Stack App + AWS",
    artist: "Ygor Lopes",
    tracks: "12 projetos",
    cover: "https://unsplash.com",
    color: "from-green-600/20",
    stacks: ["Java", "Spring Boot", "Spring Security", "React", "JWT", "Docker", "AWS", "Git", "AntDesign", "UI Design", "XP"]
  },
  {
    id: 5,
    title: "5º Semestre & Full Stack App + Mobile",
    artist: "Ygor Lopes",
    tracks: "8 projetos",
    cover: "https://unsplash.com",
    color: "from-cyan-600/20",
    stacks: ["React Native", "Docker", "Git", "JWT", "Expo", 'Machine Learning']
  },
  {
    id: 6,
    title: "6º Semestre(Em Desenvolvimento)",
    artist: "Ygor Lopes",
    tracks: "5 projetos",
    cover: "https://unsplash.com",
    color: "from-purple-600/20",
    stacks: ["C++", "Kotlin", "Docker", "Git"]
  }
];

export default function AlbumGrid({ onBack }) {
return (
  <motion.div
    key="playlists-screen"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.15 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="z-10 w-full max-w-5xl"
  >

      {}
      <div className="mb-8">
        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Navegar por Semestres</span>
        <h2 className="text-4xl font-black mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Meus Álbuns
        </h2>
      </div>

      {}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PLAYLISTS.map((playlist, index) => (
          <motion.div
            key={playlist.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`bg-[#121216] p-4 rounded-xl border border-white/5 shadow-xl hover:bg-[#181822] bg-gradient-to-b ${playlist.color} to-transparent transition-colors duration-300 group cursor-pointer flex flex-col justify-start h-full`}
          >
            {}
            <div className="relative aspect-square w-full rounded-md overflow-hidden shadow-2xl bg-zinc-800 shrink-0">
              <img 
                src={playlist.cover} 
                alt={playlist.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              
              <motion.div 
                className="absolute bottom-3 right-3 bg-[#1db954] p-3 rounded-full shadow-xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg className="w-6 h-6 text-black fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </motion.div>
            </div>

            {}
            <div className="mt-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-bold text-base tracking-wide text-gray-100 truncate group-hover:text-white">
                  {playlist.title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 font-semibold tracking-wider">
                  {playlist.artist}
                </p>
              </div>

              {}
              <div className="mt-4 pt-3 border-t border-white/5">
                <span className="text-[9px] font-bold text-cyan-400 block mb-2 tracking-widest uppercase">
                  GENEROS_UTILIZADOS:
                </span>
                
                <div className="flex flex-wrap gap-1.5">
                  {playlist.stacks.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="text-[10px] font-semibold bg-black/40 text-gray-300 border border-purple-500/20 px-2 py-0.5 rounded-md tracking-wide group-hover:border-purple-500/40 group-hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {}
              <div className="mt-3 flex items-center justify-between text-[11px] text-purple-400 border-t border-white/5 pt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <span>LP EXTENDED</span>
                <span className="bg-purple-950/50 px-2 py-0.5 rounded border border-purple-500/20 text-purple-300 font-bold">
                  {playlist.tracks}
                </span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {}
      <button 
        onClick={onBack}
        className="mt-12 text-xs text-gray-500 hover:text-white transition-colors underline block mx-auto tracking-widest"
      >
        ← Voltar para a tela do artista
      </button>
    </motion.div>
  );
}
