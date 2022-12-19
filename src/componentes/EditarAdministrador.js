import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class EditarAdministrador extends Component {
    path=null;
    url=[];
    administradorId=null;

    name =React.createRef();
    email =React.createRef();
    password =React.createRef();

    state={
        administrador:[],
        status: null
    }
    componentWillMount(){
        this.path=window.location.pathname;
        console.log(this.path);
        this.url= this.path.split("/");
        console.log(this.url);
        this.administradorId =this.url[2];
        console.log(this.administradorId);
        this.getAdministrador(this.administradorId)
    }

    getAdministrador=(id) =>{
        axios.get("http://localhost:3000/api/Admin/"+ id)
            .then(res=>{
                this.setState({
                    administrador:res.data.administrador
                })
                console.log(res.data.administrador)
            })
            .catch(error => {

                console.log(error);

            })

    }
    actualizarAdministrador=(e)=>{
        e.preventDefault();
        console.log(this.administrador.current.value);
        var administrador ={
            name:this.name.current.value,
            email:this.email.current.value,
            password:this.password.current.value
        }
        axios.put("http://localhost:3000/api/actualizarAdmin/"+ this.administradorId,administrador)
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
            return <Navigate to="/Adminstradores"/>  
            }
        return (
            <React.Fragment>
                <h1>Editar Administrador</h1>
                <form onSubmit={this.actualizarAdministrador}>
                <div className="mb-3">
                        <label for="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" defaultValue={this.state.administrador.name} ref={this.name}/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="email" defaultValue={this.state.administrador.email} ref={this.email}/>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" placeholder="contraseña" defaultValue={this.state.administrador.password} ref={this.password}/>
                    </div>
                    <input type="submit" className="btn btn-primary"/>
                </form>
            </React.Fragment>
        );
    }
}

export default EditarAdministrador;