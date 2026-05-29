import React from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Jamones() {
  const items = [
    { name: "Jamón curado", desc: "Piezas selectas curadas con esmero en su punto óptimo de maduración. Textura, aroma y sabor tradicionales." },
    { name: "Paleta", desc: "Paletas curadas de gran jugosidad y sabor intenso. Perfectas para un consumo ágil y disfrute diario." },
    { name: "Jamón loncheado", desc: "Cortado a cuchillo o a máquina fina por nuestros profesionales y envasado al vacío para mantener intacto su aroma y frescura." },
    { name: "Tacos de jamón", desc: "Tacos de jamón curado limpios y listos para picar, incorporar a tus recetas tradicionales o saltear con verduras frescas." },
    { name: "Huesos de jamón", desc: "Huesos de jamón curado seleccionados para dar un sabor profundo, tradicional y único a tus caldos, cocidos y legumbres." },
    { name: "Preparados para regalo", desc: "Presentaciones elegantes idóneas para obsequiar. Cestas personalizadas con jamón loncheado, piezas enteras y embutidos selectos." }
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Charcutería Selecta</span>
          <h1 className="section-title">Jamones y Paletas Curadas</h1>
          <p className="section-desc">
            En Carnicería Marino disponemos de una excelente selección de jamones y paletas en su punto justo de curación. Ya sea en pieza entera, cortado al momento o en cómodos sobres loncheados listos para servir, garantizamos un producto de calidad.
          </p>
        </div>

        <div className="products-grid">
          {items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="product-item-card"
              style={{ flexDirection: "column", alignItems: "flex-start", gap: "12px", padding: "24px 28px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                <span className="product-item-name" style={{ fontSize: "1.25rem" }}>{item.name}</span>
                <div className="product-item-icon">
                  <ChevronRight size={18} />
                </div>
              </div>
              <p style={{ color: "var(--text-dark-muted)", fontSize: "0.95rem", lineHeight: 1.5, margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}>
          <div className="premium-card" style={{ maxWidth: "600px", textAlign: "center", alignItems: "center" }}>
            <h2 className="premium-card-title">Encargos y Envasado al Vacío</h2>
            <p className="premium-card-text" style={{ marginBottom: "24px" }}>
              ¿Quieres una pieza entera o prefieres que te la preparemos en cómodos sobres loncheados? Llámanos para hacer tu pedido especial.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="tel:921543111" className="btn btn-primary">
                <Phone size={18} />
                Llamar al 921 543 111
              </a>
              <Link to="/contacto" className="btn btn-secondary" style={{ color: "var(--text-dark)", borderColor: "rgba(0,0,0,0.15)" }}>
                Ubicación y Contacto
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
