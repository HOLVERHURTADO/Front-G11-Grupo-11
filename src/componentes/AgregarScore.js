import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";


class AgregarScore extends React.Component {

    scoreNumber = React.createRef();

    state = {
        score: {},
        status: null
    }

    changeState = () => {
        this.setState({
            score: {
                scoreNumber: this.scoreNumber.current.value
            }
        })

        console.log(this.state);
    }

    guardarScore = (e) => {
        e.preventDefault();
        console.log(this.scoreNumber.current.value);

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
                        <input type="number" required className="form-control" id="score" placeholder="Ingrese su Calificación" score="score" ref={this.scoreNumber} onChange={this.changeState} />
                    </div>

                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarScore;