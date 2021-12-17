import React from 'react'
import './login.css'
import { useState } from "react";



const Login = () => {

    const valorInicialLogin = {
        correo: "",
        contraseña: "",
      };
    
      const [login, setUsuario] = useState(valorInicialLogin);
    
      const capturarDatos =(e)=>{
        const {name, value} = e.target
        setUsuario({...login, [name]: value })
    }
    
    const guardarDatos =  async (e) =>{
      e.preventDefault();
      console.log(login);
    
      // se crea la logica para la peticion post
      const newLogin = {
        correo: login.correo,
        contraseña: login.contraseña
      }
    
    // Peticion a la API.
      await 

      
      fetch('http://example.com/movies.json')
      .then(response => response.json())
      .then(data => console.log(data));

      //-------
     setUsuario({...valorInicialLogin})

     console.log(newLogin);
    }
    
      return (
      
        <div className="registro">
          
            <form onSubmit={guardarDatos}>
              <h2 className="text-center mb-3 text-white">Login</h2>
              
    
              <div className="mb-3">
                <label className="text-white">Correo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su correo"
                  required
                  name='correo'
                  value={login.correo}
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
                  value={login.contraseña}
                  onChange={capturarDatos}
                />
              </div>
    
              <button className="btn btn-primary">
                LOGIN
              </button>
            </form>
          </div>
      
    );
};

export default Login;
