import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarReserva extends React.Component {
    reservationStart = React.createRef();
    reservationEnd = React.createRef();
    reservationStatus = React.createRef();

    state = {
        reserva: {},
        status: null
    }

    changeState = () => {
        this.setState({
            reserva: {
                reservationStart: this.reservationStart.current.value,
                reservationEnd: this.reservationEnd.current.value,
                reservationStatus: this.reservationStatus.current.value,
            }
        })

        console.log(this.state);
    }

    guardarReserva = (e) => {
        e.preventDefault();
        console.log(this.reservationStart.current.value);
        console.log(this.reservationEnd.current.value);
        console.log(this.reservationStatus.current.value);
        this.changeState();
        axios.post("http://localhost:3000/api/guardarReservation", this.state.reserva)
            .then(res => {
                this.setState({
                    status: "success",
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        if (this.state.status === "success") {
            return <Navigate to="/Reservas" />
        }
        return (
            <React.Fragment>
                <h1>Agregar Reserva</h1>
                <form onSubmit={this.guardarReserva}>
                    <div className="mb-3">
                        <label for="reservationStart" className="form-label" >Fecha de inicio</label>
                        <input type="Date" required className="form-control" id="reservationStart" placeholder="Ingrese la fecha de inicio de reserva" name="reservationStart" ref={this.reservationStart} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                    <label for="reservationEnd" className="form-label" >Fecha Final</label>
                    <input type="Date"  required className="form-control" id="reservationEnd" placeholder="Ingrese la fecha de fin de reserva" name="reservationEnd" ref={this.reservationEnd} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="status" className="form-label"  >Status</label>
                        <input type="text" required className="form-control" id="status" placeholder="Ingrese el estado" name="status" ref={this.reservationStatus} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarReserva;