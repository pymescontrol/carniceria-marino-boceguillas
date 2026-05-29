import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cordero from "./pages/Cordero";
import Ternera from "./pages/Ternera";
import Cerdo from "./pages/Cerdo";
import Jamones from "./pages/Jamones";
import Pollo from "./pages/Pollo";
import Embutidos from "./pages/Embutidos";
import Orders from "./pages/Orders";
import History from "./pages/History";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Products />} />
          <Route path="cordero" element={<Cordero />} />
          <Route path="ternera" element={<Ternera />} />
          <Route path="cerdo" element={<Cerdo />} />
          <Route path="jamones" element={<Jamones />} />
          <Route path="pollo" element={<Pollo />} />
          <Route path="embutidos" element={<Embutidos />} />
          <Route path="encargos" element={<Orders />} />
          <Route path="historia" element={<History />} />
          <Route path="ubicacion" element={<Location />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
