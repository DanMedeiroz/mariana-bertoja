import SpotlightSection from "./ui/spotlight";
import { Award, Users, Scale, Target } from "lucide-react";
import aboutImg from "../assets/about.jpg";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Formação Sólida",
      description: "Graduada em Direito pela UCS e pós-graduada em Processo Civil pela PUC/RS",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Relacionamento próximo com cada cliente, entendendo suas necessidades específicas",
    },
    {
      icon: Scale,
      title: "Visão de Negócios",
      description: "Atuação que vai além do jurídico, compreendendo o contexto empresarial",
    },
    {
      icon: Target,
      title: "Abordagem Preventiva",
      description: "Foco em mitigar riscos e evitar prejuízos antes que aconteçam",
    },
  ];

  return (
    <SpotlightSection 
      id="sobre" 
      className="py-16 md:py-24 bg-gradient-to-br from-[#783711] to-[#542508]"
      spotlightColor="rgba(255, 255, 255, 0.05)"
    >
      <div className="container mx-auto px-4 lg:px-8 relative">
        
        {/* --- TAG CENTRALIZADA NO TOPO --- */}
        <div className="text-center w-full mb-10 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-white/80 text-xs md:text-sm font-medium tracking-widest uppercase">
            <div className="w-6 md:w-8 h-px bg-white/50" />
            Sobre a Especialista
            <div className="w-6 md:w-8 h-px bg-white/50" />
          </div>
        </div>

        {/* LAYOUT: Imagem + Textos */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* --- IMAGEM --- */}
          <div className="order-last lg:order-first relative max-w-sm mx-auto lg:max-w-none w-full group">
            
            {/* Elementos Decorativos */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 border-2 border-white/20 rounded-lg transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-48 md:h-48 bg-white/5 rounded-lg -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            
            {/* Container da Foto */}
            <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-muted rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={aboutImg} 
                alt="Dra. Mariana Bertoja" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#783711]/10 mix-blend-multiply pointer-events-none" />
            </div>
          </div>

          {/* --- CONTEÚDO TEXTUAL --- */}
          <div className="w-full text-left">
            
            {/* --- NOME DE VOLTA À ESQUERDA --- */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6 leading-tight">
              Dra. Mariana Bertoja
            </h2>

            <div className="space-y-4 text-white/80 leading-relaxed mb-10 text-base md:text-lg">
              <p>
                À frente da <strong className="text-white font-semibold">Mariana Bertoja Sociedade de Advogados</strong> desde 2021, 
                localizada em Gramado/RS, ofereço atendimento híbrido para clientes em todo o Brasil.
              </p>
              <p>
                Minha missão é entregar <strong className="text-white font-semibold">soluções jurídicas seguras e eficazes</strong> através 
                de um atendimento próximo, atuando para fornecer aconselhamento assertivo, 
                mitigar riscos, evitar prejuízos e potencializar a geração de negócios.
              </p>
              <p>
                Acredito que a advocacia empresarial deve ir além do aspecto técnico-jurídico, 
                compreendendo o <strong className="text-white font-semibold">contexto de negócios</strong> de cada cliente.
              </p>
            </div>

            {/* --- HIGHLIGHTS GRID --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#faf9f6] border border-transparent hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group/card shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#783711]/10 flex items-center justify-center flex-shrink-0 group-hover/card:bg-[#783711] transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-[#783711] group-hover/card:text-white transition-colors duration-300" />
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-[#542508] mb-1 text-sm md:text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-[#783711]/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </SpotlightSection>
  );
};

export default AboutSection;