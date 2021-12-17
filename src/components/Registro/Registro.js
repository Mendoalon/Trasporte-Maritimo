import React from "react";
import "./registro.css";
import { useState } from "react";


const Registro = () => {

  const valorInicial = {
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
  };

  const [usuario, setUsuario] = useState(valorInicial);

  const capturarDatos =(e)=>{
    const {name, value} = e.target
    setUsuario({...usuario, [name]: value })
}

const guardarDatos =  async (e) =>{
  e.preventDefault();
  console.log(usuario);

  // se crea la logica para la peticion post
  const newUser = {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    correo: usuario.correo,
    contraseña: usuario.contraseña
  }

// Peticion a la API.
  //await axios.post('www.google.com', newUser);
  //-------
 setUsuario({...valorInicial})
}

  return (
  
    <div className="registro">
      
        <form onSubmit={guardarDatos}>
          <h2 className="text-center mb-3 text-white">Registro</h2>
          <div className="mb-3">
            <label className="text-white">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre"
              required
              name='nombre'
              value={usuario.nombre}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label className="text-white">Apeliido</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su apellido"
              required
              name='apellido'
              value={usuario.apellido}
              onChange={capturarDatos}
            />
          </div>         

          <div className="mb-3">
            <label className="text-white">Correo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su correo"
              required
              name='correo'
              value={usuario.correo}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label className="text-white">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese su correo"
              required
              name='contraseña'
              value={usuario.contraseña}
              onChange={capturarDatos}
            />
          </div>

          <button className="btn btn-primary">
            Gurdar Usuario
          </button>
        </form>
      </div>

  );
};

export default Registro;
