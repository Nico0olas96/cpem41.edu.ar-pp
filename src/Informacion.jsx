import React, { Component } from 'react';

import SeccionInformacion from './seccionInformacion';

import informacionJson from './informacionJson';


class Informacion extends Component {

    constructor (props){

        super();
        this.state = {
            informacion: informacionJson,
            informacionVisible : 4
        }
    }

    cargarMasContenido = () => {

        this.setState (prevState => ({
            informacionVisible : prevState.informacionVisible + 4
        }))

    }


    render() {

        const { informacion, informacionVisible } = this.state

        
        return (
            <div className="informacion container">

                <h2> INFORMACIÓN IMPORTANTE </h2>

                <div className="informacion_container">

                    {informacion.slice(0, informacionVisible).map((item, index) => (
                        <SeccionInformacion
                            key={index}
                            tituloInformacion={item.titulo}
                            descripcionInformacion={item.descripcion}
                            imgInformacion = {item.img}
                            linkBotonInformacion={item.link}
                        />
                    ))}


                </div>

                {informacionVisible < informacion.length &&  (
                    <div class="btn_2" id="load_2" onClick={this.cargarMasContenido} >Cargar Mas</div>)}

            </div>

);
    }
}


export default Informacion;
