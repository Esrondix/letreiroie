import React from 'react';
import { motion } from 'framer-motion';

export const Logo = ({ src, className = "" }) => (
  <motion.div 
    className={`flex items-center gap-2 cursor-pointer group ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    {src ? (
      <img 
        src={src} 
        alt="Ideias Efetivas" 
        className="h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" 
      />
    ) : (
      <div className="flex flex-col leading-none font-display font-black uppercase tracking-tighter">
        <span className="text-xl text-foreground">Ideias</span>
        <span className="text-xl text-accent">Efetivas</span>
      </div>
    )}
  </motion.div>
);
