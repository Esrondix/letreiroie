import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Digital Marketing Agency
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight text-primary mb-8">
              Build Your <span className="text-accent">Digital</span> Presence.
            </h1>
            
            <p className="text-lg md:text-xl text-secondary leading-relaxed mb-10 max-w-xl">
              We help businesses grow by building digital products and marketing strategies that actually work. 100% focused on results.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto bg-accent text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary transition-all duration-300 shadow-xl shadow-accent/20 group">
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Play size={18} className="text-primary fill-primary group-hover:text-accent group-hover:fill-accent" />
                </div>
                <span className="font-bold text-primary">Watch Story</span>
              </button>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-10 opacity-50 grayscale">
              <span className="text-2xl font-black">Google</span>
              <span className="text-2xl font-black">NETFLIX</span>
              <span className="text-2xl font-black">amazon</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-20" />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -right-8 top-1/4 z-20 bg-white p-6 rounded-3xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <ArrowRight size={24} className="-rotate-45" />
                </div>
                <div>
                  <div className="text-2xl font-black">+240%</div>
                  <div className="text-xs text-secondary font-bold uppercase tracking-widest">Growth rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
