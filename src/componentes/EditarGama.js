import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class EditarGama extends Component {
    path=null;
    url=[];
    gamaId=null;

    name =React.createRef();
    description =React.createRef();

    state={
        gama:[],
        status: null
    }
    componentWillMount(){
        this.path=window.location.pathname;
        console.log(this.path);
        this.url= this.path.split("/");
        console.log(this.url);
        this.gamaId =this.url[2];
        console.log(this.gamaId);
        this.getGama(this.gamaId)
    }

    getGama=(id) =>{
        axios.get("http://localhost:3000/api/Gama/"+ id)
            .then(res=>{
                this.setState({
                    gama:res.data.gama
                })
                console.log(res.data.gama)
            })
            .catch(error => {

                console.log(error);

            })

    }
    actualizarGama=(e)=>{
        e.preventDefault();
        console.log(this.name.current.value);
        var gama ={
            name:this.name.current.value,
            description:this.description.current.value,

        }
        axios.put("http://localhost:3000/api/actualizarGama/"+ this.gamaId,gama)
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
            return <Navigate to="/Gamas"/>  
            }
        return (
            <React.Fragment>
                <h1>Editar Gama</h1>
                <form onSubmit={this.actualizarGama}>
                <div className="mb-3">
                        <label for="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" defaultValue={this.state.gama.name} ref={this.name}/>
                    </div>
                    <div className="mb-3">
                        <label for="description" className="form-label">Descripción</label>
                        <input type="text" className="form-control" id="description" defaultValue={this.state.gama.description} ref={this.description}/>
                    </div>

                    <input type="submit" className="btn btn-primary"/>
                </form>
            </React.Fragment>
        );
    }
}

export default EditarGama;