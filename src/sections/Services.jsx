import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Search, BarChart3, Rocket } from 'lucide-react';

const services = [
  {
    title: "UI/UX Design",
    desc: "Create beautiful and functional interfaces that your users will love to use.",
    icon: <Layout size={32} />,
    color: "bg-blue-500"
  },
  {
    title: "SEO Optimization",
    desc: "Rank higher on search engines and get more organic traffic to your site.",
    icon: <Search size={32} />,
    color: "bg-orange-500"
  },
  {
    title: "Digital Marketing",
    desc: "Scale your business with data-driven marketing strategies and ads.",
    icon: <BarChart3 size={32} />,
    color: "bg-purple-500"
  },
  {
    title: "Development",
    desc: "Build fast, secure and scalable web applications with modern tech.",
    icon: <Rocket size={32} />,
    color: "bg-green-500"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold uppercase tracking-[0.3em] text-sm block mb-4"
          >
            What We Do
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6">
            We provide the best digital services for you.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-[#FAFAFA] hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 group border border-transparent hover:border-gray-100"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-secondary leading-relaxed mb-8">
                {service.desc}
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors">
                Learn More <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7"/>
  </svg>
);
