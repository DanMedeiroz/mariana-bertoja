const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream/80 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-serif text-lg font-bold">
                MB
              </span>
            </div>
            <div>
              <span className="font-serif text-lg font-semibold text-cream">
                Mariana Bertoja
              </span>
              <p className="text-xs text-cream/60 tracking-widest uppercase">
                Sociedade de Advogados
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-right">
            <p className="text-sm text-cream/60">
              Gramado/RS • Atendimento em todo Brasil
            </p>
            <p className="text-xs text-cream/40 mt-1">
              OAB/RS [Número] {/* Placeholder para o número da OAB */}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 mt-8 pt-8">
          <p className="text-center text-xs text-cream/40">
            © {currentYear} Mariana Bertoja Sociedade de Advogados. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
