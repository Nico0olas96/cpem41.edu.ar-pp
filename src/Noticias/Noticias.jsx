import React, { Component } from 'react';

import NoticiasJson from './NoticiasJson'
import SeccionNoticias from './SeccionNoticias'

class Noticias extends Component {

    constructor (props) {
        super (props);
        this.state = {
            noticias : NoticiasJson ,

            noticiasVesibles : 4

        }
    }


    cargarContenido = () => {
        this.setState (prevState => ({
           noticiasVesibles : prevState.noticiasVesibles + 4  
        }))
    }











    render() {

        const {noticias, noticiasVesibles} = this.state


        return (
            <div>
                <div className='noticias container'>
                
                    <h2> NOTICIAS </h2>

                    <div className='noticias_container'>

                        {noticias.slice(0, noticiasVesibles).map((item, index) => (
                            
                            <SeccionNoticias
                                key={index}
                                tituloN = {item.titulo}
                                descripcionN = {item.descripcion}
                                imgN = {item.img}
                                linkN = {item.link}
                            />
                        ))}               
                
                
                    </div>

                    {noticiasVesibles < noticias.length && (
                        <div className='btn_3' onClick={this.cargarContenido}> Cargar Mas </div>
                    )}                
                
                
                
                
                
                
                
                </div>
                
            </div>
        );
    }
}

export default Noticias;
