"use client";

import { motion } from "framer-motion";

const splashWords = [
  "AI", "Spatial", "Music", "Education", "Systems", 
  "Human", "Logic", "Tools", "Ideas", "Spatial", 
  "Hardware", "Gumii", "Lab", "2026", "Building"
];

export const ArtisticAccents = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Hand-drawn sketches as design elements */}
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, 2, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[15%] w-64 h-64 grayscale opacity-[0.05]"
      >
        <img src="/accents/sticker-1.jpeg" alt="" className="object-contain" />
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, -20, 0],
          rotate: [0, -2, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[5%] w-80 h-80 grayscale opacity-[0.05]"
      >
        <img src="/accents/sticker-2.jpeg" alt="" className="object-contain" />
      </motion.div>
      
      {/* Technical markings */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col gap-12 font-mono text-[8px] uppercase tracking-[0.5em] vertical-rl h-64 border-l border-black/10 pl-4 opacity-20">
        <span>Curated Technology Lab</span>
        <span>System Interface V.04</span>
        <span>Aesthetica Humanitas</span>
      </div>

      {/* SPLATTER SYSTEM */}
      <div className="absolute inset-0">
        {splashWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 2, delay: i * 0.1 }}
            className="absolute font-mono text-[7px] uppercase tracking-[0.3em] text-black"
            style={{
              top: `${(i * 17) % 90 + 5}%`,
              left: `${(i * 13) % 90 + 5}%`,
              transform: `rotate(${(i * 45) % 90 - 45}deg)`,
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
      
      {/* Scattered Phrases */}
      <div className="absolute top-[15%] left-[10%] max-w-[150px] opacity-[0.08] font-mono text-[8px] uppercase leading-relaxed tracking-widest">
        building simple tools <br/> from complex ideas
      </div>
      
      <div className="absolute bottom-[10%] right-[10%] max-w-[150px] opacity-[0.08] font-mono text-[8px] uppercase text-right leading-relaxed tracking-widest">
        human interface <br/> designs for the future
      </div>
    </div>
  );
};
