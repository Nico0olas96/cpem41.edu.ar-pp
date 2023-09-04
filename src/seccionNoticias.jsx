import React from "react";
import imgPreterminada from './img/logo Cpem41.jpg'

const SeccionNoticias = ({imgNoticias, tituloNoticias,descripcionNoticias, linkNoticias}) => {


    return (
        <div>
            <div className="noticias_2">
                <div className="section_1">

                    {imgNoticias !== '' ?( 
                        <img src = {imgNoticias} alt="img de noticias"/>) 
                        :
                        (<img src={imgPreterminada} alt="img preterminada"/>)
                        }

                    <h3> {tituloNoticias} </h3>

                </div>

                <p> {descripcionNoticias}
                </p>

                <a href={linkNoticias} target="_blank" className="btn_noticia" rel="noopener noreferrer"> ir a noticia </a>

            </div>
        </div>
    );
}


export default SeccionNoticias;
