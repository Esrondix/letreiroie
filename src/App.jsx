import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { AboutStats } from "./sections/AboutStats";
import { Services } from "./sections/Services";
import { Benefits } from "./sections/Benefits";
import { Portfolio } from "./sections/Portfolio";
import { ExtraSections } from "./sections/ExtraSections";

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <Hero />
        <AboutStats />
        <Services />
        <Benefits />
        <Portfolio />
        <ExtraSections />
      </main>
    </div>
  );
}

export default App;
