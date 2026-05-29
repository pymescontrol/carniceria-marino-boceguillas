import React from "react";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Contacto</span>
          <h1 className="section-title">Estamos a tu servicio</h1>
          <p className="section-desc">
            ¿Tienes alguna consulta sobre nuestros cortes o quieres realizar un encargo especial? Ponte en contacto con nosotros hoy mismo.
          </p>
        </div>

        <div className="contact-grid">
          
          <motion.div 
            className="contact-cards-stack"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            {/* Tarjeta de teléfono */}
            <div className="contact-card-white">
              <div className="contact-icon-box">
                <Phone size={24} />
              </div>
              <div className="contact-card-content">
                <h3>Atención Telefónica</h3>
                <p>Llámanos para consultas o pedidos personalizados.</p>
                <a href="tel:921543111" style={{ fontSize: '1.4rem' }}>921 543 111</a>
                <div style={{ marginTop: '12px' }}>
                  <a href="tel:921543111" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                    Llamar ahora
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta de ubicación física */}
            <div className="contact-card-white">
              <div className="contact-icon-box">
                <MapPin size={24} />
              </div>
              <div className="contact-card-content">
                <h3>Dirección</h3>
                <p style={{ color: '#d32f2f', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>
                  Dirección exacta pendiente de confirmar
                </p>
                <p>Boceguillas, Segovia (Junto a la Autovía A-1)</p>
                <a 
                  href="https://maps.google.com/?q=Boceguillas,+Segovia" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ fontSize: '0.95rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '10px' }}
                >
                  Cómo llegar <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Tarjeta de Horario (Premium) */}
          <motion.div 
            className="premium-card" 
            style={{ height: '100%' }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="premium-card-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock className="logo-accent" size={24} />
              Horario de Apertura
            </h3>
            <p className="premium-card-text" style={{ marginBottom: '16px' }}>
              Visítanos en Boceguillas de lunes a sábado. Ajustamos nuestros horarios para ofrecerte siempre el mejor servicio tradicional.
            </p>

            <p style={{ color: '#d32f2f', fontWeight: 600, fontSize: '0.9rem', marginBottom: '20px' }}>
              ⚠️ Horarios específicos pendientes de confirmar
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.7 }}>
              <div className="schedule-row" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '8px' }}>
                <span className="schedule-days">Lunes a Viernes</span>
                <span className="schedule-hours">Consulte telefónicamente</span>
              </div>
              <div className="schedule-row" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '8px' }}>
                <span className="schedule-days">Sábados</span>
                <span className="schedule-hours">Consulte telefónicamente</span>
              </div>
              <div className="schedule-row">
                <span className="schedule-days" style={{ color: '#d32f2f' }}>Domingos</span>
                <span className="schedule-hours" style={{ fontWeight: 600, color: '#d32f2f' }}>Cerrado</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Mapa de Google embebido en la sección de Contacto */}
        <div style={{ marginTop: '60px' }}>
          <div className="map-wrapper" style={{ height: '350px' }}>
            <iframe
              title="Mapa de Contacto Carnicería Marino Boceguillas"
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
  );
}
