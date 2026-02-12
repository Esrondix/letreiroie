import { motion } from "framer-motion";
import { Send, Upload, CheckCircle2, MapPin, Ruler, HardHat } from "lucide-react";
import { useState } from "react";

export const Configurator = () => {
  const [installation, setInstallation] = useState('diy');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappError, setWhatsappError] = useState('');
  const [postalCodeError, setPostalCodeError] = useState('');
  const [heightError, setHeightError] = useState('');
  const [fileName, setFileName] = useState('');

  const validateWhatsapp = (val) => {
    if (!val || !/^\d{9}$/.test(val.replace(/\s/g, ''))) {
      setWhatsappError('Insira um número válido (9 dígitos).');
      return false;
    }
    setWhatsappError('');
    return true;
  };

  const validatePostalCode = (val) => {
    if (!val || !/^\d{4}-\d{3}$/.test(val)) {
      setPostalCodeError('Formato inválido (ex: 4000-000).');
      return false;
    }
    setPostalCodeError('');
    return true;
  };

  const validateHeight = (val) => {
    if (!val || isNaN(val) || parseFloat(val) <= 0) {
      setHeightError('Insira uma altura válida.');
      return false;
    }
    setHeightError('');
    return true;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const whatsapp = formData.get('whatsapp');
    const postalCode = formData.get('postalCode');
    const height = formData.get('height');

    const isWhatsappValid = validateWhatsapp(whatsapp);
    let isInstallationValid = true;

    if (installation === 'pro') {
      const isPCValid = validatePostalCode(postalCode);
      const isHValid = validateHeight(height);
      isInstallationValid = isPCValid && isHValid;
    }

    if (!isWhatsappValid || !isInstallationValid) return;

    setIsSubmitting(true);
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="configurador" className="py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-xl mx-auto p-16 rounded-[3rem] bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] backdrop-blur-2xl"
          >
            <div className="w-24 h-24 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(0,152,185,0.4)]">
              <CheckCircle2 className="text-background" size={48} />
            </div>
            <h2 className="text-4xl font-medium uppercase tracking-tight mb-4 text-text">Pedido Recebido!</h2>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              A nossa equipa técnica irá validar o seu ficheiro e entrar em contacto via WhatsApp nas próximas 24 horas úteis.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-text text-background px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all"
            >
              Novo Pedido
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="configurador" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-5xl font-medium uppercase tracking-[-2px] mb-6 text-text leading-[1]"
            >
              O Configurador <br />
              <span className="text-accent">Inteligente</span>
            </motion.h2>
            <p className="text-muted text-xl max-w-2xl mx-auto">Valide o seu projeto tecnicamente em segundos e receba uma análise detalhada.</p>
          </div>

          <div className="bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] rounded-[3rem] overflow-hidden backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
            <div className="grid lg:grid-cols-2">
              {/* Left Side: Info */}
              <div className="p-12 lg:p-20 bg-[rgba(241,244,250,0.02)] border-r border-[rgba(241,244,250,0.1)]">
                <div className="mb-16">
                  <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Passo Final</span>
                  <h3 className="text-4xl font-medium uppercase tracking-tight leading-[1.1] mb-8 text-text">Solicitar Validação Técnica</h3>
                  <p className="text-muted text-lg leading-relaxed">
                    Não cobramos nada pela análise técnica. Envie o seu ficheiro e as nossas máquinas CNC darão o veredito sobre a viabilidade do corte e sugestões de acabamento.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 text-text/80 group">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-base font-medium">Análise de Ficheiro (PDF/AI/SVG)</span>
                  </div>
                  <div className="flex items-center gap-6 text-text/80 group">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-base font-medium">Orçamento com Montagem</span>
                  </div>
                  <div className="flex items-center gap-6 text-text/80 group">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-base font-medium">Sugestões de Material Premium</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-12 lg:p-20">
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-4">Produto Pretendido</label>
                      <select className="w-full bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] rounded-2xl px-8 py-5 text-sm font-medium text-text focus:border-accent outline-none transition-all appearance-none cursor-pointer">
                        <option value="1">Interior & Office</option>
                        <option value="2">Fachada PRO</option>
                        <option value="3">Elite 3D</option>
                        <option value="4">Corporate</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-4">Dimensão (Maior)</label>
                      <select className="w-full bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] rounded-2xl px-8 py-5 text-sm font-medium text-text focus:border-accent outline-none transition-all appearance-none cursor-pointer">
                        <option value="s">S (Pequeno)</option>
                        <option value="m">M (Médio)</option>
                        <option value="l">L (Grande)</option>
                        <option value="custom">Sob Medida</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-4">Nome Completo</label>
                    <input type="text" required placeholder="Ex: João Silva" className="w-full bg-[rgba(241,244,250,0.05)] border border-[rgba(241,244,250,0.1)] rounded-2xl px-8 py-5 text-sm font-medium text-text placeholder:text-text/10 focus:border-accent outline-none transition-all" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-4">WhatsApp (Obrigatório)</label>
                    <input 
                      type="tel" 
                      name="whatsapp" 
                      required 
                      onChange={(e) => validateWhatsapp(e.target.value)}
                      placeholder="Ex: 912 345 678" 
                      className={`w-full bg-[rgba(241,244,250,0.05)] border rounded-2xl px-8 py-5 text-sm font-medium text-text placeholder:text-text/10 focus:border-accent outline-none transition-all ${whatsappError ? 'border-red-500' : 'border-[rgba(241,244,250,0.1)]'}`} 
                    />
                    {whatsappError && <p className="text-red-500 text-[10px] mt-1 ml-4 font-bold uppercase tracking-wider">{whatsappError}</p>}
                  </div>

                  <div className="space-y-6">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-4">Preferência de Instalação</label>
                    <div className="grid md:grid-cols-2 gap-6">
                      <button 
                        type="button"
                        onClick={() => setInstallation('diy')}
                        className={`p-6 rounded-[2rem] border flex flex-col items-center text-center gap-3 transition-all ${
                          installation === 'diy' ? 'bg-accent border-accent text-background shadow-[0_10px_30px_rgba(0,152,185,0.3)]' : 'bg-[rgba(241,244,250,0.03)] border-[rgba(241,244,250,0.1)] text-text hover:border-[rgba(241,244,250,0.3)]'
                        }`}
                      >
                        <CheckCircle2 size={24} />
                        <span className="text-[11px] font-bold uppercase tracking-widest">Kit Auto-Instalação</span>
                        <span className={`text-[9px] font-medium opacity-60 ${installation === 'diy' ? 'text-background' : 'text-muted'}`}>Envio Grátis / +Económico</span>
                      </button>
                      <button 
                        type="button"
                        onClick={() => setInstallation('pro')}
                        className={`p-6 rounded-[2rem] border flex flex-col items-center text-center gap-3 transition-all ${
                          installation === 'pro' ? 'bg-accent border-accent text-background shadow-[0_10px_30px_rgba(0,152,185,0.3)]' : 'bg-[rgba(241,244,250,0.03)] border-[rgba(241,244,250,0.1)] text-text hover:border-[rgba(241,244,250,0.3)]'
                        }`}
                      >
                        <HardHat size={24} />
                        <span className="text-[11px] font-bold uppercase tracking-widest">Orçamento com Montagem</span>
                        <span className={`text-[9px] font-medium opacity-60 ${installation === 'pro' ? 'text-background' : 'text-muted'}`}>Para projetos complexos</span>
                      </button>
                    </div>
                  </div>

                  {installation === 'pro' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="grid md:grid-cols-2 gap-8"
                    >
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-4">Localidade (Cód. Postal)</label>
                        <div className="relative">
                          <MapPin size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-text/20" />
                          <input 
                            type="text" 
                            name="postalCode" 
                            placeholder="Ex: 4000-000" 
                            onChange={(e) => validatePostalCode(e.target.value)}
                            className={`w-full bg-[rgba(241,244,250,0.05)] border rounded-2xl pl-14 pr-8 py-5 text-sm font-medium text-text placeholder:text-text/10 focus:border-accent outline-none transition-all ${postalCodeError ? 'border-red-500' : 'border-[rgba(241,244,250,0.1)]'}`} 
                          />
                          {postalCodeError && <p className="text-red-500 text-[10px] mt-1 ml-4 font-bold uppercase tracking-wider">{postalCodeError}</p>}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-4">Altura do Chão (Metros)</label>
                        <div className="relative">
                          <Ruler size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-text/20" />
                          <input 
                            type="number" 
                            name="height" 
                            placeholder="Ex: 3" 
                            onChange={(e) => validateHeight(e.target.value)}
                            className={`w-full bg-[rgba(241,244,250,0.05)] border rounded-2xl pl-14 pr-8 py-5 text-sm font-medium text-text placeholder:text-text/10 focus:border-accent outline-none transition-all ${heightError ? 'border-red-500' : 'border-[rgba(241,244,250,0.1)]'}`} 
                          />
                          {heightError && <p className="text-red-500 text-[10px] mt-1 ml-4 font-bold uppercase tracking-wider">{heightError}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted ml-4">Upload do Ficheiro (PDF, AI, Foto)</label>
                    <div className="relative group cursor-pointer">
                      <input 
                        type="file" 
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                      />
                      <div className={`w-full bg-[rgba(241,244,250,0.03)] border-2 border-dashed rounded-2xl p-12 flex flex-col items-center gap-4 transition-all ${fileName ? 'border-accent bg-accent/5' : 'border-[rgba(241,244,250,0.1)] group-hover:border-accent/50'}`}>
                        {fileName ? (
                          <>
                            <CheckCircle2 size={32} className="text-accent animate-pulse" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">{fileName}</span>
                            <span className="text-[9px] font-medium text-muted">Clique para substituir</span>
                          </>
                        ) : (
                          <>
                            <Upload size={32} className="text-text/20 group-hover:text-accent transition-colors" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted">Arraste ou clique para enviar</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-accent text-background py-7 rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-text transition-all disabled:opacity-50 shadow-[0_20px_40px_rgba(0,152,185,0.2)]"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-background/20 border-t-background rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        SOLICITAR VALIDAÇÃO TÉCNICA
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
