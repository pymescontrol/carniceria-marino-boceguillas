import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import homeBg from "../assets/backgrounds/home.png";

export default function History() {
  return (
    <section 
      className="section section-dark"
      style={{ 
        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.96)), url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container history-grid">
        
        <motion.div 
          className="history-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle" style={{ textAlign: 'left' }}>Nuestros orígenes</span>
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Calidad y Tradición Familiar</h1>
          
          <p className="history-text" style={{ fontSize: "1.2rem", color: "var(--text-light)", lineHeight: 1.8 }}>
            Carnicería Marino forma parte de la vida diaria de Boceguillas desde hace años. Un negocio de trato cercano, producto seleccionado y tradición familiar, que mantiene la esencia de la carnicería de pueblo mientras se adapta a las necesidades actuales.
          </p>
          
          <p className="history-text">
            Nuestra filosofía siempre ha sido clara y firme: el cliente no solo busca carne, busca la tranquilidad y seguridad de llevarse a casa un producto fresco, bien cortado, criado con mimo y seleccionado de forma manual por profesionales que conocen y aman su oficio.
          </p>

          <p className="history-text">
            Con el paso de los años, hemos sabido mantener las técnicas de corte tradicionales y las recetas artesanales de adobados y preparados que nos diferencian, convirtiéndonos en una parada de referencia en el nordeste de Segovia.
          </p>

          <div className="history-highlights" style={{ marginTop: "24px" }}>
            <div className="history-highlight-card">
              <h4 className="history-highlight-title" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Sparkles className="logo-accent" size={18} />
                Trato Cercano
              </h4>
              <p className="history-highlight-desc">Atención personalizada y asesoramiento sobre los mejores cortes para cada tipo de receta.</p>
            </div>
            <div className="history-highlight-card">
              <h4 className="history-highlight-title" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ShieldCheck className="logo-accent" size={18} />
                Producto Selecto
              </h4>
              <p className="history-highlight-desc">Trabajamos de la mano con ganaderos locales de máxima confianza para garantizar la excelencia.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="history-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Tarjeta premium blanca de testimonio/lema */}
          <div className="history-quote-box">
            <p className="history-quote">
              "Aquí el cliente es parte de la familia. Nos enorgullece saber que confían en nosotros para sus comidas diarias y celebraciones más especiales, y respondemos a esa confianza con el máximo compromiso con la calidad."
            </p>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "15px", marginTop: "15px" }}>
              <h4 className="history-author">Marino</h4>
              <p className="history-subauthor">Fundador y Maestro Carnicero</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
