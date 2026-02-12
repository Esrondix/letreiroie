import { motion } from "framer-motion";
import { Truck, Shield, HardHat, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "O meu logo é muito comprido, qual medida escolho?",
    a: "Escolha a largura (maior dimensão). Nós ajustamos a altura proporcionalmente para que o seu logótipo mantenha o design original sem distorções."
  },
  {
    q: "Vocês instalam no Algarve?",
    a: "Sim! Para projetos de grande formato (Opções 3 e 4), deslocamos a nossa equipa para qualquer ponto de Portugal Continental sob orçamento de deslocação."
  },
  {
    q: "Enviam fatura?",
    a: "Sim, todos os nossos produtos acompanham fatura com NIF. Os preços indicados acrescem IVA à taxa legal em vigor."
  },
  {
    q: "Quanto tempo demora a produção?",
    a: "Em média, 5 a 8 dias úteis após a validação técnica do ficheiro. Projetos Corporate podem requerer prazos específicos."
  }
];

export const ServiceAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Installation Module */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-5xl font-medium uppercase tracking-[-2px] mb-12 leading-[1] text-text">
              Projetos complexos? <br />
              Ou em altura? <br />
              <span className="text-accent">Nós resolvemos.</span>
            </h2>
            
            <p className="text-muted text-xl mb-12 leading-relaxed font-normal">
              Para reclamos de grande formato (Opções 3 e 4), dispomos de infraestrutura própria para garantir uma montagem segura e profissional em todo o país.
            </p>

            <div className="space-y-10">
              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] flex items-center justify-center flex-shrink-0 backdrop-blur-xl">
                  <HardHat className="text-accent" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 uppercase tracking-tight text-text">Equipa Certificada</h4>
                  <p className="text-muted text-base leading-relaxed">Técnicos habilitados para trabalhos verticais e manuseamento de estruturas pesadas.</p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] flex items-center justify-center flex-shrink-0 backdrop-blur-xl">
                  <Truck className="text-accent" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 uppercase tracking-tight text-text">Infraestrutura Própria</h4>
                  <p className="text-muted text-base leading-relaxed">Camião Grua e Plataformas Elevatórias disponíveis para montagens de qualquer complexidade.</p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] flex items-center justify-center flex-shrink-0 backdrop-blur-xl">
                  <Shield className="text-accent" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2 uppercase tracking-tight text-text">Segurança Total</h4>
                  <p className="text-muted text-base leading-relaxed">Fixação química certificada e Seguro de Responsabilidade Civil incluído em todos os projetos.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            <h3 className="text-2xl font-medium uppercase tracking-widest mb-12 border-l-4 border-accent pl-8 text-text">
              FAQ TÉCNICA
            </h3>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`rounded-[2rem] border transition-all duration-300 backdrop-blur-xl ${
                    openFaq === i ? 'bg-[rgba(241,244,250,0.08)] border-[rgba(241,244,250,0.2)]' : 'bg-[rgba(241,244,250,0.03)] border-[rgba(241,244,250,0.05)] hover:border-[rgba(241,244,250,0.1)]'
                  }`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full p-8 flex items-center justify-between text-left group"
                  >
                    <span className={`text-lg font-medium transition-colors pr-8 ${openFaq === i ? 'text-accent' : 'text-text group-hover:text-accent'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown className={`flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-accent' : 'text-muted group-hover:text-text'}`} />
                  </button>
                  
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="overflow-hidden"
                    >
                      <p className="px-8 pb-8 text-muted text-lg leading-relaxed border-t border-[rgba(241,244,250,0.05)] pt-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
