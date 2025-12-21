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
    <section id="areas" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-primary" />
            Especialidades
            <div className="w-8 h-px bg-primary" />
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
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <area.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
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
            <span className="text-foreground font-medium">
              Direito Tributário • Direito de Família • Direito de Sucessões • ESG
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
