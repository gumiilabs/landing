"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const projects = [
  {
    type: "campaign",
    title: "Spatial IDE",
    status: "Campaign / 01",
    tagline: "The canvas is the code. Re-imagining developer environments for the spatial age.",
    details: "Universal Interface · Spatial Logic · Absolute Freedom",
    pos: "top-0 left-0",
    w: "w-full",
    parallax: -30,
  },
  {
    type: "project",
    title: "AI Music",
    status: "Prototype",
    img: "/assets/lab-2.jpeg",
    pos: "top-[25%] right-0",
    w: "w-full md:w-[45%]",
    aspect: "aspect-square",
    parallax: 80,
  },
  {
    type: "project",
    title: "Hardware",
    status: "Live",
    img: "/assets/space.jpeg",
    pos: "top-[45%] left-[10%]",
    w: "w-full md:w-[35%]",
    aspect: "aspect-[4/5]",
    parallax: -120,
  },
  {
    type: "project",
    title: "Education",
    status: "Idea",
    img: "/assets/lab.jpeg",
    pos: "bottom-0 right-1/4",
    w: "w-full md:w-[50%]",
    aspect: "aspect-[16/10]",
    parallax: 40,
  },
];

export const ProjectGrid = () => {
  return (
    <section id="projects" className="bg-white py-48 relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 relative min-h-[3000px]">
        {/* Creative Section Header */}
        <div className="mb-32 flex justify-between items-end">
            <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40">Index / 001</span>
                <h2 className="text-4xl md:text-6xl tracking-tighter mt-4 italic">Unusual Works</h2>
            </div>
            <div className="font-mono text-[8px] uppercase tracking-[0.4em] opacity-40 text-right">
                building simple tools <br/> from complex ideas
            </div>
        </div>

        {projects.map((project, i) => (
          <ProjectItem key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index }: { project: any, index: number }) => {
  const container = useRef(null);
  const [hovered, setHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, project.parallax]);

  if (project.type === 'campaign') {
    return (
      <motion.div 
        ref={container}
        style={{ y }}
        className={`absolute ${project.pos} ${project.w} py-24 mb-32 z-10 select-none`}
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
            <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                className="font-mono text-[10px] uppercase tracking-[0.6em]"
            >
                {project.status}
            </motion.span>
            
            <h3 className="text-6xl md:text-9xl font-normal tracking-tighter uppercase leading-none">
                {project.title}
            </h3>
            
            <div className="flex flex-col items-center gap-8">
                <p className="text-xl md:text-3xl tracking-tight max-w-2xl px-8 leading-relaxed italic">
                    "{project.tagline}"
                </p>
                <div className="w-px h-24 bg-black/10" />
                <span className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-40">
                    {project.details}
                </span>
            </div>
            
            <button className="text-[10px] font-mono uppercase tracking-widest border border-black px-12 py-4 hover:bg-black hover:text-white transition-all duration-500">
                Register Intent
            </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      ref={container}
      style={{ y }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`absolute ${project.pos} ${project.w} ${project.aspect} z-10 group cursor-pointer`}
    >
      <div className="relative w-full h-full overflow-hidden bg-zinc-100 shadow-sm">
        <Image 
          src={project.img} 
          alt={project.title} 
          fill 
          className={`object-cover grayscale transition-all duration-1000 ${hovered ? 'scale-105 grayscale-0 opacity-100' : 'scale-110 opacity-70'}`}
        />
        
        {/* Abstract Overlays */}
        <motion.div 
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 1.1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        >
            <div className="bg-white/95 backdrop-blur-sm px-10 py-6 border border-black/5 flex flex-col items-center">
                <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-accent mb-3">{project.status}</span>
                <span className="text-2xl md:text-3xl tracking-tighter text-black">{project.title}</span>
            </div>
        </motion.div>
      </div>

      {/* Floating Meta Text */}
      <div className={`mt-6 flex justify-between items-start font-mono text-[9px] uppercase tracking-widest opacity-30 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-30'}`}>
        <span>{project.title}</span>
        <span>{project.status}</span>
      </div>
    </motion.div>
  );
};
