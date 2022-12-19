import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class ActualizarScore extends Component {
    path = null;
    url = [];
    scoreId = null;

    score = React.createRef();


    state = {
        usuario: [],
        status: null
    }
    componentWillMount() {
        this.path = window.location.pathname;
        console.log(this.path);
        this.url = this.path.split("/");
        console.log(this.url);
        this.scoreId = this.url[2];
        console.log(this.scoreId);
        this.getUsuario(this.scoreId)
    }

    getUsuario = (id) => {
        axios.get("http://localhost:3000/api/Score/" + id)
            .then(res => {
                this.setState({
                    score: res.data.score
                })
                console.log(res.data.score)
            })
            .catch(error => {

                console.log(error);

            })

    }
    actualizarScore = (e) => {
        e.preventDefault();
        console.log(this.score.current.value);
        var score = {
            scoreText: this.score.current.value,

        }
        axios.put("http://localhost:3000/api/actualizarScore/" + this.usuarioId, usuario)
            .then(res => {
                this.setState({
                    status: "success"
                })
            })
            .catch(error => {

                console.log(error);

            })

    }
    render() {
        if (this.state.status === "success") {
            return <Navigate to="/Scores" />
        }
        return (
            <React.Fragment>
                <h1>Actualizar Calificacion</h1>
                <form onSubmit={this.ActualizarScore}>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Calificacion</label>
                        <input type="text" className="form-control" id="nombre" defaultValue={this.state.score.scoreText} ref={this.scoreText} />
                    </div>

                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        );
    }
}

export default ActualizarScore;