import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-secondary/30" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest uppercase mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-8 h-px bg-primary" />
              Advocacia Empresarial
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Soluções jurídicas que{" "}
              <span className="text-primary">potencializam</span> seu negócio
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              Atendimento personalizado e especializado para empresas que buscam
              segurança jurídica, mitigação de riscos e crescimento sustentável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8"
              >
                <MessageCircle className="w-5 h-5" />
                Fale pelo WhatsApp
              </Button>
            </div>

            <div className="flex items-center gap-2 justify-center lg:justify-start text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">
                Gramado/RS • Atendimento em todo Brasil
              </span>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-in-right" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl" />
              
              {/* Photo placeholder */}
              <div className="relative w-80 h-[28rem] sm:w-96 sm:h-[32rem] bg-gradient-to-b from-secondary to-muted rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-4xl font-serif text-primary">MB</span>
                  </div>
                  <p className="text-sm uppercase tracking-widest">Foto Profissional</p>
                  <p className="text-xs mt-1">Dra. Mariana Bertoja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
