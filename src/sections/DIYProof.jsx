import { motion } from "framer-motion";
import { CheckCircle, Package, Wrench } from "lucide-react";

export const DIYProof = () => {
  return (
    <section className="py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-medium uppercase tracking-[-2px] mb-8 text-text leading-[1]"
          >
            Instalar é tão fácil <br />
          <span className="text-accent">como pendurar um quadro.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted max-w-2xl text-xl leading-relaxed font-normal"
          >
            O nosso sistema DIY (Do It Yourself) foi desenhado para ser à prova de erros. 
            Poupe centenas de euros em instalação profissional.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-[3rem] overflow-hidden bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] group shadow-[0_40px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-background cursor-pointer hover:scale-110 transition-transform shadow-[0_0_50px_rgba(0,152,185,0.4)]">
                <svg className="w-10 h-10 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Simulating video overlay */}
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end z-20">
              <div className="bg-background/80 backdrop-blur-xl p-6 rounded-2xl border border-[rgba(241,244,250,0.1)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">Passo-a-passo</p>
                <p className="text-sm font-medium text-text">Instalação em menos de 45 seg.</p>
              </div>
              <div className="flex gap-3 items-center bg-background/40 backdrop-blur-md px-5 py-3 rounded-full border border-[rgba(241,244,250,0.1)]">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-text">Demonstração Real</span>
              </div>
            </div>
            {/* Visual representation of a video/image */}
            <div className="w-full h-full bg-gradient-to-br from-[rgba(241,244,250,0.1)] to-transparent opacity-50"></div>
          </motion.div>

          {/* Icon List */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] flex items-center justify-center flex-shrink-0 backdrop-blur-xl group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-all">
                <CheckCircle className="text-accent group-hover:text-background transition-colors" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-medium mb-3 uppercase tracking-tight text-text">Sem Eletricistas</h4>
                <p className="text-muted text-lg leading-relaxed font-normal">
                  Sistema plug-and-play ou retro-iluminação a pilhas/bateria para montagens rápidas sem necessidade de abrir roços na parede.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-8 items-start group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] flex items-center justify-center flex-shrink-0 backdrop-blur-xl group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-all">
                <Wrench className="text-accent group-hover:text-background transition-colors" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-medium mb-3 uppercase tracking-tight text-text">Sem Serralheiros</h4>
                <p className="text-muted text-lg leading-relaxed font-normal">
                  O nosso gabarito de furação em tamanho real indica exatamente onde deve furar. Basta alinhar, colar e fixar.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-8 items-start group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] flex items-center justify-center flex-shrink-0 backdrop-blur-xl group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-all">
                <Package className="text-accent group-hover:text-background transition-colors" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-medium mb-3 uppercase tracking-tight text-text">Kit Completo Incluído</h4>
                <p className="text-muted text-lg leading-relaxed font-normal">
                  Enviamos tudo: buchas, parafusos, fita VHB original 3M, gabarito e manual de instruções em Português.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
