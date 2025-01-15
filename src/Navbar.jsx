import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para navegación sin recargar la página
import './Navbar.css'; // Estilos específicos para el Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/panel-de-control">Panel de Control</Link></li>
                <li><Link to="/administrar-usuarios">Administrar Usuarios</Link></li>
                <li><Link to="/administrar-pagos">Administrar Pagos</Link></li>
                <li><Link to="/administrar-multas">Administrar Multas</Link></li>
                <li><Link to="/permisos-portones">Permisos de Portones</Link></li>
                <li><Link to="/login">Cerrar Sesión</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
