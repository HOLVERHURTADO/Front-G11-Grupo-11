import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarCar extends React.Component {
    brand = React.createRef();
    model = React.createRef();
    year = React.createRef();
    description = React.createRef();

    state = {
        car: {},
        status: null
    }

    changeState = () => {
        this.setState({
            car: {
                brand: this.brand.current.value,
                model: this.model.current.value,
                year: this.year.current.value,
                description: this.description.current.value
            }
        })

        console.log(this.state);
    }

    guardarCar = (e) => {
        e.preventDefault();
        console.log(this.brand.current.value);
        console.log(this.model.current.value);
        console.log(this.year.current.value);
        console.log(this.description.current.value);
        this.changeState();
        axios.post("http://localhost:3000/api/guardarCar", this.state.car)
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
            return <Navigate to="/Cars" />
        }
        return (
            <React.Fragment>
                <h1>Agregar Vehiculo</h1>
                <form onSubmit={this.guardarCar}>
                    <div className="mb-3">
                        <label for="marca" className="form-label" >Marca</label>
                        <input type="text" required className="form-control" id="marca" placeholder="Ingrese la marca del vehículo" name="brand" ref={this.brand} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="modelo" className="form-label" >Modelo</label>
                        <input type="text" required className="form-control" id="modelo" placeholder="Ingrese el modelo del vehículo" name="model" ref={this.model} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="ano" className="form-label"  >Año</label>
                        <input type="number" required className="form-control" id="ano" placeholder="Ingrese el año del vehículo" name="year" ref={this.year} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="descripcion" className="form-label" > Descripcion</label>
                        <input type="text" required className="form-control" id="descripcion" placeholder="Ingrese la descripción" name="description" ref={this.description} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarCar;