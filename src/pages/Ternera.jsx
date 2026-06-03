import React from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import terneraBg from "../assets/backgrounds/ternera.png";

export default function Ternera() {
  const cuts = [
    { name: "Filetes", desc: "Filetes de ternera tiernos y jugosos, cortados al momento. Ideales para la plancha, empanar o cocinar a la vuelta y vuelta." },
    { name: "Entrecot", desc: "Corte noble con infiltración grasa óptima. Garantiza un sabor intenso y una textura sumamente tierna a la plancha o barbacoa." },
    { name: "Chuletón", desc: "La pieza estrella para los amantes de la buena carne. Carne madurada en su punto, ideal para preparar a la brasa o a la piedra." },
    { name: "Solomillo", desc: "El corte más tierno y magro de la ternera. De textura finísima, perfecto para medallones a la plancha con un toque de sal gorda." },
    { name: "Morcillo", desc: "Corte gelatinoso y sabroso. Imprescindible para elaborar un buen cocido tradicional o guisos de cocción prolongada." },
    { name: "Carrilleras", desc: "Piezas melosas de extraordinaria ternura tras una cocción lenta. Ideales para preparar al vino tinto o estofadas." },
    { name: "Carne para guisar", desc: "Tacos de ternera seleccionados y limpios de grasa superflua. Quedan extremadamente tiernos en guisos, estofados y calderetas." },
    { name: "Carne picada", desc: "Picada al momento de piezas magras seleccionadas. Frescura garantizada para tus albóndigas, lasañas o rellenos." },
    { name: "Hamburguesas", desc: "Elaboradas de forma artesanal con carne de ternera seleccionada y condimentos naturales, sin añadidos artificiales." }
  ];

  return (
    <section 
      className="section section-dark"
      style={{ 
        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.96)), url(${terneraBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Calidad Premium</span>
          <h1 className="section-title">Carne de Ternera Seleccionada</h1>
          <p className="section-desc">
            En Carnicería Marino seleccionamos personalmente cada pieza para ofrecer una ternera tierna, jugosa y de sabor extraordinario. Trabajamos cortes tradicionales y piezas nobles preparadas con esmero y con el corte exacto que requiere cada una de tus recetas.
          </p>
        </div>

        <div className="products-grid">
          {cuts.map((cut, idx) => (
            <motion.div
              key={cut.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="product-item-card"
              style={{ flexDirection: "column", alignItems: "flex-start", gap: "12px", padding: "24px 28px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                <span className="product-item-name" style={{ fontSize: "1.25rem" }}>{cut.name}</span>
                <div className="product-item-icon">
                  <ChevronRight size={18} />
                </div>
              </div>
              <p style={{ color: "var(--text-dark-muted)", fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>
                {cut.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}>
          <div className="premium-card" style={{ maxWidth: "600px", textAlign: "center", alignItems: "center" }}>
            <h2 className="premium-card-title">Encargos y Preparación a Medida</h2>
            <p className="premium-card-text" style={{ marginBottom: "24px" }}>
              ¿Necesitas chuletones para una barbacoa o carne picada al momento? Llámanos para preparar tu pedido y recogerlo sin esperas en nuestra carnicería de Boceguillas.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="tel:921543111" className="btn btn-primary">
                <Phone size={18} />
                Llamar al 921 543 111
              </a>
              <Link to="/contacto" className="btn btn-secondary" style={{ color: "var(--text-dark)", borderColor: "rgba(0,0,0,0.15)" }}>
                Contacto y Horarios
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
