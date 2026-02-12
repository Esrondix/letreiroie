import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { GallerySection } from "./components/GallerySection";
import { GoldenRule, ConnectionSection } from "./sections/TechnicalSections";
import { DIYProof } from "./sections/DIYProof";
import { PricingPlans } from "./sections/PricingPlans";
import { ServiceAndFAQ } from "./sections/ServiceAndFAQ";
import { SocialProof } from "./sections/SocialProof";
import { Configurator } from "./sections/Configurator";
import { Footer } from "./components/Footer";
import { BackgroundGlows } from "./components/BackgroundGlows";

function App() {
  return (
    <div className="relative min-h-screen bg-background text-text selection:bg-accent selection:text-background">
      <BackgroundGlows />
      <Header />
      <main>
        <Hero />
        <GallerySection />
        <GoldenRule />
        <ConnectionSection />
        <DIYProof />
        <PricingPlans />
        <ServiceAndFAQ />
        <SocialProof />
        <Configurator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
