import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Enterprise Hub",
    category: "Letras Monobloco",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Neon Bistro",
    category: "LED Néon Flex",
    image: "https://images.unsplash.com/photo-1514315384763-ba401779410f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Fashion Flagship",
    category: "Reclamos Luminosos",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
  }
];

export const Portfolio = () => {
  return (
    <section id="projetos" className="py-40 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-4 block"
            >
              Portfólio
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">
              PROJETOS DE <br /> <span className="text-accent italic">VANGUARDA.</span>
            </h2>
          </div>
          <a href="#" className="flex items-center gap-4 text-background/40 hover:text-accent transition-colors text-[10px] font-black uppercase tracking-widest group">
            Arquivo Completo <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-background border border-background">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden bg-background"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-accent font-black text-[8px] uppercase tracking-[0.4em] mb-4">{project.category}</span>
                <h4 className="text-foreground text-3xl font-display font-black uppercase tracking-tighter mb-4">{project.title}</h4>
                <div className="w-8 h-px bg-accent group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
