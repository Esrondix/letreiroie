import React from 'react';
import { motion } from 'framer-motion';

export const AboutStats = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">We Make Things <br /> Look Good</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Card 1 */}
          <div className="grid grid-cols-2 gap-4 bg-secondary/50 rounded-[2.5rem] p-8 border border-white/5 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">About Strip Agency</h3>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                Utilize our specialized subscription services specifically for your startups teams who are ready for a new level of success in any aspects.
              </p>
              <button className="bg-accent text-background px-6 py-2 rounded-full text-xs font-bold">Learn More</button>
            </div>
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/5 overflow-hidden">
               <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:10px_10px] opacity-10" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="grid grid-cols-2 gap-4 bg-secondary/50 rounded-[2.5rem] p-8 border border-white/5 items-center">
             <div>
              <h3 className="text-2xl font-bold mb-4">Is Your Marketing Unique?</h3>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                Put your trust in Strip Agency and watch your business thrive and prosper.
              </p>
              <button className="bg-accent text-background px-6 py-2 rounded-full text-xs font-bold">Join Now</button>
            </div>
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/5 overflow-hidden">
               <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:10px_10px] opacity-10" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-secondary/50 rounded-[2.5rem] p-12 border border-white/5">
            <h3 className="text-3xl font-bold mb-4">Marketing Matches Your Success Story</h3>
            <p className="text-white/40 mb-12 max-w-md">
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.
            </p>
            <button className="bg-accent text-background px-8 py-3 rounded-full text-sm font-bold mb-12">Learn More</button>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <div className="text-4xl font-bold mb-2">900+</div>
                <div className="text-white/40 text-sm uppercase tracking-widest">Successful Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">600+</div>
                <div className="text-white/40 text-sm uppercase tracking-widest">Team Happy Client</div>
              </div>
              <div className="col-span-2">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-white/40 text-sm uppercase tracking-widest">Members of Work</div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-[2.5rem] border border-white/5 overflow-hidden relative min-h-[400px]">
             <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:25px_25px] opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
