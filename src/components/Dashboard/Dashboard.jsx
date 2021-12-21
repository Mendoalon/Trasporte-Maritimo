import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="navegacion">
      <div className="sidebar">
        <h1 className="text-white">Dashboard</h1>

        <hr className="hr" />

        <div>
          <main>
            <nav>
              <ul className="uldes">
                <li className="lides">
                  <Link to="lisusuario">Usuarios </Link>
                </li>
                <li className="lides">
                  <Link to="ediUsuario">Crear Cotizacion </Link>
                </li>
                <li className="lides">
                  <Link to="/sales">Sales </Link>
                </li>
              </ul>
            </nav>
          </main>
        </div>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
