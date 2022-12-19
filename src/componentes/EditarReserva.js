import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class EditarReserva extends Component {
    path=null;
    url=[];
    reservaId=null;

    reservationStart =React.createRef();
    reservationEnd =React.createRef();
    reservationStatus =React.createRef();

    state={
        reserva:[],
        status: null
    }
    componentWillMount(){
        this.path=window.location.pathname;
        console.log(this.path);
        this.url= this.path.split("/");
        console.log(this.url);
        this.reservaId =this.url[2];
        console.log(this.reservaId);
        this.getReserva(this.reservaId)
    }

    getReserva=(id) =>{
        axios.get("http://localhost:3000/api/Reservation/"+ id)
            .then(res=>{
                this.setState({
                    reserva:res.data.reserva
                })
                console.log(res.data.reserva)
            })
            .catch(error => {

                console.log(error);

            })

    }
    actualizarReserva=(e)=>{
        e.preventDefault();
        console.log(this.reserva.current.value);
        var reserva ={
            reservationStart:this.reservationStart.current.value,
            reservationEnd:this.reservationEnd.current.value,
            reservationStatus:this.reservationStatus.current.value,

        }
        axios.put("http://localhost:3000/api/actualizarReservation/"+ this.reservaId,reserva)
        .then(res =>{
            this.setState({
                status:"success"
            })
        })
        .catch(error => {

                console.log(error);

        })

    }
    render() {
        if(this.state.status==="success"){
            return <Navigate to="/Reservas"/>  
            }
        return (
            <React.Fragment>
                <h1>Editar Reservas</h1>
                <form onSubmit={this.actualizarReserva}>
                    <div className="mb-3">
                        <label for="reservationStart" className="form-label">Fecha inicial</label>
                        <input type="Date" className="form-control" id="reservationStart" defaultValue={this.state.reserva.reservationStart} ref={this.reservationStart}/>
                    </div>
                    <div className="mb-3">
                        <label for="reservationEnd" className="form-label">Fecha Final</label>
                        <input type="Date" className="form-control" id="reservationEnd" defaultValue={this.state.reserva.reservationEnd} ref={this.reservationEnd}/>
                    </div>
                    <div className="mb-3">
                        <label for="status" className="form-label">Status</label>
                        <input type="text" className="form-control" id="status" defaultValue={this.state.reserva.reservationStatus} ref={this.reservationStatus}/>
                    </div>

                    <input type="submit" className="btn btn-primary"/>
                </form>
            </React.Fragment>
        );
    }
}

export default EditarReserva;