import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Star, 
  Sparkles, 
  Route, 
  Calendar, 
  ArrowUpRight, 
  Check,
  ShoppingBag,
  Award
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS_DATA = {
  Cordero: [
    "Cordero lechal",
    "Paletilla",
    "Pierna",
    "Costillar",
    "Chuletillas",
    "Cordero para asar",
    "Cordero por encargo"
  ],
  Ternera: [
    "Filetes",
    "Entrecot",
    "Chuletón",
    "Solomillo",
    "Morcillo",
    "Carrilleras",
    "Carne para guisar",
    "Carne picada",
    "Hamburguesas"
  ],
  Cerdo: [
    "Lomo",
    "Chuletas",
    "Costillas",
    "Panceta",
    "Secreto",
    "Pluma",
    "Presa",
    "Torreznos",
    "Adobados"
  ],
  Jamones: [
    "Jamón curado",
    "Paleta",
    "Jamón loncheado",
    "Tacos de jamón",
    "Huesos de jamón",
    "Preparados para regalo"
  ],
  Pollo: [
    "Pollo entero",
    "Pechuga",
    "Filetes de pollo",
    "Muslos",
    "Contramuslos",
    "Alitas",
    "Pollo para asar",
    "Preparados de pollo"
  ],
  Embutidos: [
    "Chorizo de Segovia",
    "Chorizo de Cantimpalos",
    "Salchichón",
    "Lomo embuchado",
    "Morcilla",
    "Chorizo fresco",
    "Longaniza",
    "Torreznos",
    "Panceta curada"
  ]
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Cordero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Control de sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "productos", "ubicacion", "historia", "encargos", "contacto"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER / NAVEGACIÓN */}
      <header className="site-header">
        <div className="container header-container">
          <a href="#inicio" className="logo-link" onClick={(e) => { e.preventDefault(); scrollToSection("inicio"); }}>
            <span className="logo-text">MARINO<span className="logo-accent">.</span></span>
          </a>
          
          <nav className="desktop-nav">
            <a 
              href="#inicio" 
              className={`nav-link ${activeSection === "inicio" ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); scrollToSection("inicio"); }}
            >
              Inicio
            </a>
            <a 
              href="#productos" 
              className={`nav-link ${activeSection === "productos" ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); scrollToSection("productos"); }}
            >
              Productos
            </a>
            <a 
              href="#ubicacion" 
              className={`nav-link ${activeSection === "ubicacion" ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); scrollToSection("ubicacion"); }}
            >
              Ubicación
            </a>
            <a 
              href="#historia" 
              className={`nav-link ${activeSection === "historia" ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); scrollToSection("historia"); }}
            >
              Historia
            </a>
            <a 
              href="#encargos" 
              className={`nav-link ${activeSection === "encargos" ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); scrollToSection("encargos"); }}
            >
              Encargos
            </a>
            <a 
              href="#contacto" 
              className={`nav-link ${activeSection === "contacto" ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); scrollToSection("contacto"); }}
            >
              Contacto
            </a>
          </nav>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL OVERLAY */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <a 
          href="#inicio" 
          className={`mobile-nav-link ${activeSection === "inicio" ? "active" : ""}`}
          onClick={(e) => { e.preventDefault(); scrollToSection("inicio"); }}
        >
          Inicio
        </a>
        <a 
          href="#productos" 
          className={`mobile-nav-link ${activeSection === "productos" ? "active" : ""}`}
          onClick={(e) => { e.preventDefault(); scrollToSection("productos"); }}
        >
          Productos
        </a>
        <a 
          href="#ubicacion" 
          className={`mobile-nav-link ${activeSection === "ubicacion" ? "active" : ""}`}
          onClick={(e) => { e.preventDefault(); scrollToSection("ubicacion"); }}
        >
          Ubicación
        </a>
        <a 
          href="#historia" 
          className={`mobile-nav-link ${activeSection === "historia" ? "active" : ""}`}
          onClick={(e) => { e.preventDefault(); scrollToSection("historia"); }}
        >
          Historia
        </a>
        <a 
          href="#encargos" 
          className={`mobile-nav-link ${activeSection === "encargos" ? "active" : ""}`}
          onClick={(e) => { e.preventDefault(); scrollToSection("encargos"); }}
        >
          Encargos
        </a>
        <a 
          href="#contacto" 
          className={`mobile-nav-link ${activeSection === "contacto" ? "active" : ""}`}
          onClick={(e) => { e.preventDefault(); scrollToSection("contacto"); }}
        >
          Contacto
        </a>
      </div>

      <main style={{ flex: 1 }}>
        
        {/* HERO SECTION */}
        <section id="inicio" className="hero-section">
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
                Seleccionamos las mejores piezas de la zona para ofrecerte carnes de primera calidad con el sabor y la confianza de siempre. Visítanos en nuestro local a pie de carretera o haz tu encargo por teléfono.
              </p>
              
              <div className="hero-actions">
                <a href="tel:921543111" className="btn btn-primary">
                  <Phone size={18} />
                  Llamar ahora
                </a>
                <button onClick={() => scrollToSection("productos")} className="btn btn-secondary">
                  Ver productos
                </button>
              </div>
            </motion.div>

            {/* TARJETA DESTACADA EN HERO: UBICACIÓN */}
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
                  Nos encontramos en una posición inmejorable en el nordeste de Segovia, al lado de la <strong>autovía A-1 (carretera Madrid-Irún)</strong>. Un punto de parada cómodo y rápido tanto para viajeros como para vecinos de la comarca.
                </p>
                
                <ul className="route-info-list">
                  <li className="route-info-item">
                    <span className="route-bullet"></span>
                    <span>A solo <strong>10 min</strong> de Riaza y Sepúlveda</span>
                  </li>
                  <li className="route-info-item">
                    <span className="route-bullet"></span>
                    <span>A menos de <strong>20 min</strong> de Ayllón y Buitrago</span>
                  </li>
                  <li className="route-info-item">
                    <span className="route-bullet"></span>
                    <span>Parada ideal en el trayecto Madrid - Aranda de Duero - Segovia</span>
                  </li>
                </ul>
                
                <div style={{ marginTop: '28px' }}>
                  <button 
                    onClick={() => scrollToSection("ubicacion")} 
                    className="btn btn-outline-red" 
                    style={{ width: '100%', padding: '12px' }}
                  >
                    <Route size={18} />
                    Ver accesos y mapa
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* SECCIÓN PRODUCTOS */}
        <section id="productos" className="section section-dark">
          <div className="container">
            
            <div className="section-header">
              <span className="section-subtitle">Nuestra Selección</span>
              <h2 className="section-title">Cortes de Primera Calidad</h2>
              <p className="section-desc">
                Elige entre nuestras especialidades tradicionales y cortes selectos. Preparados al momento según tus preferencias para garantizar la máxima frescura.
              </p>
            </div>

            {/* Selector de categorías */}
            <div className="categories-container">
              {Object.keys(PRODUCTS_DATA).map((category) => (
                <button
                  key={category}
                  className={`category-tab ${activeCategory === category ? "active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  <ShoppingBag size={16} />
                  {category}
                </button>
              ))}
            </div>

            {/* Grid de cortes/productos */}
            <motion.div 
              layout
              className="products-grid"
            >
              <AnimatePresence mode="popLayout">
                {PRODUCTS_DATA[activeCategory].map((productName) => (
                  <motion.div
                    layout
                    key={`${activeCategory}-${productName}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="product-item-card"
                  >
                    <span className="product-item-name">{productName}</span>
                    <div className="product-item-icon">
                      <ChevronRight size={18} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        {/* SECCIÓN UBICACIÓN DETALLADA */}
        <section id="ubicacion" className="section">
          <div className="container">
            
            <div className="section-header">
              <span className="section-subtitle">Cómo llegar</span>
              <h2 className="section-title">Estamos en Boceguillas, junto a la A-1</h2>
              <p className="section-desc">
                Disfruta de la comodidad de comprar tu carne en un punto excelentemente comunicado del nordeste segoviano. Aparcamiento sencillo y acceso inmediato.
              </p>
            </div>

            <div className="location-grid">
              
              <div className="location-info">
                
                <div className="location-feature-card">
                  <div className="location-icon-wrapper">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="location-feature-title">Dirección de fácil acceso</h3>
                    <p className="location-feature-desc">
                      Ubicados en Boceguillas (Segovia), facilitamos las compras rápidas sin desviarte de tu trayecto por la autovía del Norte A-1.
                    </p>
                  </div>
                </div>

                <div className="location-feature-card">
                  <div className="location-icon-wrapper">
                    <Route size={24} />
                  </div>
                  <div>
                    <h3 className="location-feature-title">Conexión con pueblos vecinos</h3>
                    <p className="location-feature-desc">
                      Somos la opción de referencia para vecinos y visitantes de Riaza, Sepúlveda, Ayllón, Buitrago del Lozoya, Aranda de Duero y Segovia capital.
                    </p>
                  </div>
                </div>

                <div className="location-feature-card">
                  <div className="location-icon-wrapper">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="location-feature-title">Ideal para el fin de semana</h3>
                    <p className="location-feature-desc">
                      Haz una parada en tu viaje o ven expresamente a por tus cortes favoritos para barbacoas, asados y comidas familiares.
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '12px' }}>
                  <a 
                    href="https://maps.google.com/?q=Boceguillas,+Segovia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <ArrowUpRight size={18} />
                    Abrir en Google Maps
                  </a>
                </div>

              </div>

              {/* Mapa de Google embebido estilizado */}
              <div className="map-wrapper">
                <iframe
                  title="Mapa Carnicería Marino Boceguillas"
                  src="https://maps.google.com/maps?q=Boceguillas,%20Segovia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

          </div>
        </section>

        {/* SECCIÓN HISTORIA */}
        <section id="historia" className="section section-dark">
          <div className="container history-grid">
            
            <div className="history-content">
              <span className="section-subtitle" style={{ textAlign: 'left' }}>Nuestros orígenes</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '10px' }}>Calidad y Tradición Familiar</h2>
              
              <p className="history-text">
                Carnicería Marino forma parte de la vida diaria de Boceguillas desde hace años. Un negocio de trato cercano, producto seleccionado y tradición familiar, que ha sabido mantener la esencia de la carnicería de pueblo mientras se adapta a las necesidades actuales de sus clientes.
              </p>
              
              <p className="history-text">
                Nuestra filosofía siempre ha sido clara: el cliente no solo busca carne, busca la seguridad de llevarse a casa un producto fresco, bien cortado, criado con mimo y seleccionado directamente por profesionales que conocen su oficio.
              </p>

              <div className="history-highlights">
                <div className="history-highlight-card">
                  <h4 className="history-highlight-title">Trato Cercano</h4>
                  <p className="history-highlight-desc">Atención a medida y asesoramiento sobre los mejores cortes para cada receta.</p>
                </div>
                <div className="history-highlight-card">
                  <h4 className="history-highlight-title">Ganado Selecto</h4>
                  <p className="history-highlight-desc">Trabajamos estrechamente con productores locales de máxima confianza.</p>
                </div>
              </div>
            </div>

            <div className="history-visual">
              {/* Tarjeta premium blanca de testimonio/lema */}
              <div className="history-quote-box">
                <p className="history-quote">
                  "Aquí el cliente es parte de la familia. Nos enorgullece saber que confían en nosotros para sus comidas diarias y celebraciones más especiales."
                </p>
                <div>
                  <h4 className="history-author">Marino</h4>
                  <p className="history-subauthor">Fundador y Maestro Carnicero</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN ENCARGOS */}
        <section id="encargos" className="section order-section">
          <div className="container">
            
            <div className="order-box">
              <span className="section-subtitle">Servicio a tu medida</span>
              <h2 className="order-title">Preparamos tu encargo sin esperas</h2>
              <p className="order-desc">
                Queremos facilitarte las cosas. Llámanos con antelación, indícanos qué cortes necesitas y cómo deseas que los preparemos. Tendremos todo listo para que solo tengas que pasar a recogerlo.
              </p>

              <div className="order-steps">
                <div className="order-step">
                  <div className="order-step-num">1</div>
                  <div>
                    <h4 className="order-step-title">Consulta la carta</h4>
                    <p className="order-step-desc">Elige entre nuestras variedades de cordero, ternera, cerdo, jamones, pollo o embutidos.</p>
                  </div>
                </div>
                <div className="order-step">
                  <div className="order-step-num">2</div>
                  <div>
                    <h4 className="order-step-title">Llámanos</h4>
                    <p className="order-step-desc">Contacta directamente al <strong>921 543 111</strong> y dinos los detalles de tu pedido.</p>
                  </div>
                </div>
                <div className="order-step">
                  <div className="order-step-num">3</div>
                  <div>
                    <h4 className="order-step-title">Recoge en tienda</h4>
                    <p className="order-step-desc">Pasa por Boceguillas en el horario acordado y llévate tu carne recién preparada.</p>
                  </div>
                </div>
              </div>

              <div className="order-actions">
                <a href="tel:921543111" className="btn btn-primary">
                  <Phone size={18} />
                  Llamar ahora (921 543 111)
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN CONTACTO */}
        <section id="contacto" className="section">
          <div className="container">
            
            <div className="section-header">
              <span className="section-subtitle">Contacto</span>
              <h2 className="section-title">Estamos a tu servicio</h2>
              <p className="section-desc">
                ¿Tienes alguna duda sobre un corte de carne o quieres hacer un pedido especial? Ponte en contacto con nosotros.
              </p>
            </div>

            <div className="contact-grid">
              
              {/* Tarjetas de contacto en formato premium blanco */}
              <div className="contact-cards-stack">
                
                <div className="contact-card-white">
                  <div className="contact-icon-box">
                    <Phone size={24} />
                  </div>
                  <div className="contact-card-content">
                    <h3>Atención Telefónica</h3>
                    <p>Llámanos para consultas o pedidos personalizados.</p>
                    <a href="tel:921543111">921 543 111</a>
                  </div>
                </div>

                <div className="contact-card-white">
                  <div className="contact-icon-box">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-card-content">
                    <h3>Ubicación</h3>
                    <p>Boceguillas, Segovia (Junto a la Autovía A-1)</p>
                    <a href="https://maps.google.com/?q=Boceguillas,+Segovia" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                      Ver cómo llegar <ArrowUpRight size={14} style={{ display: 'inline', marginLeft: '3px' }} />
                    </a>
                  </div>
                </div>

              </div>

              {/* Tarjeta de horario en formato premium blanco */}
              <div className="premium-card" style={{ height: '100%' }}>
                <h3 className="premium-card-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock className="logo-accent" size={24} />
                  Horario de Apertura
                </h3>
                <p className="premium-card-text" style={{ marginBottom: '24px' }}>
                  Visítanos en Boceguillas de lunes a sábado. Ajustamos nuestros horarios para ofrecerte siempre el mejor servicio.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="schedule-row" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '8px' }}>
                    <span className="schedule-days">Lunes a Viernes</span>
                    <span className="schedule-hours">9:00 - 14:00 | 17:00 - 20:00</span>
                  </div>
                  <div className="schedule-row" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '8px' }}>
                    <span className="schedule-days">Sábados</span>
                    <span className="schedule-hours">9:00 - 14:30</span>
                  </div>
                  <div className="schedule-row">
                    <span className="schedule-days" style={{ color: '#d32f2f' }}>Domingos</span>
                    <span className="schedule-hours" style={{ fontWeight: 600, color: '#d32f2f' }}>Cerrado</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          
          <div className="footer-top">
            <div className="footer-logo-desc">
              <span className="logo-text" style={{ fontSize: '1.8rem' }}>MARINO<span className="logo-accent">.</span></span>
              <p>Calidad tradicional, confianza familiar y producto local en Boceguillas (Segovia).</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-link-group">
                <h4>Navegación</h4>
                <ul className="footer-link-list">
                  <li><a href="#inicio" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection("inicio"); }}>Inicio</a></li>
                  <li><a href="#productos" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection("productos"); }}>Productos</a></li>
                  <li><a href="#ubicacion" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection("ubicacion"); }}>Ubicación</a></li>
                </ul>
              </div>
              <div className="footer-link-group">
                <h4>Información</h4>
                <ul className="footer-link-list">
                  <li><a href="#historia" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection("historia"); }}>Historia</a></li>
                  <li><a href="#encargos" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection("encargos"); }}>Encargos</a></li>
                  <li><a href="#contacto" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection("contacto"); }}>Contacto</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Carnicería Marino. Todos los derechos reservados.
            </p>
            <p className="footer-copy">
              Boceguillas, Segovia | Tel: <a href="tel:921543111" style={{ color: 'inherit', textDecoration: 'none' }}>921 543 111</a>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
