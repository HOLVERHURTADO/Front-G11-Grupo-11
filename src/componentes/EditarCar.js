import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class EditarCar extends Component {
    path=null;
    url=[];
    carId=null;

    brand =React.createRef();
    model =React.createRef();
    year =React.createRef();
    description =React.createRef();

    state={
        car:[],
        status: null
    }
    componentWillMount(){
        this.path=window.location.pathname;
        console.log(this.path);
        this.url= this.path.split("/");
        console.log(this.url);
        this.carId =this.url[2];
        console.log(this.carId);
        this.getCar(this.carId)
    }

    getCar=(id) =>{
        axios.get("http://localhost:3000/api/Car/"+ id)
            .then(res=>{
                this.setState({
                    car:res.data.car
                })
                console.log(res.data.car)
            })
            .catch(error => {

                console.log(error);

            })

    }
    actualizarCar=(e)=>{
        e.preventDefault();
        console.log(this.brand.current.value);
        var car ={
            brand:this.brand.current.value,
            model:this.model.current.value,
            year:this.year.current.value,
            description:this.description.current.value
        }
        axios.put("http://localhost:3000/api/actualizarCar/"+ this.carId,car)
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
            return <Navigate to="/Cars"/>  
            }
        return (
            <React.Fragment>
                <h1>Editar Vehiculo</h1>
                <form onSubmit={this.actualizarCar}>
                    <div className="mb-3">
                        <label for="marca" className="form-label" >Marca</label>
                        <input type="text" className="form-control" id="marca" defaultValue={this.state.car.brand} ref={this.brand}/>
                    </div>
                    <div className="mb-3">
                        <label for="modelo" className="form-label" >Modelo</label>
                        <input type="text" className="form-control" id="modelo" defaultValue={this.state.car.model} ref={this.model} />
                    </div>
                    <div className="mb-3">
                        <label for="ano" className="form-label"  >Año</label>
                        <input type="number" className="form-control" id="ano" defaultValue={this.state.car.year} ref={this.year} />
                    </div>
                    <div className="mb-3">
                        <label for="descripcion" className="form-label" > Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" defaultValue={this.state.car.description} ref={this.description} />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </React.Fragment>
        );
    }
}

export default EditarCar;