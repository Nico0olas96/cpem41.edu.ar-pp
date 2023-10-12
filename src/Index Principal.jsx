import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Menu from './Menus/Menu';
import Inicio from './Menus/Inicio';
import Alumnos from './Menus/Alumnos';
import AcuerdosEscolares from './Menus/Acuerdos Escolares';
import Docentes from './Menus/Docentes';

import Cpem41 from './Cpem41';
import Footerr from './Footerr';

import TurnoDiurno from './Alumno/TD/TurnoDiurno';
import TurnoVespertino from './Alumno/TV/TurnoVespertino';

import UsuariosPrincipal from './Usuarios/UsuariosPrincipal';

import PanelPrincipal from './Usuarios/PanelPrincipal';
import PrivateRoute from './Usuarios/PrivateRoute';
import CierreSesscion from './Usuarios/sessionIniciada/Cierre Session';

const IndexPrincipal = () => {

    const [token, setToken] = useState(null)

    useEffect(() =>{
        const recuperarToken = localStorage.getItem('token')
        if (recuperarToken) {
            setToken (recuperarToken)
        }
    }, [])

    const isAuthenticated = !!token

    console.log(isAuthenticated)


  return (
    <div>

            <BrowserRouter>
            <Menu />
            
            <Routes>

                <Route path="/" element={<Cpem41 />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/alumno" element={<Alumnos />} />
                <Route path="/acuerdos-escolares" element={<AcuerdosEscolares />} />
                <Route path="/docentes" element={<Docentes />} />

                <Route path="/Alumno/TD/TurnoDiurno" element={<TurnoDiurno />} />
                <Route path="/Alumno/TV/TurnoVespertino" element={<TurnoVespertino />} />

            

            </Routes> 
            
            <Routes>
                {isAuthenticated ? (
                        <Route path="/Usuarios/PanelPrincipal" element={<PanelPrincipal/>} />
                ) : (
                        <Route path="/Usuarios/UsuariosPrincipal" element={<UsuariosPrincipal />} />
                        
                    )}

            </Routes>

            <Footerr />
            

            </BrowserRouter>
    
    </div>
  );
};

export default IndexPrincipal;
