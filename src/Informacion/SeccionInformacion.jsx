import React from 'react';

const InformacionJson = ({tituloI, descriipcionI, imgI, linkI}) => {

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
                        <img src={imgI} className='Informacion_2_img' alt='imagen de la informacion'/>
                    )}

                    {linkI !== '' && (
                        <a href={linkI} className='btn_info'>Click Aqui</a>
                    )}

                </div>

            </div>
            
        </div>
    );
}

export default InformacionJson;
