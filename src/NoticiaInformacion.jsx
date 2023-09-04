import React, { Component } from 'react';
import Noticias from './Noticias';
import Informacion from './Informacion';
import Header from './Header';


class NoticiaInformacion extends Component {
    render() {
        
        return (
            <div>
            
                <Header />

                <Noticias/>

                <Informacion/>

            </div>
        );
    }
}



export default NoticiaInformacion;
