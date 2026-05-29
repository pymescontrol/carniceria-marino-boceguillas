import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Cordero", path: "/cordero" },
    { name: "Ternera", path: "/ternera" },
    { name: "Cerdo", path: "/cerdo" },
    { name: "Jamones", path: "/jamones" },
    { name: "Pollo", path: "/pollo" },
    { name: "Embutidos", path: "/embutidos" },
    { name: "Encargos", path: "/encargos" },
    { name: "Historia", path: "/historia" },
    { name: "Ubicación", path: "/ubicacion" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          <Link to="/" className="logo-link" onClick={closeMobileMenu}>
            <span className="logo-text">MARINO<span className="logo-accent">.</span></span>
          </Link>
          
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {item.name}
              </NavLink>
            ))}
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
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path} 
            className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </>
  );
}
