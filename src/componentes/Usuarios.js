import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Usuarios extends Component {
    state = {
        usuarios: []
    }

    componentWillMount() {
        this.getUsuarios();
    }

    getUsuarios = () => {
        axios.get("http://localhost:3000/api/Users")
            .then(res => {
                console.log("Users");
                console.log(res.data.doc);
                this.setState({
                    usuarios: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarUsuario = (id) => {
        axios.delete("http://localhost:3000/api/eliminarUser/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                window.location.reload(true);

                swal(
                    "Usuario Eliminado",
                    "El Usuario se Elimino Correctamente",
                    "success"
                )
            })
    }

    render() {
        console.log(this.state.usuarios);
        return (
            <React.Fragment>
                <h1>Usuarios</h1>
                <Link to="/Users" ></Link>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>name</td>
                            <td>surname</td>
                            <td>email</td>
                            <td>password</td>
                            <td>acciones de usuario</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.usuarios.map((usuario) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{usuario._id}</td>
                                            <td>{usuario.name}</td>
                                            <td>{usuario.surname}</td>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.password}</td>

                                            <td>
                                                <Link to={"/editarUsuario/" + usuario._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarUsuario(usuario._id)
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

export default Usuarios;