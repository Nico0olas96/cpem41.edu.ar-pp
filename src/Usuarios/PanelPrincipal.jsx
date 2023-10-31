import React, { useState } from 'react';

import CrearPost from './sessionIniciada/CrearPost';
import AdministracionPost from './sessionIniciada/AdministracionPost';



const PanelPrincipal = () => {

    const  [seccion, setSeccion] = useState('')

    const cargarSeccionPost = () =>{
        setSeccion ('crearPost')
    }

    const cargarSeccionModificacion = () =>{
        setSeccion ('modificarPost')
    }


    const verificarSession = () => {
        const tiempoSession = Date.now();

        const finTiempoSession = localStorage.getItem('finTiempoSession');
    
        if (finTiempoSession) {
          if (tiempoSession > finTiempoSession) {
            // La sesión ha expirado, limpia el almacenamiento local
            localStorage.removeItem('token');
            localStorage.removeItem('finTiempoSession');
            // Redirige a la página de inicio de sesión
            window.location.href = './UsuariosPrincipal'; // Reemplaza con la ruta correcta
          }
        }

        console.log("Tiempo", tiempoSession, ">",  "fin", finTiempoSession )

      };
    
    // verificarSession();
      
    

    const cierreSession = () => {
        localStorage.removeItem('token');
        window.location.href = './UsuariosPrincipal';
      };

    return (
        <div className='seccion_menu'>
            <div className='seccion'>

                <h1> Panel Administrador </h1>

                <div className='btn' onClick={cargarSeccionPost}>
                    Subir Publicacion
                </div>
                
                <div className='btn' onClick={cargarSeccionModificacion}>
                    Modificar Publicacion
                </div>

                <div className='btn' onClick={cierreSession}>
                    Cerrar sesión
                </div>
                                
            </div>
            
            {seccion === 'crearPost' &&  <CrearPost/> }

            {seccion === 'modificarPost' && <AdministracionPost/> }



        </div>
    );
}

export default PanelPrincipal;
