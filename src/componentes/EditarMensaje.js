import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class EditarMensaje extends Component {
    path=null;
    url=[];
    mensajeId=null;

    messageText =React.createRef();

    state={
        mensaje:[],
        status: null
    }
    componentWillMount(){
        this.path=window.location.pathname;
        console.log(this.path);
        this.url= this.path.split("/");
        console.log(this.url);
        this.mensajeId =this.url[2];
        console.log(this.mensajeId);
        this.getMensaje(this.mensajeId)
    }

    getMensaje=(id) =>{
        axios.get("http://localhost:3000/api/Message/"+ id)
            .then(res=>{
                this.setState({
                    mensaje:res.data.mensaje
                })
                console.log(res.data.mensaje)
            })
            .catch(error => {

                console.log(error);

            })

    }
    actualizarMensaje=(e)=>{
        e.preventDefault();
        console.log(this.messageText.current.value);
        var mensaje ={
            messageText:this.messageText.current.value,
        }
        axios.put("http://localhost:3000/api/actualizarMessage/"+ this.mensajeId,mensaje)
        .then(res =>{
            this.setState({
                status:"success"
            })
        })
        .catch(error => {

                console.log(error);

        })

    }
    render() {
        if(this.state.status==="success"){
            return <Navigate to="/Mensajes"/>  
            }
        return (
            <React.Fragment>
                <h1>Editar Mensaje</h1>
                <form onSubmit={this.actualizarMensaje}>
                <div className="mb-3">
                        <label for="mensaje" className="form-label">Mensaje</label>
                        <input type="text" className="form-control" id="mensaje" defaultValue={this.state.mensaje.messageText} ref={this.mensaje}/>
                    </div>

                    <input type="submit" className="btn btn-primary"/>
                </form>
            </React.Fragment>
        );
    }
}

export default EditarMensaje;