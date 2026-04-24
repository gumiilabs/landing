"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-white text-black">
      {/* Background Detail - subtle artistic marks */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-px h-64 bg-black" />
        <div className="absolute top-1/2 right-1/4 w-32 h-px bg-black" />
        <div className="absolute bottom-1/4 left-1/2 w-8 h-8 border border-black rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative z-10 max-w-4xl px-8"
      >
        <div className="flex flex-col items-center">
            <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="w-12 h-px bg-accent mb-8 origin-left"
            />
            
            <h1 className="text-3xl md:text-5xl font-normal tracking-tighter leading-tight mb-4">
                Human After All
            </h1>
            
            <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
        </div>
      </motion.div>
      
      {/* Primary Artistic Image - smaller, more like a gallery piece */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        className="absolute bottom-12 right-12 w-64 md:w-96 aspect-[4/5] z-10 shadow-2xl"
      >
        <Image 
          src="/assets/portrait.jpeg" 
          alt="Artistic Portrait" 
          fill 
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 border-[12px] border-white/50" />
      </motion.div>

      {/* Floating Sketches */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [-5, -8, -5]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-32 h-32 opacity-10 pointer-events-none"
      >
        <img src="/accents/sticker-1.jpeg" alt="" className="object-contain" />
      </motion.div>

      <div className="absolute bottom-12 left-12 flex flex-col gap-2">
         <span className="text-[10px] font-mono uppercase tracking-widest opacity-20">Gumii Labs</span>
         <span className="text-[10px] font-mono uppercase tracking-widest opacity-20">EST. 2026 Production</span>
      </div>
    </section>
  );
};
