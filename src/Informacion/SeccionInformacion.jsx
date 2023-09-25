import React from 'react';

/** importamos las imagenes que se van a ir usando / hasta crear la BD */

import imgMesasSeptiembre from '../Imagenes/Mesas/mesas-finalizacion-Septiembre.png'
import imgMesasAgosto from '../Imagenes/Mesas/mesas-finalizacion-agosto.jpg'
import imgMesasJunio from '../Imagenes/Mesas/mesas finalizacion Junio.png'

/** la funcion para cargar la imagen segun corresponda  */

function cargarImagen (imgInformatica) {

    if (imgInformatica === 'septiembre'){
        imgInformatica = imgMesasSeptiembre
    }
    if (imgInformatica === 'agosto'){
        imgInformatica = imgMesasAgosto
    }
    if (imgInformatica === 'junio'){
        imgInformatica = imgMesasJunio
    }


    return imgInformatica

}



const InformacionJson = ({tituloI, descriipcionI, descripcion2, imgI, linkI, finalI}) => {

    const imgInformatica = cargarImagen (imgI)

    return (
        <div>
            <div className='informacion_container_2'>
                <div className='Informacion_2'>

                    <h3> {tituloI} </h3>

                    {descriipcionI !== '' &&(
                        <p>
                            {descriipcionI} <br/> <br/>
                            {descripcion2} <br/> 
                        </p>
                    )}

                    {imgI !== '' && (
                        <img src={imgInformatica} className='Informacion_2_img' alt='imagen de la informacion'/>
                    )}

                    {linkI !== '' && (
                        <a href={linkI} className='btn_info' target='__blank' >Click Aqui</a>
                    )}

                    <p>
                        {finalI}
                    </p>

                </div>

            </div>
            
        </div>
    );
}

export default InformacionJson;
