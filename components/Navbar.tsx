
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = ['Music', 'Travel', 'Life', 'Connect'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-8 py-3 rounded-full flex items-center gap-12 border border-white/10 shadow-2xl">
        <div className="text-xl font-futuristic font-bold tracking-tighter cursor-pointer hover:text-purple-400 transition-colors">
          MUSICSFITT
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase opacity-70">
          {navItems.map((item) => (
            <li key={item} className="relative group cursor-pointer" onClick={() => scrollToSection(item)}>
              <span className="group-hover:text-white transition-colors">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#22d3ee]"></span>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
