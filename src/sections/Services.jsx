import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, 
  PenTool, 
  TrendingUp, 
  FileText, 
  Users, 
  Share2, 
  Search, 
  Target,
  ArrowRight
} from 'lucide-react';

const services = [
  { name: 'Marketing Analysis', icon: <BarChart2 size={20} /> },
  { name: 'Copy Writing', icon: <FileText size={20} /> },
  { name: 'Research Solution', icon: <Search size={20} /> },
  { name: 'Content Strategy', icon: <PenTool size={20} /> },
  { name: 'Consulting Management', icon: <Users size={20} /> },
  { name: 'Influencer Marketing', icon: <Share2 size={20} /> },
  { name: 'Sales Forecasting', icon: <TrendingUp size={20} /> },
  { name: 'Social Media Management', icon: <Target size={20} /> },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-medium mb-6 text-text tracking-[-2px] uppercase"
          >
            Serviços <span className="text-accent">Especializados</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-xl max-w-2xl mx-auto"
          >
            Desde o design à instalação, garantimos a melhor imagem para o seu negócio.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between group cursor-pointer p-4 rounded-2xl hover:bg-[rgba(241,244,250,0.03)] transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300 backdrop-blur-md">
                  {service.icon}
                </div>
                <span className="font-medium text-xl text-text group-hover:text-accent transition-colors">{service.name}</span>
              </div>
              <ArrowRight size={20} className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
