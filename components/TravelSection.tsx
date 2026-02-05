
import React from 'react';
import { TravelDestination } from '../types';

const destinations: TravelDestination[] = [
  { 
    id: '1', 
    city: 'SEOUL', 
    description: 'A liquid symphony of neon reflections. Walk through the Myeongdong maze where every corner feels like a pulse in the city\'s electronic heart.', 
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200&h=800',
    themeColor: '#7000ff'
  },
  { 
    id: '2', 
    city: 'REYKJAVIK', 
    description: 'The edge of the world. Stand where the tectonic plates tear apart and the sky bleeds green with the aurora\'s ghost.', 
    imageUrl: 'https://images.unsplash.com/photo-1520635660276-79f3ad911504?auto=format&fit=crop&q=80&w=1200&h=800',
    themeColor: '#00f2ff'
  },
  { 
    id: '3', 
    city: 'BERLIN', 
    description: 'Industrial poetry. The raw heartbeat of underground techno scenes hidden within abandoned power plants and starlit rooftops.', 
    imageUrl: 'https://images.unsplash.com/photo-1560930950-5cc60be4fe2b?auto=format&fit=crop&q=80&w=1200&h=800',
    themeColor: '#ff00ff'
  }
];

const TravelSection: React.FC = () => {
  return (
    <section id="travel" className="py-48 space-y-64">
      <div className="px-6 md:px-24 text-center space-y-6 max-w-4xl mx-auto">
        <p className="text-purple-400 text-xs tracking-[1em] uppercase font-bold">The Path Unseen</p>
        <h2 className="font-futuristic text-6xl md:text-9xl font-bold tracking-tighter leading-none glow-text">
            BEYOND <span className="text-white/20">HORIZONS</span>
        </h2>
        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
            We don't just visit places. We inhabit them. These are the dimensions where MUSICSFITT finds its true resonance.
        </p>
      </div>

      <div className="space-y-80">
        {destinations.map((dest, idx) => (
          <div key={dest.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-24 px-6 md:px-24 group`}>
            <div className="relative w-full md:w-[65%] aspect-[16/9] overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/5 cursor-crosshair perspective-1000">
              
              {/* POV Image with Smooth Transition */}
              <div className="w-full h-full overflow-hidden transition-all duration-[2s] cubic-bezier(0.19, 1, 0.22, 1) group-hover:scale-110">
                <img 
                  src={dest.imageUrl} 
                  alt={dest.city} 
                  className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-[3s] scale-110 group-hover:scale-100"
                />
              </div>
              
              {/* Cinematic Lens Flare / Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                 <div className="p-8 glass rounded-full border border-white/20">
                    <span className="text-[10px] tracking-[1em] uppercase">Enter Dimension</span>
                 </div>
              </div>

              {/* Geo-Location Tags */}
              <div className="absolute top-12 left-12 font-mono text-[10px] text-white/30 space-y-1">
                 <div>GEO_LOC: {Math.random().toFixed(4)}N, {Math.random().toFixed(4)}E</div>
                 <div>TEMP: 18°C / HUMID: 45%</div>
              </div>
            </div>
            
            <div className="w-full md:w-[30%] space-y-10">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-[1px] bg-white/20"></div>
                 <span className="text-xs tracking-[0.5em] text-white/40 uppercase font-bold">Volume {idx + 1}</span>
              </div>
              
              <h3 className="font-futuristic text-7xl md:text-8xl font-bold tracking-tighter leading-none group-hover:text-cyan-400 transition-colors duration-700">
                {dest.city}
              </h3>
              
              <p className="text-lg font-light leading-relaxed text-white/40 group-hover:text-white/80 transition-all duration-700">
                {dest.description}
              </p>

              <button className="group/btn flex items-center gap-6">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-cyan-400 transition-all">
                   <svg className="w-5 h-5 text-white/20 group-hover/btn:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
                <span className="text-xs tracking-[0.5em] uppercase text-white/20 group-hover/btn:text-white transition-colors">Read The Journal</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelSection;
