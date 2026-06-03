import React from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import embutidosBg from "../assets/backgrounds/embutidos.png";

export default function Embutidos() {
  const items = [
    { name: "Chorizo de Segovia", desc: "Elaborado de forma artesanal siguiendo la receta tradicional de nuestra tierra. Curación lenta, magro selecto y pimentón de calidad." },
    { name: "Chorizo de Cantimpalos", desc: "Auténtico chorizo con Indicación Geográfica Protegida. Sabor característico y curación perfecta en condiciones idóneas." },
    { name: "Salchichón", desc: "Elaborado con piezas selectas de cerdo, condimentado con pimienta en grano y especias naturales. Sabor suave y veteado perfecto." },
    { name: "Lomo embuchado", desc: "Cinta de lomo de cerdo curada en tripa natural. Textura tierna, bajo en grasa y con un aroma extraordinario." },
    { name: "Morcilla", desc: "Morcillas tradicionales de arroz y cebolla. Elaboración artesanal con el punto justo de especias, perfectas para freír o asar." },
    { name: "Chorizo fresco", desc: "Ideal para barbacoas, freír o incorporar a guisos tradicionales. Jugoso, tierno y elaborado con carne de primera." },
    { name: "Longaniza", desc: "Longaniza fresca o curada artesanalmente. Receta tradicional con condimentos naturales y sabor suave y equilibrado." },
    { name: "Torreznos", desc: "Panceta seleccionada y curada lista para cortar y preparar los torreznos más crujientes y tradicionales." },
    { name: "Panceta curada", desc: "Panceta curada al natural. Con la proporción ideal de magro y tocino, indispensable para dar sabor a tus platos de legumbres o asar." }
  ];

  return (
    <section 
      className="section section-dark"
      style={{ 
        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.96)), url(${embutidosBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Sabor de la Tierra</span>
          <h1 className="section-title">Embutidos Artesanales y Curados</h1>
          <p className="section-desc">
            En Carnicería Marino apostamos por la tradición chacinera de Segovia. Ofrecemos una amplia variedad de embutidos curados y frescos de elaboración artesanal, seleccionados para garantizar el auténtico sabor de pueblo en tu mesa.
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
            <h2 className="premium-card-title">Selección a Medida y Envasado</h2>
            <p className="premium-card-text" style={{ marginBottom: "24px" }}>
              ¿Quieres una tabla variada de embutidos o piezas envasadas para llevar de viaje? Llámanos por teléfono y te lo preparamos.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="tel:921543111" className="btn btn-primary">
                <Phone size={18} />
                Llamar al 921 543 111
              </a>
              <Link to="/encargos" className="btn btn-secondary" style={{ color: "var(--text-dark)", borderColor: "rgba(0,0,0,0.15)" }}>
                Cómo hacer encargos
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
