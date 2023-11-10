import React, { useState } from 'react';

import CrearPost from './sessionIniciada/CrearPost';
import AdministracionPost from './sessionIniciada/AdministracionPost';
import AdministrarHorarios from './sessionIniciada/AdministrarHorarios';
import AdministrarHorariostv from './sessionIniciada/AdministrarHorariostv';
import AdministrarMesas from './sessionIniciada/AdministrarMesas';
import AdministrarMesastv from './sessionIniciada/AdministrarMesastv';
import Publicaciones from './panel/Publicaciones';
import Horarios from './panel/Horarios';
import Mesas from './panel/Mesas';



const PanelPrincipal = () => {

    const  [seccion, setSeccion] = useState('')

    const cargarSeccionPublicaciones = () =>{
        setSeccion ('publicaciones')
    }

    const cargarSeccionHorarios = () =>{
        setSeccion ('horarios')
    }

    const cargarSeccionMesas = () => {
        setSeccion('mesas')
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
    
    //borrar comentario para el tiempo -->  verificarSession()
    verificarSession()
    

    const cierreSession = () => {
        localStorage.removeItem('token');
        window.location.href = './UsuariosPrincipal';
      };

    return (
        <div className='seccion_menu'>
            <div className='seccion'>

                <h1> Panel Administrador </h1>

                <div className='btn' onClick={cargarSeccionPublicaciones}>
                    Publicaciones
                </div>
                
                <div className='btn' onClick={cargarSeccionHorarios}>
                    Horarios
                </div>
                <div className='btn' onClick={cargarSeccionMesas}>
                    Mesas
                </div>

                <div className='btn' onClick={cierreSession}>
                    Cerrar sesión
                </div>
                                
            </div>


            {seccion === 'publicaciones' && <Publicaciones/>}

            {seccion === 'horarios' && <Horarios/>}

            {seccion === 'mesas' && <Mesas/>}



        </div>
    );
}

export default PanelPrincipal;
