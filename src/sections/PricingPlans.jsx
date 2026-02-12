import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    id: 1,
    title: "INTERIOR & OFFICE",
    focus: "Receções, Escritórios",
    material: "PVC Expandido (19mm) ou Acrílico (5mm)",
    install: "Fita Dupla Face VHB (Faça você mesmo)",
    prices: [
      { label: "S (Até 60cm)", price: "97" },
      { label: "M (Até 100cm)", price: "147" },
      { label: "L (Até 140cm)", price: "197" },
    ],
    cta: "VERIFICAR COMPATIBILIDADE ➜",
    accent: false
  },
  {
    id: 2,
    title: "FACHADA PRO",
    focus: "Lojas de Rua, Armazéns",
    material: "Alumínio Compósito (Dibond) ou Lacado 3mm",
    install: "Pinos de Encaixe + Gabarito (Faça você mesmo)",
    prices: [
      { label: "S (Até 150cm)", price: "249" },
      { label: "M (Até 200cm)", price: "349" },
      { label: "L (Até 250cm)", price: "449" },
    ],
    cta: "VERIFICAR COMPATIBILIDADE ➜",
    accent: true,
    badge: "BEST-SELLER"
  },
  {
    id: 3,
    title: "ELITE 3D",
    focus: "Letras Corpóreas (Caixa Alta), Sedes",
    material: "Aço Inox ou Alumínio Lacado (Relevo 3cm-6cm)",
    install: "Híbrida: Kit DIY ou Montagem Profissional",
    prices: [
      { label: "S (Até 150cm)", price: "490" },
      { label: "M (Até 200cm)", price: "650" },
      { label: "L (Até 300cm)", price: "890" },
    ],
    cta: "VERIFICAR COMPATIBILIDADE ➜",
    accent: false
  },
  {
    id: 4,
    title: "CORPORATE",
    focus: "Projetos Pesados, Totems, Iluminação",
    material: "Projetos Sob Medida / Estruturas Pesadas",
    install: "Equipa de Montagem, Gruas e Plataformas",
    custom: true,
    prices: [],
    cta: "PEDIR ORÇAMENTO C/ MONTAGEM",
    accent: false
  }
];

export const PricingPlans = () => {
  return (
    <section id="precos" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-medium uppercase tracking-[-2px] mb-6 text-text leading-[1]"
        >
            A Solução Ideal para <br />
            <span className="text-accent">o Seu Negócio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-xl max-w-2xl mx-auto"
          >
            Impacto visual à sua medida. Do kit prático ao projeto monumental.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[3rem] p-10 border transition-all duration-500 flex flex-col h-full group ${
                plan.accent 
                  ? 'bg-accent border-accent text-background scale-[1.05] shadow-[0_30px_60px_rgba(0,152,185,0.3)] z-10' 
                  : 'bg-[rgba(241,244,250,0.15)] border-[rgba(241,244,250,0.2)] text-text backdrop-blur-2xl shadow-lg hover:bg-[rgba(241,244,250,0.18)]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-text text-accent px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">
                  {plan.badge}
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-3xl font-medium uppercase tracking-tight mb-2 leading-none">{plan.title}</h3>
                <p className={`text-xs font-bold uppercase tracking-widest ${plan.accent ? 'text-background/60' : 'text-accent'}`}>
                  {plan.focus}
                </p>
              </div>

              <div className="space-y-6 mb-12 flex-1">
                <div className="flex gap-4 items-start">
                  <div className={`mt-1 flex-shrink-0 ${plan.accent ? 'text-background' : 'text-accent'}`}>
                    <Zap size={18} fill="currentColor" />
                  </div>
                  <p className="text-sm leading-relaxed">
                    <span className="font-bold block mb-1 uppercase tracking-wider text-[10px] opacity-60">Material</span>
                    <span className={plan.accent ? 'text-background/80 font-medium' : 'text-muted font-normal'}>{plan.material}</span>
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className={`mt-1 flex-shrink-0 ${plan.accent ? 'text-background' : 'text-accent'}`}>
                    <Star size={18} fill="currentColor" />
                  </div>
                  <p className="text-sm leading-relaxed">
                    <span className="font-bold block mb-1 uppercase tracking-wider text-[10px] opacity-60">Instalação</span>
                    <span className={plan.accent ? 'text-background/80 font-medium' : 'text-muted font-normal'}>{plan.install}</span>
                  </p>
                </div>
              </div>

              <div className="mb-12">
                {plan.custom ? (
                  <div className="py-8">
                    <span className="text-3xl font-medium uppercase tracking-tighter">Sob Orçamento</span>
                    <p className={`text-[10px] mt-3 font-bold uppercase tracking-widest ${plan.accent ? 'text-background/40' : 'text-muted/40'}`}>
                      Resposta em 24h úteis
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {plan.prices.map((p, idx) => (
                      <div key={idx} className={`flex justify-between items-center py-3 border-b ${plan.accent ? 'border-background/10' : 'border-[rgba(241,244,250,0.05)]'}`}>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{p.label}</span>
                        <span className="text-2xl font-medium tracking-tighter">€{p.price}<span className="text-[10px] ml-1 opacity-60">+IVA</span></span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className={`w-full py-6 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                plan.accent 
                  ? 'bg-background text-text hover:bg-background/90' 
                  : 'bg-text text-background hover:bg-accent hover:text-background'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
