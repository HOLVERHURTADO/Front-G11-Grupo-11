import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Mensajes extends Component {
    state = {
        mensajes: []
    }

    componentWillMount() {
        this.getMensajes();
    }

    getMensajes = () => {
        axios.get("http://localhost:3000/api/Messages")
            .then(res => {
                console.log("Messages");
                console.log(res.data.doc);
                this.setState({
                    mensajes: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarMensaje = (id) => {
        axios.delete("http://localhost:3000/api/eliminarMessage/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                window.location.reload(true);

                swal(
                    "Mensaje Eliminado",
                    "El Mensaje se Elimino Correctamente",
                    "success"
                )
            })
    }

    render() {
        console.log(this.state.mensajes);
        return (
            <React.Fragment>
                <h1 >Mensajes</h1>
                <Link to="/Mensajes" ></Link>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>MessageText</td>
                            <td>Acciones de mensaje</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.mensajes.map((mensaje) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{mensaje._id}</td>
                                            <td>{mensaje.messageText}</td>

                                            <td>
                                                <Link to={"/editarMensaje/" + mensaje._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarMensaje(mensaje._id)
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

export default Mensajes;