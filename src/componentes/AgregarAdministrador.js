import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarAdministrador extends React.Component {
    name = React.createRef();
    email = React.createRef();
    password = React.createRef();

    state = {
        administrador: {},
        status: null
    }

    changeState = () => {
        this.setState({
            administrador: {
                name: this.name.current.value,
                email: this.email.current.value,
                password: this.password.current.value
            }
        })

        console.log(this.state);
    }

    guardarAdministrador = (e) => {
        e.preventDefault();
        console.log(this.name.current.value);
        console.log(this.email.current.value);
        console.log(this.password.current.value);

        this.changeState();
        axios.post("http://localhost:3000/api/guardarAdmin", this.state.administrador)
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
            return <Navigate to="/Administradores" />
        }
        return (
            <React.Fragment>
                <h1>Agregar Administrador</h1>
                <form onSubmit={this.guardarAdministrador}>
                    <div className="mb-3">
                        <label for="name" className="form-label" >Nombre</label>
                        <input type="text" required className="form-control" id="name" placeholder="Ingrese su Nombre" name="name" ref={this.name} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label"  >Correo</label>
                        <input type="email" required className="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingrese su Correo" name="email" ref={this.email} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label" > Contraseña</label>
                        <input type="password" required className="form-control" id="password" placeholder="Ingrese su Contraseña" name="password" ref={this.password} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarAdministrador;