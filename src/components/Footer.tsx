import { MapPin } from "lucide-react";
import logoCircular from "../assets/icone.png";
import footerBg from "../assets/fundo-footer.jpg"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative bg-top bg-repeat bg-[length:100%_auto] md:bg-[length:33.33%_auto] text-gray-800 py-16"
      style={{ 
        backgroundImage: `url(${footerBg})`
      }}
    >
      {/* --- NOVO: DEGRADÊ NO TOPO DO FOOTER (O "ESPELHO") --- */}
      {/* - absolute top-0: Fica no topo.
         - h-32: Altura da suavização.
         - bg-gradient-to-b: Degradê de CIMA para BAIXO.
         - from-[#F9F9F9]: Começa sólido na cor do fundo (esconde o corte da imagem).
         - to-transparent: Vai revelando a textura do footer suavemente.
      */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F9F9F9] via-[#F9F9F9]/60 to-transparent z-10 pointer-events-none" />


      {/* Overlay padrão do footer (mantido) */}
      <div className="absolute inset-0 bg-[#F9F9F9]/85 z-0" />

      {/* Conteúdo - z-20 para ficar acima do degradê novo */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 pt-6"> {/* Adicionei um pt-6 leve para compensar */}
          
          {/* --- BLOCO ESQUERDA --- */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            
            {/* LOGO */}
            <img 
              src={logoCircular} 
              alt="Logo MB" 
              className="w-20 h-20 object-contain filter drop-shadow-sm" 
            />

            <div>
              <span className="font-serif text-xl font-bold text-primary block">
                Mariana Bertoja
              </span>
              <p className="text-xs text-gray-600 tracking-[0.2em] uppercase font-medium mt-1">
                Sociedade de Advogados
              </p>
            </div>
          </div>

          {/* --- BLOCO DIREITA --- */}
          <div className="text-center md:text-right space-y-2">
            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="text-sm font-semibold text-gray-700">
                Gramado/RS
              </span>
              <span className="text-sm text-gray-500">
                Atendimento em todo Brasil
              </span>
            </div>
            <p className="text-xs text-primary/80 font-medium">
              OAB/RS [Número]
            </p>
          </div>
        </div>

        {/* --- DIVISÓRIA --- */}
        <div className="border-t border-primary/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-xs text-gray-400">
            © {currentYear} Mariana Bertoja Sociedade de Advogados.
          </p>
          <p className="text-xs text-gray-400">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;