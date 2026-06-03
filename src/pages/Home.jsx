import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Route, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import homeBg from "../assets/backgrounds/home.png";

export default function Home() {
  return (
    <section 
      className="hero-section"
      style={{ 
        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.75), rgba(5, 5, 5, 0.96)), url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="hero-bg-overlay"></div>
      <div className="container hero-grid">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-tag">
            <Sparkles size={16} />
            <span>Calidad artesanal y trato familiar</span>
          </div>
          
          <h1 className="hero-title">
            Carnicería tradicional 
            <span>en Boceguillas</span>
          </h1>
          
          <p className="hero-desc">
            Bienvenidos a <strong>Carnicería Marino</strong> en Boceguillas (Segovia), tu establecimiento de confianza junto a la <strong>A-1 / carretera Madrid-Irún</strong>. Seleccionamos las mejores piezas de la zona para ofrecerte carnes de primera calidad con el sabor y la confianza de siempre. Visítanos en nuestro local o haz tu encargo por teléfono.
          </p>
          
          <div className="hero-actions">
            <a href="tel:921543111" className="btn btn-primary">
              <Phone size={18} />
              Llamar ahora
            </a>
            <Link to="/productos" className="btn btn-secondary">
              Ver productos
            </Link>
          </div>
        </motion.div>

        {/* TARJETA DESTACADA EN HERO: UBICACIÓN Y ZONA DE INFLUENCIA */}
        <motion.div 
          className="hero-location-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="premium-card">
            <div className="hero-location-badge">Ubicación estratégica</div>
            <h2 className="premium-card-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin className="logo-accent" size={24} />
              Boceguillas
            </h2>
            <p className="premium-card-text">
              Situados junto a la autovía del norte, somos un punto de referencia de fácil acceso y una parada muy cómoda para realizar tus compras de alimentación si vives o viajas por la comarca de <strong>Riaza, Ayllón, Sepúlveda, Buitrago del Lozoya, Aranda de Duero o Segovia</strong>.
            </p>
            
            <ul className="route-info-list">
              <li className="route-info-item">
                <span className="route-bullet"></span>
                <span>Conexión directa para vecinos de <strong>Riaza, Ayllón y Sepúlveda</strong></span>
              </li>
              <li className="route-info-item">
                <span className="route-bullet"></span>
                <span>Paso habitual desde <strong>Buitrago del Lozoya, Aranda de Duero y Segovia</strong></span>
              </li>
              <li className="route-info-item">
                <span className="route-bullet"></span>
                <span>Estacionamiento cómodo a pie de tienda para compras sin esperas</span>
              </li>
            </ul>
            
            <div style={{ marginTop: '28px' }}>
              <Link 
                to="/ubicacion" 
                className="btn btn-outline-red" 
                style={{ width: '100%', padding: '12px', textAlign: 'center' }}
              >
                <Route size={18} style={{ display: 'inline', marginRight: '6px' }} />
                Ver accesos y mapa
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
