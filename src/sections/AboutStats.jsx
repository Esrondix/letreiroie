import React from 'react';
import { motion } from 'framer-motion';

export const AboutStats = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-medium mb-6 text-text tracking-[-2px] uppercase"
          >
            Nós Fazemos a Sua <br /> <span className="text-accent">Marca Brilhar</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 bg-[rgba(241,244,250,0.15)] rounded-[3rem] p-10 border border-[rgba(241,244,250,0.2)] items-center backdrop-blur-2xl shadow-lg"
          >
            <div>
              <h3 className="text-2xl font-medium mb-4 text-text uppercase tracking-tight">Sobre a Letter</h3>
              <p className="text-muted text-base mb-8 leading-relaxed">
                Utilizamos tecnologia industrial de ponta para transformar logótipos em peças de arte tridimensionais que elevam qualquer fachada.
              </p>
              <button className="bg-text text-background px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">Saber Mais</button>
            </div>
            <div className="aspect-square rounded-[2rem] bg-[rgba(241,244,250,0.03)] border border-[rgba(241,244,250,0.05)] overflow-hidden relative">
               <div className="absolute inset-0 bg-[radial-gradient(rgba(241,244,250,0.1)_1px,transparent_1px)] [background-size:15px_15px] opacity-20" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-24 border border-accent/20 rounded-full animate-pulse" />
               </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 bg-[rgba(241,244,250,0.15)] rounded-[3rem] p-10 border border-[rgba(241,244,250,0.2)] items-center backdrop-blur-2xl shadow-lg"
          >
             <div>
              <h3 className="text-2xl font-medium mb-4 text-text uppercase tracking-tight">Imagem Exclusiva</h3>
              <p className="text-muted text-base mb-8 leading-relaxed">
                A sua marca merece um destaque único. Confie na nossa experiência para criar um impacto visual inesquecível.
              </p>
              <button className="bg-accent text-background px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">Começar Agora</button>
            </div>
            <div className="aspect-square rounded-[2rem] bg-[rgba(241,244,250,0.03)] border border-[rgba(241,244,250,0.05)] overflow-hidden relative">
               <div className="absolute inset-0 bg-[radial-gradient(rgba(241,244,250,0.1)_1px,transparent_1px)] [background-size:15px_15px] opacity-20" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-24 border border-text/10 rounded-full animate-[ping_3s_infinite]" />
               </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[rgba(241,244,250,0.05)] rounded-[3rem] p-12 md:p-16 border border-[rgba(241,244,250,0.1)] backdrop-blur-2xl"
          >
            <h3 className="text-4xl font-medium mb-6 text-text leading-tight uppercase tracking-tight">O Sucesso da Sua Marca é a Nossa Missão</h3>
            <p className="text-muted text-lg mb-12 max-w-md leading-relaxed">
              Não somos apenas uma fábrica. Somos o parceiro que garante que a primeira impressão do seu cliente é de total confiança e profissionalismo.
            </p>
            <button className="bg-text text-background px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest mb-16 hover:brightness-110 transition-all">Ver Projetos</button>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-[rgba(241,244,250,0.1)]">
              <div>
                <div className="text-5xl font-medium mb-2 text-text tracking-tighter">500+</div>
                <div className="text-muted text-xs uppercase tracking-[0.2em] font-bold">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-5xl font-medium mb-2 text-text tracking-tighter">100%</div>
                <div className="text-muted text-xs uppercase tracking-[0.2em] font-bold">Clientes Satisfeitos</div>
              </div>
              <div className="col-span-2">
                <div className="text-5xl font-medium mb-2 text-accent tracking-tighter">PT</div>
                <div className="text-muted text-xs uppercase tracking-[0.2em] font-bold">Cobertura Nacional</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[rgba(241,244,250,0.03)] rounded-[3rem] border border-[rgba(241,244,250,0.05)] overflow-hidden relative min-h-[400px] backdrop-blur-sm"
          >
             <div className="absolute inset-0 bg-[radial-gradient(rgba(241,244,250,0.1)_1px,transparent_1px)] [background-size:30px_30px] opacity-20" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-text/5 font-black text-[12rem] select-none tracking-tighter uppercase rotate-[-10deg]">QUALIDADE</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
