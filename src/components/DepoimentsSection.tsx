import SpotlightSection from "./ui/spotlight";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const depoimentos = [
  {
    id: 1,
    texto:
      "A Mariana transformou a gestão jurídica da nossa empresa. Seu atendimento personalizado e visão estratégica foram essenciais para o crescimento sustentável do nosso negócio.",
    autor: "Nome 1",
    cargo: "Cargo, Empresa",
  },
  {
    id: 2,
    texto:
      "Profissionalismo e comprometimento excepcionais. A assessoria preventiva da Dra. Mariana nos poupou de diversos problemas que poderiam ter sido muito custosos.",
    autor: "Nome 2",
    cargo: "Cargo, Empresa",
  },
  {
    id: 3,
    texto:
      "Encontrar uma advogada que entende as particularidades do nosso setor foi fundamental. A Mariana se tornou uma verdadeira parceira estratégica da empresa.",
    autor: "Nome 3",
    cargo: "Cargo, Empresa",
  },
];

const DepoimentosSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? depoimentos.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === depoimentos.length - 1 ? 0 : c + 1));
  };

  return (
    // 1. AJUSTE DE ESPAÇAMENTO: py-24 (igual ao AreasSection) para alinhar a altura
    // 2. AJUSTE DE COR: bg-gradient marrom (Dark Mode)
    <SpotlightSection 
      id="depoimentos" 
      className="py-24 bg-gradient-to-br from-[#783711] to-[#542508]"
      spotlightColor="rgba(255, 255, 255, 0.03)"
    >
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Tag na cor Creme/Bege */}
          <div className="inline-flex items-center gap-2 text-[#faf9f6]/90 text-sm font-medium tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-[#faf9f6]/50" />
            Depoimentos
            <div className="w-8 h-px bg-[#faf9f6]/50" />
          </div>

          {/* Título em Branco/Creme */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-[#faf9f6] mb-6">
            O que Nossos Clientes Dizem
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Ícone de Citação (Bubble) */}
          {/* Fundo Creme Sólido (bg-[#faf9f6]) para destacar no marrom */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#faf9f6] rounded-full flex items-center justify-center z-10 shadow-lg ring-4 ring-[#542508]/20">
            {/* Ícone Marrom dentro da bolinha bege */}
            <Quote className="w-6 h-6 text-[#783711] fill-current" />
          </div>

          {/* Card */}
          {/* Fundo Vidro/Transparente (bg-white/5) para o texto bege sobressair */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 pt-12 text-center relative overflow-hidden shadow-2xl backdrop-blur-sm">
            {/* Elementos Decorativos Sutis */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 pt-4">
              {/* Conteúdo */}
              <div key={depoimentos[current].id} className="animate-fade-in">
                {/* Texto do Depoimento em Creme (Itálico) */}
                <p className="text-lg md:text-xl text-[#faf9f6]/90 leading-relaxed mb-8 italic font-serif">
                  "{depoimentos[current].texto}"
                </p>
                
                <div>
                  {/* Nome do Autor em Branco Sólido */}
                  <p className="font-semibold text-white mb-1 text-lg">
                    {depoimentos[current].autor}
                  </p>
                  {/* Cargo em Creme Translúcido */}
                  <p className="text-sm text-[#faf9f6]/60 font-medium">
                    {depoimentos[current].cargo}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controles de Navegação */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              // Botões com borda e ícone bege, acendendo o fundo ao passar o mouse
              className="w-10 h-10 rounded-full border border-[#faf9f6]/30 text-[#faf9f6] hover:bg-[#faf9f6] hover:text-[#783711] flex items-center justify-center transition-all duration-300"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots (Indicadores) */}
            <div className="flex gap-2">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-[#faf9f6] w-6" // Ativo: Bege Sólido
                      : "bg-[#faf9f6]/20 w-2 hover:bg-[#faf9f6]/50" // Inativo: Translúcido
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#faf9f6]/30 text-[#faf9f6] hover:bg-[#faf9f6] hover:text-[#783711] flex items-center justify-center transition-all duration-300"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </SpotlightSection>
  );
};

export default DepoimentosSection;