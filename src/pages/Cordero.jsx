import React from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import corderoBg from "../assets/backgrounds/cordero.png";

export default function Cordero() {
  const cuts = [
    { name: "Cordero lechal", desc: "El rey de nuestra carnicería. Auténtico lechal de Segovia, caracterizado por su carne tierna, jugosa y de sabor suave incomparable." },
    { name: "Paletilla", desc: "La pieza más apreciada para asar al horno. Textura melosa y jugosa que se deshace en la boca tras una cocción lenta." },
    { name: "Pierna", desc: "Un corte tradicional de gran rendimiento. Ideal para asar entera, trocear para guisos selectos o filetear a la plancha." },
    { name: "Costillar", desc: "Tiras completas listas para asar. Ofrecen un sabor intenso y un tostado crujiente espectacular al horno o a la parrilla." },
    { name: "Chuletillas", desc: "Chuletillas de palo, centro y riñonada. Cortadas con maestría al grosor perfecto, ideales para disfrutar a la brasa o fritas con ajos." },
    { name: "Cordero para asar", desc: "Preparación artesanal lista para el horno. Marcamos la pieza a tu gusto y la preparamos para que tu asado en casa sea un éxito." },
    { name: "Cordero por encargo", desc: "Para tus fechas más señaladas o comidas familiares. Asegura tus piezas enteras o medias con una simple llamada de teléfono." }
  ];

  return (
    <section 
      className="section section-dark"
      style={{ 
        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.96)), url(${corderoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Especialidad de la Casa</span>
          <h1 className="section-title">Cordero Lechal y Cortes Selectos</h1>
          <p className="section-desc">
            En Carnicería Marino, nos enorgullece ofrecer el auténtico cordero lechal, seleccionado directamente para garantizar una carne de máxima finura. Desde nuestras instalaciones en Boceguillas (Segovia), junto a la A-1, abastecemos a clientes de Riaza, Ayllón, Sepúlveda y pueblos de la comarca que buscan la excelencia en sus mesas.
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
            <h2 className="premium-card-title">¿Quieres realizar un encargo?</h2>
            <p className="premium-card-text" style={{ marginBottom: "24px" }}>
              Preparamos tus piezas de cordero lechal y cortes tradicionales tal y como a ti te gusta. Llámanos por teléfono y lo tendremos todo listo a tu llegada.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="tel:921543111" className="btn btn-primary">
                <Phone size={18} />
                Llamar al 921 543 111
              </a>
              <Link to="/encargos" className="btn btn-secondary" style={{ color: "var(--text-dark)", borderColor: "rgba(0,0,0,0.15)" }}>
                Ver condiciones de encargos
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
