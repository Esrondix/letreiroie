import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import myLogo from '../assets/logo_ideias_efetivas.png';

const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contacto', href: '#contacto' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <Logo src={myLogo} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/60 hover:text-accent transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href="#contacto" 
              className="px-8 py-3 border border-accent text-accent text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent hover:text-background transition-all duration-500"
            >
              Orçamento
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-8 right-6 text-foreground p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-display font-black uppercase tracking-tighter hover:text-accent transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
