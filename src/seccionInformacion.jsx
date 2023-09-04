import React from "react";

const SeccionInformacion = ({tituloInformacion, descripcionInformacion, imgInformacion, linkBotonInformacion}) => {

        return (
            <div className='informacion_container_2'>
                <div className='Informacion_2'>

                <h3> {tituloInformacion} </h3>

                {descripcionInformacion !== '' &&(
                    <p> {descripcionInformacion} </p>)}

                    <div>

                        { imgInformacion !== '' && (
                            <img src = {imgInformacion} className="Informacion_2_img" alt="img de informacion"/>)}
                    
                    </div>

                { linkBotonInformacion !== '' && (    
                    <a href={linkBotonInformacion} className="btn_info"> Boton opcional </a> )}
                    

                </div>                
            </div>
        );
    
}


export default SeccionInformacion;
