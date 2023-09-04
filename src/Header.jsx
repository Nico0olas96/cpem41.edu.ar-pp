import React, { Component } from 'react';
import imgLogoEscuela from './img/logo Cpem41.jpg'
import './App.css';


class Header extends Component {
    render() {
        return (
            <div className="conteiner_header container">

                <div className="txt_header">
                    <h1> <span> BIENVENIDO </span> <br /> Sitio oficial del Cpem41</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos exercitationem est non
                        voluptatem iure minus corporis maxime adipisci magnam. Possimus velit quaerat eum minima fuga
                        consectetur in adipisci id maiores.
                    </p>

                    <a href="#" className="btn_1"> Informacion </a>

                </div>

                <div className="img_header">

                    <img src={imgLogoEscuela} alt="Imagen de la escuela"/>

                </div>

            </div>

        );
    }
}


Header.propTypes = {

};


export default Header;
