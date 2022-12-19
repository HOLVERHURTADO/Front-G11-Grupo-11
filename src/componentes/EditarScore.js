import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class EditarScore extends Component {
    path = null;
    url = [];
    scoreId = null;

    scoreNumber = React.createRef();

    state = {
        score: [],
        status: null
    }
    componentWillMount() {
        this.path = window.location.pathname;
        console.log(this.path);
        this.url = this.path.split("/");
        console.log(this.url);
        this.scoreId = this.url[2];
        console.log(this.scoreId);
        this.getScore(this.scoreId)
    }

    getScore = (id) => {
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
        console.log(this.scoreNumber.current.value);
        var score = {
            scoreNumber: this.scoreNumber.current.value,

        }
        axios.put("http://localhost:3000/api/editarScore/" + this.scoreId, score)
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
                <h1>Editar Calificación</h1>
                <form onSubmit={this.actualizarScore}>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Calificacion</label>
                        <input type="number" className="form-control" id="score" min="1" max="5" defaultValue={this.state.score.scoreNumber} ref={this.scoreNumber} />
                    </div>

                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarScore;