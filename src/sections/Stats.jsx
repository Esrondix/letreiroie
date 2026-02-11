import React from 'react';
import { motion } from 'framer-motion';

export const Stats = () => {
  const stats = [
    { label: 'Anos de Experiência', value: '15+' },
    { label: 'Projetos Concluídos', value: '850+' },
    { label: 'Clientes Felizes', value: '420+' },
    { label: 'Prémios Design', value: '12' },
  ];

  return (
    <section className="py-24 border-y border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-6xl font-display font-black text-accent mb-2">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
