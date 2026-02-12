import { motion } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";

export const GoldenRule = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] rounded-[3rem] p-8 md:p-16 relative overflow-hidden backdrop-blur-2xl"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
            <div className="w-20 h-20 rounded-3xl bg-accent flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(0,152,185,0.4)]">
              <Info className="text-background" size={40} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tighter mb-6 text-text">
                A REGRA DE OURO <span className="text-accent ml-2">(Como medimos o seu Logótipo?)</span>
              </h3>
              <p className="text-muted text-xl leading-relaxed mb-8 max-w-4xl font-normal">
                O preço é definido pela <span className="text-text font-bold">Maior Dimensão</span>. 
                Se o seu logótipo é horizontal (ex: Zara), conta a <span className="text-text font-bold">Largura</span>. 
                Se é quadrado/redondo (ex: Starbucks), conta a <span className="text-text font-bold">Altura</span>. 
                Assim garantimos sempre a proporção correta na sua parede.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 text-muted">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Proporção Garantida
                </div>
                <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 text-muted">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Orçamento Instantâneo
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const ConnectionSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-5xl font-medium uppercase tracking-[-2px] mb-10 leading-[1] text-text">
              A Sua Imagem <br />
              <span className="text-accent">Define o Seu Valor.</span>
            </h2>
            <div className="space-y-8 text-muted text-xl leading-relaxed font-normal">
              <p>
                Em Portugal, a primeira impressão é a única que conta. Um reclamo velho ou improvisado desvaloriza o seu serviço.
              </p>
              <p>
                Esqueça os orçamentos que demoram semanas. Com a nossa tecnologia industrial, você tem o acabamento de uma multinacional, por uma fração do custo.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-text text-background px-12 py-5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-4 group"
            >
              Quero Valorizar a Minha Marca
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Before/After Placeholder */}
            <div className="aspect-[4/3] rounded-[4rem] overflow-hidden border border-[rgba(241,244,250,0.1)] bg-[rgba(241,244,250,0.03)] relative group backdrop-blur-3xl">
              {/* Labels */}
              <div className="absolute top-8 left-8 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-red-500">
                Antes (Amador)
              </div>
              <div className="absolute bottom-8 right-8 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-accent">
                Depois (A Fábrica)
              </div>

              {/* Decorative graphic */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-40 h-40 border-2 border-dashed border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute text-text/5 font-black text-9xl select-none tracking-tighter">IMPACTO</div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-12 -left-12 bg-accent p-10 rounded-[3rem] shadow-[0_0_50px_rgba(0,152,185,0.3)] hidden md:block">
              <div className="text-5xl font-medium text-background tracking-tighter">+300%</div>
              <div className="text-[10px] font-bold text-background/60 uppercase tracking-widest mt-1">Visibilidade</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
