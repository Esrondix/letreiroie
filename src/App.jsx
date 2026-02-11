import React from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Services } from './sections/Services';
import { Portfolio } from './sections/Portfolio';
import { About } from './sections/About';
import { Contact } from './sections/Contact';

const App = () => {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      
      {/* Footer minimalista em breve */}
      <footer className="py-20 border-t border-white/5 bg-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">
            © 2026 Ideias Efetivas. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
