import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Factory, ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const dynamicWords = ["luminosos", "publicitários", "profissionais", "premium", "de PVC", "de Acrílico", "da sua empresa"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }, 2500); // Muda a palavra a cada 2.5 segundos
    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Media Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-background/80 z-10" />
        
        {/* Vídeo Loop (Desktop) / Imagem (Mobile) */}
        <div className="hidden md:block w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-laser-cutting-metal-machine-24075-large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="md:hidden w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-40"
            alt="Fábrica de Reclamos"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-accent">
            <Factory size={12} />
            Indústria de Publicidade Portugal
          </div>
          
          <h1 className="text-3xl md:text-6xl font-medium leading-[1] mb-10 max-w-4xl mx-auto tracking-[-3px] text-text">
            <span className="block whitespace-nowrap">
              Reclamos{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={dynamicWords[currentWordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-accent"
                >
                  {dynamicWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block whitespace-nowrap">Direto da Fábrica.</span>
          </h1>
          
          <h2 className="text-muted text-lg md:text-2xl mb-14 max-w-3xl mx-auto font-normal leading-relaxed">
            Acabamento Premium em Alumínio, PVC ou Acrílico. Receba o Kit Pronto a Aplicar ou conte com a nossa Equipa Especializada para instalações.
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
            <button 
              onClick={scrollToPricing}
              className="w-full md:w-auto bg-accent text-background px-12 py-6 rounded-full font-bold text-xs uppercase tracking-widest hover:brightness-110 hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,152,185,0.4)]"
            >
              Ver Preços e Medidas
            </button>
            
            {/* Gatilhos de Autoridade */}
            <div className="flex flex-col gap-4 text-left md:ml-10">
              <div className="flex items-center gap-3 text-xs font-medium text-muted uppercase tracking-widest">
                <ShieldCheck size={18} className="text-accent" />
                Garantia de Material Certificado
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-muted uppercase tracking-widest">
                <Factory size={18} className="text-accent" />
                Preço Direto da Fábrica
              </div>
            </div>
          </div>

          {/* Hidden SEO Keywords (Robô do Google) */}
          <div className="sr-only">
            Reclamos luminosos Portugal, letras monobloco Porto, reclamos Lisboa, reclamos luminosos preços, 
            letras PVC expandido, letras inox acabamento premium, fabricação de reclamos, instalação de publicidade Algarve,
            Coimbra reclamos, Braga letras publicidade.
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted/40 flex flex-col items-center gap-2 cursor-pointer"
            onClick={scrollToPricing}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Descobrir Medidas</span>
            <ArrowDown size={24} strokeWidth={1} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
