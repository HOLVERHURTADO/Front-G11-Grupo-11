import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Cars extends Component {
    state = {
        cars: []
    }

    componentWillMount() {
        this.getCars();
    }

    getCars = () => {
        axios.get("http://localhost:3000/api/Cars")
            .then(res => {
                console.log("Cars");
                console.log(res.data.doc);
                this.setState({
                    cars: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarCar = (id) => {
        axios.delete("http://localhost:3000/api/eliminarCar/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                window.location.reload(true);

                swal(
                    "Vehiculo Eliminado",
                    "El Vehiculo se Elimino Correctamente",
                    "success"
                )
            })
    }

    render() {
        console.log(this.state.cars);
        return (
            <React.Fragment>
                <h1 >Vehiculos</h1>
                <Link to="/Cars" ></Link>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>brand</td>
                            <td>model</td>
                            <td>year</td>
                            <td>description</td>
                            <td>acciones de vehiculo</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cars.map((car) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{car._id}</td>
                                            <td>{car.brand}</td>
                                            <td>{car.model}</td>
                                            <td>{car.year}</td>
                                            <td>{car.description}</td>

                                            <td>
                                                <Link to={"/editarCar/" + car._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarCar(car._id)
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

export default Cars;