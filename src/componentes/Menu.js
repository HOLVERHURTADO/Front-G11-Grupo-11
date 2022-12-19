import React from "react";

class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/Users" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Usuarios
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/Users">Listar Usuario</a></li>
                                    <li><a className="dropdown-item" href="/agregarUsuario">Agregar Usuario</a></li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/Mensajes" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mensajes
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/Mensajes">Listar Mensajes</a></li>
                                    <li><a className="dropdown-item" href="/agregarMensaje">Agregar Mensaje</a></li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/Gamas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Gamas
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/Gamas">Listar Gamas</a></li>
                                    <li><a className="dropdown-item" href="/agregarGama">Agregar Gama</a></li>

                                </ul>

                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/Cars" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Vehiculos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/Cars">Listar Vehiculos</a></li>
                                    <li><a className="dropdown-item" href="/agregarCar">Agregar Vehiculos</a></li>

                                </ul>

                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/Reservas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Reservas
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/Reservas">Listar Reservas</a></li>
                                    <li><a className="dropdown-item" href="/agregarReserva">Agregar Reservas</a></li>

                                </ul>

                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/Administradores" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Administradores
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/Administradores">Listar Administradores</a></li>
                                    <li><a className="dropdown-item" href="/agregarAdministrador">Agregar Administrador</a></li>

                                </ul>
                            </li>    
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/Scores" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Score
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/Scores">Listar Calificaciones</a></li>
                                    <li><a className="dropdown-item" href="/agregarScore">Calificar</a></li>

                                </ul>
                            </li>


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;