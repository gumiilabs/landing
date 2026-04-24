"use client";

import { motion } from "framer-motion";

export const Philosophy = () => {
  const points = [
    "We build tools, not just ideas.",
    "We simplify complex systems.",
    "We explore across disciplines.",
    "We ship and evolve."
  ];

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 border-t border-black/5">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest opacity-40 mb-12 block">Philosophy</span>
        
        <div className="space-y-6">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-6 group"
            >
              <span className="font-mono text-xs text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
              <p className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-tight group-hover:pl-4 transition-all duration-500">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 pt-12 border-t border-black/5 max-w-lg"
        >
          <p className="text-sm opacity-50 font-mono uppercase tracking-widest leading-relaxed">
            Curated by the Gumii Labs team. Committed to the intersection of art, technology, and human experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
