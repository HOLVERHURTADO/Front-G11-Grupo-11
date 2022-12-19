import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Score extends Component {
    state = {
        score: []
    }

    componentWillMount() {
        this.getScore();
    }

    getScore = () => {
        axios.get("http://localhost:3000/api/Scores")
            .then(res => {
                console.log("scores");
                console.log(res.data.doc);
                this.setState({
                    score: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarScore = (id) => {
        axios.delete("http://localhost:3000/api/eliminarScore/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                window.location.reload(true);

                swal(
                    "Calificación Eliminada",
                    "La calificación se Elimino Correctamente",
                    "success"
                )
            })
    }

    render() {
        console.log(this.state.score);
        return (
            <React.Fragment>
                <h1 >Calificanos!!!</h1>
                <Link to="/Scores" >Acciones de Usuario</Link>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Calificación</td>
                            <td>Acciones de Usuario</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.score.map((score) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{score._id}</td>
                                            <td>{score.scoreNumber}</td>

                                            <td>
                                                <Link to={"/editarScore/" + score._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarScore(score._id)
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

export default Score;


