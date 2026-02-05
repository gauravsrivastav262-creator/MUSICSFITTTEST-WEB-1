
import React, { useState, useEffect } from 'react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit'
  });
  
  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }).toUpperCase();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* 3D Atmosphere Layers */}
      <div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
      >
        <div className="w-[120vw] h-[120vw] border-[0.5px] border-white/5 rounded-full absolute animate-[spin_120s_linear_infinite] opacity-40"></div>
        <div className="w-[90vw] h-[90vw] border-[0.5px] border-white/5 rounded-full absolute animate-[spin_80s_linear_infinite_reverse] opacity-20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Mysterious Architect Credit */}
        <div className="absolute -top-32 font-mystery text-white/40 tracking-[0.2em] animate-pulse">
          Mysterious Helper: Gaurav Shrivastava
        </div>

        {/* Dynamic Nexus Clock */}
        <div className="mb-10 glass px-8 py-3 rounded-full border border-white/5 flex gap-6 items-center shadow-inner reveal-up">
          <div className="flex flex-col items-start">
             <span className="text-cyan-400 font-bold tracking-[0.4em] text-[9px] uppercase leading-none">Global.Sync</span>
             <span className="text-white font-mono text-xl tracking-tighter glow-text">{formattedTime}</span>
          </div>
          <div className="w-[1px] h-8 bg-white/10"></div>
          <div className="flex flex-col items-start">
             <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase leading-none mb-1">Celestial.Date</span>
             <span className="text-white/80 text-[10px] tracking-[0.2em] font-medium">{formattedDate}</span>
          </div>
        </div>

        <div className="relative group perspective-1000">
          <h1 className="font-futuristic text-8xl md:text-[13rem] font-bold tracking-[-0.08em] leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-transparent drop-shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-transform duration-700 hover:scale-[1.02]">
            MUSICSFITT
          </h1>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-center">
             <span className="text-[10px] md:text-xs tracking-[1em] uppercase text-white/30 font-light translate-z-[100px]">Architectural Lifestyle Presence</span>
          </div>
        </div>

        <div className="mt-24 space-y-8 reveal-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg md:text-xl font-light tracking-[0.5em] uppercase text-cyan-400/80">
            Music <span className="text-white/20 mx-4">|</span> Travel <span className="text-white/20 mx-4">|</span> Beautiful Life
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="group relative px-12 py-5 rounded-full bg-white text-black font-bold tracking-[0.3em] text-xs uppercase overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <span className="relative z-10">Step Into Darkness</span>
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
            <button className="px-12 py-5 rounded-full glass border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-xs tracking-[0.3em] uppercase text-white/80">
              The Journey Notes
            </button>
          </div>
        </div>
      </div>

      {/* Down Scroll Anchor */}
      <div className="absolute bottom-12 flex flex-col items-center gap-6 group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] tracking-[0.6em] uppercase text-white/40 group-hover:text-cyan-400 transition-colors">Vertical Navigation</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white animate-[scrollLine_2s_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
