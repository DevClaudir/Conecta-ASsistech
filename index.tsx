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
  ShieldCheck,
  User,
  ChevronLeft,
  ChevronRight,
  Map
} from "lucide-react";

// --- Components ---

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({ children, variant = "primary", className = "", onClick, href }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md";
  const variants = {
    primary: "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-200",
    secondary: "bg-slate-800 hover:bg-slate-900 text-white",
    outline: "border-2 border-sky-600 text-sky-600 hover:bg-sky-50"
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
    { name: "A Conecta", href: "#about" },
    { name: "O Técnico", href: "#technician" },
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
               <ShieldCheck className="w-6 h-6 text-green-600" />
             </div>
             <div>
               <p className="text-xs text-slate-500 uppercase font-bold">Confiança</p>
               <p className="font-bold text-slate-900">100% Seguro</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

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

const AboutBusiness = () => (
  <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle 
            subtitle="Nossa História" 
            title="De plataforma a laboratório especializado" 
            centered={false} 
          />
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              A <strong>Conecta Assistech</strong> nasceu com um grande sonho: conectar clientes aos melhores profissionais. Com o tempo, percebemos que a melhor forma de garantir a qualidade que prezamos era assumir a responsabilidade técnica diretamente.
            </p>
            <p>
              Hoje, somos uma assistência técnica dedicada, focada exclusivamente em oferecer o melhor reparo para seu celular, notebook ou computador. Pivotamos nosso modelo de negócio para garantir que cada parafuso apertado e cada peça trocada tenha o nosso selo de excelência.
            </p>
            <p>
              Nosso compromisso é com a transparência: você sabe exatamente o que está sendo feito no seu aparelho, quanto vai custar e porquê. Sem surpresas.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-3xl font-bold text-sky-500 mb-1">+30</p>
              <p className="text-sm text-slate-400">Serviços Realizados</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-3xl font-bold text-sky-500 mb-1">96%</p>
              <p className="text-sm text-slate-400">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
        <div className="relative">
           <img 
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=800" 
            alt="Bancada de eletrônica" 
            className="rounded-lg shadow-2xl border border-slate-700"
          />
        </div>
      </div>
    </div>
  </section>
);

const AboutTechnician = () => (
  <section id="technician" className="py-20 bg-sky-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle subtitle="Quem cuida do seu aparelho" title="Sobre o Especialista" />
      
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-12 gap-0">
          {/* Tech Photo Column - Using mascot as per request/files */}
          <div className="md:col-span-5 relative h-80 md:h-auto bg-slate-900 flex items-center justify-center p-8">
            <img 
              src="image_0.png" 
              alt="Mascote Claudir" 
              className="w-48 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 to-transparent p-6">
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
            <p className="text-slate-600 mb-6 leading-relaxed">
              Com formação especializada e bancada equipada, garanto que seu dispositivo receba o tratamento profissional que merece.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Formações & Especialidades</h4>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-500" />
                  Técnico em Eletrônica
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-500" />
                  Técnico em Informática
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-500" />
                  Reparo Avançado de Placas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-500" />
                  Microsoldagem
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lab Gallery & Structure */}
      <div className="mt-12">
        <div className="flex items-center flex-col md:flex-row justify-between items-end mb-6 gap-4">
          <h4 className="text-xl font-bold text-slate-900">Nossa Estrutura</h4>
          
          {/* Location Menu */}
          <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
            <img src="image_0.png" alt="Logo Pequeno" className="w-8 h-8" />
            <div className="text-xs text-slate-600 border-r border-slate-200 pr-4 mr-1">
              <p className="font-bold">Venha nos visitar</p>
              <p>Laboratório Profissional</p>
            </div>
            <a 
              href="https://share.google/HZNtHkdanpPtwzJBA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-sm"
            >
              <MapPin size={16} />
              Ver no Mapa
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=400" className="rounded-lg h-40 w-full object-cover shadow-md hover:scale-105 transition-transform" alt="Bancada 1" />
          <img src="https://images.unsplash.com/photo-1555617981-d70c4061a995?auto=format&fit=crop&q=80&w=400" className="rounded-lg h-40 w-full object-cover shadow-md hover:scale-105 transition-transform" alt="Bancada 2" />
          <img src="https://images.unsplash.com/photo-1517430816045-df4b7de8db2b?auto=format&fit=crop&q=80&w=400" className="rounded-lg h-40 w-full object-cover shadow-md hover:scale-105 transition-transform" alt="Ferramentas" />
          <img src="https://images.unsplash.com/photo-1588702547923-7093a6c3f067?auto=format&fit=crop&q=80&w=400" className="rounded-lg h-40 w-full object-cover shadow-md hover:scale-105 transition-transform" alt="Peças" />
        </div>
      </div>
    </div>
  </section>
);

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
              <span>Rua Exemplo, 123 - Centro<br/>Cidade - Estado, CEP 00000-000</span>
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
            <li><a href="#about" className="hover:text-sky-500 transition-colors">Sobre a Conecta</a></li>
            <li><a href="#technician" className="hover:text-sky-500 transition-colors">Sobre o Técnico</a></li>
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
        <AboutBusiness />
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