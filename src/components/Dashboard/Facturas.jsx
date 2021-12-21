import axios from "axios";
import React, { Component } from "react";
import "./dashboard.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const url = "http://localhost:3000/factura";
class Facturas extends Component {
  state = {
    data: [],
    abierto: false,
    form: {
      userId: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      username: "",
      role: "",
    },
  };

  peticionGet = () => {
    axios.get(url).then((response) => {
      this.setState({ data: response.data });
    });
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.setState.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.form);
  };

  peticionPost = async () => {
    await axios
      .post("http://localhost:3000/usuario", this.state.form)
      .then((response) => {
        this.abrirModal();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  componentDidMount() {
    this.peticionGet();
  }
  render() {
    const { form } = this.state;

    return (
      <div className="conten">
        <h1 className="h1usuario">Facturas</h1>
        <button className="btn btn-success" onClick={this.abrirModal}>
          Crear Facturas
        </button>
        <br /> <br />
        <table className="table">
          <thead>
            <tr>
              <th>Numero Factura</th>
              <th>Fecha Factura</th>
              <th>Fecha Orden</th>

              <th>Numero Orden</th>
              <th>Id Empresa</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((factura) => {
              return (
                <tr>
                  <td>{factura.numeroFactura}</td>
                  <td>{factura.fechaFactura}</td>
                  <td>{factura.fechaOrden}</td>
                  <td>{factura.ordenId}</td>
                  <td>{factura.idEmpresa}</td>
                  <td>
                    <button className="btn btn-primary">Editar</button>
                    <button className="btn btn-danger">Eliminar</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal isOpen={this.state.abierto}>
          <ModalHeader style={{ display: "block" }}>
            <span style={{ float: "right" }}>x</span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="userId">Id Usuario</label>
              <input
                className="form-control"
                type="number"
                name="userId"
                id="userId"
                onChange={this.handleChange}
                value={form.userId}
              />
              <br />
              <label htmlFor="email">email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange}
                value={form.email}
              />
              <br />
              <label htmlFor="password">Contraseña</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                onChange={this.handleChange}
                value={form.password}
              />
              <br />
              <label htmlFor="firstName">Nombre</label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                id="firstName"
                onChange={this.handleChange}
                value={form.firstName}
              />
              <br />
              <label htmlFor="lastName">Apellido</label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                id="lastName"
                onChange={this.handleChange}
                value={form.lastName}
              />
              <br />
              <label htmlFor="username">Nombre Usuario</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                onChange={this.handleChange}
                value={form.username}
              />
              <br />
              <label htmlFor="role">Rol</label>
              <input
                className="form-control"
                type="text"
                name="role"
                id="role"
                onChange={this.handleChange}
                value={form.role}
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <button
              className="btn btn-success"
              onClick={() => this.peticionPost()}
            >
              Insertar
            </button>
            : <button className="btn btn-primary">Actualizar</button>
            <button className="btn btn-danger" onClick={this.abrirModal}>
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Facturas;
