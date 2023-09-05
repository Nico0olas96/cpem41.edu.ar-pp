import React, { Component } from 'react';

import Header from '../Header'
import Noticias from '../Noticias/Noticias'
import Informacion from '../Informacion/Informacion'

class Inicio extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Noticias/>

                <Informacion/>

            </div>
        );
    }
}

export default Inicio;
