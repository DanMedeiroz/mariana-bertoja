import { MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappNumber = "5500000000000"; // Placeholder - substituir pelo número real
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta com a Dra. Mariana Bertoja."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary" />
              Contato
              <div className="w-8 h-px bg-primary" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
              Vamos Conversar?
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto">
              Entre em contato para agendar uma consulta ou tirar suas dúvidas.
              Estou pronta para ajudar você e sua empresa.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Localização
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Gramado/RS
                      <br />
                      <span className="text-primary">
                        Atendimento em todo Brasil
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Atendimento
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Segunda a Sexta
                      <br />
                      9h às 18h
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "Contribuir com o desenvolvimento sustentável das empresas
                    por meio de soluções jurídicas que conduzam a relações
                    justas e que agreguem valor às partes."
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center md:text-left">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto md:mx-0 mb-6">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    Fale pelo WhatsApp
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Atendimento rápido e personalizado. Respondo em até 24h
                    úteis.
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full md:w-auto px-8"
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
