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
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Service We Can <br /> Help You</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                  {service.icon}
                </div>
                <span className="font-bold text-white/80 group-hover:text-white transition-colors">{service.name}</span>
              </div>
              <ArrowRight size={16} className="text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
          
          <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="font-bold text-white/40 underline underline-offset-8">Load more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
