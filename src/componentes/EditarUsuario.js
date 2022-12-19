import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class EditarUsuario extends Component {
    path=null;
    url=[];
    usuarioId=null;

    name =React.createRef();
    surname =React.createRef();
    email =React.createRef();
    password =React.createRef();

    state={
        usuario:[],
        status: null
    }
    componentWillMount(){
        this.path=window.location.pathname;
        console.log(this.path);
        this.url= this.path.split("/");
        console.log(this.url);
        this.usuarioId =this.url[2];
        console.log(this.usuarioId);
        this.getUsuario(this.usuarioId)
    }

    getUsuario=(id) =>{
        axios.get("http://localhost:3000/api/User/"+ id)
            .then(res=>{
                this.setState({
                    usuario:res.data.usuario
                })
                console.log(res.data.usuario)
            })
            .catch(error => {

                console.log(error);

            })

    }
    actualizarUsuario=(e)=>{
        e.preventDefault();
        console.log(this.name.current.value);
        var usuario ={
            name:this.name.current.value,
            surname:this.surname.current.value,
            email:this.email.current.value,
            password:this.password.current.value
        }
        axios.put("http://localhost:3000/api/actualizarUser/"+ this.usuarioId,usuario)
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
            return <Navigate to="/Users"/>  
            }
        return (
            <React.Fragment>
                <h1>Editar Usuario</h1>
                <form onSubmit={this.actualizarUsuario}>
                <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" defaultValue={this.state.usuario.name} ref={this.name}/>
                    </div>
                    <div className="mb-3">
                        <label for="apellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="apellido" defaultValue={this.state.usuario.surname} ref={this.surname}/>
                    </div>
                    <div className="mb-3">
                        <label for="correo" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="correo" defaultValue={this.state.usuario.email} ref={this.email}/>
                    </div>
                    <div className="mb-3">
                        <label for="pass" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="pass" placeholder="contraseña" defaultValue={this.state.usuario.password} ref={this.password}/>
                    </div>
                    <input type="submit" className="btn btn-primary"/>
                </form>
            </React.Fragment>
        );
    }
}

export default EditarUsuario;