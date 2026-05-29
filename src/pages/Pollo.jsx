import React from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Pollo() {
  const cuts = [
    { name: "Pollo entero", desc: "Pollos limpios y frescos de corral o blancos. Ideales para preparar asados tradicionales en casa o trocear." },
    { name: "Pechuga", desc: "Pechugas enteras extremadamente limpias y frescas. Ideales para filetear, cortar en dados para brochetas o hervir." },
    { name: "Filetes de pollo", desc: "Fileteados finos con precisión. Listos para cocinar a la plancha de forma rápida y saludable, o empanar para los más pequeños." },
    { name: "Muslos", desc: "Piezas muy jugosas y ricas en sabor. Estupendas para asar con patatas, freír con ajos o incorporar en arroces." },
    { name: "Contramuslos", desc: "Cortes jugosos y deshuesados a petición. La parte preferida para guisos melosos, brochetas o rellenos al horno." },
    { name: "Alitas", desc: "Alitas frescas listas para adobar o freír directamente hasta dejarlas crujientes. Ideales para barbacoas o aperitivos." },
    { name: "Pollo para asar", desc: "Preparado de forma tradicional por nuestros carniceros con el atado y sazonado clásico listo para introducir al horno." },
    { name: "Preparados de pollo", desc: "Elaboraciones caseras como brochetas sazonadas, pechugas rellenas y hamburguesas de pollo artesanas hechas en tienda." }
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Fresco y Saludable</span>
          <h1 className="section-title">Carne de Pollo y Aves</h1>
          <p className="section-desc">
            Disponemos de una selección diaria de pollo de máxima frescura. Preparamos cualquier corte con esmero: fileteado fino, troceado para arroces o preparados rellenos listos para cocinar. Calidad y ligereza en tu mesa.
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
            <h2 className="premium-card-title">Preparados Caseros de Pollo</h2>
            <p className="premium-card-text" style={{ marginBottom: "24px" }}>
              ¿Quieres brochetas preparadas o hamburguesas de pollo artesanas? Llámanos para dejarlas listas antes de que pases por tienda.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="tel:921543111" className="btn btn-primary">
                <Phone size={18} />
                Llamar al 921 543 111
              </a>
              <Link to="/contacto" className="btn btn-secondary" style={{ color: "var(--text-dark)", borderColor: "rgba(0,0,0,0.15)" }}>
                Contacto y Ubicación
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
