import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const faqs = [
  { q: "How much DIY assistance do I need?", a: "We provide various levels of support depending on your needs." },
  { q: "What do I benefit intense plan in chosen designers?", a: "Our plans are tailored to provide maximum ROI and design excellence." },
  { q: "That is most attractive about myself?", a: "Your unique value proposition and brand voice." },
  { q: "How high complicated can my idea if you choose?", a: "We handle everything from simple landing pages to complex enterprise systems." },
  { q: "Do have any resolution?", a: "Yes, we focus on result-driven solutions." },
  { q: "How do I request designer?", a: "You can start by contacting us via the 'Hire Me' button." },
];

export const ExtraSections = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* Testimonials */}
      <section className="py-32 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
          </div>

          <div className="max-w-5xl mx-auto bg-secondary/50 rounded-[3rem] p-8 md:p-16 border border-white/5 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square rounded-[2rem] bg-white/5 border border-white/5 overflow-hidden">
                <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:15px_15px] opacity-10" />
              </div>
              <div>
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-white/80">
                  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and ..."
                </p>
                <div>
                  <div className="font-bold text-lg">Larae Atkins</div>
                  <div className="text-white/40 text-sm">Customer Manager</div>
                </div>
              </div>
            </div>
            
            {/* Nav Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 hidden lg:block">
              <button className="w-12 h-12 rounded-full bg-secondary border border-white/10 flex items-center justify-center hover:border-accent transition-colors">
                <ChevronLeft />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 hidden lg:block">
              <button className="w-12 h-12 rounded-full bg-secondary border border-white/10 flex items-center justify-center hover:border-accent transition-colors">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">Frequently <br /> Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-accent' : 'text-white/70 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-accent' : 'text-white/20'}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-white/40 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="bg-secondary/50 rounded-[3rem] p-12 md:p-24 border border-white/5 relative overflow-hidden">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Ready to Start a <br /> Project?</h2>
                  <p className="text-white/40 mb-10 max-w-sm">Help us understands by and level requesting designs immediately.</p>
                  <button className="bg-accent text-background px-10 py-4 rounded-full font-bold hover:brightness-110 transition-all">
                    Hire Now
                  </button>
                </div>
                <div className="aspect-video rounded-[2rem] bg-white/5 border border-white/5 overflow-hidden">
                  <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-8">
                <div className="w-6 h-6 bg-accent rounded-sm rotate-45" />
                <span className="text-xl font-bold">Strip Agency</span>
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-2 gap-8">
              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/20">Menu</h4>
                <ul className="space-y-4 text-white/60 text-sm font-medium">
                  <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Benefits</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Service</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Work</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">FAQs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/20">Strip Studio</h4>
                <ul className="space-y-4 text-white/60 text-sm font-medium">
                  <li><a href="#" className="hover:text-accent transition-colors">Policy Privacy</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Term & Conditions</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Information Help</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/20">Contact</h4>
                <ul className="space-y-4 text-white/60 text-sm font-medium">
                  <li>info@stripagency.uk</li>
                  <li>+11 756 000 00</li>
                  <li>www.stripagency.com</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center text-white/10 text-[10px] font-medium tracking-widest uppercase">
            © 2026 Strip Agency. All Rights Reserved. Build with Passion.
          </div>
        </div>
      </footer>
    </>
  );
};
