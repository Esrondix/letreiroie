import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  BarChart, 
  Hexagon, 
  Headphones, 
  Database, 
  RefreshCw 
} from 'lucide-react';

const benefits = [
  { title: 'Tecnologia Industrial', desc: 'Produzimos com máquinas de alta precisão para garantir um acabamento perfeito e duradouro.', icon: <ShieldCheck /> },
  { title: 'Rapidez de Entrega', desc: 'O nosso processo automatizado permite-nos entregar o seu reclamo em tempo recorde.', icon: <Clock /> },
  { title: 'Preço Direto de Fábrica', desc: 'Sem intermediários. Você compra diretamente a quem produz, garantindo o melhor preço do mercado.', icon: <DollarSign /> },
  { title: 'Escalabilidade', desc: 'Desde um único logótipo até à sinalética completa de uma rede de lojas nacional.', icon: <BarChart /> },
  { title: 'Identidade Visual', desc: 'Respeitamos rigorosamente o manual de normas da sua marca em cada detalhe.', icon: <Hexagon /> },
  { title: 'Apoio Técnico', desc: 'Consultores especializados para ajudar a escolher a melhor solução para a sua fachada.', icon: <Headphones /> },
  { title: 'Recursos Próprios', desc: 'Frota e equipas de montagem próprias para um serviço chave na mão sem surpresas.', icon: <Database /> },
  { title: 'Garantia Total', desc: 'Todos os nossos produtos têm garantia de durabilidade e resistência às intempéries.', icon: <RefreshCw /> },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-medium mb-6 text-text tracking-[-2px] uppercase"
          >
            Vantagens de <span className="text-accent">Comprar Direto</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-xl max-w-2xl mx-auto"
          >
            A Letter alia a arte da publicidade à precisão da indústria moderna.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-10 rounded-[3rem] bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] hover:border-accent/40 transition-all group backdrop-blur-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-background transition-all duration-300">
                {React.cloneElement(benefit.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-medium mb-4 text-text uppercase tracking-tight">{benefit.title}</h3>
              <p className="text-muted text-base leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
