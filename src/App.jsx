import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Bienvenida from './Bienvenida';

const App = () => {
    return (
        <Routes>
            {/* Redirige la ruta principal al Login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bienvenida" element={<Bienvenida />} />
        </Routes>
    );
};

export default App;

