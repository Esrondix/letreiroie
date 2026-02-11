import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Box, Zap, Layers } from 'lucide-react';

const services = [
  {
    title: "Letras Monobloco",
    desc: "Aço inox polido, escovado ou retroiluminado para máxima elegância.",
    icon: <Shield size={24} />,
    tag: "Premium"
  },
  {
    title: "Reclamos Luminosos",
    desc: "Sistemas LED de alta eficiência para visibilidade 24/7.",
    icon: <Zap size={24} />,
    tag: "Impacto"
  },
  {
    title: "Néon LED Flex",
    desc: "A estética vintage com tecnologia moderna e baixo consumo.",
    icon: <Box size={24} />,
    tag: "Tendência"
  },
  {
    title: "Sinalética Técnica",
    desc: "Soluções estruturais e orientativas para grandes espaços.",
    icon: <Layers size={24} />,
    tag: "Precisão"
  }
];

export const Services = () => {
  return (
    <section id="servicos" className="py-40 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-32">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-8"
          >
            Expertise
          </motion.span>
          <h2 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter leading-none">
            SOLUÇÕES <br />
            <span className="text-accent italic">TÉCNICAS.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-background p-12 hover:bg-foreground/[0.02] transition-colors duration-700 relative overflow-hidden"
            >
              <div className="mb-12 text-accent group-hover:scale-110 transition-transform duration-700 inline-block">
                {service.icon}
              </div>
              <span className="block text-[8px] font-black uppercase tracking-[0.4em] text-accent/40 mb-4">
                {service.tag}
              </span>
              <h3 className="text-2xl font-display font-black uppercase tracking-tighter mb-6 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                {service.desc}
              </p>
              
              <div className="absolute top-0 right-0 p-8 text-white/5 text-4xl font-display font-black group-hover:text-accent/10 transition-colors">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
