import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Mision from "./components/Mision/Mision";
import Navegacion from "./components/Navegacion/Navegacion";
import Registro from "./components/Registro/Registro";
import Vision from "./components/Vision/Vision";
import ListarUsuarios from "./components/Dashboard/ListarUsuarios";
import Empresas from "./components/Dashboard/Empresas";
import Facturas from "./components/Dashboard/Facturas";
import Ordenes from "./components/Dashboard/Ordenes";
import Puertos from "./components/Dashboard/Puertos";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Navegacion />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/mision" element={<Mision />} />
      <Route exact path="/vision" element={<Vision />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/registro" element={<Registro />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="lisusuario" element={<ListarUsuarios />} />
        <Route path="empresas" element={<Empresas />} />
        <Route path="facturas" element={<Facturas />} />
        <Route path="ordenes" element={<Ordenes />} />
        <Route path="puertos" element={<Puertos />} />
        
      </Route>
      
      <Route />
      
    </Routes>
    
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
