import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Usuarios from "./componentes/Usuarios";
import AgregarUsuario from "./componentes/AgregarUsuario";
import EditarUsuario from "./componentes/EditarUsuario";

import Menu from "./componentes/Menu";

import Gamas from "./componentes/Gamas";
import AgregarGama from "./componentes/AgregarGama";
import EditarGama from "./componentes/EditarGama";

import Mensajes from "./componentes/Mensajes";
import AgregarMensaje from "./componentes/AgregarMensaje";
import EditarMensaje from "./componentes/EditarMensaje";

import Reservas from "./componentes/Reservas";
import AgregarReserva from "./componentes/AgregarReserva";
import EditarReserva from "./componentes/EditarReserva";

import Administradores from "./componentes/Administradores";
import AgregarAdministrador from "./componentes/AgregarAdministrador";
import EditarAdministrador from "./componentes/EditarAdministrador";

import Cars from "./componentes/Cars";
import AgregarCar from "./componentes/AgregarCar";
import EditarCar from "./componentes/EditarCar";

import Score from "./componentes/Score";
import EditarScore from "./componentes/EditarScore";
import AgregarScore from "./componentes/AgregarScore";

class Rutas extends Component {
    render() {
        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<div>HOME</div>} />
                    
                    <Route path="/Users" element={<Usuarios />} />
                    <Route path="/agregarUsuario" element={<AgregarUsuario />} />
                    <Route path="/editarUsuario/:id" element={<EditarUsuario />} />
                   
                    <Route path="/Mensajes" element={<Mensajes />} />
                    <Route path="/agregarMensaje" element={<AgregarMensaje />} />
                    <Route path="/editarMensaje/:id" element={<EditarMensaje />} />
                   
                    <Route path="/Gamas" element={<Gamas />} />
                    <Route path="/agregarGama" element={<AgregarGama />} />
                    <Route path="/editarGama/:id" element={<EditarGama />} />
                

                    <Route path="/Reservas" element={<Reservas />} />
                    <Route path="/agregarReserva" element={<AgregarReserva />} />
                    <Route path="/editarReserva/:id" element={<EditarReserva />} />

                    <Route path="/Administradores" element={<Administradores />} />
                    <Route path="/agregarAdministrador" element={<AgregarAdministrador/>} />
                    <Route path="/editarAdministrador/:id" element={<EditarAdministrador />} />

                    <Route path="/Cars" element={<Cars/>} />
                    <Route path="/agregarCar" element={<AgregarCar />} />
                    <Route path="/editarCar/:id" element={<EditarCar />} />

                    <Route path="/Scores" element={<Score />} />
                    <Route path="/editarScore/:id" element={<EditarScore />} />
                    <Route path="/agregarScore" element={<AgregarScore />} />


                </Routes>

            </BrowserRouter>
        );
    }
}

export default Rutas;