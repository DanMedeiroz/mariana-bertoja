import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#areas", label: "Áreas de Atuação" },
    { href: "#contato", label: "Contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center transition-colors group-hover:border-primary/50">
              <span className="text-primary font-heading text-2xl font-bold pt-1">MB</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-foreground font-heading text-xl font-semibold tracking-wide block leading-none">
                Mariana Bertoja
              </span>
              <p className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase mt-1 font-medium">
                Advogada
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contato")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-lg animate-in slide-in-from-top-5">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contato")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
