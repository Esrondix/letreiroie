import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contacto" className="py-40 bg-neutral-900/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-12">
                VAMOS <br />
                <span className="text-accent italic">CONVERSAR?</span>
              </h2>
              
              <div className="space-y-12">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Escritório</div>
                    <div className="text-xl font-light">Sintra, Portugal</div>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Telefone</div>
                    <div className="text-xl font-light">+351 912 345 678</div>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">E-mail</div>
                    <div className="text-xl font-light">geral@ideiasefetivas.pt</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background p-12 border border-white/5"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Nome</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-colors font-light" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">E-mail</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-colors font-light" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Mensagem</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-colors font-light resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button className="group flex items-center gap-4 text-accent font-black uppercase tracking-[0.3em] text-xs pt-4">
                Enviar Mensagem
                <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-all duration-500">
                  <Send size={16} />
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
