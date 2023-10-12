import React, { useState } from 'react';

import CierreSesscion from './sessionIniciada/Cierre Session'
import CrearPost from './sessionIniciada/CrearPost';



const PanelPrincipal = () => {



    return (
        <div className='iniciosession'>


            <h1> Panel Administrador Publicaciones </h1>

            <CrearPost/>



            
            <CierreSesscion/>
            
        </div>
    );
}

export default PanelPrincipal;
