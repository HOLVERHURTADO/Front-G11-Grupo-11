import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Gamas extends Component {
    state = {
        gamas: []
    }

    componentWillMount() {
        this.getGamas();
    }

    getGamas = () => {
        axios.get("http://localhost:3000/api/Gamas")
            .then(res => {
                console.log("Gamas");
                console.log(res.data.doc);
                this.setState({
                    gamas: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    eliminarGama = (id) => {
        axios.delete("http://localhost:3000/api/eliminarGama/" + id)
            .then(res => {
                this.setState({
                    status: "delete"
                });

                window.location.reload(true);

                swal(
                    "Gama Eliminada",
                    "la Gama se Elimino Correctamente",
                    "success"
                )
            })
    }

    render() {
        console.log(this.state.gamas);
        return (
            <React.Fragment>
                <h1 >Gamas</h1>
                <Link to="/Gamas" ></Link>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>name</td>
                            <td>description</td>
                            <td>acciones de gama</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.gamas.map((gama) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{gama._id}</td>
                                            <td>{gama.name}</td>
                                            <td>{gama.description}</td>

                                            <td>
                                                <Link to={"/editarGama/" + gama._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3" onClick={
                                                    () => {
                                                        this.eliminarGama(gama._id)
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

export default Gamas;