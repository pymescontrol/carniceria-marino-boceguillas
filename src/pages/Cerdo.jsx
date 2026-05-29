import React from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Cerdo() {
  const cuts = [
    { name: "Lomo", desc: "Cinta de lomo fresca y limpia. Perfecta para filetear al grosor deseado para plancha o para asar entera en el horno." },
    { name: "Chuletas", desc: "Chuletas de aguja y de lomo. Carne de cerdo muy sabrosa y tierna, excelente para una preparación rápida a la plancha o a la brasa." },
    { name: "Costillas", desc: "Costillar fresco de cerdo entero o troceado. Imprescindible para barbacoas o para guisar con patatas con un sabor casero único." },
    { name: "Panceta", desc: "Tiras con la proporción ideal de carne magra y veta de grasa. Perfectas para asar a la parrilla u hornear hasta lograr un toque crujiente." },
    { name: "Secreto", desc: "Uno de los cortes más jugosos por su veteado de grasa intramuscular. Exquisito a la plancha con fuego fuerte y sal en escamas." },
    { name: "Pluma", desc: "Pieza noble situada junto al lomo. De textura jugosa y sabor delicado, ideal para cocinar al punto a la plancha o brasa." },
    { name: "Presa", desc: "Corte jugoso y con gran concentración de sabor. De color rojo intenso y textura tierna, muy valorada para barbacoas." },
    { name: "Torreznos", desc: "Nuestra especialidad para elaborar torreznos con una corteza crujiente y un interior jugoso. Tradición en cada bocado." },
    { name: "Adobados", desc: "Lomo, costillas y panceta adobados artesanalmente siguiendo la receta tradicional de la casa. Sabor intenso y de siempre." }
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Sabor y Tradición</span>
          <h1 className="section-title">Carne de Cerdo y Especialidades</h1>
          <p className="section-desc">
            Ofrecemos carne de cerdo fresca y adobados tradicionales elaborados por nosotros. Desde cortes selectos como el secreto o la presa hasta nuestros famosos torreznos listos para freír, garantizamos calidad en cada pieza.
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
            <h2 className="premium-card-title">Torreznos y Adobados para llevar</h2>
            <p className="premium-card-text" style={{ marginBottom: "24px" }}>
              ¿Estás planeando una barbacoa o quieres probar nuestros adobados caseros? Llámanos por teléfono para preparar tu pedido personalizado.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="tel:921543111" className="btn btn-primary">
                <Phone size={18} />
                Llamar al 921 543 111
              </a>
              <Link to="/productos" className="btn btn-secondary" style={{ color: "var(--text-dark)", borderColor: "rgba(0,0,0,0.15)" }}>
                Ver otras categorías
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
