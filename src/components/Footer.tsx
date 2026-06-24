"use client";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-between px-8 py-8 md:px-16 text-black/40 text-[10px] font-mono uppercase tracking-[0.4em] pointer-events-auto">
      <div className="flex items-center gap-8">
        <span>&copy; 2026</span>
        <a href="https://work.gumiilabs.com" className="hover:text-black transition-colors underline decoration-black/20 hover:decoration-black underline-offset-4">Work &rarr;</a>
      </div>
      
      <nav className="flex gap-12">
        <a href="https://x.com" target="_blank" className="hover:text-black transition-colors">Twitter (X)</a>
        <a href="mailto:hello@gumii.labs" className="hover:text-black transition-colors">Email</a>
      </nav>
    </footer>
  );
};
