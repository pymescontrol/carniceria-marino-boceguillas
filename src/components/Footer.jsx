import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-logo-desc">
            <Link to="/" className="logo-link" style={{ display: "inline-block", marginBottom: "12px" }}>
              <span className="logo-text" style={{ fontSize: '1.8rem' }}>MARINO<span className="logo-accent">.</span></span>
            </Link>
            <p>Calidad tradicional, confianza familiar y producto local en Boceguillas (Segovia).</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Navegación</h4>
              <ul className="footer-link-list">
                <li><Link to="/" className="footer-link">Inicio</Link></li>
                <li><Link to="/productos" className="footer-link">Productos</Link></li>
                <li><Link to="/ubicacion" className="footer-link">Ubicación</Link></li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h4>Información</h4>
              <ul className="footer-link-list">
                <li><Link to="/historia" className="footer-link">Historia</Link></li>
                <li><Link to="/encargos" className="footer-link">Encargos</Link></li>
                <li><Link to="/contacto" className="footer-link">Contacto</Link></li>
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
  );
}
