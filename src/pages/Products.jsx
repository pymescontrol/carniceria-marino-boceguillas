import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  const families = [
    {
      name: "Cordero",
      path: "/cordero",
      desc: "Especialistas en cordero lechal. Paletillas, chuletillas y piezas preparadas por encargo.",
      count: "7 variedades"
    },
    {
      name: "Ternera",
      path: "/ternera",
      desc: "Cortes de primera calidad de ternera seleccionada: chuletones, entrecot, solomillo y más.",
      count: "9 variedades"
    },
    {
      name: "Cerdo",
      path: "/cerdo",
      desc: "Excelente carne de cerdo: lomo, panceta, secreto, pluma y torreznos deliciosos.",
      count: "9 variedades"
    },
    {
      name: "Jamones",
      path: "/jamones",
      desc: "Jamón curado de alta calidad, paletas enteras, loncheado selecto y preparados especiales.",
      count: "6 variedades"
    },
    {
      name: "Pollo",
      path: "/pollo",
      desc: "Pollo fresco entero, pechugas tiernas, filetes, alitas y preparados listos para cocinar.",
      count: "8 variedades"
    },
    {
      name: "Embutidos",
      path: "/embutidos",
      desc: "Tradición artesanal: chorizo de Segovia, de Cantimpalos, salchichón, lomo embuchado y más.",
      count: "9 variedades"
    }
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Nuestra Selección</span>
          <h1 className="section-title">Familias de Productos</h1>
          <p className="section-desc">
            Haz clic en cualquiera de nuestras categorías para descubrir en detalle los cortes selectos, preparados tradicionales y piezas de calidad que tenemos a tu disposición.
          </p>
        </div>

        <div className="products-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
          {families.map((family, idx) => (
            <motion.div
              key={family.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link to={family.path} className="product-item-card" style={{ textDecoration: "none", flexDirection: "column", alignItems: "flex-start", gap: "16px", padding: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div className="product-item-icon" style={{ margin: 0 }}>
                      <ShoppingBag size={20} />
                    </div>
                    <span className="product-item-name" style={{ fontSize: "1.4rem", margin: 0 }}>{family.name}</span>
                  </div>
                  <div className="product-item-icon" style={{ margin: 0 }}>
                    <ChevronRight size={18} />
                  </div>
                </div>
                
                <p style={{ color: "var(--text-dark-muted)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                  {family.desc}
                </p>
                
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "8px" }}>
                  {family.count}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
