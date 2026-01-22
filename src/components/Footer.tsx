import logoWhite from "@/assets/logo-white.png";
import brandPattern from "@/assets/brand-pattern.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      {/* Brand Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url(${brandPattern})`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoWhite} 
              alt="Mariana Bertoja Advocacia" 
              className="h-20 w-auto"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80">
              Gramado/RS • Atendimento em todo Brasil
            </p>
            <p className="text-xs text-primary-foreground/60 mt-1">
              OAB/RS [Número] {/* Placeholder para o número da OAB */}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <p className="text-center text-xs text-primary-foreground/60">
            © {currentYear} Mariana Bertoja Sociedade de Advogados. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
