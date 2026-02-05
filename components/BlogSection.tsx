
import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  { id: '1', title: 'The 2AM Creative Wave', excerpt: 'Why our best ideas manifest when the world sleeps...', date: 'Nov 12, 2024' },
  { id: '2', title: 'Sonic Architectures', excerpt: 'How spatial audio changes the way we perceive urban travel.', date: 'Oct 28, 2024' },
  { id: '3', title: 'Minimalism in High Definition', excerpt: 'Finding clarity in the digital noise of modern lifestyle.', date: 'Oct 15, 2024' },
];

const BlogSection: React.FC = () => {
  return (
    <section id="life" className="py-24 px-6 md:px-24 bg-[#0d0d19]/40 border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-futuristic text-4xl font-bold tracking-wider mb-2">LIFE JOURNAL</h2>
          <p className="text-white/40 tracking-widest text-xs uppercase">Philosophies & Reflections</p>
        </div>

        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer border-b border-white/5 pb-16 last:border-0 hover:border-purple-500/30 transition-colors">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">{post.date}</span>
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
              <h3 className="text-3xl font-medium mb-4 group-hover:text-purple-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="text-sm tracking-[0.5em] uppercase text-cyan-400 hover:text-white transition-colors">
            Archive.2024
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
