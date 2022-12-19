import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class GuardarScore extends React.Component {
    score = React.createRef();


    state = {
        score: {},
        status: null
    }

    changeState = () => {
        this.setState({
            score: {
                score: this.score.current.value,
            }
        })

        console.log(this.state);
    }

    guardarScore = (e) => {
        e.preventDefault();
        console.log(this.score.current.value);

        this.changeState();
        axios.post("http://localhost:3000/api/guardarScore", this.state.score)
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
            return <Navigate to="/Scores" />
        }
        return (
            <React.Fragment>
                <h1>Calificanos!!</h1>
                <form onSubmit={this.guardarScore}>
                    <div className="mb-3">
                        <label for="nombre" className="form-label" >Score</label>
                        <input type="text" required className="form-control" id="nombre" placeholder="Ingrese su Nombre" name="name" ref={this.name} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="apellido" className="form-label" >Apellido</label>
                        <input type="text" required className="form-control" id="apellido" placeholder="Ingrese su Apellido" name="surname" ref={this.surname} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="correo" className="form-label"  >Correo</label>
                        <input type="email" required className="form-control" id="correo" aria-describedby="emailHelp" placeholder="Ingrese su Correo" name="email" ref={this.email} onChange={this.changeState} />
                    </div>
                    <div className="mb-3">
                        <label for="pass" className="form-label" > Contraseña</label>
                        <input type="password" required className="form-control" id="pass" placeholder="Ingrese su Contraseña" name="password" ref={this.password} onChange={this.changeState} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        )
    }
}

export default GuardarScore;