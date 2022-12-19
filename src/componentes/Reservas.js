import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Reservas extends Component {
    state = {
        reservas: []
    }

    componentWillMount() {
        this.getReservas();
    }

    getReservas = () => {
        axios.get("http://localhost:3000/api/Reservations")
            .then(res => {
                console.log("Reservations");
                console.log(res.data.doc);
                this.setState({
                    reservas: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarReserva = (id) => {
        axios.delete("http://localhost:3000/api/eliminarReservation/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                window.location.reload(true);

                swal(
                    "Reserva Eliminada",
                    "La reserva se Elimino Correctamente",
                    "success"
                )
            })
    }

    render() {
        console.log(this.state.reservas);
        return (
            <React.Fragment>
                <h1 >Reservas</h1>
                <Link to="/Reservas" ></Link>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Fecha inicial de reserva</td>
                            <td>Fecha final de reserva</td>
                            <td>status</td>
                            <td>Acciones de reserva</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.reservas.map((reserva) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{reserva._id}</td>
                                            <td>{reserva.reservationStart}</td>
                                            <td>{reserva.reservationEnd}</td>
                                            <td>{reserva.reservationStatus}</td>

                                            <td>
                                                <Link to={"/editarReserva/" + reserva._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarReserva(reserva._id)
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

export default Reservas;