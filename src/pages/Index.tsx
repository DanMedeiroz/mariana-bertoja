import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AreasSection from "@/components/AreasSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
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

      <div className="min-h-screen bg-background">
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
    </>
  );
};

export default Index;
