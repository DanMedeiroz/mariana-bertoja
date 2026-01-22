import { Award, Users, Scale, Target } from "lucide-react";
import marianaAbout from "@/assets/mariana-about.jpg";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Formação Sólida",
      description: "Graduada em Direito pela UCS e pós-graduada em Processo Civil pela PUC/RS",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Relacionamento próximo com cada cliente, entendendo suas necessidades específicas",
    },
    {
      icon: Scale,
      title: "Visão de Negócios",
      description: "Atuação que vai além do jurídico, compreendendo o contexto empresarial",
    },
    {
      icon: Target,
      title: "Abordagem Preventiva",
      description: "Foco em mitigar riscos e evitar prejuízos antes que aconteçam",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-lg" />
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
              <img 
                src={marianaAbout} 
                alt="Dra. Mariana Bertoja" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary" />
              Sobre
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
              Dra. Mariana Bertoja
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                À frente da <strong className="text-foreground">Mariana Bertoja Sociedade de Advogados</strong> desde 2021, 
                localizada em Gramado/RS, ofereço atendimento híbrido para clientes em todo o Brasil.
              </p>
              <p>
                Minha missão é entregar <strong className="text-foreground">soluções jurídicas seguras e eficazes</strong> através 
                de um atendimento próximo e personalizado, atuando para fornecer aconselhamento assertivo, 
                mitigar riscos, evitar prejuízos, concretizar bons contratos e potencializar a geração de negócios.
              </p>
              <p>
                Acredito que a advocacia empresarial deve ir além do aspecto técnico-jurídico, 
                compreendendo o <strong className="text-foreground">contexto de negócios</strong> de cada cliente para 
                oferecer soluções verdadeiramente estratégicas.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
