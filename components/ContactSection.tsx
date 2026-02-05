
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Welcome to the inner circle, ${name}. We'll connect soon.`);
  };

  return (
    <section id="connect" className="py-32 px-6 flex flex-col items-center">
      <div className="glass max-w-2xl w-full p-12 md:p-20 rounded-[40px] text-center space-y-8 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
        
        <h2 className="font-futuristic text-4xl font-bold tracking-wider">JOIN THE PORTAL</h2>
        <p className="text-white/50 text-lg font-light leading-relaxed">
          Be the first to explore new music realms and travel dimensions. 
          Step into the future of lifestyle.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group/input">
            <input 
              type="text" 
              placeholder="YOUR NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm tracking-widest focus:outline-none focus:border-cyan-400 focus:bg-white/[0.08] transition-all duration-500"
              required
            />
          </div>
          <div className="relative group/input">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm tracking-widest focus:outline-none focus:border-purple-400 focus:bg-white/[0.08] transition-all duration-500"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 font-bold tracking-[0.4em] uppercase text-sm shadow-[0_10px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.5)] hover:scale-[1.02] transition-all duration-500"
          >
            Initiate Access
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
