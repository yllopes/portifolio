import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import eu from "../../assets/img/eu.jpg";
import { CyberpunkCard } from "../ui/cyberpunk-card";

export default function IntroScreen({ onEnter }) {
  const devAge = 21;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -40]);

  return (
    <div ref={containerRef} className="w-full flex justify-center items-center">
      <motion.div
        style={{ opacity, scale, y }}
        className="z-10 flex flex-col items-center select-none"
      >
        <CyberpunkCard
          theme="spotify"
          borderStyle="circuit"
          colorShift={true}
          lightTrail={true}
          glow={true}
          glowIntensity={4}
          backgroundEffect="scanlines"
          className="w-[340px] sm:w-[380px]"
        >
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-center border-b border-spotify/30 pb-3 mb-5 text-xs text-white">
              <span>TRACK_01 INTRO</span>
              <span className="animate-pulse">● LIVE_SERVER_OK</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-[112px] sm:w-[152px]">
                <img
                  src={eu}
                  alt="Ygor Lopes"
                  className="w-full aspect-[3/4] object-cover rounded-lg border border-spotify/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                />
              </div>

              <h1 className="text-3xl mt-5 font-black tracking-wider text-white uppercase">
                Ygor Lopes
              </h1>

              <p className="text-[11px] font-bold text-white mt-1 tracking-widest uppercase">
                BACKEND_DEVELOPER STACK.JAVA
              </p>

              <div className="w-full max-w-[270px] mt-5 space-y-1.5 bg-black/50 p-3.5 rounded border border-white/10 text-[13px]">
                <div className="flex justify-between gap-2">
                  <span className="text-muted-fg">IDADE:</span>
                  <span className="text-white font-bold">{devAge} ANOS</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted-fg">CORE:</span>
                  <span className="text-white">JAVA SPRING</span>
                </div>
                  <div className="flex justify-between gap-2">
                  <span className="text-muted-fg">INGLES:</span>
                  <span className="text-white">A2+</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted-fg">STATUS:</span>
                  <span className="text-white">COMPILING_PORTFOLIO</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(29, 185, 84, 0.55)" }}
              whileTap={{ scale: 0.98 }}
              onClick={onEnter}
              className="w-full mt-6 bg-spotify hover:bg-spotify-light text-black font-bold py-3 px-4 rounded text-center tracking-widest text-xs uppercase transition-all duration-300"
            >
              Ver Albuns (Entrar)
            </motion.button>

            <p className="text-[10px] text-center text-white/70 mt-3 animate-pulse">
              ↓ Role para baixo para ver os álbuns ↓
            </p>
          </div>
        </CyberpunkCard>
      </motion.div>
    </div>
  );
}
