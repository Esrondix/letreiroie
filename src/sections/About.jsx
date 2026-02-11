import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="empresa" className="py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-12 h-[2px] bg-accent mb-8" />
            <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-12">
              PRECISÃO <br />
              <span className="text-accent italic">ABSOLUTA.</span>
            </h2>
            <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              <p>
                Com mais de 15 anos de experiência no mercado de sinalética técnica, a Ideias Efetivas combina artesanato tradicional com tecnologia de ponta.
              </p>
              <p>
                O nosso laboratório criativo em Sintra está equipado para responder aos desafios mais complexos, desde letras monobloco em aço inox polido a sistemas de iluminação LED de última geração.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative aspect-[4/5] bg-neutral-900 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              alt="Workshop"
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            <div className="absolute bottom-12 left-12 z-20">
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-2">Localização</div>
              <div className="text-2xl font-display font-bold uppercase">Sintra, Portugal</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
