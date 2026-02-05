
import React, { useState } from 'react';
import { MusicTrack } from '../types';

const tracks: MusicTrack[] = [
  { id: '1', title: 'Cyber Drift', artist: 'Neon Waves', category: 'Night Vibes', imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=400&h=500' },
  { id: '2', title: 'Lost in Tokyo', artist: 'Midnight Sun', category: 'Travel', imageUrl: 'https://images.unsplash.com/photo-1540959733332-e94e270b4081?auto=format&fit=crop&q=80&w=400&h=500' },
  { id: '3', title: 'Golden Hour', artist: 'Soul Echo', category: 'Mood', imageUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400&h=500' },
  { id: '4', title: 'Retro Horizon', artist: 'Electric Dream', category: 'Night Vibes', imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=400&h=500' },
];

const MusicCard: React.FC<{ track: MusicTrack }> = ({ track }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className="tilt-card group relative glass rounded-[2rem] overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={track.imageUrl} 
          alt={track.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-z-[50px]">
        <span className="text-[10px] uppercase tracking-[0.4em] text-cyan-400 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {track.category}
        </span>
        <h3 className="text-2xl font-bold mb-1 group-hover:text-cyan-200 transition-colors">{track.title}</h3>
        <p className="text-sm opacity-40 mb-6">{track.artist}</p>
        
        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
            <svg className="w-5 h-5 fill-black ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(0,242,255,0.5)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MusicSection: React.FC = () => {
  return (
    <section id="music" className="py-32 px-6 md:px-24">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="text-cyan-400 text-xs tracking-[0.6em] uppercase mb-4">Aural Landscapes</p>
          <h2 className="font-futuristic text-5xl md:text-7xl font-bold tracking-tighter">SONIC REALM</h2>
        </div>
        <div className="flex gap-4">
          {['Night', 'Drive', 'Focus'].map(cat => (
            <button key={cat} className="glass px-6 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase hover:border-cyan-400 transition-all">{cat}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {tracks.map((track) => (
          <MusicCard key={track.id} track={track} />
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
