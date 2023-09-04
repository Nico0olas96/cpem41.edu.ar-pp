
import React, { Component } from 'react'
import './App.css';

import SeccionNoticias from './seccionNoticias';

import noticiasJson from './nocticiasJson.jsx'


export default class Noticias extends Component {

    constructor (props){
        super (props);
        this.state = {
            noticias : noticiasJson,

            noticiasVisibles : 4
        }
    }

    cargarMasContenido = () => {

        this.setState (prevState => ({

            noticiasVisibles : prevState.noticiasVisibles + 4

        }));

    }



  render() {

    const {noticias, noticiasVisibles} = this.state;

    return (
        <div className='noticias container'>
            <h2> Noticias </h2>


            <div className="noticias_container">

                {noticias.slice(0, noticiasVisibles).map((item, index) => (

                    <SeccionNoticias 
                        key={index}
                        tituloNoticias={item.titulo}
                        descripcionNoticias={item.descripcion}
                        imgNoticias={item.img}
                        linkNoticias={item.link}
                    />
                ))}


            </div>

            {noticiasVisibles < noticias.length && (
                <div className="btn_3" onClick={this.cargarMasContenido}> Cargar Mas 
                </div>)}

        </div>




    )
  }
}

