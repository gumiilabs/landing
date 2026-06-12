"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative w-full bg-white text-black border-b border-black/10 overflow-hidden pt-32 pb-16 px-8 md:px-16 lg:px-24 flex flex-col justify-between">
      
      {/* Top Meta Bar */}
      <div className="flex justify-between items-start w-full border-b border-black/10 pb-8 mb-16">
        <div className="flex flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
          <span>Gumii Labs</span>
          <span className="text-black/40">Est. 2026</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-right max-w-[200px]">
          Index / 002
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center text-center py-24"
      >
        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none font-sans uppercase text-black">
          Spatial<br/>
          Systems
        </h1>
        <p className="font-mono text-[10px] md:text-xs leading-relaxed text-black/40 max-w-lg mt-12 uppercase tracking-widest">
          Building simple tools from complex ideas.
        </p>
      </motion.div>

    </section>
  );
};
