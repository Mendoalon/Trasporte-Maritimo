import axios from "axios";
import React, { Component} from "react";
import "./dashboard.css";
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';



const url ='http://[::1]:3005/users'
class ListarUsuarios extends Component {

  state ={
    data:[], 
    abierto: false,
  }

  peticionGet =()=>{
    axios.get(url).then(response =>{
      this.setState({data: response.data})
    });

  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  } 

  componentDidMount(){
    this.peticionGet();
  } 
render(){

  

  return (
    <div className="conten">
      <h1 className="h1usuario">Usuarios</h1>

       <button className="btn btn-success" onClick={this.abrirModal} >Agregar Usuario</button>
    <br /> <br />
    <table className="table">
    <thead>
      <tr>
        <th>Nomple</th>
        <th>Apelido</th>
        <th>Nombre Usuario</th>
        <th>email</th>
        <th>Rol</th>
      </tr>
    </thead>
    <tbody>
      {this.state.data.map(usuario=>{
        
        return(
          
          <tr>
          <td>{usuario.firstName}</td>
          <td>{usuario.lastName}</td>
          <td>{usuario.username}</td>
          <td>{usuario.email}</td>
          <td>{usuario.role}</td>
          <td>
            <button className="btn btn-primary">Editar</button>
            <button className="btn btn-danger">Eliminar</button>
          </td>
          </tr>
        )
      })}
    </tbody>
    </table>

    <Modal isOpen={this.state.abierto}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" name="nombre" id="nombre" />
                    <br />
                    <label htmlFor="apellido">Apelido</label>
                    <input className="form-control" type="text" name="apellido" id="apellido"/>
                    <br />
                    <label htmlFor="nombre_usuario">Nombre Usuario</label>
                    <input className="form-control" type="text" name="nombre_usuario" id="nombre_usuario" />
                    <br />
                    <label htmlFor="email">email</label>
                    <input className="form-control" type="text" name="email" id="email" />
                    <br />
                    <label htmlFor="Rol">Rol</label>
                    <input className="form-control" type="text" name="Rol" id="Rol" />

                  </div>
                </ModalBody>

                <ModalFooter>
                  
                    <button className="btn btn-success">
                    Insertar
                  </button>: <button className="btn btn-primary">
                    Actualizar
                  </button>
                    <button className="btn btn-danger" onClick={this.abrirModal}>Cancelar</button>
                </ModalFooter>
          </Modal>



</div>

  );
};
}

export default ListarUsuarios