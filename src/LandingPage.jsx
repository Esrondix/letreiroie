import React, { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import {  
  Phone,  
  Mail,  
  MapPin,  
  CheckCircle2,  
  ArrowRight,  
  Menu,  
  X,  
  Zap,
  Star,
  Layers,
  Shield,
  ExternalLink,
  Monitor,
  Maximize2,
  Box,
  Cpu,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  ChevronDown
} from 'lucide-react'; 

// Importação do logo oficial
import myLogo from './assets/logo_ideias_efetivas.png';

const Logo = ({ className = "", src = null }) => (
  <motion.div 
    className={`flex items-center gap-1 cursor-pointer group ${className}`}
    whileHover={{ scale: 1.02 }}
  >
    {src ? (
      <img 
        src={src} 
        alt="Ideias Efetivas - Fabrico de Reclamos Luminosos" 
        className="h-10 w-auto object-contain brightness-0 invert transition-all duration-300 group-hover:opacity-100 opacity-80" 
      />
    ) : (
      <div className="flex flex-col text-foreground leading-none">
        <span className="text-2xl font-display font-black tracking-tighter uppercase">
          Ideias
        </span>
        <span className="text-2xl font-display font-black tracking-tighter uppercase text-accent">
          Efetivas
        </span>
      </div>
    )}
  </motion.div>
);

const LandingPage = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [activeCategory, setActiveCategory] = useState(0);

  const [formData, setFormData] = useState({
    entity: '',
    email: '',
    service: 'LETRAS_INOX',
    location: '',
    details: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('success');
    setFormData({ entity: '', email: '', service: 'LETRAS_INOX', location: '', details: '' });
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const fadeInUp = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } 
  }; 

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const parallaxHero = {
    initial: { y: 0 },
    animate: { y: -20, transition: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } }
  };

  const scaleOnHover = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const servicesCategories = [
    {
      id: "letras",
      title: "Letras Monobloco",
      subtitle: "Precisão & Volume",
      items: [
        {
          name: "Aço Inox (Premium)",
          desc: "Durabilidade extrema. Disponível em Inox Escovado (mate, disfarça riscos) ou Polido (espelhado). Opções opacas ou com iluminação retroprojetada (halo).",
          features: ["Retroiluminação Halo", "Inox Escovado/Polido", "Acabamento de Elite"],
          icon: <Shield className="text-accent" size={24} />
        },
        {
          name: "Alumínio Lacado",
          desc: "Leves e versáteis. Pintura em qualquer cor RAL. Alta resistência à corrosão, ideal para zonas costeiras. Opção de frente luminosa em acrílico.",
          features: ["Frente Luminosa", "Cores RAL Custom", "Resistência Marítima"],
          icon: <Box className="text-accent" size={24} />
        },
        {
          name: "Acrílico (Plexiglass)",
          desc: "Corte laser. Maciço (10-30mm) para visual plano ou Oco (Caixa) para alojar LEDs, permitindo iluminação frontal total ou lateral.",
          features: ["Iluminação Frontal/Lateral", "Corte Laser Alta Definição", "Maciço ou Caixa"],
          icon: <Zap className="text-accent" size={24} />
        },
        {
          name: "PVC Expandido",
          desc: "A opção mais económica para volume. Ideal para interiores ou fachadas temporárias. Podem ser pintadas, sem brilho natural e sem luz interna.",
          features: ["Baixo Custo", "Ideal Interiores/Stands", "Pintura Personalizada"],
          icon: <Layers className="text-accent" size={24} />
        }
      ]
    },
    {
      id: "reclamos",
      title: "Reclamos Luminosos",
      subtitle: "Visibilidade Máxima",
      items: [
        {
          name: "Caixas de Luz Acrílico",
          desc: "O standard do mercado. Perfil de alumínio com frente em acrílico decorada com vinil translúcido. Iluminação LED uniforme.",
          features: ["LED Alta Eficiência", "Vinil Translúcido", "Perfil Alumínio"],
          icon: <Monitor className="text-accent" size={24} />
        },
        {
          name: "Tela Tensionada",
          desc: "Soft Signage para grandes formatos sem emendas. Tela impressa esticada em perfil de alumínio. Muito usado em centros comerciais.",
          features: ["Grandes Formatos", "Sem Emendas", "Impressão UV"],
          icon: <Maximize2 className="text-accent" size={24} />
        },
        {
          name: "Reclamos Vazados (Fresa)",
          desc: "Painel de Dibond opaco com letras recortadas (vazadas). O acrílico e a luz ficam por trás, fazendo com que apenas as letras brilhem.",
          features: ["Painel Dibond", "Efeito Vazado", "Design Minimalista"],
          icon: <Cpu className="text-accent" size={24} />
        },
        {
          name: "Bandeira (Dupla Face)",
          desc: "Instalado perpendicularmente à parede. Essencial para ruas estreitas (ex: Baixa de Lisboa/Porto) para visibilidade de quem caminha.",
          features: ["Visão Dupla Face", "Efeito Perpendicular", "Ideal Centros Históricos"],
          icon: <ArrowRight className="text-accent" size={24} />
        }
      ]
    },
    {
      id: "neon",
      title: "Néon & Inovação",
      subtitle: "Estética & Futuro",
      items: [
        {
          name: "LED Néon Flex",
          desc: "Fitas de silicone flexível com LEDs que imitam o néon. Inquebrável, baixa voltagem (12V/24V), económico e seguro ao toque. A tendência atual.",
          features: ["Inquebrável", "Baixa Voltagem", "Interiores Modernos"],
          icon: <Zap className="text-accent" size={24} />
        },
        {
          name: "Néon Tradicional",
          desc: "Visual vintage e artístico. Tubos de vidro soprados artesanalmente com gás. Alta intensidade para projetos exclusivos e artísticos.",
          features: ["Vidro Soprado", "Visual Vintage", "Artesanal"],
          icon: <Star className="text-accent" size={24} />
        }
      ]
    },
    {
      id: "paineis",
      title: "Painéis & Placas",
      subtitle: "Sinalética Estrutural",
      items: [
        {
          name: "Placas de Dibond",
          desc: "Painéis 'sandwich' de alumínio e polietileno. Rígidos, perfeitamente planos e muito duráveis. O material rei da sinalética.",
          features: ["Anti-Empenamento", "Máxima Durabilidade", "Exterior/Interior"],
          icon: <Layers className="text-accent" size={24} />
        },
        {
          name: "Acrílico c/ Afastadores",
          desc: "Placas fixadas com parafusos decorativos de inox. Muito usadas em escritórios, consultórios e diretórios de porta.",
          features: ["Afastadores Inox", "Visual Corporativo", "Elegante"],
          icon: <ExternalLink className="text-accent" size={24} />
        },
        {
          name: "Vinil & Impressão",
          desc: "Vinil de recorte de alta performance ou impressão digital. Aplicado diretamente em montras, paredes ou viaturas.",
          features: ["Recorte ou Digital", "Aplicação Direta", "Montras & Viaturas"],
          icon: <Layers className="text-accent" size={24} />
        }
      ]
    }
  ];

  const portfolioProjects = [
    {
      title: "Sede Corporativa Global",
      category: "Letras Inox",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      client: "Enterprise Corp"
    },
    {
      title: "Centro Comercial Premium",
      category: "Reclamos Luminosos",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      client: "Fashion Hub"
    },
    {
      title: "Restaurante Concept",
      category: "LED Néon Flex",
      image: "https://images.unsplash.com/photo-1514315384763-ba401779410f?auto=format&fit=crop&w=1200&q=80",
      client: "Neon Bistro"
    },
    {
      title: "Escritórios Advocacia",
      category: "Acrílico & Inox",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      client: "Legal Partners"
    },
    {
      title: "Flagship Store",
      category: "Fachada Alumínio",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&w=1200&q=80",
      client: "Lux Brand"
    },
    {
      title: "Hotel Boutique",
      category: "Sinalética Interior",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      client: "Palace Stay"
    }
  ];

  return ( 
    <div className="font-sans text-foreground bg-background selection:bg-accent/30 selection:text-accent"> 
       
      {/* --- HEADER --- */} 
      <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-white/5 py-6' : 'bg-transparent py-10'}`}> 
        <nav className="container mx-auto px-6 flex justify-between items-center"> 
          <a href="/" className="z-50 flex items-center gap-4">
            <Logo src={myLogo} /> 
          </a>
           
          <div className="hidden md:flex gap-12 items-center text-[10px] font-black uppercase tracking-[0.4em]"> 
            {[
              { label: 'Serviços', id: 'servicos' },
              { label: 'Portfólio', id: 'portfolio' },
              { label: 'Sobre', id: 'empresa' },
              { label: 'Contacto', id: 'contactos' }
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-accent transition-all duration-300 relative group overflow-hidden">
                <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">{item.label}</span>
                <span className="absolute top-0 left-0 inline-block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-accent">{item.label}</span>
              </a>
            ))}
          </div> 

          <div className="hidden md:flex items-center gap-8">
            <a href="#contactos" className="border border-accent px-10 py-4 text-accent font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-500 hover:bg-accent hover:text-background">
              Orçamento
            </a>
          </div>

          <button className="md:hidden z-50 p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}> 
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />} 
          </button> 
        </nav> 
      </header> 

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background md:hidden flex flex-col items-center justify-center gap-12"
          >
            <div className="flex flex-col items-center gap-8 text-3xl font-black uppercase tracking-tighter">
              {['Serviços', 'Portfólio', 'Sobre', 'Contactos'].map((item, idx) => (
                <motion.a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-accent transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* --- HERO SECTION --- */} 
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background"> 
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="w-full"
            >
              <motion.div variants={fadeInUp} className="mb-12 flex items-center gap-6">
                <div className="w-16 h-[2px] bg-accent" />
                <span className="text-accent font-black text-[12px] uppercase tracking-[0.6em]">
                  Ideias Efetivas // Creative Signage Lab
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-[14vw] md:text-[11vw] font-display font-black leading-[0.8] tracking-tighter uppercase mb-16 max-w-[12ch]">
                CRIAMOS <br />
                <span className="text-accent italic">
                  IMPACTO
                </span> <br />
                VISUAL.
              </motion.h1>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-16">
                <motion.p variants={fadeInUp} className="text-muted-foreground text-lg md:text-2xl font-light leading-relaxed max-w-xl">
                  Especialistas no fabrico de sinalética técnica de alta precisão. Redefinimos a presença física das marcas com soluções inovadoras e acabamentos de elite.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <a href="#portfolio" className="group relative w-24 h-24 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-white/10 hover:border-accent transition-all duration-700 overflow-hidden">
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                    <div className="relative z-10 flex flex-col items-center">
                      <ArrowRight size={32} className="text-foreground group-hover:text-background group-hover:rotate-45 transition-all duration-700" />
                      <span className="text-[8px] font-black uppercase tracking-widest mt-2 group-hover:text-background">Projetos</span>
                    </div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.2, 0.15]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <video autoPlay muted loop playsInline crossOrigin="anonymous" className="w-full h-full object-cover grayscale brightness-50 contrast-125">
                <source src="https://static.pexels.com/lib/videos/external/pexels-laser-cutting-3129957.mp4" type="video/mp4" />
              </video>
            </motion.div>
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-6 md:left-12 flex items-center gap-6"
          >
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">Sintra, Portugal</span>
            </div>
          </motion.div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="py-32 border-b border-white/5 bg-background relative overflow-hidden">
          <div className="container mx-auto px-6">
            <h2 className="sr-only">Nossas Estatísticas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-px md:bg-white/5">
              {[
                { label: 'Anos de Know-how', value: '15' },
                { label: 'Projetos de Elite', value: '2.5k' },
                { label: 'Marcas Globais', value: '450' },
                { label: 'Capacidade m2', value: '1.2k' }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background p-12 flex flex-col items-center md:items-start group hover:bg-foreground/[0.02] transition-colors duration-500"
                >
                  <div className="text-6xl md:text-8xl font-display font-black text-foreground mb-4 tracking-tighter group-hover:text-accent transition-colors duration-500">
                    {stat.value}
                    <span className="text-accent text-2xl ml-1">+</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="servicos" className="py-40 bg-background relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col mb-32">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="w-12 h-[2px] bg-accent" />
                <span className="text-accent font-black text-[11px] uppercase tracking-[0.6em]">Expertise</span>
              </motion.div>
              
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                <h2 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter leading-[0.85]">
                  SOLUÇÕES <br />
                  <span className="text-accent italic">TÉCNICAS.</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {servicesCategories.map((cat, idx) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(idx)}
                      className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 border ${activeCategory === idx ? 'bg-accent border-accent text-background' : 'bg-transparent border-white/10 text-muted-foreground hover:border-accent'}`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5"
              >
                {servicesCategories[activeCategory].items.map((item, i) => (
                  <div key={i} className="group bg-background p-16 md:p-24 hover:bg-foreground/[0.02] transition-all duration-700 relative overflow-hidden">
                    <div className="absolute top-12 right-12 text-accent/10 text-8xl font-black italic group-hover:text-accent/20 transition-colors duration-700">
                      0{i + 1}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="mb-12 inline-block p-6 rounded-full border border-white/5 group-hover:border-accent/30 transition-colors duration-700">
                        {React.cloneElement(item.icon, { size: 32, className: "group-hover:scale-110 transition-transform duration-700" })}
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter mb-8 group-hover:text-accent transition-colors duration-700">
                        {item.name}
                      </h3>
                      
                      <p className="text-muted-foreground text-lg font-medium leading-relaxed mb-12 max-w-md">
                        {item.desc}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-foreground/60">
                            <div className="w-1.5 h-1.5 bg-accent" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* --- PORTFOLIO SECTION --- */}
        <section id="portfolio" className="py-40 bg-foreground text-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <span className="text-accent font-bold text-[11px] uppercase tracking-[0.4em] mb-4 block">Portfólio</span>
                <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter">Projetos de <br /> <span className="text-accent italic">Vanguarda.</span></h2>
              </div>
              <a href="#" className="inline-flex items-center gap-4 text-background/40 hover:text-accent transition-colors text-[10px] font-black uppercase tracking-widest">
                Arquivo Completo <ExternalLink size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-background border border-background">
              {portfolioProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-[4/5] overflow-hidden bg-background"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-700" />
                  
                  <div className="absolute inset-0 p-12 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <span className="text-accent font-black text-[10px] uppercase tracking-[0.4em] mb-4">{project.category}</span>
                    <h4 className="text-foreground text-3xl font-display font-black uppercase tracking-tighter mb-4">{project.title}</h4>
                    <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-black">Cliente: {project.client}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="empresa" className="py-40 bg-background relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="w-12 h-[2px] bg-accent mb-8" />
                <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-12">
                  PRECISÃO <br />
                  <span className="text-accent italic">ABSOLUTA.</span>
                </h2>
                <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
                  <p>
                    Com mais de 15 anos de experiência no mercado de sinalética técnica, a Ideias Efetivas combina artesanato tradicional com tecnologia de ponta.
                  </p>
                  <p>
                    O nosso laboratório criativo em Sintra está equipado para responder aos desafios mais complexos, desde letras monobloco em aço inox polido a sistemas de iluminação LED de última geração.
                  </p>
                </div>
                
                <div className="mt-16 grid grid-cols-2 gap-12">
                  <div>
                    <div className="text-4xl font-display font-black text-foreground mb-2">Sintra</div>
                    <div className="text-[10px] uppercase tracking-widest text-accent font-black">Sede & Produção</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-black text-foreground mb-2">Global</div>
                    <div className="text-[10px] uppercase tracking-widest text-accent font-black">Instalação & Logística</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-square"
              >
                <div className="absolute inset-0 border border-accent/20 translate-x-8 translate-y-8" />
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Workshop" 
                  className="w-full h-full object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contactos" className="py-40 bg-background relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-16">
                <div className="max-w-xl">
                  <span className="text-accent font-bold text-[11px] uppercase tracking-[0.4em] mb-4 block">Contacto</span>
                  <h2 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter leading-none mb-12">
                    VAMOS <br />
                    <span className="text-accent italic">CRIAR.</span>
                  </h2>
                  <p className="text-muted-foreground text-xl font-light leading-relaxed">
                    Entre em contacto para uma consultoria técnica especializada. Transformamos a sua visão em sinalética de alta precisão.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-16">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Contacto</span>
                    <p className="text-2xl font-display font-bold">+351 912 345 678</p>
                    <p className="text-muted-foreground text-sm">geral@ideiasefetivas.pt</p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Localização</span>
                    <p className="text-2xl font-display font-bold">Sintra, Portugal</p>
                    <p className="text-muted-foreground text-sm">Zona Industrial, Armazém 4</p>
                  </div>
                </div>
              </div>

              <div className="bg-foreground/[0.02] border border-white/5 p-12 md:p-20">
                <form onSubmit={handleFormSubmit} className="space-y-12">
                  <div className="space-y-8">
                    <div className="space-y-2 relative group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-focus-within:text-accent transition-colors">Nome / Empresa</label>
                      <input 
                        type="text" 
                        name="entity"
                        value={formData.entity}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-white/10 py-4 text-foreground focus:border-accent outline-none transition-all font-light text-lg"
                        placeholder="Insira o seu nome ou empresa"
                      />
                    </div>
                    <div className="space-y-2 relative group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-focus-within:text-accent transition-colors">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-white/10 py-4 text-foreground focus:border-accent outline-none transition-all font-light text-lg"
                        placeholder="email@exemplo.com"
                      />
                    </div>
                    <div className="space-y-2 relative group">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-focus-within:text-accent transition-colors">Mensagem</label>
                      <textarea 
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        rows="3" 
                        className="w-full bg-transparent border-b border-white/10 py-4 text-foreground focus:border-accent outline-none transition-all font-light text-lg resize-none"
                        placeholder="Descreva o seu projeto..."
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="group relative w-full py-8 bg-accent text-background font-black text-[12px] uppercase tracking-[0.4em] overflow-hidden transition-all duration-500 hover:bg-foreground hover:text-background"
                  >
                    <span className="relative z-10">{formStatus === 'submitting' ? 'Enviando...' : formStatus === 'success' ? 'Enviado com Sucesso' : 'Solicitar Orçamento'}</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-background py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20">
            <div className="max-w-sm">
              <Logo src={myLogo} className="mb-8" />
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8">
                Líderes no fabrico de sinalética técnica e luminosa. Qualidade superior, precisão absoluta e design de vanguarda.
              </p>
              <div className="flex gap-6">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-accent hover:text-accent transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-32">
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Menu</span>
                <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                  <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
                  <a href="#portfolio" className="hover:text-accent transition-colors">Portfólio</a>
                  <a href="#empresa" className="hover:text-accent transition-colors">Empresa</a>
                  <a href="#contactos" className="hover:text-accent transition-colors">Contactos</a>
                </div>
              </div>
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Serviços</span>
                <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                  <span className="hover:text-accent cursor-default">Letras Monobloco</span>
                  <span className="hover:text-accent cursor-default">Reclamos Luminosos</span>
                  <span className="hover:text-accent cursor-default">Néon LED Flex</span>
                  <span className="hover:text-accent cursor-default">Sinalética Técnica</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">
            <div>© 2026 Ideias Efetivas. Fabricado em Portugal.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
              <a href="#" className="hover:text-foreground transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP BUTTON --- */}
      <motion.a
        href="https://wa.me/351912345678"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-accent text-background rounded-full shadow-2xl flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  ); 
}; 

export default LandingPage;