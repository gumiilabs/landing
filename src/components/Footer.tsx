"use client";

export const Footer = () => {
  return (
    <footer className="py-24 px-8 md:px-16 border-t border-black/5 bg-white text-black/40 text-[10px] font-mono uppercase tracking-[0.4em]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-8">
          <span className="text-black normal-case font-bold tracking-tighter text-base">gumii</span>
          <span>&copy; 2026 / All Rights Reserved</span>
        </div>
        
        <nav className="flex gap-12">
          <a href="https://x.com" target="_blank" className="hover:text-accent transition-colors">Twitter (X)</a>
          <a href="mailto:hello@gumii.labs" className="hover:text-accent transition-colors">Email</a>
        </nav>
      </div>
    </footer>
  );
};
