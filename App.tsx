
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JourneyStory from './components/JourneyStory';
import MusicSection from './components/MusicSection';
import TravelSection from './components/TravelSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import AIOrb from './components/AIOrb';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020205] overflow-hidden">
      {/* Interactive Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dynamic Light Rays */}
        <div 
          className="absolute w-[800px] h-[800px] bg-indigo-900/10 blur-[180px] rounded-full transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)` }}
        ></div>
        <div 
          className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full transition-transform duration-700 ease-out"
          style={{ transform: `translate(${-mousePos.x * 0.05}px, ${-mousePos.y * 0.05}px)` }}
        ></div>
        
        {/* Dreamy Particles Effect */}
        <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
                <div 
                    key={i} 
                    className="absolute bg-white rounded-full blur-[1px]"
                    style={{
                        width: Math.random() * 3 + 'px',
                        height: Math.random() * 3 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        animation: `floating ${5 + Math.random() * 10}s infinite ease-in-out`
                    }}
                ></div>
            ))}
        </div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero scrollY={scrollY} />
        <JourneyStory />
        <MusicSection />
        <TravelSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />
      <AIOrb />
    </div>
  );
};

export default App;
