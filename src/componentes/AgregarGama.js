import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarGama extends React.Component {
    name = React.createRef();
    description = React.createRef();


    state = {
        gama: {},
        status: null
    }

    changeState = () => {
        this.setState({
            gama: {
                name: this.name.current.value,
                description: this.description.current.value,

            }
        })

        console.log(this.state);
    }

    guardarGama = (e) => {
        e.preventDefault();
        console.log(this.name.current.value);
        console.log(this.description.current.value);

        this.changeState();
        axios.post("http://localhost:3000/api/guardarGama", this.state.gama)
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
            return <Navigate to="/Gamas" />
        }
        return (
            <React.Fragment>
                <h1>Agregar Gama</h1>
                <form onSubmit={this.guardarGama}>
                    <div className="mb-3">
                        <label for="name" className="form-label" >Nombre</label>
                        <input type="text" required className="form-control" id="name" placeholder="Ingrese la Gama" name="name" ref={this.name} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="description" className="form-label" >Descripción</label>
                        <input type="text" required className="form-control" id="description" placeholder="Ingrese la descripción" name="description" ref={this.description} onChange={this.changeState} />
                    </div>

                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarGama;