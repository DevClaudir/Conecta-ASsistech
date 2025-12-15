import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { 
  Smartphone, 
  Monitor, 
  Laptop, 
  Cpu, 
  Wrench, 
  CheckCircle, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  MessageCircle,
  MapPin,
  Clock,
  FileCheck,
  User,
  ChevronLeft,
  ChevronRight,
  Map,
  Star,
  ChevronDown,
  ChevronUp,
  Truck,
  ShieldCheck,
  FileText,
  HelpCircle
} from "lucide-react";

// --- Components ---

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "google";
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({ children, variant = "primary", className = "", onClick, href }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md";
  const variants = {
    primary: "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-200",
    secondary: "bg-slate-800 hover:bg-slate-900 text-white",
    outline: "border-2 border-sky-600 text-sky-600 hover:bg-sky-50",
    google: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

interface SectionTitleProps {
  subtitle: string;
  title: string;
  centered?: boolean;
}

const SectionTitle = ({ subtitle, title, centered = true }: SectionTitleProps) => (
  <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
    <span className="text-sky-600 font-bold uppercase tracking-wider text-sm">{subtitle}</span>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{title}</h2>
    <div className={`h-1 w-20 bg-sky-500 mt-4 ${centered ? "mx-auto" : ""}`}></div>
  </div>
);

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6 text-sky-600">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);

// --- Sections ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Estrutura", href: "#structure" },
    { name: "O Técnico", href: "#technician" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <img src="image_0.png" alt="Conecta Icon" className="h-10 w-auto" />
          <img src="image_1.png" alt="Conecta Assistech" className="h-8 w-auto hidden sm:block" />
          <span className="sm:hidden font-bold text-slate-900 text-lg">CONECTA</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 hover:text-sky-600 font-medium transition-colors">
              {link.name}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="px-5 py-2 text-sm">
            Fale Conosco
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-700 p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 font-medium hover:text-sky-600 py-2 border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-sky-600 text-white py-3 rounded-lg font-bold mt-4"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
    {/* Background Shapes */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-100/30 skew-x-12 translate-x-20 z-0"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -translate-x-10 translate-y-10"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="max-w-2xl">
          <div className="inline-block bg-sky-100 text-sky-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            🛠️ Especialistas em Hardware e Software
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Sua tecnologia <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">
              nova de novo.
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Assistência técnica especializada em celulares, notebooks e computadores.
            Diagnóstico preciso, peças de qualidade e a garantia que você precisa.
            Recupere a performance dos seus dispositivos hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="https://wa.me/5599999999999" variant="primary">
              <MessageCircle className="w-5 h-5 mr-2" />
              Orçamento via WhatsApp
            </Button>
            <Button href="#services" variant="outline">
              Ver Serviços
            </Button>
          </div>
          
          <div className="mt-10 flex items-center gap-6 text-slate-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Garantia Estendida
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Orçamento Gratuito
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1597424214711-486196a603c4?auto=format&fit=crop&q=80&w=800" 
              alt="Técnico reparando eletrônico" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="font-bold text-xl">Laboratório Próprio</p>
                <p className="text-slate-200">Ferramentas de precisão para seu equipamento</p>
              </div>
            </div>
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3">
             <div className="bg-green-100 p-2 rounded-full">
               <FileCheck className="w-6 h-6 text-green-600" />
             </div>
             <div>
               <p className="text-xs text-slate-500 uppercase font-bold">Emitimos</p>
               <p className="font-bold text-slate-900">Nota Fiscal</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Brands = () => {
  const brands = ["Apple", "Samsung", "Xiaomi", "Motorola", "Oppo"];
  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm mb-6">Trabalhamos com as principais marcas</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center opacity-70 hover:opacity-100 transition-opacity">
           {brands.map((brand) => (
             <div key={brand} className="bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 font-bold text-slate-700 text-lg md:text-xl">
               {brand}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: "Celulares e Tablets",
      description: "Troca de tela, bateria, conector, reparos em placa e serviços relacionados."
    },
    {
      icon: Laptop,
      title: "Notebooks",
      description: "Upgrade, formatação, manutenção preventiva, otimização e serviços relacionados."
    },
    {
      icon: Monitor,
      title: "Computadores",
      description: "Upgrades, acessoria e montagem, manutenção preventiva e otimização"
    },
    {
      icon: Cpu,
      title: "Reparo de Placas",
      description: "Diagnóstico avançado, microsoldagem e microeletrônica aplicada."
    },
    {
      icon: Wrench,
      title: "Preventiva",
      description: "Limpeza de GPU, fontes, fans, gabinete, troca de pasta térmica e thermal pads"
    },
    {
      icon: CheckCircle,
      title: "Laudos Técnicos",
      description: "Avaliação técnica de funcionamento para seguradoras e compra e venda com seguraça."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (services.length - itemsToShow + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="O que fazemos" 
          title="Soluções completas para seus dispositivos" 
        />
        
        <div className="relative group">
          <div className="overflow-hidden p-4 -m-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-3"
                  style={{ flexBasis: `${100 / itemsToShow}%` }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white p-3 rounded-full shadow-lg border border-slate-100 z-10 transition-opacity ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-50 cursor-pointer'}`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= services.length - itemsToShow}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white p-3 rounded-full shadow-lg border border-slate-100 z-10 transition-opacity ${currentIndex >= services.length - itemsToShow ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-50 cursor-pointer'}`}
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

const GoogleReviewsAndStats = () => (
  <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-12">
         <h2 className="text-3xl font-bold mb-6">O que dizem nossos clientes</h2>
         <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto border border-slate-700">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-4xl font-bold text-white">4.9</span>
              <div className="flex text-yellow-400">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
            </div>
            <p className="text-slate-300 mb-6">Veja as avaliações reais de quem já confiou na Conecta Assistech.</p>
            <Button variant="google" href="https://share.google/x7W0bPc8FScELQo4G">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-5 h-5 mr-3" alt="Google" />
              Ver avaliações no Google
            </Button>
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center justify-center text-center">
          <p className="text-4xl font-bold text-sky-500 mb-2">+30</p>
          <p className="text-slate-400 font-medium">Serviços Realizados</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center justify-center text-center">
          <p className="text-4xl font-bold text-sky-500 mb-2">96%</p>
          <p className="text-slate-400 font-medium">Clientes Satisfeitos</p>
        </div>
      </div>
    </div>
  </section>
);

const LabStructure = () => (
  <section id="structure" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <SectionTitle subtitle="Transparência e Qualidade" title="Nossa Estrutura" centered={false} />
        
        {/* Location Menu */}
        <div className="flex items-center gap-4 bg-sky-50 px-5 py-3 rounded-xl shadow-sm border border-sky-100 mb-8">
          <img src="image_0.png" alt="Logo Pequeno" className="w-10 h-10 object-contain" />
          <div className="text-sm text-slate-700 border-r border-slate-300 pr-4 mr-2">
            <p className="font-bold text-slate-900">Conecta Assistech</p>
            <p>Laboratório Especializado</p>
          </div>
          <a 
            href="https://share.google/x7W0bPc8FScELQo4G" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-bold text-sm bg-white px-3 py-1.5 rounded-lg shadow-sm"
          >
            <MapPin size={16} />
            Ver no Mapa
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="group overflow-hidden rounded-xl shadow-md h-48">
          <img src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Bancada de reparo" />
        </div>
        <div className="group overflow-hidden rounded-xl shadow-md h-48">
          <img src="https://images.unsplash.com/photo-1555617981-d70c4061a995?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Equipamentos de precisão" />
        </div>
        <div className="group overflow-hidden rounded-xl shadow-md h-48">
          <img src="https://images.unsplash.com/photo-1517430816045-df4b7de8db2b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Ferramentas técnicas" />
        </div>
        <div className="group overflow-hidden rounded-xl shadow-md h-48">
          <img src="https://images.unsplash.com/photo-1588702547923-7093a6c3f067?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Organização de peças" />
        </div>
      </div>
    </div>
  </section>
);

const AboutTechnician = () => (
  <section id="technician" className="py-20 bg-sky-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle subtitle="Quem cuida do seu aparelho" title="Sobre o Especialista" />
      
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="grid md:grid-cols-12 gap-0">
          {/* Tech Photo Column */}
          <div className="md:col-span-5 relative h-80 md:h-auto bg-slate-900 flex items-center justify-center p-8">
            <img 
              src="image_0.png" 
              alt="Mascote Claudir" 
              className="w-48 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white">Claudir</h3>
              <p className="text-sky-300 font-medium">Técnico & Fundador</p>
            </div>
          </div>
          
          {/* Tech Info Column */}
          <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <User className="text-sky-600" />
              Técnico da Conecta
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Olá! Sou o Claudir. Minha missão é devolver a vida útil ao seu equipamento com qualidade e honestidade. Não sou apenas um trocador de peças; sou um técnico apaixonado por diagnósticos precisos.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Com formação especializada e bancada equipada, garanto que seu dispositivo receba o tratamento profissional que merece.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-inner">
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                <FileText size={16} className="text-sky-600"/> 
                Formações & Especialidades
              </h4>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-green-600" /></div>
                  <span className="font-medium">Técnico em Informática - <span className="text-slate-500">Senac</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-green-600" /></div>
                  <span className="font-medium">Técnico em Eletrônica - <span className="text-slate-500">Etec</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-green-600" /></div>
                  <span className="font-medium">Suporte em TI - <span className="text-slate-500">Instituto da Oportunidade Social</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-green-600" /></div>
                  <span className="font-medium">Negócio Destaque - <span className="text-slate-500">Empreende Aí</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        className="w-full flex justify-between items-center py-4 text-left font-semibold text-slate-900 hover:text-sky-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-sky-600" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-600 text-sm leading-relaxed animate-in slide-in-from-top-2 duration-200">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona a garantia?",
      answer: "A garantia legal é de 90 dias e cobre exclusivamente o serviço realizado. Qualquer outro defeito posterior não relacionado ao reparo, ou defeitos pré-existentes consentidos na triagem, não são cobertos."
    },
    {
      question: "Como faço para entregar meu celular?",
      answer: "Operamos em ponto residencial sem loja física aberta ao público geral. É necessário agendamento para entrega. Em bairros próximos (até 1.5km), oferecemos retirada gratuita."
    },
    {
      question: "Quanto tempo leva para consertar?",
      answer: "O prazo varia conforme a complexidade do defeito e disponibilidade de peças. Após o diagnóstico inicial, informamos o prazo estimado junto com o orçamento."
    },
    {
      question: "Emite nota fiscal?",
      answer: "Sim! Emitimos Nota Fiscal de Serviço para todos os reparos realizados, enviada em até 30 dias após a conclusão do serviço."
    },
    {
      question: "Como posso confiar no trabalho da Conecta?",
      answer: "Prezamos pela transparência total. Gravamos vídeos do estado do aparelho na entrada e na saída, utilizamos ordem de serviço digital e realizamos um checklist completo testando todas as funções."
    },
    {
      question: "Quais são os procedimentos da Conecta?",
      answer: "Nosso fluxo é: 1. Triagem e recebimento; 2. Diagnóstico técnico; 3. Envio de Orçamento; 4. Aprovação do cliente; 5. Execução do Reparo; 6. Testes finais e Checklist; 7. Entrega."
    },
    {
      question: "Realizam entregas?",
      answer: "Sim. Até 1.5km a entrega/retirada é grátis. Até 5km (próximo a estações de metrô/trem) cobramos taxa fixa de R$10. Acima de 5km utilizamos apps de entrega como Uber Flash ou 99 Entregas."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center justify-center p-3 bg-sky-100 rounded-full text-sky-600 mb-4">
            <HelpCircle size={24} />
          </span>
          <h2 className="text-3xl font-bold text-slate-900">Perguntas Frequentes</h2>
          <p className="text-slate-500 mt-2">Tire suas dúvidas sobre nossos serviços</p>
        </div>
        
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="image_0.png" alt="Conecta Icon" className="h-10 w-auto" />
            <img src="image_1.png" alt="Conecta Assistech" className="h-6 w-auto opacity-90" />
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Sua assistência técnica de confiança. Trazendo soluções inteligentes para o seu dia a dia tecnológico com honestidade e preço justo.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-sky-500 shrink-0 mt-1" size={20} />
              <span>Ponto de Coleta Residencial<br/>Agende sua visita</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="text-sky-500 shrink-0" size={20} />
              <span>(99) 99999-9999</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-sky-500 shrink-0" size={20} />
              <span>Seg - Sex: 08:00 - 18:00<br/>Sáb: 08:00 - 12:00</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-sky-500 transition-colors">Início</a></li>
            <li><a href="#services" className="hover:text-sky-500 transition-colors">Serviços</a></li>
            <li><a href="#structure" className="hover:text-sky-500 transition-colors">Estrutura</a></li>
            <li><a href="#technician" className="hover:text-sky-500 transition-colors">Sobre o Técnico</a></li>
            <li><a href="#faq" className="hover:text-sky-500 transition-colors">Dúvidas Frequentes</a></li>
            <li className="pt-4 mt-4 border-t border-slate-800">
               <a href="#" className="flex items-center gap-2 text-sky-500 hover:text-sky-400 font-semibold text-sm">
                 <User size={14} />
                 Área do Cliente (Em breve)
               </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Conecta Assistech. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Brands />
        <GoogleReviewsAndStats />
        <LabStructure />
        <AboutTechnician />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5599999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="text-green-500" />
      </a>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;