import SpotlightSection from "./ui/spotlight";
import {
  Building2,
  Users,
  FileText,
  Home,
  Briefcase,
  Scale,
} from "lucide-react";

const AreasSection = () => {
  const areas = [
    {
      icon: Building2,
      title: "Direito Empresarial",
      description:
        "Assessoria jurídica completa para empresas, desde a constituição até operações complexas do dia a dia.",
    },
    {
      icon: Users,
      title: "Direito Societário",
      description:
        "Estruturação societária, contratos entre sócios, reorganizações e operações de M&A.",
    },
    {
      icon: FileText,
      title: "Planejamento Patrimonial e Sucessório",
      description:
        "Estratégias para proteção e transmissão de patrimônio, holdings familiares e testamentos.",
    },
    {
      icon: Briefcase,
      title: "Assessoria Jurídica Empresarial",
      description:
        "Acompanhamento contínuo das demandas jurídicas da sua empresa com visão preventiva.",
    },
    {
      icon: Scale,
      title: "Direito Trabalhista",
      description:
        "Consultoria e contencioso trabalhista para empresas, compliance e relações sindicais.",
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description:
        "Contratos imobiliários, due diligence, incorporações e regularização de imóveis.",
    },
  ];

  return (
    <SpotlightSection 
      id="areas" 
      className="py-24 bg-muted/50"
      spotlightColor="rgba(120, 55, 17, 0.08)"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* ALTERADO: text-[#783711] e bg-[#783711] */}
          <div className="inline-flex items-center gap-2 text-[#783711] text-sm font-medium tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-[#783711]" />
            Especialidades
            <div className="w-8 h-px bg-[#783711]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Áreas de Atuação
          </h2>

          <p className="text-muted-foreground">
            Atuação especializada em diversas áreas do Direito, sempre com foco
            no desenvolvimento sustentável das empresas e na proteção dos
            interesses dos clientes.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              // ALTERADO: hover:border-[#783711]/40
              className="group p-8 bg-card rounded-xl border border-border hover:border-[#783711]/40 hover:shadow-lg transition-all duration-300"
            >
              {/* ALTERADO:
                  - bg-[#783711]/10 (Fundo claro do marrom)
                  - group-hover:bg-[#783711] (Fundo sólido ao passar mouse)
              */}
              <div className="w-14 h-14 rounded-xl bg-[#783711]/10 flex items-center justify-center mb-6 group-hover:bg-[#783711] group-hover:scale-110 transition-all duration-300">
                {/* ALTERADO:
                    - text-[#783711] (Ícone marrom)
                    - group-hover:text-white (Ícone branco ao passar mouse)
                */}
                <area.icon className="w-7 h-7 text-[#783711] group-hover:text-white transition-colors" />
              </div>

              {/* ALTERADO: text-[#542508] (Marrom mais escuro para o título, igual no About) */}
              <h3 className="text-xl font-serif font-semibold text-[#542508] mb-3">
                {area.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional areas */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Também atuamos em:{" "}
            {/* ALTERADO: text-[#542508] */}
            <span className="text-[#542508] font-medium">
              Direito Tributário • Direito de Família • Direito de Sucessões • ESG
            </span>
          </p>
        </div>
      </div>
    </SpotlightSection>
  );
};

export default AreasSection;