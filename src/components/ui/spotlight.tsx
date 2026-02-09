import { useRef, useState } from "react";

const SpotlightSection = ({ 
  children, 
  className = "", 
  id = "",
  // Cor padrão do brilho (ajustaremos conforme o fundo da seção)
  spotlightColor = "rgba(255, 255, 255, 0.03)" 
}) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <section
      id={id}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* O SPOTLIGHT (Fundo) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 hidden md:block z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Conteúdo da Seção (z-10 para ficar acima do brilho) */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SpotlightSection;