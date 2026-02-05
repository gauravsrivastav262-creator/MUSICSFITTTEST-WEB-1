
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-48 pb-12 border-t border-white/5 px-6 md:px-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-900/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
        <div className="space-y-4">
          <h2 className="font-futuristic font-bold text-5xl md:text-7xl tracking-tighter glow-text">MUSICSFITT</h2>
          <p className="text-white/20 text-xs tracking-[1em] uppercase italic">The night is just the beginning.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[10px] tracking-[0.6em] uppercase text-white/40 w-full max-w-3xl">
          <a href="#" className="hover:text-cyan-400 transition-all">Instagram</a>
          <a href="#" className="hover:text-purple-400 transition-all">Spotify</a>
          <a href="#" className="hover:text-magenta-glow transition-all">YouTube</a>
          <a href="#" className="hover:text-white transition-all">Archive</a>
        </div>
        
        <div className="pt-24 flex flex-col items-center gap-6">
            <div className="font-mystery text-white/10 text-xs">
                Architect of the Void: Gaurav Shrivastava
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/10 font-light">
                &copy; 2024 MUSICSFITT Universe. All Rights Reserved. <br className="md:hidden"/>
                No Part of this Dream May Be Replicated.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
