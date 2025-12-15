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
  MessageCircle,
  MapPin,
  Clock,
  FileCheck,
  User,
  ChevronLeft,
  ChevronRight,
  Star,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  FileText
} from "lucide-react";

// --- Custom Icons ---

const TiktokIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

const BrandLogos = {
  Apple: () => (
    <svg viewBox="0 0 384 512" fill="currentColor" className="h-8 md:h-10 text-slate-800">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
    </svg>
  ),
  Samsung: () => (
    <svg viewBox="0 0 248 80" fill="currentColor" className="h-6 md:h-8 text-[#1428A0]">
       <path d="M228.4 14.6c-49.7-8.6-112.5-8.6-162.2 0C25.3 21.6 0 41.5 0 51.9c0 4.2 4.1 7.6 11.5 10.1 27.6 9.4 84.8 12.9 146.4 8.7 19.3-1.3 37.6-3.8 53.9-7.1 29.8-6.1 36.2-13.8 36.2-17.7 0-16.7-63.8-25.8-19.6-31.3zm-67 19.6h5.8v22.4h15.2v4.8h-21V34.2zm-123.6 0h5.8v10.6c1.1-1.3 2.6-2.2 4.1-2.2 2.7 0 3.7 2.1 3.7 5.7v13.1h-5.4V49.1c0-1.7-.3-2.6-1.5-2.6-1.3 0-2.2 1.1-2.2 2.7v12.2h-5.4V34.2h.9zm101.4 0h5.7v17.4c0 1.9.5 2.8 1.9 2.8 1.4 0 1.9-.9 1.9-2.8V34.2h5.7v17.6c0 4.6-2.1 7.1-6.8 7.1-4.7 0-6.8-2.5-6.8-7.1v-1.1h-1.6V34.2zm-22.9 18.5c1.6 1.3 3.5 2 5.5 2 2.3 0 3.5-1.1 3.5-2.8 0-2.1-1.9-2.7-4.7-3.6-4.5-1.5-7.5-3.3-7.5-7.8 0-4.8 3.6-7.5 9-7.5 3.5 0 6.6 1.1 8.5 2.7l-2.6 3.7c-1.5-1.2-3.2-1.8-5-1.8-2.2 0-3.3 1-3.3 2.5 0 1.9 1.8 2.5 4.7 3.4 4.8 1.5 7.6 3.4 7.6 8 0 4.8-3.7 7.7-9.4 7.7-4.2 0-7.7-1.3-9.7-3.2l3.4-3.3zm55.4-18.5h5.4v27.2h-5.4V34.2zm-35.8 0h5.1l3.3 16 3.4-16h4.9l-5.6 27.2h-5.4l-5.7-27.2zM80.4 34.2h5.7l5.3 27.2H86l-1.2-7h-8.2l-1.2 7h-5.5l5.2-27.2h5.3zm-1.1 16.1l-2.8-13.4-2.8 13.4h5.6zm136 7.6c-2.4 2.2-5.4 3.5-9.1 3.5-6.4 0-10.7-4.3-10.7-11.4 0-7.3 4.5-11.7 10.9-11.7 3.3 0 5.9 1.1 7.9 2.8l-2.9 3.6c-1.3-1.1-2.9-1.8-4.7-1.8-3.4 0-5.4 2.3-5.4 6.8 0 4.3 1.8 6.6 5.2 6.6 2.1 0 3.7-.6 4.9-1.5v-3.7h-5.4v-4.5h10.9v11.3l-1.6.1z"/>
    </svg>
  ),
  Xiaomi: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 md:h-10 text-[#FF6900]">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#FF6900"/>
      <path d="M14.5 9.5V15a1 1 0 0 1-1 1h-.5v-4h-2v4h-.5a1 1 0 0 1-1-1v-5.5h-2v5.5a3 3 0 0 0 3 3h.5a3 3 0 0 0 3-3V9.5h-3.5zm3.5 0v8h2v-8h-2z" fill="white"/>
    </svg>
  ),
  Motorola: () => (
    <svg viewBox="0 0 300 300" fill="currentColor" className="h-8 md:h-10 text-slate-800">
      <circle cx="150" cy="150" r="140" fill="#5C92FA" className="text-slate-800"/>
      <path d="M125 197l-35-101h26l17 58 17-58h26l17 58 17-58h26l-35 101h-23l-15-56-15 56h-23z" fill="white"/>
    </svg>
  ),
  Oppo: () => (
    <svg viewBox="0 0 100 30" fill="currentColor" className="h-5 md:h-6 text-[#107B57]">
      <path d="M12.5 5C5.6 5 0 9.5 0 15s5.6 10 12.5 10S25 20.5 25 15 19.4 5 12.5 5zm0 16.5c-4.1 0-7.5-2.9-7.5-6.5S8.4 8.5 12.5 8.5s7.5 2.9 7.5 6.5-3.4 6.5-7.5 6.5zm25 0c-4.1 0-7.5-2.9-7.5-6.5S33.4 8.5 37.5 8.5s7.5 2.9 7.5 6.5-3.4 6.5-7.5 6.5zm0-16.5C30.6 5 25 9.5 25 15s5.6 10 12.5 10S50 20.5 50 15 44.4 5 37.5 5zm25 0c-6.9 0-12.5 4.5-12.5 10s5.6 10 12.5 10S75 20.5 75 15 69.4 5 62.5 5zm0 16.5c-4.1 0-7.5-2.9-7.5-6.5S58.4 8.5 62.5 8.5s7.5 2.9 7.5 6.5-3.4 6.5-7.5 6.5zm25-16.5c-6.9 0-12.5 4.5-12.5 10s5.6 10 12.5 10 12.5-4.5 12.5-10-5.6-10-12.5-10zm0 16.5c-4.1 0-7.5-2.9-7.5-6.5S83.4 8.5 87.5 8.5s7.5 2.9 7.5 6.5-3.4 6.5-7.5 6.5z"/>
    </svg>
  )
};

