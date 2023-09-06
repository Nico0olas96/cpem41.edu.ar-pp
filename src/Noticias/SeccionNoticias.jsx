import React from 'react';
import imgPreterminada from '../Imagenes/logo Cpem41.jpg'


const SeccionNoticias = ({tituloN, descripcionN, imgN, linkN}) => {


    return (
        <div>
            <div className='noticias_2'>

                <div className='section_1'>

                    {imgN !== '' ? 
                        ( <img src={imgN} alt='imagen de la noticias'/> ) 
                        :
                        ( <img src={imgPreterminada} alt='imagen preterminada'/> ) 
                    }

                    <h3> {tituloN} </h3>
                
                </div>
                
                <p>
                    {descripcionN}
                </p>

                <a href={linkN} target='_blank' className='btn_noticia' rel='noopener noreferrer'> Ir a la Noticia</a>

            </div>
            
        </div>
    );
}

export default SeccionNoticias;
