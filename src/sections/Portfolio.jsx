import React from 'react';
import { motion } from 'framer-motion';

export const Portfolio = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">More Than 50+ Awesome <br /> Active Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="aspect-[3/4] rounded-[2.5rem] bg-secondary/50 border border-white/5 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 group-hover:opacity-20 transition-opacity" />
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[4, 5].map((_, i) => (
            <div key={i} className="aspect-[16/10] rounded-[2.5rem] bg-secondary/50 border border-white/5 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 group-hover:opacity-20 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-accent text-background px-10 py-4 rounded-full font-bold hover:brightness-110 transition-all">
            View All Work
          </button>
        </div>
      </div>
    </section>
  );
};
