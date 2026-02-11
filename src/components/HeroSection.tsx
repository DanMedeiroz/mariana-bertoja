import { MapPin, ChevronDown } from "lucide-react";
import heroBgDesktop from "../assets/hero-bg-desktop.jpg";
import heroBgMobile from "../assets/hero-bg-mobile.jpg"; 

const HeroSection = () => {

  return (
    <section className="relative w-full h-[100svh] min-h-[400px] md:min-h-[600px] flex flex-col md:flex-row landscape:flex-row items-center overflow-hidden">
      
      {/* --- BACKGROUNDS --- */}
      
      {/* MOBILE BG (Vertical): 
          Adicionei 'landscape:hidden' para esconder essa foto quando deitar o celular */}
      <div 
        className="absolute inset-0 z-0 md:hidden landscape:hidden bg-cover bg-[center_top]"
        style={{ backgroundImage: `url(${heroBgMobile})` }}
      />
      
      {/* DESKTOP BG (Horizontal): 
          Adicionei 'landscape:block' para FORÇAR essa foto aparecer quando deitar */}
      <div 
        className="absolute inset-0 z-0 hidden md:block landscape:block bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBgDesktop})`,
          backgroundPosition: 'right center'
        }}
      />

      {/* --- SOMBRAS (Overlays) --- */}
      
      {/* Mobile Overlay: Esconde na landscape */}
      <div className="absolute inset-0 z-10 md:hidden landscape:hidden bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
      
      {/* Desktop Overlay: Mostra na landscape */}
      <div className="absolute inset-0 z-10 hidden md:block landscape:block bg-gradient-to-r from-background via-background/20 to-transparent" />
      
      {/* Elemento Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-primary/5 mix-blend-overlay pointer-events-none"></div>


      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="container relative z-20 h-full mx-auto px-4 lg:px-8 flex flex-col justify-center">
        
        {/* ESPAÇADOR MOBILE: 
            Adicionei 'landscape:hidden'.
            Quando deitar o celular, não queremos esse espaço vazio no topo, 
            queremos que o texto fique centralizado ao lado da foto. */}
        <div className="h-[15svh] md:hidden landscape:hidden shrink-0"></div>

        {/* ÁREA DO TEXTO */}
        <div className="
             flex flex-col 
             justify-start md:justify-center landscape:justify-center
             h-full md:h-auto landscape:h-auto
             max-w-3xl w-full 
             text-left
             /* Na landscape, limitamos a largura para não pegar na foto da Mariana */
             landscape:max-w-[50%] md:max-w-xl
        ">
          
          {/* Título */}
          <h1 className="
              text-3xl xs:text-4xl sm:text-5xl lg:text-6xl 
              font-serif font-bold tracking-tight 
              text-white md:text-foreground landscape:text-foreground
              leading-[1.1] 
              mb-4 
              opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.4s" }}
          >
            Soluções jurídicas que{" "}
            <span className="text-primary block md:inline landscape:inline">
              potencializam
            </span>{" "}
            seu negócio
          </h1>

          {/* Parágrafo */}
          <p className="
              text-base xs:text-lg sm:text-xl 
              text-gray-200 md:text-muted-foreground landscape:text-muted-foreground
              leading-relaxed 
              mb-6 md:mb-10 landscape:mb-6
              max-w-[90%] md:max-w-xl 
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
              gap-3 
              text-gray-300 md:text-muted-foreground landscape:text-muted-foreground
              opacity-0 animate-fade-in" 
              style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-primary/20 md:bg-primary/10 border border-primary/20 shrink-0">
                 <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium tracking-wide">
                Gramado/RS
                <span className="hidden sm:inline"> • </span>
              </span>
            </div>
            
            <span className="text-sm font-medium tracking-wide pl-11 sm:pl-0">
               Atendimento em todo Brasil
            </span>
          </div>

        </div>
      </div>

      {/* Indicador de Scroll (Escondemos se a altura for muito pequena na landscape) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in flex flex-col items-center gap-2 text-white/50 md:text-foreground/50 landscape:text-foreground/50 landscape:hidden" style={{ animationDelay: "1.5s" }}>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>

    </section>
  );
};

export default HeroSection;