// --- Components ---

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "google";
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({ children, variant = "primary", className = "", onClick, href }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1";
  const variants = {
    primary: "bg-sky-600 hover:bg-sky-700 text-white shadow-sm shadow-sky-200",
    secondary: "bg-slate-800 hover:bg-slate-900 text-white shadow-sm",
    outline: "border-2 border-sky-600 text-sky-600 hover:bg-sky-50",
    google: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm"
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
  <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 h-full flex flex-col items-center text-center hover:border-sky-200 transition-colors">
    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 text-sky-600 shadow-sm border border-slate-100">
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
    { name: "FAQ", href: "#faq" },
    { name: "O Técnico", href: "#technician" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
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
  <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
    {/* Background Shapes */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20 z-0"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-50 rounded-full blur-3xl -translate-x-10 translate-y-10"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="max-w-2xl">
          <div className="inline-block bg-sky-50 text-sky-700 border border-sky-100 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
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
          <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-slate-50">
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
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center gap-3">
             <div className="bg-green-50 p-2 rounded-full border border-green-100">
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
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm mb-8">Trabalhamos com as principais marcas de celulares</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500">
           <div className="w-16 md:w-20"><BrandLogos.Apple /></div>
           <div className="w-24 md:w-32"><BrandLogos.Samsung /></div>
           <div className="w-16 md:w-20"><BrandLogos.Xiaomi /></div>
           <div className="w-16 md:w-20"><BrandLogos.Motorola /></div>
           <div className="w-20 md:w-24"><BrandLogos.Oppo /></div>
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
    <section id="services" className="py-20 bg-slate-50">
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
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white p-3 rounded-full shadow-sm border border-slate-200 z-10 transition-opacity ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-50 cursor-pointer'}`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= services.length - itemsToShow}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white p-3 rounded-full shadow-sm border border-slate-200 z-10 transition-opacity ${currentIndex >= services.length - itemsToShow ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-50 cursor-pointer'}`}
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  initials: string;
}

const ReviewCard = ({ name, rating, text, initials }: ReviewCardProps) => (
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-sm">
        {initials}
      </div>
      <div>
        <p className="text-white font-semibold text-sm">{name}</p>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
             <Star key={i} size={14} fill={i < rating ? "currentColor" : "none"} className={i < rating ? "" : "text-slate-600"} />
          ))}
        </div>
      </div>
    </div>
    <p className="text-slate-300 text-sm italic leading-relaxed">"{text}"</p>
  </div>
);

const GoogleReviewsAndStats = () => {
  const reviews = [
    {
      name: "João Silva",
      initials: "JS",
      rating: 5,
      text: "Serviço excelente! Meu notebook estava muito lento e agora parece novo. Recomendo muito."
    },
    {
      name: "Maria Oliveira",
      initials: "MO",
      rating: 5,
      text: "Atendimento nota 10. O Claudir explicou tudo direitinho e o preço foi super justo. Confio de olhos fechados."
    },
    {
      name: "Pedro Santos",
      initials: "PS",
      rating: 5,
      text: "Recuperaram a placa do meu iPhone que outra assistência tinha condenado. Profissionais de verdade!"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold mb-6">O que dizem nossos clientes</h2>
           
           <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-slate-700 mb-8">
              <span className="text-5xl font-bold text-white">4.9</span>
              <div className="text-left">
                <div className="flex text-yellow-400 mb-1">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p className="text-slate-400 text-xs">Média baseada em avaliações do Google</p>
              </div>
           </div>
           
           <div>
             <Button variant="google" href="https://share.google/x7W0bPc8FScELQo4G">
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-5 h-5 mr-3" alt="Google" />
               Ver todas as avaliações
             </Button>
           </div>
        </div>
  
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
             <ReviewCard key={index} {...review} />
          ))}
        </div>
  
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto border-t border-slate-800 pt-12">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-4xl font-bold text-sky-500 mb-2">+30</p>
            <p className="text-slate-400 font-medium">Serviços Realizados</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center border-l border-slate-800">
            <p className="text-4xl font-bold text-sky-500 mb-2">96%</p>
            <p className="text-slate-400 font-medium">Clientes Satisfeitos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LabStructure = () => (
  <section id="structure" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <SectionTitle subtitle="Transparência e Qualidade" title="Nossa Estrutura" centered={false} />
        
        {/* Location Menu */}
        <div className="flex items-center gap-4 bg-slate-50 px-5 py-3 rounded-xl border border-slate-200 mb-8">
          <img src="image_0.png" alt="Logo Pequeno" className="w-10 h-10 object-contain" />
          <div className="text-sm text-slate-700 border-r border-slate-300 pr-4 mr-2">
            <p className="font-bold text-slate-900">Conecta Assistech</p>
            <p>Laboratório Especializado</p>
          </div>
          <a 
            href="https://share.google/x7W0bPc8FScELQo4G" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-bold text-sm bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm"
          >
            <MapPin size={16} />
            Ver no Mapa
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="group overflow-hidden rounded-xl border border-slate-100 h-48">
          <img src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Bancada de reparo" />
        </div>
        <div className="group overflow-hidden rounded-xl border border-slate-100 h-48">
          <img src="https://images.unsplash.com/photo-1555617981-d70c4061a995?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Equipamentos de precisão" />
        </div>
        <div className="group overflow-hidden rounded-xl border border-slate-100 h-48">
          <img src="https://images.unsplash.com/photo-1517430816045-df4b7de8db2b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Ferramentas técnicas" />
        </div>
        <div className="group overflow-hidden rounded-xl border border-slate-100 h-48">
          <img src="https://images.unsplash.com/photo-1588702547923-7093a6c3f067?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Organização de peças" />
        </div>
      </div>
    </div>
  </section>
);

const AboutTechnician = () => (
  <section id="technician" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle subtitle="Quem cuida do seu aparelho" title="Sobre o Especialista" />
      
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="grid md:grid-cols-12 gap-0">
          {/* Tech Photo Column */}
          <div className="md:col-span-5 relative h-80 md:h-auto bg-slate-900 flex items-center justify-center p-8">
            <img 
              src="image_0.png" 
              alt="Mascote Claudir" 
              className="w-48 h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform"
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
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                <FileText size={16} className="text-sky-600"/> 
                Formações & Especialidades
              </h4>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-full border border-slate-200"><CheckCircle className="w-4 h-4 text-green-600" /></div>
                  <span className="font-medium">Técnico em Informática - <span className="text-slate-500">Senac</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-full border border-slate-200"><CheckCircle className="w-4 h-4 text-green-600" /></div>
                  <span className="font-medium">Técnico em Eletrônica - <span className="text-slate-500">Etec</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-full border border-slate-200"><CheckCircle className="w-4 h-4 text-green-600" /></div>
                  <span className="font-medium">Suporte em TI - <span className="text-slate-500">Instituto da Oportunidade Social</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-full border border-slate-200"><CheckCircle className="w-4 h-4 text-green-600" /></div>
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
    <div className="border-b border-slate-100 last:border-0">
      <button 
        className="w-full flex justify-between items-center py-5 text-left font-semibold text-slate-900 hover:text-sky-600 focus:outline-none transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-sky-600" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="pb-5 text-slate-600 text-sm leading-relaxed animate-in slide-in-from-top-1 duration-200">
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
          <span className="inline-flex items-center justify-center p-3 bg-sky-50 text-sky-600 rounded-full mb-4 border border-sky-100">
            <HelpCircle size={24} />
          </span>
          <h2 className="text-3xl font-bold text-slate-900">Perguntas Frequentes</h2>
          <p className="text-slate-500 mt-2">Tire suas dúvidas sobre nossos serviços</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-1/3">
          <div className="flex items-center gap-3 mb-6">
            <img src="image_0.png" alt="Conecta Icon" className="h-10 w-auto" />
            <img src="image_1.png" alt="Conecta Assistech" className="h-6 w-auto opacity-90" />
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Sua assistência técnica de confiança. Trazendo soluções inteligentes para o seu dia a dia tecnológico com honestidade e preço justo.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all border border-slate-700 hover:border-sky-600">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all border border-slate-700 hover:border-sky-600">
              <TiktokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/3">
          <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
          <ul className="space-y-3">
            <li><a href="#home" className="hover:text-sky-500 transition-colors">Início</a></li>
            <li><a href="#services" className="hover:text-sky-500 transition-colors">Serviços</a></li>
            <li><a href="#structure" className="hover:text-sky-500 transition-colors">Estrutura</a></li>
            <li><a href="#faq" className="hover:text-sky-500 transition-colors">Dúvidas Frequentes</a></li>
            <li><a href="#technician" className="hover:text-sky-500 transition-colors">Sobre o Técnico</a></li>
            <li className="pt-4 mt-2 border-t border-slate-800">
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
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Brands />
        <GoogleReviewsAndStats />
        <LabStructure />
        <FAQ />
        <AboutTechnician />
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