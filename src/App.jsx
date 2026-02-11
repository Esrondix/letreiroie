import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      
      <footer className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-black tracking-tighter mb-8">
            DIGITAL<span className="text-accent">AGENCY</span>
          </div>
          <p className="text-gray-400 max-w-md mx-auto mb-12">
            Helping you build your digital presence with passion and excellence since 2024.
          </p>
          <div className="text-sm text-gray-500">
            © 2026 Digital Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
