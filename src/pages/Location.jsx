import React from "react";
import { MapPin, Route, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Cómo llegar</span>
          <h1 className="section-title">Estamos en Boceguillas, junto a la A-1</h1>
          <p className="section-desc">
            Disfruta de la comodidad de comprar tu carne en un punto estratégicamente comunicado del nordeste segoviano. Con aparcamiento sencillo en la misma puerta y acceso inmediato desde la autovía.
          </p>
        </div>

        <div className="location-grid">
          
          <motion.div 
            className="location-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <div className="location-feature-card">
              <div className="location-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="location-feature-title">Dirección de fácil acceso</h3>
                <p className="location-feature-desc">
                  Nuestra tienda física se encuentra en <strong>Boceguillas (Segovia)</strong>, facilitando tus compras sin desviarte de tu trayecto por la autovía del Norte <strong>A-1 (carretera Madrid-Irún)</strong>.
                </p>
              </div>
            </div>

            <div className="location-feature-card">
              <div className="location-icon-wrapper">
                <Route size={24} />
              </div>
              <div>
                <h3 className="location-feature-title">Parada cómoda y accesible</h3>
                <p className="location-feature-desc">
                  Nos situamos a una distancia muy reducida de localidades importantes de la zona. Es una opción de paso ideal y parada cómoda para clientes de <strong>Riaza, Ayllón, Sepúlveda, Buitrago del Lozoya, Aranda de Duero y Segovia capital</strong>, así como otros pueblos colindantes de la comarca.
                </p>
              </div>
            </div>

            <div className="location-feature-card">
              <div className="location-icon-wrapper">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="location-feature-title">Ideal para tus viajes o fines de semana</h3>
                <p className="location-feature-desc">
                  Tanto si pasas de viaje como si vienes expresamente desde los pueblos de alrededor, nuestro local ofrece un acceso inmediato y aparcamiento cómodo frente al establecimiento para que tu compra sea rápida y segura.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '12px' }}>
              <a 
                href="https://maps.google.com/?q=Boceguillas,+Segovia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <ArrowUpRight size={18} style={{ display: 'inline', marginRight: '6px' }} />
                Abrir en Google Maps
              </a>
            </div>

          </motion.div>

          {/* Mapa de Google embebido estilizado */}
          <motion.div 
            className="map-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
          </motion.div>

        </div>

      </div>
    </section>
  );
}
