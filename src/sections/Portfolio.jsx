import React from 'react';
import { motion } from 'framer-motion';

export const Portfolio = () => {
  return (
    <section id="projects" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-medium mb-6 text-text tracking-[-2px] uppercase"
          >
            Mais de <span className="text-accent">50+ Projetos</span> <br /> Ativos e Reais
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-xl max-w-2xl mx-auto"
          >
            Transformamos fachadas em todo o país com tecnologia industrial de ponta.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[1, 2, 3].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-[3/4] rounded-[3rem] bg-[rgba(241,244,250,0.15)] border border-[rgba(241,244,250,0.2)] overflow-hidden relative group backdrop-blur-2xl shadow-lg"
            >
              <div className="absolute inset-0 bg-[radial-gradient(rgba(241,244,250,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-1 w-12 bg-accent mb-4" />
                <div className="text-text font-medium text-lg">Projeto Industrial {i + 1}</div>
                <div className="text-muted text-sm uppercase tracking-widest mt-1">Acabamento Premium</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[4, 5].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-[16/10] rounded-[3rem] bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] overflow-hidden relative group backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(rgba(241,244,250,0.1)_1px,transparent_1px)] [background-size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="h-1 w-16 bg-accent mb-4" />
                <div className="text-text font-medium text-2xl">Grande Formato {i + 4}</div>
                <div className="text-muted text-sm uppercase tracking-widest mt-2">Visibilidade Máxima</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-text text-background px-12 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          >
            Ver Portfólio Completo
          </motion.button>
        </div>
      </div>
    </section>
  );
};
