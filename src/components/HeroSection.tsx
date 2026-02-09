import { MapPin, ChevronDown } from "lucide-react";
// Removi o import do Button pois não vamos mais usar

import heroBgDesktop from "../assets/hero-bg-desktop.jpg";
import heroBgMobile from "../assets/hero-bg-mobile.jpg"; 

const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* --- BACKGROUNDS --- */}
      <div 
        className="absolute inset-0 z-0 md:hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBgMobile})` }}
      />
      <div 
        className="absolute inset-0 z-0 hidden md:block bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBgDesktop})`,
          backgroundPosition: 'right center'
        }}
      />

      {/* --- SOMBRAS (Overlays) --- */}
      {/* Mobile: Gradiente reforçado no topo para leitura */}
      <div className="absolute inset-0 z-10 md:hidden bg-gradient-to-b from-black/80 via-transparent to-transparent" />
      
      {/* Desktop */}
      <div className="absolute inset-0 z-10 hidden md:block bg-gradient-to-r from-background via-background/20 to-transparent" />
      
      {/* Luz Dourada */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-primary/5 mix-blend-overlay pointer-events-none"></div>


      {/* --- CONTEÚDO --- */}
      <div className="
          container mx-auto px-4 lg:px-8 relative z-20 h-full 
          flex flex-col 
          
          /* MOBILE: Alinha no topo e puxa para cima com margem negativa */
          justify-start -mt-[350px] 
          
          /* DESKTOP (CORREÇÃO AQUI): Zera a margem negativa e centraliza verticalmente */
          md:mt-0 md:justify-center
      ">

        <div className="max-w-3xl w-full mx-auto md:mx-0">
          
          {/* Título Principal */}
          <h1 className="
              text-3xl sm:text-4xl lg:text-6xl 
              font-serif font-bold tracking-tight 
              text-white md:text-foreground 
              leading-tight 
              mb-3 md:mb-6 
              text-left   /* Mobile: Direita | Desktop: Esquerda */
              opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.4s" }}
          >
            Soluções jurídicas que{" "}
            <span className="text-primary">
              potencializam
            </span>{" "}
            seu negócio
          </h1>

          {/* Parágrafo */}
          <p className="
              text-lg sm:text-xl 
              text-gray-200 md:text-muted-foreground 
              leading-relaxed 
              mb-6 md:mb-10 
              max-w-xl 
              ml-auto md:ml-0           /* Joga para a direita no Mobile */
              text-left   /* Alinha texto à direita no Mobile */
              opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.6s" }}
          >
            Atendimento personalizado e especializado para empresas que buscam 
            segurança <br className="md:hidden" />jurídica, mitigação de riscos e <br className="md:hidden" />crescimento sustentável.
          </p>

          {/* Localização (Pin) */}
          <div className="
              flex flex-col md:flex-row 
              items-start md:items-center 
              justify-start 
              gap-3
              mr-auto md:ml-0 
              text-gray-300 md:text-muted-foreground 
              opacity-0 animate-fade-in" 
              style={{ animationDelay: "1s" }}
          >
            <div className="p-2 rounded-full bg-primary/20 md:bg-primary/10 border border-primary/20">
               <MapPin className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-medium tracking-wide text-left">
              Gramado/RS
              <span className="block md:inline md:before:content-['_•_']">
                Atendimento em <br className="md:hidden" />todo Brasil
              </span>
            </span>
          </div>

        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in flex flex-col items-center gap-2 text-white/50 md:text-foreground/50" style={{ animationDelay: "1.5s" }}>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>

    </section>
  );
};

export default HeroSection;