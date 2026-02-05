
import React from 'react';

const JourneyStory: React.FC = () => {
  return (
    <section className="relative py-48 px-6 md:px-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
             <span className="text-cyan-400 text-xs tracking-[0.8em] uppercase font-bold">The Narrative</span>
             <h2 className="font-futuristic text-5xl md:text-7xl font-bold tracking-tighter leading-tight glow-text">
                WE DO NOT SEE <br/>
                <span className="text-white/40">WE FEEL.</span>
             </h2>
          </div>
          
          <div className="space-y-8 text-xl text-white/50 leading-relaxed font-light">
             <p>
                Imagine a moment at 2 AM. The city is a hum of neon whispers. You are wearing headphones, and the world outside becomes a cinematic frame of your own design.
             </p>
             <p className="text-white/80">
                MUSICSFITT is that intersection. It's the sound of a rainy Seoul street, the silence of a Nordic glacier, and the clarity of a mind finally at peace with the night.
             </p>
          </div>

          <div className="flex gap-8 items-center pt-8">
             <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center border-white/10 group cursor-pointer hover:border-cyan-400 transition-all">
                <svg className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
             <span className="text-xs tracking-[0.4em] uppercase text-white/40">Watch The Introduction</span>
          </div>
        </div>

        <div className="relative group">
           {/* POV POV Frame */}
           <div className="pov-frame aspect-[3/4] rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl relative group-hover:scale-[1.02] transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1514525253361-bee8a18744ad?auto=format&fit=crop&q=80&w=800&h=1000" 
                className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000"
                alt="POV Journey"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-12 left-12 right-12">
                 <div className="p-6 glass rounded-3xl border-white/10 space-y-2">
                    <span className="text-[10px] tracking-[0.5em] text-cyan-400 uppercase">Current Station</span>
                    <h4 className="text-2xl font-bold tracking-tight">Midnight Reflection</h4>
                 </div>
              </div>
           </div>

           {/* Decorative Elements */}
           <div className="absolute -top-12 -right-12 w-32 h-32 border-t border-r border-white/10 rounded-tr-3xl"></div>
           <div className="absolute -bottom-12 -left-12 w-32 h-32 border-b border-l border-white/10 rounded-bl-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default JourneyStory;
