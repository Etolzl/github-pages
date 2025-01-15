import React from 'react';
import './Bienvenida.css';
import logoImage from './assets/imgs/logo.png';
import Navbar from './Navbar'; // Importamos el Navbar

const Bienvenida = () => {
    return (
        <div className="welcome-container">
            <img src={logoImage} alt="Logo del sistema" className="logo" />
            <h1 className="welcome-text">Bienvenido Al Sistema De Administracion Del Condominio</h1>
        </div>
    );
};

export default Bienvenida;
