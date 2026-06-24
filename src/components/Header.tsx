"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-8 md:px-16 text-black pointer-events-auto"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter lowercase hover:text-accent transition-colors duration-300">
        gumii
      </Link>
      
      <nav className="flex gap-10 text-[10px] font-mono uppercase tracking-[0.3em]">
        <Link href="/lab" className="hover:text-accent transition-colors duration-300">Lab</Link>
        <Link href="/work" className="hover:text-accent transition-colors duration-300">Work</Link>
      </nav>
    </motion.header>
  );
};
