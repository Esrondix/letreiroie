import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.3em] uppercase mb-8 text-white/60">
            Strip Agency Studio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl mx-auto">
            We Create Digital Product for <br /> Your Business
          </h1>
          
          <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto font-light">
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.
          </p>

          <button className="bg-accent text-background px-10 py-4 rounded-full font-bold hover:brightness-110 transition-all mb-12">
            Hire Me Now
          </button>

          <div className="flex items-center justify-center gap-6">
            <span className="text-white/20 text-sm font-bold uppercase tracking-widest">Follow Us</span>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature Cards Grid (Placeholder Pattern Cards) */}
        <div className="grid md:grid-cols-3 gap-6 mt-32">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="aspect-[4/3] rounded-[2rem] card-gradient border border-white/5 relative overflow-hidden group"
            >
              {/* Pattern Placeholder */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
