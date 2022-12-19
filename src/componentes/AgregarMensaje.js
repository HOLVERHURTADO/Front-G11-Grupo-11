import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class AgregarMensaje extends React.Component {
    messageText = React.createRef();

    state = {
        mensaje: {},
        status: null
    }

    changeState = () => {
        this.setState({
            mensaje: {
                messageText: this.messageText.current.value,
            }
        })

        console.log(this.state);
    }

    guardarMensaje = (e) => {
        e.preventDefault();
        console.log(this.messageText.current.value);

        this.changeState();
        axios.post("http://localhost:3000/api/guardarMessage", this.state.mensaje)
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
            return <Navigate to="/Mensajes" />
        }
        return (
            <React.Fragment>
                <h1>Agregar Mensaje</h1>
                <form onSubmit={this.guardarMensaje}>
                    <div className="mb-3">
                        <label for="messageText" className="form-label" >Mensaje</label>
                        <input type="text" required className="form-control" id="messageText" placeholder="Ingrese el mensaje" name="messageText" ref={this.messageText} onChange={this.changeState} />
                    </div>

                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        )
    }
}

export default AgregarMensaje;