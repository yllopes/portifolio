import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function ProjectPlayerView({ project, onBack }) {
  const [currentPrintIdx, setCurrentPrintIdx] = useState(0);
  const landingSectionRef = useRef(null);

  const projectPrints = project.prints && project.prints.length > 0 
    ? project.prints 
    : [project.artwork || "https://unsplash.com"];

  const nextPrint = () => {
    setCurrentPrintIdx((prev) => (prev + 1) % projectPrints.length);
  };

  const prevPrint = () => {
    setCurrentPrintIdx((prev) => (prev - 1 + projectPrints.length) % projectPrints.length);
  };

  const scrollToLanding = () => {
    landingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      <div className="min-h-[85vh] w-full flex flex-col items-center justify-center p-4 relative">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[420px] bg-zinc-900/70 border border-white/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl relative"
        >
          <div className="flex justify-between items-center mb-6">
            <button onClick={onBack} className="text-gray-400 hover:text-white p-2 bg-white/5 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-[10px] font-bold tracking-widest text-[#1db954] uppercase animate-pulse">
              // REPRODUZINDO_PROJETO
            </span>
            <div className="w-9 h-9" /> 
          </div>

          <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/5 group mb-6">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPrintIdx}
                src={projectPrints[currentPrintIdx]}
                alt={`Screenshot ${currentPrintIdx + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded text-[10px] font-bold text-gray-400 tracking-wider">
              {currentPrintIdx + 1} / {projectPrints.length} SCREEN
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-xl font-black tracking-wide text-white uppercase truncate">{project.title}</h3>
              <span className="text-[9px] font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-1.5 py-0.5 rounded uppercase mt-1 shrink-0">
                {project.type}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5 font-medium">{project.artist || "Ygor Lopes"}</p>
          </div>

          <div className="w-full mb-6">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer">
              <div className="w-1/3 h-full bg-[#1db954] rounded-full" />
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 font-bold mt-2">
              <span>01:24</span>
              <span>{project.duration || "03:45"}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 mb-4">
            <button onClick={prevPrint} className="text-gray-400 hover:text-white transition-transform active:scale-90">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>

            <a 
              href={`https://${project.repo}`} 
              target="_blank" 
              rel="noreferrer" 
              className="bg-white hover:bg-[#1db954] hover:text-black text-black p-4 rounded-full shadow-xl transition-all duration-300 scale-110 active:scale-95 flex items-center justify-center group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.415 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>

            <button onClick={nextPrint} className="text-gray-400 hover:text-white transition-transform active:scale-90">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6z"/>
              </svg>
            </button>
          </div>

          <button 
            onClick={scrollToLanding}
            className="text-[10px] text-center w-full text-gray-500 hover:text-gray-300 transition-colors mt-6 block uppercase tracking-widest animate-bounce"
          >
            ↓ Deslize para ler a Documentação ↓
          </button>
        </motion.div>
      </div>

      <section 
        ref={landingSectionRef}
        className="min-h-screen w-full bg-zinc-950/70 border-t border-white/5 backdrop-blur-md p-6 sm:p-12 flex justify-center z-10"
      >
        <div className="w-full max-w-3xl py-8">
          
          <div className="border-b border-white/10 pb-6 mb-8">
            <span className="text-xs font-bold text-[#1db954] tracking-widest uppercase">// DETAILED_CASE_STUDY</span>
            <h1 className="text-4xl font-black mt-2 text-white uppercase tracking-tight">{project.title}</h1>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">{project.desc}</p>
          </div>

          <div className="space-y-8 text-gray-300 text-sm leading-relaxed font-sans">
            <div>
              <h3 className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">01. O Desafio Técnico</h3>
              <p className="bg-black/20 p-4 rounded-xl border border-white/5 font-light">
                Este projeto foi desenvolvido como escopo prático do semestre. O principal objetivo foi aplicar padrões de arquitetura eficientes, garantindo modularidade e integração contínua entre as tecnologias utilizadas no ecossistema de estudo.
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">02. Tecnologias & Engenharia</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech?.map((t, i) => (
                  <span key={i} className="font-mono text-xs bg-purple-950/30 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-16 font-mono text-xs text-gray-500 hover:text-white transition-colors underline block tracking-widest uppercase mx-auto"
          >
            ↑ Voltar para o Topo do Player
          </button>
        </div>
      </section>

    </div>
  );
}
