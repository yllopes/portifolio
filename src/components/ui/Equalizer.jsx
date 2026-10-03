import { motion } from "framer-motion";

export default function Equalizer({ bars = 4, barClassName = "w-[3px] bg-spotify", gap = "gap-[3px]", height = "h-5" }) {
  return (
    <div className={`flex items-end ${gap} ${height} mb-1 shrink-0`}>
      {Array.from({ length: bars }, (_, i) => i + 1).map((bar) => (
        <motion.div
          key={bar}
          className={`${barClassName} rounded-full`}
          animate={{ height: ["20%", "100%", "40%", "80%", "20%"] }}
          transition={{
            duration: 0.6 + bar * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
