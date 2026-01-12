import { useState, useEffect } from "react"; // Lógica do mouse/cursor
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AreasSection from "@/components/AreasSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  // 1. Lógica do efeito Spotlight
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Captura a posição X e Y do mouse na tela
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Mariana Bertoja | Advogada Empresarial</title>
        <meta
          name="description"
          content="Advogada especializada em Direito Empresarial, Societário e Planejamento Patrimonial. Atendimento personalizado em Gramado/RS e todo Brasil."
        />
        <meta
          name="keywords"
          content="advogada empresarial, direito societário, planejamento patrimonial, assessoria jurídica, Gramado, RS"
        />
        <link rel="canonical" href="https://marianabertoja.com.br" />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        
        {/* A Camada da Luz (Fica no fundo, z-0) */}
        <div
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.4), transparent 50%)`,
          }}
        />

        {/* O Conteúdo do Site (Fica por cima, z-10) */}
        <div className="relative z-10">
          
        <Header />
        <main>
            <HeroSection />
            <AboutSection />
            <AreasSection />
            <ContactSection />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </>
  );
};

export default Index;
