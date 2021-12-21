import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "./navegacion.css";

const Navegacion = () => {
  return (
    <nav className="navar">
      <div className="log">
        <img src={logo} className="logo" alt="Main Logo" />
      </div>

      <ul className="navlinks">
        <li className="links">
          <Link to="/" className="ar">
            Home
          </Link>
        </li>
        <li className="links">
          <Link to="/mision" className="ar">
            Mision
          </Link>
        </li>
        <li className="links">
          <Link to="/vision" className="ar">
            Vision
          </Link>
        </li>
        <li className="links">
          <Link to="/registro" className="ar">
            Registro
          </Link>
        </li>
        <li className="links">
          <Link to="/login" className="ar">
            Login
          </Link>
        </li>
        <li className="links">
          <Link to="/dashboard" className="ar">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navegacion;
