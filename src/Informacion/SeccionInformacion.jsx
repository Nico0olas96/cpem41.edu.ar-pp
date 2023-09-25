import React from 'react';

/** importamos las imagenes que se van a ir usando / hasta crear la BD */

import imgMesasSeptiembre from '../Imagenes/Mesas/mesas-finalizacion-Septiembre.png'

/** la funcion para cargar la imagen segun corresponda  */

function cargarImagen (imgInformatica) {

    if (imgInformatica === 'septiembre'){
        imgInformatica = imgMesasSeptiembre
    }



    return imgInformatica

}



const InformacionJson = ({tituloI, descriipcionI, imgI, linkI}) => {

    const imgInformatica = cargarImagen (imgI)

    return (
        <div>
            <div className='informacion_container_2'>
                <div className='Informacion_2'>

                    <h3> {tituloI} </h3>

                    {descriipcionI !== '' &&(
                        <p>
                            {descriipcionI}
                        </p>
                    )}

                    {imgI !== '' && (
                        <img src={imgInformatica} className='Informacion_2_img' alt='imagen de la informacion'/>
                    )}

                    {linkI !== '' && (
                        <a href={linkI} className='btn_info' target='__blank' >Click Aqui</a>
                    )}

                </div>

            </div>
            
        </div>
    );
}

export default InformacionJson;
