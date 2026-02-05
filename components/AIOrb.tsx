
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIOrb: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Welcome traveler. I am MUSICSFITT AI. How can I guide your journey through the night?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are MUSICSFITT AI, a calm, poetic, and wise night companion for a luxury lifestyle brand. Your tone is chill, artistic, and sophisticated. You help users find music based on moods (e.g., 'night vibes', 'deep work', 'wanderlust'), suggest travel ideas with a spiritual/minimalist touch, and offer life clarity thoughts. Keep responses concise but evocative.",
          temperature: 0.8,
        },
      });

      const aiText = response.text || "The cosmos is quiet right now. Let's try again in a moment.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Forgive me, my connection to the ether is flickering. Try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass rounded-[32px] shadow-2xl overflow-hidden flex flex-col border border-white/10 animate-fade-up">
          <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-white/5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 animate-pulse"></div>
            <div>
              <h4 className="font-futuristic font-bold text-sm tracking-wider">MUSICSFITT AI</h4>
              <p className="text-[10px] text-cyan-400/70 tracking-widest uppercase">Night Companion • Active</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="ml-auto opacity-40 hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-purple-600/20 text-white border border-purple-500/20' 
                    : 'bg-white/5 text-white/80 border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-3 rounded-2xl flex gap-1">
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-white/5">
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Whisper your thoughts..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 pr-12 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="absolute right-2 w-8 h-8 rounded-full bg-cyan-600/80 flex items-center justify-center hover:bg-cyan-500 transition-colors disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* The Orb */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 flex items-center justify-center relative shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-transform duration-500 hover:scale-110 active:scale-95 group ${isOpen ? 'rotate-45' : ''}`}
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-purple-500 opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 rounded-full neon-glow pointer-events-none"></div>
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.808-1.232L3 21l1.232-4.192C3.124 15.397 2 13.791 2 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        )}
      </button>
    </div>
  );
};

export default AIOrb;
