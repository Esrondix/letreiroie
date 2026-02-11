import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[90%]"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em]">
              Creative Signage Lab
            </span>
          </div>

          <h1 className="text-[13vw] md:text-[10vw] font-display font-black leading-[0.8] tracking-tighter uppercase mb-12">
            CRIAMOS <br />
            <span className="text-accent italic">IMPACTO</span> <br />
            VISUAL.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <p className="text-muted-foreground text-lg md:text-2xl font-light leading-relaxed max-w-xl">
              Especialistas em sinalética técnica de alta precisão. Redefinimos a identidade física de marcas com acabamentos de elite.
            </p>

            <motion.a
              href="#projetos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-white/10 hover:border-accent transition-all duration-700"
            >
              <div className="absolute inset-0 bg-accent scale-0 group-hover:scale-100 rounded-full transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <ArrowRight size={32} className="text-foreground group-hover:text-background group-hover:rotate-45 transition-all duration-500" />
                <span className="text-[8px] font-black uppercase tracking-widest group-hover:text-background transition-colors">Ver Projetos</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full pointer-events-none opacity-[0.02]">
        <div className="w-full h-full border-l border-white/5 flex items-center justify-center">
          <span className="text-[40vw] font-display font-black text-white select-none">IE</span>
        </div>
      </div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
    </section>
  );
};
