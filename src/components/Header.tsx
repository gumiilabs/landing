"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 md:px-16 bg-white/80 backdrop-blur-sm text-black"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter lowercase hover:text-accent transition-colors duration-300">
        gumii
      </Link>
      
      <nav className="flex gap-10 text-[10px] font-mono uppercase tracking-[0.3em]">
        <Link href="#projects" className="hover:text-accent transition-colors duration-300">Projects</Link>
        <Link href="#lab" className="hover:text-accent transition-colors duration-300">Lab</Link>
      </nav>
    </motion.header>
  );
};
