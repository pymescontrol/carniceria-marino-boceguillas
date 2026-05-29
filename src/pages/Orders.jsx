import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Orders() {
  return (
    <section className="section order-section">
      <div className="container">
        
        <motion.div 
          className="order-box"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Servicio a tu medida</span>
          <h1 className="order-title">Preparamos tu encargo sin esperas</h1>
          <p className="order-desc">
            Queremos facilitarte las cosas. Llámanos con antelación, indícanos qué cortes necesitas y cómo deseas que los preparemos. Tendremos todo listo para que solo tengas que pasar a recogerlo en nuestra tienda de Boceguillas (Segovia).
          </p>

          <div className="order-steps" style={{ marginTop: "40px", marginBottom: "50px" }}>
            <div className="order-step">
              <div className="order-step-num">1</div>
              <div>
                <h4 className="order-step-title">Consulta la carta</h4>
                <p className="order-step-desc">Elige entre nuestras especialidades de cordero lechal, ternera selecta, cerdo fresco, pollo, jamones o embutidos tradicionales.</p>
              </div>
            </div>
            <div className="order-step">
              <div className="order-step-num">2</div>
              <div>
                <h4 className="order-step-title">Llámanos</h4>
                <p className="order-step-desc">Contacta directamente al teléfono <strong>921 543 111</strong> y detállanos tu pedido y cómo deseas los cortes.</p>
              </div>
            </div>
            <div className="order-step">
              <div className="order-step-num">3</div>
              <div>
                <h4 className="order-step-title">Recoge en tienda</h4>
                <p className="order-step-desc">Pasa por nuestro local en Boceguillas en el horario acordado y llévate tu carne recién preparada y envasada.</p>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "40px", textAlign: "left" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "var(--text-dark)", fontFamily: "var(--font-title)" }}>Encargos Especiales Destacados</h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "40px" }}>
              <div style={{ background: "rgba(0,0,0,0.02)", padding: "24px", borderRadius: "12px", border: "1px solid rgba(211,47,47,0.08)" }}>
                <h4 style={{ color: "var(--text-dark)", marginBottom: "8px", fontWeight: 700 }}>Cordero para asar</h4>
                <p style={{ color: "var(--text-dark-muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                  Medios corderos o piezas enteras marcadas y preparadas con la receta tradicional, listos para introducir en el horno.
                </p>
              </div>
              <div style={{ background: "rgba(0,0,0,0.02)", padding: "24px", borderRadius: "12px", border: "1px solid rgba(211,47,47,0.08)" }}>
                <h4 style={{ color: "var(--text-dark)", marginBottom: "8px", fontWeight: 700 }}>Carnes para celebraciones</h4>
                <p style={{ color: "var(--text-dark-muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                  Cortes nobles de ternera (chuletones, solomillo), cabrito o cochinillo preparados a medida para tus eventos y reuniones familiares.
                </p>
              </div>
              <div style={{ background: "rgba(0,0,0,0.02)", padding: "24px", borderRadius: "12px", border: "1px solid rgba(211,47,47,0.08)" }}>
                <h4 style={{ color: "var(--text-dark)", marginBottom: "8px", fontWeight: 700 }}>Preparados por encargo</h4>
                <p style={{ color: "var(--text-dark-muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                  Elaboraciones especiales de la casa como lomos rellenos, brochetas variadas o embutido fresco preparado en la cantidad exacta que necesites.
                </p>
              </div>
            </div>
          </div>

          <div className="order-actions">
            <a href="tel:921543111" className="btn btn-primary" style={{ padding: "16px 36px", fontSize: "1.05rem" }}>
              <Phone size={20} />
              Llamar ahora (921 543 111)
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
