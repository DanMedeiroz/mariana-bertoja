import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoDesktop from "../assets/logo-marrom-escuro.png"; 
import logoMobile from "../assets/logo-branca.png"; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 80; 

      setIsScrolled(scrollPosition > 20);

      const darkSectionIds = ["sobre", "depoimentos"];
      let isDark = false;

      darkSectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition + headerHeight >= offsetTop &&
            scrollPosition + headerHeight < offsetTop + offsetHeight
          ) {
            isDark = true;
          }
        }
      });

      setIsOverDarkSection(isDark);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#areas", label: "Áreas de Atuação" },
    { href: "#contato", label: "Contato" },
  ];

  // --- LÓGICA DE ESTILOS SEPARADA ---

  // 1. TEXTO (Links): Fica branco no Topo (Hero) OU sobre seções escuras.
  const useWhiteText = !isMobileMenuOpen && (!isScrolled || isOverDarkSection);

  // 2. LOGO MOBILE:
  const useWhiteLogoMobile = !isMobileMenuOpen && (!isScrolled || isOverDarkSection);
  const mobileLogoSrc = useWhiteLogoMobile ? logoMobile : logoDesktop;

  // 3. LOGO DESKTOP:
  const useWhiteLogoDesktop = !isMobileMenuOpen && isOverDarkSection;
  const desktopLogoSrc = useWhiteLogoDesktop ? logoMobile : logoDesktop;


  // --- LÓGICA DO BACKGROUND ---
  const getHeaderClasses = () => {
    if (isMobileMenuOpen) return "bg-white shadow-sm py-2";
    if (!isScrolled) return "bg-transparent py-4";
    if (isOverDarkSection) return "bg-[#783711] shadow-md py-2";
    return "bg-white shadow-sm py-2";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClasses()}`}
    >
      <div className="container mx-auto px-4 lg:px-8 relative h-20 md:h-20 flex items-center justify-between">
        
        {/* LOGO */}
        {/* Adicionado: landscape:static landscape:translate-y-0 */}
        <a 
          href="#" 
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 group z-20 md:static md:translate-y-0 landscape:static landscape:translate-y-0"
        >
          {/* IMAGEM MOBILE (Some no Desktop e na Landscape) */}
          <img 
            src={mobileLogoSrc} 
            alt="Mariana Bertoja Advocacia" 
            className="w-76 max-w-[80vw] h-auto object-contain md:hidden landscape:hidden transition-opacity duration-300"
          />
          
          {/* IMAGEM DESKTOP (Aparece no Desktop e na Landscape) */}
          <img  
            src={desktopLogoSrc} 
            alt="Mariana Bertoja Advocacia" 
            className="hidden md:block landscape:block h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Espaçador flex (Aparece no Desktop e na Landscape) */}
        <div className="hidden md:flex landscape:flex flex-1" />
        
        {/* LINKS DESKTOP (Aparecem no Desktop e na Landscape) */}
        <div className="hidden md:flex landscape:flex items-center gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`
                text-sm font-medium tracking-wide uppercase transition-colors duration-300
                ${useWhiteText 
                  ? "text-white hover:text-white/80" 
                  : "text-[#783711] hover:text-[#542508]" 
                }
              `}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* BOTÃO HAMBÚRGUER (Some no Desktop e na Landscape) */}
        <button
          className={`md:hidden landscape:hidden p-2 ml-auto transition-all duration-300 relative z-30 ${
            useWhiteText ? "text-white" : "text-[#783711]"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

      </div>

      {/* --- MENU MOBILE DROPDOWN --- */}
      {/* (Some no Desktop e na Landscape) */}
      {isMobileMenuOpen && (
        <div className="md:hidden landscape:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-2 z-10">
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="w-full text-left px-6 py-4 text-[#542508] font-medium tracking-wide uppercase hover:bg-[#783711]/5 hover:text-[#783711] transition-colors border-b border-gray-50 last:border-0"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;