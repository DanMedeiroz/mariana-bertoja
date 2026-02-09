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
      className="py-12 md:py-24 bg-gradient-to-br from-[#783711] to-[#542508]"
      spotlightColor="rgba(255, 255, 255, 0.03)"
    >
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* --- IMAGEM --- */}
          <div className="order-last lg:order-first relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="hidden md:block absolute -top-6 -left-6 w-32 h-32 border-2 border-white/20 rounded-lg" />
            <div className="hidden md:block absolute -bottom-6 -right-6 w-48 h-48 bg-white/5 rounded-lg -z-10" />
            <div className="relative w-full aspect-[4/5] bg-muted rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={aboutImg} 
                alt="Dra. Mariana Bertoja" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* --- CONTEÚDO TEXTUAL --- */}
          <div className="w-full text-left">
            
            <div className="inline-flex items-center gap-2 text-white/90 text-sm font-medium tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-white/50" />
              Sobre
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white mb-6">
              Dra. Mariana Bertoja
            </h2>

            <div className="space-y-4 text-white/80 leading-relaxed mb-8 text-lg">
              <p>
                À frente da <strong className="text-white">Mariana Bertoja Sociedade de Advogados</strong> desde 2021, 
                localizada em Gramado/RS, ofereço atendimento híbrido para clientes em todo o Brasil.
              </p>
              <p>
                Minha missão é entregar <strong className="text-white">soluções jurídicas seguras e eficazes</strong> através 
                de um atendimento próximo e personalizado, atuando para fornecer aconselhamento assertivo, 
                mitigar riscos, evitar prejuízos, concretizar bons contratos e potencializar a geração de negócios.
              </p>
              <p>
                Acredito que a advocacia empresarial deve ir além do aspecto técnico-jurídico, 
                compreendendo o <strong className="text-white">contexto de negócios</strong> de cada cliente para 
                oferecer soluções verdadeiramente estratégicas.
              </p>
            </div>

            {/* --- HIGHLIGHTS GRID --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#faf9f6] border border-transparent hover:scale-[1.02] transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    
                    {/* CONTAINER DO ÍCONE (BADGE) */}
                    {/* group-hover:bg-[#783711] -> Fica Marrom Sólido ao passar o mouse */}
                    <div className="w-10 h-10 rounded-lg bg-[#783711]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#783711] transition-colors duration-300">
                      
                      {/* ÍCONE */}
                      {/* group-hover:text-white -> Fica Branco ao passar o mouse */}
                      <item.icon className="w-5 h-5 text-[#783711] group-hover:text-white transition-colors duration-300" />
                    
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-[#542508] mb-1 text-sm">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs text-[#783711]/80 leading-relaxed">
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