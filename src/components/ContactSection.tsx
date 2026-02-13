import { MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import backgroundDT from "../assets/7606445.jpg";
import backgroundMB from "../assets/2629.png";

const ContactSection = () => {
  const whatsappNumber = "5500000000000"; 
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta com a Dra. Mariana Bertoja."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section 
      id="contato" 
      className="py-12 md:py-20 relative overflow-hidden bg-primary"
    >
      {/* --- BACKGROUND RESPONSIVO CORRIGIDO --- */}
      {/* Simplifiquei as divs para garantir que as imagens preencham 100% do espaço vertical */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* IMAGEM DESKTOP */}
        <img 
          src={backgroundDT} 
          alt="Background Desktop" 
          className="hidden md:block max-lg:landscape:block absolute inset-0 w-full h-full object-cover object-center opacity-100"
        />

        {/* IMAGEM MOBILE */}
        <img 
          src={backgroundMB} 
          alt="Background Mobile" 
          /* absolute inset-0 força a colar no teto. object-bottom puxa o padrão para preencher tudo */
          className="block md:hidden max-lg:landscape:hidden absolute inset-0 w-full h-full object-cover object-bottom opacity-100"
        />

      </div>
      
      {/* Overlay Escuro */}
      <div className="absolute inset-0 bg-[#3e2b26]/60 z-0 pointer-events-none" />

      {/* --- DEGRADÊ DE TRANSIÇÃO --- */}
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-t from-[#644e4ea0] to-transparent z-1 pointer-events-none" />

      {/* --- CONTEÚDO --- */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 text-white/80 text-sm font-medium tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-white/50" />
              Contato
              <div className="w-8 h-px bg-white/50" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4">
              Vamos Conversar?
            </h2>

            <p className="text-white/70 max-w-xl mx-auto text-lg">
              Entre em contato para agendar uma consulta ou tirar suas dúvidas.
              Estou pronta para ajudar você e sua empresa.
            </p>
          </div>

          {/* Contact Card (Glassmorphism) */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-12 shadow-2xl mb-4 md:mb-0">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Info Esquerda */}
              <div className="space-y-8">
                
                {/* Item: Localização */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">
                      Localização
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Gramado/RS
                      <br />
                      <span className="text-white font-medium">
                        Atendimento em todo Brasil
                      </span>
                    </p>
                  </div>
                </div>

                {/* Item: Horário */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">
                      Atendimento
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Segunda a Sexta
                      <br />
                      9h às 18h
                    </p>
                  </div>
                </div>

                {/* Citação */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-white/50 italic font-serif">
                    "Contribuir com o desenvolvimento sustentável das empresas
                    por meio de soluções jurídicas que conduzam a relações
                    justas."
                  </p>
                </div>
              </div>

              {/* CTA Direita */}
              <div className="text-center md:text-left">
                <div className="bg-white/10 rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-lg">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-white mb-2">
                    Fale pelo WhatsApp
                  </h3>
                  <p className="text-white/70 text-sm mb-8">
                    Atendimento rápido e personalizado. Respondo em até 24h úteis.
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="w-full md:w-auto px-8 bg-white hover:bg-white/90 text-primary font-bold gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Iniciar Conversa
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;