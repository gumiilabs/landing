"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    type: "campaign",
    title: "Spatial IDE",
    status: "SYS.REF_003",
    tagline: "The canvas is the code.",
    details: "",
  }
];

export const ProjectGrid = () => {
  return (
    <section id="projects" className="bg-white py-24 md:py-48 relative border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Creative Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:justify-between md:items-end gap-8 border-b border-black/10 pb-8">
            <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold text-black">Gumii v2</span>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mt-4 text-black uppercase">Selected Works.</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
          {projects.map((project, i) => (
            <ProjectItem key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index }: { project: any, index: number }) => {
  if (project.type === 'campaign') {
    return (
      <div className="col-span-1 md:col-span-2 py-16 md:py-32 border border-black/10 flex flex-col items-center justify-center text-center bg-zinc-50 relative overflow-hidden group">
        {/* Subtle grid bg inside campaign */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
        
        <div className="relative z-10 flex flex-col items-center max-w-2xl px-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] mb-8 text-black opacity-60">
              {project.status}
          </span>
          
          <h3 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-12 text-black">
              {project.title}
          </h3>
          
          <div className="flex flex-col items-center gap-8">
              <p className="text-sm md:text-base font-mono text-black/60 tracking-tight text-center leading-relaxed max-w-md">
                  "{project.tagline}"
              </p>
              {project.details && (
                <>
                  <div className="w-px h-16 bg-black/20" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {project.details}
                  </span>
                </>
              )}
          </div>
          
          <button className="mt-12 text-[10px] font-mono font-bold uppercase tracking-widest border border-black px-10 py-4 hover:bg-black hover:text-white transition-all duration-300">
              Register Intent
          </button>
        </div>
      </div>
    );
  }

  // Determine slight vertical offset for odd items to create a masonry-like feel
  const isOdd = index % 2 !== 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative group cursor-pointer flex flex-col gap-6 ${isOdd ? 'md:mt-32' : ''}`}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-100 border border-black/5 p-3">
        <div className="relative w-full h-full overflow-hidden">
          <Image 
            src={project.img} 
            alt={project.title} 
            fill 
            className="object-cover filter grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-px bg-black opacity-20" />
        <div className="absolute top-0 left-0 w-px h-3 bg-black opacity-20" />
        <div className="absolute bottom-0 right-0 w-3 h-px bg-black opacity-20" />
        <div className="absolute bottom-0 right-0 w-px h-3 bg-black opacity-20" />
      </div>

      <div className="flex justify-between items-center border-b border-black/10 pb-4">
        <span className="text-3xl font-bold tracking-tighter text-black uppercase">{project.title}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">{project.status}</span>
      </div>
    </motion.div>
  );
};
