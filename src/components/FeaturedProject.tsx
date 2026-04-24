"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const FeaturedProject = () => {
  return (
    <section id="projects" className="py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-[4/3] overflow-hidden group border border-black/5">
            <Image 
              src="/projects/spatial-ide.jpeg" 
              alt="Spatial IDE" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
          
          <div className="flex flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 px-3 py-1 border border-accent/20 rounded-full">
              Launching Soon
            </span>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">Spatial IDE</h2>
            <p className="text-lg opacity-70 mb-8 max-w-lg leading-relaxed">
              A spatial programming environment designed for the next generation of computing. 
              Bridging the gap between creative thought and digital execution.
            </p>
            <button className="font-mono text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-accent hover:border-accent transition-colors">
              View Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
