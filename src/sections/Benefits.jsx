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
  { title: 'Expertise', desc: 'When working is completely yourself, there will always be lots of small things back your attention.', icon: <ShieldCheck /> },
  { title: 'Time Savings', desc: 'We build with a business but when you. It was naturally live because all our efforts are standard to step fast.', icon: <Clock /> },
  { title: 'Cost Saving', desc: 'Into help your starting a small business in fact your start by will be started.', icon: <DollarSign /> },
  { title: 'Scalability', desc: 'Greater benefit of working with us is that we offer validation scalability for admin.', icon: <BarChart /> },
  { title: 'Branding & Identity', desc: 'Our brand identity should represent your visual and worth effortlessly presence on the mobile platform.', icon: <Hexagon /> },
  { title: 'Customer Service', desc: 'If you want live, respect for customer support in choice is a remarkable manner.', icon: <Headphones /> },
  { title: 'Access To Resources', desc: 'Offer business insight to meet the fundamental tactical lack of resources.', icon: <Database /> },
  { title: 'Ongoing Support', desc: 'Once you sign up with us, we continue to monitor your company throughout the year.', icon: <RefreshCw /> },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-32 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Benefits of Hiring a <br /> Digital Agency</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-[2rem] bg-secondary/50 border border-white/5 hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
