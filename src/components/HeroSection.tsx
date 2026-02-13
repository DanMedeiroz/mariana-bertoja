import { MapPin, ChevronDown } from "lucide-react";
import heroBgDesktop from "../assets/hero-bg-desktop.jpg";
import heroBgMobile from "../assets/hero-bg-mobile.jpg"; 

const HeroSection = () => {

  return (
    <section className="relative w-full h-[100svh] min-h-[400px] md:min-h-[600px] flex flex-col md:flex-row max-lg:landscape:flex-row items-center overflow-hidden">
      
      {/* --- BACKGROUNDS --- */}
      <div 
        className="absolute inset-0 z-0 md:hidden max-lg:landscape:hidden bg-cover bg-[center_top]"
        style={{ backgroundImage: `url(${heroBgMobile})` }}
      />
      
      <div 
        className="absolute inset-0 z-0 hidden md:block max-lg:landscape:block bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBgDesktop})`,
          backgroundPosition: 'right center'
        }}
      />

      {/* --- SOMBRAS (Overlays) --- */}
      <div className="absolute inset-0 z-10 md:hidden max-lg:landscape:hidden bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 z-10 hidden md:block max-lg:landscape:block bg-gradient-to-r from-background via-background/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-primary/5 mix-blend-overlay pointer-events-none"></div>


      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="container relative z-20 h-full mx-auto px-4 lg:px-8 flex flex-col justify-center">
        
        <div className="h-[15svh] md:hidden max-lg:landscape:hidden shrink-0"></div>

        {/* ÁREA DO TEXTO */}
        <div className="
             relative
             flex flex-col 
             justify-start md:justify-center max-lg:landscape:justify-center
             h-full md:h-auto max-lg:landscape:h-auto
             max-w-3xl w-full 
             text-left
             max-lg:landscape:max-w-[50%] md:max-w-xl
             
             /* --- AFASTAR DO CABEÇALHO SÓ NO CELULAR HORIZONTAL --- */
             max-lg:landscape:pt-12 md:pt-0
        ">
          
          {/* Título */}
          <h1 className="
              text-3xl sm:text-5xl md:text-5xl lg:text-6xl max-lg:landscape:text-2xl 
              font-serif font-bold tracking-tight 
              text-white md:text-foreground max-lg:landscape:text-foreground
              leading-[1.1] 
              mb-4 md:mb-6 max-lg:landscape:mb-2 
              opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.4s" }}
          >
            Soluções jurídicas que{" "}
            <span className="text-primary block md:inline max-lg:landscape:inline">
              potencializam
            </span>{" "}
            seu negócio
          </h1>

          {/* Parágrafo */}
          <p className="
              text-base xs:text-lg sm:text-xl md:text-xl max-lg:landscape:text-sm 
              text-gray-200 md:text-muted-foreground max-lg:landscape:text-muted-foreground
              leading-relaxed md:leading-relaxed max-lg:landscape:leading-snug 
              mb-6 md:mb-10 max-lg:landscape:mb-4 
              max-w-[90%] md:max-w-xl max-lg:landscape:max-w-full 
              opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.6s" }}
          >
            Atendimento personalizado e especializado para empresas que buscam 
            segurança jurídica, mitigação de riscos e crescimento sustentável.
          </p>

          {/* Localização */}
          <div className="
              flex flex-col sm:flex-row 
              items-start sm:items-center 
              gap-3 md:gap-3 max-lg:landscape:gap-2 
              
              /* --- MOBILE VERTICAL: Fixo mais embaixo e fonte clara --- */
              absolute bottom-8 left-0 text-white
              
              /* --- DESKTOP E CELULAR HORIZONTAL: Volta ao fluxo normal --- */
              md:static md:bottom-auto md:left-auto md:text-muted-foreground md:mt-4
              max-lg:landscape:static max-lg:landscape:bottom-auto max-lg:landscape:left-auto max-lg:landscape:text-muted-foreground max-lg:landscape:mt-2
              
              opacity-0 animate-fade-in" 
              style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-2">
              <div className="p-2 md:p-2 max-lg:landscape:p-1.5 rounded-full bg-primary/20 md:bg-primary/10 border border-primary/20 shrink-0">
                 <MapPin className="w-4 h-4 md:w-4 md:h-4 max-lg:landscape:w-3 max-lg:landscape:h-3 text-primary" />
              </div>
              <span className="text-sm md:text-sm max-lg:landscape:text-xs font-medium tracking-wide">
                Gramado/RS
                <span className="hidden sm:inline"> • </span>
              </span>
            </div>
            
            <span className="text-sm md:text-sm max-lg:landscape:text-xs font-medium tracking-wide pl-11 sm:pl-0">
               Atendimento em todo Brasil
            </span>
          </div>

        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in flex flex-col items-center gap-2 text-white/50 md:text-foreground/50 max-lg:landscape:hidden" style={{ animationDelay: "1.5s" }}>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>

    </section>
  );
};

export default HeroSection;