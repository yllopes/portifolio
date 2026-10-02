import { motion } from "framer-motion";
import { useState } from "react";
import { CyberpunkCard } from "./components/ui/cyberpunk-card";

export default function App() {
  const [isEntering, setIsEntering] = useState(false);
  const devAge = 21; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b0b0e] text-white font-mono p-4 overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1a3a_1px,transparent_1px),linear-gradient(to_bottom,#1f1a3a_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ transform: "perspective(500px) rotateX(60deg)", transformOrigin: "top" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: isEntering ? 0 : 1, scale: isEntering ? 0.9 : 1, y: isEntering ? -50 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="z-10 flex flex-col items-center"
      >
        <CyberpunkCard 
          theme="neon-purple" 
          borderStyle="circuit" 
          colorShift={true} 
          lightTrail={true} 
          glow={true} 
          glowIntensity={4}
          backgroundEffect="scanlines"
          className="w-[350px] sm:w-[400px]"
        >
          <div className="p-6">
            <div className="flex justify-between items-center border-b border-purple-500/30 pb-3 mb-4 text-xs text-purple-400">
              <span>TRACK_01 // INTRO</span>
              <span className="animate-pulse">● LIVE_SERVER_OK</span>
            </div>

            <h1 className="text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 uppercase">
              Yago Lopes
            </h1>
            
            <p className="text-sm font-bold text-cyan-400 mt-1 tracking-widest uppercase">
              BACKEND_DEVELOPER // STACK.JAVA
            </p>

            <div className="mt-6 space-y-2 bg-black/40 p-4 rounded border border-purple-500/20 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">IDADE:</span>
                <span className="text-white font-bold">{devAge} ANOS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">CORE:</span>
                <span className="text-cyan-300">JAVA SPRING // POSTGRES</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">STATUS:</span>
                <span className="text-green-400">COMPILING_PORTFOLIO</span>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(168, 85, 247, 0.6)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsEntering(true)}
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded text-center tracking-widest text-xs uppercase transition-all duration-300 border border-pink-400/30"
            >
              Ver Albuns (Entrar)
            </motion.button>
          </div>
        </CyberpunkCard>
      </motion.div>
    </div>
  );
}
