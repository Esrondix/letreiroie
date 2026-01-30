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
        className="h-10 w-auto object-contain brightness-0 opacity-[0.79] transition-all duration-300 group-hover:opacity-100" 
      />
    ) : (
      <div className="flex items-baseline text-black opacity-[0.79] transition-all duration-300 group-hover:opacity-100">
        <span className="text-2xl font-black tracking-tighter transform scale-y-125 origin-bottom inline-block">
          IDEIAS
        </span>
        <span className="text-2xl font-black tracking-tighter transform scale-y-125 origin-bottom inline-block">
          EFETIVAS
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
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } 
  }; 

  const staggerContainer = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } } 
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
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border py-4' : 'bg-transparent py-8'}`}> 
        <nav className="container mx-auto px-6 flex justify-between items-center"> 
          <a href="/" className="z-50">
            <Logo src={myLogo} /> 
          </a>
           
          <div className="hidden md:flex gap-12 items-center text-[11px] font-bold uppercase tracking-[0.2em]"> 
            {[
              { label: 'Serviços', id: 'servicos' },
              { label: 'Portfólio', id: 'portfolio' },
              { label: 'Sobre', id: 'empresa' },
              { label: 'Contactos', id: 'contactos' }
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-accent transition-colors py-2 relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div> 

          <div className="hidden md:flex items-center gap-8">
            <a href="https://wa.me/351912345678" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#contactos" className="px-6 py-3 bg-foreground text-background font-bold text-[11px] uppercase tracking-widest hover:bg-accent hover:text-foreground transition-all duration-300">
              Solicitar Orçamento
            </a>
          </div>

          <button className="md:hidden z-50 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}> 
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />} 
          </button> 
        </nav> 
      </header> 

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-background md:hidden pt-32 px-10"
          >
            <div className="flex flex-col gap-8 text-2xl font-bold uppercase tracking-widest">
              {['Serviços', 'Portfólio', 'Sobre', 'Contactos'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* --- HERO SECTION --- */} 
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"> 
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="mb-8 inline-flex items-center gap-3">
                <div className="w-10 h-[1px] bg-accent" />
                <span className="text-accent font-bold text-[11px] uppercase tracking-[0.4em]">
                  Ideias Efetivas // 2026
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-[12vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase mb-12">
                Precisão <br />
                <span className="text-accent italic">Visual.</span>
              </motion.h1>

              <div className="grid md:grid-cols-2 gap-12 items-end">
                <motion.p variants={fadeInUp} className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                  Líderes no fabrico de sinalética de alta performance. Redefinimos a imagem corporativa através da inovação técnica e precisão artesanal.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
                  <a href="#portfolio" className="inline-flex items-center justify-center px-10 py-5 bg-accent text-background font-bold text-[11px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300">
                    Ver Projetos <ArrowRight size={16} className="ml-3" />
                  </a>
                  <a href="#servicos" className="inline-flex items-center justify-center px-10 py-5 border border-border text-foreground font-bold text-[11px] uppercase tracking-widest hover:bg-border transition-all duration-300">
                    Nossas Soluções
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Background Video/Decoration */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            <video autoPlay muted loop playsInline crossOrigin="anonymous" className="w-full h-full object-cover grayscale">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-laser-cutting-machine-in-action-close-up-4541-large.mp4" type="video/mp4" />
            </video>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-foreground/60 hover:text-accent transition-colors cursor-pointer"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-black">Scroll Down</span>
            <ChevronDown size={20} className="animate-bounce" />
          </motion.div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="py-24 border-y border-border bg-foreground/[0.02]">
          <div className="container mx-auto px-6">
            <h2 className="sr-only">Nossas Estatísticas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: 'Anos de Experiência', value: '15+' },
                { label: 'Projetos Concluídos', value: '2500+' },
                { label: 'Clientes Globais', value: '450+' },
                { label: 'M2 de Produção', value: '1200' }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-black text-accent">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="servicos" className="py-40 bg-background relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <span className="text-accent font-bold text-[11px] uppercase tracking-[0.4em] mb-4 block">Especialidades</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Soluções <br /> <span className="text-accent italic">Sob Medida.</span></h2>
              </div>
              <div className="flex flex-wrap gap-4 border-b border-border pb-2">
                {servicesCategories.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(idx)}
                    className={`pb-2 px-4 text-[11px] font-bold uppercase tracking-widest transition-all relative ${activeCategory === idx ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {cat.title}
                    {activeCategory === idx && (
                      <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border"
              >
                {servicesCategories[activeCategory].items.map((item, i) => (
                  <div key={i} className="group bg-background p-10 hover:bg-foreground/[0.02] transition-all duration-500">
                    <div className="mb-10 group-hover:scale-110 transition-transform duration-500 origin-left">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-8 min-h-[80px]">
                      {item.desc}
                    </p>
                    <ul className="space-y-3">
                      {item.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Projetos de <br /> <span className="text-accent italic">Vanguarda.</span></h2>
              </div>
              <a href="#" className="inline-flex items-center gap-4 text-background/60 hover:text-accent transition-colors text-[11px] font-bold uppercase tracking-widest">
                Ver todos os projetos <ExternalLink size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-background border border-background">
              {portfolioProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-[4/5] overflow-hidden bg-background"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-12 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-2">{project.category}</span>
                    <h4 className="text-foreground text-2xl font-black uppercase tracking-tighter mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">Cliente: {project.client}</p>
                  </div>
                </motion.div>
              ))}
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
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                    Vamos Criar o <br />
                    <span className="text-accent italic">Futuro.</span>
                  </h2>
                  <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                    Entre em contacto para uma consultoria técnica especializada. Transformamos a sua visão em sinalética de alta precisão.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Call us</span>
                    <p className="text-xl font-bold">+351 912 345 678</p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Email us</span>
                    <p className="text-xl font-bold">geral@ideiasefetivas.pt</p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Visit us</span>
                    <p className="text-xl font-bold">Sintra, Portugal</p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Follow us</span>
                    <div className="flex gap-4">
                      {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="hover:text-accent transition-colors"><Icon size={20} /></a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-foreground/[0.02] border border-border p-12 md:p-16">
                <form onSubmit={handleFormSubmit} className="space-y-10">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Nome / Empresa</label>
                      <input 
                        type="text" 
                        name="entity"
                        value={formData.entity}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-border py-4 text-foreground focus:border-accent outline-none transition-all font-medium"
                        placeholder="Insira o seu nome ou empresa"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-border py-4 text-foreground focus:border-accent outline-none transition-all font-medium"
                        placeholder="email@exemplo.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Serviço</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-border py-4 text-foreground focus:border-accent outline-none transition-all font-medium appearance-none"
                      >
                        <option value="LETRAS_INOX">Letras em Aço Inox</option>
                        <option value="RECLAMOS_LUMINOSOS">Reclamos Luminosos</option>
                        <option value="NEON_LED">Néon e LED</option>
                        <option value="PAINEIS_PLACAS">Painéis e Placas</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Mensagem</label>
                      <textarea 
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        rows="3" 
                        className="w-full bg-transparent border-b border-border py-4 text-foreground focus:border-accent outline-none transition-all font-medium"
                        placeholder="Descreva brevemente o seu projeto"
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-6 bg-accent text-background font-black text-[12px] uppercase tracking-[0.4em] hover:bg-foreground hover:text-background transition-all duration-500 flex items-center justify-center gap-4"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : formStatus === 'success' ? 'Enviado com Sucesso' : 'Enviar Pedido'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-background py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <Logo src={myLogo} />
            
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
              <a href="#portfolio" className="hover:text-accent transition-colors">Portfólio</a>
              <a href="#empresa" className="hover:text-accent transition-colors">Sobre</a>
              <a href="#contactos" className="hover:text-accent transition-colors">Contactos</a>
            </div>

            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              © 2026 Ideias Efetivas. Todos os direitos reservados.
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