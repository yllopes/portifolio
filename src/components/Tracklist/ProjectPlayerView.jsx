import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

function Equalizer() {
  return (
    <div className="flex items-end gap-[3px] h-5 w-6 mb-1 shrink-0">
      {[1, 2, 3, 4].map((bar) => (
        <motion.div
          key={bar}
          className="w-[3px] bg-[#1db954] rounded-full"
          animate={{
            height: ["20%", "100%", "40%", "80%", "20%"]
          }}
          transition={{
            duration: 0.6 + bar * 0.1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export default function ProjectPlayerView({ project, onBack }) {
  const [currentPrintIdx, setCurrentPrintIdx] = useState(0);
  const landingSectionRef = useRef(null);

  const projectPrints = project.prints && project.prints.length > 0 ? project.prints : [project.artwork];

  const nextPrint = () => setCurrentPrintIdx((prev) => (prev + 1) % projectPrints.length);
  const prevPrint = () => setCurrentPrintIdx((prev) => (prev - 1 + projectPrints.length) % projectPrints.length);
  const scrollToLanding = () => landingSectionRef.current?.scrollIntoView({ behavior: "smooth" });

  const content = project.landingContent || {
    desafio: "Desafio técnico estruturado para avaliação prática do período letivo.",
    arquitetura: "Solução focada em escalabilidade e aplicação de boas práticas de engenharia de software."
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      <div className="min-h-[90vh] w-full max-w-5xl flex flex-col items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // Cubiz-bezier para efeito elástico premium
          className="w-full bg-zinc-900/40 border border-white/10 rounded-3xl p-6 shadow-[0_30px_70px_rgba(0,0,0,0.6)] backdrop-blur-2xl flex flex-col items-center"
        >
          <div className="w-full flex justify-between items-center mb-4 px-2">
            <button onClick={onBack} className="text-xs font-bold text-gray-400 hover:text-white flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full transition-all">
              <span>←</span> VOLTAR PARA TRACKLIST
            </button>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#1db954] uppercase bg-[#1db954]/10 px-2 py-1 rounded border border-[#1db954]/20 animate-pulse">
              // REPRODUZINDO_PROJETO
            </span>
          </div>

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-black/80 border border-white/5 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPrintIdx}
                src={projectPrints[currentPrintIdx]}
                alt="Project Screen"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-mono font-bold text-gray-300 border border-white/10">
              MÍDIA_0{currentPrintIdx + 1} / 0{projectPrints.length}
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 pt-20 flex justify-between items-end gap-4">
              <div>
                <div className="flex items-end gap-3">
                  <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-wide">{project.title}</h2>
                  <Equalizer /> 
                </div>
                <p className="text-xs font-bold text-cyan-400 font-mono tracking-widest uppercase mt-1">// {project.type}</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
            <div className="flex-grow w-full sm:max-w-md">
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                <div className="w-3/5 h-full bg-[#1db954] rounded-full shadow-[0_0_10px_#1db954]" />
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-mono font-bold">
                <span>01:45</span>
                <span>{project.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
              <div className="flex items-center bg-black/40 rounded-full border border-white/5 p-1">
                <button onClick={prevPrint} className="p-3 text-gray-400 hover:text-white transition-transform active:scale-90"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg></button>
                <button onClick={nextPrint} className="p-3 text-gray-400 hover:text-white transition-transform active:scale-90"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6z"/></svg></button>
              </div>

              <a href={`https://${project.repo}`} target="_blank" rel="noreferrer" className="bg-white hover:bg-[#1db954] hover:text-black text-black font-black text-xs py-3.5 px-6 rounded-full transition-all duration-300 uppercase tracking-widest font-mono shadow-lg active:scale-95">
                Abrir Código Source
              </a>
            </div>
          </div>

          <button onClick={scrollToLanding} className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors mt-8 uppercase tracking-widest animate-bounce">
            ↓ Rolar para ver as especificações técnicas e documentação ↓
          </button>
        </motion.div>
      </div>

      <section ref={landingSectionRef} className="min-h-screen w-full bg-zinc-950/80 border-t border-white/5 backdrop-blur-md p-6 sm:p-12 flex justify-center z-10">
        <div className="w-full max-w-3xl py-8">
          
          <div className="border-b border-white/10 pb-8 mb-8">
            <span className="text-xs font-mono font-bold text-[#1db954] tracking-widest uppercase">// 01. INFORMAÇÕES_GERAIS</span>
            <h3 className="text-2xl font-black mt-2 text-white uppercase">Ficha Técnica</h3>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed bg-black/20 p-5 rounded-xl border border-white/5 font-light">
              {project.desc}
            </p>
          </div>

          <div className="border-b border-white/10 pb-8 mb-8">
            <span className="text-xs font-mono font-bold text-purple-400 tracking-widest uppercase">// 02. TECNOLOGIAS_E_GÊNEROS</span>
            <h3 className="text-2xl font-black mt-2 text-white uppercase">Gêneros de Engenharia</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech?.map((t, i) => (
                <span key={i} className="font-mono text-xs bg-purple-950/40 text-purple-300 border border-purple-500/20 px-4 py-2 rounded-md font-bold">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="pb-8 mb-8">
            <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase">// 03. ARQUITETURA_E_DESAFIO</span>
            <h3 className="text-2xl font-black mt-2 text-white uppercase">Desafio do Semestre</h3>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed font-light mb-4">
              <strong>Desafio:</strong> {content.desafio}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              <strong>Arquitetura de Engenharia:</strong> {content.arquitetura}
            </p>
          </div>

          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-16 font-mono text-xs text-gray-500 hover:text-white transition-colors underline block tracking-widest uppercase mx-auto">
            ↑ Voltar para a Capa Ampliada
          </button>
        </div>
      </section>

    </div>
  );
}
