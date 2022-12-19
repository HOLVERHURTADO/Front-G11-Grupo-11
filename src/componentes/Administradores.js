import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Administradores extends Component {
    state = {
        administradores: []
    }

    componentWillMount() {
        this.getAdministradores();
    }

    getAdministradores = () => {
        axios.get("http://localhost:3000/api/Admins")
            .then(res => {
                console.log("Admins");
                console.log(res.data.doc);
                this.setState({
                    administradores: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarAdministrador = (id) => {
        axios.delete("http://localhost:3000/api/eliminarAdmin/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                window.location.reload(true);

                swal(
                    "Administrador Eliminado",
                    "El Administrador se Elimino Correctamente",
                    "success"
                )
            })
    }

    render() {
        console.log(this.state.administradores);
        return (
            <React.Fragment>
                <h1>Administradores</h1>
                <Link to="/Admins" ></Link>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>name</td>
                            <td>email</td>
                            <td>password</td>
                            <td>acciones de administrador</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.administradores.map((administrador) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{administrador._id}</td>
                                            <td>{administrador.name}</td>
                                            <td>{administrador.email}</td>
                                            <td>{administrador.password}</td>

                                            <td>
                                                <Link to={"/editarAdministrador/" + administrador._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarAdministrador(administrador._id)
                                                    }
                                                }>Eliminar</button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }

                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Administradores;