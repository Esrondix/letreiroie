import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Package } from 'lucide-react';

// Importe o seu logotipo aqui
// import logo from '../assets/logo.png';

export const Header = ({ logoVariant = "light" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = logoVariant === "light" ? "/logo-light.png" : "/logo-black.png";

  return (
    <header className="fixed top-12 left-0 w-full z-50 transition-all duration-500">
      <div className="container mx-auto px-6">
        <div 
          className={`transition-all duration-500 px-10 flex justify-between items-center backdrop-blur-xl border ${
            isScrolled 
              ? 'bg-[rgba(7,7,11,0.8)] border-[rgba(0,152,185,0.3)] py-3 rounded-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
              : 'bg-[rgba(7,7,11,0.5)] border-[rgba(241,244,250,0.2)] py-4 rounded-[100px]'
          }`}
        >
          {/* Logo - Image Style */}
          <a href="#" className="flex items-center gap-4 group transition-transform hover:scale-[1.02] active:scale-95">
            <div className={`relative transition-all duration-500 ${isScrolled ? 'h-[35px] md:h-[45px]' : 'h-[40px] md:h-[50px]'}`}>
              <img 
                src={logoSrc} 
                alt="Logo A Fábrica" 
                className="h-full w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col">
                <span className="text-2xl md:text-3xl font-medium leading-none tracking-[-1.5px] text-text">A FÁBRICA</span>
                <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase">DE RECLAMOS</span>
              </div>
            </div>
          </a>

          {/* Navigation - Figma Style */}
          <nav className="hidden lg:flex items-center gap-12">
            <a href="#" className="text-xl font-normal tracking-[-0.5px] text-text hover:text-accent transition-colors">Home</a>
            <a href="#precos" className="text-xl font-normal tracking-[-0.5px] text-text hover:text-accent transition-colors">Serviços</a>
            <a href="#beneficios" className="text-xl font-normal tracking-[-0.5px] text-text hover:text-accent transition-colors">Benefícios</a>
            <a href="#sobre" className="text-xl font-normal tracking-[-0.5px] text-text hover:text-accent transition-colors">Sobre</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/351964180025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)] uppercase tracking-widest"
            >
              <MessageCircle size={16} fill="currentColor" />
              WhatsApp
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/10 p-6 flex flex-col gap-6 lg:hidden"
          >
            <a href="#" className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
              <Package size={18} />
              Acompanhar Encomenda
            </a>
            <a 
              href="https://wa.me/351964180025" 
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold"
            >
              <MessageCircle size={20} fill="currentColor" />
              Falar com a Fábrica
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
