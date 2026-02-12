import { motion } from "framer-motion";
import { Star, MapPin, Instagram, ExternalLink } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Ricardo Santos",
    location: "Porto",
    text: "Encomendei o Kit DIY Elite 3D para a minha clínica. A montagem foi super simples com o gabarito. Recomendo vivamente!",
    rating: 5,
    project: "Clínica Dentária - Kit DIY"
  },
  {
    id: 2,
    author: "Marta Oliveira",
    location: "Lisboa",
    text: "Trabalho de excelência na fachada do nosso hotel. A equipa de montagem foi rápida e muito profissional.",
    rating: 5,
    project: "Hotel Riverside - Instalação Própria"
  },
  {
    id: 3,
    author: "João Pereira",
    location: "Braga",
    text: "O reclamo em inox ficou perfeito. O brilho e o acabamento são de outro nível. Preço justo para a qualidade.",
    rating: 5,
    project: "Restaurante Gourmet - Letras Inox"
  }
];

const gallery = [
  { id: 1, title: "Clínica no Porto", tag: "Kit DIY", size: "small" },
  { id: 2, title: "Hotel em Lisboa", tag: "Instalação Própria", size: "large" },
  { id: 3, title: "Loja em Coimbra", tag: "Fachada PRO", size: "small" },
  { id: 4, title: "Escritório Faro", tag: "Interior & Office", size: "small" },
];

export const SocialProof = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl md:text-5xl font-medium uppercase tracking-[-2px] mb-8 text-text leading-[1]">
              Quem Confia na <br />
              <span className="text-accent">Nossa Fábrica</span>
            </h2>
            <p className="text-muted text-xl leading-relaxed font-normal">
              De Norte a Sul de Portugal, ajudamos empresas a destacar a sua presença física com qualidade industrial.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] px-8 py-6 rounded-3xl backdrop-blur-xl shadow-xl"
          >
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <div className="text-lg font-medium tracking-tight text-text">
              4.9/5 <span className="text-muted ml-3 font-normal text-sm uppercase tracking-widest">Google Reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[rgba(241,244,250,0.15)] border border-[rgba(241,244,250,0.2)] p-10 rounded-[3rem] relative group hover:border-accent/30 hover:bg-[rgba(241,244,250,0.18)] transition-all duration-500 backdrop-blur-sm shadow-lg"
            >
              <div className="flex text-accent mb-8">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-text/80 italic mb-10 text-lg leading-relaxed font-normal">
                "{review.text}"
              </p>
              <div className="flex justify-between items-end border-t border-[rgba(241,244,250,0.05)] pt-8">
                <div>
                  <h4 className="font-medium text-text text-lg">{review.author}</h4>
                  <div className="flex items-center gap-2 text-muted text-[10px] uppercase tracking-[0.2em] font-bold mt-2">
                    <MapPin size={12} className="text-accent" />
                    {review.location}
                  </div>
                </div>
                <div className="text-[9px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                  {review.project}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gallery.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[2.5rem] overflow-hidden group bg-[rgba(241,244,250,0.15)] border border-[rgba(241,244,250,0.2)] aspect-square shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${
                item.size === 'large' ? 'md:col-span-2 md:aspect-auto' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <div className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-3">{item.tag}</div>
                <h4 className="text-2xl font-medium text-text mb-6 uppercase tracking-tight">{item.title}</h4>
                <div className="flex items-center gap-3 text-muted text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <Instagram size={16} className="text-accent" />
                  Ver no Instagram
                  <ExternalLink size={14} />
                </div>
              </div>

              {/* Decorative graphic for placeholder */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
                <div className="w-full h-full bg-[radial-gradient(#F1F4FA_1px,transparent_1px)] [background-size:30px_30px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
