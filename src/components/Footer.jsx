import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export const Footer = ({ logoVariant = "light" }) => {
  const logoSrc = logoVariant === "light" ? "/logo-light.png" : "/logo-black.png";

  return (
    <footer className="bg-background pt-32 pb-12 border-t border-[rgba(241,244,250,0.2)]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="h-12 mb-8">
              <img 
                src={logoSrc} 
                alt="Logo A Fábrica" 
                className="h-full w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <h2 className="hidden text-3xl font-medium uppercase tracking-tighter leading-none text-text">
                A FÁBRICA <br />
                <span className="text-accent">DE RECLAMOS</span>
              </h2>
            </div>
            <p className="text-muted text-sm max-w-sm mb-12 leading-relaxed font-medium">
              Especialistas em comunicação visual industrial. Produção nacional com tecnologia CNC para acabamentos de alta precisão em Portugal Continental e Ilhas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-accent hover:text-background transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-accent hover:text-background transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-accent hover:text-background transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-10">Contacto Direto</h4>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-[rgba(241,244,250,0.03)] border border-[rgba(241,244,250,0.05)] flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-background transition-all">
                  <Phone size={18} />
                </div>
                <div className="text-sm font-medium text-text">
                  <p className="mb-1">+351 964 180 025</p>
                  <p className="text-muted text-[10px] uppercase tracking-[0.15em] font-normal">Rede móvel nacional</p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-[rgba(241,244,250,0.03)] border border-[rgba(241,244,250,0.05)] flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-background transition-all">
                  <Mail size={18} />
                </div>
                <div className="text-sm font-medium text-text">
                  <p className="mb-1">ideiasefetivas@gmail.com</p>
                  <p className="text-muted text-[10px] uppercase tracking-[0.15em] font-normal">Resposta em 24h</p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-[rgba(241,244,250,0.03)] border border-[rgba(241,244,250,0.05)] flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-background transition-all">
                  <MapPin size={18} />
                </div>
                <div className="text-sm font-medium text-text">
                  <p className="mb-1">Almargem do Bispo</p>
                  <p className="text-muted text-[10px] uppercase tracking-[0.15em] font-normal">Portugal 🇵🇹</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-10">Dados Fiscais</h4>
            <ul className="space-y-6 text-sm font-medium text-text">
              <li>
                <span className="text-muted block text-[10px] uppercase tracking-[0.15em] mb-2 font-normal">Razão Social</span>
                Ideias Efetivas, Lda.
              </li>
              <li>
                <span className="text-muted block text-[10px] uppercase tracking-[0.15em] mb-2 font-normal">NIF</span>
                513 184 000
              </li>
              <li>
                <span className="text-muted block text-[10px] uppercase tracking-[0.15em] mb-4 font-normal">Pagamentos</span>
                <div className="flex flex-wrap gap-2 mt-3 grayscale opacity-30 group-hover:opacity-100 transition-opacity">
                  <span className="bg-text px-3 py-1.5 rounded-lg text-[9px] text-background font-bold uppercase tracking-wider">MB WAY</span>
                  <span className="bg-text px-3 py-1.5 rounded-lg text-[9px] text-background font-bold uppercase tracking-wider">VISA</span>
                  <span className="bg-text px-3 py-1.5 rounded-lg text-[9px] text-background font-bold uppercase tracking-wider">TRANSFERÊNCIA</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Figma Style */}
        <div className="pt-12 border-t border-[rgba(241,244,250,0.2)] flex flex-col md:flex-row justify-between items-center gap-6 py-[50px]">
          <p className="text-base font-medium text-text font-poppins">
            © 2026 IDEIAS EFETIVAS. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] hover:text-text transition-colors">Termos e Condições</a>
            <a href="#" className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] hover:text-text transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
