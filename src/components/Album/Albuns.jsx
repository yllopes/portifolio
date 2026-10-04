import { motion } from "framer-motion";
import number1 from "../../assets/img/S1/number1.jpg";
import number2 from "../../assets/img/S2/number2.jpg";
import number3 from "../../assets/img/S3/number3.jpg";
import number4 from "../../assets/img/S4/number4.jpg";
import number5 from "../../assets/img/S5/number5.jpg";
import number6 from "../../assets/img/S6/number6.jpg";


import SemesterCover from "./SemesterCover";
import { PROJECTS_DATA } from "../../data/PROJECTS_DATA";

const formatTracks = (id) => {
  const n = PROJECTS_DATA[id]?.length ?? 0;
  if (n === 0) return "Em desenvolvimento";
  return `${n} ${n === 1 ? "projeto" : "projetos"}`;
};

const PLAYLISTS = [
  {
    id: 1,
    title: "1º Semestre & Front-End",
    artist: "Ygor Lopes",
    cover: number1,
    color: "from-[#1DB954]/10",
    stacks: ["HTML5", "CSS3", "JavaScript", "Logic", "Git", "Bulma"]
  },
  {
    id: 2,
    title: "2º Semestre & Front-End + BackEnd",
    artist: "Ygor Lopes",
    cover: number2,
    color: "from-[#1DB954]/10",
    stacks: ["PHP", "MySQL", "SQLite", "JavaScript", "Bootstrap", "Git", "UI Design"]
  },
  {
    id: 3,
    title: "3º Semestre & Full Stack App + SCRUM",
    artist: "Ygor Lopes",
    cover: number3,
    color: "from-[#1DB954]/10",
    stacks: ["Java", "Spring Boot", "React", "MongoDB","Git", "UI Design", "SCRUM"]
  },
  {
    id: 4,
    title: "4º Semestre & Full Stack App + AWS",
    artist: "Ygor Lopes",
    cover: number4,
    color: "from-[#1DB954]/10",
    stacks: ["Java", "Spring Boot", "Spring Security", "React", "JWT", "Docker", "AWS", "Git", "AntDesign", "UI Design", "XP"]
  },
  {
    id: 5,
    title: "5º Semestre & Full Stack App + Mobile",
    artist: "Ygor Lopes",
    cover: number5,
    color: "from-[#1DB954]/10",
    stacks: ["React Native", "Docker", "Git", "JWT", "Expo", 'Machine Learning']
  },
  {
    id: 6,
    title: "6º Semestre(Em Desenvolvimento)",
    artist: "Ygor Lopes",
    cover: number6,
    color: "from-[#1DB954]/10",
    stacks: ["C++", "Kotlin", "Docker", "Git"]
  }
];

export default function AlbumGrid({ onBack, onSelectAlbum }) {
return (
  <motion.div
    key="playlists-screen"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.15 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="z-10 w-full max-w-5xl"
  >

      <div className="mb-8">
        <span className="text-xs font-bold text-muted-fg tracking-widest uppercase">Navegar por Semestres</span>
        <h2 className="text-4xl font-black mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-spotify/70">
          Meus Álbuns
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PLAYLISTS.map((playlist, index) => (
          <motion.div
            key={playlist.id}
            onClick={() => onSelectAlbum(playlist)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`bg-[#050a06] p-4 rounded-xl border border-spotify/10 shadow-xl hover:bg-[#0a1a10] bg-gradient-to-b ${playlist.color} to-transparent transition-colors duration-300 group cursor-pointer flex flex-col justify-start h-full`}
          >
            <div className="relative aspect-square w-full rounded-md overflow-hidden shadow-2xl bg-ink-3 shrink-0">
              <SemesterCover
                src={playlist.cover}
                alt={playlist.title}
                imgClassName="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                boxClassName="w-full h-full p-4"
              />

              <motion.div
                className="absolute bottom-3 right-3 bg-[#1db954] p-3 rounded-full shadow-xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg className="w-6 h-6 text-black fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </motion.div>
            </div>

            <div className="mt-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-bold text-base tracking-wide text-white/90 truncate group-hover:text-white">
                  {playlist.title}
                </h3>
                <p className="text-xs text-muted-fg mt-0.5 font-semibold tracking-wider">
                  {playlist.artist}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5">
                <span className="text-[9px] font-bold text-spotify-light block mb-2 tracking-widest uppercase">
                  GENEROS_UTILIZADOS:
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {playlist.stacks.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-[10px] font-semibold bg-black/50 text-muted-fg border border-spotify/20 px-2 py-0.5 rounded-md tracking-wide group-hover:border-spotify/50 group-hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-spotify border-t border-white/5 pt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <span>LP EXTENDED</span>
                <span className="bg-spotify-950 px-2 py-0.5 rounded border border-spotify/25 text-spotify-soft font-bold">
                  {formatTracks(playlist.id)}
                </span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      <button
        onClick={onBack}
        className="mt-12 text-xs text-dim hover:text-white transition-colors underline block mx-auto tracking-widest"
      >
        ← Voltar para a tela do artista
      </button>
    </motion.div>
  );
}
